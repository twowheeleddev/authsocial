import {
  MdContactMail,
  MdHelp,
  MdVolunteerActivism,
  MdWork,
} from "react-icons/md";

export const mobileFooterLinks = [
  {
    display: "In Need of Services?",
    url: "/services",
    icon: <MdHelp />,
  },
  {
    display: "Contact Us",
    url: "/contact",
    icon: <MdContactMail />,
  },
  {
    display: "Volunteer Now",
    url: "/volunteer",
    icon: <MdWork />, // New icon for Volunteer
  },
  {
    display: "Donate as little as you'd like",
    url: "/donate",
    icon: <MdVolunteerActivism />, // Reusing the volunteer icon for Donate
  },
];
