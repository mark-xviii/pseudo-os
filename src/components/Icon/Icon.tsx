import { useState } from 'react'
import '../../styles/icon.sass'
import { useDispatch, useSelector } from 'react-redux'
import { setPosition } from '../../state-management/slices/icons.slice'
import React from 'react'

interface IconInterface {
  id: string
  image?: string
  x?: number
  y?: number
  defaultX: number
  defaultY: number
  alias?: string
  onClick?: any
  onMouseDown?: any
  onMouseUp?: any
  onMouseMove?: any
  isHighlighted?: boolean
}

export default function Icon(props: IconInterface) {
  const ref = React.createRef<HTMLDivElement>()

  const [coordinateOffset, setCoordinateOffset] = useState<{
    x: number
    y: number
  }>({ x: 0, y: 0 })

  const dispatch = useDispatch()

  function handleDragEnd(positionX: number, positionY: number) {
    if (ref.current) {
      dispatch(
        setPosition({
          id: props.id,
          x: positionX - coordinateOffset.x,
          y: positionY - coordinateOffset.y,
        })
      )
    }
  }

  function handleDragStart(positionX: number, positionY: number) {
    if (ref.current) {
      const { x: boxX, y: boxY } = ref.current?.getBoundingClientRect()

      setCoordinateOffset({
        x: Math.abs(positionX - boxX),
        y: Math.abs(positionY - boxY),
      })
    }
  }

  return (
    <div
      draggable={true}
      ref={ref}
      tabIndex={0}
      className={`icon${props.isHighlighted ? ' icon-highlighted' : ''}`}
      style={{
        left: props.x || props.defaultX,
        top: props.y || props.defaultY,
      }}
      onDragStart={(event) => {
        handleDragStart(event.clientX, event.clientY)
      }}
      onDragEnd={(event) => {
        handleDragEnd(event.clientX, event.clientY)
      }}
    >
      <div className="picture-wrap" draggable={false}>
        <img
          className="picture"
          src={props.image || ''}
          alt="no image sry"
          draggable={false}
        />
      </div>
      <span className="title">{props.alias}</span>
    </div>
  )
}
