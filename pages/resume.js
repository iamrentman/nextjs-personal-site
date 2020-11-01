import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout/layout'
import Contact from '../data/resume/contact.mdx'
import Experience from '../data/resume/experience.mdx'
import utilStyles from '../global/utils.module.scss'
import styles from '../components/resume/resume.module.scss'
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
    <Layout resume contentClass={styles.resumeWrapper}>
      <Head>
        <title>Justin Rent, Developer & Designer — Resumé</title>
      </Head>

      <h1 className={utilStyles.headingXl}>Professional Background</h1>
      <p className={styles.intro}>I am a Developer & Designer with an MBA who is inspired by big ideas, meaningful projects, meticulous user-centered design, and the collaborative nature of diverse, inclusive, open source focused development teams.</p>
      <p className={styles.intro}>My professional career is rooted in design with a constant curiosity for technology and an interest in improving business. As a developer, I've found a sweet spot where I'm well equipped to collaborate closely with strategists and designers to ensure that their work is accurately translated to the browser and results in engaging user experiences. Day-to-day, modern development tools and the development team workflow are where I find myself most engaged.</p>
      <h2 className={styles.sectionHeading}>Technical Abilities:</h2>
      <p className={styles.intro}>React, Javascript, jQuery, Sass/CSS/CSS-in-JS/BEM/SMACSS, HTML/JSX/MDX, Twig, GraphQL, Gulp, Node, Drupal, decoupled architecture, Gatsby, Next.js, Storybook, Pattern Lab, KSS Node, Jest, Git, DDEV/LAMP, PHP, WordPress, VS Code, Adobe Creative Cloud apps, Sketch, InVision, Abstract</p>
      <MDXProvider components={components}>
        <section className={styles.experience}>
          <Experience/>
        </section>
      </MDXProvider>
    </Layout>
  )
}
