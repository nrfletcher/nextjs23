import Link from "next/link";
import Image from 'next/image';
import Head from "next/head";
import Script from 'next/script';
import Layout from "../components/layout";

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>"What's good?"</h1>
            <h2>
                <Link href="/">Home</Link>
            </h2>
        </Layout>
    )   
}