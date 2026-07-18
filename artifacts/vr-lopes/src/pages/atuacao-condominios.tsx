import { motion } from "framer-motion";
import { Link } from "wouter";
import { PageHeader } from "@/components/page-header";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import engCondominiosImg from "@assets/generated_images/eng-condominios.jpg";

const servicos = [
  "Reformas estruturais",
  "Manutenção preventiva",
  "Manutenção corretiva",
  "Pintura predial",
  "Serviços elétricos",
  "Serviços hidráulicos",
  "Impermeabilização",
  "Obras civis",
  "Conservação predial",
  "Limpeza especializada",
  "Fornecimento de mão de obra técnica",
];

export function AtuacaoCondominiosPage() {
  return (
    <>
      <PageHeader
        title="Engenharia para Condomínios"
        subtitle="Serviços especializados para condomínios residenciais e comerciais, garantindo valorização patrimonial, segurança e qualidade de vida."
        breadcrumbs={[{ label: "Áreas de Atuação", href: "/atuacao" }, { label: "Eng. para Condomínios" }]}
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-10 bg-primary" />
                <span className="text-muted-foreground font-bold uppercase tracking-widest text-xs">Gestão Condominial</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Seu condomínio em boas mãos.
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  A VR Lopes oferece prestação de serviços especializados para condomínios residenciais e comerciais, com foco na valorização do patrimônio, na segurança dos moradores e na redução de custos operacionais.
                </p>
                <p>
                  Nossa abordagem é completa: atendemos desde a manutenção preventiva planejada até emergências corretivas, com equipe técnica própria e resposta ágil às demandas dos síndicos e gestores condominiais.
                </p>
                <p>
                  A experiência junto a condomínios como Paradise River e Marina Rio Belo comprova nossa capacidade de atender padrões elevados de qualidade e discrição.
                </p>
              </div>

              <div className="mt-10 p-6 bg-card border rounded-sm">
                <h4 className="font-display font-bold text-foreground mb-3">Por que contratar a VR Lopes?</h4>
                <ul className="space-y-2">
                  {["Equipe técnica especializada e treinada", "Materiais certificados e de primeira linha", "Atendimento ágil e planejamento preventivo", "Relatórios técnicos detalhados por obra"].map((v, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-foreground/80">{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <div className="space-y-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="rounded-sm overflow-hidden">
                <img src={engCondominiosImg} alt="Engenharia para Condomínios" className="w-full h-72 object-cover" />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-card border rounded-sm p-8">
                <h3 className="font-display font-bold text-foreground text-xl mb-6">Serviços Oferecidos</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {servicos.map((s, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-foreground/80">{s}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/40 border-t">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <p className="text-muted-foreground">Síndico ou gestor de condomínio? Solicite uma visita técnica sem compromisso.</p>
          <Link href="/contato" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap">
            Solicitar visita técnica <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
