import Head from 'next/head'
import Link from 'next/link'
import { getSortedContentData } from '../lib/posts'
import Layout, { siteTitle } from '../components/layout/layout'
import utilStyles from '../global/utils.module.scss'
import Date from '../components/date/date'

export async function getStaticProps() {
  const allContentData = getSortedContentData()
  return {
    props: {
      allContentData
    }
  }
}

export default function Home({ allContentData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Finally reworking my personal website with Next.js! Stay tuned.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Link href="resume" as={`/resume`}>
         <h2 className={utilStyles.headingLg}><a>Resumé</a></h2>
        </Link>
        <h2 className={utilStyles.headingLg}>Blog Posts</h2>
        <ul className={utilStyles.list}>
          {allContentData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
