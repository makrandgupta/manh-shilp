import { Group, ActionIcon, createStyles } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  TablerIcon,
} from "@tabler/icons";

type SocialData = {
  link: string;
  Icon: TablerIcon;
};

const socials: SocialData[] = [
  {
    link: "https://www.linkedin.com/in/manhshilp-advisors",
    Icon: (props) => <IconBrandLinkedin {...props} />,
  },
  {
    link: "https://www.instagram.com/ManhShilpadvisors",
    Icon: (props) => <IconBrandInstagram {...props} />,
  },
  {
    link: "https://www.facebook.com/ManhShilp",
    Icon: (props) => <IconBrandFacebook {...props} />,
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

  social: {
    color: theme.white,

    "&:hover": {
      color: theme.colors[theme.primaryColor][1],
    },
  },
}));

export default function SocialLinks() {
  const { classes } = useStyles();
  return (
    <Group mt="xl">
      {socials.map(({ link, Icon }) => (
        <ActionIcon
          size={28}
          className={classes.social}
          variant="transparent"
          component="a"
          href={link}
        >
          <Icon size={22} stroke={1.5} />
        </ActionIcon>
      ))}
    </Group>
  );
}
