// Source to deplay on gh page
// https://dev.to/agustinl/deploy-sapper-pwa-on-github-pages-2ih1

const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/webdesignninjas',
    {
        branch: 'master',
        repo: 'https://github.com/1983shiv/webdesignninjas.git',
        user: {
            name: '1983shiv',
            email: '1983.shiv@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)