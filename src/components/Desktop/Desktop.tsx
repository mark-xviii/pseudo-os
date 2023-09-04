import { useDispatch, useSelector } from 'react-redux'
import '../../styles/desktop.sass'
import { RootState } from '../../state-management/stores/root.store'
import Icon from '../Icon/Icon'

export default function Desktop() {
  // const color = useSelector((state: RootState) => state.desktop.backgroundColor)

  const icons = useSelector((state: RootState) => state.icons)

  // TRY DEDICATING MOUSE EVENT HANDLING TO ICON COMPONENT

  return (
    <div
      className="desktop"
      onDragOver={(event) => {
        event.preventDefault()
      }}
    >
      {/* ver 0.0.2! something is coming... <br />
      <button
        onClick={() => {
          // dispatch(setBackgroundColor('#ffaaff'))
          dispatch(playSound(SoundMap.explosion))
        }}
      >
        boot os
      </button> */}
      {icons.map((i, index) => (
        <Icon
          id={i.id}
          x={i.x}
          y={i.y}
          defaultX={200 + index * 126}
          defaultY={200}
          image={i.imageURL}
          alias={i.alias}
        />
      ))}
    </div>
  )
}
