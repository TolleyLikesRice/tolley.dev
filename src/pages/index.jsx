import { ArrowDownIcon } from '@heroicons/react/24/solid';
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import React from 'react';
import Masonry from 'react-masonry-css';
import ScrollSpy from 'react-scrollspy-navigation'

import Layout from '@/components/layout';
import Navbar from '@/components/navbar';
import { SocialLink } from '@/components/socials';
import { SOCIAL_LIST } from '@/components/socials';
import styles from '@/styles/index.module.css';

import chatbotCover from '../../public/img/projects/chatbot.png';
import nezzCover from '../../public/img/projects/nezz.png';
import placeholderCover from '../../public/img/projects/placeholder.jpg';
//import websiteCover from '../../public/img/projects/website.png';

const PROJECT_LIST = [
    {
        title: "My Website",
        description: "This website! Made with Next.js, Tailwind CSS, and a few other things.",
        href: "#",
        img: placeholderCover,
    },
    {
        title: "Nezz",
        description: "The spiritual successor to ChatBot - an open-source Discord bot, with utility, fun, and a few other commands.",
        href: "#",
        img: nezzCover,
    },
    {
        title: "ChatBot",
        description: "My first ever Node.js project, a simple bot for Discord, written using Discord.js",
        href: "#",
        img: chatbotCover,
    },
];

function ProjectCard({ project }) {
    return (
        <div className='relative w-full pb-4 projectCard'>
            <div className='absolute w-full pb-4 background-blur bg-gray-900/80 projectCardOverlay flex items-center justify-center align-middle'>
                <div className='text-center m-auto p-2'>
                    <h3 className='text-gray-100 text-2xl font-medium'>{project.title}</h3>
                    <span className='text-gray-400'>{project.description}</span>
                </div>
            </div>
            <Image className="h-auto max-w-full rounded-lg" src={project.img} alt={project.name + " cover photo"} />
        </div>
    )

};

export default function IndexPage() {
    return (
        <Layout>
            <Head>
                <title>Tolley</title>
            </Head>
            <Script src='/js/index.js' />
            <Navbar hide="true" />
            <div id='firstBitTitleThing' className={`${styles.firstBitTitleThing} flex static w-full justify-center`}>
                <div className='m-auto'>
                    <br />
                    <h1 className='text-8xl font-medium text-center text-green-600'>Tolley</h1>
                    <br />
                    <div className='flex items-center justify-center'>
                        {SOCIAL_LIST.map((item) => (
                            <SocialLink key={item.text} src={item.src} alt={item.alt} href={item.href} />
                        ))}
                    </div>
                    <br />
                    <div className='flex items-center justify-center'>
                        <ScrollSpy duration={100} offsetTop={150}>
                            <Link ref={React.createRef()} href="#about">
                                <ArrowDownIcon className='h-6 w-6 fill-gray-200' />
                            </Link>
                            <div></div> {/* this is a hack to make the scrollspy work - needs more than one child*/}
                        </ScrollSpy>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br />
            <div id='about-div'>
                <h2 id="about" className='text-5xl font-medium text-center text-gray-100'>About Me</h2>
                <hr className='w-64 h-0.5 mx-auto my-4 border-0 rounded md:my-6 bg-gray-700' />
            </div>
            <br /><br /><br /><br /><br /><br /><br />
            <div id='projects-div'>
                <h2 id="projects" className='text-5xl font-medium text-center text-gray-100'>Projects</h2>
                <hr className='w-64 h-0.5 mx-auto my-4 border-0 rounded md:my-6 bg-gray-700' />
                <Masonry
                    breakpointCols={{ default: 3, 700: 2 }}
                    className='masonry-grid'
                    columnClassName='masonry-grid_column'
                >
                    {PROJECT_LIST.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </Masonry>
            </div>
            <br /><br /><br /><br /><br /><br /><br />
            <div id='skills-div'>
                <h2 id="skills" className='text-5xl font-medium text-center text-gray-100'>Skills</h2>
                <hr className='w-64 h-0.5 mx-auto my-4 border-0 rounded md:my-6 bg-gray-700' />
            </div>
        </Layout>
    );
}