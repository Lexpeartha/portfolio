---
slug: personal-website
image: /images/projects/personal-website.png
title: My personal website
creationDate: 2022-09-01
category: website
type: personal
description: >
  Website made with Nuxt content module in document driven mode, utilizing markdown files for generating pages, and TailwindCSS for styling.
codeLink: https://github.com/Lexpeartha/trello-clone
---

# [Personal website]{.highlight}

The very website you're on! I've made it to showcase my projects and skills, and to have my very own corner of the internet.

## Technologies used

::list{icon="ion:arrow-right-c"}
- Vue 3
- VueUse
- Nuxt 3 with `@nuxt/content` and `@nuxtjs/tailwindcss`
::

## Description & details

![Screenshot of my personal website](/images/projects/personal-website.png){.highlight-image}

Website is created with Vue 3 and Nuxt 3 for SSR. It was made from [Content-Wind](https://content-wind.nuxt.dev/){target="_blank"} project template, but was heavily modified to suit my needs.

Website uses Nuxt content module with document driven mode, utilizing markdown files for generating pages, instead of usual Vue files.

Everything was styled using TailwindCSS, including typography generated from MD with `@tailwindcss/typography` plugin. Exceptions are minor details and utilities that were added to make the website look better, which are written in SCSS.

## Solved problems

::list
- Integrating git based CMS (which in this case were MD files) with nuxt to create content-driven pages
- Using Vue component in markdown files
- Creating simple, sleek and content-driven website
::