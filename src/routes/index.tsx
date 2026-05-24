import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  CheckCircle2,
  Scale,
  ShieldCheck,
  TrendingDown,
  HandCoins,
  CarFront,
  FileSearch,
  Sparkles,
  Instagram,
  ArrowRight,
  Briefcase,
} from "lucide-react";
import lawyerHero from "@/assets/lawyer-hero.jpg";
import contractBanner from "@/assets/contract-banner.jpg";

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

const BENEFITS = [
  { icon: TrendingDown, text: "Redução significativa do valor das parcelas mensais, aliviando seu orçamento." },
  { icon: ShieldCheck, text: "Eliminação de juros abusivos e cobranças indevidas que oneram seu contrato." },
  { icon: FileSearch, text: "Possibilidade de renegociação dos prazos para pagamentos mais adequados à sua realidade." },
  { icon: HandCoins, text: "Recebimento de ressarcimento por valores pagos a mais, garantindo justiça financeira." },
  { icon: CarFront, text: "Proteção contra a apreensão do veículo, preservando seu patrimônio." },
  { icon: Scale, text: "Orientação clara e transparente sobre seus direitos e deveres como consumidor." },
  { icon: Sparkles, text: "Suporte jurídico especializado para enfrentar o banco com segurança e respaldo legal." },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M20.52 3.48A11.77 11.77 0 0012 0C5.37 0 0 5.37 0 12a11.9 11.9 0 001.64 6L0 24l6-1.64a11.9 11.9 0 006 1.64c6.63 0 12-5.37 12-12a11.77 11.77 0 00-3.48-8.52zm-8.52 17.52a9.5 9.5 0 01-4.84-1.4l-.35-.21-3.6.98.96-3.51-.23-.36a9.5 9.5 0 1111.06 4.5zm5.1-6.3c-.28-.14-1.65-.81-1.9-.9-.25-.1-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.39-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.1-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.28-.96.94-.96 2.3 0 1.36.98 2.68 1.12 2.87.14.18 1.93 2.94 4.68 4.12.65.28 1.16.45 1.56.58.65.21 1.24.18 1.71.11.52-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.07A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43V8.93a8.16 8.16 0 004.77 1.52V7a4.85 4.85 0 01-1.84-.31z" />
    </svg>
  );
}

function CtaWhatsApp({ label = "Quero reduzir meu financiamento", onClick, variant = "primary" }: { label?: string; onClick?: () => void; variant?: "primary" | "ghost" }) {
  const base = "group inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-base font-semibold transition-all duration-300 focus:outline-none focus:ring-4";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-[#1e6091] via-[#2980b9] to-[#3aa3d9] text-white shadow-[0_10px_30px_-8px_rgba(41,128,185,0.6)] hover:shadow-[0_16px_40px_-8px_rgba(41,128,185,0.8)] hover:-translate-y-0.5 focus:ring-[#2980b9]/40"
      : "bg-white/10 backdrop-blur text-white border border-white/30 hover:bg-white/20 focus:ring-white/40";
  return (
    <button type="button" onClick={onClick} className={`${base} ${styles}`}>
      <WhatsAppIcon className="h-6 w-6 fill-current" />
      <span>{label}</span>
      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
    </button>
  );
}

function SectionTitle({ kicker, title }: { kicker?: string; title: string }) {
  return (
    <div className="mb-8 text-center">
      {kicker && (
        <span className="inline-block rounded-full bg-[#2980b9]/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#2980b9]">
          {kicker}
        </span>
      )}
      <h2 className="mt-3 bg-gradient-to-br from-[#1a2a3a] to-[#2980b9] bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
        {title}
      </h2>
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#2980b9] to-[#3aa3d9]" />
    </div>
  );
}

function LandingPage() {
  const [slideIdx, setSlideIdx] = useState(0);
  const [fade, setFade] = useState(true);
  const formRef = useRef<HTMLFormElement>(null);
  const formSectionRef = useRef<HTMLDivElement>(null);
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
    formSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      (formRef.current?.querySelector("input, select") as HTMLElement | null)?.focus();
    }, 600);
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
    <div className="min-h-screen bg-gradient-to-b from-[#f4f8fb] via-white to-[#eef4f9] font-sans text-[#2c3e50]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0d2438] via-[#15406b] to-[#1e6091] text-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, rgba(58,163,217,0.6), transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.15), transparent 50%)`,
          }}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22><path d=%22M0 39.5h40M39.5 0v40%22 stroke=%22%23ffffff%22 stroke-opacity=%220.04%22/></svg>')]" />

        <div className="container relative mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
              <Scale className="h-4 w-4" />
              Direito Bancário — Sua defesa como consumidor
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Está pagando juros abusivos no seu financiamento?{" "}
              <span className="bg-gradient-to-r from-[#7fd4ff] to-white bg-clip-text text-transparent">
                Saiba como reduzir suas parcelas
              </span>{" "}
              e proteger seu patrimônio.
            </h1>
            <p
              aria-live="polite"
              className="mt-6 min-h-[28px] text-lg text-white/80 transition-opacity duration-500"
              style={{ opacity: fade ? 1 : 0 }}
            >
              {SLIDE_TEXTS[slideIdx]}
            </p>
            <p className="mt-4 text-lg font-semibold text-white">
              Descubra como reduzir suas parcelas e proteger seu patrimônio.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CtaWhatsApp onClick={scrollToForm} />
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#7fd4ff]" /> Pós-graduado em Direito do Consumidor</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#7fd4ff]" /> Atendimento em todo o Brasil</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#3aa3d9]/40 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
              <img
                src={lawyerHero}
                alt="Advogado especialista em revisão de contratos"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0d2438] to-transparent p-6">
                <div className="flex items-center gap-3 rounded-2xl bg-white/95 p-4 text-[#1a2a3a] shadow-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#2980b9] to-[#3aa3d9] text-white">
                    <TrendingDown className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#2980b9]">Desconto possível</p>
                    <p className="text-xl font-bold">Até 70% da sua dívida</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-6">
        {/* BENEFITS */}
        <section className="my-16">
          <SectionTitle kicker="Benefícios" title="Com a revisão do seu contrato, você pode:" />
          <p className="mx-auto max-w-3xl text-center text-[#5a6b7a]">
            Realizar a revisão do seu contrato de financiamento traz diversas vantagens que impactam diretamente no seu bolso e na sua tranquilidade financeira.
          </p>
          <p className="mt-2 text-center font-medium text-[#2c3e50]">Confira alguns dos principais benefícios:</p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="group relative overflow-hidden rounded-2xl border border-[#e0e9f0] bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#2980b9]/30 hover:shadow-xl"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-[#2980b9]/10 to-transparent transition-transform group-hover:scale-150" />
                <div className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#2980b9] to-[#3aa3d9] text-white shadow-lg">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="text-[#2c3e50]">{text}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center font-semibold text-[#2c3e50]">
            Não deixe que cláusulas abusivas prejudiquem seu financiamento. Faça a revisão e garanta condições justas para o seu contrato!
          </p>
        </section>

        {/* FORM */}
        <section ref={formSectionRef} className="my-16 scroll-mt-8">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-white to-[#f0f6fa] shadow-2xl ring-1 ring-[#e0e9f0]">
            <div className="grid md:grid-cols-5">
              <div className="relative hidden md:col-span-2 md:block">
                <img
                  src={contractBanner}
                  alt="Contrato de financiamento"
                  width={1920}
                  height={1080}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0d2438]/80 via-[#15406b]/60 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <Sparkles className="h-8 w-8 text-[#7fd4ff]" />
                  <p className="mt-3 text-2xl font-bold">Comece aqui (⬇️⬇️⬇️)!</p>
                  <p className="mt-2 text-sm text-white/80">Preencha e fale com um especialista agora.</p>
                </div>
              </div>

              <div className="p-8 md:col-span-3 md:p-10">
                <h2 className="text-2xl font-bold text-[#1a2a3a] md:hidden">Comece aqui (⬇️⬇️⬇️)!</h2>
                {submitted ? (
                  <div role="alert" className="mt-4 rounded-2xl border-2 border-[#2980b9] bg-[#f0f8ff] p-6">
                    <CheckCircle2 className="mb-3 h-10 w-10 text-[#27ae60]" />
                    <p className="font-medium text-[#2c3e50]">
                      Obrigado pelo contato! Em breve um especialista entrará em contato com você via WhatsApp.
                    </p>
                    <a
                      href={submitted}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#2980b9] px-6 py-3 font-semibold text-white shadow-lg hover:bg-[#1c5980]"
                    >
                      <WhatsAppIcon className="h-5 w-5 fill-white" />
                      Clique aqui se não abrir automaticamente
                    </a>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div>
                      <label htmlFor="valor" className="block text-sm font-semibold text-[#2c3e50]">
                        Valor aproximado do seu financiamento (R$):
                      </label>
                      <input
                        id="valor"
                        type="number"
                        min="0"
                        step="1000"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        value={form.valor}
                        onChange={(e) => setForm({ ...form, valor: e.target.value })}
                        placeholder="Ex: 25000"
                        className="mt-2 w-full rounded-xl border-2 border-[#e0e9f0] bg-white p-3 text-base outline-none transition focus:border-[#2980b9] focus:ring-4 focus:ring-[#2980b9]/10"
                      />
                      {errors.valor && <p className="mt-1 text-sm text-red-600">{errors.valor}</p>}
                    </div>
                    <div>
                      <label htmlFor="estado" className="block text-sm font-semibold text-[#2c3e50]">
                        Estado do contrato:
                      </label>
                      <select
                        id="estado"
                        value={form.estado}
                        onChange={(e) => setForm({ ...form, estado: e.target.value })}
                        className="mt-2 w-full rounded-xl border-2 border-[#e0e9f0] bg-white p-3 text-base outline-none transition focus:border-[#2980b9] focus:ring-4 focus:ring-[#2980b9]/10"
                      >
                        <option value="">Selecione</option>
                        <option value="em-dia">Em dia</option>
                        <option value="atrasado">Atrasado</option>
                        <option value="negativado">Negativado</option>
                      </select>
                      {errors.estado && <p className="mt-1 text-sm text-red-600">{errors.estado}</p>}
                    </div>
                    <div>
                      <label htmlFor="negociou" className="block text-sm font-semibold text-[#2c3e50]">
                        Você já tentou negociar com o banco?
                      </label>
                      <select
                        id="negociou"
                        value={form.negociou}
                        onChange={(e) => setForm({ ...form, negociou: e.target.value })}
                        className="mt-2 w-full rounded-xl border-2 border-[#e0e9f0] bg-white p-3 text-base outline-none transition focus:border-[#2980b9] focus:ring-4 focus:ring-[#2980b9]/10"
                      >
                        <option value="">Selecione</option>
                        <option value="sim">Sim</option>
                        <option value="nao">Não</option>
                      </select>
                      {errors.negociou && <p className="mt-1 text-sm text-red-600">{errors.negociou}</p>}
                    </div>
                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#1e6091] via-[#2980b9] to-[#3aa3d9] py-4 font-bold tracking-wide text-white shadow-[0_10px_30px_-8px_rgba(41,128,185,0.6)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-8px_rgba(41,128,185,0.8)]"
                    >
                      <WhatsAppIcon className="h-6 w-6 fill-white" />
                      Quero Revisar Meu Contrato
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="my-16">
          <SectionTitle kicker="Entenda" title="Por que fazer a revisão do contrato?" />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Os contratos de financiamento são elaborados para favorecer o banco, muitas vezes com cláusulas abusivas. A revisão feita por um advogado especialista identifica essas ilegalidades e garante seus direitos.",
              "A revisão do contrato de financiamento é um procedimento que visa analisar as cláusulas e condições para identificar possíveis cobranças indevidas ou abusivas. Um advogado especialista avalia seu contrato com base na legislação vigente, garantindo que seus direitos como consumidor sejam respeitados.",
              "Durante o processo, são verificadas taxas, juros e prazos, buscando adequar o contrato à realidade legal e financeira do cliente. O objetivo é proporcionar segurança e transparência, orientando sobre as melhores alternativas para proteger seu patrimônio.",
            ].map((p, i) => (
              <div key={i} className="relative rounded-2xl border border-[#e0e9f0] bg-white p-6 shadow-sm">
                <span className="absolute -top-4 left-6 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#2980b9] to-[#3aa3d9] text-sm font-bold text-white shadow-lg">
                  {i + 1}
                </span>
                <p className="mt-2 text-[#3d4f60]">{p}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="my-16">
          <SectionTitle kicker="Dúvidas" title="Perguntas frequentes" />
          <div className="mx-auto max-w-3xl space-y-4">
            {[
              ["1 — Preciso negociar com o banco?", "Não. O ideal é que a negociação seja feita por um advogado especializado, capaz de identificar cláusulas abusivas e buscar a melhor solução para o caso."],
              ["2 — Como saber se os juros são abusivos?", "Somente com a análise do contrato. Em muitos casos, os juros e encargos cobrados ultrapassam os limites considerados razoáveis pelo mercado."],
              ["3 — Posso receber indenização?", "Sim, dependendo do caso. Cobranças indevidas, negativação irregular e outros prejuízos podem gerar direito à indenização."],
              ["4 — Vale a pena fazer a revisão?", "Sim. Muitos contratos possuem cláusulas abusivas que aumentam excessivamente o valor da dívida sem que o consumidor perceba."],
              ["5 — Posso recuperar valores pagos?", "Sim. Se forem identificadas cobranças ilegais, é possível pedir a devolução dos valores pagos indevidamente."],
              ["6 — Existem outras ilegalidades além dos juros?", "Sim. O contrato pode conter tarifas indevidas, seguros não autorizados, encargos excessivos e outras cláusulas abusivas."],
            ].map(([q, a]) => (
              <details
                key={q}
                className="group overflow-hidden rounded-2xl border border-[#e0e9f0] bg-white shadow-sm transition-all open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between p-5 font-semibold text-[#1a2a3a] hover:bg-[#f4f8fb]">
                  {q}
                  <span className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2980b9]/10 text-[#2980b9] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="px-5 pb-5 text-[#3d4f60]">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="my-16">
          <SectionTitle kicker="Sobre" title="Sobre o advogado" />
          <div className="grid items-center gap-10 rounded-3xl bg-gradient-to-br from-[#0d2438] to-[#1e6091] p-8 text-white shadow-2xl md:grid-cols-5 md:p-12">
            <div className="md:col-span-2">
              <div className="relative mx-auto max-w-xs">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#3aa3d9]/40 to-transparent blur-xl" />
                <img
                  src={lawyerHero}
                  alt="Foto do advogado"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="relative rounded-2xl border-4 border-white/20 object-cover shadow-2xl"
                />
              </div>
            </div>
            <div className="md:col-span-3">
              <p className="text-lg leading-relaxed text-white/90">
                Possuo 3 anos e meio de experiência jurídica, com pós-graduação em Direito do Consumidor. Ajudei dezenas de clientes pelo Brasil com múltiplos processos focados em ajudar o consumidor contra os abusos dos bancos, pagando somente o justo.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-white/90">
                Meu compromisso é defender VOCÊ (CONSUMIDOR), buscando assegurar o respeito às normas legais e a proteção do patrimônio dos meus clientes. Minha atuação é pautada no atendimento humanitário e na disponibilidade para ajudar com seus problemas, sempre com foco na melhor orientação jurídica possível.
              </p>
            </div>
          </div>
        </section>

        {/* SOCIAL */}
        <section className="my-16">
          <SectionTitle kicker="Conecte-se" title="Minhas redes sociais" />
          <p className="mx-auto max-w-2xl text-center text-[#5a6b7a]">
            Fique por dentro de informações importantes e esclarecimentos que podem ajudar na sua jornada como consumidor.
          </p>
          <div className="mx-auto mt-8 grid max-w-2xl gap-4 sm:grid-cols-2">
            <a
              href="https://www.instagram.com/adv.italo.bezerra/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-[#e0e9f0] bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#dc2743] text-white shadow-lg">
                <Instagram className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs text-[#5a6b7a]">Instagram</p>
                <p className="font-semibold text-[#1a2a3a] group-hover:text-[#2980b9]">@adv.italo.bezerra</p>
              </div>
            </a>
            <a
              href="https://www.tiktok.com/@italobezerra29"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-[#e0e9f0] bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#000] to-[#333] text-white shadow-lg">
                <TikTokIcon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs text-[#5a6b7a]">TikTok</p>
                <p className="font-semibold text-[#1a2a3a] group-hover:text-[#2980b9]">@italobezerra29</p>
              </div>
            </a>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="my-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0d2438] via-[#15406b] to-[#2980b9] p-10 text-center text-white shadow-2xl md:p-16">
            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `radial-gradient(circle at 30% 20%, rgba(127,212,255,0.4), transparent 50%), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.2), transparent 50%)` }} />
            <div className="relative">
              <p className="mx-auto max-w-2xl text-2xl font-bold md:text-3xl">
                Não perca mais dinheiro com seu financiamento. Saiba como reduzir suas parcelas agora mesmo!
              </p>
              <div className="mt-8 flex justify-center">
                <CtaWhatsApp onClick={scrollToForm} />
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="border-t border-[#e0e9f0] bg-[#0d2438] py-8 text-center text-sm text-white/70">
        © 2026 Italo Bezerra Advocacia & Consultoria - Todos os direitos reservados.
      </footer>

      <a
        href={WHATSAPP_DEFAULT}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#25d366] to-[#1ebe57] px-5 font-semibold text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] transition-all hover:-translate-y-1 hover:shadow-[0_15px_40px_-5px_rgba(37,211,102,0.8)]"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25d366] opacity-20" />
        <WhatsAppIcon className="relative h-7 w-7 fill-white" />
        <span className="relative hidden sm:inline">Atendimento via WhatsApp</span>
      </a>
    </div>
  );
}
