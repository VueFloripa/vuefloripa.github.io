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
      { text: 'Próxima edição', link: '/edicoes/#proxima-edicao' },
      { text: 'Última edição', link: '/edicoes/5-vuefloripa' },
      { text: 'Edições anteriores', 
        items: [
          { text: '5º VueFloripa', link: '/edicoes/5-vuefloripa' },
          { text: '4º VueFloripa', link: '/edicoes/4-vuefloripa' },
          { text: '3º VueFloripa', link: '/edicoes/3-vuefloripa' },
          { text: '2º VueFloripa', link: '/edicoes/2-vuefloripa' },
          { text: '1º VueFloripa', link: '/edicoes/1-vuefloripa' },
        ]
      },
      { text: 'Formatos',
        items: [
          { text: 'Talk', link: '/formatos/talk' },
          { text: '"Tu Vue?"', link: '/formatos/tu-vue' },
          { text: 'Tainha Bowl', link: '/formatos/tainha-bowl' },
        ]
      },
      { text: 'Vue.js Summit 2018', link: '/vuejs-summit/' },
      { text: 'Sobre nós', link: '/sobre/' },
    ],
    sidebar: {
      '/edicoes/': [
        {
          collapsable: false,
          title: 'Edições anteriores',
          children: [
            '5-vuefloripa',
            '4-vuefloripa',
            '3-vuefloripa',
            '2-vuefloripa',
            '1-vuefloripa',
          ],
        }
      ],
      '/formatos/': [
        {
          collapsable: false,
          title: 'Formatos',
          children: [
            'talk',
            'tu-vue',
            'tainha-bowl',
          ],
        }
      ]
    }
  },
};
