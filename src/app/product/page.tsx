import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Produto fictício — Hero | UI Técnicas",
  description:
    "Página de produto de referência para o laboratório: personalize título, subtítulo e CTAs.",
};

export default function ProductPage() {
  return (
    <main className="relative min-h-screen overflow-hidden pb-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_20%_0%,rgba(31,111,120,0.14),transparent_40%),radial-gradient(circle_at_90%_10%,rgba(217,107,69,0.12),transparent_35%),linear-gradient(180deg,#fcf7ee_0%,#f5ecdf_100%)]" />

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
        <Link
          href="/"
          className="text-sm font-semibold text-[#6e655b] transition hover:text-[#1f1a16]"
        >
          ← Voltar ao guia
        </Link>
        <span className="rounded-full border border-[#d7cbbb] bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#8b7359]">
          Exercício base
        </span>
      </header>

      <section className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:gap-16 lg:px-8 lg:pt-8">
        <div className="space-y-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#1f6f78]">
            Lançamento 2025
          </p>
          <h1 className="font-display text-4xl leading-[1.05] text-[#1f1a16] sm:text-5xl lg:text-6xl">
            PulseBand — o wearable que mede foco e pausas no dia a dia.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-[#5f5a53] sm:text-xl">
            Sensores discretos, app minimalista e lembretes gentis para você
            equilibrar produtividade e descanso sem virar refém das notificações.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#d96b45] px-6 py-3 text-sm font-semibold text-white shadow-[0_24px_40px_-24px_rgba(217,107,69,0.9)] transition hover:-translate-y-0.5 hover:bg-[#bf5633] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d96b45]"
            >
              Reservar unidade
            </a>
            <a
              href="#"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#cfbfa8] bg-white/85 px-6 py-3 text-sm font-semibold text-[#1f1a16] transition hover:border-[#1f6f78]/35 hover:bg-[#f9f4ec] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f6f78]"
            >
              Ver como funciona
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-6 h-24 w-24 rounded-full bg-[#f2b84b]/25 blur-2xl" />
          <div className="relative overflow-hidden rounded-[28px] border border-[#d7cbbb] bg-white/90 p-8 shadow-[0_32px_65px_-40px_rgba(66,41,22,0.55)]">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-xs font-medium text-[#8b7359]">
                Preview do produto
              </span>
              <span className="h-2 w-2 rounded-full bg-[#1f6f78]" aria-hidden />
            </div>
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#e8f6f7] via-[#fff9f0] to-[#fde8dc]" />
            <p className="mt-5 text-center text-sm text-[#6e655b]">
              Substitua este bloco por imagem ou ilustração quando quiser.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
