import {
  FeatureFour,
  FeatureOne,
  FeatureThree,
  FeatureTwo,
} from "@/components/svg/Svg";
import homeImage from "../../public/home.avif";
import room2 from "../../public/room2.jpeg";
import room3 from "../../public/room3.jpeg";
import room4 from "../../public/room4.jpeg";
import team1 from "../../public/team/team-01.png";
import team2 from "../../public/team/team-02.png";
import team3 from "../../public/team/team-03.png";
import team4 from "../../public/team/team-04.png";

export const navItems = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About", path: "/about" },
  { id: 3, title: "Pricing", path: "/pricing" },
  { id: 4, title: "Blog", path: "/blog" },
];
export const featureItems = [
  {
    icon: <FeatureOne />,
    id: 5,
    title: "Premium Property Listings",
    desc: "Discover an array of hand-picked properties that meet the highest standards of luxury and comfort.",
  },
  {
    icon: <FeatureTwo />,
    id: 6,
    title: "Personalized Property Matching",
    desc: "Our advanced matching system pairs you with properties that align with your specific needs and desires.",
  },
  {
    icon: <FeatureThree />,
    id: 7,
    title: "Expert Guidance and Support",
    desc: "Benefit from the expertise of our dedicated team of real estate professionals.",
  },
  {
    icon: <FeatureFour />,
    id: 8,
    title: "Virtual Tours",
    desc: "Take advantage of our cutting-edge virtual tours and 3D walkthroughs to explore properties from the comfort of your home.",
  },
];
export const propertiesItems = [
  {
    id: "8",
    title: "Modern Design villa",
    image: homeImage,
    price: "2000",
    badrooms: "3",
    bathrooms: "2",
  },
  {
    id: 9,
    title: "Property villa",
    image: room2,
    price: "3000",
    badrooms: "4",
    bathrooms: "5",
  },
  {
    id: 10,
    title: "Real state vila",
    image: room3,
    price: "5000",
    badrooms: "4",
    bathrooms: "5",
  },
  {
    id: "room4",
    title: "Real state vila",
    image: room4,
    price: "6500",
    badrooms: "4",
    bathrooms: "5",
  },
];
export const faqItems = [
  {
    id: 11,
    qwestion: "Is TailGrids Well-documented?",
    answer:
      "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post.",
  },
  {
    id: 12,
    qwestion: "Is TailGrids Well-documented?",
    answer:
      "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post.",
  },
  {
    id: 13,
    qwestion: "Is TailGrids Well-documented?",
    answer:
      "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post.",
  },
  {
    id: 14,
    qwestion: "Is TailGrids Well-documented?",
    answer:
      "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post.",
  },
];
export const clientItems = [
  {
    id: 15,
    name: "Melissa Tatcher",
    passion: "Marketing Expert",
    facebook: "https://www.facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    image: team1,
  },
  {
    id: 16,
    name: "Stuard Ferrel",
    passion: "Digital Marketer",
    facebook: "https://www.facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    image: team2,
  },
  {
    id: 17,
    name: "Eva Hudson",
    passion: "Creative Designer",
    facebook: "https://www.facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    image: team3,
  },
  {
    id: 18,
    name: "Jackie Sanders",
    passion: "Founder of Facebook",
    facebook: "https://www.facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    image: team4,
  },
];
