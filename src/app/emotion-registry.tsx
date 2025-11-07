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
    const prevInsert = cache.insert;
    let inserted: string[] = [];

    cache.insert = function insert(
      selector: any,
      serialized: any,
      sheet: any,
      shouldCache?: boolean
    ) {
      if (!cache.inserted[serialized.name]) {
        inserted.push(serialized.name);
      }
      // Chama a função original preservando o contexto
      return (prevInsert as any).call(
        cache,
        selector,
        serialized,
        sheet,
        shouldCache
      );
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
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
