import { Fragment } from "react";
import { Row, Card, Link as UILink, Spacer } from "@nextui-org/react";
import social from "./SocialIcons";

import { theme } from '../utils/consts'

export function SocialLinks({ links }) {
  return (
    <>
      <Spacer y={1} />
      <Row justify="space-between"  css={{ mw: theme.mw }}>
        {links.map(({ name, url }) => (
          <Fragment key={name}>
            <UILink color="primary" href={url}>
              <Card clickable hoverable css={{ bg: theme.bg }}>
                {social[name]()}
              </Card>
            </UILink>
          </Fragment>
        ))}
      </Row>
    </>
  );
}
