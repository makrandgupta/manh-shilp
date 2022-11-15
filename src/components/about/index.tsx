import { Container, createStyles, List, Text, Title } from "@mantine/core";
import { MutableRefObject } from "react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: 80,
    paddingBottom: 50,
  },

  item: {
    display: "flex",
  },

  itemIcon: {
    padding: theme.spacing.xs,
    marginRight: theme.spacing.md,
  },

  itemTitle: {
    marginBottom: theme.spacing.xs / 2,
  },

  supTitle: {
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: 800,
    fontSize: theme.fontSizes.sm,
    color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
      .color,
    letterSpacing: 0.5,
  },

  title: {
    fontSize: 34,
    fontWeight: 900,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 24,
    },
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  description: {
    textAlign: "center",
    marginTop: theme.spacing.xs,
  },

  highlight: {
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    padding: 5,
    paddingTop: 0,
    borderRadius: theme.radius.sm,
    display: "inline-block",
    color: theme.colorScheme === "dark" ? theme.white : "inherit",
  },
}));
type Props = {
  scrollRef: MutableRefObject<HTMLDivElement>;
};

export function About({ scrollRef }: Props) {
  const { classes } = useStyles();

  return (
    <Container size={700} className={classes.wrapper} ref={scrollRef}>
      <Title className={classes.title} order={2} align="center">
        About
      </Title>

      <Container size={660} p={0}>
        <Text color="dimmed" className={classes.description} size="lg">
          Manh:Shilp aims to add value to careers and businesses by counselling
          and mentoring individuals. A study showed that companies promoted
          employees who were mentored five times more often and those who were
          counselled were more successful in the personal ambitions.
        </Text>
      </Container>

      <List mt={30} spacing="sm" size="md">
        <List.Item>
          Making you encouraged and empowered in personal & professional
          development.
        </List.Item>
        <List.Item>
          Helping you to identify, achieve and hold you accountable for career
          goals.
        </List.Item>
        <List.Item>
          Helping you to identify and correct gaps in generic skills and
          knowledge.
        </List.Item>
        <List.Item>
          Increasing your confidence, leadership and coaching & mentoring
          skills.
        </List.Item>
        <List.Item>
          Developing and maintaining a broader perspective on career options and
          opportunities.
        </List.Item>
        <List.Item>
          Assisting you in solving issues related to business growth, sales &
          marketing situations.
        </List.Item>
      </List>
    </Container>
  );
}
