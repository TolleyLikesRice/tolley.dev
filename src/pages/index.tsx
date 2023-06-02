import { ArrowDownIcon } from '@heroicons/react/24/solid';
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import React from 'react';
import Masonry from 'react-masonry-css';

import Footer from '@/components/footer';
import Layout from '@/components/layout';
import Navbar from '@/components/navbar';
import { SocialLink } from '@/components/socials';
import { SOCIAL_LIST } from '@/components/socials';
import styles from '@/styles/index.module.css';

import chatbotCover from '../../public/img/projects/chatbot.png';
import nezzCover from '../../public/img/projects/nezz.png';
import placeholderCover from '../../public/img/projects/placeholder.webp';
import websiteCover from '../../public/img/projects/website.png';

const PROJECT_LIST = [
    {
        title: "FlyDiary",
        description: "A work-in-progress digital logbook solution, since I didn't really like anything else already out there.",
        href: "#",
        img: placeholderCover,
        links: [{ src: '/img/socials-row/github-light.png', alt: 'GitHub', href: 'https://github.com/TolleyLikesRice/FlyDiary' }]
    },
    {
        title: "My Website",
        description: "This website! Made entry into Next.js, Tailwind CSS, and a few other things.",
        href: "#",
        img: placeholderCover,
        links: [{ src: '/img/socials-row/github-light.png', alt: 'GitHub', href: 'https://github.com/TolleyLikesRice/tolley.dev' }]
    },
    {
        title: "Nezz",
        description: "The spiritual successor to ChatBot - an open-source Discord bot, with utility, fun, and a few other commands.",
        href: "#",
        img: nezzCover,
        links: [{ src: '/img/socials-row/github-light.png', alt: 'GitHub', href: 'https://github.com/TolleyLikesRice/Nezz' }]
    },
    {
        title: "PhasmoHelper",
        description: "A simple website to help identify ghosts in Phasmophobia, made with plain HTML and JS, using water.css. Went outdated pretty quick with new game updates, and the features of it now built into the game.",
        href: "#",
        img: placeholderCover,
        links: [{ src: '/img/socials-row/github-light.png', alt: 'GitHub', href: 'https://github.com/TolleyLikesRice/PhasmoHelper' }]
    },
    {
        title: "KTANEHelper",
        description: "A little helper for Keep Talking and Nobody Explodes, never finished, only had a helper for the \"Memory\" module. Made with plain HTML and JS, using water.css.",
        href: "#",
        img: placeholderCover,
        links: [{ src: '/img/socials-row/github-light.png', alt: 'GitHub', href: 'https://github.com/TolleyLikesRice/KTANEHelper' }]
    },
    {
        title: "Just Another Report Plugin",
        description: "A simple report plugin for Minecraft servers, main standout feature being use of GUI, and sending all reports to a discord webhook",
        href: "#",
        img: placeholderCover,
        links: [{ src: '/img/socials-row/github-light.png', alt: 'GitHub', href: 'https://github.com/TolleyLikesRice/JustAnotherReportPlugin' }]
    },
    {
        title: "Just Another Ban Plugin",
        description: "A snazzy ban plugin for my Minecraft server, never actually got finished, and the server died pretty quick.",
        href: "#",
        img: placeholderCover,
        links: [{ src: '/img/socials-row/github-light.png', alt: 'GitHub', href: 'https://github.com/TolleyLikesRice/JustAnotherBanPlugin' }]
    },
    {
        title: "SpammyMcSpamFace",
        description: "A really dumb SMS spammer written for Android in Kotlin - a proof of concept more than anything.",
        href: "#",
        img: placeholderCover,
        links: [{ src: '/img/socials-row/github-light.png', alt: 'GitHub', href: 'https://github.com/TolleyLikesRice/SpammyMcSpamFace' }]
    },
    {
        title: "ChatBot",
        description: "My first ever Node.js project, a simple bot for Discord, written using Discord.js",
        href: "#",
        img: chatbotCover,
        links: [{ src: '/img/socials-row/github-light.png', alt: 'GitHub', href: 'https://github.com/TolleyLikesRice/ChatBot' }] 
    },
];

function ProjectLinks({ links }) {
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

function ProjectCard({ project }) {
    return (
        <div className='relative w-full pb-4 projectCard'>
            <div className='absolute w-full pb-4 background-blur bg-gray-900/80 projectCardOverlay flex items-center justify-center align-middle'>
                <div className='text-center m-auto p-2'>
                    <h3 className='text-gray-100 text-2xl font-medium'>{project.title}</h3>
                    <span className='text-gray-400'>{project.description}</span>
                    <ProjectLinks links={project.links} />
                </div>
            </div>
            <Image className="h-auto w-full rounded-lg shadow-xl shadow-slate-400/40" width={project.width} height={project.height} src={project.img} alt={project.name + " cover photo"} />
        </div>
    )

};

export default function IndexPage() {
    return (
        <div>
            <Layout>
                <Head>
                    <title>Tolley</title>
                </Head>
                <Navbar hide={true} />
                <Script src='/js/index.js' />
                <div id='firstBitTitleThing' className={`${styles.firstBitTitleThing} flex static w-full justify-center`}>
                    <div className='m-auto'>
                        <br />
                        <h1 className='text-8xl font-medium text-center text-green-600'>Tolley</h1>
                        <br />
                        <div className='flex items-center justify-center'>
                            {SOCIAL_LIST.map((item) => (
                                <SocialLink key={item.alt} src={item.src} alt={item.alt} href={item.href} />
                            ))}
                        </div>
                        <br />
                        <div className='flex items-center justify-center'>
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
                </div>
                <br /><br /><br /><br /><br /><br /><br />
                <div id='projects'>
                    <h2 className='text-5xl font-medium text-center text-gray-100'>Projects</h2>
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
                <div id='spacer' className='py-20' />
                <div id='skills'>
                    <h2 className='text-5xl font-medium text-center text-gray-100'>Skills</h2>
                    <hr className='w-64 h-0.5 mx-auto my-4 border-0 rounded md:my-6 bg-gray-700' />
                </div>
                <div id='filler'>
                    <h2 className='text-5xl font-medium text-center text-gray-100'>Random Fluff to increase page length to test scroll stuff</h2>
                    <hr className='w-64 h-0.5 mx-auto my-4 border-0 rounded md:my-6 bg-gray-700' />
                    <p className='text-white'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim suscipit elit, et finibus risus sodales in. Sed vitae leo at tortor mattis tristique non vel turpis. Aliquam ullamcorper augue in justo consequat convallis condimentum et nisl. Sed malesuada aliquam lectus et blandit. Donec rutrum dolor vitae nisi tincidunt, non consequat eros lobortis. Sed ultricies tortor sit amet nibh aliquet, ut ullamcorper dolor consectetur. Cras quis luctus diam. Sed varius libero sed purus eleifend sagittis. Phasellus massa purus, eleifend eget accumsan et, ultricies non enim. Ut sodales faucibus feugiat. Maecenas quis pellentesque urna. Etiam vitae massa purus. Mauris varius fermentum dui id suscipit. Proin quis sapien eget leo maximus rhoncus.
                        <br /><br />
                        Nam ante purus, luctus eu consequat ac, sagittis quis ligula. Pellentesque condimentum purus sed fringilla consequat. Donec sit amet ultricies libero. Praesent consectetur accumsan mi, eu maximus augue pellentesque quis. Aliquam eget tellus scelerisque, consequat est nec, volutpat nulla. Praesent non auctor neque. Fusce quis euismod nisl. Vestibulum luctus id est eget auctor. Nam ipsum metus, malesuada sollicitudin pharetra id, placerat condimentum eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer mi leo, mollis nec nibh quis, dapibus ullamcorper libero. Morbi dictum blandit enim ut sollicitudin.
                        <br /><br />
                        Nam a eros vel eros tempor vestibulum sit amet et orci. Cras a sem maximus, hendrerit nisl ac, facilisis lectus. Nulla tempor posuere bibendum. Ut vel ligula et nulla cursus pellentesque ac sed risus. Nulla vel elementum sapien. Donec justo elit, tristique id scelerisque eu, convallis quis arcu. Quisque sit amet nisl accumsan, pellentesque est id, tincidunt ipsum. Cras nibh elit, eleifend in quam sed, laoreet pretium orci. Suspendisse potenti. In dignissim interdum urna vitae aliquam. Sed dictum ornare quam, ut faucibus quam pulvinar vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie diam a ipsum varius, ac semper mauris fermentum. Nam vulputate vulputate nisi ut maximus. Suspendisse in sollicitudin velit. Morbi elementum maximus eros, in consectetur est semper a.
                        <br /><br />
                        In hac habitasse platea dictumst. Suspendisse semper porttitor porta. Donec volutpat nulla orci, in rhoncus elit porttitor facilisis. Nunc lacinia dictum nisi, ac varius lacus convallis ac. Integer eget congue lacus. Aenean ut nibh sit amet nunc pharetra tincidunt. Aenean venenatis sit amet eros sed ornare.
                    </p>
                    <p className='text-white'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim suscipit elit, et finibus risus sodales in. Sed vitae leo at tortor mattis tristique non vel turpis. Aliquam ullamcorper augue in justo consequat convallis condimentum et nisl. Sed malesuada aliquam lectus et blandit. Donec rutrum dolor vitae nisi tincidunt, non consequat eros lobortis. Sed ultricies tortor sit amet nibh aliquet, ut ullamcorper dolor consectetur. Cras quis luctus diam. Sed varius libero sed purus eleifend sagittis. Phasellus massa purus, eleifend eget accumsan et, ultricies non enim. Ut sodales faucibus feugiat. Maecenas quis pellentesque urna. Etiam vitae massa purus. Mauris varius fermentum dui id suscipit. Proin quis sapien eget leo maximus rhoncus.
                        <br /><br />
                        Nam ante purus, luctus eu consequat ac, sagittis quis ligula. Pellentesque condimentum purus sed fringilla consequat. Donec sit amet ultricies libero. Praesent consectetur accumsan mi, eu maximus augue pellentesque quis. Aliquam eget tellus scelerisque, consequat est nec, volutpat nulla. Praesent non auctor neque. Fusce quis euismod nisl. Vestibulum luctus id est eget auctor. Nam ipsum metus, malesuada sollicitudin pharetra id, placerat condimentum eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer mi leo, mollis nec nibh quis, dapibus ullamcorper libero. Morbi dictum blandit enim ut sollicitudin.
                        <br /><br />
                        Nam a eros vel eros tempor vestibulum sit amet et orci. Cras a sem maximus, hendrerit nisl ac, facilisis lectus. Nulla tempor posuere bibendum. Ut vel ligula et nulla cursus pellentesque ac sed risus. Nulla vel elementum sapien. Donec justo elit, tristique id scelerisque eu, convallis quis arcu. Quisque sit amet nisl accumsan, pellentesque est id, tincidunt ipsum. Cras nibh elit, eleifend in quam sed, laoreet pretium orci. Suspendisse potenti. In dignissim interdum urna vitae aliquam. Sed dictum ornare quam, ut faucibus quam pulvinar vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie diam a ipsum varius, ac semper mauris fermentum. Nam vulputate vulputate nisi ut maximus. Suspendisse in sollicitudin velit. Morbi elementum maximus eros, in consectetur est semper a.
                        <br /><br />
                        In hac habitasse platea dictumst. Suspendisse semper porttitor porta. Donec volutpat nulla orci, in rhoncus elit porttitor facilisis. Nunc lacinia dictum nisi, ac varius lacus convallis ac. Integer eget congue lacus. Aenean ut nibh sit amet nunc pharetra tincidunt. Aenean venenatis sit amet eros sed ornare.
                    </p>
                    <p className='text-white'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim suscipit elit, et finibus risus sodales in. Sed vitae leo at tortor mattis tristique non vel turpis. Aliquam ullamcorper augue in justo consequat convallis condimentum et nisl. Sed malesuada aliquam lectus et blandit. Donec rutrum dolor vitae nisi tincidunt, non consequat eros lobortis. Sed ultricies tortor sit amet nibh aliquet, ut ullamcorper dolor consectetur. Cras quis luctus diam. Sed varius libero sed purus eleifend sagittis. Phasellus massa purus, eleifend eget accumsan et, ultricies non enim. Ut sodales faucibus feugiat. Maecenas quis pellentesque urna. Etiam vitae massa purus. Mauris varius fermentum dui id suscipit. Proin quis sapien eget leo maximus rhoncus.
                        <br /><br />
                        Nam ante purus, luctus eu consequat ac, sagittis quis ligula. Pellentesque condimentum purus sed fringilla consequat. Donec sit amet ultricies libero. Praesent consectetur accumsan mi, eu maximus augue pellentesque quis. Aliquam eget tellus scelerisque, consequat est nec, volutpat nulla. Praesent non auctor neque. Fusce quis euismod nisl. Vestibulum luctus id est eget auctor. Nam ipsum metus, malesuada sollicitudin pharetra id, placerat condimentum eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer mi leo, mollis nec nibh quis, dapibus ullamcorper libero. Morbi dictum blandit enim ut sollicitudin.
                        <br /><br />
                        Nam a eros vel eros tempor vestibulum sit amet et orci. Cras a sem maximus, hendrerit nisl ac, facilisis lectus. Nulla tempor posuere bibendum. Ut vel ligula et nulla cursus pellentesque ac sed risus. Nulla vel elementum sapien. Donec justo elit, tristique id scelerisque eu, convallis quis arcu. Quisque sit amet nisl accumsan, pellentesque est id, tincidunt ipsum. Cras nibh elit, eleifend in quam sed, laoreet pretium orci. Suspendisse potenti. In dignissim interdum urna vitae aliquam. Sed dictum ornare quam, ut faucibus quam pulvinar vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie diam a ipsum varius, ac semper mauris fermentum. Nam vulputate vulputate nisi ut maximus. Suspendisse in sollicitudin velit. Morbi elementum maximus eros, in consectetur est semper a.
                        <br /><br />
                        In hac habitasse platea dictumst. Suspendisse semper porttitor porta. Donec volutpat nulla orci, in rhoncus elit porttitor facilisis. Nunc lacinia dictum nisi, ac varius lacus convallis ac. Integer eget congue lacus. Aenean ut nibh sit amet nunc pharetra tincidunt. Aenean venenatis sit amet eros sed ornare.
                    </p>
                    <p className='text-white'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim suscipit elit, et finibus risus sodales in. Sed vitae leo at tortor mattis tristique non vel turpis. Aliquam ullamcorper augue in justo consequat convallis condimentum et nisl. Sed malesuada aliquam lectus et blandit. Donec rutrum dolor vitae nisi tincidunt, non consequat eros lobortis. Sed ultricies tortor sit amet nibh aliquet, ut ullamcorper dolor consectetur. Cras quis luctus diam. Sed varius libero sed purus eleifend sagittis. Phasellus massa purus, eleifend eget accumsan et, ultricies non enim. Ut sodales faucibus feugiat. Maecenas quis pellentesque urna. Etiam vitae massa purus. Mauris varius fermentum dui id suscipit. Proin quis sapien eget leo maximus rhoncus.
                        <br /><br />
                        Nam ante purus, luctus eu consequat ac, sagittis quis ligula. Pellentesque condimentum purus sed fringilla consequat. Donec sit amet ultricies libero. Praesent consectetur accumsan mi, eu maximus augue pellentesque quis. Aliquam eget tellus scelerisque, consequat est nec, volutpat nulla. Praesent non auctor neque. Fusce quis euismod nisl. Vestibulum luctus id est eget auctor. Nam ipsum metus, malesuada sollicitudin pharetra id, placerat condimentum eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer mi leo, mollis nec nibh quis, dapibus ullamcorper libero. Morbi dictum blandit enim ut sollicitudin.
                        <br /><br />
                        Nam a eros vel eros tempor vestibulum sit amet et orci. Cras a sem maximus, hendrerit nisl ac, facilisis lectus. Nulla tempor posuere bibendum. Ut vel ligula et nulla cursus pellentesque ac sed risus. Nulla vel elementum sapien. Donec justo elit, tristique id scelerisque eu, convallis quis arcu. Quisque sit amet nisl accumsan, pellentesque est id, tincidunt ipsum. Cras nibh elit, eleifend in quam sed, laoreet pretium orci. Suspendisse potenti. In dignissim interdum urna vitae aliquam. Sed dictum ornare quam, ut faucibus quam pulvinar vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie diam a ipsum varius, ac semper mauris fermentum. Nam vulputate vulputate nisi ut maximus. Suspendisse in sollicitudin velit. Morbi elementum maximus eros, in consectetur est semper a.
                        <br /><br />
                        In hac habitasse platea dictumst. Suspendisse semper porttitor porta. Donec volutpat nulla orci, in rhoncus elit porttitor facilisis. Nunc lacinia dictum nisi, ac varius lacus convallis ac. Integer eget congue lacus. Aenean ut nibh sit amet nunc pharetra tincidunt. Aenean venenatis sit amet eros sed ornare.
                    </p>
                    <p className='text-white'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim suscipit elit, et finibus risus sodales in. Sed vitae leo at tortor mattis tristique non vel turpis. Aliquam ullamcorper augue in justo consequat convallis condimentum et nisl. Sed malesuada aliquam lectus et blandit. Donec rutrum dolor vitae nisi tincidunt, non consequat eros lobortis. Sed ultricies tortor sit amet nibh aliquet, ut ullamcorper dolor consectetur. Cras quis luctus diam. Sed varius libero sed purus eleifend sagittis. Phasellus massa purus, eleifend eget accumsan et, ultricies non enim. Ut sodales faucibus feugiat. Maecenas quis pellentesque urna. Etiam vitae massa purus. Mauris varius fermentum dui id suscipit. Proin quis sapien eget leo maximus rhoncus.
                        <br /><br />
                        Nam ante purus, luctus eu consequat ac, sagittis quis ligula. Pellentesque condimentum purus sed fringilla consequat. Donec sit amet ultricies libero. Praesent consectetur accumsan mi, eu maximus augue pellentesque quis. Aliquam eget tellus scelerisque, consequat est nec, volutpat nulla. Praesent non auctor neque. Fusce quis euismod nisl. Vestibulum luctus id est eget auctor. Nam ipsum metus, malesuada sollicitudin pharetra id, placerat condimentum eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer mi leo, mollis nec nibh quis, dapibus ullamcorper libero. Morbi dictum blandit enim ut sollicitudin.
                        <br /><br />
                        Nam a eros vel eros tempor vestibulum sit amet et orci. Cras a sem maximus, hendrerit nisl ac, facilisis lectus. Nulla tempor posuere bibendum. Ut vel ligula et nulla cursus pellentesque ac sed risus. Nulla vel elementum sapien. Donec justo elit, tristique id scelerisque eu, convallis quis arcu. Quisque sit amet nisl accumsan, pellentesque est id, tincidunt ipsum. Cras nibh elit, eleifend in quam sed, laoreet pretium orci. Suspendisse potenti. In dignissim interdum urna vitae aliquam. Sed dictum ornare quam, ut faucibus quam pulvinar vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie diam a ipsum varius, ac semper mauris fermentum. Nam vulputate vulputate nisi ut maximus. Suspendisse in sollicitudin velit. Morbi elementum maximus eros, in consectetur est semper a.
                        <br /><br />
                        In hac habitasse platea dictumst. Suspendisse semper porttitor porta. Donec volutpat nulla orci, in rhoncus elit porttitor facilisis. Nunc lacinia dictum nisi, ac varius lacus convallis ac. Integer eget congue lacus. Aenean ut nibh sit amet nunc pharetra tincidunt. Aenean venenatis sit amet eros sed ornare.
                    </p>
                </div>
            </Layout>
            <Footer />
        </div>
    )
}