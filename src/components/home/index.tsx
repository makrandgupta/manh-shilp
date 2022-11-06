import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  BackgroundImage,
} from "@mantine/core";
import logo from "../../assets/full_logo.webp";
import background from "../../assets/home_background.webp";

const useStyles = createStyles((theme) => ({
  background: {
    height: "100vh",
  },
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
    alignItems: "center",
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: "4px 12px",
  },
}));

export function Home() {
  const { classes } = useStyles();
  return (
    <div>
      <BackgroundImage src={background} className={classes.background}>
        <Container pt={60}>
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title className={classes.title}>
                Career and Business Counselling
              </Title>
              <Text mt="md">
                Manh:Shilp means "to craft minds" in Sanskrit. Manh:Shilp's
                mission is to collaborate with industry leaders and students to
                help tackle their most important challenges and capture their
                greatest opportunities. Our success depends on helping our
                clients to realize their full potential to make the world and
                each other better every day.
              </Text>

              <Button mt={30} radius="xl" size="md" className={classes.control}>
                Get started
              </Button>
            </div>
            <Image src={logo} className={classes.image} />
          </div>
        </Container>
      </BackgroundImage>
    </div>
  );
}
