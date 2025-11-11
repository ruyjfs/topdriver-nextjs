'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  Chip,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  DirectionsCar,
  Forum,
  PeopleAlt,
  Favorite,
  PhotoLibrary,
  Security,
  Insights,
  EmojiEvents,
  LibraryBooks,
  TipsAndUpdates,
  ModeEdit,
  Map,
} from '@mui/icons-material';

import logo from '@/../public/images/svgs/logo-colors.svg';
import { Metadata } from 'next';
import BackgroundParticles from '@/components/layouts/Particles';

// export const metadata: Metadata = {
//   title: 'Sobre',
// };

export default function AboutTopDriverPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <BackgroundParticles />
      {/* Hero */}
      <section className="flex flex-col items-center text-center gap-5">
        <Image src={logo} alt="TopDriver" width={500} height={500} priority />
        {/* <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          TopDriver
        </h1> */}
        <p className="text-lg md:text-xl opacity-80 max-w-3xl">
          A rede dos apaixonados por carros. Crie <strong>Clubes</strong>,
          participe de
          <strong> Fóruns</strong>, exponha sua <strong>Garagem</strong> e
          descubra opiniões reais de donos sobre cada modelo.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Chip
            label="Comunidades de carros"
            color="primary"
            variant="outlined"
          />
          <Chip label="Fóruns por Clube" color="primary" variant="outlined" />
          <Chip label="Garagem do Usuário" color="primary" variant="outlined" />
          <Chip label="Wiki de Carros" color="primary" variant="outlined" />
        </div>
      </section>

      <div className="h-8" />

      {/* Missão */}
      <Card
        sx={{
          backdropFilter: 'blur(12px)',
          backgroundColor: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: '16px',
        }}
      >
        <CardContent className="space-y-3">
          <h2 className="text-2xl font-bold">Nossa missão</h2>
          <p className="opacity-90">
            Conectar pessoas que amam carros, criando um espaço acolhedor e
            organizado para compartilhar experiências, resolver dúvidas,
            planejar encontros e construir conhecimento coletivo sobre
            manutenção, preparação, consumo e tudo o que envolve o universo
            automotivo.
          </p>
        </CardContent>
      </Card>

      <div className="h-10" />

      {/* O que você pode fazer */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          sx={{
            backdropFilter: 'blur(12px)',
            backgroundColor: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '16px',
          }}
        >
          <CardContent>
            <h3 className="text-xl font-semibold mb-2">
              O que você pode fazer
            </h3>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <PeopleAlt />
                </ListItemIcon>
                <ListItemText
                  primary="Criar e participar de Clubes"
                  secondary="Clubes por marca, modelo, geração, estilo (JDM, Muscle, Off-road) e região."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Forum />
                </ListItemIcon>
                <ListItemText
                  primary="Discutir nos Fóruns do clube"
                  secondary="Tópicos organizados por categorias: manutenção, upgrades, compra/venda, eventos."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <DirectionsCar />
                </ListItemIcon>
                <ListItemText
                  primary="Montar sua Garagem"
                  secondary="Cadastre seus carros, fotos, mods e histórico. Inspire a comunidade."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PhotoLibrary />
                </ListItemIcon>
                <ListItemText
                  primary="Compartilhar fotos e projetos"
                  secondary="Timelines com builds, antes/depois, track days e rolezinhos."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LibraryBooks />
                </ListItemIcon>
                <ListItemText
                  primary="Explorar a Wiki de Carros (em evolução)"
                  secondary="Páginas por modelo, ficha técnica, dicas de donos e referências."
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>

        <Card
          sx={{
            backdropFilter: 'blur(12px)',
            backgroundColor: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '16px',
          }}
        >
          <CardContent>
            <h3 className="text-xl font-semibold mb-2">Diferenciais</h3>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <Insights />
                </ListItemIcon>
                <ListItemText
                  primary="Conteúdo orientado por donos"
                  secondary="Feedbacks reais, prós/cons, custos e macetes de quem vive com o carro."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EmojiEvents />
                </ListItemIcon>
                <ListItemText
                  primary="Gamificação saudável"
                  secondary="Badges por participação, tópicos relevantes e ajuda à comunidade."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Security />
                </ListItemIcon>
                <ListItemText
                  primary="Privacidade e respeito"
                  secondary="Sem placa visível, sem dado sensível. Moderação e LGPD como base."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Favorite />
                </ListItemIcon>
                <ListItemText
                  primary="Foco na experiência"
                  secondary="Feed limpo, visual moderno e performance para desktop e mobile."
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </section>

      <div className="h-10" />

      {/* Como funciona */}
      <Card
        sx={{
          backdropFilter: 'blur(12px)',
          backgroundColor: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: '16px',
        }}
      >
        <CardContent className="space-y-4">
          <h3 className="text-xl font-semibold">Como funciona</h3>
          <ol className="list-decimal pl-5 space-y-2 opacity-90">
            <li>
              Crie sua conta e personalize o perfil (marcas favoritas, região).
            </li>
            <li>Entre em clubes existentes ou crie o seu (público/privado).</li>
            <li>
              Participe dos fóruns: faça perguntas, poste projetos, compartilhe
              fotos.
            </li>
            <li>
              Cadastre sua garagem: modelo, ano, mods e relatos do dia a dia.
            </li>
            <li>
              Explore a Wiki de Carros e contribua com dicas de dono (moderação
              ativa).
            </li>
          </ol>
          <Divider className="!my-3" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FeatureCard
              icon={<Map />}
              title="Eventos e encontros"
              description="Descubra rolezinhos e track days na sua cidade (em breve)."
            />
            <FeatureCard
              icon={<ModeEdit />}
              title="Editor de projetos"
              description="Documente mods e manutenções com etapas e custos (em breve)."
            />
            <FeatureCard
              icon={<TipsAndUpdates />}
              title="Recomendações"
              description="Sugestões de threads, clubes e modelos conforme seu perfil."
            />
          </div>
        </CardContent>
      </Card>

      <div className="h-10" />

      {/* Roadmap */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <RoadmapCard
          title="MVP"
          items={[
            'Auth + Perfil',
            'Clubes + Membros',
            'Fóruns por Clube',
            'Garagem do Usuário',
            'Upload de fotos',
          ]}
        />
        <RoadmapCard
          title="Beta"
          items={[
            'Likes/menções/notificações',
            'Busca rápida por modelo/clubes',
            'Moderadores por clube',
            'Página de modelo (início da Wiki)',
          ]}
        />
        <RoadmapCard
          title="Próximos"
          items={[
            'Eventos/meetups',
            'Editor de projetos detalhado',
            'Wiki colaborativa completa',
            'Parcerias e integrações',
          ]}
        />
      </section>

      <div className="h-10" />

      {/* Privacidade */}
      <Card
        sx={{
          backdropFilter: 'blur(12px)',
          backgroundColor: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: '16px',
        }}
      >
        <CardContent className="space-y-3">
          <h3 className="text-xl font-semibold">Privacidade e respeito</h3>
          <p className="opacity-90">
            Levamos a sério a segurança da comunidade: não exiba placas ou dados
            sensíveis dos veículos; denuncie abusos; e lembre-se de que toda
            contribuição pode ajudar alguém a fazer a escolha certa. O objetivo
            é compartilhar conhecimento, não expor pessoas.
          </p>
        </CardContent>
      </Card>

      <div className="h-10" />

      {/* CTA */}
      <div className="flex items-center justify-center gap-3">
        {/* <Button
          href="/register"
          component={Link as any}
          variant="contained"
          size="large"
        >
          Começar agora
        </Button>
        <Button
          href="/clubs"
          component={Link as any}
          variant="outlined"
          size="large"
        >
          Explorar Clubes
        </Button> */}
        <Button
          href="/"
          component={Link as any}
          variant="outlined"
          size="large"
        >
          Voltar
        </Button>
      </div>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card
      sx={{
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: '16px',
        height: '100%',
      }}
    >
      <CardContent className="flex gap-3">
        <div className="mt-0.5">{icon}</div>
        <div>
          <div className="font-semibold">{title}</div>
          <div className="opacity-80 text-sm">{description}</div>
        </div>
      </CardContent>
    </Card>
  );
}

function RoadmapCard({ title, items }: { title: string; items: string[] }) {
  return (
    <Card
      sx={{
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: '16px',
        height: '100%',
      }}
    >
      <CardContent>
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        <ul className="list-disc pl-5 space-y-1 opacity-90">
          {items.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
