import Head from 'next/head'
import Layout from '../../components/layout/layout'
import Date from '../../components/date/date'
import { getAllContentIds, getContentData } from '../../lib/posts'
import utilStyles from '../../global/utils.module.scss'


export default function Post({ contentData }) {
  return (
    <Layout>
      <Head>
        <title>{contentData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{contentData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={contentData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: contentData.contentHtml }} />
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
