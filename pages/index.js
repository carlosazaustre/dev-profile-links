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
          squared
          bordered
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
          Ingeniero de Software y creador de contenido sobre Programación Web y
          JavaScript
        </Text>

        <Spacer y={1} />
        <Card clickable hoverable css={{ mw: "360px" }}>
          <UILink color="primary" href="https://carlosazaustre.es/discord">
            <SiDiscord />
            <Spacer x={1} />
            Únete a la Comunidad de Discord
          </UILink>
        </Card>

        <Spacer y={1} />
        <Collapse
          css={{ mw: "360px" }}
          shadow
          title="En Directo"
          subtitle="Sigue mis directos en Twitch"
        >
          <iframe
            src="https://player.twitch.tv/?channel=carlosazaustre&parent=localhost"
            frameBorder="0"
            allowFullScreen="true"
            scrolling="no"
            height="200"
            width="356"
          ></iframe>
        </Collapse>

        <Spacer y={1} />
        <YouTubePlayer videoID="afDXVnDnBf4" title="Cómo usar REACT ROUTER" />

        <Spacer y={1} />
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
                <UILink href="//carlosazaustre.es/cursos/javascript">
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
