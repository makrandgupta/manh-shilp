import {
  ActionIcon,
  Button,
  Container,
  createStyles,
  Group,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { IconBrandLinkedin } from "@tabler/icons";
import { MutableRefObject } from "react";
import { ContactIconsList } from "./ContactsList";

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

  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },

  social: {
    color: theme.white,

    "&:hover": {
      color: theme.colors[theme.primaryColor][1],
    },
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    "&::placeholder": {
      color: theme.colors.gray[5],
    },
  },

  inputLabel: {
    color: theme.black,
  },

  control: {
    backgroundColor: theme.colors[theme.primaryColor][6],
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

            <ContactIconsList />

            <Group mt="xl">
              <ActionIcon
                size={28}
                className={classes.social}
                variant="transparent"
                component="a"
                href="https://www.linkedin.com/in/manhshilp-advisors"
              >
                <IconBrandLinkedin size={22} stroke={1.5} />
              </ActionIcon>
            </Group>
          </div>
          <div className={classes.form}>
            <TextInput
              label="Email"
              placeholder="your@email.com"
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="Name"
              placeholder="John Doe"
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <Textarea
              required
              label="Your message"
              placeholder="Hi Manh:Shilp Advisors, I want to…"
              minRows={4}
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />

            <Group position="right" mt="md">
              <Button className={classes.control}>Send message</Button>
            </Group>
          </div>
        </SimpleGrid>
      </Container>
    </div>
  );
}
