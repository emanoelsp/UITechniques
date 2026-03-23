import { MobileMenuDemo } from "@/components/mobile-menu-demo";

const navigation = [
  { label: "Botões", href: "#botoes" },
  { label: "Responsividade", href: "#responsividade" },
  { label: "Menu mobile", href: "#menu-mobile" },
  { label: "Cores", href: "#cores" },
  { label: "Laboratório", href: "#laboratorio" },
];

const buttonPatterns = [
  {
    category: "CTA principal",
    title: "Botão primário",
    description:
      "Use para a ação mais importante da tela. Ele precisa ser o primeiro botão que o olhar encontra.",
    label: "Publicar projeto",
    buttonClass:
      "bg-[#d96b45] text-white shadow-[0_22px_40px_-24px_rgba(217,107,69,0.95)] hover:-translate-y-0.5 hover:bg-[#bf5633] focus-visible:ring-[#d96b45]/25",
    code:
      "rounded-full bg-[#d96b45] px-5 py-3 font-semibold text-white hover:-translate-y-0.5",
  },
  {
    category: "Apoio",
    title: "Botão secundário",
    description:
      "Mantém presença, mas não compete com o CTA principal. Funciona bem para ações alternativas.",
    label: "Ver especificações",
    buttonClass:
      "border border-[#cfbfa8] bg-white text-[#1f1a16] hover:border-[#1f6f78]/40 hover:bg-[#f7f1e8] focus-visible:ring-[#1f6f78]/15",
    code:
      "rounded-full border border-[#cfbfa8] bg-white px-5 py-3 text-[#1f1a16] hover:bg-[#f7f1e8]",
  },
  {
    category: "Baixa ênfase",
    title: "Botão ghost",
    description:
      "Ideal para filtros, links de apoio e ações que precisam existir sem poluir a hierarquia visual.",
    label: "Salvar rascunho",
    buttonClass:
      "bg-[#1f6f78]/10 text-[#1f6f78] hover:bg-[#1f6f78]/15 focus-visible:ring-[#1f6f78]/15",
    code:
      "rounded-full bg-[#1f6f78]/10 px-5 py-3 text-[#1f6f78] hover:bg-[#1f6f78]/15",
  },
  {
    category: "Ação contextual",
    title: "Botão com sinal visual",
    description:
      "Combina ícone, etiqueta curta e um fundo contrastante para reforçar urgência ou direção.",
    label: "Abrir protótipo",
    buttonClass:
      "bg-[#1f1a16] text-[#f9f4ec] hover:-translate-y-0.5 hover:bg-[#15120f] focus-visible:ring-[#1f1a16]/20",
    code:
      "inline-flex items-center gap-2 rounded-full bg-[#1f1a16] px-5 py-3 text-[#f9f4ec]",
  },
];

const responsiveRules = [
  {
    title: "Mobile first",
    description:
      "Comece com o layout para celular e só depois amplie. Isso força clareza e hierarquia de conteúdo.",
    tailwind: "Classes base + md: + lg: + xl:",
  },
  {
    title: "Grid com intenção",
    description:
      "Use spans diferentes para destacar o que é principal. Responsividade não é só encolher, é reorganizar.",
    tailwind: "grid gap-4 md:grid-cols-2 xl:grid-cols-4",
  },
  {
    title: "Escala de espaçamento",
    description:
      "Padding, gap e raio também precisam crescer. O layout fica mais sofisticado quando a respiro acompanha a tela.",
    tailwind: "p-4 md:p-6 xl:p-8",
  },
  {
    title: "Toque e legibilidade",
    description:
      "Em telas pequenas, mantenha áreas tocáveis, contraste forte e blocos curtos de texto para leitura rápida.",
    tailwind: "min-h-11 text-sm leading-6",
  },
];

const colorTechniques = [
  {
    title: "Tríade",
    subtitle: "Energia visual com equilíbrio.",
    description:
      "Escolha três cores distantes entre si no círculo cromático e defina uma dominante para evitar ruído.",
    tailwind: "Base + apoio + destaque",
    swatches: [
      { label: "Base", hex: "#1F6F78", text: "#F8FAFC" },
      { label: "Apoio", hex: "#F2B84B", text: "#1F1A16" },
      { label: "Destaque", hex: "#D96B45", text: "#FFF7ED" },
      { label: "Fundo", hex: "#FFF6E8", text: "#5F5A53" },
    ],
  },
  {
    title: "Análogas",
    subtitle: "Harmonia para interfaces fluidas.",
    description:
      "Use cores vizinhas para criar continuidade. Funciona muito bem em dashboards, edtech e áreas de conteúdo.",
    tailwind: "Transições suaves entre tons próximos",
    swatches: [
      { label: "Profundo", hex: "#155E75", text: "#E0F2FE" },
      { label: "Médio", hex: "#0891B2", text: "#ECFEFF" },
      { label: "Claro", hex: "#38BDF8", text: "#082F49" },
      { label: "Névoa", hex: "#E0F7FF", text: "#0F172A" },
    ],
  },
  {
    title: "Contrastantes",
    subtitle: "Foco e chamada para ação.",
    description:
      "Combine cores opostas para destacar elementos importantes. Use em CTAs, alertas ou pontos de decisão.",
    tailwind: "Neutro dominante + contraste em 1 ponto",
    swatches: [
      { label: "Escuro", hex: "#0F766E", text: "#ECFDF5" },
      { label: "Contraste", hex: "#F97316", text: "#FFF7ED" },
      { label: "Base", hex: "#FFF7ED", text: "#7C2D12" },
      { label: "Texto", hex: "#1C1917", text: "#FAFAF9" },
    ],
  },
  {
    title: "Tom sobre tom",
    subtitle: "Profundidade sem poluição.",
    description:
      "Varie luminosidade e saturação dentro da mesma família. Ideal para interfaces elegantes e com menor ruído.",
    tailwind: "Uma matiz, várias profundidades",
    swatches: [
      { label: "Névoa", hex: "#E0F2FE", text: "#0C4A6E" },
      { label: "Suporte", hex: "#7DD3FC", text: "#082F49" },
      { label: "Base", hex: "#0EA5E9", text: "#EFF6FF" },
      { label: "Profundo", hex: "#075985", text: "#E0F2FE" },
    ],
  },
];

const uiPatterns = [
  {
    title: "Hierarquia visual",
    description:
      "Misture tamanho, peso e contraste para mostrar por onde a leitura começa e onde termina.",
    tailwind: "text-5xl font-display + text-sm uppercase tracking-[0.2em]",
  },
  {
    title: "Espaçamento coerente",
    description:
      "Repita uma escala curta de espaços. Interfaces consistentes parecem mais profissionais mesmo com poucos elementos.",
    tailwind: "gap-4 md:gap-6 xl:gap-8",
  },
  {
    title: "Estados completos",
    description:
      "Todo componente interativo precisa responder a hover, focus, active, disabled e erro quando fizer sentido.",
    tailwind: "hover: focus-visible: disabled: aria-*",
  },
  {
    title: "Superfícies claras",
    description:
      "Combine raio generoso, borda sutil e sombra leve. Profundidade boa ajuda sem deixar o layout pesado.",
    tailwind: "rounded-3xl border shadow-[0_20px_45px_-30px_rgba(66,41,22,0.35)]",
  },
  {
    title: "Cores com papel definido",
    description:
      "Não escolha tons só porque combinam. Defina qual cor conduz, qual apoia e qual dispara atenção.",
    tailwind: "bg-base + text-main + accent para CTA",
  },
  {
    title: "Conteúdo adaptável",
    description:
      "Em telas maiores, reordene blocos e aumente densidade. Em telas menores, simplifique a jornada.",
    tailwind: "hidden md:block + order-* + xl:col-span-*",
  },
];

const labSteps = [
  {
    title: "Refaça o hero",
    description:
      "Troque título, subtítulo e CTA para um produto fictício e mantenha a mesma hierarquia visual.",
  },
  {
    title: "Crie uma paleta nova",
    description:
      "Escolha uma técnica cromática e aplique uma variação própria mantendo contraste legível.",
  },
  {
    title: "Transforme o menu",
    description:
      "Adapte o menu mobile para drawer lateral, bottom sheet ou menu em tela cheia.",
  },
  {
    title: "Modele uma dashboard",
    description:
      "Reorganize os cards responsivos para um cenário como ecommerce, fintech ou curso online.",
  },
  {
    title: "Feche o sistema de botões",
    description:
      "Adicione versões disabled, loading e sucesso para consolidar o comportamento do componente.",
  },
];

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

function SectionIntro({ eyebrow, title, description }: SectionIntroProps) {
  return (
    <div className="flex flex-col gap-4 lg:max-w-2xl">
      <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8b7359]">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl leading-tight text-[#1f1a16] sm:text-4xl">
        {title}
      </h2>
      <p className="max-w-2xl text-base leading-8 text-[#5f5a53] sm:text-lg">
        {description}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-hidden pb-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(circle_at_top_left,_rgba(217,107,69,0.2),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(31,111,120,0.18),_transparent_28%),linear-gradient(180deg,_#fcf7ee_0%,_#f5ecdf_100%)]" />

      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1f1a16] text-sm font-bold uppercase tracking-[0.2em] text-[#f9f4ec]">
            UI
          </div>
          <div>
            <p className="font-display text-lg text-[#1f1a16]">
              Guia prático de UI
            </p>
            <p className="text-sm text-[#6e655b]">Next.js + Tailwind CSS</p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-[#4d463f] lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-[#1f1a16]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#laboratorio"
          className="inline-flex items-center justify-center rounded-full border border-[#cfbfa8] bg-white/85 px-4 py-2 text-sm font-semibold text-[#1f1a16] shadow-[0_20px_45px_-34px_rgba(66,41,22,0.55)] backdrop-blur transition hover:-translate-y-0.5 hover:border-[#d96b45]/40 hover:bg-white"
        >
          Abrir laboratório
        </a>
      </header>

      <section className="mx-auto grid w-full max-w-7xl gap-10 px-6 pb-18 pt-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.85fr)] lg:px-8 lg:pb-24 lg:pt-8">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d8c8b3] bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#8b7359] backdrop-blur">
            Material para prática em sala
          </div>

          <div className="space-y-5">
            <h1 className="max-w-4xl font-display text-5xl leading-[0.95] text-[#1f1a16] sm:text-6xl xl:text-7xl">
              Técnicas de UI com Tailwind CSS para os alunos testarem no front
              end.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[#5f5a53] sm:text-xl">
              Um guia visual e prático sobre botões, responsividade, menu para
              celular, teoria de cores e padrões consolidados de interface.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#botoes"
              className="inline-flex items-center justify-center rounded-full bg-[#d96b45] px-6 py-3 text-sm font-semibold text-white shadow-[0_24px_40px_-24px_rgba(217,107,69,0.9)] transition hover:-translate-y-0.5 hover:bg-[#bf5633]"
            >
              Explorar técnicas
            </a>
            <a
              href="#cores"
              className="inline-flex items-center justify-center rounded-full border border-[#cfbfa8] bg-white/80 px-6 py-3 text-sm font-semibold text-[#1f1a16] transition hover:border-[#1f6f78]/30 hover:bg-[#f9f4ec]"
            >
              Estudar combinações de cor
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              "100% Tailwind puro",
              "Conteúdo em português",
              "Exemplos prontos para adaptar",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-[#dbcdb8] bg-white/80 px-4 py-4 text-sm font-medium text-[#4d463f] shadow-[0_20px_35px_-32px_rgba(66,41,22,0.55)] backdrop-blur"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-8 top-8 h-28 w-28 rounded-full bg-[#f2b84b]/30 blur-3xl" />
          <div className="absolute -right-6 bottom-10 h-32 w-32 rounded-full bg-[#1f6f78]/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[32px] border border-[#d7cbbb] bg-[#fffaf3]/95 p-5 shadow-[0_35px_70px_-38px_rgba(66,41,22,0.5)]">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8b7359]">
                  Estrutura sugerida
                </p>
                <h2 className="mt-2 font-display text-2xl text-[#1f1a16]">
                  Mapa do guia
                </h2>
              </div>
              <div className="rounded-full bg-[#1f6f78]/10 px-3 py-1 text-sm font-semibold text-[#1f6f78]">
                5 blocos
              </div>
            </div>

            <div className="grid gap-4">
              {[
                {
                  title: "Botões e hierarquia",
                  note: "Primário, secundário, ghost e CTA contextual.",
                },
                {
                  title: "Layout responsivo",
                  note: "Grid, spans, ritmo de espaço e adaptação real.",
                },
                {
                  title: "Menu mobile",
                  note: "Exemplo interativo para navegação de celular.",
                },
                {
                  title: "Teoria de cores",
                  note: "Tríade, análogas, contrastantes, tom sobre tom e 60/30/10.",
                },
              ].map((item, index) => (
                <article
                  key={item.title}
                  className="grid grid-cols-[auto_1fr] items-start gap-4 rounded-3xl border border-[#e5d8c6] bg-white px-4 py-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#f4ede3] font-display text-lg text-[#1f1a16]">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1f1a16]">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#6e655b]">
                      {item.note}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-5 rounded-3xl border border-dashed border-[#d7cbbb] bg-[#f8f1e7] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8b7359]">
                Dica para aula
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5f5a53]">
                Peça para os alunos duplicarem cada seção e modificarem só uma
                variável por vez: cor, espaçamento, densidade ou prioridade do
                CTA.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto flex w-full max-w-7xl flex-wrap gap-3 px-6 pb-6 lg:hidden lg:px-8">
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-full border border-[#cfbfa8] bg-white/75 px-4 py-2 text-sm font-medium text-[#4d463f]"
          >
            {item.label}
          </a>
        ))}
      </div>

      <div className="mx-auto w-full max-w-7xl space-y-24 px-6 lg:px-8">
        <section id="botoes" className="space-y-8">
          <SectionIntro
            eyebrow="Botões e ações"
            title="Crie hierarquia antes de pensar em ornamentação"
            description="Botões ensinam prioridade. O usuário precisa entender qual ação move a tela, qual apoia a jornada e qual pode esperar."
          />

          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)]">
            <div className="grid gap-5 md:grid-cols-2">
              {buttonPatterns.map((pattern) => (
                <article
                  key={pattern.title}
                  className="rounded-[28px] border border-[#d7cbbb] bg-[#fffaf3] p-5 shadow-[0_24px_45px_-36px_rgba(66,41,22,0.55)]"
                >
                  <div className="flex h-full flex-col justify-between gap-6">
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8b7359]">
                          {pattern.category}
                        </p>
                        <h3 className="mt-2 font-display text-2xl text-[#1f1a16]">
                          {pattern.title}
                        </h3>
                      </div>
                      <p className="text-sm leading-7 text-[#5f5a53]">
                        {pattern.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <button
                        type="button"
                        className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-4 ${pattern.buttonClass}`}
                      >
                        {pattern.title === "Botão com sinal visual" && (
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-xs">
                            ↗
                          </span>
                        )}
                        {pattern.label}
                      </button>

                      <div className="rounded-3xl border border-[#eadfce] bg-[#f8f1e7] p-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8b7359]">
                          Padrão em Tailwind
                        </p>
                        <p className="mt-2 font-mono text-xs leading-6 text-[#5f5a53]">
                          {pattern.code}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <aside className="space-y-5 rounded-[28px] border border-[#d7cbbb] bg-[#1f1a16] p-6 text-[#f9f4ec] shadow-[0_30px_60px_-38px_rgba(31,26,22,0.9)]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d3c0aa]">
                  Checklist rápido
                </p>
                <h3 className="mt-3 font-display text-3xl">
                  O que um bom botão precisa
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  "Uma ação principal por área da tela.",
                  "Texto de ação claro, sem verbos genéricos.",
                  "Estados visíveis para hover, focus e disabled.",
                  "Contraste suficiente entre fundo e texto.",
                  "Tamanho confortável para clique e toque.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-[#e9dccd]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="rounded-3xl bg-[#d96b45] px-4 py-4 text-sm leading-7 text-white">
                Combine o botão primário com espaço negativo ao redor. A força
                do CTA cresce quando a interface não disputa atenção com ele.
              </div>
            </aside>
          </div>
        </section>

        <section id="responsividade" className="space-y-8">
          <SectionIntro
            eyebrow="Interfaces responsivas"
            title="Responsividade é reorganizar a experiência, não só reduzir a largura"
            description="Tailwind facilita isso com breakpoints, spans e ordenação. A prática correta é pensar em prioridade de conteúdo e ritmo visual em cada faixa de tela."
          />

          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.3fr)_minmax(280px,0.7fr)]">
            <div className="rounded-[30px] border border-[#d7cbbb] bg-[#fffaf3] p-5 shadow-[0_24px_45px_-36px_rgba(66,41,22,0.55)]">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8b7359]">
                    Exemplo visual
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-[#1f1a16]">
                    Grid que muda de prioridade
                  </h3>
                </div>
                <div className="rounded-full border border-[#d8c8b3] bg-[#f8f1e7] px-3 py-1 text-sm font-medium text-[#5f5a53]">
                  `md:` e `xl:` em ação
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <article className="rounded-[28px] bg-[#1f6f78] p-6 text-[#eff9fa] md:col-span-2 xl:col-span-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#bde0e4]">
                    Bloco principal
                  </p>
                  <h4 className="mt-3 font-display text-3xl">
                    Hero com espaço para contexto, título e CTA.
                  </h4>
                  <p className="mt-3 max-w-md text-sm leading-7 text-[#e3f5f7]">
                    Em telas maiores, o conteúdo principal pode ocupar duas
                    colunas para ganhar leitura e prioridade.
                  </p>
                  <div className="mt-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#e3f5f7]">
                    `md:col-span-2 xl:col-span-2`
                  </div>
                </article>

                <article className="rounded-[28px] border border-[#eadfce] bg-white p-5">
                  <p className="text-sm font-semibold text-[#1f1a16]">
                    Card de métrica
                  </p>
                  <p className="mt-3 font-display text-4xl text-[#1f1a16]">
                    84%
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[#5f5a53]">
                    Resultados compactos funcionam bem em blocos menores.
                  </p>
                </article>

                <article className="rounded-[28px] border border-[#eadfce] bg-[#f8f1e7] p-5">
                  <p className="text-sm font-semibold text-[#1f1a16]">
                    Card de apoio
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#5f5a53]">
                    Use superfícies mais leves para informações secundárias.
                  </p>
                  <div className="mt-4 h-2 rounded-full bg-[#e7d6c2]">
                    <div className="h-2 w-2/3 rounded-full bg-[#d96b45]" />
                  </div>
                </article>

                <article className="rounded-[28px] border border-[#eadfce] bg-white p-5 md:col-span-2 xl:col-span-3">
                  <p className="text-sm font-semibold text-[#1f1a16]">
                    Área de conteúdo mais densa
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {["Sidebar", "Lista", "Detalhe"].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-[#eadfce] bg-[#fcfaf6] px-4 py-4 text-sm text-[#5f5a53]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[#5f5a53]">
                    Em telas amplas, a interface pode aumentar densidade sem
                    perder clareza.
                  </p>
                </article>

                <article className="rounded-[28px] border border-[#eadfce] bg-[#1f1a16] p-5 text-[#f9f4ec] xl:col-span-1">
                  <p className="text-sm font-semibold text-white">
                    CTA lateral
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#e9dccd]">
                    Guardar um bloco de ação em coluna própria funciona bem
                    quando há espaço horizontal.
                  </p>
                </article>
              </div>
            </div>

            <div className="grid gap-4">
              {responsiveRules.map((rule) => (
                <article
                  key={rule.title}
                  className="rounded-[28px] border border-[#d7cbbb] bg-white/85 p-5 shadow-[0_18px_35px_-32px_rgba(66,41,22,0.5)]"
                >
                  <h3 className="font-display text-2xl text-[#1f1a16]">
                    {rule.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#5f5a53]">
                    {rule.description}
                  </p>
                  <div className="mt-4 rounded-2xl border border-[#e6d8c6] bg-[#f8f1e7] px-4 py-3 font-mono text-xs text-[#5f5a53]">
                    {rule.tailwind}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="menu-mobile" className="space-y-8">
          <SectionIntro
            eyebrow="Menu para celular"
            title="Navegação mobile precisa ser curta, tocável e previsível"
            description="Menus mobile não devem só caber na tela. Eles precisam guiar ação, deixar contexto claro e oferecer áreas de toque confortáveis."
          />

          <MobileMenuDemo />
        </section>

        <section id="cores" className="space-y-8">
          <SectionIntro
            eyebrow="Teoria de cores aplicada"
            title="Escolha cores por função visual, não apenas por gosto"
            description="Essas combinações ajudam a explicar direção, contraste e atmosfera. O ideal é testar uma técnica cromática por vez e observar o que muda na hierarquia da interface."
          />

          <div className="grid gap-5 xl:grid-cols-2">
            {colorTechniques.map((technique) => (
              <article
                key={technique.title}
                className="rounded-[30px] border border-[#d7cbbb] bg-[#fffaf3] p-6 shadow-[0_24px_45px_-36px_rgba(66,41,22,0.55)]"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="max-w-xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8b7359]">
                      {technique.subtitle}
                    </p>
                    <h3 className="mt-2 font-display text-3xl text-[#1f1a16]">
                      {technique.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#5f5a53]">
                      {technique.description}
                    </p>
                  </div>
                  <div className="rounded-full border border-[#e3d5c3] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#6e655b]">
                    {technique.tailwind}
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {technique.swatches.map((swatch) => (
                    <div
                      key={`${technique.title}-${swatch.label}`}
                      className="rounded-[24px] p-4"
                      style={{
                        backgroundColor: swatch.hex,
                        color: swatch.text,
                      }}
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] opacity-80">
                        {swatch.label}
                      </p>
                      <p className="mt-6 font-display text-2xl">{swatch.hex}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}

            <article className="rounded-[30px] border border-[#d7cbbb] bg-[#1f1a16] p-6 text-[#f9f4ec] shadow-[0_28px_60px_-40px_rgba(31,26,22,0.95)]">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="max-w-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d3c0aa]">
                    Regra de distribuição
                  </p>
                  <h3 className="mt-2 font-display text-3xl text-white">
                    60 / 30 / 10
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#e9dccd]">
                    Use 60% para a base, 30% para áreas de apoio e 10% para o
                    ponto de atenção. Essa proporção evita que a paleta brigue
                    com o conteúdo.
                  </p>
                </div>
                <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#f6e8d8]">
                  Equilíbrio visual
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-[28px] border border-white/10">
                <div className="flex h-20">
                  <div
                    className="flex items-end bg-[#f6efe5] px-4 py-3 text-sm font-semibold text-[#3f3428]"
                    style={{ width: "60%" }}
                  >
                    Base 60%
                  </div>
                  <div
                    className="flex items-end bg-[#1f6f78] px-4 py-3 text-sm font-semibold text-[#f3fbfc]"
                    style={{ width: "30%" }}
                  >
                    Apoio 30%
                  </div>
                  <div
                    className="flex items-end bg-[#d96b45] px-4 py-3 text-sm font-semibold text-white"
                    style={{ width: "10%" }}
                  >
                    10%
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {[
                  {
                    title: "60% base",
                    note: "Fundos, áreas maiores e superfícies neutras.",
                  },
                  {
                    title: "30% apoio",
                    note: "Blocos de navegação, títulos ou áreas intermediárias.",
                  },
                  {
                    title: "10% destaque",
                    note: "CTA, chips, indicadores e pontos de ação.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/5 p-4"
                  >
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="mt-2 text-sm leading-7 text-[#e9dccd]">
                      {item.note}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[30px] border border-[#d7cbbb] bg-white/85 p-6 xl:col-span-2">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8b7359]">
                    Estratégia prática
                  </p>
                  <h3 className="mt-2 font-display text-3xl text-[#1f1a16]">
                    Como testar cor em aula
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#5f5a53]">
                    Escolha uma técnica cromática, aplique a regra 60/30/10 e
                    compare a leitura do layout com a versão anterior. O aluno
                    aprende mais quando enxerga a diferença no mesmo componente.
                  </p>
                </div>
                <div className="rounded-3xl border border-[#e6d8c6] bg-[#f8f1e7] px-4 py-4 text-sm leading-7 text-[#5f5a53]">
                  Pergunta útil: esta cor está organizando a interface ou só
                  decorando?
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="space-y-8">
          <SectionIntro
            eyebrow="Técnicas consolidadas"
            title="Boas práticas que valem em quase qualquer projeto"
            description="Esses padrões aparecem em landing pages, dashboards, ecommerces e aplicativos. O diferencial está em aplicar cada um com intenção, sem excesso de elementos."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {uiPatterns.map((pattern) => (
              <article
                key={pattern.title}
                className="rounded-[28px] border border-[#d7cbbb] bg-[#fffaf3] p-5 shadow-[0_20px_40px_-34px_rgba(66,41,22,0.45)]"
              >
                <div className="flex h-full flex-col gap-5">
                  <div className="h-2 w-20 rounded-full bg-[#d96b45]" />
                  <div>
                    <h3 className="font-display text-2xl text-[#1f1a16]">
                      {pattern.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#5f5a53]">
                      {pattern.description}
                    </p>
                  </div>
                  <div className="mt-auto rounded-3xl border border-[#eadfce] bg-[#f8f1e7] px-4 py-4 font-mono text-xs leading-6 text-[#5f5a53]">
                    {pattern.tailwind}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="laboratorio" className="space-y-8">
          <SectionIntro
            eyebrow="Laboratório dos alunos"
            title="Exercícios rápidos para transformar o guia em prática"
            description="A melhor forma de fixar UI é alterar uma interface existente. Essas tarefas foram pensadas para os alunos testarem classe por classe no Tailwind."
          />

          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
            <div className="grid gap-4 md:grid-cols-2">
              {labSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-[28px] border border-[#d7cbbb] bg-white/85 p-5 shadow-[0_20px_40px_-34px_rgba(66,41,22,0.45)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#1f1a16] font-display text-lg text-[#f9f4ec]">
                      {index + 1}
                    </div>
                    <h3 className="font-display text-2xl text-[#1f1a16]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[#5f5a53]">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>

            <aside className="rounded-[30px] border border-[#d7cbbb] bg-[#1f6f78] p-6 text-[#eff9fa] shadow-[0_26px_55px_-36px_rgba(31,111,120,0.7)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#bde0e4]">
                Resultado esperado
              </p>
              <h3 className="mt-3 font-display text-3xl">
                O aluno deve sair com repertório, não com receita pronta
              </h3>
              <p className="mt-4 text-sm leading-8 text-[#dff3f5]">
                O objetivo do guia é mostrar como pequenos ajustes em classes,
                cores, espaçamento e hierarquia mudam a percepção da interface.
                Cada bloco foi pensado para ser desmontado, copiado e adaptado.
              </p>

              <div className="mt-6 grid gap-3">
                {[
                  "Trocar cor dominante e observar o contraste.",
                  "Reordenar blocos entre mobile e desktop.",
                  "Testar mais ou menos densidade visual.",
                  "Comparar CTA discreto vs CTA dominante.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-white/15 bg-white/10 px-4 py-4 text-sm leading-7 text-[#eff9fa]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>
      </div>

      <footer className="mx-auto mt-24 w-full max-w-7xl border-t border-[#d7cbbb] px-6 pt-8 text-sm text-[#6e655b] lg:px-8">
        Material base para estudo de UI com Tailwind CSS. A proposta é
        incentivar inspeção, cópia orientada e adaptação consciente dos
        padrões.
      </footer>
    </main>
  );
}
