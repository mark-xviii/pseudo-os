import { useSelector } from 'react-redux'
import '../../styles/top-toolbar.sass'
import { Utils } from '../../utils'
import MenuStringItem from '../MenuStringItem/MenuStringItem'
import { RootState } from '../../state-management/stores/root.store'

export default function TopToolbar() {
  const currentToolbar = useSelector((state: RootState) => state.toolbar)

  return (
    <div
      className="top-toolbar"
      style={{ height: Utils.Constants.Stylings.TopToolbar.height + 'px' }}
    >
      <div className="start-menu-button">🧠</div>
      <div className="menu-string">
        {currentToolbar.menus.map((cT) => (
          <MenuStringItem
            id={cT.id}
            name={cT.name}
            // actions={cT.actions}
            isActive={cT.isActive}
          />
        ))}
        <div className="menu-string-item">Settings</div>
        <div className="menu-string-item">About</div>
        <div className="menu-string-item">Help</div>
      </div>
      <div className="clock">15-21</div>
      <div className="current-app">🐇 Bunney</div>
    </div>
  )
}
