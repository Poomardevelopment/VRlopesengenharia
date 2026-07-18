import { Link } from "wouter";
import { Instagram, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-950 pt-20 pb-10 border-t border-white/10 text-white/80">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">

          <div className="md:col-span-1">
            <Link href="/" className="font-display font-bold text-2xl tracking-tighter uppercase inline-block mb-4 text-white">
              VR <span className="text-primary">Lopes</span>
            </Link>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              Construindo Infraestrutura.<br />Transformando Vidas.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-white/40 hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" aria-label="LinkedIn" className="text-white/40 hover:text-primary transition-colors"><Linkedin size={20} /></a>
              <a href="#" aria-label="Facebook" className="text-white/40 hover:text-primary transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 font-display">A Empresa</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/sobre" className="hover:text-primary transition-colors">Nossa Essência</Link></li>
              <li><Link href="/equipe" className="hover:text-primary transition-colors">Corpo Diretivo</Link></li>
              <li><Link href="/responsabilidade" className="hover:text-primary transition-colors">Impacto Social</Link></li>
              <li><Link href="/clientes" className="hover:text-primary transition-colors">Nossos Clientes</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 font-display">Áreas de Atuação</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/atuacao/publica" className="hover:text-primary transition-colors">Engenharia Pública</Link></li>
              <li><Link href="/atuacao/residencial" className="hover:text-primary transition-colors">Eng. Residencial</Link></li>
              <li><Link href="/atuacao/condominios" className="hover:text-primary transition-colors">Eng. para Condomínios</Link></li>
              <li><Link href="/atuacao/materiais" className="hover:text-primary transition-colors">Fornecimento de Materiais</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 font-display">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex flex-col">
                <span className="text-white/40 text-xs uppercase tracking-wider mb-1">Comercial</span>
                <span>(92) 00000-0000</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white/40 text-xs uppercase tracking-wider mb-1">E-mail</span>
                <span>contato@vrlopes.com.br</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white/40 text-xs uppercase tracking-wider mb-1">Localização</span>
                <span>Manaus, Amazonas – Brasil</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} VR Lopes LTDA. Todos os direitos reservados.</p>
          <p>CNPJ: 00.000.000/0001-00 &nbsp;|&nbsp; Manaus, Amazonas – Brasil</p>
        </div>
      </div>
    </footer>
  );
}
