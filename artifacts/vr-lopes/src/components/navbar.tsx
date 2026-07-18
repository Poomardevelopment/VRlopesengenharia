import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "A Empresa" },
  {
    href: "/atuacao",
    label: "Atuação",
    children: [
      { href: "/atuacao/publica", label: "Engenharia Pública" },
      { href: "/atuacao/residencial", label: "Engenharia Residencial" },
      { href: "/atuacao/condominios", label: "Eng. para Condomínios" },
      { href: "/atuacao/materiais", label: "Fornecimento de Materiais" },
    ],
  },
  { href: "/equipe", label: "Equipe" },
  { href: "/responsabilidade", label: "Impacto Social" },
  { href: "/clientes", label: "Clientes" },
  { href: "/contato", label: "Contato" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [atuacaoOpen, setAtuacaoOpen] = useState(false);

  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setAtuacaoOpen(false);
  }, [location]);

  const isTransparent = isHome && !isScrolled;

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        isScrolled || !isHome
          ? "bg-zinc-950/95 backdrop-blur-md border-b border-white/10 py-3 shadow-md"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className={cn(
            "font-display font-bold text-2xl tracking-tighter uppercase transition-colors",
            isTransparent ? "text-white" : "text-white"
          )}
        >
          VR <span className="text-primary">Lopes</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div key={item.href} className="relative">
                <button
                  onMouseEnter={() => setAtuacaoOpen(true)}
                  onMouseLeave={() => setAtuacaoOpen(false)}
                  onClick={() => setAtuacaoOpen((v) => !v)}
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 rounded-sm text-sm font-medium transition-colors",
                    location.startsWith("/atuacao")
                      ? "text-primary"
                      : isTransparent
                      ? "text-white/80 hover:text-white"
                      : "text-white/70 hover:text-white"
                  )}
                >
                  {item.label}
                  <ChevronDown size={14} className={cn("transition-transform", atuacaoOpen && "rotate-180")} />
                </button>
                {atuacaoOpen && (
                  <div
                    onMouseEnter={() => setAtuacaoOpen(true)}
                    onMouseLeave={() => setAtuacaoOpen(false)}
                    className="absolute top-full left-0 mt-1 bg-zinc-950 border border-white/10 rounded-sm shadow-xl min-w-[220px] py-2"
                  >
                    <Link
                      href="/atuacao"
                      className="block px-4 py-2.5 text-sm text-white/70 hover:text-primary hover:bg-white/5 transition-colors font-medium"
                    >
                      Visão Geral
                    </Link>
                    <div className="h-px bg-white/10 my-1" />
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={cn(
                          "block px-4 py-2.5 text-sm transition-colors hover:bg-white/5",
                          location === child.href ? "text-primary" : "text-white/70 hover:text-white"
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 rounded-sm text-sm font-medium transition-colors",
                  location === item.href
                    ? "text-primary"
                    : isTransparent
                    ? "text-white/80 hover:text-white"
                    : "text-white/70 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/contato"
            className="ml-2 bg-primary text-primary-foreground px-5 py-2 rounded-sm font-semibold text-sm hover:bg-primary/90 transition-colors"
          >
            Fale Conosco
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 rounded-sm text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-zinc-950 border-b border-white/10 shadow-xl py-4 flex flex-col">
          {NAV_ITEMS.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "block px-6 py-3 font-medium transition-colors hover:bg-white/5",
                  location === item.href || (item.href !== "/" && location.startsWith(item.href))
                    ? "text-primary"
                    : "text-white/80"
                )}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="bg-white/5 pl-4">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={cn(
                        "block px-6 py-2.5 text-sm transition-colors hover:text-primary",
                        location === child.href ? "text-primary" : "text-white/60"
                      )}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="px-6 pt-4">
            <Link
              href="/contato"
              className="block text-center bg-primary text-primary-foreground px-6 py-3 rounded-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
