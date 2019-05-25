import Head from 'next/head'
import links from '../links'

const Page = ({ index }) => {
  return (
    <div className="root">
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Lato&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="image-container">
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

        .image-container {
          display: block;
        }

        .image {
          flex: 1 1 0;
          max-width: 100%;
          opacity: 1;
          animation: fadeIn 1s;
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
