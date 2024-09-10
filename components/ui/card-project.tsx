"use client";
import {
  Box,
  Button,
  Card,
  Image,
  SimpleGrid,
  Spoiler,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { Project } from "types/project";
import ProjectGithubLink from "../project-github-link";
import { fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";
import { renderCustomIcon } from "./icon-cloud";

type CardProjectProps = {
  project: Project;
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export default function CardProject({ project }: CardProjectProps) {
  const { desc, features, image, technologies, title } = project;
  const [data, setData] = useState<IconData | null>(null);
  const { colorScheme } = useMantineColorScheme();

  useEffect(() => {
    fetchSimpleIcons({ slugs: technologies }).then(setData);
  }, [technologies]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, colorScheme || "light", 24)
    );
  }, [data, colorScheme]);

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section
        component={project?.demoLink ? Link : undefined}
        href={project?.demoLink ?? ""}
      >
        <Image
          src={image}
          height={160}
          alt="Norway"
          className="h-[200px] object-cover object-center"
        />
      </Card.Section>

      <Text fw={500} mt="md" mb="xs">
        {title}
      </Text>

      <Spoiler hideLabel="Hide" showLabel="Show More" c="dimmed">
        {desc}
      </Spoiler>

      <Box className="flex flex-col gap-2" mt="md">
        {/* <Text fw={500}>Technologies</Text> */}
        <SimpleGrid cols={6}>{data !== null && renderedIcons}</SimpleGrid>
      </Box>

      <Box className="flex gap-2 items-center mt-[var(--mantine-spacing-md)]">
        <Button
          color="blue"
          fullWidth
          radius="md"
          component={Link}
          href={project?.demoLink ?? ""}
          disabled={!project?.demoLink}
        >
          Visit
        </Button>
        <ProjectGithubLink links={project.githubLink} />
      </Box>
    </Card>
  );
}
