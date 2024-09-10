import { Box, Text } from "@mantine/core";
import React from "react";

export default function About() {
  return (
    <Box id="about" component="section" className="flex w-full flex-col !pt-24">
      <Text fz="h1" fw="bold" mx="auto">
        About Me
      </Text>
      {/* <Text fz="h3" fw="bold">
        Fullstack Developer
      </Text> */}
      <Text ta="justify" mt={4}>
        Welcome to my corner of the internet! I’m a dedicated full-stack
        developer with a knack for building dynamic, user-friendly applications.
        With a strong background in front-end and back-end technologies, I bring
        ideas to life through code. My expertise spans JavaScript, TypeScript,
        React, Node.js, and more, empowering me to craft seamless digital
        experiences. Whether it’s creating responsive interfaces or designing
        robust back-end systems, I’m always up for a challenge. Explore my
        portfolio to see my latest projects, and let’s connect to build
        something amazing together!
      </Text>
    </Box>
  );
}
