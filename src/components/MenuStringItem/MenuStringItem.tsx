import { useDispatch, useSelector } from 'react-redux'
import {
  setToolbarCategoryActive,
  setToolbarMenus,
} from '../../state-management/slices/toolbar.slice'
import { RootState } from '../../state-management/stores/root.store'

export interface NameActionPairInterface {
  name: string
  action: Function
}

export interface MenuStringItemInterface {
  id: string
  actions?: NameActionPairInterface[]
  name: string
  isActive?: boolean
}

export default function MenuStringItem({
  id,
  actions,
  name,
  isActive,
}: MenuStringItemInterface) {
  const dispatch = useDispatch()

  return (
    <div
      className={
        `menu-string-item` + ` ${isActive ? 'menu-string-item-active' : ''}`
      }
      onClick={() => {
        dispatch(setToolbarMenus([{ id: '124', name: '124155' }]))
        // dispatch(setToolbarCategoryActive({ id: id }))
      }}
    >
      {name}
      <div className="menu-string-dropdown">
        {/* {actions.map((a) => (
          <div
            className="menu-string-dropdown-element"
            onClick={() => {
              a.action()
            }}
          >
            {a.name}
          </div>
        ))} */}
      </div>
    </div>
  )
}
