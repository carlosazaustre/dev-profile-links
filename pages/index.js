import Head from "next/head";
import {
  Container,
  Spacer,
  Grid,
  Row,
  Col,
  Card,
  Avatar,
  Text,
  Button,
  Divider,
  Link as UILink,
} from "@nextui-org/react";
import { ImTwitch, ImGithub, ImTwitter, ImLinkedin } from "react-icons/im";
import { SiDiscord, SiTiktok, SiInstagram } from "react-icons/si";
import { YouTubePlayer } from "../components/YouTubePlayer";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Carlos Azaustre | Programación Web y JavaScript</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container justify="center" align="center">
        <Avatar
          src="/assets/carlos-azaustre.png"
          css={{ my: 15, size: 120 }}
          color="primary"
          alt="Carlos Azaustre - Aprende Programación Web y JavaScript"
        />

        <Text h6 size={16} color="primary">
          @carlosazaustre
        </Text>

        <Text h1 size={35}>
          Carlos Azaustre
        </Text>

        <Text size={16}>
          Google Developer Expert (GDE) en Tecnologías Web
          <br />
          Ingeniero de Software y Creador de contenido sobre Programación Web y
          JavaScript
        </Text>

        <Spacer y={1} />
        <Card clickable hoverable css={{ mw: "360px" }}>
          <UILink color="primary" href="https://twitch.tv/carlosazaustre">
            <ImTwitch />
            <Spacer x={1} />
            Sigue mis directos en Twitch
          </UILink>
        </Card>

        <Spacer y={1} />
        <Card clickable hoverable css={{ mw: "360px" }}>
          <UILink color="primary" href="https://carlosazaustre.es/discord">
            <SiDiscord />
            <Spacer x={1} />
            Únete a la Comunidad de Discord
          </UILink>
        </Card>

        <Spacer y={1} />
        <YouTubePlayer videoID="afDXVnDnBf4" title="Cómo usar REACT ROUTER" />

        <Row justify="center">
          <UILink color="primary" href="https://twitter.com/carlosazaustre">
            <Card clickable hoverable>
              <ImTwitter />
            </Card>
          </UILink>
          <Spacer x={1} />
          <UILink color="primary" href="https://instagram.com/carlosazaustre">
            <Card clickable hoverable>
              <SiInstagram />
            </Card>
          </UILink>
          <Spacer x={1} />
          <UILink color="primary" href="https://tiktok.com/@carlosazaustre">
            <Card clickable hoverable>
              <SiTiktok />
            </Card>
          </UILink>
          <Spacer x={1} />
          <UILink color="primary" href="https://github.com/carlosazaustre">
            <Card clickable hoverable>
              <ImGithub />
            </Card>
          </UILink>
          <Spacer x={1} />
          <UILink color="primary" href="https://linkedin.com/in/carlosazaustre">
            <Card clickable hoverable>
              <ImLinkedin />
            </Card>
          </UILink>
        </Row>

        <Spacer y={1} />
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
                Consigue mi libro
              </Text>
              <Text h3 color="white" align="left">
                Aprendiendo JavaScript
              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              objectFit="cover"
              width="100%"
              height={320}
              src="/assets/libro-aprendiendo-javascript.jpg"
            />
          </Card.Body>
          <Divider />
          <Card.Footer
            blur
            css={{
              position: "absolute",
              bgBlur: "#000001",
              bottom: 0,
              zIndex: 1,
              borderTop: "$borderWeights$light solid $gray700",
            }}
          >
            <Row justify="center">
              <Text size="xs" color="white" align="left">
                A la venta en Amazon (Versiones Digital y en Papel)
              </Text>
              <Button flat auto rounded css={{ bg: "#111" }}>
                <UILink href="//carlosazaustre.es/libros/aprendiendo-javascript">
                  <Text
                    color="primary"
                    size={12}
                    transform="uppercase"
                    weight="bold"
                  >
                    Comprar Libro
                  </Text>
                </UILink>
              </Button>
            </Row>
          </Card.Footer>
        </Card>

        <Spacer y={1} />
        <a href="https://carlosazaustre.es/workspace">
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
                  Mi Setup
                </Text>
                <Text h3 color="white" align="left">
                  Mi espacio de trabajo
                </Text>
              </Col>
            </Card.Header>
            <Card.Body css={{ p: 0 }}>
              <Card.Image src="/assets/setup_2022.jpg" />
            </Card.Body>
          </Card>
        </a>
        <Spacer y={1} />
        <Text size="xs" color="white">
          <UILink color="primary" href="//carlosazaustre.es">
            carlosazaustre.es
          </UILink>
        </Text>
      </Container>
      <Spacer y={1} />
    </div>
  );
}
