import React from "react";
import CardProject from "./ui/card-project";
import { Text } from "@mantine/core";

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col gap-4 !pt-24">
      <Text fz="h1" fw="bold" mx="auto">
        Projects
      </Text>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <CardProject key={n} />
        ))}
      </div>
    </section>
  );
}
