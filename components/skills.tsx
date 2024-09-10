"use client";

import {
  SiAdonisjs,
  SiAdonisjsHex,
  SiBootstrap,
  SiBootstrapHex,
  SiChakraui,
  SiChakrauiHex,
  SiCss3,
  SiCss3Hex,
  SiDocker,
  SiDockerHex,
  SiExpress,
  SiExpressHex,
  SiGit,
  SiGitHex,
  SiGithub,
  SiGithubHex,
  SiGo,
  SiGoHex,
  SiHtml5,
  SiHtml5Hex,
  SiJavascript,
  SiJavascriptHex,
  SiMongodb,
  SiMongodbHex,
  SiMysql,
  SiMysqlHex,
  SiNestjs,
  SiNextdotjs,
  SiNextdotjsHex,
  SiNextui,
  SiNextuiHex,
  SiNodedotjs,
  SiNodedotjsHex,
  SiPostgresql,
  SiPostgresqlHex,
  SiReact,
  SiReactHex,
  SiReactquery,
  SiReactqueryHex,
  SiRedis,
  SiRedisHex,
  SiRedux,
  SiReduxHex,
  SiShadcnui,
  SiShadcnuiHex,
  SiSocketdotio,
  SiSocketdotioHex,
  SiSpringboot,
  SiSpringbootHex,
  SiTailwindcss,
  SiTailwindcssHex,
  SiTypescript,
  SiTypescriptHex,
} from "@icons-pack/react-simple-icons";
import { ActionIcon, Box, Grid, GridCol, Text } from "@mantine/core";
import { motion } from "framer-motion";
import React from "react";

enum LEVEL {
  BASIC = "Basic",
  INTERMEDIATE = "Intermediate",
  EXPERT = "Expert",
}

const skills = [
  {
    icon: SiHtml5,
    color: SiHtml5Hex,
    id: "html5",
    label: "HTML",
    level: LEVEL.EXPERT,
  },
  {
    icon: SiCss3,
    color: SiCss3Hex,
    id: "css",
    label: "CSS",
    level: LEVEL.EXPERT,
  },
  {
    icon: SiGithub,
    color: SiGithubHex,
    id: "github",
    label: "Github",
    level: LEVEL.INTERMEDIATE,
  },
  {
    icon: SiGit,
    color: SiGitHex,
    id: "git",
    label: "Git",
    level: LEVEL.INTERMEDIATE,
  },
  {
    icon: SiNodedotjs,
    color: SiNodedotjsHex,
    id: "nodejs",
    label: "Nodejs",
    level: LEVEL.INTERMEDIATE,
  },
  {
    icon: SiReact,
    color: SiReactHex,
    id: "react",
    label: "React",
    level: LEVEL.INTERMEDIATE,
  },
  {
    icon: SiJavascript,
    color: SiJavascriptHex,
    id: "javascript",
    label: "Javascript",
    level: LEVEL.EXPERT,
  },
  {
    icon: SiTypescript,
    color: SiTypescriptHex,
    id: "typescript",
    label: "Typesccript",
    level: LEVEL.INTERMEDIATE,
  },
  {
    icon: SiNextdotjs,
    color: SiNextdotjsHex,
    id: "nextjs",
    label: "Next.js",
    level: LEVEL.INTERMEDIATE,
  },
  {
    icon: SiAdonisjs,
    color: SiAdonisjsHex,
    id: "adonisjs",
    label: "AdonisJS",
    level: LEVEL.BASIC,
  },
  {
    icon: SiBootstrap,
    color: SiBootstrapHex,
    id: "bootstrap",
    label: "Bootstrap",
    level: LEVEL.BASIC,
  },
  {
    icon: SiChakraui,
    color: SiChakrauiHex,
    id: "chakraui",
    label: "ChakraUI",
    level: LEVEL.INTERMEDIATE,
  },
  {
    icon: SiShadcnui,
    color: SiShadcnuiHex,
    id: "shadcn-ui",
    label: "ShadcnUI",
    level: LEVEL.INTERMEDIATE,
  },
  {
    icon: SiExpress,
    color: SiExpressHex,
    id: "express",
    label: "Express",
    level: LEVEL.EXPERT,
  },
  {
    icon: SiNextui,
    color: SiNextuiHex,
    id: "nextui",
    label: "NextUI",
    level: LEVEL.EXPERT,
  },
  {
    icon: SiTailwindcss,
    color: SiTailwindcssHex,
    id: "tailwindcss",
    label: "TailwindCSS",
    level: LEVEL.INTERMEDIATE,
  },
  {
    icon: SiSocketdotio,
    color: SiSocketdotioHex,
    id: "socketio",
    label: "Socket.IO",
    level: LEVEL.INTERMEDIATE,
  },
  {
    icon: SiPostgresql,
    color: SiPostgresqlHex,
    id: "postgresql",
    label: "PostgreSQL",
    level: LEVEL.INTERMEDIATE,
  },
  {
    icon: SiMysql,
    color: SiMysqlHex,
    id: "mysql",
    label: "MySQL",
    level: LEVEL.INTERMEDIATE,
  },
  {
    icon: SiMongodb,
    color: SiMongodbHex,
    id: "mongodb",
    label: "MongoDB",
    level: LEVEL.BASIC,
  },
  {
    icon: SiRedis,
    color: SiRedisHex,
    id: "redis",
    label: "Redis",
    level: LEVEL.BASIC,
  },
  {
    icon: SiReactquery,
    color: SiReactqueryHex,
    id: "react-query",
    label: "React Query",
    level: LEVEL.EXPERT,
  },
  {
    icon: SiRedux,
    color: SiReduxHex,
    id: "redux",
    label: "Redux",
    level: LEVEL.INTERMEDIATE,
  },
  {
    icon: SiSpringboot,
    color: SiSpringbootHex,
    id: "springboot",
    label: "Spring Boot",
    level: LEVEL.BASIC,
  },
  { icon: SiGo, color: SiGoHex, id: "go", label: "Go", level: LEVEL.BASIC },
  {
    icon: SiDocker,
    color: SiDockerHex,
    id: "docker",
    label: "Docker",
    level: LEVEL.BASIC,
  },
];

export default function Skills() {
  return (
    <Box
      component={motion.section}
      initial={{ y: "50%", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      className="w-full !pt-24 relative"
      id="skills"
    >
      <Text fz="h1" fw="bold" mx="auto" ta="center">
        Skills
      </Text>
      <Grid justify="center" className="pt-4 max-w-xl mx-auto">
        {skills.map((skill) => (
          <GridCol
            key={skill.id}
            span={{ base: 3, xs: 2 }}
            className="flex flex-col gap-1 justify-center items-center"
          >
            <ActionIcon
              size="xl"
              radius="xl"
              variant="light"
              color="gray"
              className="shadow-md rounded-full bg-neutral-300 text-black !w-[60px] !h-[60px]"
            >
              {<skill.icon color={skill.color} size={30} />}
            </ActionIcon>
            <Text fw="500" fz="sm">
              {skill.label}
            </Text>
            <Text c="dimmed" fz="xs">
              {skill.level}
            </Text>
          </GridCol>
        ))}
      </Grid>
    </Box>
  );
}
