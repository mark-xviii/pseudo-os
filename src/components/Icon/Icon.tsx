import { useState } from 'react'
import '../../styles/icon.sass'
import { useDispatch } from 'react-redux'
import { setPosition } from '../../state-management/slices/icons.slice'
import React from 'react'
import { playSound } from '../../state-management/slices/sfx.slice'
import SoundMap from '../../maps/sound-map.map'
import { Utils } from '../../utils'

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

  function normalizeByGrid() {
    // TODO
  }

  function normalizeByBoundaries({ x, y }: { x: number; y: number }) {
    if (ref.current) {
      let newX, newY

      let { horizontalMargin: h, verticalMargin: v } =
        Utils.Constants.Stylings.Desktop

      v += Utils.Constants.Stylings.TopToolbar.height

      const { top, right, bottom, left } = ref.current?.getBoundingClientRect()

      console.log(top, right, bottom, left)

      if (x < h) {
        newX = h
      }

      if (x > window.innerWidth - h - (right - left)) {
        newX = window.innerWidth - h - (right - left)
      }

      if (y < v + Utils.Constants.Stylings.TopToolbar.height) {
        newY = v + Utils.Constants.Stylings.TopToolbar.height
      }

      if (y > window.innerHeight - v - (bottom - top)) {
        newY = window.innerHeight - v - (bottom - top)
      }

      return { x: newX || x, y: newY || y }
    }

    return { x: 0, y: 0 }
  }

  function handleDragEnd(positionX: number, positionY: number) {
    if (ref.current) {
      dispatch(
        setPosition({
          id: props.id,
          ...normalizeByBoundaries({
            x: positionX - coordinateOffset.x,
            y: positionY - coordinateOffset.y,
          }),
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
      className={'icon'}
      style={{
        left: props.x || props.defaultX,
        top:
          props.y ||
          props.defaultY + Utils.Constants.Stylings.TopToolbar.height,
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
