export const menuItems = [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'About',
        url: '/about'
    },
    {
        title: 'Services',
        url: '/services',
        submenu: [
            {
                title: 'Web Design',
                url: 'web-design'
            },
            {
                title: 'Web Develop',
                url: 'web-development',
                submenu: [
                    {
                        title: 'Frontend',
                        url: 'frontend'
                    },
                    {
                        title: 'Backend',
                        url: 'backend',
                        submenu: [
                            {
                                title: 'NodeJS',
                                url: 'node-js'
                            },
                            {
                                title: 'PHP',
                                url: 'php'
                            }
                        ]
                    }

                ]
            },
            {
                title: 'SEO',
                url: 'seo'
            },
            {
                title: 'Copy Writing',
                url: 'copy-writing'
            }
        ]
    },
    {
        title: 'Products',
        url: '/products',
        submenu: [
            {
                title: 'Software',
                url: 'software'
            },
            {
                title: 'Websites',
                url: 'websites'
            },
            {
                title: 'Web Apps',
                url: 'web-apps'
            }
        ]
    },
    {
        title: 'Contact',
        url: '/contact'
    }
];