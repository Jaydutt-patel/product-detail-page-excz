import Head from "next/head"

const SEO = ({ title, keywords, description, type, url, image }: any) => {
    return (
        <Head>
            <meta property="og:title" />
            <meta name="twitter:title" />
            <meta name='viewport' content='width=device-width, initial-scale=1'></meta>
            <meta name='keywords' content={keywords} />
            <meta name='title' content={title} />
            <meta name='description' content={description} />
            <meta property='og:title' content={title} />
            <meta property='og:type' content={type} />
            <meta property='og:url' content={url} />
            <meta property='og:image' content={image} />
            <meta name='twitter:title' content={title} />
            <meta name='twitter:type' content={type} />
            <meta name='twitter:url' content={url} />
            <meta name='twitter:image' content={image} />
            <meta charSet='utf-8'></meta>
            <link rel='icon' href='/favicon.ico'></link>
            <link rel='canonical' href={url}></link>
            <title>{title}</title>
        </Head>
    );
};
SEO.defaultProps = {
    title: "Next JS and tailwind css learning with Jaydutt",
    description: "This is a good project for learning Next js with Tailwind Css",
    keywords: "Next JS,Tailwind CSS,Tailwind, CSS,Jaydutt,Jaydutt Patel,jaydutt,jaydutt patel,Learning Next JS and Tailwind CSS with Jaydutt",
    type: "website"
}

export default SEO;
