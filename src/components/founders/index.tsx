import {
  ActionIcon,
  Avatar,
  Button,
  Card,
  Container,
  createStyles,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { MutableRefObject, ReactNode } from "react";
import vaibhavHeadshot from "./vaibhav.jpg";
import anjanaHeadshot from "./anjana.jpg";
import { IconBrandLinkedin } from "@tabler/icons";

const founders: UserInfo[] = [
  {
    name: "Vaibhav Gupta",
    linkedin: "https://www.linkedin.com/in/knowvaibhav",
    description: (
      <Stack>
        <Text>
          Vaibhav Gupta, Mentor & Coach, has more than three decades of business
          management experience in India and Indonesia working in various
          sectors including Health Care, Industrial, Automotive OEMs & Auto
          Components, and Energy (Mining, O&G, Power). Over the years, he has
          successfully led teams to build competency, capability drive strategic
          business development.
        </Text>
        <Text>
          Most recently he was Business Director of 3M Indonesia’s Health Care
          Business Group, where he led four business verticals – Medical Devices
          & Consumables, Food Safety, Oral Care and Separation & Purification
          Sciences.
        </Text>
        <Text>
          He holds a Bachelor's Degree in Metallurgical Engineering from IIT
          Roorkee(1990), a Post-Graduate Diploma in Business Administration from
          Symbiosis Pune (2006), and a Master’s degree in Philosophy. He has
          worked with leading organizations like Eicher, Royal Enfield, SKF,
          Maruti Suzuki, Bajaj Auto, Perkasa Heavyndo Engineering and 3M.
        </Text>
        <Text>
          He pursues learning and dabbling in various forms of creative arts and
          is an avid sportsperson; and believes in giving back to the society as
          a Toastmaster and a Rotarian.
        </Text>
      </Stack>
    ),

    image: vaibhavHeadshot,
  },
  {
    name: "Anjana Gupta",
    linkedin: "https://www.linkedin.com/in/anjana-gupta",
    description: (
      <Stack>
        <Text>
          Anjana Gupta, Counsellor, is a Graduate Engineer in Electronics &
          Communication and a Post-Graduate in Psychology. Her main interest is
          in Counselling and she has counselled clients of different age groups
          with their mental health issues.
        </Text>

        <Text>
          She taught Basic Electronics to Polytechnic Students in India, then,
          worked as Student Counsellor for an IT Education company in India.
        </Text>

        <Text>
          While in Jakarta, she was involved in voluntary online teaching and
          counselling to Middle Grade students in India, - as a part of an NGO,
          E-Vidyaloka. Previously, She worked in Spins Interactional School,
          Surabaya, Indonesia as a Middle Teacher.
        </Text>

        <Text>
          She successfully organized Student Events “Hackathon” (grade 11 and 12
          students),and also worked with students with learning difficulties.
        </Text>

        <Text>
          During her spare time, she indulges in culinary activities and
          embroidery. She intends to dedicate her energies and skills towards
          better mental health and and continue to counsel, specially children.
        </Text>
      </Stack>
    ),
    image: anjanaHeadshot,
  },
];

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
    fontSize: 34,
    fontWeight: 900,
    color: "white",
    [theme.fn.smallerThan("sm")]: {
      fontSize: 24,
    },
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: "white",
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  social: {
    color: theme.black,

    "&:hover": {
      color: theme.colors[theme.primaryColor][1],
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

interface UserInfo {
  image: string;
  name: string;
  description: ReactNode;
  linkedin: string;
}

function UserInfoAction({ image, name, description, linkedin }: UserInfo) {
  const { classes } = useStyles();

  return (
    <Paper
      radius="md"
      withBorder
      p="lg"
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
      })}
    >
      <Avatar src={image} size={200} radius={200} mx="auto" />
      <Group position="center" align="center" mt="md">
        <Text align="center" size="xl" weight={500}>
          {name}
        </Text>
        <ActionIcon
          className={classes.social}
          variant="transparent"
          component="a"
          href={linkedin}
        >
          <IconBrandLinkedin />
        </ActionIcon>
      </Group>

      <Text size="md" mt="md">
        {description}
      </Text>
    </Paper>
  );
}

type Props = {
  scrollRef: MutableRefObject<HTMLDivElement>;
};

export function Founders({ scrollRef }: Props) {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper} ref={scrollRef}>
      <Container size="lg" py="xl">
        <Title order={2} className={classes.title} align="center" mt="sm">
          Founders
        </Title>

        <SimpleGrid
          cols={founders.length}
          spacing="xl"
          mt={50}
          breakpoints={[{ maxWidth: "md", cols: 1 }]}
        >
          {founders.map((founder) => (
            <UserInfoAction {...founder} />
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
}
