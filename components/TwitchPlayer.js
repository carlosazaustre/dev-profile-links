import { useEffect, useState } from "react";

const parent =
  process.env.NODE_ENV !== "production" ? "localhost" : "cazaustre.dev";

export function TwitchPlayer({ channelID }) {
  return (
    <iframe
      src={`https://player.twitch.tv/?channel=${channelID}&parent=${parent}`}
      frameBorder="0"
      allowFullScreen="false"
      scrolling="no"
      height="180"
      width="320"
    ></iframe>
  );
}
