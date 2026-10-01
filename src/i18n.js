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
          'Atualmente atuo como <strong>QA Tester</strong>, unindo minha base em <strong>Desenvolvimento Full-Stack</strong> a uma visão analítica sobre a qualidade das aplicações.<br /><br />Sou apaixonada por <strong>aprender novas tecnologias, resolver problemas e entender como as aplicações funcionam</strong>. No trabalho, atuo com <strong>testes, Postman e PL/SQL</strong>, realizando testes de APIs e criação e análise de queries em banco de dados. Paralelamente, estudo <strong>Cypress</strong> e outras tecnologias de automação de testes, ampliando meus conhecimentos em QA.<br /><br />Minha experiência com <strong>Java, TypeScript, React e Node.js</strong> também contribui para uma comunicação mais técnica e próxima com o time de desenvolvimento.<br /><br />Formada em <strong>Técnico em Informática pelo CIMOL</strong> e graduanda em <strong>Sistemas de Informação</strong>, busco evoluir continuamente em <strong>Qualidade de Software e Desenvolvimento Full-Stack</strong>.',
        chips: ['Brasil'],
        contactButton: 'Fale comigo',
        resumeButton: 'Baixar CV',
        resumeDownload: 'Eduarda Guimaraes - Curriculo Virtual.pdf',
        photoAlt: 'Foto de Eduarda Guimarães',
      },
      languages: {
        title: 'Idiomas',
        items: [
          { name: 'Português', level: 'Nativo', icon: 'globe2' },
          { name: 'Inglês', level: 'Avançado', icon: 'globe' },
        ],
      },
      technologies: {
        title: 'Tecnologias e ferramentas',
        items: [
          { name: 'Java', icon: 'filetype-java', color: '#e76f00' },
          { name: 'TypeScript', icon: 'filetype-tsx', color: '#3178c6' },
          { name: 'React', icon: 'filetype-jsx', color: '#0ea5e9' },
          { name: 'Node.js', icon: 'terminal', color: '#2f855a' },
          { name: 'Python', icon: 'terminal-split', color: '#3776ab' },
          { name: 'PL/SQL', icon: 'database-fill-gear', color: '#c2410c' },
          { name: 'Postman', icon: 'send-fill', color: '#ff6c37' },
          { name: 'Firebase', icon: 'hdd-stack-fill', color: '#f59e0b' },
          { name: 'OpenAI API', icon: 'cpu-fill', color: '#10a37f' },
          { name: 'Bootstrap', icon: 'bootstrap', color: '#7952b3' },
          { name: 'Cypress', icon: 'bug-fill', color: '#2e7d32' },
        ],
      },
      projects: {
        title: 'Projetos em destaque',
        items: [
          {
            title: 'Vocational Test',
            badge: 'TCC',
            description:
              'Plataforma full-stack com inteligência artificial para orientação vocacional, desenvolvida como Trabalho de Conclusão de Curso. O projeto utiliza <strong>React</strong>, <strong>Python</strong>, <strong>Firebase</strong> e <strong>OpenAI</strong> para oferecer recomendações personalizadas com base nas respostas do usuário.',
            links: [
              { label: 'Acessar site', href: 'https://vocational-test-90cd1.web.app', variant: 'purple' },
              { label: 'Ver repositório', href: 'https://github.com/eduarda-guimaraes/Vocational-Test', variant: 'github' },
            ],
          },
          {
            title: 'Sistema de Gestão Escolar - JPA & Hibernate',
            description:
              'Sistema console para gerenciar alunos, cursos e matrículas usando Java, JPA/Hibernate e PostgreSQL. Inclui CRUD, buscas e relatórios formatados. Configure o banco e ajuste `persistence.xml` para executar.',
            links: [{ label: 'Ver repositório', href: 'https://github.com/eduarda-guimaraes/sistema-de-cursos', variant: 'github' }],
          },
          {
            title: 'TeachGram',
            description:
              'Rede social fullstack com autentica\u00e7\u00e3o, usu\u00e1rios, posts e amizades, desenvolvida com Java, Spring Boot, React e TypeScript.',
            technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'TypeScript', 'Vite', 'Tailwind CSS'],
            links: [{ label: 'Ver repositório', href: 'https://github.com/eduarda-guimaraes/teachgram-desafio', variant: 'github' }],
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
            title: 'Universidade Feevale',
            subtitle: 'Bacharelado em Sistemas de Informação',
            period: 'Jul 2026 - Atual',
            description: 'Atualmente curso Sistemas de Informação para aprofundar meus conhecimentos em tecnologia e ampliar minha visão sobre desenvolvimento e qualidade de software.',
          },
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
          { icon: 'envelope-fill', label: 'aeduardaguimaraes@gmail.com', href: 'mailto:aeduardaguimaraes@gmail.com', color: '#b39ddb' },
          { icon: 'linkedin', label: 'linkedin.com/in/eduardaguimaraess/', href: 'https://www.linkedin.com/in/eduardaguimaraess/', color: '#0a66c2' },
          { icon: 'github', label: 'github.com/eduarda-guimaraes', href: 'https://github.com/eduarda-guimaraes', color: '#333' },
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
          'I currently work as a <strong>QA Tester</strong>, combining my <strong>Full-Stack Development</strong> background with an analytical perspective on application quality.<br /><br />I am passionate about <strong>learning new technologies, solving problems, and understanding how applications work</strong>. At work, I use <strong>testing, Postman, and PL/SQL</strong> to test APIs and create and analyze database queries. In parallel, I am studying <strong>Cypress</strong> and other test automation technologies to expand my QA knowledge.<br /><br />My experience with <strong>Java, TypeScript, React, and Node.js</strong> also helps me communicate more effectively with the development team on technical topics.<br /><br />I hold a <strong>Technical Diploma in IT from CIMOL</strong> and am pursuing a <strong>Bachelor’s degree in Information Systems</strong>. I am committed to continuous growth in <strong>Software Quality and Full-Stack Development</strong>.',
        chips: ['Brazil'],
        contactButton: 'Contact Me',
        resumeButton: 'Download Resume',
        resumeDownload: 'Eduarda Guimaraes - Virtual Resume.pdf',
        photoAlt: 'Photo of Eduarda Guimarães',
      },
      languages: {
        title: 'Languages',
        items: [
          { name: 'Portuguese', level: 'Native', icon: 'globe2' },
          { name: 'English', level: 'Advanced', icon: 'globe' },
        ],
      },
      technologies: {
        title: 'Technologies and tools',
        items: [
          { name: 'Java', icon: 'filetype-java', color: '#e76f00' },
          { name: 'TypeScript', icon: 'filetype-tsx', color: '#3178c6' },
          { name: 'React', icon: 'filetype-jsx', color: '#0ea5e9' },
          { name: 'Node.js', icon: 'terminal', color: '#2f855a' },
          { name: 'Python', icon: 'terminal-split', color: '#3776ab' },
          { name: 'PL/SQL', icon: 'database-fill-gear', color: '#c2410c' },
          { name: 'Postman', icon: 'send-fill', color: '#ff6c37' },
          { name: 'Firebase', icon: 'hdd-stack-fill', color: '#f59e0b' },
          { name: 'OpenAI API', icon: 'cpu-fill', color: '#10a37f' },
          { name: 'Bootstrap', icon: 'bootstrap', color: '#7952b3' },
          { name: 'Cypress', icon: 'bug-fill', color: '#2e7d32' },
        ],
      },
      projects: {
        title: 'Featured projects',
        items: [
          {
            title: 'Vocational Test',
            badge: 'Capstone Project',
            description:
              'An AI-powered full-stack platform for vocational guidance, developed as my capstone project. It uses <strong>React</strong>, <strong>Python</strong>, <strong>Firebase</strong>, and <strong>OpenAI</strong> to deliver personalized career recommendations based on user responses.',
            links: [
              { label: 'View site', href: 'https://vocational-test-90cd1.web.app', variant: 'purple' },
              { label: 'View repository', href: 'https://github.com/eduarda-guimaraes/Vocational-Test', variant: 'github' },
            ],
          },
          {
            title: 'School Management System - JPA & Hibernate',
            description:
              'Console system to manage students, courses and enrollments using Java, JPA/Hibernate and PostgreSQL. Includes CRUD, search and formatted reports. Configure your DB and update `persistence.xml` to run.',
            links: [{ label: 'View repository', href: '#', variant: 'github' }],
          },
          {
            title: 'TeachGram',
            description:
              'Full-stack social network with authentication, users, posts, and friendships, built with Java, Spring Boot, React, and TypeScript.',
            technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'TypeScript', 'Vite', 'Tailwind CSS'],
            links: [{ label: 'View repository', href: 'https://github.com/eduarda-guimaraes/teachgram-desafio', variant: 'github' }],
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
          { title: 'Universidade Feevale', subtitle: 'Bachelor’s degree in Information Systems', period: 'Jul 2026 - Present', description: 'I am pursuing Information Systems to deepen my knowledge of technology and broaden my perspective on software development and quality.' },
          { title: 'Escola Técnica Estadual Monteiro Lobato', subtitle: 'Technical High School, IT', period: 'Feb 2023 - Aug 2026', description: 'I built a solid foundation in software development and systems analysis while actively contributing to projects and group work that strengthened my communication and teamwork skills.' },
          { title: 'Right Way Idiomas', subtitle: 'English', period: 'Feb 2018 - Dec 2021', description: 'I developed strong reading, writing, listening, and speaking skills in English, which now helps me work comfortably with technical documentation and professional environments.' },
        ],
      },
      contact: {
        title: 'Contact',
        items: [
          { icon: 'envelope-fill', label: 'aeduardaguimaraes@gmail.com', href: 'mailto:aeduardaguimaraes@gmail.com', color: '#b39ddb' },
          { icon: 'linkedin', label: 'linkedin.com/in/eduardaguimaraess/', href: 'https://www.linkedin.com/in/eduardaguimaraess/', color: '#0a66c2' },
          { icon: 'github', label: 'github.com/eduarda-guimaraes', href: 'https://github.com/eduarda-guimaraes', color: '#333' },
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
