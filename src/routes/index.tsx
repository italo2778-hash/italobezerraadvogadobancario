import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, CheckCircle2, Scale, ShieldCheck, Instagram, Facebook } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Revisão de Contrato de Veículo - Reduza suas Parcelas" },
      {
        name: "description",
        content:
          "Está pagando juros abusivos no seu financiamento? Saiba como reduzir suas parcelas e proteger seu patrimônio com a revisão de contrato.",
      },
    ],
  }),
});

const WHATSAPP_URL = "https://wa.me/5500000000000?text=Quero%20reduzir%20meu%20financiamento";

function CtaButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 rounded-full bg-[#1d8ecb] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-[#1779ad] hover:shadow-xl ${className}`}
    >
      <MessageCircle className="h-5 w-5" />
      Quero reduzir meu financiamento
    </a>
  );
}

function Index() {
  const [valor, setValor] = useState("");
  const [estado, setEstado] = useState("");
  const [negociou, setNegociou] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Quero revisar meu contrato.%0AValor aproximado: R$ ${valor}%0AEstado do contrato: ${estado}%0AJá tentei negociar com o banco: ${negociou}`;
    window.open(`https://wa.me/5500000000000?text=${msg}`, "_blank");
  };

  const beneficios = [
    "Redução significativa do valor das parcelas mensais, aliviando o seu orçamento.",
    "Eliminação de juros abusivos e cobranças indevidas que oneram o seu contrato.",
    "Renegociação de prazos para pagamentos mais adequados à sua realidade.",
    "Ressarcimento de valores pagos a mais, garantindo justiça financeira.",
    "Proteção contra a apreensão do veículo, preservando o seu patrimônio.",
    "Orientação clara e transparente sobre seus direitos e deveres como consumidor.",
    "Suporte jurídico especializado para enfrentar o banco com segurança e respaldo legal.",
  ];

  const faqs = [
    {
      q: "1 — Preciso negociar com o banco?",
      a: "Não. O ideal é que a negociação seja conduzida por um advogado especializado, capaz de identificar cláusulas abusivas e buscar a melhor solução para o seu caso.",
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
    <div className="min-h-screen bg-[#f7f9fc] text-slate-800">
      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 pt-16 pb-12 text-center">
        <p className="mb-4 text-sm font-semibold tracking-wide text-[#1d8ecb]">
          Direito Bancário — Sua defesa como consumidor
        </p>
        <h1 className="mb-6 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
          Está pagando juros abusivos no seu financiamento? Saiba como reduzir suas parcelas e proteger seu patrimônio.
        </h1>
        <div className="mx-auto mb-6 max-w-xl rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-600 shadow-sm">
          Você pode estar pagando juros abusivos sem saber.
        </div>
        <p className="mb-8 font-semibold text-slate-800">
          Descubra como reduzir suas parcelas e proteger seu patrimônio.
        </p>
        <CtaButton />
      </section>

      {/* Benefícios */}
      <section className="mx-auto max-w-3xl px-6 pb-12">
        <div className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
          <h2 className="mb-5 text-xl font-bold text-slate-900">
            Com a revisão do seu contrato, você pode:
          </h2>
          <p className="mb-4 text-slate-700">
            Realizar a revisão do seu contrato de financiamento traz diversas vantagens que impactam diretamente no seu bolso e na sua tranquilidade financeira.
          </p>
          <p className="mb-4 text-slate-700">
            Confira alguns dos principais benefícios que você pode obter ao contar com uma análise jurídica especializada:
          </p>
          <ul className="mb-6 space-y-3">
            {beneficios.map((b) => (
              <li key={b} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1d8ecb]" />
                <span className="text-slate-700">{b}</span>
              </li>
            ))}
          </ul>
          <p className="text-slate-700">
            Não deixe que cláusulas abusivas prejudiquem o seu financiamento. Faça a revisão e garanta condições justas para o seu contrato!
          </p>
        </div>
      </section>

      {/* Formulário */}
      <section className="mx-auto max-w-3xl px-6 pb-12">
        <h2 className="mb-6 text-center text-2xl font-bold text-slate-900">
          Comece aqui ⬇️⬇️⬇️
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-xl bg-white p-8 shadow-sm ring-1 ring-slate-100"
        >
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Valor aproximado do seu financiamento (R$):
            </label>
            <input
              type="text"
              required
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              placeholder="Ex.: 35.000"
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-[#1d8ecb] focus:ring-2 focus:ring-[#1d8ecb]/20"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Estado do contrato:
            </label>
            <select
              required
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 outline-none focus:border-[#1d8ecb] focus:ring-2 focus:ring-[#1d8ecb]/20"
            >
              <option value="">Selecione</option>
              <option>Em dia</option>
              <option>Atrasado</option>
              <option>Negativado</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Você já tentou negociar com o banco?
            </label>
            <select
              required
              value={negociou}
              onChange={(e) => setNegociou(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 outline-none focus:border-[#1d8ecb] focus:ring-2 focus:ring-[#1d8ecb]/20"
            >
              <option value="">Selecione</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-3 rounded-full bg-[#1d8ecb] px-8 py-4 text-base font-semibold text-white shadow-md transition hover:bg-[#1779ad]"
          >
            <MessageCircle className="h-5 w-5" />
            Enviar e falar com o advogado
          </button>
        </form>
      </section>

      {/* Por que */}
      <section className="mx-auto max-w-3xl px-6 pb-12">
        <div className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
          <div className="mb-5 flex items-center gap-3">
            <Scale className="h-7 w-7 text-[#1d8ecb]" />
            <h2 className="text-xl font-bold text-slate-900">
              Por que fazer a revisão do contrato?
            </h2>
          </div>
          <p className="mb-4 text-slate-700">
            Os contratos de financiamento são elaborados para favorecer o banco, muitas vezes contendo cláusulas abusivas. A revisão feita por um advogado especialista identifica essas ilegalidades e garante seus direitos.
          </p>
          <p className="mb-4 text-slate-700">
            A revisão do contrato é um procedimento que analisa cláusulas e condições para identificar possíveis cobranças indevidas ou abusivas. Um advogado especializado avalia o seu contrato com base na legislação vigente, garantindo que seus direitos como consumidor sejam respeitados.
          </p>
          <p className="text-slate-700">
            Durante o processo, taxas, juros e prazos são verificados, com o objetivo de adequar o contrato à realidade legal e financeira do cliente — sem expor termos técnicos complexos. O foco é oferecer segurança e transparência, orientando sobre as melhores alternativas para proteger o seu patrimônio.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 pb-12">
        <h2 className="mb-6 text-center text-2xl font-bold text-slate-900">
          Perguntas frequentes
        </h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <h3 className="mb-2 font-bold text-slate-900">{f.q}</h3>
              <p className="text-slate-700">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sobre */}
      <section className="mx-auto max-w-3xl px-6 pb-12">
        <div className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
          <div className="mb-5 flex items-center gap-3">
            <ShieldCheck className="h-7 w-7 text-[#1d8ecb]" />
            <h2 className="text-xl font-bold text-slate-900">Sobre o advogado</h2>
          </div>
          <p className="mb-4 text-slate-700">
            São 3 anos e meio de experiência jurídica, com pós-graduação em Direito do Consumidor. Já ajudei dezenas de clientes em todo o Brasil em processos focados na defesa do consumidor contra abusos bancários — para que pague somente o justo.
          </p>
          <p className="text-slate-700">
            Meu compromisso é defender VOCÊ (CONSUMIDOR), assegurando o respeito às normas legais e a proteção do patrimônio dos meus clientes. Minha atuação é pautada em atendimento humanizado e disponibilidade para ajudar com seus problemas, sempre com foco na melhor orientação jurídica possível.
          </p>
        </div>
      </section>

      {/* Redes sociais */}
      <section className="mx-auto max-w-3xl px-6 pb-12 text-center">
        <h2 className="mb-3 text-xl font-bold text-slate-900">Minhas redes sociais</h2>
        <p className="mb-6 text-slate-700">
          Fique por dentro de informações importantes e esclarecimentos que podem ajudar na sua jornada como consumidor.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#"
            aria-label="Instagram"
            className="rounded-full bg-white p-3 shadow-sm ring-1 ring-slate-100 transition hover:bg-slate-50"
          >
            <Instagram className="h-6 w-6 text-[#1d8ecb]" />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="rounded-full bg-white p-3 shadow-sm ring-1 ring-slate-100 transition hover:bg-slate-50"
          >
            <Facebook className="h-6 w-6 text-[#1d8ecb]" />
          </a>
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-3xl px-6 pb-20 text-center">
        <p className="mb-6 text-lg font-semibold text-slate-900">
          Não perca mais dinheiro com o seu financiamento. Saiba como reduzir suas parcelas agora mesmo!
        </p>
        <CtaButton />
      </section>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale no WhatsApp"
        className="fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#1d8ecb] text-white shadow-lg transition hover:scale-105 hover:bg-[#1779ad]"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
