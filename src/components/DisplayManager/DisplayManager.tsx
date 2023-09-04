import Desktop from '../Desktop/Desktop'
import TopToolbar from '../TopToolbar/TopToolbar'
import '../../styles/display-manager.sass'

export default function DisplayManager() {
  return (
    <div className="display-manager">
      <TopToolbar />
      <Desktop />
    </div>
  )
}
