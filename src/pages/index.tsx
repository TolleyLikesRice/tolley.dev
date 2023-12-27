/* eslint-disable react/no-unescaped-entities */
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React from "react";

import Footer from "@/components/footer";
import Layout from "@/components/layout";
import { SocialLink } from "@/components/socials";
import { SOCIAL_LIST } from "@/components/socials";
import styles from "@/styles/index.module.css";

import chatbotCover from "../../public/img/projects/chatbot.webp";
import jarpCover from "../../public/img/projects/JARP.png";
import nezzCover from "../../public/img/projects/nezz.png";
import phasmoHelperCover from "../../public/img/projects/phasmoHelper.png";
import placeholderCover from "../../public/img/projects/placeholder.webp";
import placeholder169 from "../../public/img/projects/placeholder-16-9.jpg";
import spammyCover from "../../public/img/projects/spammy.png";

const HIGHLIGHTS_LIST = [
  {
    title: "Dulcis Logistics Driver's Hub",
    description: "A modern and responsive driver's hub, built with Next.js, Tailwind CSS and shadcn/ui.",
    href: "#",
    img: placeholderCover,
    links: [
      { src: "/img/lucide/link-2.svg", alt: "Link", href: "https://hub.dulcis.org" },
      { src: "/img/lucide/image.svg", alt: "Photos", href: "#" },
    ],
  },
  {
    title: "rECG",
    description: "An interactive simulation of the Lifepak15 ECG for FiveM. (Not released yet)",
    href: "#",
    img: placeholderCover,
    links: [
      { src: "/img/lucide/link-2.svg", alt: "Link", href: "https://hub.dulcis.org" },
      { src: "/img/lucide/image.svg", alt: "Photos", href: "#" },
    ],
  },
  {
    title: "Nezz",
    description: "The spiritual successor to ChatBot - an open-source Discord bot, with utility, fun, and a few other commands.",
    href: "#",
    img: nezzCover,
    links: [{ src: "/img/socials-row/github-light.png", alt: "GitHub", href: "https://github.com/TolleyLikesRice/Nezz" }],
  },
];

const PROJECT_LIST = [
  {
    title: "PhasmoHelper",
    description:
      "A simple website to help identify ghosts in Phasmophobia, made with plain HTML and JS, using water.css. Became outdated pretty quick with new updates to game, and the features of it have since been built into the game.",
    href: "https://github.com/TolleyLikesRice/PhasmoHelper",
    img: phasmoHelperCover,
  },
  {
    title: "Just Another Report Plugin",
    description:
      "A simple report plugin for Minecraft servers, with the main standout feature being the use of GUI, and sending all reports to a discord webhook.",
    href: "https://github.com/TolleyLikesRice/JustAnotherReportPlugin",
    img: jarpCover,
  },
  {
    title: "SpammyMcSpamFace",
    description:
      "A really basic, and morally questionable, SMS spammer written for Android in Kotlin - a proof of concept, and a bit of fun, rather that something malicious.",
    href: "https://github.com/TolleyLikesRice/SpammyMcSpamFace",
    img: spammyCover,
  },
  {
    title: "ChatBot",
    description:
      "The project that started it all. A modular bot for Discord, written using Discord.js, and my first ever Node.JS project.",
    href: "https://github.com/TolleyLikesRice/ChatBot",
    img: chatbotCover,
  },
];

const SKILLS_LIST = [
  {
    title: "Student Pilot",
    icon: "/img/skills/plane.svg",
  },
  {
    title: "Sound Engineering",
    icon: "/img/skills/mixer.png",
  },
  {
    title: "VATSIM S1",
    icon: "/img/skills/vatsim.png",
  },
];

const LANGUAGES_LIST = [
  {
    title: "TypeScript",
    icon: "/img/skills/typescript.png",
    glow: "gold",
  },
  {
    title: "JavaScript",
    icon: "/img/skills/js.png",
    glow: "gold",
  },
  {
    title: "Node.js",
    icon: "/img/skills/node.png",
    glow: "gold",
  },
  {
    title: "Next.js",
    icon: "/img/skills/nextjs.svg",
    glow: "silver",
  },
  {
    title: "TailwindCSS",
    icon: "/img/skills/tailwind.png",
    glow: "silver",
  },
  {
    title: "Kotlin",
    icon: "/img/skills/kotlin.png",
    glow: "bronze",
  },
  {
    title: "Python",
    icon: "/img/skills/python.svg",
    glow: "bronze",
  },
  {
    title: "Java",
    icon: "/img/skills/java.png",
    glow: "bronze",
  },
  {
    title: "Lua",
    icon: "/img/skills/lua.png",
    glow: "bronze",
  },
];

function HighlightLinks({ links }) {
  if (links !== undefined) {
    return (
      <div>
        <br />
        <div className="flex items-center justify-center">
          {links.map((item) => (
            <SocialLink key={item.alt} src={item.src} alt={item.alt} href={item.href} />
          ))}
        </div>
      </div>
    );
  } else return <div></div>;
}

function HighlightCard({ project, number }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.1 + number * 0.1 },
      }}
      viewport={{ once: true }}
      className="relative w-full pb-4 projectCard m-4"
    >
      <div className="absolute w-full pb-4 background-blur bg-gray-900/80 projectCardOverlay flex items-center justify-center align-middle">
        <div className="text-center m-auto p-2">
          <h3 className="text-gray-100 text-2xl font-medium">{project.title}</h3>
          <span className="text-gray-400">{project.description}</span>
          <HighlightLinks links={project.links} />
        </div>
      </div>
      <Image
        className="h-auto w-full rounded-lg shadow-xl shadow-slate-500/40"
        width={project.width}
        height={project.height}
        src={project.img}
        alt={project.name + " cover photo"}
      />
    </motion.div>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.1 },
      }}
      viewport={{ once: true }}
      className="w-full mb-4 bg-slate-900 rounded-lg"
    >
      <div className="flex flex-row max-md:flex-wrap max-md:pb-4">
        <Image
          className="h-24 w-44 object-cover m-4 rounded-md"
          width={project.width}
          height={project.height}
          src={project.img}
          alt={project.name + " photo"}
        ></Image>
        <div className="flex items-center h-full my-auto pr-4 pl-4">
          <div className="w-full h-full">
            <div className="flex items-center">
              <h3 className="text-gray-100 text-2xl font-medium">{project.title}</h3>
              <a href={project.href} target="_blank" className="ml-3">
                <Image src="/img/socials-row/github.svg" alt="GitHub" width={512} height={512} className="h-5 w-5" />
              </a>
            </div>
            <span className="text-gray-400 text-md">{project.description}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SkillTag({ skill, number }) {
  let glow = "";
  switch (skill.glow) {
    case "gold":
      glow = "ring-1 ring-[#FFB90F]";
      break;
    case "silver":
      glow = "ring-1 ring-[#A9A9A9]";
      break;
    case "bronze":
      glow = "ring-1 ring-[#CD7F32]";
      break;
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.1 + number * 0.1 },
      }}
      viewport={{ once: true }}
      className={`bg-slate-800 flex p-4 m-2 rounded-md items-center justify-center ${glow}`}
    >
      <Image className="h-5 w-5" src={skill.icon} width={256} height={256} alt={`${skill.title} Icon`} />
      <span className="text-gray-100 text-md ml-2">{skill.title}</span>
    </motion.div>
  );
}

export default function IndexPage() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Hi, I'm Tolley</title>
        </Head>
        {/* <Navbar hide={true} /> */}
        <Script src="/js/index.js" />
        <div id="firstBitTitleThing" className={`${styles.firstBitTitleThing} flex static w-full justify-center`}>
          <div className="m-auto">
            <br />
            <div className="text-left text-lg text-gray-500">Hi, I'm</div>
            <h1 className="text-8xl font-medium text-center text-green-600">Tolley</h1>
            <br />
            <div className="flex items-center justify-center">
              {SOCIAL_LIST.map((item) => (
                <SocialLink key={item.alt} src={item.src} alt={item.alt} href={item.href} />
              ))}
            </div>
            <br />
            <div className="flex items-center justify-center max-md:hidden">
              <Link ref={React.createRef()} href="#about">
                <ArrowDownIcon className="h-6 w-6 fill-gray-200" />
              </Link>
            </div>
          </div>
        </div>

        <div id="spacer" className="py-10" />

        <div id="about">
          <h2 className="text-5xl font-medium text-center text-gray-100">About Me</h2>
          <hr className="w-64 h-0.5 mx-auto my-4 border-0 rounded md:my-6 bg-gray-700" />
          <div className="flex flex-row max-md:flex-wrap items-center">
            <div className="w-full md:px-20 md:pt-10 max-md:pt-5">
              <div className="text-gray-200">
                Hi 👋, I'm Tolley!
                <br />
                <br />
                I'm a teenager from the UK, who likes to make things, and fly planes. I've been programming for as long as I can
                remember, and flying for nearly two years now. As well as developing software, I also dabble with some hardware,
                from simple Arduino projects, to custom PCBs.
                <br />
                <br />
                Between flying and programming, I also do some technical theatre work, usually sound or stage management, with my
                local theatre. I've mixed a few musicals and gigs, and loved every second of it.
                <br />
                <br />
                Usually I'm more of a backend developer, but recently I've been doing a lot more frontend work, and more of a
                fullstack developer now. This website has been my excuse to learn Next.js, Tailwind, and how to make a website
                actually look decent.
                <br />
                <br />I also have a decent amount of sysadmin experience, in both multi and single node deployments, and have been
                running my own servers for a few years, utilizing a variety of hypervisors, reverse proxies, and other things.
              </div>
            </div>
            <div className="w-full">
              <h3 className="text-2xl font-medium text-left max-sm:text-center text-gray-100 pt-5">Skills</h3>
              <div className="flex flex-wrap justify-start items-start">
                {SKILLS_LIST.map((skill, number) => (
                  <SkillTag key={skill.title} skill={skill} number={number} />
                ))}
              </div>
              <br />
              <h3 className="text-2xl font-medium text-left max-sm:text-center text-gray-100">Languages</h3>
              <div className="flex flex-wrap justify-start items-start">
                {LANGUAGES_LIST.map((skill, number) => (
                  <SkillTag key={skill.title} skill={skill} number={number} />
                ))}
              </div>
              {/* <br />
              <h3 className="text-2xl font-medium text-left max-sm:text-center text-gray-100">Interests</h3>
              <div className="flex flex-wrap justify-start items-start">
                {INTERESTS_LIST.map((skill, number) => (
                  <SkillTag key={skill.title} skill={skill} number={number} />
                ))}
              </div> */}
            </div>
          </div>
        </div>

        <div id="spacer" className="py-10" />

        <div id="projects">
          <h2 className="text-5xl font-medium text-center text-gray-100">Projects</h2>
          <hr className="w-64 h-0.5 mx-auto my-4 border-0 rounded md:my-6 bg-gray-700" />
          <h3 className="text-3xl font-medium text-left max-sm:text-center text-gray-100">The Highlights</h3>
          <hr className="w-64 h-0.5 my-4 max-sm:mx-auto !mt-3 border-0 rounded md:my-6 bg-gray-700" />
          <div className="w-full flex items-center justify-center max-md:flex-wrap">
            {HIGHLIGHTS_LIST.map((project, number) => (
              <HighlightCard key={project.title} project={project} number={number} />
            ))}
          </div>
          <br />
          <br />
          <h3 className="text-3xl font-medium text-left max-sm:text-center text-gray-100">Honorable Mentions</h3>
          <hr className="w-64 h-0.5 my-4 !mt-3 border-0 max-sm:mx-auto rounded md:my-6 bg-gray-700" />
          {PROJECT_LIST.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
          <motion.div
            initial={{
              opacity: 0,
              y: -50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.1 },
            }}
            viewport={{ once: true }}
            className="w-full mb-4 bg-slate-900 rounded-lg flex items-center justify-center p-4"
          >
            <h3 className="text-gray-100 text-xl text-center">
              And a few other random bits on my{" "}
              <Link className="underline hover:text-blue-400" href={"https://github.com/TolleyLikesRice"}>
                GitHub
              </Link>
            </h3>
          </motion.div>
        </div>
      </Layout>
      <Footer />
    </div>
  );
}
