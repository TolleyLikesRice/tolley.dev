/* eslint-disable react/no-unescaped-entities */
import { ArrowDownIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import React from 'react';

import Footer from '@/components/footer';
import Layout from '@/components/layout';
import Navbar from '@/components/navbar';
import { SocialLink } from '@/components/socials';
import { SOCIAL_LIST } from '@/components/socials';
import styles from '@/styles/index.module.css';

import chatbotCover from '../../public/img/projects/chatbot.webp';
import nezzCover from '../../public/img/projects/nezz.png';
import placeholderCover from '../../public/img/projects/placeholder.webp';
import placeholder169 from '../../public/img/projects/placeholder-16-9.jpg';
import websiteCover from '../../public/img/projects/website.png';

const HIGHLIGHTS_LIST = [
    {
        title: "FlyDiary",
        description: "A work-in-progress digital logbook solution, since I didn't really like anything else already out there.",
        href: "#",
        img: placeholderCover,
        links: [{ src: '/img/socials-row/github-light.png', alt: 'GitHub', href: 'https://github.com/TolleyLikesRice/FlyDiary' }]
    },
    {
        title: "Tolley's Simple JSON Logger",
        description: "My own logger for Node.JS, is meant to be part of a wider ecosystem I haven't quite gotten around to coding yet.",
        href: "#",
        img: placeholderCover,
        links: [{ src: '/img/socials-row/github-light.png', alt: 'GitHub', href: 'https://github.com/TolleyLikesRice/tsjl-node' }]
    },
    {
        title: "Nezz",
        description: "The spiritual successor to ChatBot - an open-source Discord bot, with utility, fun, and a few other commands.",
        href: "#",
        img: nezzCover,
        links: [{ src: '/img/socials-row/github-light.png', alt: 'GitHub', href: 'https://github.com/TolleyLikesRice/Nezz' }]
    }
]

const PROJECT_LIST = [
    {
        title: "PhasmoHelper",
        description: "A simple website to help identify ghosts in Phasmophobia, made with plain HTML and JS, using water.css. Became outdated pretty quick with new game updates, and the features of it now built into the game.",
        href: "https://github.com/TolleyLikesRice/PhasmoHelper",
        img: placeholder169,
    },
    {
        title: "KTANEHelper",
        description: "A little helper for Keep Talking and Nobody Explodes, never finished, only had a helper for the \"Memory\" module. Made with plain HTML and JS, using water.css.",
        href: "https://github.com/TolleyLikesRice/KTANEHelper",
        img: placeholder169,
    },
    {
        title: "Just Another Report Plugin",
        description: "A simple report plugin for Minecraft servers, main standout feature being use of GUI, and sending all reports to a discord webhook",
        href: "https://github.com/TolleyLikesRice/JustAnotherReportPlugin",
        img: placeholder169,
    },
    {
        title: "SpammyMcSpamFace",
        description: "A really dumb SMS spammer written for Android in Kotlin - a proof of concept more than anything.",
        href: "https://github.com/TolleyLikesRice/SpammyMcSpamFace",
        img: placeholder169,
    },
    {
        title: "ChatBot",
        description: "My first ever Node.js project, a simple bot for Discord, written using Discord.js",
        href: "https://github.com/TolleyLikesRice/ChatBot",
        img: chatbotCover,
    },
];

const SKILLS_LIST = [
    {
        title: "TypeScript",
        icon: "/img/skills/typescript.png",
    },
    {
        title: "JavaScript",
        icon: "/img/skills/js.png",
    },
    {
        title: "Node.js",
        icon: "/img/skills/node.png",
    },
    {
        title: "Next.js",
        icon: "/img/skills/nextjs.svg",
    },
    {
        title: "TailwindCSS",
        icon: "/img/skills/tailwind.png",
    },
    {
        title: "Kotlin",
        icon: "/img/skills/kotlin.png",
    },
    {
        title: "Student Pilot",
        icon: "/img/skills/plane.svg",
    },
    {
        title: "Live Sound",
        icon: "/img/skills/liveSound.png",
    }
]

const INTERESTS_LIST = [
    {
        title: "Aviation",
        icon: "/img/skills/plane.svg",
    },
    {
        title: "Music",
        icon: "/img/skills/music.svg",
    },
    {
        title: "Technical Theatre",
        icon: "/img/skills/theatre.png",
    },
]

function HighlightLinks({ links }) {
    if (links !== undefined) {
        return (
            <div>
                <br />
                <div className='flex items-center justify-center'>
                    {links.map((item) => (
                        <SocialLink key={item.alt} src={item.src} alt={item.alt} href={item.href} />
                    ))}
                </div>
            </div>
        )
    } else return (
        <div></div>
    );
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
                transition: { duration: 0.5, delay: 0.1 + (number * 0.1) }
            }}
            viewport={{ once: true }}
            className='relative w-full pb-4 projectCard m-4'
        >
            <div className='absolute w-full pb-4 background-blur bg-gray-900/80 projectCardOverlay flex items-center justify-center align-middle'>
                <div className='text-center m-auto p-2'>
                    <h3 className='text-gray-100 text-2xl font-medium'>{project.title}</h3>
                    <span className='text-gray-400'>{project.description}</span>
                    <HighlightLinks links={project.links} />
                </div>
            </div>
            <Image className="h-auto w-full rounded-lg shadow-xl shadow-slate-500/40" width={project.width} height={project.height} src={project.img} alt={project.name + " cover photo"} />
        </motion.div>
    )

};

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
                transition: { duration: 0.5, delay: 0.1 }
            }}
            viewport={{ once: true }}
            className='w-full mb-4 bg-slate-900 rounded-lg'
        >
            <div className='flex flex-row max-md:flex-wrap max-md:pb-4'>
                <Image className='h-24 w-44 object-cover m-4 rounded-md' width={project.width} height={project.height} src={project.img} alt={project.name + " photo"}></Image>
                <div className='flex items-center h-full my-auto pr-4 pl-4'>
                    <div className='w-full h-full'>
                        <div className='flex items-center'>
                            <h3 className='text-gray-100 text-2xl font-medium'>{project.title}</h3>
                            <a href={project.href} target="_blank" className='ml-3'>
                                <Image src="/img/socials-row/github.svg" alt="GitHub" width={512} height={512} className="h-5 w-5" />
                            </a>
                        </div>
                        <span className='text-gray-400 text-md'>{project.description}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

function SkillTag({ skill, number }) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -50,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.1 + (number * 0.1) }
            }}
            viewport={{ once: true }}
            className='bg-slate-800 flex p-4 m-2 rounded-md items-center justify-center'
        >
            <Image className='h-5 w-5' src={skill.icon} width={256} height={256} alt={`${skill.title} Icon`} />
            <span className='text-gray-100 text-md ml-2'>{skill.title}</span>
        </motion.div>
    )
}

export default function IndexPage() {
    return (
        <div>
            <Layout>
                <Head>
                    <title>Hi, I'm Tolley</title>
                </Head>
                {/* <Navbar hide={true} /> */}
                <Script src='/js/index.js' />
                <div id='firstBitTitleThing' className={`${styles.firstBitTitleThing} flex static w-full justify-center`}>
                    <div className='m-auto'>
                        <br />
                        <div className='text-left text-lg text-gray-500'>Hi, I'm</div>
                        <h1 className='text-8xl font-medium text-center text-green-600'>Tolley</h1>
                        <br />
                        <div className='flex items-center justify-center'>
                            {SOCIAL_LIST.map((item) => (
                                <SocialLink key={item.alt} src={item.src} alt={item.alt} href={item.href} />
                            ))}
                        </div>
                        <br />
                        <div className='flex items-center justify-center max-md:hidden'>
                            <Link ref={React.createRef()} href="#about">
                                <ArrowDownIcon className='h-6 w-6 fill-gray-200' />
                            </Link>
                        </div>
                    </div>
                </div>

                <div id='spacer' className='py-10' />

                <div id='about'>
                    <h2 className='text-5xl font-medium text-center text-gray-100'>About Me</h2>
                    <hr className='w-64 h-0.5 mx-auto my-4 border-0 rounded md:my-6 bg-gray-700' />
                    <div className='flex flex-row max-md:flex-wrap'>
                        <div className='w-full md:px-20 md:pt-10 max-md:pt-5' >
                            <div className='text-gray-200'>
                                Hi 👋, I'm Tolley!
                                <br /><br />
                                I'm a teenager from the UK, who likes to code, and fly planes. I'm always finding new projects, and looking to learn new things. I've been coding for as long as I can remember, and flying for a year now.
                                <br /><br />
                                Between flying and coding, I also do a lot of technical theatre work, usually sound or stage management, with my local theatre. I've mixed a few musicals and gigs, and loved every second of it.
                                <br /><br />
                                Almost everything I know about coding I've learnt from YouTube, StackOverflow and many hours spent guessing. Usually I'm more of a backend developer, but recently I've been doing a lot of frontend, and I'm really enjoying it. This website has been my excuse to learn Next.js, and how to build a website from the ground up.
                            </div>
                        </div>
                        <div className='w-full'>
                            <h3 className='text-2xl font-medium text-left max-sm:text-center text-gray-100 pt-5'>Skills</h3>
                            <div className='flex flex-wrap justify-start items-start'>
                                {SKILLS_LIST.map((skill, number) => (
                                    <SkillTag key={skill.title} skill={skill} number={number} />
                                ))}
                            </div>
                            <br />
                            <h3 className='text-2xl font-medium text-left max-sm:text-center text-gray-100'>Interests</h3>
                            <div className='flex flex-wrap justify-start items-start'>
                                {INTERESTS_LIST.map((skill, number) => (
                                    <SkillTag key={skill.title} skill={skill} number={number} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div id='spacer' className='py-10' />

                <div id='projects'>
                    <h2 className='text-5xl font-medium text-center text-gray-100'>Projects</h2>
                    <hr className='w-64 h-0.5 mx-auto my-4 border-0 rounded md:my-6 bg-gray-700' />
                    <h3 className='text-3xl font-medium text-left max-sm:text-center text-gray-100'>The Highlights</h3>
                    <hr className='w-64 h-0.5 my-4 max-sm:mx-auto !mt-3 border-0 rounded md:my-6 bg-gray-700' />
                    <div className="w-full flex items-center justify-center max-md:flex-wrap">
                        {HIGHLIGHTS_LIST.map((project, number) => (
                            <HighlightCard key={project.title} project={project} number={number} />
                        ))}
                    </div>
                    <br /><br />
                    <h3 className='text-3xl font-medium text-left max-sm:text-center text-gray-100'>Honorable Mentions</h3>
                    <hr className='w-64 h-0.5 my-4 !mt-3 border-0 max-sm:mx-auto rounded md:my-6 bg-gray-700' />
                    {
                        PROJECT_LIST.map((project) => (
                            <ProjectCard key={project.title} project={project} />
                        ))
                    }
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -50,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.5, delay: 0.1 }
                        }}
                        viewport={{ once: true }}
                        className='w-full mb-4 bg-slate-900 rounded-lg flex items-center justify-center p-4'
                    >
                        <h3 className='text-gray-100 text-xl text-center'>And a few other bits over my <Link className='underline hover:text-blue-400' href={"https://github.com/TolleyLikesRice"}>GitHub</Link></h3>
                    </motion.div>
                </div>
            </Layout>
            <Footer />
        </div>
    )
}