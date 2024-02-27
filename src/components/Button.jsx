
const Button = (type, text, onClick)=> {
  return (
    <div>
        <button type={type} onClick={onClick} className="rounded-xl bg-secondaryText hover:bg-yellow-500  text-blackText text-center text-xl hover:scale-105 duration-75">{text}</button>
    </div>
  )
}

export default Button;