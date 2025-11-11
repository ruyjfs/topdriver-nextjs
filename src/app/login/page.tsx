'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import {
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Snackbar,
  Alert,
  TextField,
  Typography,
  Divider,
  CircularProgress,
} from '@mui/material';
import { Visibility, VisibilityOff, Google } from '@mui/icons-material';

import logo from '@/../public/images/svgs/logo-colors.svg';

// Firebase (cliente)
import { fbAuth } from '@/modules/firebase/firebaseClient';
import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
} from 'firebase/auth';

// (Opcional) Player na hero sem SSR quebrar (se quiser manter a vibe da home)
// const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

export default function LoginPage() {
  const router = useRouter();
  const search = useSearchParams();
  const redirectTo = search.get('redirect') || '/dashboard';

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  // Se já logado, redireciona
  useEffect(() => {
    const unsub = onAuthStateChanged(fbAuth, (u) => {
      if (u) router.replace(redirectTo);
    });
    return () => unsub();
  }, [router, redirectTo]);

  async function handleEmailLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setErr(null);
    try {
      await setPersistence(
        fbAuth,
        remember ? browserLocalPersistence : browserSessionPersistence
      );
      await signInWithEmailAndPassword(fbAuth, email.trim(), pass);
      router.replace(redirectTo);
    } catch (error: any) {
      setErr(mapFirebaseError(error?.code || 'auth/unknown'));
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogle() {
    setLoading(true);
    setErr(null);
    try {
      await setPersistence(
        fbAuth,
        remember ? browserLocalPersistence : browserSessionPersistence
      );
      const provider = new GoogleAuthProvider();
      await signInWithPopup(fbAuth, provider);
      router.replace(redirectTo);
    } catch (error: any) {
      setErr(mapFirebaseError(error?.code || 'auth/unknown'));
      setLoading(false);
    }
  }

  return (
    <main className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-10">
      <div className="absolute inset-0 -z-10">
        {/* background sutil (pode trocar por sua arte/carbon fiber) */}
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black" />
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Lado esquerdo (branding) */}
        <div className="flex flex-col items-center text-center gap-5">
          <Image src={logo} alt="TopDriver" width={140} height={140} priority />
          <Typography variant="h3" fontWeight={800}>
            TopDriver
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.85 }}>
            Entre para a rede dos apaixonados por carros. Clubes, fóruns,
            garagem e a futura Wiki de Carros com dicas reais de donos.
          </Typography>

          {/* Opcional: teaser em vídeo mudo */}
          {/* <div className="hidden lg:block w-full max-w-md rounded-2xl overflow-hidden border border-white/10">
            <div className="relative" style={{ paddingTop: '56.25%' }}>
              <div className="absolute inset-0">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=KAcBXo2gygA"
                  playing
                  muted
                  loop
                  width="100%"
                  height="100%"
                  controls={false}
                  config={{
                    youtube: { playerVars: { rel: 0, modestbranding: 1 } },
                  }}
                />
              </div>
            </div>
          </div> */}
        </div>

        {/* Card de Login */}
        <Card
          sx={{
            backdropFilter: 'blur(14px)',
            backgroundColor: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '18px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.35)',
          }}
        >
          <CardContent className="p-6 md:p-8">
            <Typography variant="h5" fontWeight={700} className="mb-2">
              Entrar
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.75 }} className="mb-4">
              Acesse sua conta para explorar clubes, fóruns e sua garagem.
            </Typography>

            <form onSubmit={handleEmailLogin} className="space-y-3">
              <TextField
                label="E-mail"
                type="email"
                fullWidth
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <TextField
                label="Senha"
                type={showPass ? 'text' : 'password'}
                fullWidth
                required
                autoComplete="current-password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={() => setShowPass((s) => !s)}
                        aria-label="Mostrar senha"
                      >
                        {showPass ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <div className="flex items-center justify-between">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                    />
                  }
                  label="Manter conectado"
                />
                <Button
                  component={Link as any}
                  href="/recuperar-senha"
                  variant="text"
                  size="small"
                >
                  Esqueci minha senha
                </Button>
              </div>

              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                disabled={loading}
                startIcon={
                  loading ? (
                    <CircularProgress size={18} color="inherit" />
                  ) : null
                }
              >
                {loading ? 'Entrando...' : 'Entrar'}
              </Button>
            </form>

            <Divider className="!my-4">ou</Divider>

            <Button
              onClick={handleGoogle}
              variant="outlined"
              size="large"
              fullWidth
              startIcon={<Google />}
              disabled={loading}
            >
              Entrar com Google
            </Button>

            <Typography
              variant="body2"
              className="mt-4 text-center"
              sx={{ opacity: 0.8 }}
            >
              Novo por aqui?{' '}
              <Button
                component={Link as any}
                href="/register"
                variant="text"
                size="small"
              >
                Crie sua conta
              </Button>
            </Typography>
          </CardContent>
        </Card>
      </div>

      <Snackbar
        open={!!err}
        autoHideDuration={6000}
        onClose={() => setErr(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="error" variant="filled" onClose={() => setErr(null)}>
          {err}
        </Alert>
      </Snackbar>
    </main>
  );
}

function mapFirebaseError(code: string): string {
  switch (code) {
    case 'auth/invalid-email':
      return 'E-mail inválido.';
    case 'auth/user-not-found':
    case 'auth/wrong-password':
      return 'Credenciais inválidas. Verifique e tente novamente.';
    case 'auth/too-many-requests':
      return 'Muitas tentativas. Tente novamente em instantes.';
    case 'auth/popup-closed-by-user':
      return 'Login cancelado.';
    default:
      return 'Não foi possível entrar agora. Tente novamente.';
  }
}
