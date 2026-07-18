import { motion } from "framer-motion";
import { Link } from "wouter";
import { PageHeader } from "@/components/page-header";
import { ArrowRight, PackageSearch, Truck, ShieldCheck, Clock } from "lucide-react";

const categorias = [
  { title: "Construção Civil", items: ["Cimento, areia e brita", "Blocos e tijolos", "Estruturas metálicas", "Madeiramento e formas"] },
  { title: "Elétrico e Hidráulico", items: ["Tubulações e conexões", "Fios e cabos elétricos", "Quadros e disjuntores", "Bombas e reservatórios"] },
  { title: "Acabamentos", items: ["Revestimentos cerâmicos", "Tintas e impermeabilizantes", "Pisos e forros", "Ferragens e louças"] },
  { title: "Equipamentos", items: ["Ferramentas e equipamentos", "EPIs e segurança", "Andaimes e escoramentos", "Máquinas e compressores"] },
];

const diferenciais = [
  { icon: ShieldCheck, title: "Qualidade Garantida", desc: "Fornecemos apenas materiais de fabricantes certificados e reconhecidos no mercado." },
  { icon: Truck, title: "Logística Própria", desc: "Entrega diretamente no canteiro, com rastreamento e controle de estoque." },
  { icon: Clock, title: "Agilidade na Entrega", desc: "Processos ágeis de compra e entrega para não atrasar cronogramas de obra." },
  { icon: PackageSearch, title: "Atendimento Especializado", desc: "Equipe técnica para auxiliar na especificação correta de cada material." },
];

export function AtuacaoMateriaisPage() {
  return (
    <>
      <PageHeader
        title="Fornecimento de Materiais"
        subtitle="Materiais e insumos de qualidade para construção civil e manutenção, atendendo órgãos públicos, empresas e clientes privados."
        breadcrumbs={[{ label: "Áreas de Atuação", href: "/atuacao" }, { label: "Fornecimento de Materiais" }]}
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-10 bg-primary" />
                <span className="text-muted-foreground font-bold uppercase tracking-widest text-xs">Supply Chain</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Os materiais certos, no lugar certo, na hora certa.
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  A VR Lopes LTDA também atua no fornecimento de materiais e insumos para construção civil e manutenção, oferecendo soluções completas para órgãos públicos, empresas e clientes privados.
                </p>
                <p>
                  Nossa capacidade de aquisição, armazenamento e logística garante que as obras não parem por falta de insumos, com preços competitivos e materiais de primeira qualidade.
                </p>
                <p>
                  Para obras públicas, conhecemos os requisitos de documentação, rastreabilidade e conformidade fiscal exigidos em contratos governamentais.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {diferenciais.map((d, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-card border rounded-sm p-6 hover:border-primary/40 transition-colors">
                <div className="bg-primary/10 w-12 h-12 rounded-sm flex items-center justify-center text-primary mb-4">
                  <d.icon size={22} />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">{d.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-display font-bold text-foreground mb-8">Categorias de Fornecimento</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categorias.map((cat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-zinc-950 text-white rounded-sm p-6">
                  <h4 className="font-display font-bold text-primary mb-4">{cat.title}</h4>
                  <ul className="space-y-2">
                    {cat.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-white/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/40 border-t">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <p className="text-muted-foreground">Precisa de materiais para sua obra ou contrato? Entre em contato para cotação.</p>
          <Link href="/contato" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap">
            Solicitar cotação <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
