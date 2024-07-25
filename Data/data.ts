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
import uniqueImg1 from "@/public/Coin Wallet.png";
import uniqueImg2 from "@/public/Add New.png";
import uniqueImg3 from "@/public/NFT.png";
import uniqueImg4 from "@/public/Sell.png";
import company1 from "@/public/image 59.png";
import company2 from "@/public/image 60.png";
import company3 from "@/public/image 61.png";
import company4 from "@/public/image 62.png";
import company5 from "@/public/image 63.png";
import company6 from "@/public/image 64.png";

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

export const Unique = [
  {
    title: "Set Up Your Wallet",
    text: "Connect your wallet to Nico by clicking the wallet icon in the top right corner after you've set it up.",
    Img: uniqueImg1,
  },
  {
    title: "Create Unique Collection",
    text: "Set a secondary sales fee and add social links, a description, profile and banner images, and a description.",
    Img: uniqueImg2,
  },
  {
    title: "Download NFTs",
    text: "Add a title and description to your work (picture, video, audio, or 3D art), then customize your NFTs with properties.",
    Img: uniqueImg3,
  },
  {
    title: "Put Them Up for Sale",
    text: "Auctions, fixed-price listings, and declining-price listings are all options. You decide how you'd like to sell your NFTs.",
    Img: uniqueImg4,
  },
];

export const companyImg = [{ img: company1 }, { img: company2 }, { img: company3 }, { img: company4 }, { img: company5 }, { img: company6 }];
