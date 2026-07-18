import { Link } from "wouter";
import { motion } from "framer-motion";
import heroImg from "@assets/generated_images/hero.jpg";
import engPublicaImg from "@assets/generated_images/eng-publica.jpg";
import engResidencialImg from "@assets/generated_images/eng-residencial.jpg";
import engCondominiosImg from "@assets/generated_images/eng-condominios.jpg";
import { ArrowRight, Building2, Home, Building, PackageSearch, CheckCircle2 } from "lucide-react";

const serviceAreas = [
  {
    href: "/atuacao/publica",
    icon: Building2,
    title: "Engenharia Pública",
    desc: "Obras e serviços para governos municipal, estadual e federal.",
    image: engPublicaImg,
  },
  {
    href: "/atuacao/residencial",
    icon: Home,
    title: "Engenharia Residencial",
    desc: "Residências de alto padrão com excelência em acabamento e gestão.",
    image: engResidencialImg,
  },
  {
    href: "/atuacao/condominios",
    icon: Building,
    title: "Engenharia para Condomínios",
    desc: "Manutenção preventiva, corretiva e reformas em edificações condominiais.",
    image: engCondominiosImg,
  },
  {
    href: "/atuacao/materiais",
    icon: PackageSearch,
    title: "Fornecimento de Materiais",
    desc: "Insumos e materiais para órgãos públicos, empresas e clientes privados.",
    image: null,
  },
];

const stats = [
  { value: "10+", label: "Anos de Experiência" },
  { value: "150+", label: "Obras Entregues" },
  { value: "11+", label: "Clientes Institucionais" },
  { value: "4", label: "Áreas de Atuação" },
];

export function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] w-full flex items-center bg-zinc-900">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Infraestrutura urbana em construção"
            className="w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-10 bg-primary" />
                <span className="text-primary font-bold uppercase tracking-widest text-sm">Engenharia de Excelência</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.05] tracking-tight mb-6">
                Construindo <br />
                <span className="text-primary">Infraestrutura.</span>
                <br />
                Transformando Vidas.
              </h1>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              <p className="text-lg md:text-xl text-zinc-300 max-w-xl mb-10 leading-relaxed font-light">
                Solidez, precisão e comprometimento na Amazônia. Planejamos e executamos obras públicas, residenciais e de infraestrutura urbana que moldam cidades.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/sobre"
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-sm font-semibold text-lg hover:bg-primary/90 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
                >
                  Conheça a Empresa <ArrowRight size={18} />
                </Link>
                <Link
                  href="/atuacao"
                  className="bg-white/10 text-white backdrop-blur-sm border border-white/20 px-8 py-4 rounded-sm font-semibold text-lg hover:bg-white/20 transition-all"
                >
                  Áreas de Atuação
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">{stat.value}</p>
                <p className="text-primary-foreground/70 text-sm font-medium mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-10 bg-primary" />
                <span className="text-muted-foreground font-bold uppercase tracking-widest text-xs">Nossa Essência</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
                Mais do que obras,<br />edificamos <span className="text-primary">legados.</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                A VR Lopes LTDA nasceu com o propósito de transformar espaços em oportunidades e obras em legado. Somos uma empresa de engenharia que une excelência técnica, inovação e responsabilidade social para entregar soluções completas nos setores público e privado.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Acreditamos que engenharia vai além da construção de edificações: ela transforma cidades, melhora a qualidade de vida das pessoas e cria oportunidades de desenvolvimento econômico e social.
              </p>
              <Link
                href="/sobre"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Saiba mais sobre a empresa <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-1 gap-4"
            >
              {[
                { title: "Missão", text: "Planejar, construir e transformar ambientes com excelência técnica, inovação e responsabilidade socioambiental." },
                { title: "Visão", text: "Ser reconhecida até 2035 como uma das principais empresas de engenharia da Região Norte, referência nacional em obras públicas e empreendimentos residenciais." },
                { title: "Propósito", text: "Construir infraestrutura que transforma vidas e desenvolver pessoas capazes de transformar a sociedade." },
              ].map((item, i) => (
                <div key={i} className="bg-card border p-6 rounded-sm hover:border-primary/40 transition-colors">
                  <h3 className="font-display font-bold text-foreground mb-2 text-lg">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[2px] w-10 bg-primary" />
              <span className="text-muted-foreground font-bold uppercase tracking-widest text-xs">Áreas de Atuação</span>
              <div className="h-[2px] w-10 bg-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Especialidade em cada frente de obra.
            </h2>
            <p className="text-muted-foreground text-lg">
              Da obra pública à residência de alto padrão — equipes especializadas para cada segmento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceAreas.map((area, i) => (
              <motion.div
                key={area.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={area.href} className="group block bg-card border rounded-sm overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary/40 h-full">
                  <div className="h-44 overflow-hidden relative bg-zinc-800">
                    {area.image ? (
                      <img
                        src={area.image}
                        alt={area.title}
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500 group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                        <area.icon size={64} className="text-white/10" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <div className="bg-primary/20 border border-primary/30 p-2 rounded-sm inline-block text-primary">
                        <area.icon size={20} />
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-bold text-foreground mb-2 text-lg group-hover:text-primary transition-colors">{area.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{area.desc}</p>
                    <span className="text-primary text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Ver mais <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/atuacao"
              className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-8 py-3 rounded-sm font-semibold hover:border-primary hover:text-primary transition-colors"
            >
              Ver todas as áreas de atuação <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Values teaser */}
      <section className="py-24 bg-zinc-950 text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-10 bg-primary" />
                <span className="text-white/50 font-bold uppercase tracking-widest text-xs">Nossos Valores</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Princípios que sustentam cada <span className="text-primary">metro quadrado.</span>
              </h2>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                Nossa atuação é pautada por valores inegociáveis que garantem transparência, qualidade e responsabilidade em todas as relações.
              </p>
              <Link
                href="/sobre"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                Conheça nossa essência <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Ética e Transparência",
                "Excelência Técnica",
                "Segurança em Primeiro Lugar",
                "Cumprimento de Prazos",
                "Respeito ao Meio Ambiente",
                "Valorização das Pessoas",
                "Inovação Contínua",
                "Responsabilidade Social",
              ].map((valor, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-sm"
                >
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span className="text-white/80 text-sm font-medium">{valor}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Pronto para iniciar seu projeto?
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
            Entre em contato com nossa equipe e descubra como a VR Lopes pode transformar sua obra em realidade.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 bg-zinc-950 text-white px-10 py-4 rounded-sm font-bold text-lg hover:bg-zinc-800 transition-colors"
          >
            Fale com nossa equipe <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
