export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '6240733b512d9d49f46208e8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-6efp1mnj',
                  apiId: '4bc03fdc-cbd1-449e-88dd-31d75f30db45'
                },
                {
                  buildHookId: '6240733bd01b19503dff10a4',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-jr8yd7su',
                  apiId: 'a738bc3f-49cd-495e-b8c1-ecc2a8d353de'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nidoBM/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-jr8yd7su.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
