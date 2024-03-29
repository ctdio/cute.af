type Props = {
  image: string
}

export const Card: React.FC<Props> = ({ image }) => {
  return (
    <div className="rounded-2xl p-2 bg-slate-700 w-64 h-96 absolute">
      <img className="rounded-xl object-cover w-full h-full m-0" src={image} />
    </div>
  )
}
