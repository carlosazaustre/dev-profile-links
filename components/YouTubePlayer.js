import { Card, Text, Col, Divider, Link as UILink } from "@nextui-org/react";

export function YouTubePlayer({ videoID, title }) {
  return (
    <Card bordered hoverable shadow css={{ my: 15, mw: "360px" }}>
      <Card.Header>
        <Col>
          <Text
            size={12}
            weight="bold"
            transform="uppercase"
            color="#9E9E9E"
            align="left"
          >
            Video más reciente en YouTube
          </Text>
          <Text h3 color="white" align="left">
            {title}
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoID}`}
          frameBorder="0"
          allowFullScreen="false"
          scrolling="no"
          height="190"
          width="360"
        ></iframe>
      </Card.Body>
      <Divider />
      <Card.Footer>
        <UILink
          color="primary"
          target="_blank"
          href="https://youtube.com/carlosazaustre?sub_confirmation=1"
        >
          Sucríbete al canal
        </UILink>
      </Card.Footer>
    </Card>
  );
}
