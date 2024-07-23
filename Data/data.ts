import Image from "next/image";
import image1 from "@/public/image8.png";
import image2 from "@/public/image 10.png";
import image3 from "@/public/image 7.png";
import image4 from "@/public/image 11.png";
import image5 from "@/public/image 12.png";
import image6 from "@/public/image 13.png";
import eth from "@/public/Ethereum.png";
import star1 from "@/public/Christmas Star.png";
import star2 from "@/public/Christmas Star-black.png";

export type NavItem = {
  name: string;
  link: string;
};

export const navItems: NavItem[] = [
  { name: "Home", link: "/" },
  { name: "All NFTs", link: "#nFTs" },
  { name: "Team", link: "#team" },
  { name: "Terms & Co.", link: "#terms" },
  { name: "Contact", link: "#contact" },
];

export const Overiew = [
  { name: "World Arts", stats: "30.000 +" },
  { name: "Digital Artists", stats: "17.000 +" },
  { name: "Live Auctions", stats: "22.000 +" },
  { name: "Unique Products", stats: "50.000 +" },
];

export const Nfts = [
  {
    name: "Cyber Samurai #575",
    Eth: "8.5",
    img: image1,
    ethImg: eth,
    star: star1,
    starBlack: star2,
  },
  {
    name: "Cyber Samurai #784",
    Eth: "7.5",
    img: image2,
    ethImg: eth,
    star: star1,
    starBlack: star2,
  },
  {
    name: "Cyber Samurai #475",
    Eth: "15.5",
    img: image3,
    ethImg: eth,
    star: star1,
    starBlack: star2,
  },
  {
    name: "Cyber Samurai #475",
    Eth: "7.5",
    img: image4,
    ethImg: eth,
    star: star1,
    starBlack: star2,
  },
  {
    name: "Cyber Samurai #475",
    Eth: "7.5",
    img: image5,
    ethImg: eth,
    star: star1,
    starBlack: star2,
  },
  {
    name: "Cyber Samurai #475",
    Eth: "15.5",
    img: image6,
    ethImg: eth,
    star: star1,
    starBlack: star2,
  },
];
