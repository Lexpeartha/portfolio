---
slug: trello-clone
image: /images/projects/archive/trello-clone.png
title: Trello Clone (2020)
creationDate: 2020-11-20
category: website
type: personal
archived: true
description: >
  Early Vue.js learning project exploring drag-and-drop functionality with Vuex state management. Built with Options API as a practice exercise.
---

# [Trello clone]{.highlight} <span class="text-lg opacity-70">(2020)</span>

This application is a clone of Trello, made for fun and learning purposes. It uses Vue Options API and Vuex. This project is marked as old because the methods used (Options API and Mixins) aren't up-to-date with current Vue ecosystem practices.

::alert{icon="ion:archive-outline"}
#title
Archived Project

#default
This project uses Vue Options API and Vuex, which represent earlier patterns in the Vue ecosystem. If I was writing it today, I would use Composition API and Pinia instead.
::

## Technologies used

::list{icon="ion:arrow-right-c"}
- Vue 2 (Options API)
- Vuex
- TailwindCSS
- Browser Drag & Drop API
::

## Description & details

![Trello clone interface](/images/projects/archive/trello-clone.png){.highlight-image}

Trello clone is a project I was really excited about, mostly because drag-and-drop is very common in the modern world of web apps, along with file drop-zones which are made in a similar way.

This project relies heavily on Vuex mutations and actions that are used to rearrange the order of columns and tasks, which gives the app a lot of complexity. `AppDrag` and `AppDrop` components are made as a layer of abstraction for those functions. Users can also remove columns and tasks as needed.

I had a rough time working with this API, but it was fun nonetheless because I learned something very useful about state management and drag-and-drop interactions.

## Challenges overcome

::list
- Wrapping functionality of dragging and dropping both columns and tasks with the same reusable components
- Changing orders of tasks and columns in exact positions using Vuex mutations
- Managing complex nested state updates while maintaining UI responsiveness
::

## Project links

::ProjectLinks{codeLink="https://github.com/Lexpeartha/trello-clone" demoLink="https://trello-clone-4a7bd.web.app/"}
::
