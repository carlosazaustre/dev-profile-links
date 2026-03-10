import {
  Button,
  Spacer,
  Card,
  Text,
  Col,
  Divider,
  Row,
  Link as UILink,
} from "@nextui-org/react";

import { theme } from '../utils/consts'

export function YouTubePlayer({ videoID, title }) {
  return (
    <>
      <Spacer y={1} />

      <Card bordered hoverable shadow css={{ mw: theme.mw }}>
        <Card.Header css={{ bg: theme.bg }}>
          <Col>
            <Text
              size={12}
              weight="bold"
              transform="uppercase"
              color={theme.altText}
              align="left"
            >
              Video más reciente en YouTube
            </Text>
            <Text h3 align="left" color="white">
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
            height={theme.videoHeight}
            width={theme.videoWidth}
          ></iframe>
        </Card.Body>
        <Divider />
        <Card.Footer
          blur
          css={{
            position: "absolute",
            bgBlur: "#0f1114",
            borderTop: "$borderWeights$light solid $gray700",
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row justify="flex-end">
            <Button flat auto rounded css={{ bg: theme.altBg }}>
              <UILink href="//carlosazaustre.es/libros/aprendiendo-javascript">
                <Text
                  color="primary"
                  size={12}
                  transform="uppercase"
                  weight="bold"
                >
                  Suscríbete al canal
                </Text>
              </UILink>
            </Button>
          </Row>
        </Card.Footer>
      </Card>
    </>
  );
}
