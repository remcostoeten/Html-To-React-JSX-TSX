
type SiteConfig = {
    name: string;
    description: string;
    url: string;
    links: {
        gitlab: string;
        github: string;
        linkedin: string;
        whatsapp: string;
        email: string;
        baseurl: string;
    };
};

export const siteConfig: SiteConfig = {
    name: 'Html to React ',
    description: 'A tool to convert your HTML to React JSX or TSX code..',
    url: 'https://html-to-react.com',
    links: {
        gitlab: 'https://gitlab.com/remcostoeten',
        github: 'https://github.com/remcostoeten',
        linkedin: 'https://www.linkedin.com/in/remcostoeten/',
        whatsapp: 'https://api.whatsapp.com/send?phone=yourphonenumber',
        email: 'mailto:remcostoeten@hotmail.com',
        baseurl: 'https://remcostoeten.com',
    },
};
