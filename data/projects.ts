import { Project, RepoType } from "types/project";

export const projects: Project[] = [
  {
    desc: "Spotify Clone Website, built using Next.js and integrated with the Spotify Web API, offers a rich and dynamic user experience, allowing you to explore, search, and play your favorite tracks, albums, and playlists.",
    title: "Spotify Clone",
    features: [],
    image: "/spotify-clone.png",
    technologies: [
      "nextdotjs",
      "reactquery",
      "typescript",
      "shadcnui",
      "tailwindcss",
      "redux",
      "framer",
    ],
    githubLink: "https://github.com/abdurrahmanharitsghiffary/Spotify-Clone",
    demoLink: "https://spotify-clone-abdrah124.netlify.app",
  },
  {
    desc: "A fully responsive social media website built using Next.js App Router and Express, with PostgreSQL as the database. The platform features real-time group and personal chat, allowing users to adjust group visibility and manage group membership. Users can create posts, like other users posts, and connect with others by following or unfollowing them. Additionally, users can receive notifications about who is following and liking their posts.",
    title: "Space Verse Net",
    features: [],
    image: "/spv.png",
    technologies: [
      "nextdotjs",
      "reactquery",
      "typescript",
      "nextui",
      "socketdotio",
      "express",
      "prisma",
      "postgresql",
      "tailwindcss",
      "framer",
      "reacthookform",
    ],
    githubLink: [
      {
        type: RepoType.CLIENT,
        link: "https://github.com/abdurrahmanharitsghiffary/spv.client",
      },
      {
        type: RepoType.SERVER,
        link: "https://github.com/abdurrahmanharitsghiffary/spv.api",
      },
    ],
    demoLink: "https://spv-client.vercel.app",
  },
  {
    desc: "Circle is a social media website built with React, Vite, and Express. It features a Twitter-inspired interface that allows users to create and engage with threads, including liking and replying to posts. The platform integrates OAuth authentication via Google, Facebook, and GitHub to streamline user sign-ups and logins.",
    title: "Circle",
    features: [],
    image: "/circles.png",
    technologies: [
      "react",
      "express",
      "postgresql",
      "chakraui",
      "zod",
      "reacthookform",
      "redux",
      "redis",
      "prisma",
      "reactquery",
    ],
    githubLink: [
      {
        type: RepoType.CLIENT,
        link: "https://github.com/abdurrahmanharitsghiffary/circles-client",
      },
      {
        type: RepoType.SERVER,
        link: "https://github.com/abdurrahmanharitsghiffary/circles-api",
      },
    ],
    demoLink: "https://abdrah12-circle.vercel.app",
  },
  {
    desc: "Lakoe is an e-commerce platform that allows users to register and create their own stores. Users can create orders without needing to sign in, making the shopping experience seamless and user-friendly. built using React and NestJS.",
    title: "Lakoe E-Commerce",
    features: [],
    image: "/lakoe.png",
    technologies: [
      "react",
      "nestjs",
      "zod",
      "typescript",
      "reacthookform",
      "prisma",
      "postgresql",
      "reactquery",
      "shadcnui",
    ],
    githubLink: "https://github.com/abdurrahmanharitsghiffary/lakoe",
    demoLink: "https://lakoe-frontend.vercel.app",
  },
];
