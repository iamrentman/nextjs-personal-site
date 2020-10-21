import Head from 'next/head'
import Layout from '../../components/layout/layout'
import Date from '../../components/date/date'
import { getAllContentIds, getContentData } from '../../lib/posts'
import utilStyles from '../../global/utils.module.scss'
import postStyles from '../../global/posts.module.scss'


export default function Post({ contentData }) {
  return (
    <Layout>
      <Head>
        <title>{contentData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{contentData.title}</h1>
        <div className={postStyles.date}>
          <Date dateString={contentData.date} />
        </div>
        <div className={postStyles.content} dangerouslySetInnerHTML={{ __html: contentData.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllContentIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const contentData = await getContentData(params.id)
  return {
    props: {
      contentData
    }
  }
}
