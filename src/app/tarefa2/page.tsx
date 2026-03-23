import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tarefa 2 — Nova paleta | Laboratório",
  description:
    "Escolha uma técnica cromática e aplique na página /product com Tailwind, mantendo contraste legível.",
};

const techniques = [
  {
    id: "triade",
    title: "Tríade",
    subtitle: "Energia visual com equilíbrio.",
    description:
      "Três cores distantes no círculo cromático; uma dominante (~60%), apoio e destaque para CTA.",
    swatches: ["#1F6F78", "#F2B84B", "#D96B45", "#FFF6E8"],
  },
  {
    id: "analogas",
    title: "Análogas",
    subtitle: "Harmonia para interfaces fluidas.",
    description:
      "Cores vizinhas no círculo; ótimo para fluxo contínuo, dashboards e áreas de conteúdo.",
    swatches: ["#155E75", "#0891B2", "#38BDF8", "#E0F7FF"],
  },
  {
    id: "contrastantes",
    title: "Contrastantes",
    subtitle: "Foco e chamada para ação.",
    description:
      "Pares opostos ou de alto contraste; neutro dominante e um tom forte no CTA ou alertas.",
    swatches: ["#0F766E", "#F97316", "#FFF7ED", "#1C1917"],
  },
  {
    id: "tom-sobre-tom",
    title: "Tom sobre tom",
    subtitle: "Profundidade sem poluição.",
    description:
      "Uma matiz com várias luminosidades; interfaces elegantes e com menos ruído visual.",
    swatches: ["#E0F2FE", "#7DD3FC", "#0EA5E9", "#075985"],
  },
] as const;

export default function Tarefa2Page() {
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
          Laboratório · Tarefa 2
        </p>
        <h1 className="font-display text-4xl leading-tight text-[#1f1a16] sm:text-5xl">
          Crie uma paleta nova
        </h1>
        <p className="text-lg leading-8 text-[#5f5a53]">
          Escolha <strong className="font-semibold text-[#1f1a16]">uma</strong>{" "}
          técnica cromática abaixo como referência e reaplique cores na página{" "}
          <Link
            href="/product"
            className="font-semibold text-[#1f6f78] underline decoration-[#1f6f78]/30 underline-offset-4 hover:decoration-[#1f6f78]"
          >
            /product
          </Link>{" "}
          com classes Tailwind (
          <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
            bg-[#...]
          </code>
          ,{" "}
          <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
            text-[#...]
          </code>
          , bordas, gradientes e botões), mantendo contraste legível.
        </p>
      </header>

      <section
        className="mt-10 rounded-[28px] border border-[#d7cbbb] bg-white/85 p-6 shadow-[0_20px_40px_-34px_rgba(66,41,22,0.45)] sm:p-8"
        aria-labelledby="escolha-tecnica"
      >
        <h2
          id="escolha-tecnica"
          className="font-display text-2xl text-[#1f1a16]"
        >
          Escolha uma técnica cromática
        </h2>
        <p className="mt-2 text-sm leading-7 text-[#5f5a53]">
          Marque a opção que vai guiar a sua paleta. Você pode trocar depois se
          quiser experimentar outra.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {techniques.map((t) => (
            <label
              key={t.id}
              className="relative block cursor-pointer rounded-2xl outline-none"
            >
              <input
                type="radio"
                name="technique"
                value={t.id}
                defaultChecked={t.id === "triade"}
                className="peer sr-only"
              />
              <div className="rounded-2xl border-2 border-[#eadfce] bg-[#fffaf5]/90 p-4 shadow-sm transition peer-checked:border-[#1f6f78] peer-checked:shadow-[0_12px_36px_-24px_rgba(31,111,120,0.35)] peer-focus-visible:ring-2 peer-focus-visible:ring-[#1f6f78] peer-focus-visible:ring-offset-2">
                <div className="flex flex-wrap gap-1.5">
                  {t.swatches.map((hex) => (
                    <span
                      key={hex}
                      className="h-6 w-6 rounded-md border border-black/10 shadow-sm"
                      style={{ backgroundColor: hex }}
                      title={hex}
                    />
                  ))}
                </div>
                <h3 className="mt-3 font-display text-lg text-[#1f1a16]">
                  {t.title}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8b7359]">
                  {t.subtitle}
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5f5a53]">
                  {t.description}
                </p>
              </div>
            </label>
          ))}
        </div>
      </section>

      <section className="mt-10 space-y-6">
        <h2 className="font-display text-2xl text-[#1f1a16]">
          Como alterar o <span className="text-[#1f6f78]">/product</span>
        </h2>
        <ol className="list-decimal space-y-5 pl-5 text-sm leading-7 text-[#5f5a53] marker:font-display marker:text-[#1f1a16]">
          <li>
            Abra o arquivo{" "}
            <code className="rounded bg-[#f0e8dc] px-1.5 py-0.5 font-mono text-[0.85em]">
              src/app/product/page.tsx
            </code>{" "}
            e identifique fundo da página, textos, bordas, cartão lateral e os
            dois CTAs.
          </li>
          <li>
            Atribua <strong className="text-[#1f1a16]">papéis</strong> às cores
            da técnica escolhida: fundo claro ou gradiente, texto principal e
            secundário, cor de destaque no botão primário, tom mais neutro no
            secundário.
          </li>
          <li>
            Troque valores hex nas classes Tailwind (ex.:{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              bg-[#d96b45]
            </code>
            ) ou use variáveis em{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              globals.css
            </code>{" "}
            se preferir centralizar a paleta.
          </li>
          <li>
            Ajuste o{" "}
            <strong className="text-[#1f1a16]">gradiente de fundo</strong> do
            hero para combinar com a nova família — mantenha opacidade baixa
            para não competir com o texto.
          </li>
          <li>
            Revise <strong className="text-[#1f1a16]">contraste</strong>: título
            e parágrafo legíveis no fundo; botão primário com texto legível;
            estados{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              hover
            </code>{" "}
            e{" "}
            <code className="rounded bg-[#f0e8dc] px-1 font-mono text-[0.85em]">
              focus-visible
            </code>{" "}
            coerentes com a nova paleta.
          </li>
        </ol>
        <p className="text-sm leading-7 text-[#5f5a53]">
          Consulte também a seção <strong className="text-[#1f1a16]">Teoria de
          cores</strong> no guia principal (
          <Link
            href="/#cores"
            className="font-semibold text-[#1f6f78] underline decoration-[#1f6f78]/30 underline-offset-4 hover:decoration-[#1f6f78]"
          >
            #cores
          </Link>
          ) para ver exemplos de tríade, análogas, contrastantes e tom sobre tom.
        </p>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/tarefa3"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#d96b45] px-6 py-3 text-sm font-semibold shadow-[0_24px_40px_-24px_rgba(217,107,69,0.9)] transition hover:-translate-y-0.5 hover:bg-[#bf5633] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d96b45]"
        >
          <span className="text-white">Avançar para tarefa 3</span>
        </Link>
        <Link
          href="/tarefa1"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#cfbfa8] bg-white/85 px-6 py-3 text-sm font-semibold transition hover:border-[#1f6f78]/35 hover:bg-[#f9f4ec] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f6f78]"
        >
          <span className="text-[#1f1a16]">Voltar à tarefa 1</span>
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
