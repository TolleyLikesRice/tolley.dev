import Head from 'next/head'
import Navbar from '@/components/navbar';
import Layout from '@/components/layout';
import Script from 'next/script';
import Link from 'next/link';
import { SocialLink } from '@/components/socials';
import styles from '@/styles/index.module.css';
import ScrollSpy from 'react-scrollspy-navigation'
import React from 'react';

import { ArrowDownIcon } from '@heroicons/react/24/solid';

import { SOCIAL_LIST } from '@/components/socials';

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
                            <Link ref={React.createRef()} href="#projects">
                                <ArrowDownIcon className='h-6 w-6 fill-gray-200' />
                            </Link>
                            <div></div> {/* this is a hack to make the scrollspy work - needs more than one child*/}
                        </ScrollSpy>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br />
            <div>
                <h2 id="projects" className='text-5xl font-medium text-center text-gray-100'>Projects</h2>
                <hr className='w-64 h-0.5 mx-auto my-4 border-0 rounded md:my-6 bg-gray-700' />
            </div>
            {/* fluff */}
            <div>
                <h2 className='text-5xl font-medium text-center text-gray-100'>Projects</h2>
                <hr className='w-64 h-0.5 mx-auto my-4 border-0 rounded md:my-6 bg-gray-700' />
            </div>
            <div>
                <h2 className='text-5xl font-medium text-center text-gray-100'>Projects</h2>
                <hr className='w-64 h-0.5 mx-auto my-4 border-0 rounded md:my-6 bg-gray-700' />
            </div>
            <div>
                <h2 className='text-5xl font-medium text-center text-gray-100'>Projects</h2>
                <hr className='w-64 h-0.5 mx-auto my-4 border-0 rounded md:my-6 bg-gray-700' />
            </div>
            <div>
                <h2 className='text-5xl font-medium text-center text-gray-100'>Projects</h2>
                <hr className='w-64 h-0.5 mx-auto my-4 border-0 rounded md:my-6 bg-gray-700' />
            </div>
            <div>
                <h2 className='text-5xl font-medium text-center text-gray-100'>Projects</h2>
                <hr className='w-64 h-0.5 mx-auto my-4 border-0 rounded md:my-6 bg-gray-700' />
            </div>
            <div>
                <h2 className='text-5xl font-medium text-center text-gray-100'>Projects</h2>
                <hr className='w-64 h-0.5 mx-auto my-4 border-0 rounded md:my-6 bg-gray-700' />
            </div>
            <div>
                <h2 className='text-5xl font-medium text-center text-gray-100'>Projects</h2>
                <hr className='w-64 h-0.5 mx-auto my-4 border-0 rounded md:my-6 bg-gray-700' />
            </div>
            <div>
                <h2 className='text-5xl font-medium text-center text-gray-100'>Projects</h2>
                <hr className='w-64 h-0.5 mx-auto my-4 border-0 rounded md:my-6 bg-gray-700' />
            </div>
            <div>
                <h2 className='text-5xl font-medium text-center text-gray-100'>Projects</h2>
                <hr className='w-64 h-0.5 mx-auto my-4 border-0 rounded md:my-6 bg-gray-700' />
            </div>
            <div>
                <h2 className='text-5xl font-medium text-center text-gray-100'>Projects</h2>
                <hr className='w-64 h-0.5 mx-auto my-4 border-0 rounded md:my-6 bg-gray-700' />
            </div>
            <div>
                <h2 className='text-5xl font-medium text-center text-gray-100'>Projects</h2>
                <hr className='w-64 h-0.5 mx-auto my-4 border-0 rounded md:my-6 bg-gray-700' />
            </div>
            <div>
                <h2 className='text-5xl font-medium text-center text-gray-100'>Projects</h2>
                <hr className='w-64 h-0.5 mx-auto my-4 border-0 rounded md:my-6 bg-gray-700' />
            </div>
            <div>
                <h2 className='text-5xl font-medium text-center text-gray-100'>Projects</h2>
                <hr className='w-64 h-0.5 mx-auto my-4 border-0 rounded md:my-6 bg-gray-700' />
            </div>
            <div>
                <h2 className='text-5xl font-medium text-center text-gray-100'>Projects</h2>
                <hr className='w-64 h-0.5 mx-auto my-4 border-0 rounded md:my-6 bg-gray-700' />
            </div>
            <div>
                <h2 className='text-5xl font-medium text-center text-gray-100'>Projects</h2>
                <hr className='w-64 h-0.5 mx-auto my-4 border-0 rounded md:my-6 bg-gray-700' />
            </div>
            <div>
                <h2 className='text-5xl font-medium text-center text-gray-100'>Projects</h2>
                <hr className='w-64 h-0.5 mx-auto my-4 border-0 rounded md:my-6 bg-gray-700' />
            </div>
            <div>
                <h2 className='text-5xl font-medium text-center text-gray-100'>Projects</h2>
                <hr className='w-64 h-0.5 mx-auto my-4 border-0 rounded md:my-6 bg-gray-700' />
            </div>

        </Layout>
    );
}