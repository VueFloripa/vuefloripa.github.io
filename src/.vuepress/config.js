// Other configs available at: https://vuepress.vuejs.org/config/
module.exports = {
  title: 'VueFloripa',
  description: 'Meetup na cidade de Florianópolis - SC que reúne a comunidade para discutir e apresentar ferramentas e ideias em relação a Vue.js',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
  ],
  ga: 'UA-120216948-1',
  evergreen: true,
  themeConfig: {
    repo: 'vuefloripa/vuefloripa.github.io/tree/development/',
    search: false,
    lastUpdated: 'Última atualização',
    nav: [
      { text: 'Vue.js Summit', link: '/edicoes/#vue-js-summit' },
      { text: 'Última edição', link: '/edicoes/4-vuefloripa' },
      { text: 'Edições anteriores', 
        items: [
          { text: '3º VueFloripa', link: '/edicoes/3-vuefloripa' },
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
            '4-vuefloripa',
            '3-vuefloripa',
            '2-vuefloripa',
            '1-vuefloripa',
          ],
        }
      ]
    }
  },
};
