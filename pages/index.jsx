import Head from 'next/head'
import shuffle from 'lodash/shuffle'

import { SwipeableCards } from '../components/SwipeableCards'
import mochiImages from '../links'

const Page = ({ images }) => {
  return (
    <div className="root bg-gradient-to-r from-purple-500 to-pink-500 p-5">
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
      <div className="flex flex-col justify-center items-center text-slate-100">
        <h1 className="text-3xl">cute.af</h1>
        <p>This is Mochi. Swipe for more pics.</p>
      </div>

      <SwipeableCards images={images} />
    </div>
  )
}

Page.getInitialProps = () => {
  const images = shuffle(mochiImages).slice(0, 5)
  return { images }
}

export default Page
