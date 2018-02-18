# Rave Reviewz Gatsby + Netlify CMS

This repo contains our magazine site for posting interviews with artists for upcoming events in Sydney that is built with [Gatsby](https://www.gatsbyjs.org/), and [Netlify CMS](https://www.netlifycms.org): **[Live Site](https://www.ravereviewz.net.au/)**.

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## Prerequisites

* Node (I recommend using v8.2.0 or higher)
* Yarn (Optional)
* [Gatsby CLI](https://www.gatsbyjs.org/docs/)

### Access Locally

```
$ git clone https://github.com/jmcmullen/rave-reviewz-gatsby.git
$ cd rave-reviewz-gatsby
$ yarn
$ yarn develop
```

To test the CMS locally, you'll need run a production build of the site:

```
$ yarn build
$ yarn serve
```
