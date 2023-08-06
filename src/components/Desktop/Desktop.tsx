import { useDispatch, useSelector } from 'react-redux'
import '../../styles/desktop.sass'
import { RootState } from '../../state-management/stores/root.store'
import { setBackgroundColor } from '../../state-management/slices/desktop.slice'
import { playSound } from '../../state-management/slices/sfx.slice'
import SoundMap from '../../maps/sound-map.map'

export default function Desktop() {
  const color = useSelector((state: RootState) => state.desktop.backgroundColor)

  const dispatch = useDispatch()

  return (
    <div className="desktop" style={{ background: color || '#000000' }}>
      ver 0.0.1! nothing much to do yet... <br />
      <button
        onClick={() => {
          dispatch(setBackgroundColor('#ffaaff'))
          dispatch(playSound(SoundMap.explosion))
        }}
      >
        boot os
      </button>
    </div>
  )
}
