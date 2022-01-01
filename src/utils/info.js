import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";
import {
  IoBarChartSharp,
  IoBicycle,
  IoCloudDoneSharp,
  IoFingerPrintSharp,
  IoRibbonSharp,
  IoTrophySharp,
} from "react-icons/io5";

export const navs = [
  { id: 1, name: "home", url: "#home" },
  { id: 2, name: "news", url: "#news" },
  { id: 3, name: "about", url: "#about" },
  { id: 4, name: "profile", url: "#profile" },
  { id: 5, name: "price", url: "#price" },
  { id: 6, name: "contact-us", url: "#contact" },
  { id: 7, name: "something", url: "#something" },
  { id: 8, name: "otherthing", url: "#otherthing" },
];

export const social = [
  { id: 1, icon: <BsFacebook /> },
  { id: 2, icon: <BsTwitter /> },
  { id: 3, icon: <BsLinkedin /> },
  { id: 4, icon: <BsInstagram /> },
];

export const icons = [
  {
    id: 1,
    icon: <IoBarChartSharp />,
    txt: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    title: "Cloud databases",
  },
  {
    id: 2,
    icon: <IoBicycle />,
    txt: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    title: "Website Hosting",
  },
  {
    id: 3,
    icon: <IoCloudDoneSharp />,
    txt: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    title: "File Storage",
  },
  {
    id: 4,
    icon: <IoFingerPrintSharp />,
    txt: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    title: "File Backups",
  },
  {
    id: 5,
    icon: <IoRibbonSharp />,
    txt: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    title: "Remote Desktop",
  },
  {
    id: 6,
    icon: <IoTrophySharp />,
    txt: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    title: "Forex Trading",
  },
];
