import type { Metadata } from "next";
import Link from "next/link";
import { Tarefa3MenuLab } from "@/components/tarefa3-menu-lab";

export const metadata: Metadata = {
  title: "Tarefa 3 — Transforme o menu | Laboratório",
  description:
    "Adapte o menu mobile: drawer lateral, bottom sheet ou menu em tela cheia.",
};

export default function Tarefa3Page() {
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
          Laboratório · Tarefa 3
        </p>
        <h1 className="font-display text-4xl leading-tight text-[#1f1a16] sm:text-5xl">
          Transforme o menu
        </h1>
        <p className="text-lg leading-8 text-[#5f5a53]">
          No projeto anterior (
          <Link
            href="/product"
            className="font-semibold text-[#1f6f78] underline decoration-[#1f6f78]/30 underline-offset-4 hover:decoration-[#1f6f78]"
          >
            /product
          </Link>
          ), escolha um dos três padrões abaixo. O guia passo a passo mostra
          como editar o <strong className="font-semibold text-[#1f1a16]">Nav</strong>{" "}
          e implementar o novo menu em Tailwind (com Client Component quando
          precisar de estado).
        </p>
      </header>

      <Tarefa3MenuLab />

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/tarefa4"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#d96b45] px-6 py-3 text-sm font-semibold shadow-[0_24px_40px_-24px_rgba(217,107,69,0.9)] transition hover:-translate-y-0.5 hover:bg-[#bf5633] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d96b45]"
        >
          <span className="text-white">Avançar para tarefa 4</span>
        </Link>
        <Link
          href="/tarefa2"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#cfbfa8] bg-white/85 px-6 py-3 text-sm font-semibold transition hover:border-[#1f6f78]/35 hover:bg-[#f9f4ec] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f6f78]"
        >
          <span className="text-[#1f1a16]">Voltar à tarefa 2</span>
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
