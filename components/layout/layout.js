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
              <svg viewBox="0 50 512 512" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" className={classnames( styles.iconSocial, styles.iconLinkedIn)}>
                <path d="M150.65,100.682c0,27.992-22.508,50.683-50.273,50.683c-27.765,0-50.273-22.691-50.273-50.683
                C50.104,72.691,72.612,50,100.377,50C128.143,50,150.65,72.691,150.65,100.682z M143.294,187.333H58.277V462h85.017V187.333z
                M279.195,187.333h-81.541V462h81.541c0,0,0-101.877,0-144.181c0-38.624,17.779-61.615,51.807-61.615
                c31.268,0,46.289,22.071,46.289,61.615c0,39.545,0,144.181,0,144.181h84.605c0,0,0-100.344,0-173.915
                s-41.689-109.131-99.934-109.131s-82.768,45.369-82.768,45.369V187.333z"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://github.com/iamrentman">
              <span className={styles.iconText}>Check out my contributions on GitHub</span>
              <svg viewBox="0 0 32.579 31.775" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" className={classnames( styles.iconSocial, styles.iconGitHub)}>
                <path d="M16.289 0a16.291 16.291 0 00-5.148 31.747c.815.149 1.112-.354 1.112-.786 0-.386-.014-1.411-.022-2.77-4.531.984-5.487-2.184-5.487-2.184a4.309 4.309 0 00-1.809-2.382c-1.479-1.011.112-.991.112-.991a3.423 3.423 0 012.495 1.679 3.47 3.47 0 004.741 1.354 3.477 3.477 0 011.034-2.178C9.7 23.078 5.9 21.68 5.9 15.438a6.3 6.3 0 011.677-4.371 5.856 5.856 0 01.159-4.311s1.368-.438 4.48 1.67a15.42 15.42 0 018.156 0c3.11-2.108 4.475-1.67 4.475-1.67a5.846 5.846 0 01.162 4.311 6.287 6.287 0 011.675 4.371c0 6.258-3.809 7.635-7.438 8.038a3.888 3.888 0 011.106 3.017c0 2.177-.02 3.934-.02 4.468 0 .436.293.943 1.12.784A16.292 16.292 0 0016.289 0" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://codepen.io/iamrentman">
              <span className={styles.iconText}>Check out my CodePens</span>
              <svg viewBox="0 0 31.775 31.775" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" className={classnames( styles.iconSocial, styles.iconCodePen)}>
                <path d="M7.753 14.475v2.826l2.112-1.413zM15.038 12.424V8.486l-6.615 4.41 2.955 1.977zM23.346 12.896l-6.615-4.41v3.938l3.66 2.448zM8.429 18.88l6.615 4.41v-3.938l-3.66-2.448zM16.732 19.351v3.938l6.615-4.41-2.955-1.976zM15.888 13.89l-2.986 2 2.986 2 2.986-2z" />
                <path d="M15.887-.001a15.887 15.887 0 1015.888 15.889A15.888 15.888 0 0015.887-.001M25.71 18.88a.831.831 0 01-.008.111c0 .012 0 .024-.007.036s-.009.048-.015.071-.009.027-.013.041-.013.041-.022.062l-.019.041a.508.508 0 01-.029.056l-.024.039c-.011.018-.023.035-.036.051l-.029.037c-.01.012-.027.031-.042.045s-.022.023-.034.033l-.048.04-.038.029-.014.01-8.976 5.987a.843.843 0 01-.937 0L6.44 19.583l-.014-.01-.038-.029a.636.636 0 01-.082-.073l-.042-.045c-.014-.015-.02-.024-.029-.037l-.035-.051-.024-.039-.029-.056-.019-.041-.022-.062-.013-.041c-.004-.014-.01-.047-.015-.071l-.007-.036a.832.832 0 01-.008-.111v-5.982a.819.819 0 01.008-.11c0-.012 0-.024.007-.037s.009-.048.015-.071.009-.027.013-.041.013-.041.022-.062l.019-.041c.009-.019.018-.038.029-.056l.024-.039a.652.652 0 01.035-.051l.029-.037.042-.046.034-.033a.636.636 0 01.048-.04l.038-.029.014-.01 8.979-5.986a.844.844 0 01.937 0l8.979 5.986.014.01.038.029c.017.013.033.026.048.04l.034.033c.012.011.029.03.042.046l.029.037.036.051c.012.017.017.026.024.039l.029.056.019.041.022.062c.007.021.01.027.013.041l.015.071c.005.024 0 .024.007.037a.819.819 0 01.008.11z"/>
                <path d="M24.023 17.301v-2.826l-2.112 1.413z"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://dribbble.com/iamrentman">
              <span className={styles.iconText}>See my shots on Dribbble</span>
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" className={classnames( styles.iconSocial, styles.iconDribbble)}>
                <path d="M50 0C22.397 0 0 22.397 0 50s22.397 50 50 50c27.549 0 50-22.397 50-50S77.549 0 50 0zm33.026 23.048a42.512 42.512 0 019.653 26.572c-1.41-.27-15.51-3.145-29.718-1.355-.325-.705-.597-1.465-.922-2.224a127.095 127.095 0 00-2.82-6.182c15.727-6.4 22.885-15.618 23.807-16.811zM50 7.375c10.846 0 20.77 4.068 28.308 10.738-.76 1.084-7.213 9.707-22.397 15.401-6.996-12.852-14.75-23.373-15.944-25 3.2-.76 6.562-1.139 10.033-1.139zm-18.167 4.013c1.139 1.519 8.731 12.094 15.835 24.675-19.956 5.314-37.581 5.206-39.48 5.206 2.766-13.232 11.714-24.24 23.645-29.88zM7.267 50.054v-1.301c1.844.054 22.56.325 43.872-6.074 1.247 2.386 2.386 4.826 3.47 7.267-.542.163-1.138.325-1.68.488C30.91 57.538 19.196 76.952 18.22 78.579 11.443 71.041 7.267 61.01 7.267 50.054zM50 92.734a42.41 42.41 0 01-26.193-9.003c.76-1.573 9.436-18.275 33.514-26.681.108-.054.163-.054.271-.109 6.02 15.564 8.46 28.634 9.11 32.376-5.151 2.223-10.79 3.416-16.702 3.416zm23.807-7.322c-.434-2.603-2.712-15.076-8.297-30.423 13.395-2.115 25.108 1.356 26.572 1.844-1.843 11.876-8.676 22.126-18.275 28.58z"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/iamrentman">
              <span className={styles.iconText}>Follow me on Twitter</span>
              <svg viewBox="328 355 335 276" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" className={classnames( styles.iconSocial, styles.iconTwitter)}>
                <path d="M 630, 425 A 195, 195 0 0 1 331, 600 A 142, 142 0 0 0 428, 570 A  70,  70 0 0 1 370, 523 A  70,  70 0 0 0 401, 521 A  70,  70 0 0 1 344, 455 A  70,  70 0 0 0 372, 460 A  70,  70 0 0 1 354, 370 A 195, 195 0 0 0 495, 442 A  67,  67 0 0 1 611, 380 A 117, 117 0 0 0 654, 363 A  65,  65 0 0 1 623, 401 A 117, 117 0 0 0 662, 390 A  65,  65 0 0 1 630, 425 Z"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/iamrentman/">
              <span className={styles.iconText}>Check out my photos on Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.775 31.775" focusable="false" aria-hidden="true" className={classnames( styles.iconSocial, styles.iconInstagram)}>
                <path d="M15.887 2.863c4.242 0 4.745.016 6.42.093a8.79 8.79 0 012.95.547 4.922 4.922 0 011.827 1.188 4.923 4.923 0 011.188 1.827 8.793 8.793 0 01.547 2.95c.076 1.675.093 2.178.093 6.42s-.016 4.745-.093 6.42a8.793 8.793 0 01-.547 2.95 5.262 5.262 0 01-3.015 3.015 8.792 8.792 0 01-2.95.547c-1.675.076-2.177.093-6.42.093s-4.745-.016-6.42-.093a8.792 8.792 0 01-2.95-.547 4.923 4.923 0 01-1.827-1.188 4.923 4.923 0 01-1.19-1.828 8.791 8.791 0 01-.547-2.95c-.076-1.675-.093-2.178-.093-6.42s.016-4.745.093-6.42A8.791 8.791 0 013.5 6.518a4.923 4.923 0 011.191-1.827A4.922 4.922 0 016.518 3.5a8.79 8.79 0 012.95-.547c1.675-.076 2.178-.093 6.42-.093m0-2.863c-4.315 0-4.856.018-6.55.1a11.66 11.66 0 00-3.857.737 7.788 7.788 0 00-2.814 1.833A7.787 7.787 0 00.834 5.481 11.66 11.66 0 00.1 9.337c-.077 1.695-.1 2.236-.1 6.55s.018 4.856.1 6.55a11.659 11.659 0 00.738 3.857 7.787 7.787 0 001.832 2.814 7.789 7.789 0 002.814 1.832 11.66 11.66 0 003.857.738c1.695.077 2.236.1 6.55.1s4.856-.018 6.55-.1a11.661 11.661 0 003.857-.738 8.124 8.124 0 004.646-4.647 11.659 11.659 0 00.739-3.857c.077-1.695.1-2.236.1-6.55s-.018-4.856-.1-6.55a11.66 11.66 0 00-.739-3.857 7.787 7.787 0 00-1.832-2.814A7.788 7.788 0 0026.294.834 11.66 11.66 0 0022.438.1C20.743.018 20.2 0 15.887 0"/>
                <path d="M15.887 7.729a8.158 8.158 0 108.158 8.158 8.158 8.158 0 00-8.158-8.158m0 13.454a5.3 5.3 0 115.3-5.3 5.3 5.3 0 01-5.3 5.3M26.275 7.406A1.906 1.906 0 1124.369 5.5a1.906 1.906 0 011.906 1.906"/>
              </svg>
            </a>
          </li>
        </ul>
        <small className={styles.copyright}>© {year} Justin Rent</small>
      </footer>
    </div>
  )
}