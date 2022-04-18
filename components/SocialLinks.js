import { Fragment } from "react";
import { Row, Card, Link as UILink, Spacer } from "@nextui-org/react";
import social from "./SocialIcons";

export function SocialLinks({ links }) {
  return (
    <>
      <Spacer y={1} />
      <Row justify="center">
        {links.map(({ name, url }) => (
          <Fragment key={name}>
            <UILink color="primary" href={url}>
              <Card clickable hoverable>
                {social[name]()}
              </Card>
            </UILink>
            <Spacer x={1} />
          </Fragment>
        ))}
      </Row>
    </>
  );
}
