export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Leonardo Ferreira',
    subtitle: 'Software Engineering Specialist',
    description: 'Leonardo Ferreira Blog e Portifólio',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projetos',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        },
        {
            text: 'Sobre',
            href: '/about'
        },
    ],
    footerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projetos',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        },
        {
            text: 'Sobre',
            href: '/about'
        },
    ],
    socialLinks: [
        {
            text: 'Github',
            href: 'https://github.com/leoferreiralima'
        },
        {
            text: 'Linkedin',
            href: 'https://www.linkedin.com/in/leonardo-ferreira-lima/'
        },
        {
            text: 'E-mail',
            href: 'mailto:leonardo@leoferreira.dev'
        }
    ],
    hero: {
        title: 'Olá, Bem Vindo!',
        text: `Eu sou **Leonardo Ferreira**, um profissional de desenvolvimento de software com mais de 6 anos de experiência, especializado em soluções de E-commerce. Possuo habilidades em Java, NodeJs, Python e React, liderança em arquitetura de software, integração de sistemas e aprimoramento da qualidade de código. Minha carreira é marcada pela entrega de soluções eficientes e escaláveis, colaboração com clientes e uma forte capacidade de adaptação às novas tecnologias. Estou entusiasmado para explorar oportunidades de colaboração e contribuir para o sucesso de seus projetos.`,
        image: {
            src: '/hero.jpg',
            alt: 'Foto do Leonardo Ferreira'
        },
        actions: [
            {
                text: 'Entre em Contato',
                href: 'https://www.linkedin.com/in/leonardo-ferreira-lima/'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
