import { motion } from "framer-motion";
import { Link } from "wouter";
import { PageHeader } from "@/components/page-header";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import engResidencialImg from "@assets/generated_images/eng-residencial.jpg";

const servicos = [
  "Construção de residências de alto padrão",
  "Reformas completas",
  "Ampliações",
  "Gerenciamento de obras",
  "Instalações elétricas e hidráulicas",
  "Impermeabilizações",
  "Acabamentos especiais",
  "Projetos arquitetônicos e estruturais",
];

export function AtuacaoResidencialPage() {
  return (
    <>
      <PageHeader
        title="Engenharia Residencial"
        subtitle="Departamento especializado na construção de residências de alto padrão, com elevado padrão de acabamento e controle rigoroso da qualidade."
        breadcrumbs={[{ label: "Áreas de Atuação", href: "/atuacao" }, { label: "Engenharia Residencial" }]}
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-10 bg-primary" />
                <span className="text-muted-foreground font-bold uppercase tracking-widest text-xs">Alto Padrão</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                O lar dos seus sonhos, construído com precisão.
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Nosso departamento de Engenharia Residencial é especializado na construção de residências que combinam sofisticação, conforto e altíssimo padrão de acabamento. Atuamos na execução completa de projetos arquitetônicos e estruturais.
                </p>
                <p>
                  Cada projeto residencial é tratado com atenção individualizada: do planejamento inicial ao acabamento final, nossa equipe técnica garante que cada detalhe atenda às expectativas do cliente, dentro do prazo e do orçamento acordados.
                </p>
                <p>
                  Com profundo conhecimento das especificidades climáticas e logísticas da região amazônica, entregamos obras com durabilidade e qualidade superiores.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="border-l-4 border-primary pl-4">
                  <p className="text-3xl font-display font-bold text-foreground mb-1">Alto</p>
                  <p className="text-sm text-muted-foreground">Padrão de Acabamento</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="text-3xl font-display font-bold text-foreground mb-1">100%</p>
                  <p className="text-sm text-muted-foreground">Execução Técnica Própria</p>
                </div>
              </div>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-sm overflow-hidden"
              >
                <img src={engResidencialImg} alt="Engenharia Residencial" className="w-full h-72 object-cover" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card border rounded-sm p-8"
              >
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
          <p className="text-muted-foreground">Quer construir ou reformar sua residência com alto padrão? Fale conosco.</p>
          <Link href="/contato" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap">
            Solicitar orçamento <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
