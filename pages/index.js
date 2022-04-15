import Head from "next/head";
import { Container, Row, Avatar, Text } from "@nextui-org/react";
import { TwitchPlayer } from "../components/TwitchPlayer";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Carlos Azaustre | Programación Web y JavaScript</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container justify="center" align="center">
        <Text h1 size={35}>
          Carlos Azaustre
        </Text>
        <Avatar
          src="https://avatars.githubusercontent.com/u/650752?s=400&u=cf2941a8c0b894129bfeda9aee630caa616a9e19&v=4"
          css={{ size: "$20" }}
          color="primary"
        />
        <TwitchPlayer channelID="carlosazaustre" />
      </Container>
    </div>
  );
}
