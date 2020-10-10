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
        <p>I'm finally reworking my personal website with Next.js! Things are pretty basic right now, but I've got plans. For now, check out my resumé <Link href="resume">here</Link> or read some updates below.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog Posts</h2>
        <ul className={utilStyles.list}>
          {allContentData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <small className={utilStyles.date}>
                <Date dateString={date} />
              </small>
              <br />
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
