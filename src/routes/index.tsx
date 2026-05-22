import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

const WHATSAPP_NUMBER = "5586999765214";
const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;
const WHATSAPP_DEFAULT = `${WHATSAPP_BASE}?text=${encodeURIComponent("Olá! Gostaria de tirar uma dúvida")}`;

const SLIDE_TEXTS = [
  "Você pode estar pagando juros abusivos sem saber.",
  "A lei garante o direito à revisão contratual.",
  "É possível obter um desconto de até 70% da sua dívida",
  "Fale com um especialista e saiba mais.",
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M20.52 3.48A11.77 11.77 0 0012 0C5.37 0 0 5.37 0 12a11.9 11.9 0 001.64 6L0 24l6-1.64a11.9 11.9 0 006 1.64c6.63 0 12-5.37 12-12a11.77 11.77 0 00-3.48-8.52zm-8.52 17.52a9.5 9.5 0 01-4.84-1.4l-.35-.21-3.6.98.96-3.51-.23-.36a9.5 9.5 0 1111.06 4.5zm5.1-6.3c-.28-.14-1.65-.81-1.9-.9-.25-.1-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.39-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.1-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.28-.96.94-.96 2.3 0 1.36.98 2.68 1.12 2.87.14.18 1.93 2.94 4.68 4.12.65.28 1.16.45 1.56.58.65.21 1.24.18 1.71.11.52-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z" />
    </svg>
  );
}

function CtaWhatsApp({ label = "Quero reduzir meu financiamento", onClick }: { label?: string; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mx-auto my-5 inline-flex min-w-[260px] items-center justify-center gap-2 rounded-full bg-[#2980b9] px-5 py-3 text-base font-semibold text-white shadow-[0_4px_8px_rgba(41,128,185,0.4)] transition hover:bg-[#1c5980] focus:outline-none"
    >
      <WhatsAppIcon className="h-6 w-6 fill-white" />
      {label}
    </button>
  );
}

function LandingPage() {
  const [slideIdx, setSlideIdx] = useState(0);
  const [fade, setFade] = useState(true);
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({ valor: "", estado: "", negociou: "" });

  useEffect(() => {
    const id = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setSlideIdx((i) => (i + 1) % SLIDE_TEXTS.length);
        setFade(true);
      }, 500);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    (formRef.current?.querySelector("input, select") as HTMLElement | null)?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.valor.trim() || isNaN(Number(form.valor)) || Number(form.valor) <= 0) errs.valor = "Por favor, informe um valor válido.";
    if (!form.estado) errs.estado = "Por favor, selecione o estado do contrato.";
    if (!form.negociou) errs.negociou = "Por favor, informe se já tentou negociar com o banco.";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    let mensagem = `Olá, gostaria de uma avaliação para revisão do meu financiamento.\nValor do financiamento: R$ ${form.valor}\nEstado do contrato: ${form.estado}`;
    if (form.negociou === "sim") mensagem += `\nJá tentei negociar com o banco.`;
    else mensagem += `\nAinda não tentei negociar com o banco.`;

    const link = `${WHATSAPP_BASE}?text=${encodeURIComponent(mensagem)}`;
    setSubmitted(link);
    setTimeout(() => window.open(link, "_blank"), 1500);
  };

  return (
    <div className="min-h-screen bg-[#f7f9fa] text-[#333] font-sans">
      <div className="container mx-auto max-w-3xl px-4 py-8">
        <header className="text-center">
          <h3 className="text-lg font-semibold text-[#2980b9]">Direito Bancário - Sua defesa como consumidor</h3>
          <h1 className="mt-4 text-3xl font-bold text-[#2c3e50]">
            Está pagando juros abusivos no seu financiamento? Saiba como reduzir suas parcelas e proteger seu patrimônio.
          </h1>
          <p
            aria-live="polite"
            className="mt-4 min-h-[24px] text-base text-[#555] transition-opacity duration-500"
            style={{ opacity: fade ? 1 : 0 }}
          >
            {SLIDE_TEXTS[slideIdx]}
          </p>
          <p className="mt-4 text-center">
            <strong>Descubra como reduzir suas parcelas e proteger seu patrimônio.</strong>
          </p>
          <CtaWhatsApp onClick={scrollToForm} />
        </header>

        <main>
          <section className="my-10 rounded bg-white/70 p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#2c3e50]">Com a revisão do seu contrato, você pode:</h2>
            <p className="mt-3">Realizar a revisão do seu contrato de financiamento traz diversas vantagens que impactam diretamente no seu bolso e na sua tranquilidade financeira.</p>
            <p className="mt-2">Confira alguns dos principais benefícios:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Redução significativa do valor das parcelas mensais, aliviando seu orçamento.</li>
              <li>Eliminação de juros abusivos e cobranças indevidas que oneram seu contrato.</li>
              <li>Possibilidade de renegociação dos prazos para pagamentos mais adequados à sua realidade.</li>
              <li>Recebimento de ressarcimento por valores pagos a mais, garantindo justiça financeira.</li>
              <li>Proteção contra a apreensão do veículo, preservando seu patrimônio.</li>
              <li>Orientação clara e transparente sobre seus direitos e deveres como consumidor.</li>
              <li>Suporte jurídico especializado para enfrentar o banco com segurança e respaldo legal.</li>
            </ul>
            <p className="mt-3">Não deixe que cláusulas abusivas prejudiquem seu financiamento. Faça a revisão e garanta condições justas para o seu contrato!</p>
          </section>

          <section className="my-10 rounded bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#2c3e50]">Comece aqui (⬇️⬇️⬇️)!</h2>
            {submitted ? (
              <div role="alert" className="mt-4 rounded border border-[#2980b9] bg-[#f0f4f8] p-4">
                Obrigado pelo contato! Em breve um especialista entrará em contato com você via WhatsApp.
                <br />
                <br />
                <a href={submitted} target="_blank" rel="noopener noreferrer" className="inline-block rounded bg-[#2980b9] px-5 py-2 font-semibold text-white">
                  Clique aqui se não abrir automaticamente
                </a>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate className="mt-4 space-y-4">
                <div>
                  <label htmlFor="valor" className="block font-medium">Valor aproximado do seu financiamento (R$):</label>
                  <input
                    id="valor"
                    type="number"
                    value={form.valor}
                    onChange={(e) => setForm({ ...form, valor: e.target.value })}
                    placeholder="Ex: 25000"
                    className="mt-1 w-full rounded border border-gray-300 p-2"
                  />
                  {errors.valor && <p className="mt-1 text-sm text-red-600">{errors.valor}</p>}
                </div>
                <div>
                  <label htmlFor="estado" className="block font-medium">Estado do contrato:</label>
                  <select
                    id="estado"
                    value={form.estado}
                    onChange={(e) => setForm({ ...form, estado: e.target.value })}
                    className="mt-1 w-full rounded border border-gray-300 p-2"
                  >
                    <option value="">Selecione</option>
                    <option value="em-dia">Em dia</option>
                    <option value="atrasado">Atrasado</option>
                    <option value="negativado">Negativado</option>
                  </select>
                  {errors.estado && <p className="mt-1 text-sm text-red-600">{errors.estado}</p>}
                </div>
                <div>
                  <label htmlFor="negociou" className="block font-medium">Você já tentou negociar com o banco?</label>
                  <select
                    id="negociou"
                    value={form.negociou}
                    onChange={(e) => setForm({ ...form, negociou: e.target.value })}
                    className="mt-1 w-full rounded border border-gray-300 p-2"
                  >
                    <option value="">Selecione</option>
                    <option value="sim">Sim</option>
                    <option value="nao">Não</option>
                  </select>
                  {errors.negociou && <p className="mt-1 text-sm text-red-600">{errors.negociou}</p>}
                </div>
                <button type="submit" className="w-full rounded bg-[#2980b9] py-3 font-bold tracking-wide text-white hover:bg-[#1c5980]">
                  Quero Revisar Meu Contrato
                </button>
              </form>
            )}
          </section>

          <section className="my-10 rounded bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#2c3e50]">Por que fazer a revisão do contrato?</h2>
            <p className="mt-3">Os contratos de financiamento são elaborados para favorecer o banco, muitas vezes com cláusulas abusivas. A revisão feita por um advogado especialista identifica essas ilegalidades e garante seus direitos.</p>
            <p className="mt-3">A revisão do contrato de financiamento é um procedimento que visa analisar as cláusulas e condições para identificar possíveis cobranças indevidas ou abusivas. Um advogado especialista avalia seu contrato com base na legislação vigente, garantindo que seus direitos como consumidor sejam respeitados.</p>
            <p className="mt-3">Durante o processo, são verificadas taxas, juros e prazos, buscando adequar o contrato à realidade legal e financeira do cliente. O objetivo é proporcionar segurança e transparência, orientando sobre as melhores alternativas para proteger seu patrimônio.</p>
          </section>

          <section className="my-10 rounded bg-white/70 p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#2c3e50]">Perguntas frequentes</h2>
            {[
              ["1 — Preciso negociar com o banco?", "Não. O ideal é que a negociação seja feita por um advogado especializado, capaz de identificar cláusulas abusivas e buscar a melhor solução para o caso."],
              ["2 — Como saber se os juros são abusivos?", "Somente com a análise do contrato. Em muitos casos, os juros e encargos cobrados ultrapassam os limites considerados razoáveis pelo mercado."],
              ["3 — Posso receber indenização?", "Sim, dependendo do caso. Cobranças indevidas, negativação irregular e outros prejuízos podem gerar direito à indenização."],
              ["4 — Vale a pena fazer a revisão?", "Sim. Muitos contratos possuem cláusulas abusivas que aumentam excessivamente o valor da dívida sem que o consumidor perceba."],
              ["5 — Posso recuperar valores pagos?", "Sim. Se forem identificadas cobranças ilegais, é possível pedir a devolução dos valores pagos indevidamente."],
              ["6 — Existem outras ilegalidades além dos juros?", "Sim. O contrato pode conter tarifas indevidas, seguros não autorizados, encargos excessivos e outras cláusulas abusivas."],
            ].map(([q, a]) => (
              <div key={q} className="mt-4">
                <strong>{q}</strong>
                <p className="mt-1">{a}</p>
              </div>
            ))}
          </section>

          <section className="my-10 rounded bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#2c3e50]">Sobre o advogado</h2>
            <p className="mt-3">Possuo 3 anos e meio de experiência jurídica, com pós-graduação em Direito do Consumidor. Ajudei dezenas de clientes pelo Brasil com múltiplos processos focados em ajudar o consumidor contra os abusos dos bancos, pagando somente o justo.</p>
            <p className="mt-3">Meu compromisso é defender VOCÊ (CONSUMIDOR), buscando assegurar o respeito às normas legais e a proteção do patrimônio dos meus clientes. Minha atuação é pautada no atendimento humanitário e na disponibilidade para ajudar com seus problemas, sempre com foco na melhor orientação jurídica possível.</p>
          </section>

          <section className="my-10 rounded bg-white/70 p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#2c3e50]">Minhas redes sociais</h2>
            <p className="mt-3">Fique por dentro de informações importantes e esclarecimentos que podem ajudar na sua jornada como consumidor.</p>
            <p className="mt-3">
              Instagram:{" "}
              <a href="https://www.instagram.com/italobezerra" target="_blank" rel="noopener noreferrer" className="font-bold text-[#2980b9] hover:underline">
                instagram.com/italobezerra
              </a>
              <br />
              TikTok:{" "}
              <a href="https://www.tiktok.com/@italobezerra29" target="_blank" rel="noopener noreferrer" className="font-bold text-[#2980b9] hover:underline">
                tiktok.com/@italobezerra29
              </a>
            </p>
          </section>

          <section className="my-10 rounded bg-white/70 p-6 text-center shadow-sm">
            <p className="mb-4 text-lg font-bold text-[#2c3e50]">
              Não perca mais dinheiro com seu financiamento. Saiba como reduzir suas parcelas agora mesmo!
            </p>
            <CtaWhatsApp onClick={scrollToForm} />
          </section>
        </main>

        <footer className="mt-10 border-t border-gray-300 pt-5 text-center text-sm text-[#777]">
          © 2026 Italo Bezerra Advocacia & Consultoria - Todos os direitos reservados.
        </footer>
      </div>

      <a
        href={WHATSAPP_DEFAULT}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 items-center gap-2 overflow-hidden rounded-full bg-[#2980b9] px-4 font-semibold text-white shadow-lg transition hover:bg-[#1c5980]"
      >
        <WhatsAppIcon className="h-7 w-7 fill-white" />
        <span className="hidden sm:inline">Atendimento via WhatsApp</span>
      </a>
    </div>
  );
}
