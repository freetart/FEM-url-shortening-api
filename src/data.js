import statIconOne from "./assets/icon-brand-recognition.svg";
import statIconTwo from "./assets/icon-detailed-records.svg";
import statIconThree from "./assets/icon-fully-customizable.svg";

import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

export const statData = [
  {
    id: 1,
    icon: statIconOne,
    title: "Brand Recognition",
    description:
      "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
  },
  {
    id: 2,
    icon: statIconTwo,
    title: "Detailed Records",
    description:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    id: 3,
    icon: statIconThree,
    title: "Fully Customizable",
    description:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];

export const footerLinksData = [
  {
    id: 1,
    title: "Features",
    links: ["Link Shortening", "Branded Links", "Analytics"],
  },
  {
    id: 2,
    title: "Resources",
    links: ["Blog", "Developers", "Support"],
  },
  {
    id: 3,
    title: "Company",
    links: ["About", "Our Team", "Careers", "Contact"],
  },
];

export const footerSocialData = [
  {
    id: 1,
    icon: <FaFacebook />,
  },
  {
    id: 2,
    icon: <FaTwitter />,
  },
  {
    id: 3,
    icon: <FaPinterest />,
  },
  {
    id: 4,
    icon: <FaInstagram />,
  },
];
