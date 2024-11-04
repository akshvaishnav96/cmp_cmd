import { MouseEventHandler } from "react"


interface propsData{
  text:string,
  className:string,
  checked:boolean,
  onClick:MouseEventHandler<HTMLButtonElement>

}

export default function Button({text,className,onClick,checked}:propsData) {
  return (
    <button onClick={onClick} className={checked ? `${className} lineThrough` : className}    disabled={checked}>{text}</button>
  )
}
