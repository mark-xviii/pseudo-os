import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import ToolbarCategory from '../../classes/toolbar/toolbar-catregory.class'

export const defaultToolbarAtDesktop: ToolbarCategory[] = [
  {
    id: 'poosay2',
    name: 'poosaye',
    actions: [{ name: '1' }, { name: '2' }],
  },
  {
    id: 'poosay3',
    name: 'poosaye2',
    actions: [{ name: '1' }, { name: '2' }],
  },
  {
    id: 'poosay4',
    name: 'poosaye3',
    actions: [{ name: '1' }, { name: '2' }],
  },
]

const initialState: { menus: ToolbarCategory[] } = {
  menus: defaultToolbarAtDesktop,
}

export const toolbarSlice = createSlice({
  name: 'toolbar',
  initialState,
  reducers: {
    setToolbarMenus: (
      state,
      payload: PayloadAction<ToolbarCategory[] | null>
    ) => {
      if (payload.payload !== null) {
        state.menus = payload.payload
      } else {
        state.menus = defaultToolbarAtDesktop
      }
    },
    setToolbarCategoryActive: (
      state,
      payload: PayloadAction<{ id: string } | null>
    ) => {
      const index = state.menus.findIndex((ct) => ct.id === payload.payload?.id)
      if (index != -1) {
        state.menus[index].isActive = true
        state.menus = state.menus.map((e, i) =>
          i !== index ? { ...e, isActive: false } : { ...e, isActive: true }
        )
      }
    },
  },
})

export const { setToolbarMenus, setToolbarCategoryActive } =
  toolbarSlice.actions

export default toolbarSlice.reducer
