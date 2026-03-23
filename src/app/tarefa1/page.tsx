import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tarefa 1 — Montar o hero | Laboratório",
  description:
    "Guia passo a passo para montar um hero responsível com layout limpo e boas práticas de UI/UX.",
};

const steps = [
  {
    title: "Abra o ponto de partida",
    body: (
      <>
        Entre em{" "}
        <Link
          href="/product"
          className="font-semibold text-[#1f6f78] underline decoration-[#1f6f78]/30 underline-offset-4 hover:decoration-[#1f6f78]"
        >
          /product
        </Link>
        . Ali está o hero do exercício anterior: eyebrow, título, subtítulo e
        dois CTAs. O desafio agora é{" "}
        <strong className="text-[#1f1a16]">montar essa estrutura com suas
        próprias palavras</strong> (produto fictício ou real), mantendo hierarquia
        clara.
      </>
    ),
  },
  {
    title: "Estruture o conteúdo antes do CSS",
    body: (
      <>
        Defina em uma frase o que o produto é, uma linha de promessa (título) e
        uma explicação curta (subtítulo). No hero, o visitante precisa entender{" "}
        <strong className="text-[#1f1a16]">o quê, para quê e qual o próximo
        passo</strong> em poucos segundos — sem depender do restante da página.
      </>
    ),
  },
  {
    title: "Use HTML semântico",
    body: (
      <>
        Envolva o bloco principal em{" "}
        <code className="rounded-md bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.8em] text-[#3d362f]">
          &lt;main&gt;
        </code>{" "}
        ou{" "}
        <code className="rounded-md bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.8em] text-[#3d362f]">
          &lt;section&gt;
        </code>
        , um{" "}
        <code className="rounded-md bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.8em] text-[#3d362f]">
          &lt;h1&gt;
        </code>{" "}
        único por página para o título principal, e{" "}
        <code className="rounded-md bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.8em] text-[#3d362f]">
          &lt;p&gt;
        </code>{" "}
        para o subtítulo. CTAs podem ser{" "}
        <code className="rounded-md bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.8em] text-[#3d362f]">
          &lt;a&gt;
        </code>{" "}
        com texto descritivo (evite só “clique aqui”).
      </>
    ),
  },
  {
    title: "Container e largura máxima",
    body: (
      <>
        Limite a largura do texto com algo como{" "}
        <code className="rounded-md bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.8em] text-[#3d362f]">
          max-w-xl
        </code>{" "}
        ou{" "}
        <code className="rounded-md bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.8em] text-[#3d362f]">
          max-w-2xl
        </code>{" "}
        no parágrafo e{" "}
        <code className="rounded-md bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.8em] text-[#3d362f]">
          max-w-6xl / max-w-7xl
        </code>{" "}
        no container da seção. Linhas muito longas cansam a leitura; em telas
        grandes, o olho agradece colunas mais estreitas para o copy.
      </>
    ),
  },
  {
    title: "Hierarquia tipográfica",
    body: (
      <>
        Eyebrow pequeno e em caixa alta com{" "}
        <code className="rounded-md bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.8em] text-[#3d362f]">
          tracking
        </code>{" "}
        largo; título com{" "}
        <code className="rounded-md bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.8em] text-[#3d362f]">
          font-display
        </code>{" "}
        e escala que cresce de{" "}
        <code className="rounded-md bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.8em] text-[#3d362f]">
          text-4xl
        </code>{" "}
        a{" "}
        <code className="rounded-md bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.8em] text-[#3d362f]">
          lg:text-6xl
        </code>
        ; subtítulo com cor mais suave (
        <code className="rounded-md bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.8em] text-[#3d362f]">
          text-[#5f5a53]
        </code>
        ) e{" "}
        <code className="rounded-md bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.8em] text-[#3d362f]">
          leading-relaxed
        </code>{" "}
        ou{" "}
        <code className="rounded-md bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.8em] text-[#3d362f]">
          leading-8
        </code>
        .
      </>
    ),
  },
  {
    title: "Layout responsivo limpo",
    body: (
      <>
        No mobile, empilhe tudo em uma coluna com{" "}
        <code className="rounded-md bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.8em] text-[#3d362f]">
          space-y-*
        </code>{" "}
        ou{" "}
        <code className="rounded-md bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.8em] text-[#3d362f]">
          flex flex-col gap-*
        </code>
        . A partir de{" "}
        <code className="rounded-md bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.8em] text-[#3d362f]">
          lg:
        </code>
        , use{" "}
        <code className="rounded-md bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.8em] text-[#3d362f]">
          grid lg:grid-cols-2
        </code>{" "}
        com proporções como{" "}
        <code className="rounded-md bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.8em] text-[#3d362f]">
          minmax(0,1fr)
        </code>{" "}
        para evitar overflow. Padding horizontal consistente:{" "}
        <code className="rounded-md bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.8em] text-[#3d362f]">
          px-6 lg:px-8
        </code>
        .
      </>
    ),
  },
  {
    title: "CTAs com intenção (UI/UX)",
    body: (
      <>
        Um botão primário forte (cor de destaque, sombra suave) e um secundário
        outline ou ghost. Use{" "}
        <code className="rounded-md bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.8em] text-[#3d362f]">
          min-h-11
        </code>{" "}
        ou altura equivalente para área tocável. Sempre inclua{" "}
        <code className="rounded-md bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.8em] text-[#3d362f]">
          focus-visible:outline
        </code>{" "}
        para teclado e leitores de tela. Agrupe com{" "}
        <code className="rounded-md bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.8em] text-[#3d362f]">
          flex flex-wrap gap-3
        </code>{" "}
        para quebrar linha sem espremimento em telas estreitas.
      </>
    ),
  },
  {
    title: "Profundidade sem poluir",
    body: (
      <>
        Fundo com gradiente leve ou{" "}
        <code className="rounded-md bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.8em] text-[#3d362f]">
          radial-gradient
        </code>{" "}
        discreto; cards com{" "}
        <code className="rounded-md bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.8em] text-[#3d362f]">
          border
        </code>{" "}
        suave +{" "}
        <code className="rounded-md bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.8em] text-[#3d362f]">
          shadow-*
        </code>{" "}
        baixa. Menos camadas competindo = leitura mais “premium”. Revise contraste
        de texto com o fundo (WCAG ajuda: texto principal bem escuro em fundos
        claros).
      </>
    ),
  },
  {
    title: "Checklist final",
    body: (
      <>
        Redimensione a janela: nada vaza horizontalmente? Título ainda domina?
        Um CTA só se destaca como principal? Se sim, você montou um hero limpo,
        responsivo e alinhado a boas práticas de interface.
      </>
    ),
  },
];

export default function Tarefa1Page() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-12 pb-24 lg:px-8 lg:py-16">
      <Link
        href="/"
        className="inline-flex text-sm font-semibold text-[#6e655b] transition hover:text-[#1f1a16]"
      >
        ← Voltar ao guia
      </Link>

      <header className="mt-10 space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8b7359]">
          Laboratório · Tarefa 1
        </p>
        <h1 className="font-display text-4xl leading-tight text-[#1f1a16] sm:text-5xl">
          Montar o hero
        </h1>
        <p className="text-lg leading-8 text-[#5f5a53]">
          Troque o <strong className="font-semibold text-[#1f1a16]">título</strong>{" "}
          e o <strong className="font-semibold text-[#1f1a16]">subtítulo</strong>{" "}
          da página{" "}
          <Link
            href="/product"
            className="font-semibold text-[#1f6f78] underline decoration-[#1f6f78]/30 underline-offset-4 hover:decoration-[#1f6f78]"
          >
            /product
          </Link>
          , ajuste os textos dos botões se fizer sentido e refine o layout com
          Tailwind: espaçamento, grid responsivo, tipografia e estados de foco —
          tudo com cara de interface profissional.
        </p>
      </header>

      <div className="mt-10 rounded-[28px] border border-[#d7cbbb] bg-white/85 p-6 shadow-[0_20px_40px_-34px_rgba(66,41,22,0.45)] sm:p-8">
        <h2 className="font-display text-2xl text-[#1f1a16]">
          Guia passo a passo
        </h2>
        <p className="mt-2 text-sm leading-7 text-[#5f5a53]">
          Siga na ordem; cada passo prepara o próximo.
        </p>
        <ol className="mt-8 space-y-10 border-t border-[#eadfce] pt-8">
          {steps.map((step, index) => (
            <li key={step.title} className="flex gap-4 sm:gap-5">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#1f1a16] font-display text-lg text-[#f9f4ec]"
                aria-hidden
              >
                {index + 1}
              </div>
              <div className="min-w-0 space-y-2">
                <h3 className="font-display text-xl text-[#1f1a16]">
                  {step.title}
                </h3>
                <div className="text-sm leading-7 text-[#5f5a53]">
                  {step.body}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/tarefa2"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#d96b45] px-6 py-3 text-sm font-semibold shadow-[0_24px_40px_-24px_rgba(217,107,69,0.9)] transition hover:-translate-y-0.5 hover:bg-[#bf5633] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d96b45]"
        >
          <span className="text-white">Avançar para tarefa 2</span>
        </Link>
        <Link
          href="/#laboratorio"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#cfbfa8] bg-white/85 px-6 py-3 text-sm font-semibold text-[#1f1a16] transition hover:border-[#1f6f78]/35 hover:bg-[#f9f4ec] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f6f78]"
        >
          Ver lista no guia
        </Link>
      </div>
    </main>
  );
}
