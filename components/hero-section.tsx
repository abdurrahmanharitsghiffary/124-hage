"use client";

import React from "react";
import { Box, Button, Text, useMantineColorScheme } from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";
import { CoolMode } from "./ui/cool-mode";
import SocialMediaIcons from "./ui/social-media-icons";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { cn } from "@/lib/utils";
import useIsMounted from "hooks/use-is-mounted";
import BoxReveal from "./ui/box-reveal";

export default function HeroSection() {
  const [text, helper] = useTypewriter({
    words: ["Fullstack Developer", "Backend Developer"],
    loop: true,
  });
  const isMounted = useIsMounted();
  const { colorScheme } = useMantineColorScheme();
  if (!isMounted) return <section className="min-h-[100dvh]"></section>;
  console.log(colorScheme, "ColorScheme");
  return (
    <Box
      component="section"
      w="100%"
      mih="100dvh"
      pt={{ base: "1rem", md: "5rem" }}
      px="md"
      className={cn(
        colorScheme === "dark"
          ? "!bg-[var(--mantine-color-dark-9)]"
          : "!bg-[var(--mantine-color-gray-2)]",
        "flex flex-col justify-around items-center"
      )}
    >
      <Box className="flex w-full justify-center flex-col md:flex-row-reverse md:gap-20 items-center md:justify-between px-24">
        <Box className="relative">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className={cn(
              "flex-shrink-0 !w-[270px] !h-[270px] sm:!w-[300px] sm:!h-[300px] md:!w-[450px] md:!h-[450px]"
            )}
          >
            <defs>
              <clipPath id="blobClip">
                <path
                  d="M44.5,-59.7C59.3,-50.5,74,-39.7,80.5,-24.9C87.1,-10.1,85.5,8.6,78.6,24.3C71.8,40,59.7,52.8,45.7,64.6C31.8,76.4,15.9,87.1,-1.8,89.6C-19.4,92,-38.8,86.1,-50.9,73.7C-63,61.3,-67.7,42.4,-73,24.2C-78.3,6,-84.1,-11.6,-81.3,-28.4C-78.6,-45.3,-67.4,-61.3,-52.5,-70.5C-37.5,-79.7,-18.7,-81.9,-1.9,-79.2C14.9,-76.5,29.7,-69,44.5,-59.7Z"
                  transform="translate(100 100)"
                />
              </clipPath>
            </defs>
            <g clipPath="url(#blobClip)">
              <path
                fill="#228BE6"
                d="M44.5,-59.7C59.3,-50.5,74,-39.7,80.5,-24.9C87.1,-10.1,85.5,8.6,78.6,24.3C71.8,40,59.7,52.8,45.7,64.6C31.8,76.4,15.9,87.1,-1.8,89.6C-19.4,92,-38.8,86.1,-50.9,73.7C-63,61.3,-67.7,42.4,-73,24.2C-78.3,6,-84.1,-11.6,-81.3,-28.4C-78.6,-45.3,-67.4,-61.3,-52.5,-70.5C-37.5,-79.7,-18.7,-81.9,-1.9,-79.2C14.9,-76.5,29.7,-69,44.5,-59.7Z"
                transform="translate(100 100)"
              />
              <image
                href="/abdrah-3-rm.png"
                x="20"
                y="70"
                width="150"
                height="150"
              />
            </g>
          </svg>
        </Box>

        <Box className="flex max-w-xl flex-col gap-4 mt-4">
          {isMounted && (
            <BoxReveal
              boxColor="var(--mantine-primary-color-filled)"
              duration={0.7}
              className="mx-auto md:mx-0"
            >
              <Text
                fw="bold"
                variant="gradient"
                gradient={{
                  from: colorScheme === "dark" ? "blue.7" : "blue.8",
                  to: colorScheme === "dark" ? "blue.0" : "blue.9",
                  deg: 90,
                }}
                ta={{ base: "center", md: "start" }}
                className="whitespace-pre-wrap !text-4xl md:!text-5xl"
              >
                Abdurrahman Harits Ghiffary
              </Text>
            </BoxReveal>
          )}
          <Text
            fz="h3"
            fw="bold"
            ta={{ base: "center", md: "start" }}
            c="dimmed"
          >
            {text}
            <Cursor />
          </Text>
          <BoxReveal
            className="mx-auto md:mx-0"
            boxColor="var(--mantine-primary-color-filled)"
            duration={0.3}
          >
            <CoolMode>
              <Button
                className="!w-fit mt-4"
                radius="xl"
                size="lg"
                mx={{ base: "auto", md: "0" }}
                rightSection={<IconDownload />}
              >
                Download CV
              </Button>
            </CoolMode>
          </BoxReveal>
          <BoxReveal
            boxColor="var(--mantine-primary-color-filled)"
            duration={1}
            className="mx-auto md:mx-0"
          >
            <SocialMediaIcons mx={{ base: "auto", md: "0" }} />
          </BoxReveal>
        </Box>
      </Box>
    </Box>
  );
}
