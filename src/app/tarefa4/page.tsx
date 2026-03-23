import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tarefa 4 — Modele uma dashboard | Laboratório",
  description:
    "Guia passo a passo para montar uma dashboard responsiva estilizada com Tailwind CSS.",
};

const steps: { title: string; body: ReactNode }[] = [
  {
    title: "Defina o cenário e os blocos",
    body: (
      <>
        Escolha um contexto (ecommerce, fintech, curso online, etc.) e liste{" "}
        <strong className="text-[#1f1a16]">4 a 8 blocos</strong>: por exemplo
        KPIs no topo, gráfico placeholder, tabela resumida, lista de tarefas,
        atalhos. Desenhe no papel ou em lista qual bloco é mais importante —
        isso define quem ocupa mais colunas no grid.
      </>
    ),
  },
  {
    title: "Onde implementar no projeto",
    body: (
      <>
        Crie uma rota nova (ex.:{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          src/app/dashboard/page.tsx
        </code>
        ) ou acrescente uma seção em{" "}
        <Link
          href="/product"
          className="font-semibold text-[#1f6f78] underline decoration-[#1f6f78]/30 underline-offset-4 hover:decoration-[#1f6f78]"
        >
          /product
        </Link>
        . Mantenha um{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          &lt;main&gt;
        </code>{" "}
        com largura máxima e padding horizontal coerentes com o restante do
        site (
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          max-w-7xl mx-auto px-6 lg:px-8
        </code>
        ).
      </>
    ),
  },
  {
    title: "Grid responsivo com Tailwind",
    body: (
      <>
        No container da área de conteúdo, use{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          grid
        </code>{" "}
        como base:{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          grid gap-4 md:gap-6
        </code>{" "}
        define o ritmo entre cards. Colunas por breakpoint:{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          grid-cols-1 sm:grid-cols-2 xl:grid-cols-4
        </code>{" "}
        — mobile em uma coluna; tablet em duas; desktop em quatro. Para um
        card “destaque” que ocupa duas colunas no desktop:{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          sm:col-span-2
        </code>{" "}
        ou{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          xl:col-span-2
        </code>
        . Use{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          auto-rows-fr
        </code>{" "}
        se quiser alturas de linha mais uniformes.
      </>
    ),
  },
  {
    title: "Estilo dos cards (superfície e profundidade)",
    body: (
      <>
        Cada widget pode ser um{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          &lt;article&gt;
        </code>{" "}
        ou{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          &lt;section&gt;
        </code>{" "}
        com:{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          rounded-2xl ou rounded-3xl
        </code>
        ,{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          border border-[#d7cbbb]
        </code>
        , fundo{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          bg-white/85
        </code>{" "}
        ou{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          bg-white
        </code>
        , e sombra suave (ex.:{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          shadow-[0_20px_40px_-34px_rgba(66,41,22,0.45)]
        </code>
        ). Padding interno:{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          p-4 md:p-5
        </code>{" "}
        para o conteúdo não colar nas bordas.
      </>
    ),
  },
  {
    title: "Tipografia e hierarquia dentro do card",
    body: (
      <>
        Título do bloco com{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          font-display
        </code>
        ,{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          text-lg
        </code>{" "}
        ou{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          text-xl
        </code>
        , cor escura. Valores numéricos (KPI) podem usar{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          text-3xl font-semibold tracking-tight
        </code>
        . Texto secundário e legendas:{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          text-sm text-[#5f5a53]
        </code>{" "}
        ou{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          text-muted
        </code>{" "}
        se você mapeou no tema. Espaçamento vertical:{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          space-y-2
        </code>{" "}
        ou{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          gap-3
        </code>{" "}
        em um{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          flex flex-col
        </code>
        .
      </>
    ),
  },
  {
    title: "Flex e alinhamento no cabeçalho do card",
    body: (
      <>
        Muitos widgets têm linha “título + ação”: use{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          flex items-center justify-between gap-3
        </code>
        . Se o título quebrar em telas estreitas, permita{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          flex-wrap
        </code>{" "}
        ou empilhe com{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          flex-col sm:flex-row
        </code>
        . Ícones ou badges alinham com{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          shrink-0
        </code>{" "}
        para não esmagar.
      </>
    ),
  },
  {
    title: "Cores e estados com utilitários",
    body: (
      <>
        Reaproveite a paleta da tarefa 2 ou do guia: bordas neutras, um tom de
        destaque para valores positivos (
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          text-[#1f6f78]
        </code>
        ) e CTA com a cor primária do projeto. Para linhas de tabela ou listas:{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          divide-y divide-[#eadfce]
        </code>{" "}
        no container. Hover em linhas clicáveis:{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          hover:bg-[#f9f4ec]/80
        </code>
        . Sempre inclua{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          focus-visible:outline
        </code>{" "}
        em links e botões dentro dos cards.
      </>
    ),
  },
  {
    title: "Responsividade além do grid",
    body: (
      <>
        Use{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          hidden md:block
        </code>{" "}
        para esconder um gráfico largo no celular e mostrar só o resumo, ou{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          order-first md:order-none
        </code>{" "}
        para mudar a ordem visual. Evite larguras fixas em px; prefira{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          w-full
        </code>
        ,{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          min-w-0
        </code>{" "}
        em filhos de grid/flex (impede overflow estranho de texto).
      </>
    ),
  },
  {
    title: "Checklist antes de considerar pronto",
    body: (
      <>
        Redimensione de 320px a largura grande: nada estoura horizontalmente?
        Hierarquia continua clara? Um KPI principal se destaca?         Compare com a seção{" "}
        <Link
          href="/#responsividade"
          className="font-semibold text-[#1f6f78] underline decoration-[#1f6f78]/30 underline-offset-4 hover:decoration-[#1f6f78]"
        >
          Responsividade
        </Link>{" "}
        e com{" "}
        <Link
          href="/#padroes-ui"
          className="font-semibold text-[#1f6f78] underline decoration-[#1f6f78]/30 underline-offset-4 hover:decoration-[#1f6f78]"
        >
          Boas práticas (padrões de UI)
        </Link>{" "}
        no guia principal.
      </>
    ),
  },
];

export default function Tarefa4Page() {
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
          Laboratório · Tarefa 4
        </p>
        <h1 className="font-display text-4xl leading-tight text-[#1f1a16] sm:text-5xl">
          Modele uma dashboard
        </h1>
        <p className="text-lg leading-8 text-[#5f5a53]">
          Monte uma grade de cards para o cenário que escolher e estilize tudo
          com <strong className="font-semibold text-[#1f1a16]">Tailwind CSS</strong>{" "}
          — grid, tipografia, cores, bordas e responsividade. O passo a passo
          abixo cobre da estrutura à revisão final.
        </p>
      </header>

      <section className="mt-10 rounded-[28px] border border-[#d7cbbb] bg-white/85 p-6 shadow-[0_20px_40px_-34px_rgba(66,41,22,0.45)] sm:p-8">
        <h2 className="font-display text-2xl text-[#1f1a16]">
          Guia passo a passo (Tailwind)
        </h2>
        <p className="mt-2 text-sm leading-7 text-[#5f5a53]">
          As classes são exemplos; adapte cores e espaçamentos à sua paleta.
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
      </section>

      <section className="mt-8 rounded-2xl border border-[#eadfce] bg-[#fffaf5]/90 px-5 py-4 text-sm leading-7 text-[#5f5a53]">
        <h3 className="font-display text-lg text-[#1f1a16]">
          Referência rápida de classes
        </h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-[#1f1a16]">
          <li>
            <strong className="text-[#1f1a16]">Layout:</strong>{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.8em]">
              grid
            </code>
            ,{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.8em]">
              flex
            </code>
            ,{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.8em]">
              gap-*
            </code>
            ,{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.8em]">
              col-span-*
            </code>
            , prefixos{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.8em]">
              sm:
            </code>{" "}
            /{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.8em]">
              md:
            </code>{" "}
            /{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.8em]">
              xl:
            </code>
          </li>
          <li>
            <strong className="text-[#1f1a16]">Superfície:</strong>{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.8em]">
              rounded-*
            </code>
            ,{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.8em]">
              border
            </code>
            ,{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.8em]">
              shadow-*
            </code>
            ,{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.8em]">
              bg-*
            </code>
          </li>
          <li>
            <strong className="text-[#1f1a16]">Texto:</strong>{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.8em]">
              font-display
            </code>
            ,{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.8em]">
              text-sm
            </code>
            –{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.8em]">
              text-3xl
            </code>
            ,{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.8em]">
              leading-*
            </code>
            ,{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.8em]">
              tracking-tight
            </code>
          </li>
          <li>
            <strong className="text-[#1f1a16]">Valores arbitrários:</strong>{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.8em]">
              bg-[#hex]
            </code>
            ,{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.8em]">
              shadow-[...]
            </code>{" "}
            quando o design pedir algo fora do scale padrão.
          </li>
        </ul>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/tarefa5"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#d96b45] px-6 py-3 text-sm font-semibold shadow-[0_24px_40px_-24px_rgba(217,107,69,0.9)] transition hover:-translate-y-0.5 hover:bg-[#bf5633] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d96b45]"
        >
          <span className="text-white">Avançar para tarefa 5</span>
        </Link>
        <Link
          href="/tarefa3"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#cfbfa8] bg-white/85 px-6 py-3 text-sm font-semibold transition hover:border-[#1f6f78]/35 hover:bg-[#f9f4ec] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f6f78]"
        >
          <span className="text-[#1f1a16]">Voltar à tarefa 3</span>
        </Link>
        <Link
          href="/#laboratorio"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#cfbfa8] bg-white/85 px-6 py-3 text-sm font-semibold transition hover:border-[#1f6f78]/35 hover:bg-[#f9f4ec] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f6f78]"
        >
          <span className="text-[#1f1a16]">Ver lista no guia</span>
        </Link>
      </div>
    </main>
  );
}
