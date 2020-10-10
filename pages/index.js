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
        <p>I'm excited to be reworking my personal website with Next.js! Things are pretty basic right now, but I've got big plans. For the time being you can read a bit <Link href="about">about me</Link>, learn more about my <Link href="resume">professional experience</Link>, or read some updates below. If you'd like to connect, you can also find me on <a href="https://www.linkedin.com/in/jrentdesign/">LinkedIn</a>, <a href="https://www.dribbble.com/iamrentman">Dribbble</a>, or <a href="https://www.twitter.com/iamrentman">Twitter</a>.</p>
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
