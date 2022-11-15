import { useScrollIntoView } from "@mantine/hooks";
import { MutableRefObject } from "react";

type Link = {
  label: string;
  link: string;
};

const links: Link[] = [
  {
    label: "Home",
    link: "/home",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Services",
    link: "/services",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

type ScrollableLink = {
  label: string;
  link: string;
  scrollIntoView: () => void;
  targetRef: MutableRefObject<HTMLDivElement>;
};

export type ScrollableLinks = { [key: string]: ScrollableLink };

export const useScrollableLinks = () => {
  const scrollableLinks: ScrollableLinks = {};

  links.forEach(({ label, link }) => {
    const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
      offset: 60,
    });

    scrollableLinks[label] = {
      label,
      link,
      scrollIntoView,
      targetRef,
    };
  });

  return scrollableLinks;
};
