import Head from 'next/head'
import links from '../links'

const Page = ({ index }) => {
  return (
    <div className="root">
      <Head>
        <title>cute.af pics of Mochi</title>
        <link
          href="https://fonts.googleapis.com/css?family=Lato&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/public/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/public/favicon-16x16.png"
        />
      </Head>
      <div className="content">
        <h1>This is Mochi</h1>
        <h2>He's a good boi</h2>
        <h3>Refresh for random pics</h3>
        <img className="image" src={links[index]} />
      </div>

      <style jsx>{`
        .root {
          display: flex;
          align-self: center;
          justify-content: center;

          font-family: 'Lato', sans-serif;
        }

        .content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .image {
          flex: 1 1 0;
          max-width: 100%;
          opacity: 1;
          animation: fadeIn 1s;
          object-fit: contain;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @media only screen and (min-width: 768px) {
          .image {
            max-width: 400px;
            max-height: 700px;
          }
        }
      `}</style>
    </div>
  )
}

Page.getInitialProps = () => {
  const index = Math.floor(Math.random() * links.length)
  return { index }
}

export default Page
