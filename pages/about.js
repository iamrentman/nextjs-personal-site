import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout/layout'
import About from '../data/about.mdx'
import styles from '../components/resume/resume.module.scss'
import postStyles from '../global/posts.module.scss'
import {MDXProvider} from '@mdx-js/react'

const h1 = props => <h1 className={styles.pageTitle} {...props} />
const h2 = props => <h2 className={styles.sectionHeading} {...props} />
const h3 = props => <h3 className={styles.jobHeading} {...props} />
const h4 = props => <h4 className={styles.positionHeading} {...props} />
const p = props => <p className={styles.description} {...props} />
const ul = props => <ul className={styles.list} {...props} />
const li = props => <li className={styles.listItem} {...props} />

const components = {
  h1: h1,
  h2: h2,
  h3: h3,
  h4: h4,
  p: p,
  ul: ul,
  li: li
}

export default function Resume() {
  return (
    <Layout about>
      <Head>
        <title>Justin Rent, Developer & Designer — About me</title>
      </Head>
      <MDXProvider components={components}>
        <section className={postStyles.content}>
          <About />
        </section>
      </MDXProvider>
    </Layout>
  )
}
