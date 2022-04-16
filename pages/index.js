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
          src="https://avatars.githubusercontent.com/u/650752?s=400&u=cf2941a8c0b894129bfeda9aee630caa616a9e19&v=4"
          css={{ my: 15, size: 120 }}
          color="primary"
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
        <Card css={{ mw: "360px" }}>
          <UILink color="primary" href="https://twitch.tv/carlosazaustre">
            <ImTwitch />
            <Spacer x={1} />
            Sigue mis directos en Twitch
          </UILink>
        </Card>

        <Spacer y={1} />
        <Card css={{ mw: "360px" }}>
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
            <Card>
              <ImTwitter />
            </Card>
          </UILink>
          <Spacer x={1} />
          <UILink color="primary" href="https://instagram.com/carlosazaustre">
            <Card>
              <SiInstagram />
            </Card>
          </UILink>
          <Spacer x={1} />
          <UILink color="primary" href="https://tiktok.com/@carlosazaustre">
            <Card>
              <SiTiktok />
            </Card>
          </UILink>
          <Spacer x={1} />
          <UILink color="primary" href="https://github.com/carlosazaustre">
            <Card>
              <ImGithub />
            </Card>
          </UILink>
          <Spacer x={1} />
          <UILink color="primary" href="https://linkedin.com/in/carlosazaustre">
            <Card>
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
          <Card.Body css={{ p: 0 }}>TODO Foto Libro</Card.Body>
          <Divider />
          <Card.Footer>
            <UILink
              color="primary"
              target="_blank"
              href="https://carlosazaustre.es/libros/aprendiendo-javascript"
            >
              A la venta en Amazon (Digital y en Papel)
            </UILink>
          </Card.Footer>
        </Card>

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
                Mi Setup
              </Text>
              <Text h3 color="white" align="left">
                Mi espacio de trabajo
              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>TODO Foto Setup</Card.Body>
        </Card>
      </Container>
    </div>
  );
}
