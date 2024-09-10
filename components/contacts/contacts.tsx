"use client";

import {
  Paper,
  SimpleGrid,
  TextInput,
  Textarea,
  Group,
  Button,
  Text,
} from "@mantine/core";
import React from "react";
import classes from "./contacs.module.css";
import bg from "./bg.svg";
import { ContactIconsList } from "./contact-icons";

export default function Contacts() {
  return (
    <Paper
      shadow="md"
      className="w-full !pt-24"
      radius="lg"
      component="section"
      id="contacts"
    >
      <div className={classes.wrapper}>
        <div
          className={classes.contacts}
          style={{ backgroundImage: `url(${bg.src})` }}
        >
          <Text fz="lg" fw={700} className={classes.title} c="#fff">
            Contact information
          </Text>

          <ContactIconsList />
        </div>

        <form
          className={classes.form}
          onSubmit={(event) => event.preventDefault()}
        >
          <Text fz="lg" fw={700} className={classes.title}>
            Get in touch
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput label="Your name" placeholder="Your name" />
              <TextInput
                label="Your email"
                placeholder="abdmanharits@gmail.com"
                required
              />
            </SimpleGrid>

            <TextInput mt="md" label="Subject" placeholder="Subject" required />

            <Textarea
              mt="md"
              label="Your message"
              placeholder="Please include all relevant information"
              minRows={3}
            />

            <Group justify="flex-end" mt="md">
              <Button type="submit" className={classes.control}>
                Send message
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Paper>
  );
}
