"use client";

import { useState } from "react";

const menuItems = ["Início", "Biblioteca", "Aulas", "Projetos", "Perfil"];

const mobileTips = [
  {
    title: "Poucas opções",
    description:
      "Em celular, navegação longa vira atrito. Priorize o que ajuda o usuário a seguir em frente.",
  },
  {
    title: "Áreas grandes de toque",
    description:
      "Botões, links e itens do menu precisam ter espaço para dedo, não só para cursor.",
  },
  {
    title: "Contexto visível",
    description:
      "Mesmo com o menu aberto, mantenha pistas da tela atual para o usuário não se perder.",
  },
  {
    title: "CTA acessível",
    description:
      "Se a ação principal for frequente, deixe um atalho claro e fácil de alcançar com o polegar.",
  },
];

export function MobileMenuDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(320px,360px)_minmax(0,1fr)]">
      <div className="mx-auto w-full max-w-[360px] rounded-[38px] border border-[#1f1a16]/15 bg-[#1f1a16] p-3 shadow-[0_34px_65px_-36px_rgba(31,26,22,0.95)]">
        <div className="relative overflow-hidden rounded-[30px] bg-[#fffaf3]">
          <div className="flex items-center justify-between border-b border-[#eadfce] px-4 py-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8b7359]">
                Demo interativo
              </p>
              <h3 className="mt-1 font-display text-xl text-[#1f1a16]">
                Navegação mobile
              </h3>
            </div>

            <button
              type="button"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              onClick={() => setIsOpen((current) => !current)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d7cbbb] bg-white text-[#1f1a16] transition hover:bg-[#f7f1e8] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1f6f78]/20"
            >
              <span className="relative flex h-4 w-5 flex-col justify-between">
                <span
                  className={`h-0.5 rounded-full bg-current transition ${
                    isOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-0.5 rounded-full bg-current transition ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`h-0.5 rounded-full bg-current transition ${
                    isOpen ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>

          <div
            className={`absolute inset-x-4 top-[4.7rem] z-10 rounded-[28px] border border-[#d7cbbb] bg-white p-4 shadow-[0_24px_45px_-28px_rgba(66,41,22,0.45)] transition duration-300 ${
              isOpen
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-3 opacity-0"
            }`}
          >
            <div className="mb-4 flex items-center justify-between rounded-2xl bg-[#f8f1e7] px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-[#1f1a16]">
                  Menu aberto
                </p>
                <p className="text-xs text-[#6e655b]">
                  Curto, legível e com alvo grande.
                </p>
              </div>
              <span className="rounded-full bg-[#1f6f78]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#1f6f78]">
                {menuItems.length} itens
              </span>
            </div>

            <div className="grid gap-2">
              {menuItems.map((item, index) => (
                <button
                  key={item}
                  type="button"
                  className={`flex min-h-12 items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
                    index === 0
                      ? "bg-[#1f6f78] text-[#eff9fa]"
                      : "bg-[#fcfaf6] text-[#1f1a16] hover:bg-[#f8f1e7]"
                  }`}
                >
                  <span>{item}</span>
                  <span className="text-xs uppercase tracking-[0.24em] opacity-70">
                    ir
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4 px-4 pb-5 pt-4">
            <div className="rounded-[28px] bg-[#1f6f78] p-5 text-[#eff9fa]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#bde0e4]">
                Tela atual
              </p>
              <h4 className="mt-2 font-display text-3xl">
                Curso de interfaces responsivas
              </h4>
              <p className="mt-3 text-sm leading-7 text-[#dff3f5]">
                A tela continua oferecendo contexto mesmo quando o menu é
                acionado.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-[24px] border border-[#eadfce] bg-white p-4">
                <p className="text-sm font-semibold text-[#1f1a16]">
                  Aula 03
                </p>
                <p className="mt-2 text-sm leading-7 text-[#5f5a53]">
                  Menus, drawers e navegação compacta.
                </p>
              </div>
              <div className="rounded-[24px] border border-[#eadfce] bg-[#f8f1e7] p-4">
                <p className="text-sm font-semibold text-[#1f1a16]">
                  Exercício
                </p>
                <p className="mt-2 text-sm leading-7 text-[#5f5a53]">
                  Transformar este menu em tela cheia.
                </p>
              </div>
            </div>

            <div className="rounded-[24px] border border-dashed border-[#d7cbbb] bg-[#fcfaf6] px-4 py-4 text-sm leading-7 text-[#5f5a53]">
              Estado atual:{" "}
              <span className="font-semibold text-[#1f1a16]">
                {isOpen ? "menu aberto" : "menu fechado"}
              </span>
              . Observe como o contraste e o espaçamento mudam a sensação de
              controle.
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {mobileTips.map((tip) => (
          <article
            key={tip.title}
            className="rounded-[28px] border border-[#d7cbbb] bg-[#fffaf3] p-5 shadow-[0_20px_40px_-34px_rgba(66,41,22,0.45)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8b7359]">
              Boa prática
            </p>
            <h3 className="mt-2 font-display text-2xl text-[#1f1a16]">
              {tip.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#5f5a53]">
              {tip.description}
            </p>
          </article>
        ))}

        <article className="rounded-[30px] border border-[#d7cbbb] bg-[#1f1a16] p-6 text-[#f9f4ec] md:col-span-2 shadow-[0_28px_60px_-40px_rgba(31,26,22,0.95)]">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d3c0aa]">
                Passo 1
              </p>
              <h4 className="mt-2 font-display text-2xl text-white">
                Cabeçalho compacto
              </h4>
              <p className="mt-3 text-sm leading-7 text-[#e9dccd]">
                Logo, contexto e toggle em uma faixa limpa.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d3c0aa]">
                Passo 2
              </p>
              <h4 className="mt-2 font-display text-2xl text-white">
                Itens generosos
              </h4>
              <p className="mt-3 text-sm leading-7 text-[#e9dccd]">
                Cada item tem altura confortável e leitura imediata.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d3c0aa]">
                Passo 3
              </p>
              <h4 className="mt-2 font-display text-2xl text-white">
                CTA alcançável
              </h4>
              <p className="mt-3 text-sm leading-7 text-[#e9dccd]">
                O usuário precisa agir com um toque, sem caçar o botão.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
