import { Card, Spacer, Link as UILink } from "@nextui-org/react";
import social from "./SocialIcons";

import { theme } from '../utils/consts'

export function LinkButton({ link, network, text }) {
  return (
    <>
      <Spacer y={1} />
      <Card clickable hoverable css={{ mw: theme.mw, bg: theme.bg }}>
        <UILink color="primary" href={link}>
          {social[network]()}
          <Spacer x={1} />
          {text}
        </UILink>
      </Card>
    </>
  );
}
