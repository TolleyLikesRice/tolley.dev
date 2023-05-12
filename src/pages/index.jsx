import Link from 'next/link'
import Head from 'next/head'
import Layout from '@/components/layout';

export default function IndexPage() {
    return (
        <Layout>
            <Head>
                <title>Home Page</title>
            </Head>
            <h1>Home Page</h1>
        </Layout>
    );
}