---
slug: azerbaijan-projects
image: /images/projects/azerbaijan/azerfit-answer-1.png
title: Azerbaijan projects
creationDate: 2025-11-01
category: app
type: professional
description: >
  Led end-to-end development of two key projects for the Ministry of Youth and Sports of Azerbaijan featuring modern agent capabilities, MCP server integration, and A2A protocol communication.
---

# [Azerfit]{.highlight} & [Athlete Registrations]{.highlight}

My first professional experience building AI-powered applications, and they're live and being used right now. As a full-stack developer working on a project for **[MYS]{title="Ministry of Youth and Sports"} of Azerbaijan**, I owned the development of two production apps from the ground up.

The goal was to build intelligent software that works with data for a government ministry, coordinate across design, QA, and infrastructure teams, and ship something people would actually use daily. Both projects had me wearing many hats: *writing specification documents*, *estimating timelines*, *delegating tasks* and then getting *deep into the code* myself.

What made these projects particularly exciting was implementing the [A2A]{title="Agent-to-Agent"} protocol, enabling agents to talk to each other when needed. Instead of one monolithic AI trying to do everything, both projects use modular and interoperable agents, each specialized for their respective task.

## Technologies used

::list{icon="ion:arrow-right-c"}
- React / React Native
- Node.js
- Blazegraph (SPARQL)
- LangChain
- MCP (Model Context Protocol)
- A2A (Agent-to-Agent) protocol
::

![Azerfit agent blank interface](/images/projects/azerbaijan/azerfit-agent.png){.highlight-image}

## Description & details

### Azerfit

This is where things get interesting. Azerfit is an agent-powered app that works with pupil data through a [conversational AI interface]{.highlight} that understands what users need in plain language. Under the hood, the agent connects to an [MCP]{title="Model Context Protocol"} server to handle requests ranging from fetching student records, comparing them on school or regional level, to generating PDF reports.

It's all built on a [RAG]{title="Retrieval-Augmented Generation"} workflow grounded by data from the graph database — so the agent's answers are always backed by real records and hallucinations are minimal.

![Azerfit Chat Screenshot 1](/images/projects/azerbaijan/azerfit-answer-1.png){.highlight-image}

![Azerfit Chat Screenshot 2](/images/projects/azerbaijan/azerfit-answer-2.png){.highlight-image}

The app also provides a convenient form for entering students, making the old paper-based system obsolete. Thorough validation and smart prefetching make filling it out a breeze.

![Azerfit form for pupil publishing](/images/projects/azerbaijan/azerfit-form.png){.highlight-image}

### Athlete Registrations

The less flashy sibling, but equally important. This app handles athlete registration for the Ministry, giving them a streamlined way to record and track athletes across sports disciplines. The agent can fetch and answer pretty much any question about registered athletes: from counting how many there are in a certain region to ranking them by the number of competition achievements.

![Athletes Registration agent querying based on a question](/images/projects/azerbaijan/athletes-query.png){.highlight-image}

![Athletes Registration agent fetching achievements of specified athlete](/images/projects/azerbaijan/athletes-achievements.png){.highlight-image}

## Key achievements

::list
- Took two projects from specification documents to production deployment and post-launch monitoring
- Coordinated timelines and task delegation across design, QA, and infrastructure teams
- Built AI agents connected to an MCP server for natural language request handling, grounded by a RAG workflow on top of a graph database
- Implemented agent-to-agent communication via the A2A protocol — modular agents collaborating to serve users
- Shipped software that a government ministry relies on daily
::
