import Layout from "../../components/layout";
import Head from "next/head";
import BreadCrumbs from "../../components/bread-crumbs/bread-crumbs";
import {getAllNewsIds, getNewsData} from "../../lib/news";

export default function News({newsData}) {
    // console.log(newsData)
    return (
        <Layout>
            <Head>
                <title>{newsData.title}</title>
            </Head>
            <BreadCrumbs path={newsData.title} />
            <article id="news-project-page">
                {/*<h1>{newsData.title}</h1>*/}
                {/*<div>{newsData.date}</div>*/}
                <div dangerouslySetInnerHTML={{ __html:newsData.fileContents}} />
            </article>

        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllNewsIds()
    // console.log(paths)
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    // console.log('params',params)
    const newsData = getNewsData(params.id)
    // console.log(newsData)
    return {
        props: {
            newsData
        }
    }
}