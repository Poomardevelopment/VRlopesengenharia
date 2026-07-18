import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { Route, Switch, Router as WouterRouter } from 'wouter';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

import { HomePage } from '@/pages/home';
import { SobrePage } from '@/pages/sobre';
import { AtuacaoPage } from '@/pages/atuacao';
import { AtuacaoPublicaPage } from '@/pages/atuacao-publica';
import { AtuacaoResidencialPage } from '@/pages/atuacao-residencial';
import { AtuacaoCondominiosPage } from '@/pages/atuacao-condominios';
import { AtuacaoMateriaisPage } from '@/pages/atuacao-materiais';
import { EquipePage } from '@/pages/equipe';
import { ResponsabilidadePage } from '@/pages/responsabilidade';
import { ClientesPage } from '@/pages/clientes';
import { ContatoPage } from '@/pages/contato';

const queryClient = new QueryClient();

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6 text-center">
      <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">404</p>
      <h1 className="text-5xl font-display font-bold text-foreground mb-4">Página não encontrada</h1>
      <p className="text-muted-foreground mb-8">A página que você está procurando não existe ou foi movida.</p>
      <a href="/" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-semibold hover:bg-primary/90 transition-colors">
        Voltar ao Início
      </a>
    </div>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full font-sans antialiased bg-background text-foreground">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={() => <Layout><HomePage /></Layout>} />
      <Route path="/sobre" component={() => <Layout><SobrePage /></Layout>} />
      <Route path="/atuacao" component={() => <Layout><AtuacaoPage /></Layout>} />
      <Route path="/atuacao/publica" component={() => <Layout><AtuacaoPublicaPage /></Layout>} />
      <Route path="/atuacao/residencial" component={() => <Layout><AtuacaoResidencialPage /></Layout>} />
      <Route path="/atuacao/condominios" component={() => <Layout><AtuacaoCondominiosPage /></Layout>} />
      <Route path="/atuacao/materiais" component={() => <Layout><AtuacaoMateriaisPage /></Layout>} />
      <Route path="/equipe" component={() => <Layout><EquipePage /></Layout>} />
      <Route path="/responsabilidade" component={() => <Layout><ResponsabilidadePage /></Layout>} />
      <Route path="/clientes" component={() => <Layout><ClientesPage /></Layout>} />
      <Route path="/contato" component={() => <Layout><ContatoPage /></Layout>} />
      <Route component={() => <Layout><NotFound /></Layout>} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Router />
      </WouterRouter>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
