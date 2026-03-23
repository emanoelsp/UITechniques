import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tarefa 5 — Sistema de botões | Laboratório",
  description:
    "Guia passo a passo: botões com Tailwind — disabled, loading, sucesso e foco acessível.",
};

const steps: { title: string; body: ReactNode }[] = [
  {
    title: "Parta do botão base do guia",
    body: (
      <>
        Abra a seção{" "}
        <Link
          href="/#botoes"
          className="font-semibold text-[#1f6f78] underline decoration-[#1f6f78]/30 underline-offset-4 hover:decoration-[#1f6f78]"
        >
          Botões
        </Link>{" "}
        na página inicial e copie a ideia de um botão{" "}
        <strong className="text-[#1f1a16]">primário</strong> (fundo sólido,
        sombra, hover). Crie um arquivo dedicado (ex.:{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          src/components/ui/button.tsx
        </code>
        ) ou implemente direto em{" "}
        <Link
          href="/product"
          className="font-semibold text-[#1f6f78] underline decoration-[#1f6f78]/30 underline-offset-4 hover:decoration-[#1f6f78]"
        >
          /product
        </Link>
        . O importante é ter{" "}
        <strong className="text-[#1f1a16]">uma base visual única</strong> para
        todas as variantes de estado.
      </>
    ),
  },
  {
    title: "Estrutura HTML e classes base em Tailwind",
    body: (
      <>
        Use{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          &lt;button type=&quot;button&quot;&gt;
        </code>{" "}
        (ou{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          type=&quot;submit&quot;
        </code>{" "}
        em formulários). Base típica de layout:{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          inline-flex items-center justify-center gap-2
        </code>
        , altura tocável{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          min-h-11
        </code>
        , padding horizontal generoso{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          px-6 py-3
        </code>
        , cantos{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          rounded-full
        </code>{" "}
        ou{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          rounded-xl
        </code>
        ,{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          text-sm font-semibold
        </code>
        , transição{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          transition
        </code>{" "}
        para hover/active suaves.
      </>
    ),
  },
  {
    title: "Estado normal, hover e active (Tailwind)",
    body: (
      <>
        No primário, combine cor de fundo + sombra, depois prefixos{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          hover:
        </code>{" "}
        e{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          active:
        </code>
        : por exemplo{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          hover:-translate-y-0.5 hover:bg-[#bf5633]
        </code>{" "}
        e{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          active:translate-y-0
        </code>
        . Evite depender só de cor: um leve movimento ou mudança de sombra
        reforça feedback. Não use{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          hover:
        </code>{" "}
        como único indicador para quem usa teclado — o próximo passo cobre foco.
      </>
    ),
  },
  {
    title: "Foco acessível com focus-visible",
    body: (
      <>
        Adicione anel de foco visível só quando o teclado navega:{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d96b45]
        </code>{" "}
        (ajuste a cor ao seu tema). Isso substitui o contorno padrão feio do
        navegador e mantém WCAG. Opcional:{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          focus:outline-none
        </code>{" "}
        só se você sempre complementar com{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          focus-visible:*
        </code>
        .
      </>
    ),
  },
  {
    title: "Estado disabled (atributo + Tailwind)",
    body: (
      <>
        No HTML use o atributo nativo{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          disabled
        </code>
        . No Tailwind v4, o modificador{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          disabled:
        </code>{" "}
        aplica estilos quando o botão está desabilitado: por exemplo{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none
        </code>
        . Se{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          pointer-events-none
        </code>{" "}
        impedir foco demais no seu caso, use só opacidade + cursor e mantenha o
        botão focável para leitores de tela entenderem que existe mas está
        indisponível. Combine com{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          disabled:hover:translate-y-0
        </code>{" "}
        para cancelar o hover do estado normal.
      </>
    ),
  },
  {
    title: "Estado loading (Client Component + Tailwind)",
    body: (
      <>
        Loading depende de estado em tempo real: coloque o botão em um componente
        com{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          &quot;use client&quot;
        </code>{" "}
        e{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          useState
        </code>{" "}
        (ex.:{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          isLoading
        </code>
        ). Enquanto carrega:{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          disabled
        </code>{" "}
        no botão para bloquear cliques duplos,{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          aria-busy=&quot;true&quot;
        </code>
        , e classes como{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          cursor-wait
        </code>
        . Spinner com Tailwind: um{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          span
        </code>{" "}
        com{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white
        </code>{" "}
        ao lado do texto “Carregando…”. Esconda só o ícone no estado normal com{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          hidden
        </code>{" "}
        e{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          isLoading &amp;&amp; &apos;inline-block&apos;
        </code>{" "}
        via template de classes no React, ou use duas linhas de texto trocadas
        por condicional.
      </>
    ),
  },
  {
    title: "Estado sucesso (visual + Tailwind)",
    body: (
      <>
        Após uma ação bem-sucedida, troque temporariamente o visual: fundo{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          bg-[#1f6f78]
        </code>{" "}
        ou borda verde, texto “Salvo!” com{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          text-white
        </code>
        . Implementação: terceiro estado no{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          useState
        </code>{" "}
        (
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          &apos;idle&apos; | &apos;loading&apos; | &apos;success&apos;
        </code>
        ) e monte a{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          className
        </code>{" "}
        com concatenação de strings ou array filtrado. Exemplo de padrão:{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          baseClasses + (success ? &apos; bg-[#1f6f78] ...&apos; : &apos; bg-[#d96b45] ...&apos;)
        </code>
        . Depois de 2–3 s, volte a{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          setTimeout
        </code>{" "}
        +{" "}
        <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
          idle
        </code>{" "}
        para não poluir a interface.
      </>
    ),
  },
  {
    title: "Organize as classes (legível e estável)",
    body: (
      <>
        Separe mentalmente:{" "}
        <strong className="text-[#1f1a16]">layout</strong> (
        <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.8em]">
          inline-flex gap-2
        </code>
        ), <strong className="text-[#1f1a16]">tamanho</strong>,{" "}
        <strong className="text-[#1f1a16]">cor/tema</strong>,{" "}
        <strong className="text-[#1f1a16]">interação</strong> (
        <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.8em]">
          hover
        </code>
        /
        <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.8em]">
          active
        </code>
        /
        <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.8em]">
          focus-visible
        </code>
        ),{" "}
        <strong className="text-[#1f1a16]">estados especiais</strong> (
        <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.8em]">
          disabled:
        </code>
        ). Assim fica mais fácil debugar e alinhar com o restante do projeto
        Tailwind.
      </>
    ),
  },
  {
    title: "Checklist final",
    body: (
      <>
        Você tem um botão primário com{" "}
        <strong className="text-[#1f1a16]">quatro “looks”</strong>: normal,
        desabilitado, carregando e sucesso? Hover não engana o usuário quando
        está{" "}
        <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
          disabled
        </code>{" "}
        ou{" "}
        <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
          loading
        </code>
        ? Foco visível no teclado em todos os estados em que o botão é
        interativo? Se sim, o sistema de botões está fechado para o laboratório.
      </>
    ),
  },
];

export default function Tarefa5Page() {
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
          Laboratório · Tarefa 5
        </p>
        <h1 className="font-display text-4xl leading-tight text-[#1f1a16] sm:text-5xl">
          Feche o sistema de botões
        </h1>
        <p className="text-lg leading-8 text-[#5f5a53]">
          Este guia é <strong className="font-semibold text-[#1f1a16]">bem
          passo a passo</strong>: do botão base copiado do guia até{" "}
          <strong className="font-semibold text-[#1f1a16]">disabled</strong>,{" "}
          <strong className="font-semibold text-[#1f1a16]">loading</strong> e{" "}
          <strong className="font-semibold text-[#1f1a16]">sucesso</strong>, com
          classes Tailwind concretas e, quando precisar de estado, um{" "}
          <strong className="font-semibold text-[#1f1a16]">Client Component</strong>{" "}
          com{" "}
          <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
            useState
          </code>
          .
        </p>
      </header>

      <section className="mt-10 rounded-[28px] border border-[#d7cbbb] bg-white/85 p-6 shadow-[0_20px_40px_-34px_rgba(66,41,22,0.45)] sm:p-8">
        <h2 className="font-display text-2xl text-[#1f1a16]">
          Guia passo a passo (Tailwind + React)
        </h2>
        <p className="mt-2 text-sm leading-7 text-[#5f5a53]">
          Siga na ordem; estados com lógica vivem em componente cliente (
          <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
            &quot;use client&quot;
          </code>
          ).
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
          Modificadores Tailwind mais usados nesta tarefa
        </h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-[#1f1a16]">
          <li>
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.8em]">
              hover:
            </code>{" "}
            /{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.8em]">
              active:
            </code>{" "}
            — feedback de ponteiro/toque
          </li>
          <li>
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.8em]">
              focus-visible:
            </code>{" "}
            — foco só por teclado, acessível
          </li>
          <li>
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.8em]">
              disabled:
            </code>{" "}
            — estilo quando{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.8em]">
              disabled
            </code>{" "}
            no HTML
          </li>
          <li>
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.8em]">
              transition
            </code>
            ,{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.8em]">
              animate-spin
            </code>
            ,{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.8em]">
              cursor-wait
            </code>
            ,{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.8em]">
              opacity-*
            </code>
          </li>
        </ul>
      </section>

      <section className="mt-8 rounded-2xl border border-[#d7cbbb] bg-white/60 px-5 py-4 font-mono text-xs leading-6 text-[#4d463f]">
        <p className="font-sans text-sm font-semibold text-[#1f1a16]">
          Esqueleto de referência (primário — ajuste cores)
        </p>
        <pre className="mt-3 overflow-x-auto whitespace-pre-wrap break-words">
          {`<button
  type="button"
  disabled={isLoading}
  aria-busy={isLoading}
  className={
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full " +
    "px-6 py-3 text-sm font-semibold text-white transition " +
    "bg-[#d96b45] shadow-[0_24px_40px_-24px_rgba(217,107,69,0.9)] " +
    "hover:-translate-y-0.5 hover:bg-[#bf5633] active:translate-y-0 " +
    "focus-visible:outline focus-visible:outline-2 " +
    "focus-visible:outline-offset-2 focus-visible:outline-[#d96b45] " +
    "disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
  }
>
  …
</button>`}
        </pre>
        <p className="mt-3 font-sans text-xs leading-5 text-[#6e655b]">
          Para estados dinâmicos, some fragmentos de string no{" "}
          <code className="rounded bg-[#f0e8dc] px-1 font-mono">className</code>{" "}
          com{" "}
          <code className="rounded bg-[#f0e8dc] px-1 font-mono">+</code> ou use
          template literal JavaScript (crase) interpolando booleans do estado.
        </p>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/tarefa4"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#cfbfa8] bg-white/85 px-6 py-3 text-sm font-semibold transition hover:border-[#1f6f78]/35 hover:bg-[#f9f4ec] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f6f78]"
        >
          <span className="text-[#1f1a16]">Voltar à tarefa 4</span>
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
