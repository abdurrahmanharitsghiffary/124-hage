import { SiGithub, SiGithubHex } from "@icons-pack/react-simple-icons";
import { Menu, rem, ActionIcon } from "@mantine/core";
import { IconCode } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import { GithubLink } from "types/project";

type ProjectGithubLinkProps = {
  links: GithubLink;
};

export default function ProjectGithubLink({ links }: ProjectGithubLinkProps) {
  if (typeof links === "string") {
    return (
      <ActionIcon
        radius="md"
        component={Link}
        href={links}
        size="lg"
        color={SiGithubHex}
      >
        <SiGithub />
      </ActionIcon>
    );
  }

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <ActionIcon radius="md" size="lg" color={SiGithubHex}>
          <SiGithub />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Repository</Menu.Label>
        {links.map((link) => (
          <Menu.Item
            component={Link}
            href={link.link}
            key={link.link}
            leftSection={
              <IconCode style={{ width: rem(14), height: rem(14) }} />
            }
          >
            {link.type}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}
