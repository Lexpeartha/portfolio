---
slug: scool
image: /images/projects/scool.jpg
title: Schooling mobile app
creationDate: 2021-01-25
category: app
type: professional
description: >
  App created for national app competition. It uses Flutter & Firebase, and it centers around online schooling.
---

# [Scool]{.highlight}

App created for national app competition. It uses Flutter & Firebase, and it centers around the idea of making online schooling approachable and user friendly.

## Technologies used

::list{icon="ion:arrow-right-c"}
- Dart
- Flutter
- Firebase
::

## Description & details

![Thumbnail Scool app image](/images/projects/scool.jpg){.highlight-image preset="showcase"}

App created for national app competition, which centers around schooling online. It's made with Flutter & Firebase, and it includes many features modern apps usually use: file storage, chatting and authentication.

A team of 3 middle school friends (me being one of them) made this app from the ground up: from design and branding all the way to functionality integrations. The app is very adaptable and contains primarily user-generated content. It has two types of accounts, for teachers and students. Teachers can create classrooms and upload study materials/assignments for their students. Students can enter the classroom created by teachers either by typing classroom code manually or by scanning a QR code.

All classrooms have different color palettes generated based on the color teacher selected when creating that class. And, of course, teachers can track and grade students' work (which are attached files they uploaded) and chat with them.

Most of the app's logic was implemented using Factory Pattern, which is a OOP design pattern that allows us to create objects without having to specify the exact class that will be created. It creates objects based on the data fetched from the Firestore database.

## Solved problems

::list
- Using Dart & Flutter to make activities in sync with everything in Firestore
- Creating dynamic environment for each classroom
- Uploading files simultaneously, storing them, and saving their reference in database
::

## Project links

Project has been discounted, and Firebase instance that was supporting it has been deleted. Source code is private, due to agreement we entered by joining the competition and code isn't available for public.
