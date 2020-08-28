import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout/layout'
import utilStyles from '../global/utils.module.scss'
import Date from '../components/date/date'
import data from '../content/resdata.json'
import NewThing from '../components/newthing/newthing'

export default function Resume() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
        <h1>{data.heading}</h1>
        <NewThing
          thing= {data.thing}
        />
    </Layout>
  )
}
