"use client";
import {
  AppShell,
  Burger,
  Button,
  Group,
  UnstyledButton,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { PropsWithChildren } from "react";
import ThemeToggle from "../ui/theme-toggle/theme-toggle";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function AppLayout({ children }: PropsWithChildren) {
  const [opened, { toggle }] = useDisclosure();
  const { colorScheme } = useMantineColorScheme();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header
        className="backdrop-blur-lg backdrop-saturate-150 !bg-[var(--mantine-color-body)/70]"
        pos="fixed"
        top={0}
      >
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            <Group gap={0} visibleFrom="sm">
              <UnstyledButton
                component={Link}
                href="#about"
                className="control"
              >
                About
              </UnstyledButton>
              <UnstyledButton
                component={Link}
                href="#exprience"
                className="control"
              >
                Exprience
              </UnstyledButton>
              <UnstyledButton
                component={Link}
                href="#skills"
                className="control"
              >
                Skills
              </UnstyledButton>
              <UnstyledButton
                component={Link}
                href="#projects"
                className="control"
              >
                Projects
              </UnstyledButton>
              <UnstyledButton
                component={Link}
                href="#contacts"
                className="control"
              >
                Contacts
              </UnstyledButton>
            </Group>
            <ThemeToggle ml="auto" radius="xl" />
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar
        py="md"
        px={4}
        className="backdrop-blur-lg backdrop-saturate-150 !bg-[var(--mantine-color-body)/70]"
      >
        <UnstyledButton component={Link} href="#about" className="control">
          About
        </UnstyledButton>
        <UnstyledButton component={Link} href="#exprience" className="control">
          Exprience
        </UnstyledButton>
        <UnstyledButton component={Link} href="#skills" className="control">
          Skills
        </UnstyledButton>
        <UnstyledButton component={Link} href="#projects" className="control">
          Projects
        </UnstyledButton>
        <UnstyledButton component={Link} href="#contacts" className="control">
          Contacts
        </UnstyledButton>
      </AppShell.Navbar>

      <AppShell.Main p={0} className="overflow-hidden">
        {children}
      </AppShell.Main>
    </AppShell>
  );
}
