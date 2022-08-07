export const Card = ({ image }) => {
  return (
    <div className="rounded-2xl p-2 bg-slate-700 w-64 h-96">
      <img className="rounded-xl object-cover w-full h-full m-0" src={image} />
    </div>
  )
}
