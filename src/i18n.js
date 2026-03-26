import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pt: {
    translation: {
      nav: {
        brand: 'Portfólio de Eduarda Guimarães',
        about: 'Sobre Mim',
        projects: 'Projetos',
        experience: 'Experiência',
        contact: 'Contato',
        switchLanguage: 'Trocar idioma',
        switchLabel: 'English',
      },
      footer: {
        rights: '© 2026 Eduarda Guimarães. Todos os direitos reservados.',
      },
      hero: {
        greeting: 'Olá, eu sou',
        name: 'Eduarda Guimarães',
        role: 'QA Tester & Full-Stack Developer',
        about:
          'Recentemente efetivada como <strong>QA Tester</strong>, consolidei minha transição para a área de<strong> Qualidade de Software</strong> unindo minha base técnica em<strong> Desenvolvimento Full-Stack</strong> com uma visão crítica sobre o ciclo de vida das aplicações.<br /><br />Ter experiência prática com <strong>Java</strong>, <strong>JavaScript</strong>, <strong>React</strong> e<strong> Node.js</strong> me permite realizar testes mais assertivos e técnicos, compreendendo a arquitetura por trás de cada bug.<br /><br />Concluí minha trajetória técnica na <strong>Escola Técnica Estadual Monteiro Lobato (CIMOL)</strong> e hoje foco em garantir entregas de alta performance e usabilidade em colaboração com o time de desenvolvimento.',
        chips: ['Brasil'],
        contactButton: 'Fale comigo',
        resumeButton: 'Baixar CV',
        resumeDownload: 'Eduarda Guimaraes - Curriculo Virtual.pdf',
        photoAlt: 'Foto de Eduarda Guimarães',
      },
      languages: {
        title: 'Idiomas',
        items: [
          {
            name: 'Português',
            level: 'Nativo',
            icon: 'globe2',
          },
          {
            name: 'Inglês',
            level: 'Avançado',
            icon: 'globe',
          },
        ],
      },
      technologies: {
        title: 'Tecnologias e ferramentas',
        items: [
          'Java',
          'JavaScript',
          'React',
          'Node.js',
          'Python',
          'Firebase',
          'OpenAI API',
          'Git',
          'GitHub',
          'HTML',
          'CSS',
          'Bootstrap',
        ],
      },
      projects: {
        title: 'Projetos em destaque',
        items: [
          {
            title: 'Vocational Test',
            badge: 'TCC',
            description:
              'Plataforma full-stack com inteligência artificial para orientação vocacional, desenvolvida como Trabalho de Conclusão de Curso. O projeto utiliza <strong>React</strong>, <strong>Python</strong>,<strong> Firebase</strong> e <strong>OpenAI</strong> para oferecer recomendações personalizadas com base nas respostas do usuário.',
            links: [
              {
                label: 'Acessar site',
                href: 'https://www.vocationaltest.com.br',
                variant: 'purple',
              },
              {
                label: 'Ver repositório',
                href: 'https://github.com/eduarda-guimaraes/Vocational-Test',
                variant: 'github',
              },
            ],
          },
          {
            title: 'Batalha Naval em Java',
            description:
              'Jogo baseado no clássico Batalha Naval com modos jogador vs. jogador e jogador vs. máquina, reforçando lógica, orientação a objetos e estruturação de regras.',
            links: [
              {
                label: 'Ver repositório',
                href: 'https://github.com/eduarda-guimaraes/Batalha-Naval',
                variant: 'github',
              },
            ],
          },
          {
            title: 'Patinhas & Cia',
            description:
              'Projeto de pet shop com e-commerce, foco em responsividade e persistência de dados no navegador usando <strong>HTML</strong>, <strong>CSS</strong> e <strong>JavaScript</strong>.',
            links: [
              {
                label: 'Acessar site',
                href: 'https://eduarda-guimaraes.github.io/Teach3035-PetShop/',
                variant: 'purple',
              },
              {
                label: 'Ver repositório',
                href: 'https://github.com/eduarda-guimaraes/Teach3035-PetShop',
                variant: 'github',
              },
            ],
          },
        ],
      },
      experience: {
        title: 'Experiência e formação',
        workTitle: 'Experiência',
        educationTitle: 'Formação',
        jobs: [
          {
            title: 'QA Tester',
            company: 'SNAPCONTROL OFICIAL',
            period: 'Mar 2026 - Atual',
            type: 'Tempo integral',
            description:
              'Atuo com foco em qualidade de software, investigando comportamentos da aplicação com olhar técnico e colaborando com o time de desenvolvimento para entregas mais estáveis, performáticas e usáveis.',
          },
          {
            title: 'QA Tester',
            company: 'SNAPCONTROL OFICIAL',
            period: 'Jan 2026 - Mar 2026',
            type: 'Estágio',
            description:
              'Iniciei minha experiência em QA aplicando minha base em desenvolvimento full-stack para validar fluxos críticos, entender a arquitetura do produto e tornar a identificação de bugs mais assertiva.',
          },
        ],
        education: [
          {
            title: 'Escola Técnica Estadual Monteiro Lobato',
            subtitle: 'Ensino Médio Técnico em Informática',
            period: 'Fev 2023 - Ago 2026',
            description:
              'Construí uma base sólida em desenvolvimento de software e análise de sistemas, com participação ativa em projetos e atividades em grupo que fortaleceram minha comunicação e trabalho em equipe.',
          },
          {
            title: 'Right Way Idiomas',
            subtitle: 'Inglês',
            period: 'Fev 2018 - Dez 2021',
            description:
              'Desenvolvi fluência para leitura, escrita, escuta e conversação em inglês, o que hoje me ajuda a navegar com facilidade por documentações técnicas e contextos profissionais internacionais.',
          },
        ],
      },
      contact: {
        title: 'Contato',
        items: [
          {
            icon: 'envelope-fill',
            label: 'aeduardaguimaraes@gmail.com',
            href: 'mailto:aeduardaguimaraes@gmail.com',
            color: '#b39ddb',
          },
          {
            icon: 'linkedin',
            label: 'linkedin.com/in/eduardaguimaraess/',
            href: 'https://www.linkedin.com/in/eduardaguimaraess/',
            color: '#0a66c2',
          },
          {
            icon: 'github',
            label: 'github.com/eduarda-guimaraes',
            href: 'https://github.com/eduarda-guimaraes',
            color: '#333',
          },
        ],
      },
    },
  },
  en: {
    translation: {
      nav: {
        brand: "Eduarda Guimarães' Portfolio",
        about: 'About Me',
        projects: 'Projects',
        experience: 'Experience',
        contact: 'Contact',
        switchLanguage: 'Change language',
        switchLabel: 'Português',
      },
      footer: {
        rights: '© 2026 Eduarda Guimarães. All rights reserved.',
      },
      hero: {
        greeting: "Hello, I'm",
        name: 'Eduarda Guimarães',
        role: 'QA Tester & Full-Stack Developer',
        about:
          'Recently hired as a <strong>QA Tester</strong>, I consolidated my transition into<strong> Software Quality</strong> by combining my<strong> Full-Stack Development</strong> background with a critical view of the application lifecycle.<br /><br />Hands-on experience with <strong>Java</strong>, <strong>JavaScript</strong>, <strong>React</strong>, and <strong>Node.js</strong> allows me to approach testing in a more technical and assertive way, understanding the architecture behind each bug.<br /><br />I completed my technical journey at <strong>Escola Técnica Estadual Monteiro Lobato (CIMOL)</strong>, and today I focus on helping teams ship high-performance and user-friendly products.',
        chips: ['Brazil'],
        contactButton: 'Contact Me',
        resumeButton: 'Download Resume',
        resumeDownload: 'Eduarda Guimaraes - Virtual Resume.pdf',
        photoAlt: 'Photo of Eduarda Guimarães',
      },
      languages: {
        title: 'Languages',
        items: [
          {
            name: 'Portuguese',
            level: 'Native',
            icon: 'globe2',
          },
          {
            name: 'English',
            level: 'Advanced',
            icon: 'globe',
          },
        ],
      },
      technologies: {
        title: 'Technologies and tools',
        items: [
          'Java',
          'JavaScript',
          'React',
          'Node.js',
          'Python',
          'Firebase',
          'OpenAI API',
          'Git',
          'GitHub',
          'HTML',
          'CSS',
          'Bootstrap',
        ],
      },
      projects: {
        title: 'Featured projects',
        items: [
          {
            title: 'Vocational Test',
            badge: 'Capstone Project',
            description:
              'An AI-powered full-stack platform for vocational guidance, developed as my capstone project. It uses <strong>React</strong>, <strong>Python</strong>, <strong>Firebase</strong>, and<strong> OpenAI</strong> to deliver personalized career recommendations based on user responses.',
            links: [
              {
                label: 'View site',
                href: 'https://www.vocationaltest.com.br',
                variant: 'purple',
              },
              {
                label: 'View repository',
                href: 'https://github.com/eduarda-guimaraes/Vocational-Test',
                variant: 'github',
              },
            ],
          },
          {
            title: 'Battleship in Java',
            description:
              'A Java implementation of the classic Battleship game, reinforcing logic, object-oriented concepts, and gameplay rules.',
            links: [
              {
                label: 'View repository',
                href: 'https://github.com/eduarda-guimaraes/Batalha-Naval',
                variant: 'github',
              },
            ],
          },
          {
            title: 'Patinhas & Cia',
            description:
              'A pet shop and e-commerce project focused on responsive UI and browser-based persistence using<strong> HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>.',
            links: [
              {
                label: 'View site',
                href: 'https://eduarda-guimaraes.github.io/Teach3035-PetShop/',
                variant: 'purple',
              },
              {
                label: 'View repository',
                href: 'https://github.com/eduarda-guimaraes/Teach3035-PetShop',
                variant: 'github',
              },
            ],
          },
        ],
      },
      experience: {
        title: 'Experience and education',
        workTitle: 'Experience',
        educationTitle: 'Education',
        jobs: [
          {
            title: 'QA Tester',
            company: 'SNAPCONTROL OFICIAL',
            period: 'Mar 2026 - Present',
            type: 'Full-time',
            description:
              'I work with a strong focus on software quality, investigating application behavior with a technical mindset and partnering with the development team to deliver stable, high-performance, and user-friendly experiences.',
          },
          {
            title: 'QA Tester',
            company: 'SNAPCONTROL OFICIAL',
            period: 'Jan 2026 - Mar 2026',
            type: 'Internship',
            description:
              'I started my QA journey by using my full-stack development background to validate critical flows, understand product architecture, and report bugs with more precision and context.',
          },
        ],
        education: [
          {
            title: 'Escola Técnica Estadual Monteiro Lobato',
            subtitle: 'Technical High School, IT',
            period: 'Feb 2023 - Aug 2026',
            description:
              'I built a solid foundation in software development and systems analysis while actively contributing to projects and group work that strengthened my communication and teamwork skills.',
          },
          {
            title: 'Right Way Idiomas',
            subtitle: 'English',
            period: 'Feb 2018 - Dec 2021',
            description:
              'I developed strong reading, writing, listening, and speaking skills in English, which now helps me work comfortably with technical documentation and professional environments.',
          },
        ],
      },
      contact: {
        title: 'Contact',
        items: [
          {
            icon: 'envelope-fill',
            label: 'aeduardaguimaraes@gmail.com',
            href: 'mailto:aeduardaguimaraes@gmail.com',
            color: '#b39ddb',
          },
          {
            icon: 'linkedin',
            label: 'linkedin.com/in/eduardaguimaraess/',
            href: 'https://www.linkedin.com/in/eduardaguimaraess/',
            color: '#0a66c2',
          },
          {
            icon: 'github',
            label: 'github.com/eduarda-guimaraes',
            href: 'https://github.com/eduarda-guimaraes',
            color: '#333',
          },
        ],
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'pt',
  fallbackLng: 'pt',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
