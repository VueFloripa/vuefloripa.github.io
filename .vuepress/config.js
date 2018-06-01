// Other configs available at: https://vuepress.vuejs.org/config/
module.exports = {
  title: 'VueFloripa',
  description: 'Meetup na cidade de Florianópolis - SC que reúne a comunidade para discutir e apresentar ferramentas e ideias em relação a Vue.js',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
  ],
  evergreen: true,
  themeConfig: {
    search: false,
    lastUpdated: 'Última atualização',
    nav: [
      { text: 'Última edição', link: '/edicoes/3-vuefloripa' },
      { text: 'Edições anteriores', 
        items: [
          { text: '2º VueFloripa', link: '/edicoes/2-vuefloripa' },
          { text: '1º VueFloripa', link: '/edicoes/1-vuefloripa' },
        ]
      },
      { text: 'Sobre nós', link: '/sobre/' },
    ],
    sidebar: {
      '/edicoes/': [
        {
          collapsable: false,
          title: 'Edições passadas',
          children: [
            '',
            '3-vuefloripa',
            '2-vuefloripa',
            '1-vuefloripa',
          ],
        }
      ]
    }
  },
};
