"use client";
import { useClipboard } from "@mantine/hooks";
import { IconHash, IconPaperclip } from "@tabler/icons-react";
import React from "react";

type CopyHashProps = {
  text?: string;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

export default function CopyHash({ text, ...props }: CopyHashProps) {
  const { copied, copy } = useClipboard();

  const handleCopy = () => {
    copy(text);
  };

  return (
    <span
      onClick={handleCopy}
      className="text-muted-foreground text-lg inline-flex items-center"
      {...props}
    >
      {copied ? (
        <IconPaperclip className="inline" />
      ) : (
        <IconHash className="inline" />
      )}
    </span>
  );
}
