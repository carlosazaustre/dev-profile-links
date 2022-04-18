import { Spacer, Collapse } from "@nextui-org/react";

const ENV =
  process.env.NODE_ENV !== "production" ? "localhost" : "cazaustre.dev";

export function TwitchPlayer({ channelID }) {
  return (
    <>
      <Spacer y={1} />
      <Collapse
        css={{ mw: "360px" }}
        shadow
        title="En Directo"
        subtitle="Sigue mis directos en Twitch"
      >
        <iframe
          src={`https://player.twitch.tv/?channel=carlosazaustre&parent=${ENV}`}
          frameBorder="0"
          allowFullScreen="true"
          scrolling="no"
          height="200"
          width="356"
        ></iframe>
      </Collapse>
    </>
  );
}
