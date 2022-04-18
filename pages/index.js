import Head from "next/head";
import {
  Container,
  Spacer,
  Grid,
  Collapse,
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
import { SocialLinks } from "../components/SocialLinks";
import { TwitchPlayer } from "../components/TwitchPlayer";
import { YouTubePlayer } from "../components/YouTubePlayer";
import { CardInfo } from "../components/CardInfo";
import { ImageProfile } from "../components/ImageProfile";

const ENV =
  process.env.NODE_ENV !== "production" ? "localhost" : "cazaustre.dev";
const links = [
  { name: "twitter", url: "https://twitter.com/carlosazaustre" },
  { name: "instagram", url: "https://instagram.com/carlosazaustre" },
  { name: "tiktok", url: "https://tiktok.com/carlosazaustre" },
  { name: "github", url: "https://github.com/carlosazaustre" },
  { name: "linkedin", url: "https://linkedin.com/in/carlosazaustre" },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Carlos Azaustre | Programación Web y JavaScript</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container justify="center" align="center">
        <ImageProfile
          fullName="Carlos Azaustre"
          username="@carlosazaustre"
          bio={`Google Developer Expert (GDE) en Tecnologías Web
          <br />
          Ingeniero de Software y creador de contenido sobre Programación Web y
          JavaScript`}
          image="/assets/carlos-azaustre.png"
          alt="Carlos Azaustre - Aprende Programación Web y JavaScript"
        />

        <Spacer y={1} />
        <Card clickable hoverable css={{ mw: "360px" }}>
          <UILink color="primary" href="https://carlosazaustre.es/discord">
            <SiDiscord />
            <Spacer x={1} />
            Únete a la Comunidad de Discord
          </UILink>
        </Card>

        <TwitchPlayer />

        <Spacer y={1} />
        <YouTubePlayer videoID="afDXVnDnBf4" title="Cómo usar REACT ROUTER" />

        <SocialLinks links={links} />

        <Spacer y={1} />
        <Collapse.Group shadow css={{ mw: "350px" }}>
          <Collapse
            title={<Text h4>Curso de React.js</Text>}
            subtitle="Curso Gratis en YouTube"
            contentLeft={
              <Avatar
                size="lg"
                src="/assets/logo-react.png"
                color="secondary"
                bordered
                squared
              />
            }
          >
            <Col>
              <Text align="left">
                Entiende la librería más demandada de JavaScript, React.js.
                Curso práctico y gratuito en video dónde aprenderás a crear una
                aplicación web con React desde cero.
              </Text>
              <Spacer y={1} />
              <Button auto rounded css={{ bg: "#222" }}>
                <UILink href="//carlosazaustre.es/cursos/reactjs-gratis">
                  <Text
                    color="primary"
                    size={12}
                    transform="uppercase"
                    weight="bold"
                  >
                    Ir al curso
                  </Text>
                </UILink>
              </Button>
              <Spacer y={1} />
            </Col>
          </Collapse>
          <Collapse
            title={<Text h4>Curso de Node.js</Text>}
            subtitle="Curso Gratis en YouTube"
            contentLeft={
              <Avatar
                size="lg"
                src="/assets/logo-nodejs.png"
                color="success"
                bordered
                squared
              />
            }
          >
            <Col>
              <Text align="left">
                Utiliza JavaScript en el lado del servidor con Node.js. Aprende
                a crear un API REST desde cero para utilizarlo en tus proyectos.
                20 videos con horas de contenido sobre Express y MongoDB.
              </Text>
              <Spacer y={1} />
              <Button auto rounded css={{ bg: "#222" }}>
                <UILink href="//carlosazaustre.es/cursos/nodejs-gratis">
                  <Text
                    color="primary"
                    size={12}
                    transform="uppercase"
                    weight="bold"
                  >
                    Ir al curso
                  </Text>
                </UILink>
              </Button>
              <Spacer y={1} />
            </Col>
          </Collapse>
          <Collapse
            title={<Text h4>Curso de JavaScript</Text>}
            subtitle="Curso Gratis en YouTube"
            contentLeft={
              <Avatar
                size="lg"
                src="/assets/logo-js.jpg"
                color="primary"
                bordered
                squared
              />
            }
          >
            <Col>
              <Text align="left">
                Aprende el lenguaje de programación fundamental del desarrollo
                web. Uno de los pilares del Frontend junto a HTML y CSS. Curso
                gratuito en Youtube con más de 2horas de contenido.
              </Text>
              <Spacer y={1} />
              <Button auto rounded css={{ bg: "#222" }}>
                <UILink href="//carlosazaustre.es/cursos/programacion-javascript">
                  <Text
                    color="primary"
                    size={12}
                    transform="uppercase"
                    weight="bold"
                  >
                    Ir al curso
                  </Text>
                </UILink>
              </Button>
              <Spacer y={1} />
            </Col>
          </Collapse>
        </Collapse.Group>

        <CardInfo
          title="Consigue mi libro"
          subtitle="Aprendiendo JavaScript"
          image="/assets/libro-aprendiendo-javascript.jpg"
          url="//carlosazaustre.es/libro-aprendiendo-javascript"
          bottomText="A la venta en Amazon (Versiones Digital y en Papel)"
          bottomCTA="Comprar libro"
        />

        <CardInfo
          title="Mi Setup"
          subtitle="Mi espacio de trabajo"
          image="/assets/setup_2022.jpg"
          url="//carlosazaustre.es/workspace"
        />

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
