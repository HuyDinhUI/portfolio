import { LogoItem } from "@/components/animations/logo-loop";
import { Skill } from "@/types/skill.type";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiGithub,
  SiPrisma,
  SiPostgresql,
  SiSupabase,
} from "react-icons/si";

export const LIST_SKILLS: Skill[] = [
  {
    title: "Redux Toolkit",
    description:
      "CreateSlice, CreateThunkAsync, Middleware, Persist, Redux Query, Adapter Entity, Devtools",
  },
  {
    title: "Zustand",
    description:
      "Apis, Hooks, Middleware, Persist, Devtools",
  },
  {
    title: "React Query",
    description: "useQuery, useMutation, useOptions, Refetch, Optimitics, Devtools"
  }
];

export const LOGO_ITEMS: LogoItem[] = [
  {
    node: <SiReact color="gray"/>,
  },
  {
    node: <SiNextdotjs color="gray" />,
  },
  {
    node: <SiNodedotjs color="gray" />,
  },
  {
    node: <SiTypescript color="gray" />,
  },
  {
    node: <SiMongodb color="gray" />,
  },
  {
    node: <SiMysql color="gray" />,
  },
  {
    node: <SiPostgresql color="gray" />,
  },
  {
    node: <SiPrisma color="gray" />,
  },
  {
    node: <SiSupabase color="gray" />,
  },
  {
    node: <SiGithub color="gray" />,
  },
];
