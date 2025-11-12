import {
  Collapse,
  Spacer,
  Text,
  Avatar,
  Col,
  Button,
  Link as UILink,
} from "@nextui-org/react";

import { theme } from '../utils/consts'

export function Courses({ courses }) {
  return (
    <>
      <Spacer y={1} />
      <Collapse.Group shadow css={{ mw: theme.mw, bg: theme.bg }}>
        <Text h3 color={theme.defaultText} css={{ py: 10 }}>
          Aprende con mis cursos GRATIS
        </Text>
        {courses.map((course, index) => (
          <Collapse
            key={course.title}
            title={
              <Text h4 color={theme.defaultText}>
                {course.title}
              </Text>
            }
            subtitle={course.subtitle}
            contentLeft={
              <Avatar
                size="lg"
                src={course.image}
                color={course.accent}
                bordered
                squared
              />
            }
          >
            <Col>
              <Text color={theme.defaultText} align="left">
                {course.summary}
              </Text>
              <Spacer y={1} />
              <Button auto rounded bg="primary">
                <UILink href={course.link}>
                  <Text
                    color="black"
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
        ))}
      </Collapse.Group>
    </>
  );
}
