// 'use client';
import Header from '@/components/layouts/Header';
import { Card, CardContent, Chip, Button } from '@mui/material';
import { Metadata } from 'next';
// import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cadastro',
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
          dúvidas e histórias que nem sempre é fácil expor. O{' '}
          <strong>Religare</strong> nasce para oferecer um espaço seguro de
          expressão, acolhimento e crescimento, sem julgamentos e com{' '}
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
            desenvolver sua{' '}
            <em>inteligência emocional, alimentar, financeira, espiritual</em> e
            comportamental, ajudando você a se tornar um{' '}
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
