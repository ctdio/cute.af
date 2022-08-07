import TinderCard from 'react-tinder-card'
import { Instagram as InstagramIcon } from 'react-feather'

import { Card } from './Card'

export const SwipeableCards = ({ images }) => {
  return (
    <div className="flex justify-center align-center grow mt-10 w-full text-slate-100">
      <div className="absolute flex flex-col justify-center align-center text-xs">
        <a href="https://instagram.com/mocheroni">
          <div className="flex flex-row justify-center align-center text-center">
            <InstagramIcon className="m-0" />{' '}
            <p className="text-sm pl-1">mocheroni</p>
          </div>
        </a>
        <p className="mt-5">Refresh to start over!</p>
      </div>

      {images.map((image) => (
        <TinderCard key={image} className="absolute">
          <Card image={image} />
        </TinderCard>
      ))}
    </div>
  )
}
