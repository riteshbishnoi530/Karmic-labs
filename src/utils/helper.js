import { Blockchain, Consultation, Marketing, NftService, SmartContract, Trust, WebService, Wthree } from "./icons";

export const HEADER_LIST = [
    {
        item: 'Home',
        link: "#"
    },
    {
        item: 'Services',
        link: "#services"
    },
    {
        item: 'Projects',
        link: "#projects"
    },
    {
        item: 'About',
        link: "#about"
    }
];

export const UPCOMING_LIST =[
    {
        image: '/assets/images/nubbies.webp',
        title: 'Nubbies',
        nft: 'NFT',
        time: '15:54:12'
    },
    {
        image: '/assets/images/nekozuma.webp',
        title: 'Nekozuma',
        nft: 'NFT',
        time: '15:54:12'
    },
    {
        image: '/assets/images/galactium.webp',
        title: 'Galactium',
        nft: 'NFT',
        time: '15:54:12'
    },
    {
        image: '/assets/images/frenz-forever.webp',
        title: 'Frenz Forever ',
        nft: 'NFT',
        time: '15:54:12'
    }
];

export const SERVICES_LIST = [
    {
      icon: <SmartContract/>,
      title: "Smart Contract",
      description:
        "Tailored smart contracts to fit your needs, no matter the size. No idea is too big, too small, or too degen... ",
    },
    {
        icon: <WebService/>,
      title: "Web3 Services",
      description: [
        { name: "Metmask integration" },
        { name: "NFT's" },
        { name: "Dapps" },
        { name: "Tokenomics" },
        { name: "Metaverse AR/VR" },
        { name: "SDK Gaming Integration" },
    ],
},
{
        icon: <Marketing/>,
      title: "Marketing / Media",
      description:
        "We have worked with some of the spaces most reputable figures to drive audiences.",
    },
    {
        icon: <Consultation/>,
      title: "Consultation",
      description:
        "Have an idea but not sure where to start? Hop on a call with us and we will help you to put plans into action.",
    },
    {
        icon: <NftService/>,
      title: "NFT Services",
      description: "NFT solutions from start to finish. From Initial Concept to Secondary market listings, we will guide you every step of the way to ensure your project is a successfully and seemlessly delivered come mint day.",
    },
  ];

  export const PROJECT_LIST = [
    {
        image:'/assets/images/nubbies-pfp.webp',
        title: 'Nubbies'
    },
    {
        image:'/assets/images/nubbies-.webp',
        title: 'Nubbies'
    },
    {
        image:'/assets/images/galactium-.webp',
        title: 'Nubbies'
    },
    {
        image:'/assets/images/galactium-pfp.webp',
        title: 'Nubbies'
    },
    {
        image:'/assets/images/nekozuma-pfp.webp',
        title: 'Nubbies'
    },
    {
        image:'/assets/images/frenz-forever-network.webp',
        title: 'Nubbies'
    },
    {
        image:'/assets/images/teacherspet.webp',
        title: 'Nubbies'
    },
    {
        image:'/assets/images/teacherspet-pfp.webp',
        title: 'Nubbies'
    }
  ];

  export const VALUE_LIST = [
    {
      icon: <Wthree/>,
      title: "W3",
      description:
        "Not your average degens. Karmic is lead by a team of Industry professionals with extensive backgrounds in web3 and web2. We are actively involved in all that we do. Boots on the ground. We know the ins and outs of the space, because we are building it.",
    },
    {
      icon: <Blockchain/>,
      title: "Blockchain Agnostic",
      description:
        "Our team of seasoned developers will help you to launch your project on the network of your choosing- be it ethereum, solana, polygon, etc..",
    },
    {
      icon: <Trust/>,
      title: "Trust",
      description:
        "Trustless and results driven development backed by a portfolio of success. You're the captain of the ship, and the keys are always in your hands.",
    },
  ];