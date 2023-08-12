import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Icon from '../../classes/icon.class'
import iconsMock from '../../mocks/icons/icons.mock'

const initialState: Icon[] = iconsMock

export const iconsSlice = createSlice({
  name: 'icons',
  initialState,
  reducers: {
    setPosition: (
      state,
      payload: PayloadAction<{ id: string; x: number; y: number }>
    ) => {
      const icon = state.find((i) => i.id === payload.payload.id)

      // @ts-ignore
      icon.x = payload.payload.x
      // @ts-ignore
      icon.y = payload.payload.y
    },
  },
})

export const { setPosition } = iconsSlice.actions

export default iconsSlice.reducer
