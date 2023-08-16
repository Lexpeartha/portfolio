---
slug: pixpuzz
image: /images/projects/pixpuzz.png
title: Pixpuzz
creationDate: 2022-11-06
category: game
type: personal
description: >
  Pixel-art puzzle game made with Godot Engine, written in C#.
---

# [Pixpuzz]{.highlight} - [pix]{.highlight}el [puzz]{.highlight}le game

Game made in my spare to time to learn, practice and have fun with Godot Engine and C#. It's a simple puzzle game, where you have to reach the portal by moving blocks around.

<iframe class="h-[320px] sm:h-[380px] lg:h-[540px]" src="https://itch.io/embed-upload/6789138?color=315e83" allowfullscreen width="100%" frameborder="0"><a href="https://lexpeartha.itch.io/pixpuzz">Play Pixpuzz on itch.io</a></iframe>

## Tools used

::list{icon="ion:arrow-right-c"}
- C#
- Godot Engine v3.5
- Aseprite (for pixel art)
::

## Description & details

Game was made with [Godot]{.highlight} and [C#]{.highlight}, and published on Itch.io. It's a simple puzzle game I used as an opportunity to dive into Godot Engine and design some puzzles. Every sprite was created in [Aseprite]{.highlight}.

Game is partially inspired by puzzles from games such as `'Portal 2'`, `'The Witness'` and `'Baba Is You'`.

It was really fun working on the project, especially when I got the hang of how Godot works with C#. Using inheritance and interfaces to create reusable scripts was surprisingly effective and fun for a game. For example, to illustrate a principle, I had the following code in my top level class `Level.cs` (following code is simplified by a notch):

```csharp
using Godot;
using System;

public class Level : Node2D
{

    public override void _Ready()
    {
        // Setup the level, by connecting signals from corresponding buttons and doors,
        // connecting audio manager and etc.

        OnLevelReady();
    }

    public virtual void OnLevelReady() { }
}
```

This use for inheritance was pretty neat, since I could create as many levels as I wanted, and each level could have its own logic, but still use the same base class with core functionality that makes the game work, and to customize it I just needed to override `OnLevelReady` method. I also used the same base class for other things, such as buttons, doors, etc.

![Screenshot from my game](/images/projects/pixpuzz.png){.highlight-image}

## Solved problems

::list
- Use OOP principles to create reusable scripts for the game nodes
- Create a simple level editor along with tool scripts to make level design a breeze
- Use Godot's built-in systems to manage audio, scene transitions and etc.
::

## Project links

<iframe src="https://itch.io/embed/1526603?bg_color=3b7599&amp;fg_color=1c3859&amp;link_color=cf8033&amp;border_color=1c3859" width="100%" height="167" frameborder="0"><a href="https://lexpeartha.itch.io/pixpuzz">Pixpuzz by Lexpeartha</a></iframe>
