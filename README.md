<!-- PROJECT LOGO -->
<div align="center">
  <a>
    <img src="https://github.com/Spimy/pengyou/assets/23694752/9914cf77-8fc7-412d-b104-2d61d6c6bab8" alt="Pengyou's Logo" height="150">
  </a>
  <h3>PengYou</h3>
  <p>Your best friend for all things budgeting</p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
    <li><a href="#fun-fact">Fun Fact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

**PengYou** is a solution project for ImagineHack 2024 by Team Dessert Spoons, it is a platform targetting the people that are interested in improving their financial situation.

### Problem Statement

**There is a need** for an app for people requiring budgeting advice where they can learn day to day **tips and tricks** and **practical budgeting**.

### Our Mission

The mission of **PengYou** is to encourage people to form good budgeting habits by making budgeting more friendly to them. We believe in the importance of forming good habits, thus we have introduced a reward system using a virtual pet to motivate people to actively take control of their financial lives.

### Values

**PengYou** will provide a significant amount of value for its users:

1. Raise Awareness
2. Tool for budgeting
3. Reduced Stress
4. Areas to cut off
5. Goal Setting
6. Long-term Security
7. Practical Learning
8. Confidence Builder

### SDG Goals

**PengYou** involves the following Sustainable Development Goals:

<div style="display: flex; justify-content: space-evenly;">
  <a href="https://sdgs.un.org/goals/goal1">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Sustainable_Development_Goal_01NoPoverty.svg/1200px-Sustainable_Development_Goal_01NoPoverty.svg.png"  height="100" alt="Goal 1 : No Poverty">
  </a>
  <a href="https://sdgs.un.org/goals/goal4">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Sustainable_Development_Goal_04QualityEducation.svg/1200px-Sustainable_Development_Goal_04QualityEducation.svg.png" height="100" alt="Goal 4 : Quality Education">
  </a>  
  <a href="https://sdgs.un.org/goals/goal8">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Sustainable_Development_Goal_08DecentWork.svg/800px-Sustainable_Development_Goal_08DecentWork.svg.png" height="100" alt="Goal 8 : Decent work and economic growth">
  </a>
</div>
</ul>

## Built With

- [SvelteKit](https://kit.svelte.dev/)
- [Lucia](https://lucia-auth.com/)
- [ApexCharts](https://apexcharts.com/)
- [MongoDB](https://www.mongodb.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Installation

There are some prerequisites that need to be set up:

1. Have a running MongoDB server which can be downloaded from [here](https://www.mongodb.com/try/download/community).
2. Clone this repository by running `git clone https://github.com/Spimy/pengyou.git`.

### Development

1. Navigate into the folder.
2. Run `pnpm install` to download the dependencies.
3. Setup environment variables following [.env.example](.env.example).
4. Run `pnpm run dev` to run the app in dev mode.

### Production

1. Navigate into the folder.
2. Run `pnpm install` to install the dependencies.
3. Setup environment variables following [.env.example](.env.example).
4. Run `pnpm run build` to build the project.
5. Run `pnpm prune --prod` to delete all dev dependencies.
6. Run `pnpm run start` to start the built project.

You can then reverse proxy into the built project using a web server such as [NGINX](https://nginx.org/en/), [Traefik](https://traefik.io/), etc.

### Docker

To avoid dependency and build issues, the project has been dockerized.

This automatically sets the adapter to use node adapter for SvelteKit.

This will set up a local MongoDB server and have the SvelteKit app connect to it. If the MongoDB server fails to start, the SvelteKit app will not start. You do not need to set the MongoDB URL in your `.env` file.

Be sure to have docker installed on your machine first:

```bash
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

1. Build the image: `docker compose build`.
2. Then run the image in a container: `docker compose up`.

## Acknowledgments

Team Dessert Spoons members:

- [William Law Hong Waye (Spimy)](https://github.com/Spimy) - Lead Programmer
- [Alex Chee Kai Hong](https://github.com/datgai) - UI Designer
- [Lanisha (l4n1skyy)](https://github.com/l4n1skyy) - Graphics Designer
- [Lai Yung Wei](https://github.com/LaiYW11) - Frontend Developer
- [Joshua Edwin Rene Bonham](https://github.com/JBBru-helloworld) - Lead Researcher and Presenter

The aforementioned roles are the main role of each member. It is to be noted that we helped and contributed to each other's tasks, especially the frontend. This was to ensure that we have a consistent UI and thus a good UX by working closely and directly with the Graphics and UI designers.

## Fun Fact

The name **Dessert Spoons** is an attempt at [rickrolling](https://www.youtube.com/shorts/JbeXb0YWQxo) everyone at the Hackathon.
