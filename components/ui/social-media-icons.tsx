import { ActionIcon, Group } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import React, { ComponentProps } from "react";

export default function SocialMediaIcons(props: ComponentProps<typeof Group>) {
  return (
    <Group {...props}>
      <ActionIcon size="xl" radius="xl">
        <IconBrandGithub />
      </ActionIcon>
      <ActionIcon size="xl" radius="xl">
        <IconBrandInstagram />
      </ActionIcon>
      <ActionIcon size="xl" radius="xl">
        <IconBrandLinkedin />
      </ActionIcon>
      <ActionIcon size="xl" radius="xl">
        <IconBrandWhatsapp />
      </ActionIcon>
    </Group>
  );
}
