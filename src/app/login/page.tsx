// "use client";

// import { useEffect, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import dynamic from "next/dynamic";

// import {
//   Button,
//   Card,
//   CardContent,
//   Checkbox,
//   FormControlLabel,
//   IconButton,
//   InputAdornment,
//   Snackbar,
//   Alert,
//   TextField,
//   Typography,
//   Divider,
//   CircularProgress,
// } from "@mui/material";
// import { Visibility, VisibilityOff, Google } from "@mui/icons-material";

// import logo from "@/../public/images/svgs/logo-colors.svg";

// // Firebase (cliente)
// // import { fbAuth } from '@/modules/firebase/firebaseClient';
// // import {
// //   onAuthStateChanged,
// //   GoogleAuthProvider,
// //   signInWithPopup,
// //   signInWithEmailAndPassword,
// //   setPersistence,
// //   browserLocalPersistence,
// //   browserSessionPersistence,
// // } from 'firebase/auth';

// // (Opcional) Player na hero sem SSR quebrar (se quiser manter a vibe da home)
// // const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

// export default function LoginPage() {
//   const router = useRouter();
//   const search = useSearchParams();
//   const redirectTo = search.get("redirect") || "/dashboard";

//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState("");
//   const [showPass, setShowPass] = useState(false);
//   const [remember, setRemember] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [err, setErr] = useState<string | null>(null);

//   // Se já logado, redireciona
//   // useEffect(() => {
//   //   const unsub = onAuthStateChanged(fbAuth, (u) => {
//   //     if (u) router.replace(redirectTo);
//   //   });
//   //   return () => unsub();
//   // }, [router, redirectTo]);

//   // async function handleEmailLogin(e: React.FormEvent<HTMLFormElement>) {
//   //   e.preventDefault();
//   //   setLoading(true);
//   //   setErr(null);
//   //   try {
//   //     await setPersistence(
//   //       fbAuth,
//   //       remember ? browserLocalPersistence : browserSessionPersistence,
//   //     );
//   //     await signInWithEmailAndPassword(fbAuth, email.trim(), pass);
//   //     router.replace(redirectTo);
//   //   } catch (error: any) {
//   //     setErr(mapFirebaseError(error?.code || "auth/unknown"));
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // }

//   // async function handleGoogle() {
//   //   setLoading(true);
//   //   setErr(null);
//   //   try {
//   //     await setPersistence(
//   //       fbAuth,
//   //       remember ? browserLocalPersistence : browserSessionPersistence,
//   //     );
//   //     const provider = new GoogleAuthProvider();
//   //     await signInWithPopup(fbAuth, provider);
//   //     router.replace(redirectTo);
//   //   } catch (error: any) {
//   //     setErr(mapFirebaseError(error?.code || "auth/unknown"));
//   //     setLoading(false);
//   //   }
//   // }

//   return (
//     <main className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-10">
//       <div className="absolute inset-0 -z-10">
//         {/* background sutil (pode trocar por sua arte/carbon fiber) */}
//         <div className="h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black" />
//       </div>

//       <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//         {/* Lado esquerdo (branding) */}
//         <div className="flex flex-col items-center text-center gap-5">
//           <Image src={logo} alt="TopDriver" width={140} height={140} priority />
//           <Typography variant="h3" fontWeight={800}>
//             TopDriver
//           </Typography>
//           <Typography variant="body1" sx={{ opacity: 0.85 }}>
//             Entre para a rede dos apaixonados por carros. Clubes, fóruns,
//             garagem e a futura Wiki de Carros com dicas reais de donos.
//           </Typography>

//           {/* Opcional: teaser em vídeo mudo */}
//           {/* <div className="hidden lg:block w-full max-w-md rounded-2xl overflow-hidden border border-white/10">
//             <div className="relative" style={{ paddingTop: '56.25%' }}>
//               <div className="absolute inset-0">
//                 <ReactPlayer
//                   url="https://www.youtube.com/watch?v=KAcBXo2gygA"
//                   playing
//                   muted
//                   loop
//                   width="100%"
//                   height="100%"
//                   controls={false}
//                   config={{
//                     youtube: { playerVars: { rel: 0, modestbranding: 1 } },
//                   }}
//                 />
//               </div>
//             </div>
//           </div> */}
//         </div>

//         {/* Card de Login */}
//         <Card
//           sx={{
//             backdropFilter: "blur(14px)",
//             backgroundColor: "rgba(255,255,255,0.08)",
//             border: "1px solid rgba(255,255,255,0.15)",
//             borderRadius: "18px",
//             boxShadow: "0 10px 40px rgba(0,0,0,0.35)",
//           }}
//         >
//           <CardContent className="p-6 md:p-8">
//             <Typography variant="h5" fontWeight={700} className="mb-2">
//               Entrar
//             </Typography>
//             <Typography variant="body2" sx={{ opacity: 0.75 }} className="mb-4">
//               Acesse sua conta para explorar clubes, fóruns e sua garagem.
//             </Typography>

//             <form onSubmit={handleEmailLogin} className="space-y-3">
//               <TextField
//                 label="E-mail"
//                 type="email"
//                 fullWidth
//                 required
//                 autoComplete="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />

//               <TextField
//                 label="Senha"
//                 type={showPass ? "text" : "password"}
//                 fullWidth
//                 required
//                 autoComplete="current-password"
//                 value={pass}
//                 onChange={(e) => setPass(e.target.value)}
//                 InputProps={{
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <IconButton
//                         edge="end"
//                         onClick={() => setShowPass((s) => !s)}
//                         aria-label="Mostrar senha"
//                       >
//                         {showPass ? <VisibilityOff /> : <Visibility />}
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                 }}
//               />

//               <div className="flex items-center justify-between">
//                 <FormControlLabel
//                   control={
//                     <Checkbox
//                       checked={remember}
//                       onChange={(e) => setRemember(e.target.checked)}
//                     />
//                   }
//                   label="Manter conectado"
//                 />
//                 <Button
//                   component={Link as any}
//                   href="/recuperar-senha"
//                   variant="text"
//                   size="small"
//                 >
//                   Esqueci minha senha
//                 </Button>
//               </div>

//               <Button
//                 type="submit"
//                 variant="contained"
//                 size="large"
//                 fullWidth
//                 disabled={loading}
//                 startIcon={
//                   loading ? (
//                     <CircularProgress size={18} color="inherit" />
//                   ) : null
//                 }
//               >
//                 {loading ? "Entrando..." : "Entrar"}
//               </Button>
//             </form>

//             <Divider className="!my-4">ou</Divider>

//             <Button
//               onClick={handleGoogle}
//               variant="outlined"
//               size="large"
//               fullWidth
//               startIcon={<Google />}
//               disabled={loading}
//             >
//               Entrar com Google
//             </Button>

//             <Typography
//               variant="body2"
//               className="mt-4 text-center"
//               sx={{ opacity: 0.8 }}
//             >
//               Novo por aqui?{" "}
//               <Button
//                 component={Link as any}
//                 href="/register"
//                 variant="text"
//                 size="small"
//               >
//                 Crie sua conta
//               </Button>
//             </Typography>
//           </CardContent>
//         </Card>
//       </div>

//       <Snackbar
//         open={!!err}
//         autoHideDuration={6000}
//         onClose={() => setErr(null)}
//         anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
//       >
//         <Alert severity="error" variant="filled" onClose={() => setErr(null)}>
//           {err}
//         </Alert>
//       </Snackbar>
//     </main>
//   );
// }

// function mapFirebaseError(code: string): string {
//   switch (code) {
//     case "auth/invalid-email":
//       return "E-mail inválido.";
//     case "auth/user-not-found":
//     case "auth/wrong-password":
//       return "Credenciais inválidas. Verifique e tente novamente.";
//     case "auth/too-many-requests":
//       return "Muitas tentativas. Tente novamente em instantes.";
//     case "auth/popup-closed-by-user":
//       return "Login cancelado.";
//     default:
//       return "Não foi possível entrar agora. Tente novamente.";
//   }
// }

// 'use client';
import Header from "@/components/layouts/Header";
import { Card, CardContent, Chip, Button } from "@mui/material";
import { Metadata } from "next";
// import Link from 'next/link';

export const metadata: Metadata = {
  title: "Cadastro",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-12 space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight">
          Religare Atomic App ⚛️
        </h1>
        <p className="text-muted-foreground">
          🌌 Conecte-se com o essencial. <br />
          💫 A sua jornada de autodesenvolvimento começa aqui. <br />
          #ReligareAtomicApp
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Por que o Religare existe?</h2>
        <p>
          A tecnologia elevou nossas possibilidades, e também a cobrança por
          vidas “perfeitas”. Na realidade, cada pessoa carrega sentimentos,
          dúvidas e histórias que nem sempre é fácil expor. O{" "}
          <strong>Religare</strong> nasce para oferecer um espaço seguro de
          expressão, acolhimento e crescimento, sem julgamentos e com{" "}
          <strong>anonimato</strong> por padrão.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">O que você encontra no app</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>🔮 Interpretação de sonhos com IA:</strong> entenda o que o
            seu subconsciente está tentando comunicar, com análises simbólicas e
            psicológicas guiadas por inteligência artificial.
          </li>
          <li>
            <strong>📚 Artigos transformadores:</strong> conteúdos para
            desenvolver sua{" "}
            <em>inteligência emocional, alimentar, financeira, espiritual</em> e
            comportamental, ajudando você a se tornar um{" "}
            <strong>adulto funcional</strong> e emocionalmente maduro.
          </li>
          <li>
            <strong>🌺 Exponha seus problemas, não você:</strong> compartilhe de
            forma anônima e receba apoio real.
          </li>
          <li>
            <strong>💌 Mensagens diárias:</strong> conteúdos curtos para
            inspirar e reorganizar o dia.
          </li>
          <li>
            <strong>📓 Diário de sentimentos e sonhos:</strong> registre
            emoções, gatilhos, insights e acompanhe sua evolução.
          </li>
          <li>
            <strong>💕 Ajude outras pessoas:</strong> pratique empatia e deixe
            uma palavra de suporte para quem precisa.
          </li>
          <li>
            <strong>🗝 Anonimato sempre:</strong> sua identidade é protegida; a
            história é sua, a exposição não precisa ser.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          Novidades &amp; em desenvolvimento
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          {/* <li>
            <strong>🏆 Gamificação:</strong> pontos por boas ações, conquistas e{' '}
            <em>rankings</em> semanais/mensais para destacar quem mais ajuda.
          </li> */}
          <li>
            <strong>🧭 Trilhas de crescimento:</strong> corpo, mente e espírito;
            inteligência alimentar e financeira; hábitos; treinos; meditação;
            artigos práticos — com curadoria e exercícios guiados.
          </li>
          <li>
            <strong>🤖 Assistentes com IA:</strong> apoio emocional, nutrição e
            treino (orientações gerais e educacionais).
          </li>
          <li>
            <strong>🔔 Notificações personalizadas:</strong> lembretes
            inteligentes para manter consistência.
          </li>
          {/* <li>
            <strong>🖼 Imagens padronizadas nos artigos:</strong> visual
            consistente para facilitar leitura e compartilhamento.
          </li> */}
          {/* <li>
            <strong>💳 Assinaturas acessíveis:</strong> planos para liberar
            conteúdos e trilhas premium (ex.: Essencial a partir de R$
            18,45/mês).
          </li> */}
          <li>
            <strong>🔬 Laboratório:</strong> recursos opcionais como
            astrologia/tarot, sempre com linguagem respeitosa e uso 100%
            facultativo.
          </li>
        </ul>
        <p className="text-sm text-muted-foreground">
          *Algumas funcionalidades podem estar em piloto ou sendo lançadas por
          etapas.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Nosso ponto de vista</h2>
        <p>
          A depressão é uma das maiores causas de incapacidade no mundo e o
          suicídio tira uma vida a cada poucos instantes. Acreditamos que dar
          linguagem aos nossos sentimentos, e oferecer uma rede de apoio
          compassiva, muda histórias. Ao ajudar o outro, também nos
          transformamos.
        </p>
        <p>
          Autoconhecimento é prática: registrar, refletir, metabolizar emoções e
          agir com pequenas melhorias diárias. O Religare quer ser seu
          companheiro nesse processo.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Privacidade &amp; segurança</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Anonimato por padrão; sem exposição de dados pessoais.</li>
          <li>Moderação assistida por IA e curadoria humana.</li>
          <li>
            Diretrizes de comunidade que incentivam respeito e apoio genuíno.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Como participar</h2>
        <p>
          Estamos construindo o Religare junto com a comunidade. Baixe o app,
          experimente as trilhas, deixe seu feedback e, se puder, ajude alguém
          hoje. Esse é o movimento. 💌
        </p>

        {/* Exemplo de CTA simples; ajuste rotas/links conforme seu app */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-medium shadow-sm ring-1 ring-black/5 hover:shadow-md"
          >
            Baixar o app
          </a>
          {/* <a
            href="/comunidade"
            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-medium bg-black text-white hover:opacity-90"
          >
            Entrar na comunidade
          </a> */}
        </div>
      </section>
    </main>
  );
}
