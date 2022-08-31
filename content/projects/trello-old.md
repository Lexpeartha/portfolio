---
slug: trello-clone-old
image: /projects/trello-clone.png
title: Trello clone (old)
creationDate: 2020-11-20
category: website
type: personal
description: >
  This application is the simple clone of Trello, made for fun & learning purposes. It uses drag and drop browser's API and Vuex store for mutating state and managing advanced re-ordering functionalities of columns and tasks.
codeLink: https://github.com/Lexpeartha/trello-clone
demoLink: https://trello-clone-4a7bd.web.app
---

# Trello clone

## Technologies used

- Vue
- Vuex
- TailwindCSS

## Description

Trello clone is project I was really excited about, mostly because Drag and drop API is very used in modern world of web apps, along with file drop-zones, which are made in the similar way.

This projects relies a lot on Vuex mutations/actions that are used to rearrenge order of columns and tasks, which gives app a lot of complexity. AppDrag and AppDrop components are made as a of layer abstraction for those functions. And finally it is possible to remove columns/tasks.

I had rough time working with this API, but it was fun nonetheless because I learned something very useful

## Overcame obstacles

- Wrapping functionality of dragging and dropping both columns and tasks with the same components
- Changing orders of tasks/columns in exact positions with Vuex