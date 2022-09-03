import { useRef, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import { Instagram as InstagramIcon } from 'react-feather'

import { Card } from './Card'

import { trackSwipeEvent, registerLinkTracking } from '../analytics'

type Props = {
  images: string[]
}

export const SwipeableCards: React.FC<Props> = ({ images }) => {
  const linkRef = useRef()

  const createOnSwipe = (image: string) => (direction: SwipeDirection) =>
    trackSwipeEvent({ image, direction })

  useEffect(() => {
    if (linkRef.current) {
      registerLinkTracking()
    }
  }, [linkRef.current])

  return (
    <div className="flex justify-center align-center grow mt-10 w-full text-slate-100">
      <div className="absolute flex flex-col justify-center align-center text-xs">
        <a
          id="mocheroni-instagram"
          ref={linkRef}
          href="https://instagram.com/mocheroni"
          style={{ WebkitTapHighlightColor: 'transparent' }}
          className="flex justify-center align-center text-purple-500"
        >
          <button
            type="button"
            className="bg-white rounded flex flex-row justify-center align-center text-center p-1"
          >
            <InstagramIcon className="m-0" />{' '}
            <p className="text-sm pl-1">mocheroni</p>
          </button>
        </a>
        <p className="mt-5">Check his insta for more pics</p>
      </div>

      <div className="w-64">
        {images.map((image) => (
          // @ts-ignore
          <TinderCard key={image} onSwipe={createOnSwipe(image)}>
            <Card image={image} />
          </TinderCard>
        ))}
      </div>
    </div>
  )
}
