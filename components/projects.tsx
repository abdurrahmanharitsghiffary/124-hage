"use client";

import React from "react";
import CardProject from "./ui/card-project";
import { Box, Text } from "@mantine/core";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <Box
      component={motion.section}
      initial={{ x: "50%", opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="projects"
      className="flex flex-col gap-4 !pt-24"
    >
      <Text fz="h1" fw="bold" mx="auto">
        Projects
      </Text>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((p) => (
          <CardProject key={p.title} project={p} />
        ))}
      </div>
    </Box>
  );
}
