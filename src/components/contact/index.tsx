import {
  Container,
  createStyles,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { MutableRefObject } from "react";
import { ContactOptions } from "./ContactOptions";
import SocialLinks from "./SocialLinks";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    boxSizing: "border-box",
    backgroundImage: `linear-gradient(-60deg, ${
      theme.colors[theme.primaryColor][4]
    } 0%, ${theme.colors[theme.primaryColor][7]} 100%)`,
    padding: theme.spacing.xl * 2.5,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: theme.spacing.xl * 1.5,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 1,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: 300,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },
}));

type Props = {
  scrollRef: MutableRefObject<HTMLDivElement>;
};

export function Contact({ scrollRef }: Props) {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper} ref={scrollRef}>
      <Container>
        <SimpleGrid
          cols={2}
          spacing={50}
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        >
          <div>
            <Title className={classes.title}>Contact us</Title>
            <Text className={classes.description} mt="sm" mb={30}>
              Leave your email and we will get back to you
            </Text>

            <ContactOptions />
            <SocialLinks />
          </div>
        </SimpleGrid>
      </Container>
    </div>
  );
}
