import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle2, Scale, ShieldCheck, Instagram, Music2 } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Revisão de Contrato de Veículo - Reduza suas parcelas" },
      {
        name: "description",
        content:
          "Saiba como reduzir suas parcelas de financiamento de veículo com revisão contratual especializada. Proteja seu patrimônio e evite juros abusivos.",
      },
      { property: "og:title", content: "Revisão de Contrato de Veículo - Reduza suas parcelas" },
      {
        property: "og:description",
        content:
          "Saiba como reduzir suas parcelas de financiamento de veículo com revisão contratual especializada. Proteja seu patrimônio e evite juros abusivos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const WHATSAPP_NUMBER = "5586999765214";
const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;
const WHATSAPP_DEFAULT = `${WHATSAPP_BASE}?text=${encodeURIComponent("Olá! Quero reduzir meu financiamento.")}`;

const SUBTITLE_SLIDES = [
  "Você pode estar pagando juros abusivos sem saber.",
  "A lei garante o direito à revisão contratual.",
  "É possível obter um desconto de até 70% da sua dívida.",
  "Fale com um especialista e saiba mais.",
];

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M20.52 3.48A11.77 11.77 0 0012 0C5.37 0 0 5.37 0 12a11.9 11.9 0 001.64 6L0 24l6-1.64a11.9 11.9 0 006 1.64c6.63 0 12-5.37 12-12a11.77 11.77 0 00-3.48-8.52zm-8.52 17.52a9.5 9.5 0 01-4.84-1.4l-.35-.21-3.6.98.96-3.51-.23-.36a9.5 9.5 0 1111.06 4.5zm5.1-6.3c-.28-.14-1.65-.81-1.9-.9-.25-.1-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.39-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.1-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.28-.96.94-.96 2.3 0 1.36.98 2.68 1.12 2.87.14.18 1.93 2.94 4.68 4.12.65.28 1.16.45 1.56.58.65.21 1.24.18 1.71.11.52-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z" />
    </svg>
  );
}

function CtaWhatsApp({ label = "Quero reduzir meu financiamento" }: { label?: string }) {
  return (
    <a
      href={WHATSAPP_DEFAULT}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#2980b9] px-6 py-4 text-base font-semibold text-white shadow-md transition hover:bg-[#1c5980] sm:w-auto"
    >
      <WhatsAppIcon className="h-6 w-6" />
      {label}
    </a>
  );
}

function Index() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Form state
  const [valor, setValor] = useState("");
  const [estado, setEstado] = useState("");
  const [negociou, setNegociou] = useState("");
  const [errors, setErrors] = useState<{ valor?: string; estado?: string; negociou?: string }>({});
  const [confirmLink, setConfirmLink] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setSlideIndex((i) => (i + 1) % SUBTITLE_SLIDES.length);
        setFade(true);
      }, 600);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};
    if (!valor || Number(valor) <= 0) newErrors.valor = "Por favor, informe o valor do financiamento.";
    if (!estado) newErrors.estado = "Por favor, selecione o estado do contrato.";
    if (!negociou) newErrors.negociou = "Por favor, informe se já tentou negociar com o banco.";
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const estadoLabel =
      estado === "em-dia" ? "Em dia" : estado === "atrasado" ? "Atrasado" : "Negativado";
    let mensagem = `Olá! Quero revisar meu contrato de financiamento.\nValor aproximado: R$ ${valor}\nEstado do contrato: ${estadoLabel}`;
    mensagem +=
      negociou === "sim"
        ? "\nJá tentei negociar com o banco."
        : "\nAinda não tentei negociar com o banco.";
    setConfirmLink(`${WHATSAPP_BASE}?text=${encodeURIComponent(mensagem)}`);
    window.open(`${WHATSAPP_BASE}?text=${encodeURIComponent(mensagem)}`, "_blank");
  };

  const beneficios = [
    "Redução significativa do valor das parcelas mensais, aliviando seu orçamento.",
    "Eliminação de juros abusivos e cobranças indevidas que oneram seu contrato.",
    "Possibilidade de renegociação dos prazos para pagamentos mais adequados à sua realidade.",
    "Recebimento de ressarcimento por valores pagos a mais, garantindo justiça financeira.",
    "Proteção contra a apreensão do veículo, preservando seu patrimônio.",
    "Orientação clara e transparente sobre seus direitos e deveres como consumidor.",
    "Suporte jurídico especializado para enfrentar o banco com segurança e respaldo legal.",
  ];

  const faqs = [
    {
      q: "1 — Preciso negociar com o banco?",
      a: "Não. O ideal é que a negociação seja feita por um advogado especializado, capaz de identificar cláusulas abusivas e buscar a melhor solução para o caso.",
    },
    {
      q: "2 — Como saber se os juros são abusivos?",
      a: "Somente com a análise do contrato. Em muitos casos, os juros e encargos cobrados ultrapassam os limites considerados razoáveis pelo mercado.",
    },
    {
      q: "3 — Posso receber indenização?",
      a: "Sim, dependendo do caso. Cobranças indevidas, negativação irregular e outros prejuízos podem gerar direito à indenização.",
    },
    {
      q: "4 — Vale a pena fazer a revisão?",
      a: "Sim. Muitos contratos possuem cláusulas abusivas que aumentam excessivamente o valor da dívida sem que o consumidor perceba.",
    },
    {
      q: "5 — Posso recuperar valores pagos?",
      a: "Sim. Se forem identificadas cobranças ilegais, é possível pedir a devolução dos valores pagos indevidamente.",
    },
    {
      q: "6 — Existem outras ilegalidades além dos juros?",
      a: "Sim. O contrato pode conter tarifas indevidas, seguros não autorizados, encargos excessivos e outras cláusulas abusivas.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#333]" style={{ fontFamily: "Arial, sans-serif" }}>
      <div className="mx-auto my-0 max-w-[760px] bg-white px-5 py-8 shadow-md md:my-6 md:rounded-lg">
        {/* Header */}
        <header className="mb-10 text-center">
          <h3 className="mb-2 text-lg font-semibold tracking-wide text-[#2980b9]">
            Direito Bancário - Sua defesa como consumidor
          </h3>
          <h1 className="mb-3 text-2xl font-bold leading-tight text-[#2c3e50] md:text-[28px]">
            Está pagando juros abusivos no seu financiamento? Saiba como reduzir suas parcelas e
            proteger seu patrimônio.
          </h1>
          <div
            className="mx-auto mt-3 inline-block max-w-full rounded-md bg-white/85 px-3 py-1 text-sm font-medium text-[#555] shadow-sm transition-opacity duration-500 md:text-base"
            style={{ opacity: fade ? 1 : 0 }}
          >
            {SUBTITLE_SLIDES[slideIndex]}
          </div>
          <p className="mt-5 mb-5 font-bold text-[#2c3e50]">
            Descubra como reduzir suas parcelas e proteger seu patrimônio.
          </p>
          <CtaWhatsApp />
        </header>

        <main className="space-y-10">
          {/* Benefícios */}
          <section className="rounded-md bg-[#f7f9fa] p-5">
            <h2 className="mb-4 text-xl font-semibold text-[#34495e]">
              Com a revisão do seu contrato, você pode:
            </h2>
            <p className="mb-3">
              Realizar a revisão do seu contrato de financiamento traz diversas vantagens que
              impactam diretamente no seu bolso e na sua tranquilidade financeira.
            </p>
            <p className="mb-4">
              Confira alguns dos principais benefícios que você pode obter ao contar com uma
              análise jurídica especializada:
            </p>
            <ul className="mb-4 space-y-2">
              {beneficios.map((b) => (
                <li key={b} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#2980b9]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p>
              Não deixe que cláusulas abusivas prejudiquem seu financiamento. Faça a revisão e
              garanta condições justas para o seu contrato!
            </p>
          </section>

          {/* Formulário */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-[#34495e]">Comece aqui (⬇️⬇️⬇️)!</h2>
            <form onSubmit={handleSubmit} className="space-y-3 rounded-md bg-[#ecf0f1] p-5" noValidate>
              <div>
                <label htmlFor="valor" className="mb-1 block font-bold">
                  Valor aproximado do seu financiamento (R$):
                </label>
                <input
                  id="valor"
                  type="number"
                  value={valor}
                  onChange={(e) => setValor(e.target.value)}
                  placeholder="Ex: 25000"
                  className={`w-full rounded border bg-white px-3 py-2.5 text-sm outline-none transition-colors focus:border-[#2980b9] ${
                    errors.valor ? "border-[#e74c3c] bg-[#fdecea]" : "border-[#bdc3c7]"
                  }`}
                />
                {errors.valor && (
                  <p className="mt-1 text-sm font-semibold text-[#e74c3c]">{errors.valor}</p>
                )}
              </div>

              <div>
                <label htmlFor="estado" className="mb-1 block font-bold">
                  Estado do contrato:
                </label>
                <select
                  id="estado"
                  value={estado}
                  onChange={(e) => setEstado(e.target.value)}
                  className={`w-full rounded border bg-white px-3 py-2.5 text-sm outline-none focus:border-[#2980b9] ${
                    errors.estado ? "border-[#e74c3c] bg-[#fdecea]" : "border-[#bdc3c7]"
                  }`}
                >
                  <option value="">Selecione</option>
                  <option value="em-dia">Em dia</option>
                  <option value="atrasado">Atrasado</option>
                  <option value="negativado">Negativado</option>
                </select>
                {errors.estado && (
                  <p className="mt-1 text-sm font-semibold text-[#e74c3c]">{errors.estado}</p>
                )}
              </div>

              <div>
                <label htmlFor="negociou" className="mb-1 block font-bold">
                  Você já tentou negociar com o banco?
                </label>
                <select
                  id="negociou"
                  value={negociou}
                  onChange={(e) => setNegociou(e.target.value)}
                  className={`w-full rounded border bg-white px-3 py-2.5 text-sm outline-none focus:border-[#2980b9] ${
                    errors.negociou ? "border-[#e74c3c] bg-[#fdecea]" : "border-[#bdc3c7]"
                  }`}
                >
                  <option value="">Selecione</option>
                  <option value="sim">Sim</option>
                  <option value="nao">Não</option>
                </select>
                {errors.negociou && (
                  <p className="mt-1 text-sm font-semibold text-[#e74c3c]">{errors.negociou}</p>
                )}
              </div>

              <button
                type="submit"
                className="mt-2 w-full rounded bg-[#2980b9] px-6 py-3.5 text-base font-bold tracking-wide text-white transition-colors hover:bg-[#1c5980]"
              >
                Quero Revisar Meu Contrato
              </button>

              {confirmLink && (
                <div className="mt-3 rounded-md border border-[#3c763d] bg-[#dff0d8] px-4 py-3 text-center font-semibold text-[#3c763d]">
                  Obrigado! Se a janela do WhatsApp não abriu,{" "}
                  <a className="underline" href={confirmLink} target="_blank" rel="noopener noreferrer">
                    clique aqui
                  </a>
                  .
                </div>
              )}
            </form>
          </section>

          {/* Por que */}
          <section>
            <div className="mb-3 flex items-center gap-2">
              <Scale className="h-6 w-6 text-[#2980b9]" />
              <h2 className="text-xl font-semibold text-[#34495e]">
                Por que fazer a revisão do contrato?
              </h2>
            </div>
            <blockquote className="my-4 border-l-4 border-[#2980b9] pl-4 italic text-[#555]">
              Entenda o processo de revisão de contrato de veículo.
            </blockquote>
            <p className="mb-3">
              Os contratos de financiamento são elaborados para favorecer o banco, muitas vezes
              com cláusulas abusivas. A revisão feita por um advogado especialista identifica
              essas ilegalidades e garante seus direitos.
            </p>
            <p className="mb-3">
              A revisão do contrato de financiamento é um procedimento que visa analisar as
              cláusulas e condições para identificar possíveis cobranças indevidas ou abusivas. Um
              advogado especialista avalia seu contrato com base na legislação vigente, garantindo
              que seus direitos como consumidor sejam respeitados.
            </p>
            <p>
              Durante o processo, são verificadas taxas, juros e prazos, buscando adequar o
              contrato à realidade legal e financeira do cliente, sem expor termos técnicos
              complexos. O objetivo é proporcionar segurança e transparência, orientando sobre as
              melhores alternativas para proteger seu patrimônio.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-[#34495e]">Perguntas frequentes</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className="faq-item">
                  <h3 className="mb-1 font-bold text-[#2c3e50]">{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sobre */}
          <section>
            <div className="mb-3 flex items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-[#2980b9]" />
              <h2 className="text-xl font-semibold text-[#34495e]">Sobre o advogado</h2>
            </div>
            <p className="mb-3">
              Possuo 3 anos e meio de experiência jurídica, com pós-graduação em Direito do
              Consumidor. Ajudei dezenas de clientes pelo Brasil com múltiplos processos focados
              em ajudar o consumidor contra os abusos dos bancos, pagando somente o justo.
            </p>
            <p>
              Meu compromisso é defender VOCÊ (CONSUMIDOR), buscando assegurar o respeito às
              normas legais e a proteção do patrimônio dos meus clientes. Minha atuação é pautada
              no atendimento humanitário e na disponibilidade para ajudar com seus problemas,
              sempre com foco na melhor orientação jurídica possível.
            </p>
          </section>

          {/* Redes sociais */}
          <section className="rounded-md bg-[#f7f9fa] p-5">
            <h2 className="mb-3 text-xl font-semibold text-[#34495e]">Minhas redes sociais</h2>
            <p className="mb-4">
              Fique por dentro de informações importantes e esclarecimentos que podem ajudar na
              sua jornada como consumidor.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.instagram.com/italobezerra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-[#2980b9] hover:underline"
              >
                <Instagram className="h-5 w-5" />
                instagram.com/italobezerra
              </a>
              <a
                href="https://www.tiktok.com/@italobezerra29"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-[#2980b9] hover:underline"
              >
                <Music2 className="h-5 w-5" />
                tiktok.com/@italobezerra29
              </a>
            </div>
          </section>

          {/* CTA final */}
          <section className="rounded-md bg-[#f7f9fa] p-5 text-center">
            <p className="mb-4 font-semibold text-[#2c3e50]">
              Não perca mais dinheiro com seu financiamento. Saiba como reduzir suas parcelas
              agora mesmo!
            </p>
            <CtaWhatsApp />
          </section>
        </main>

        <footer className="mt-10 border-t border-[#ddd] pt-5 text-center text-sm text-[#777]">
          © 2026 Italo Bezerra Advocacia & Consultoria - Todos os direitos reservados.
        </footer>
      </div>

      {/* Floating WhatsApp */}
      <a
        href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Olá! Gostaria de tirar uma dúvida")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Atendimento via WhatsApp"
        className="group fixed bottom-5 right-5 z-50 flex h-14 items-center gap-2 overflow-hidden rounded-full bg-[#2980b9] px-4 text-white shadow-lg transition-all hover:bg-[#1c5980] hover:scale-105"
      >
        <WhatsAppIcon className="h-7 w-7 flex-shrink-0" />
        <span className="hidden text-sm font-semibold group-hover:inline">
          Atendimento Via WhatsApp
        </span>
      </a>
    </div>
  );
}
