import { createFileRoute } from "@tanstack/react-router";
import {
  Linkedin, Sparkles, FileText, Users, Brain,
  Layers, ClipboardList, GraduationCap, Award, Target,
  ExternalLink, FileDown, Search, Lightbulb, CheckCircle2, GitBranch, Database,
} from "lucide-react";
import profileImg from "@/assets/profile.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const experiences = [
  { title: "Sistemas para Gestão de Tráfego Aéreo", desc: "Participação em iniciativas relacionadas a operações aeronáuticas, regras de negócio e evolução de sistemas.", icon: Brain, },
  { title: "Processos e Operações", desc: "Mapeamento de fluxos, análise de processos e organização de informações para diferentes áreas.", icon: ClipboardList, },
  { title: "Integrações entre Sistemas", desc: "Definição e acompanhamento de requisitos relacionados à troca de informações entre aplicações e serviços.", icon: GitBranch, },
  { title: "APIs e Serviços", desc: "Participação na especificação de integrações, estruturas de dados e comunicação entre sistemas.", icon: Database, },
  { title: "Evolução de Produtos e Sistemas", desc: "Definição, documentação e validação de melhorias e novas funcionalidades.", icon: Sparkles, },
  { title: "Sistemas Corporativos", desc: "Atuação em sistemas utilizados por equipes operacionais, com foco em regras de negócio, usabilidade e evolução contínua.", icon: Users, },
];

const skills = [
  { icon: ClipboardList, title: "Organização e Clareza", desc: "Organizar informações e estruturar conteúdos para facilitar a compreensão e a tomada de decisão." },
  { icon: Brain, title: "Entendimento de Demandas", desc: "Entender o que está sendo solicitado e ajudar a transformar necessidades em definições mais claras." },
  { icon: FileText, title: "Engenharia de Requisitos", desc: "Transformar necessidades e regras de negócio em requisitos claros para o desenvolvimento." },
  { icon: Users, title: "Comunicação e Alinhamento", desc: "Aproximar diferentes pontos de vista para facilitar o entendimento entre negócio e tecnologia." },
  { icon: Sparkles, title: "IA Aplicada a Negócios", desc: "Possibilidades e limites da inteligência artificial quando aplicada a situações reais de negócio." },
  { icon: CheckCircle2, title: "Atenção aos Detalhes", desc: "Observar inconsistências e fazer perguntas quando algo não parece fazer sentido." },
];

const interests = [
  { title: "Análise de Negócios", desc: "Como diferentes pessoas enxergam o mesmo problema e chegam a soluções diferentes." },
  { title: "Engenharia de Requisitos", desc: "Como ideias, necessidades e regras são transformadas em requisitos claros para o desenvolvimento." },
  { title: "Processos", desc: "Como as atividades se conectam e influenciam a forma como as pessoas trabalham no dia a dia." },
  { title: "IA Aplicada a Negócios", desc: "Possibilidades e limites da inteligência artificial quando aplicada a situações reais de negócio." },
  { title: "Produtos Digitais", desc: "Como produtos evoluem ao longo do tempo e equilibram necessidades de usuários, negócio e tecnologia." },
  { title: "Qualidade de Software", desc: "Como sistemas são avaliados, validados e aprimorados ao longo do seu ciclo de evolução." },
];

const education = [
  { type: "Destaque Atual", title: "MBA em Inteligência Artificial Aplicada a Negócios", org: "FAAP • Em andamento", icon: Sparkles },
  { type: "Tecnologia", title: "Análise e Desenvolvimento de Sistemas", org: "Anhanguera • Tecnólogo", icon: Layers },
  { type: "Negócios", title: "Técnico em Administração", org: "ETEC", icon: Award },
  { type: "Tecnologia", title: "Técnico em Informática", org: "ETEC", icon: GraduationCap },
];

function Section({ id, eyebrow, title, intro, children }: { id: string; eyebrow: string; title: string; intro?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative py-24 md:py-15 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-primary mb-4">
            <span className="h-px w-8 bg-primary" /> {eyebrow}
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground">{title}</h2>
          {intro && <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-end">
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#hero" className="hover:text-foreground transition">Sobre</a>
            <a href="#trajetoria" className="hover:text-foreground transition">Trajetória</a>
            <a href="#competencias" className="hover:text-foreground transition">Competências</a>
            <a href="#atuacao" className="hover:text-foreground transition">Atuação</a>
            <a href="#formacao" className="hover:text-foreground transition">Formação</a>
             {/*<a href="#contato" className="hover:text-foreground transition">Contato</a>*/}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-6">
        <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
        <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/4 -right-40 w-96 h-96 rounded-full bg-accent/20 blur-[120px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-[1fr_auto] gap-12 md:gap-20 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight mb-6">
              Giuliana<br />
              <span className="text-gradient">Pimentel</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-light mb-8">
              Requisitos · Regras de Negócio · IA Aplicada a Negócios
            </p>

            <div className="text-base md:text-lg text-muted-foreground/90 max-w-xl leading-relaxed mb-10 space-y-4">
              <p>
                Sempre gostei de entender como as coisas funcionam. Quando algo não faz sentido para mim, dificilmente consigo simplesmente deixar para lá.
              </p>
              <p>
                  Foi essa característica que me levou para a área de requisitos e continua guiando minha forma de trabalhar e aprender.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="https://www.linkedin.com/in/giuliana-pimentel-84853714a" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
                <Linkedin className="w-4 h-4" /> LinkedIn ↗
              </a>
              {/* 
              <span className="text-muted-foreground/40">·</span>
              <a href="/Giuliana_Pimentel_Curriculo.pdf" target="_blank" rel="noopener noreferrer" download="Giuliana_Pimentel_Curriculo.pdf" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
                <FileDown className="w-4 h-4" /> Currículo
              </a>
              */}
            </div>
          </div>

          <div className="relative justify-self-center md:justify-self-end">
            <div className="absolute -inset-4 bg-gradient-primary rounded-3xl blur-2xl opacity-20" />
            <div className="relative w-64 h-80 md:w-80 md:h-[26rem] rounded-3xl overflow-hidden border border-border shadow-card-elegant">
              <img
                src={profileImg}
                alt="Giuliana Pimentel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Como cheguei até aqui */}
      <Section id="trajetoria" eyebrow="Trajetória" title="Como cheguei até aqui">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-12">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Com o tempo, percebi que uma parte importante do meu trabalho era justamente ajudar a dar clareza às coisas. Muitas vezes as informações chegavam de formas diferentes, com interpretações diferentes, e era preciso organizar tudo isso antes de seguir adiante.
            </p>
            <p>
              Ao longo da minha trajetória, trabalhei principalmente com requisitos e regras de negócio, atuando junto às áreas de negócio e tecnologia para transformar necessidades em definições mais claras.  
            </p>
          </div>
          <div className="space-y-4 md:-mt-12">
            {[
              { label: "Área de Atuação", value: "Requisitos e Regras de Negócio", desc: "Especificação e documentação de requisitos em conjunto com áreas de negócio e tecnologia.", icon: Search },
              { label: "Foco atual", value: "MBA em IA Aplicada a Negócios", desc: "FAAP • Em andamento", icon: Sparkles },
             ].map((c) => (
              <div key={c.label} className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-primary mb-3">
                  <c.icon className="w-3.5 h-3.5" /> {c.label}
                </div>
                <div className="text-lg font-semibold mb-2">{c.value}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Competências */}
      <Section id="competencias" eyebrow="Competências" title="Onde concentro minha experiência">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s) => (
            <div
              key={s.title}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-soft opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 shadow-glow">
                  <s.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

       {/* Atuação */}
      <Section id="atuacao" eyebrow="Atuação" title="Experiências e Contextos"
        intro="Ao longo da minha trajetória, participei de diferentes iniciativas relacionadas a sistemas, processos e requisitos. Por questões de confidencialidade, não apresento detalhes dos projetos, mas estes são alguns dos contextos em que atuei."
      >
        <div className="grid md:grid-cols-2 gap-4">
          {experiences.map((e) => (
            <div key={e.title} className="flex items-start gap-5 p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-soft border border-border flex items-center justify-center flex-shrink-0">
                <e.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{e.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {e.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Formação */}
      <Section
        id="formacao"
        eyebrow="Formação"
        title="Minha formação"
        intro="Minha formação reúne experiências em tecnologia e negócios. Atualmente, curso um MBA em Inteligência Artificial Aplicada a Negócios, área que tem despertado cada vez mais meu interesse."
      >
        <div className="grid md:grid-cols-2 gap-4">
          {education.map((e) => (
            <div key={e.title} className="flex items-start gap-5 p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-soft border border-border flex items-center justify-center flex-shrink-0">
                <e.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs font-medium tracking-wider uppercase text-primary mb-1">{e.type}</div>
                <h3 className="text-lg font-semibold mb-1">{e.title}</h3>
                <p className="text-sm text-muted-foreground">{e.org}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Interesses 
      <Section
        id="interesses"
        eyebrow="Interesses"
        title="Temas que despertam meu interesse"
        intro="Alguns temas acabaram despertando mais minha atenção ao longo da trajetória profissional. São assuntos que gosto de acompanhar, estudar e explorar quando tenho oportunidade."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {interests.map((g, i) => (
            <div key={g.title} className="relative p-7 rounded-2xl bg-gradient-soft border border-border">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-primary">0{i + 1}</span>
                <Target className="w-4 h-4 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{g.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{g.desc}</p>
            </div>
          ))}
        </div>
      </Section>*/}

      {/* Contato
      <Section
        id="contato"
        eyebrow="Contato"
        title="Onde me encontrar"
        intro="Se quiser acompanhar minha trajetória profissional, estes são os principais canais onde compartilho minha experiência, formação e desenvolvimento."
      >
        <div className="grid md:grid-cols-2 gap-4">
          <a
            href="https://www.linkedin.com/in/giuliana-pimentel-84853714a"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
              <Linkedin className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-base font-semibold">Giuliana Pimentel</div>
              <div className="text-sm text-muted-foreground">Perfil profissional, trajetória e desenvolvimento de carreira</div>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition" />
          </a>
          {/*
          <a
            href="/Giuliana_Pimentel_Curriculo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Giuliana_Pimentel_Curriculo.pdf"
            className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
              <FileDown className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-base font-semibold">Currículo</div>
              <div className="text-sm text-muted-foreground">Versão atualizada para consulta e download.</div>
            </div>
          </a>
          
        </div>
      </Section>
      */}
   

      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-6xl mx-auto text-sm text-muted-foreground text-center">
          © 2026 Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
