import {
  Card,
  Container,
  createStyles,
  Image,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { MutableRefObject } from "react";
import counsellingImage from "./counselling.jpg";
import mentoringImage from "./mentoring.jpg";
import partneringImage from "./partnering.jpg";

const mockdata = [
  {
    title: "MENTORING SESSIONS",
    description:
      "Manh:Shilp brings to mentor sessions aimed at your growth; setting and reviewing career goals; rejuvenate confidence; managing fast-paced changes; managing internal and external conflicts; freeing up time for execution; build EQ, guide you through challenging business situations.",
    image: mentoringImage,
  },
  {
    title: "PARTNERING FOR GROWTH",
    description:
      "Manh:Shilp offers services to partner with your business with the aim to drive performance to mutually-agreed deliverables / objectives. These medium to long term consulting at the leadership level serves to provide regular inputs as to how leaders can run businesses effectively.",
    image: partneringImage,
  },
  {
    title: "COUNSELING SESSIONS",
    description:
      "Manh:Shilp aims to help students manage their psychological challenges. We provide psychometric potential assessment, career counseling, vocational guidance and personal counseling. Manh:Shilp offers to help people for their better adjustment and wellness in their daily lives.",
    image: counsellingImage,
  },
];

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    boxSizing: "border-box",
    padding: theme.spacing.xl * 2.5,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: theme.spacing.xl * 1.5,
    },
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

  card: {
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
    },
  },
}));

type Props = {
  scrollRef: MutableRefObject<HTMLDivElement>;
};

export function Services({ scrollRef }: Props) {
  const { classes, theme } = useStyles();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      p="xl"
    >
      <Image
        src={feature.image}
        width={150}
        height={150}
        radius="lg"
        color={theme.fn.primaryColor()}
      />
      <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text size="md" color="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));
  return (
    <div className={classes.wrapper} ref={scrollRef}>
      <Container size="lg" py="xl">
        <Title order={2} className={classes.title} align="center" mt="sm">
          Services
        </Title>

        <SimpleGrid
          cols={3}
          spacing="xl"
          mt={50}
          breakpoints={[{ maxWidth: "md", cols: 1 }]}
        >
          {features}
        </SimpleGrid>
      </Container>
    </div>
  );
}
