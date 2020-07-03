/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/camelcase */
const path = require("path");

module.exports = {
  siteMetadata: {
    title: "Barbershop 9:11",
    description:
      "Барбершоп в центре Минска! Приятные цены. Индивидуальный подход. Лучшие мастера. Отличное качество. Ждём Вас! Телефон: +375 447 666 911 ",
    author: "@dariavv",
    siteUrl: "https://911barber.by/",
    telegramUsername: "@minsk911",
    image: "./src/assets/images/logo.png"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-typescript",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "text-content",
        path: `${__dirname}/src/text-content`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: "gatsby-plugin-sitemap"
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "assets",
              quality: 100
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 2000,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: path.resolve(__dirname, "src/assets/images/svg")
        }
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/assets/images/favicon.jpg" // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ["develop"],
        options: {
          emitWarning: true,
          failOnError: false
        }
      }
    }
  ]
};
