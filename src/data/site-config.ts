import type { ImageMetadata } from 'astro';
import heroImage from '../assets/hero.webp';

export type Image = {
    src: ImageMetadata;
    alt: string;
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
            href: '/github?utm_source=site&utm_content=social-link&utm_campaign=github'
        },
        {
            text: 'Linkedin',
            href: '/linkedin?utm_source=site&utm_content=social-link&utm_campaign=linkedin'
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
            src: heroImage,
            alt: 'Foto do Leonardo Ferreira'
        },
        actions: [
            {
                text: 'Entre em Contato',
                href: '/linkedin?utm_source=site&utm_content=hero&utm_campaign=linkedin'
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
