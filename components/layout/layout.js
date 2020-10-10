import Head from 'next/head';
import classnames from 'classnames';
import styles from './layout.module.scss';
import utilStyles from '../../global/utils.module.scss';
import Link from 'next/link';

const d = new Date();
const year = d.getFullYear();
const name = 'Justin Rent,\nDeveloper & Designer';
export const siteTitle = 'Justin Rent, Developer & Designer';


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
            <h2 className={utilStyles.heading2Xl}>
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
      <footer className={styles.footer}>
        <ul className={styles.iconList}>
          <li>
            <a href="https://www.linkedin.com/in/jrentdesign/">
              <span className={styles.iconText}>Connect with me on LinkedIn</span>
              <svg viewBox="0 50 512 512" xmlns="http://www.w3.org/2000/svg" className={classnames( styles.iconSocial, styles.iconLinkedIn)}>
                <path d="M150.65,100.682c0,27.992-22.508,50.683-50.273,50.683c-27.765,0-50.273-22.691-50.273-50.683
                C50.104,72.691,72.612,50,100.377,50C128.143,50,150.65,72.691,150.65,100.682z M143.294,187.333H58.277V462h85.017V187.333z
                M279.195,187.333h-81.541V462h81.541c0,0,0-101.877,0-144.181c0-38.624,17.779-61.615,51.807-61.615
                c31.268,0,46.289,22.071,46.289,61.615c0,39.545,0,144.181,0,144.181h84.605c0,0,0-100.344,0-173.915
                s-41.689-109.131-99.934-109.131s-82.768,45.369-82.768,45.369V187.333z"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://dribbble.com/iamrentman">
              <span className={styles.iconText}>See my shots on Dribbble</span>
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={classnames( styles.iconSocial, styles.iconDribbble)}>
                <path d="M50 0C22.397 0 0 22.397 0 50s22.397 50 50 50c27.549 0 50-22.397 50-50S77.549 0 50 0zm33.026 23.048a42.512 42.512 0 019.653 26.572c-1.41-.27-15.51-3.145-29.718-1.355-.325-.705-.597-1.465-.922-2.224a127.095 127.095 0 00-2.82-6.182c15.727-6.4 22.885-15.618 23.807-16.811zM50 7.375c10.846 0 20.77 4.068 28.308 10.738-.76 1.084-7.213 9.707-22.397 15.401-6.996-12.852-14.75-23.373-15.944-25 3.2-.76 6.562-1.139 10.033-1.139zm-18.167 4.013c1.139 1.519 8.731 12.094 15.835 24.675-19.956 5.314-37.581 5.206-39.48 5.206 2.766-13.232 11.714-24.24 23.645-29.88zM7.267 50.054v-1.301c1.844.054 22.56.325 43.872-6.074 1.247 2.386 2.386 4.826 3.47 7.267-.542.163-1.138.325-1.68.488C30.91 57.538 19.196 76.952 18.22 78.579 11.443 71.041 7.267 61.01 7.267 50.054zM50 92.734a42.41 42.41 0 01-26.193-9.003c.76-1.573 9.436-18.275 33.514-26.681.108-.054.163-.054.271-.109 6.02 15.564 8.46 28.634 9.11 32.376-5.151 2.223-10.79 3.416-16.702 3.416zm23.807-7.322c-.434-2.603-2.712-15.076-8.297-30.423 13.395-2.115 25.108 1.356 26.572 1.844-1.843 11.876-8.676 22.126-18.275 28.58z"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/iamrentman">
              <span className={styles.iconText}>Follow me on Twitter</span>
              <svg viewBox="328 355 335 276" xmlns="http://www.w3.org/2000/svg" className={classnames( styles.iconSocial, styles.iconTwitter)}>
                <path d="
                  M 630, 425
                  A 195, 195 0 0 1 331, 600
                  A 142, 142 0 0 0 428, 570
                  A  70,  70 0 0 1 370, 523
                  A  70,  70 0 0 0 401, 521
                  A  70,  70 0 0 1 344, 455
                  A  70,  70 0 0 0 372, 460
                  A  70,  70 0 0 1 354, 370
                  A 195, 195 0 0 0 495, 442
                  A  67,  67 0 0 1 611, 380
                  A 117, 117 0 0 0 654, 363
                  A  65,  65 0 0 1 623, 401
                  A 117, 117 0 0 0 662, 390
                  A  65,  65 0 0 1 630, 425
                  Z"
                  />
              </svg>
            </a>
          </li>
        </ul>
        <small className={styles.copyright}>© {year} Justin Rent</small>
      </footer>
    </div>
  )
}