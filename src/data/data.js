import { BiGridAlt } from "react-icons/bi";
import { AiOutlineFolder } from "react-icons/ai";
import { AiOutlineFile } from "react-icons/ai";
import { BsFileEarmarkText } from "react-icons/bs";
import { BiBookOpen } from "react-icons/bi";
import { BsFlag } from "react-icons/bs";
import { FaDna } from "react-icons/fa";
import {GiSittingDog} from "react-icons/gi"
import {CgFileDocument} from "react-icons/cg"
import {VscTag} from "react-icons/vsc"
import {IoManOutline} from "react-icons/io5"

export const sidebar = [
  {
    text: "Dashboard",
    icon: BiGridAlt,
  },
  {
    text: "Projects",
    icon: AiOutlineFolder,
  },
  {
    text: "Items",
    icon: AiOutlineFile,
  },
  {
    text: "Tests",
    icon: BsFileEarmarkText,
  },
  {
    text: "Content",
    icon: BiBookOpen,
  },
  {
    text: "Support",
    icon: BsFlag,
  },
];

export const questionCard = [
  {
    color: "#BSCS14",
    bgColor: "bg-lightBlue",
    icon: FaDna,
    text: "DNA & Molecules",
    id:"1"
  },

  {
    color: "#FL0RA6",
    bgColor: "bg-yellow",
    icon: GiSittingDog,
    text: "Humans dogs and trees",
    id:"2"
  },
  {
    color: "#BIOL4C",
    bgColor: "bg-pink",
    icon: CgFileDocument,
    text: "System of classifying",
    id:"3"
  },
  {
    color: "#BSCS31",
    bgColor: "bg-lightBlue",
    icon: VscTag,
    text: "Bacterias and Virusess",
    id:"4"
  },
  {
    color: "#7915D",
    bgColor: "bg-violet",
    icon: IoManOutline,
    text: "Importand People",
    id:"5"
  },
];
