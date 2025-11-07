'use client';
import * as React from 'react';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { useServerInsertedHTML } from 'next/navigation';

export default function EmotionRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [{ cache, flush }] = React.useState(() => {
    const cache = createCache({ key: 'mui', prepend: true });

    // Guardamos a ref anterior
    const prevInsert = cache.insert;
    let inserted: string[] = [];

    // Evita uso de ...args (que gerou o erro de tupla)
    cache.insert = function insert(selector, serialized, sheet, shouldCache) {
      // registra o nome para injeção no SSR
      if (!cache.inserted[serialized.name]) {
        inserted.push(serialized.name);
      }
      // chama a função original preservando o this
      // @ts-expect-error: tipos internos do emotion variam por versão
      return prevInsert.call(cache, selector, serialized, sheet, shouldCache);
    };

    const flush = () => {
      const prev = inserted;
      inserted = [];
      return prev;
    };

    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) return null;

    let styles = '';
    for (const name of names) {
      styles += (cache.inserted as any)[name];
    }

    return (
      <style
        data-emotion={`${cache.key} ${names.join(' ')}`}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
