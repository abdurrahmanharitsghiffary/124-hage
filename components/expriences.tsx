"use client";
import { Text, Timeline } from "@mantine/core";
import { IconBuilding, IconSchool } from "@tabler/icons-react";
import React from "react";

export default function Expriences() {
  return (
    <section id="exprience" className="w-full flex flex-col gap-4 !pt-24">
      <Text fz="h1" fw="bold" mx="auto">
        Education & Exprience
      </Text>
      <Timeline active={1} bulletSize={24} lineWidth={3}>
        <Timeline.Item
          title="Lakoe Platform - POS QR Code System"
          bullet={<IconBuilding size={12} />}
        >
          <Text c="dimmed" size="sm">
            Contributed as a Frontend Developer during a volunteer internship,
            building a POS system with QR code functionality inspired by Ichiban
            Sushi Restaurant. Using Next.js with the App Router to build the
            front end side.
          </Text>
          <Text size="xs" mt={4}>
            August 2024 - September 2024
          </Text>
        </Timeline.Item>
        <Timeline.Item
          title="Fullstack Developer Bootcamp - Dumbways ID"
          bullet={<IconBuilding size={12} />}
        >
          <Text c="dimmed" size="sm">
            Contributed as a Frontend Developer during a volunteer internship,
            building a POS system with QR code functionality inspired by Ichiban
            Sushi Restaurant. Using Next.js with the App Router to build the
            front end side.
          </Text>
          <Text size="xs" mt={4}>
            Juni 2024 - April 2024
          </Text>
        </Timeline.Item>

        <Timeline.Item title="SMAN 1 Parung" bullet={<IconSchool />}>
          <Text c="dimmed" size="sm">
            Attended high school at SMAN 1 Parung.
          </Text>
          <Text size="xs" mt={4}>
            2019 - 2022
          </Text>
        </Timeline.Item>
      </Timeline>
    </section>
  );
}
