'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import {
  Button,
  IconButton,
  Slider,
  Tooltip,
  List,
  ListItemButton,
  ListItemText,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import {
  PlayArrow,
  Pause,
  SkipNext,
  SkipPrevious,
  Loop,
  Shuffle,
  VolumeUp,
  VolumeOff,
} from '@mui/icons-material';

import logo from '@/../public/images/svgs/logo-colors.svg';

// Import dinâmico para evitar problemas de SSR no Next.js
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const playlist = [
  { id: 'pshfBLj25Vs', name: 'HipHop - 60 Seconds Flowers' },
  { id: 'hKnk1p7ZU6E', name: 'Antigas - 60 Seconds - Low Rider' },
  {
    id: 'ubWL8VAPoYw',
    name: 'HipHop - NFS Underground 2 - Riders on the Storm',
  },
  { id: 'KAcBXo2gygA', name: 'Driver - Test Mission' },
  { id: 'AhZQhix62VY', name: 'Gran Turismo' },
  { id: 'ml-O4xDfZrU', name: 'Driver 4 - Yeah Yeah Yeahs' },
  { id: 'lhTaFqyP-Kw', name: 'Antigas - Driver 4 - Marvin Gaye - Trouble Man' },
  {
    id: 'swYUBNqJFhU',
    name: "Antigas - Driver 4 - The Jackson 5 - I'll Bet You",
  },
  {
    id: 'nXiQtD5gcHU',
    name: 'Antigas - Driver 4 - The Temptations - Papa Was A Rolling Stone',
  },
  {
    id: 'IAYsNfg7-yg',
    name: 'Antigas - The Animals - House of the Rising Sun',
  },
  { id: 'oK6ZTcGkW4M', name: 'Antigas - NFS - Riders on the Storm' },
  { id: 'nDl7ZhudkRg', name: 'Antigas - Driver 4 - Can • Dizzy Dizzy • 1974' },
  {
    id: 'oRMJoBu_kKM',
    name: 'Antigas - Driver 4 - Blondie - One Way Or Another',
  },
  {
    id: 'P9_hegaKOaY',
    name: 'Driver 3 - Iggy Pop & The Stooges - Gimme Danger',
  },
  { id: 't4BaaEeGmJk', name: 'Rock - Iggy Pop - The Passenger' },
  { id: 'okihP_CSuWA', name: 'Driver 3 - Apenas sinta' },
  { id: '5RvNtzE_FAA', name: 'Driver 3 - Destiny by Syntax' },
  { id: 'VS_C-Knke6g', name: 'Driver 3 - Big Brat by Phantom Planet' },
  { id: 'iPuWzwwkbCU', name: 'Driver 3 - Main Title' },
  { id: 'FI-DOZU7rbc', name: 'Antigas 2 - Drive Theme' },
  { id: 'UItt_NMBgRk', name: '60 Seconds - Romantic' },
  { id: 'lp4i6Yr8IqQ', name: 'Driver 2' },
  { id: 'b0Jy6UodU9s', name: 'Driver - Test Mission' },
  { id: 'QtIdeQVu9oM', name: 'Drive - Tick Of The Clock' },
  { id: 'OHDqV1BEiqw', name: 'Drive' },
  { id: '0tVWvzRYfP0', name: 'Music' },
];

function ytUrl(id: string) {
  return `https://www.youtube.com/watch?v=${id}`;
}

export default function HomeScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(false); // autoplay consistente inicia mutado
  const [volume, setVolume] = useState(0.8);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);

  const playerRef = useRef<any>(null);

  const url = useMemo(() => ytUrl(playlist[currentIndex].id), [currentIndex]);

  const next = useCallback(() => {
    if (shuffle) {
      const nextIdx = Math.floor(Math.random() * playlist.length);
      setCurrentIndex(nextIdx);
    } else {
      setCurrentIndex((i) => (i + 1) % playlist.length);
    }
  }, [shuffle]);

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + playlist.length) % playlist.length);
  }, []);

  const onEnded = useCallback(() => {
    if (repeat) {
      // reinicia o mesmo vídeo
      playerRef.current?.seekTo(0, 'seconds');
      setPlaying(true);
    } else {
      next();
    }
  }, [next, repeat]);

  const onSeek = (_: Event, value: number | number[]) => {
    const v = Array.isArray(value) ? value[0] : value;
    if (!duration) return;
    const seconds = (v / 100) * duration;
    playerRef.current?.seekTo(seconds, 'seconds');
    setProgress(v);
  };

  const onVolume = (_: Event, value: number | number[]) => {
    const v = Array.isArray(value) ? value[0] : value;
    setVolume(v / 100);
    if (v > 0 && muted) setMuted(false);
  };

  const onReady = useCallback(() => {
    // para YouTube, força o play via IFrame API (alguns browsers exigem)
    try {
      const yt = playerRef.current?.getInternalPlayer();
      yt?.playVideo?.();
    } catch {}
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setPlaying(true);
      onReady();
      console.log('FOI');
    }, 4000);
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 flex-1 flex flex-col gap-8">
      <div className="flex flex-col items-center gap-4">
        <Image src={logo} alt="TopDriver" width={380} height={380} priority />
        {/* <Chip
          label="A rede dos apaixonados por carros"
          color="primary"
          variant="outlined"
        /> */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* PLAYER */}
        <Card className="lg:col-span-2 shadow-lg">
          <CardContent className="space-y-4">
            <div className="relative w-full overflow-hidden rounded-2xl ">
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <div className="absolute inset-0">
                  <ReactPlayer
                    ref={playerRef}
                    src={url}
                    width="100%"
                    height="100%"
                    playing={playing}
                    muted={muted}
                    volume={volume}
                    controls
                    // playsinline
                    onReady={onReady}
                    onEnded={onEnded}
                    // onDuration={(d) => setDuration(d)}
                    // onProgress={({ played }) => setProgress(played * 100)}
                    config={{
                      youtube: {
                        // playerVars: {
                        //   rel: 0,
                        //   modestbranding: 1,
                        //   iv_load_policy: 3,
                        //   origin:
                        //     typeof window !== 'undefined'
                        //       ? window.location.origin
                        //       : undefined,
                        // },
                      },
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Título atual */}
            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold">
                {playlist[currentIndex].name}
              </div>
              <div className="text-sm opacity-70">
                #{currentIndex + 1} / {playlist.length}
              </div>
            </div>

            {/* Controles */}
            <div className="flex items-center gap-2">
              <Tooltip title={shuffle ? 'Shuffle ligado' : 'Ativar shuffle'}>
                <IconButton
                  onClick={() => setShuffle((s) => !s)}
                  color={shuffle ? 'primary' : 'default'}
                >
                  <Shuffle />
                </IconButton>
              </Tooltip>

              <IconButton onClick={prev}>
                <SkipPrevious />
              </IconButton>

              <IconButton onClick={() => setPlaying((p) => !p)} color="primary">
                {playing ? <Pause /> : <PlayArrow />}
              </IconButton>

              <IconButton onClick={next}>
                <SkipNext />
              </IconButton>

              <Tooltip title={repeat ? 'Repeat ligado' : 'Ativar repeat'}>
                <IconButton
                  onClick={() => setRepeat((r) => !r)}
                  color={repeat ? 'primary' : 'default'}
                >
                  <Loop />
                </IconButton>
              </Tooltip>

              <div className="ml-auto flex items-center gap-2 w-48">
                <IconButton onClick={() => setMuted((m) => !m)}>
                  {muted || volume === 0 ? <VolumeOff /> : <VolumeUp />}
                </IconButton>
                <Slider
                  aria-label="Volume"
                  size="small"
                  value={muted ? 0 : Math.round(volume * 100)}
                  onChange={onVolume}
                />
              </div>
            </div>

            {/* Barra de progresso */}
            <Slider
              aria-label="Progresso"
              value={progress}
              onChange={onSeek}
              size="small"
            />
          </CardContent>
        </Card>

        {/* PLAYLIST */}
        {/* <Card className="shadow-lg backdrop-blur supports-[backdrop-filter]:bg-slate-100/20 bg-white-500">
          <CardContent>
            <div className="text-sm mb-2 opacity-70 ">Playlist</div>
            <List dense disablePadding>
              {playlist.map((item, idx) => (
                <ListItemButton
                  key={item.id}
                  selected={idx === currentIndex}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setPlaying(true);
                  }}
                >
                  <ListItemText
                    primary={item.name}
                    secondary={`#${idx + 1}`}
                    primaryTypographyProps={{
                      className: idx === currentIndex ? 'font-semibold' : '',
                    }}
                  />
                </ListItemButton>
              ))}
            </List>
          </CardContent>
        </Card> */}
      </div>

      <nav className="flex items-center justify-center gap-4">
        <Button component={Link as any} href="/sobre" variant="outlined">
          Entre
        </Button>
        <Button component={Link as any} href="/sobre" variant="outlined">
          Cadastre-se
        </Button>
      </nav>
    </section>
  );
}
