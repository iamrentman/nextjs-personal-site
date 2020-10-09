import Head from 'next/head'
import styles from './layout.module.scss'
import utilStyles from '../../global/utils.module.scss'
import Link from 'next/link'

const name = 'Justin Rent,\nDeveloper & Designer'
export const siteTitle = 'Justin Rent, Dev & Design'

export default function Layout({ children, home, contentClass }) {
  return (
    <div className={styles.container}>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-28730813-2"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-28730813-2');`
          }}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Justin Rent's personal website, built with Next.js."
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link href="https://fonts.googleapis.com/css2?family=Literata:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet"></link>
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main className={contentClass}>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}