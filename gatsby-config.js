/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/camelcase */
const path = require("path");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: "Белый список",
    description: "Поддержим хороших людей",
    author: "@smoothpie",
    siteUrl: "https://whitelist-by.netlify.app/",
    image: "./src/assets/images/logo.png"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
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
        name: "whitelist",
        short_name: "whitelist",
        start_url: "/",
        display: `standalone`,
        background_color: "#ffffff",
        theme_color: "#ffffff",
        display: "minimal-ui",
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: "/icons/icon-48x48.png",
            sizes: "48x48",
            type: "image/png"
          },
          {
            src: "/icons/icon-72x72.png",
            sizes: "72x72",
            type: "image/png"
          },
          {
            src: "/icons/icon-96x96.png",
            sizes: "96x96",
            type: "image/png"
          },
          {
            src: "/icons/icon-144x144.png",
            sizes: "144x144",
            type: "image/png"
          },
          {
            src: "/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/icons/icon-256x256.png",
            sizes: "256x256",
            type: "image/png"
          },
          {
            src: "/icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png"
          },
          {
            src: "/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
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
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WhiteListApi",
        fieldName: "whiteListApi",
        url: process.env.API_URL
        // headers: {
        //   // Learn about environment variables: https://gatsby.dev/env-vars
        //   Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        // },
      }
    },
    "gatsby-plugin-offline",

    {
      resolve: "gatsby-plugin-apollo",
      options: {
        uri: `https://cors-anywhere.herokuapp.com/${process.env.API_URL}` // proxy for CORS till Yulia dont fix it on backend
      }
    }
  ]
};
