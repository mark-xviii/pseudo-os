import { useDispatch, useSelector } from 'react-redux'
import '../../styles/desktop.sass'
import { RootState } from '../../state-management/stores/root.store'
import { setBackgroundColor } from '../../state-management/slices/desktop.slice'
import { playSound } from '../../state-management/slices/sfx.slice'
import SoundMap from '../../maps/sound-map.map'
import Icon from '../Icon/Icon'
import { useEffect, useState } from 'react'
import { setPosition } from '../../state-management/slices/icons.slice'

export default function Desktop() {
  const color = useSelector((state: RootState) => state.desktop.backgroundColor)

  const icons = useSelector((state: RootState) => state.icons)

  const [activeIconId, setActiveIconId] = useState<string | null>()

  useEffect(() => {
    console.log(activeIconId)
  }, [activeIconId])

  const dispatch = useDispatch()

  // TRY DEDICATING MOUSE EVENT HANDLING TO ICON COMPONENT

  return (
    <div className="desktop" style={{ background: color || '#000000' }}>
      ver 0.0.2! nothing much to do yet... <br />
      <button
        onClick={() => {
          dispatch(setBackgroundColor('#ffaaff'))
          dispatch(playSound(SoundMap.explosion))
        }}
      >
        boot os
      </button>
      {icons.map((i, index) => (
        <Icon
          x={i.x}
          y={i.y}
          defaultX={200 + index * 126}
          defaultY={200}
          image={i.imageURL}
          alias={i.alias}
          isHighlighted={i.id === activeIconId}
          // onClick={() => {
          //   setActiveIconId(i.id)
          // }}
          onMouseMove={(event: MouseEvent) => {
            console.log(event.clientX)
            if (i.id) {
              console.log(event.clientX, event.clientY)
              dispatch(
                setPosition({ id: i.id, x: event.clientX, y: event.clientY })
              )
            }
          }}
        />
      ))}
    </div>
  )
}
