import { motion } from "framer-motion";
import { Link } from "wouter";
import { PageHeader } from "@/components/page-header";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import engPublicaImg from "@assets/generated_images/eng-publica.jpg";

const servicos = [
  "Construção de escolas e creches",
  "Unidades Básicas de Saúde (UBS)",
  "Hospitais e edificações públicas",
  "Quadras poliesportivas",
  "Arenas esportivas",
  "Pavimentação urbana",
  "Drenagem superficial e profunda",
  "Calçadas e acessibilidade",
  "Infraestrutura urbana",
  "Redes elétricas",
  "Obras civis em geral",
  "Manutenção predial preventiva e corretiva",
];

export function AtuacaoPublicaPage() {
  return (
    <>
      <PageHeader
        title="Engenharia Pública"
        subtitle="Execução de obras e serviços para os governos municipal, estadual e federal com rigor técnico e conformidade legal."
        breadcrumbs={[{ label: "Áreas de Atuação", href: "/atuacao" }, { label: "Engenharia Pública" }]}
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-10 bg-primary" />
                <span className="text-muted-foreground font-bold uppercase tracking-widest text-xs">Setor Público</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Infraestrutura que serve ao cidadão.
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  A VR Lopes LTDA tem ampla experiência na execução de obras e serviços para órgãos governamentais, atuando em contratos municipais, estaduais e federais com plena conformidade às exigências legais e técnicas do setor público.
                </p>
                <p>
                  Nossa equipe domina todos os processos que envolvem licitações, contratos administrativos, medições e prestações de contas, garantindo transparência e eficiência em cada etapa da obra.
                </p>
                <p>
                  Com experiência comprovada junto a clientes como o Hospital Militar de Área de Manaus, a Comissão Regional de Obras da 12ª Região e a Prefeitura Municipal de Amaturá, a VR Lopes entende as demandas específicas das obras públicas.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="border-l-4 border-primary pl-4">
                  <p className="text-3xl font-display font-bold text-foreground mb-1">100%</p>
                  <p className="text-sm text-muted-foreground">Conformidade Legal</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="text-3xl font-display font-bold text-foreground mb-1">10+</p>
                  <p className="text-sm text-muted-foreground">Clientes Governamentais</p>
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
                <img src={engPublicaImg} alt="Engenharia Pública" className="w-full h-72 object-cover" />
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
          <p className="text-muted-foreground">Tem uma licitação ou contrato público? Nossa equipe está pronta para atender.</p>
          <Link href="/contato" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap">
            Entre em contato <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
