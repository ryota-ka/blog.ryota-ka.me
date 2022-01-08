import Head from 'next/head';
import Link from 'next/link';

type Props = {
    description?: string | undefined;
    title?: string | undefined;
};

export const Layout: React.FC<Props> = ({ children, description, title }) => {
    return (
        <>
            <Head>
                <title>{title === undefined ? 'blog.ryota-ka.me' : `${title} - blog.ryota-ka.me`}</title>
                {description !== undefined && <meta property="og:description" content={description} />}
            </Head>
            <header className="px-16 py-4 bg-white drop-shadow">
                <h1 className="text-base">
                    <Link href="/">blog.ryota-ka.me</Link>
                </h1>
            </header>
            <main className="px-16 pt-4">{children}</main>
        </>
    );
};
