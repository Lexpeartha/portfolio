---
slug: portfolio-website
image: /images/projects/portfolio-website.png
title: Portfolio website
creationDate: 2022-09-01
category: website
type: personal
description: >
  Modern, performant portfolio website built with Nuxt 4 and Vue 3, featuring content-driven architecture with markdown-based pages, custom interactive Vue components, and static deployment for optimal performance.
---

# [Portfolio website]{.highlight}

The very website you're viewing! This portfolio showcases my professional work and technical knowledge with a touch of personality and authenticity. Built as a modern, performant web application featuring a content-driven architecture with git-based [CMS]{title="Content Management System"}, custom interactive Vue components embedded in markdown, and static deployment for optimal performance.

## Technologies used

::list{icon="ion:arrow-right-c"}
- Vue 3
- VueUse
- Nuxt 4 with `@nuxt/content` and `@nuxtjs/tailwindcss`
::

## Description & details

![Screenshot of my portfolio website](/images/projects/portfolio-website.png){.highlight-image}

Built with Vue 3 and Nuxt 4 leveraging [SSG]{title="Static Site Generation"}. The project started from the [Content-Wind](https://content-wind.nuxt.dev/){target="_blank"} template but since then it evolved into a heavily customized solution tailored to my specific needs.

The architecture utilizes Nuxt Content's capabilities, where markdown files serve as the primary content source instead of traditional Vue [SFC]{title="Single File Components"}s. This approach enables version-controlled content with the simplicity of markdown while maintaining the power of Vue components through custom [MDC]{title="Markdown Components"} syntax.

Styling is implemented primarily with TailwindCSS, including prose typography from the `@tailwindcss/typography` plugin for rendered markdown content. Additional utilities and fine-tuned details are written in SCSS for cases requiring more specific control beyond Tailwind's utility classes.

## Technical achievements

::list
- Implemented git-based content management using markdown files with Nuxt Content
- Created custom interactive Vue components that work seamlessly within markdown (pronunciation button, tooltips, dynamic lists)
- Configured automated static generation and edge deployment for optimal performance
- Designed accessible, responsive UI with semantic HTML and proper ARIA attributes
- Built a maintainable architecture where content updates require zero rebuilds in development
::

## Project links

::ProjectLinks{codeLink="https://github.com/Lexpeartha/portfolio"}
::
