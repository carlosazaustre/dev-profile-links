import { Card, Col, Text, Collapse } from "@nextui-org/react";

const parent =
  process.env.NODE_ENV !== "production" ? "localhost" : "cazaustre.dev";

export function TwitchPlayer({ channelID }) {
  return (
    <Card
      bordered
      hoverable
      clickable
      shadow
      color="twitch"
      css={{ my: 15, mw: "360px" }}
    >
      <Card.Header>
        <Col>
          <Text
            size={12}
            align="left"
            weight="bold"
            transform="uppercase"
            color="#9E9E9E"
          >
            Twitch
          </Text>
          <Text h3 color="white" align="left">
            Sigue mis directos en Twitch
          </Text>
        </Col>
      </Card.Header>
      <Card.Body>
        <iframe
          src={`https://player.twitch.tv/?channel=${channelID}&parent=${parent}`}
          frameBorder="0"
          allowFullScreen="false"
          scrolling="no"
          height="180"
          width="320"
        ></iframe>
      </Card.Body>
    </Card>
  );
}
