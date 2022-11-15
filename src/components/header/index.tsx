import {
  Burger,
  Container,
  createStyles,
  Group,
  Header as MantineHeader,
  Image,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import logo from "../../assets/full_logo.png";
import { ScrollableLinks } from "./links";

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}));

interface HeaderProps {
  links: ScrollableLinks;
}

export function Header({ links }: HeaderProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();

  const items = Object.values(links).map(({ link, label, scrollIntoView }) => (
    <a
      key={label}
      href={link}
      className={classes.link}
      onClick={(event) => {
        event.preventDefault();
        scrollIntoView();
      }}
    >
      {label}
    </a>
  ));

  return (
    <MantineHeader height={100} fixed zIndex={1000}>
      <Container className={classes.header}>
        <Image src={logo} alt="Manh:Shilp Logo" width={200} />
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />
      </Container>
    </MantineHeader>
  );
}
