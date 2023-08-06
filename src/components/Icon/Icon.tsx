import { useState } from 'react'
import '../../styles/icon.sass'

interface IconInterface {
  image?: string | null
  x?: number | null
  y?: number | null
  defaultX: number
  defaultY: number
  alias?: string | null
  onClick?: any
  onMouseDown?: any
  onMouseUp?: any
  onMouseMove?: any
  isHighlighted?: boolean
}

export default function Icon(props: IconInterface) {
  const [isMouseDown, setIsMouseDown] = useState<boolean | null>(null)

  return (
    <div
      onMouseDown={() => {
        setIsMouseDown(true)
      }}
      onMouseUp={() => {
        setIsMouseDown(false)
      }}
      onMouseMove={() => {
        if (props.isHighlighted) {
          props.onMouseMove()
        }
      }}
      onClick={() => {
        props.onClick()
      }}
      className={`icon${props.isHighlighted ? ' icon-highlighted' : ''}`}
      style={{
        left: props.x || props.defaultX,
        top: props.y || props.defaultY,
      }}
    >
      <div className="picture-wrap">
        <img className="picture" src={props.image || ''} alt="no image sry" />
      </div>
      <span className="title">{props.alias}</span>
    </div>
  )
}
