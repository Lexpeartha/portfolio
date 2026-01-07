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

A pixel-art puzzle game made in my spare time to learn Godot Engine and practice C#. Developed over one week with additional polish applied over the following months, this completed project features 5 levels where you must reach the portal by strategically moving blocks around.

<iframe class="h-[320px] sm:h-[380px] lg:h-[540px]" src="https://itch.io/embed-upload/6789138?color=315e83" allowfullscreen width="100%" frameborder="0"><a href="https://lexpeartha.itch.io/pixpuzz">Play Pixpuzz on itch.io</a></iframe>

## Tools used

::list{icon="ion:arrow-right-c"}
- C#
- Godot Engine v3.5
- Aseprite (for pixel art)
::

## Description & details

This learning project was built with [Godot]{.highlight} and [C#]{.highlight}, and published on Itch.io. As my first complete game project, it served as an opportunity to dive into Godot Engine, practice OOP principles, design engaging puzzles and game mechanics. Every sprite was hand-crafted in [Aseprite]{.highlight}.

Game is partially inspired by puzzles from games such as `'Portal 2'`, `'The Witness'` and `'Baba Is You'`.

Working on this project was an exciting learning experience, especially discovering how Godot works with C#. Using inheritance and interfaces to create reusable scripts proved surprisingly effective for game development. For example, I implemented the [Template Method pattern]{.highlight} in my base level system, design pattern where a base class defines the structure while subclasses customize specific steps. Here's a simplified version from `Level.cs`:

```csharp
using Godot;
using System;

public class Level : Node2D
{
  public override void _Ready()
  {
    // Setup the level here, by connecting signals from corresponding buttons,
    // doors, connecting audio manager and etc.
    
    OnLevelReady();
  }

  // Add level-specific logic on this method
  public virtual void OnLevelReady() { }
}
```

This inheritance pattern proved highly effective. I could create multiple levels with unique logic while maintaining shared core functionality. Customization was as simple as overriding the `OnLevelReady` method. I applied this same architectural approach to other game elements like buttons, doors, and interactive objects.

![Screenshot from my game](/images/projects/pixpuzz.png){.highlight-image}

## Key learning achievements

::list
- Applied OOP principles and design patterns (Template Method, inheritance, interfaces) to create reusable, maintainable scripts for game nodes
- Built a custom level editor with tool scripts that streamlined the design process
- Leveraged Godot's built-in systems for audio management, scene transitions, and game state
- Completed full game development cycle from concept to published game in one week
- Designed and implemented 5 unique puzzle levels (8 in total)
::

## Project links

<iframe src="https://itch.io/embed/1526603?bg_color=3b7599&amp;fg_color=1c3859&amp;link_color=cf8033&amp;border_color=1c3859" width="100%" height="167" frameborder="0"><a href="https://lexpeartha.itch.io/pixpuzz">Pixpuzz by Lexpeartha</a></iframe>
