import {
  Image,
  Text,
  Container,
  ThemeIcon,
  Title,
  SimpleGrid,
  createStyles,
  List,
} from "@mantine/core";

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
    lineHeight: 1,
    textAlign: "center",
    marginTop: theme.spacing.xl,
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

export function About() {
  const { classes } = useStyles();

  return (
    <Container size={700} className={classes.wrapper}>
      <Text className={classes.supTitle}>About</Text>

      <Title className={classes.title} order={2}>
        We're <span className={classes.highlight}>here</span> to help
      </Title>

      <Container size={660} p={0}>
        <Text color="dimmed" className={classes.description}>
          Manh:Shilp aims to add value to careers and businesses by counselling
          and mentoring individuals. A study showed that companies promoted
          employees who were mentored five times more often and those who were
          counselled were more successful in the personal ambitions.
        </Text>
      </Container>

      <List mt={30} spacing="sm" size="sm">
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
          Increasing your confidence; leadership and coaching & mentoring
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
