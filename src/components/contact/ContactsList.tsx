import {
  Anchor,
  Box,
  createStyles,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { IconAt, IconBrandWhatsapp, IconMapPin } from "@tabler/icons";

const data = [
  {
    title: "Email",
    description: "info@manhshilp.com",
    icon: IconAt,
    link: "mailto:info@manhshilp.com",
  },
  {
    title: "WhatsApp",
    description: "+91 9910712955",
    icon: IconBrandWhatsapp,
    link: "https://wa.me/919910712955",
  },
  {
    title: "Address",
    description: "Ghaziabad, UP, India",
    icon: IconMapPin,
    link: "https://goo.gl/maps/FPe2YiRwPUJRrDRXA",
  },
  // { title: "Working hours", description: "8 a.m. – 11 p.m.", icon: IconSun },
];

type ContactIconVariant = "white" | "gradient";

interface ContactIconStyles {
  variant: ContactIconVariant;
}

const useStyles = createStyles((theme, { variant }: ContactIconStyles) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    color: theme.white,
  },

  icon: {
    marginRight: theme.spacing.md,
    backgroundImage:
      variant === "gradient"
        ? `linear-gradient(135deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
            theme.colors[theme.primaryColor][6]
          } 100%)`
        : "none",
    backgroundColor: "transparent",
  },

  title: {
    "a:link": { textDecoration: "none" },
    "a:visited": { textDecoration: "none" },
    "a:hover": { textDecoration: "none" },
    "a:active": { textDecoration: "none" },
    color:
      variant === "gradient"
        ? theme.colors.gray[6]
        : theme.colors[theme.primaryColor][0],
  },

  description: {
    color: variant === "gradient" ? theme.black : theme.white,
  },
}));

interface ContactIconProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
  variant?: ContactIconVariant;
  link: string;
}

function ContactIcon({
  icon: Icon,
  title,
  description,
  variant = "gradient",
  className,
  link,
  ...others
}: ContactIconProps) {
  const { classes, cx } = useStyles({ variant });
  return (
    <Anchor href={link}>
      <div className={cx(classes.wrapper, className)} {...others}>
        {variant === "gradient" ? (
          <ThemeIcon size={40} radius="md" className={classes.icon}>
            <Icon size={24} />
          </ThemeIcon>
        ) : (
          <Box mr="md">
            <Icon size={24} />
          </Box>
        )}

        <div>
          <Text size="xs" className={classes.title}>
            {title}
          </Text>
          <Text className={classes.description}>{description}</Text>
        </div>
      </div>
    </Anchor>
  );
}

export function ContactIconsList({}) {
  const items = data.map((item, index) => (
    <ContactIcon key={index} variant="white" {...item} />
  ));
  return <Stack>{items}</Stack>;
}
