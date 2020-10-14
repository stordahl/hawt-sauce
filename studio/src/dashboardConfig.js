export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8771848b9c321c0a2554b7',
                  title: 'Sanity Studio',
                  name: 'hawt-sauce-studio',
                  apiId: 'b366ff1f-9b35-4eef-9fe3-1be8e9453de6'
                },
                {
                  buildHookId: '5f877184711a3f1b7bf57a9d',
                  title: 'Blog Website',
                  name: 'hawt-sauce',
                  apiId: '055d1258-adf7-4751-ad6e-5a0608772059'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stordahl/hawt-sauce',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://hawt-sauce.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
