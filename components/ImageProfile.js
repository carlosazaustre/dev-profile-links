import { Avatar, Text } from "@nextui-org/react";

export function ImageProfile({ image, alt }) {
  return (
    <>
      <Avatar
        circle
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
    </>
  );
}
