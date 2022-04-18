import { Fragment } from "react";
import { Row, Card, Link as UILink, Spacer, Button } from "@nextui-org/react";
import { ImTwitch, ImGithub, ImTwitter, ImLinkedin } from "react-icons/im";
import { SiDiscord, SiTiktok, SiInstagram } from "react-icons/si";

export function SocialLinks({ links }) {
  const social = {
    twitter: () => <ImTwitter />,
    instagram: () => <SiInstagram />,
    tiktok: () => <SiTiktok />,
    github: () => <ImGithub />,
    linkedin: () => <ImLinkedin />,
    twitch: () => <ImTwitch />,
    discord: () => <SiDiscord />,
  };

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
