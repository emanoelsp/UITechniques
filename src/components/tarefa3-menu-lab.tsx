"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";

type PatternId = "drawer" | "bottom-sheet" | "fullscreen";

const patterns: {
  id: PatternId;
  title: string;
  description: string;
}[] = [
  {
    id: "drawer",
    title: "Drawer lateral",
    description:
      "Painel que desliza da esquerda ou direita, sobre o conteúdo ou empurrando o layout. Bom para muitos links e hierarquia.",
  },
  {
    id: "bottom-sheet",
    title: "Bottom sheet",
    description:
      "Folha que sobe da base da tela, comum em apps. Funciona bem para poucas ações ou navegação curta.",
  },
  {
    id: "fullscreen",
    title: "Menu em tela cheia",
    description:
      "Overlay que ocupa a viewport com links grandes e legíveis. Impacto forte e foco total na navegação.",
  },
];

const guides: Record<
  PatternId,
  { heading: string; steps: { title: string; detail: ReactNode }[] }
> = {
  drawer: {
    heading: "Guia passo a passo — drawer no Nav de /product",
    steps: [
      {
        title: "Localize o header atual",
        detail: (
          <>
            Em{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              src/app/product/page.tsx
            </code>
            , o bloco é o{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              &lt;header&gt;
            </code>{" "}
            com “Voltar ao guia” e o badge. É aqui que você vai estruturar o{" "}
            <strong className="text-[#1f1a16]">novo Nav</strong> (marca ou
            título + links + menu mobile).
          </>
        ),
      },
      {
        title: "Estruture o HTML semântico",
        detail: (
          <>
            Use{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              &lt;nav aria-label=&quot;Principal&quot;&gt;
            </code>{" "}
            para os links. No desktop você pode mostrar os links em linha com{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              hidden md:flex
            </code>
            ; no mobile, esconda essa lista e mostre só o botão do menu.
          </>
        ),
      },
      {
        title: "Estado aberto/fechado",
        detail: (
          <>
            Como{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              page.tsx
            </code>{" "}
            é Server Component por padrão, extraia o header com menu para um
            arquivo{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              product-header.tsx
            </code>{" "}
            com{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              &quot;use client&quot;
            </code>{" "}
            e use{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              useState(false)
            </code>{" "}
            para{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              menuAberto
            </code>
            . O botão hamburger chama{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              setMenuAberto((v) =&gt; !v)
            </code>{" "}
            e usa{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              aria-expanded
            </code>
            .
          </>
        ),
      },
      {
        title: "Painel drawer em Tailwind",
        detail: (
          <>
            Camada do painel:{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              fixed inset-y-0 left-0 z-50 flex w-[min(100%,18rem)] flex-col border-r border-[#d7cbbb] bg-white shadow-xl
            </code>{" "}
            + transição{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              transition-transform duration-300
            </code>
            . Fechado:{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              -translate-x-full
            </code>
            ; aberto:{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              translate-x-0
            </code>
            . Opcional: drawer pela direita trocando{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              left-0
            </code>{" "}
            por{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              right-0
            </code>{" "}
            e os translates espelhados.
          </>
        ),
      },
      {
        title: "Overlay e fechar",
        detail: (
          <>
            Atrás do drawer, um{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              fixed inset-0 z-40 bg-[#1f1a16]/40
            </code>{" "}
            só quando aberto; clique fecha o menu. Links dentro do drawer também
            devem chamar fechar ao navegar.
          </>
        ),
      },
      {
        title: "Botão menu só no mobile",
        detail: (
          <>
            Hamburger:{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              md:hidden
            </code>
            , com{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              min-h-11 min-w-11
            </code>{" "}
            e{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              focus-visible:ring-2
            </code>
            . Em{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              md:
            </code>
            , mostre a mesma lista de links na barra sem drawer.
          </>
        ),
      },
    ],
  },
  "bottom-sheet": {
    heading: "Guia passo a passo — bottom sheet no Nav de /product",
    steps: [
      {
        title: "Parta do mesmo header",
        detail: (
          <>
            Em{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              product/page.tsx
            </code>
            , identifique o{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              header
            </code>
            . Crie um Client Component para o nav com{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              useState
            </code>{" "}
            para controlar abertura da folha.
          </>
        ),
      },
      {
        title: "Folha fixa na base",
        detail: (
          <>
            Container da folha:{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              fixed inset-x-0 bottom-0 z-50 max-h-[70vh] rounded-t-3xl border border-[#d7cbbb] bg-white px-6 pb-8 pt-4 shadow-[0_-20px_50px_-20px_rgba(31,26,22,0.35)]
            </code>
            . Animação: fechado{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              translate-y-full
            </code>
            , aberto{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              translate-y-0
            </code>{" "}
            com{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              transition-transform
            </code>
            .
          </>
        ),
      },
      {
        title: "Conteúdo rolável",
        detail: (
          <>
            Dentro da folha, envolva os links em{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              overflow-y-auto
            </code>{" "}
            se a lista crescer. Um “handle” visual (barra curta cinza no topo)
            reforça o padrão de sheet.
          </>
        ),
      },
      {
        title: "Backdrop",
        detail: (
          <>
            Mesmo padrão do drawer: overlay{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              fixed inset-0 z-40
            </code>{" "}
            semi-transparente atrás da folha, fechando ao clicar.
          </>
        ),
      },
      {
        title: "Acessibilidade",
        detail: (
          <>
            Botão que abre o sheet com rótulo explícito (“Abrir menu”). Ao
            abrir, considere mover foco para o primeiro link ou um botão
            “Fechar” no topo da folha com{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              focus-visible:outline
            </code>
            .
          </>
        ),
      },
    ],
  },
  fullscreen: {
    heading: "Guia passo a passo — menu em tela cheia no Nav de /product",
    steps: [
      {
        title: "Header compacto + overlay full",
        detail: (
          <>
            No{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              header
            </code>{" "}
            de{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              /product
            </code>
            , mantenha logo/“Voltar” e o botão menu. Ao abrir, renderize um
            painel{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              fixed inset-0 z-50
            </code>{" "}
            com fundo sólido ou gradiente alinhado à paleta da página.
          </>
        ),
      },
      {
        title: "Layout da tela cheia",
        detail: (
          <>
            Use{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              flex flex-col items-center justify-center gap-8 px-6
            </code>{" "}
            ou links alinhados ao topo com{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              pt-24
            </code>
            . Tipografia grande:{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              text-2xl font-display
            </code>{" "}
            nos itens para leitura rápida em pé.
          </>
        ),
      },
      {
        title: "Estado e transição",
        detail: (
          <>
            Client Component +{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              useState
            </code>
            . Entrada suave:{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              opacity-0
            </code>{" "}
            →{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              opacity-100
            </code>{" "}
            ou{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              scale-95
            </code>{" "}
            →{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              scale-100
            </code>{" "}
            com{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              transition
            </code>
            .
          </>
        ),
      },
      {
        title: "Fechar sempre visível",
        detail: (
          <>
            Botão “Fechar” ou ícone X no canto (ex.:{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              absolute right-6 top-6
            </code>
            ), com área tocável mínima e foco visível. Opcional:{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              overflow-y-auto
            </code>{" "}
            no container se houver muitos links.
          </>
        ),
      },
      {
        title: "Scroll do body",
        detail: (
          <>
            Com menu aberto, evite rolagem dupla: em projetos mais avançados
            use{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              overflow-hidden
            </code>{" "}
            no{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              body
            </code>{" "}
            enquanto o overlay estiver ativo (
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              useEffect
            </code>{" "}
            + classe no documento).
          </>
        ),
      },
    ],
  },
};

export function Tarefa3MenuLab() {
  const [selected, setSelected] = useState<PatternId | null>(null);

  const guide = selected ? guides[selected] : null;

  return (
    <>
      <section
        className="mt-10 rounded-[28px] border border-[#d7cbbb] bg-white/85 p-6 shadow-[0_20px_40px_-34px_rgba(66,41,22,0.45)] sm:p-8"
        aria-labelledby="padroes-menu"
      >
        <h2 id="padroes-menu" className="font-display text-2xl text-[#1f1a16]">
          Escolha um padrão
        </h2>
        <p className="mt-2 text-sm leading-7 text-[#5f5a53]">
          Clique em um tipo para ver o guia passo a passo para editar o Nav em{" "}
          <Link
            href="/product"
            className="font-semibold text-[#1f6f78] underline decoration-[#1f6f78]/30 underline-offset-4 hover:decoration-[#1f6f78]"
          >
            /product
          </Link>{" "}
          e implementar em Tailwind.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {patterns.map((p) => {
            const isActive = selected === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setSelected(p.id)}
                className={`rounded-2xl border-2 px-4 py-4 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f6f78] ${
                  isActive
                    ? "border-[#1f6f78] bg-[#f3fafb]/90 shadow-[0_12px_36px_-24px_rgba(31,111,120,0.35)]"
                    : "border-[#eadfce] bg-[#fffaf5]/90 hover:border-[#cfbfa8]"
                }`}
              >
                <h3 className="font-display text-lg text-[#1f1a16]">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#5f5a53]">
                  {p.description}
                </p>
              </button>
            );
          })}
        </div>

        <p className="mt-6 text-sm leading-7 text-[#5f5a53]">
          Referência visual no guia:{" "}
          <Link
            href="/#menu-mobile"
            className="font-semibold text-[#1f6f78] underline decoration-[#1f6f78]/30 underline-offset-4 hover:decoration-[#1f6f78]"
          >
            Menu mobile
          </Link>
          .
        </p>
      </section>

      {guide ? (
        <section
          className="mt-10 rounded-[28px] border border-[#d7cbbb] bg-white/85 p-6 shadow-[0_20px_40px_-34px_rgba(66,41,22,0.45)] sm:p-8"
          aria-live="polite"
        >
          <h2 className="font-display text-2xl text-[#1f1a16]">
            {guide.heading}
          </h2>
          <ol className="mt-8 space-y-8 border-t border-[#eadfce] pt-8">
            {guide.steps.map((step, index) => (
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
                    {step.detail}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>
      ) : (
        <p className="mt-6 text-center text-sm text-[#8b7359]">
          Selecione drawer, bottom sheet ou tela cheia acima para expandir o
          guia.
        </p>
      )}

      <section className="mt-10 space-y-4 text-sm leading-7 text-[#5f5a53]">
        <h2 className="font-display text-2xl text-[#1f1a16]">Checklist rápido</h2>
        <ul className="list-disc space-y-2 pl-5 marker:text-[#1f1a16]">
          <li>Botão que abre/fecha visível e acessível (rótulo claro, área tocável).</li>
          <li>
            Foco visível em teclado;{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              aria-expanded
            </code>{" "}
            no controle do menu.
          </li>
          <li>Transição curta e estado claro (aberto vs fechado).</li>
          <li>
            Opcional: bloquear scroll do fundo quando overlay estiver ativo.
          </li>
        </ul>
      </section>
    </>
  );
}
