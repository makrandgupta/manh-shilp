import { Anchor, Container, createStyles, Group, Text } from "@mantine/core";
import { ScrollableLinks } from "../header/links";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

interface FooterSimpleProps {
  links: ScrollableLinks;
}

export function FooterSimple({ links }: FooterSimpleProps) {
  const date = new Date();
  const { classes } = useStyles();
  const items = Object.values(links).map(({ link, label, scrollIntoView }) => (
    <Anchor<"a">
      color="dimmed"
      key={label}
      href={link}
      onClick={(event) => {
        event.preventDefault();
        scrollIntoView();
      }}
      size="sm"
    >
      {label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text size="sm" color="dimmed">
          © {date.getFullYear()} Manh:Shilp Advisors. All rights reserved.
        </Text>
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}
