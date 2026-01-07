---
slug: scool
image: /images/projects/archive/scool.jpg
title: Scool (2021)
creationDate: 2021-01-25
category: app
type: professional
archived: true
description: >
  Mobile learning platform developed by a team of three middle school students for a national app competition. Built with Flutter & Firebase during the pandemic.
---

# [Scool]{.highlight} <span class="text-lg opacity-70">(2021)</span>

App created for a national app competition. It uses Flutter & Firebase, and centers around the idea of making online schooling approachable and user-friendly.

::alert{icon="ion:archive-outline"}
#title
Archived Project

#default
This project was developed in 2021 during the pandemic by a team of three middle school students. The app has since been discontinued and the Firebase instance decommissioned. Source code is private per competition agreement.
::

## Technologies used

::list{icon="ion:arrow-right-c"}
- Dart & Flutter
- Firebase (Firestore, Storage, Authentication)
- QR Code integration
::

## Description & details

![Scool app interface](/images/projects/archive/scool.jpg){.highlight-image}

A team of 3 middle school friends (me being one of them) made this app from the ground up: from design and branding all the way to functionality integrations. The app is very adaptable and contains primarily user-generated content.

It has two types of accounts, for teachers and students. Teachers can create classrooms and upload study materials and assignments for their students. Students can enter classrooms created by teachers either by typing a classroom code manually or by scanning a QR code.

All classrooms have different color palettes generated based on the color the teacher selected when creating that class. Teachers can track and grade students' work (which are attached files they uploaded) and chat with them in real-time.

Most of the app's logic was implemented using the Factory Pattern, an OOP design pattern that allows us to create objects without having to specify the exact class that will be created. It creates objects based on data fetched from the Firestore database.

## Challenges overcome

::list
- Using Dart & Flutter to keep activities in sync with everything in Firestore in real-time
- Creating a dynamic environment for each classroom with custom theming
- Uploading files simultaneously, storing them in Firebase Storage, and saving their references in the database
- Coordinating work across a team of three middle school developers
::

## Project status

Project has been discontinued, and the Firebase instance that was supporting it has been deleted. Source code is private due to the agreement we entered by joining the competition and is not available to the public.
