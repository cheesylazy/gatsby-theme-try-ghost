# gatsby-theme-try-ghost
[![Released under MIT license.](https://badgen.net/github/license/micromatch/micromatch)](https://github.com/styxlab/gatsby-theme-try-ghost/blob/master/LICENSE)
[![gatsby-theme-try-ghost npm package version.](https://badgen.net/npm/v/gatsby-theme-try-ghost)](https://www.npmjs.org/package/gatsby-theme-try-ghost)
[![PRs welcome!](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)]()
 
A Gatsby theme plugin for creating blogs from headless [Ghost CMS](https://ghost.org/changelog/jamstack/).

Turn your Ghost blog into a lightning fast static website. This Gatsby theme is a frontend replacement of the Ghost handlebars engine featuring the standard Ghost Casper skin and functionality. All content is sourced from a headless Ghost CMS.


## Demo

Play with the [Demo](https://styxlab.github.io) to get a first impression.


## Features

- Ghost Casper look and feel
- Sticky navigation headers
- [Gatsby images](https://using-gatsby-image.gatsbyjs.org/) :rocket: :new:
- Syntax highlighting with PrismJS :new:
- Rewrite CMS links to relative :new:
- Hover on author avatar
- Secondary navigation
- Styled 404 page
- SEO optimized
- Fully responsive
- Composable and extensible

## Performance

![Lighthouse Score](https://cms.gotsby.org/content/images/gotsby-lighthouse.png)


## Addons

Additional features can be integrated by installing Gatsby themes or plugins. The following plugins have been tested to work with this repository:

 - Contact page with [gatsby-theme-ghost-contact](https://github.com/styxlab/gatsby-theme-ghost-contact) :new:
 - Site tracking with [Ackee](https://github.com/burnsy/gatsby-plugin-ackee-tracker)
 

## Installation

> Head over to the [starter repo](https://github.com/styxlab/gatsby-starter-try-ghost) to get up and running quickly! 


If you want to add this blog theme to an existing site, follow these instructions:

1. Install the blog theme

    ```bash
    yarn add gatsby-theme-try-ghost
    # or
    npm install gatsby-theme-try-ghost --save
    ```

2. Add the following configuration to your `gatsby-config.js` file

    ```js
    // gatsby-config.js
    module.exports = {
    plugins: [
        {
        resolve: `gatsby-theme-try-ghost`,
        options: {
            siteConfig: {
            siteUrl: `https://your-bog.com`,
            postsPerPage: 12,
            siteTitleMeta: `Gatsby Frontend powered by headless Ghost CMS`,
            siteDescriptionMeta: `Turn your Ghost blog into a lightning fast static website with Gatsby`, 
            shareImageWidth: 1000,
            shareImageHeight: 523,
            shortTitle: `Ghost`,
            siteIcon: `favicon.png`,
            backgroundColor: `#e9e9e9`,
            themeColor: `#15171A`,
            },
            ghostConfig: {
                "development": {
                    "apiUrl": "http://localhost:2368",
                    "contentApiKey": "9fcfdb1e5ea5b472e2e5b92942",
                },
                "production": {
                    "apiUrl": "https://your-ghost-cms.com",
                    "contentApiKey": "9fcfdb1e5ea5b472e2e5b92942",
                },
            },
          },
       },
    ],  
    }
    ```

3. Update siteConfig

    In the configuration shown above, the most important fields to be changed are `siteUrl`, `siteTitleMeta` and      `siteDescriptionMeta`. Update at least those to fit your needs. Also make sure your `favicon.png` can be found in folder `static` of your working directory.

4. Ghost Content API Keys

    Change the `apiUrl` value to the URL of your Ghost CMS site. Next, update the `contentApiKey` value to a key associated with the Ghost CMS site. A key can be provided by creating an integration within Ghost Admin. Navigate to Integrations and click "Add new integration". Name the integration appropriately and click create.



## Running

Start the development server. You now have a Gatsby site pulling content from headless Ghost.

```bash
gatsby develop
```


## Optimizing

You can disable the default Ghost Handlebars Theme front-end by enabling the `Make this site private` flag within your Ghost settings. This enables password protection in front of the Ghost install and sets `<meta name="robots" content="noindex" />` so your Gatsby front-end becomes the source of truth for SEO.


# Copyright & License

Copyright (c) 2020 styxlab - Released under the [MIT license](LICENSE).