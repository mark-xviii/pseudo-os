import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Desktop from '../../types/desktop.type'

const initialState: Desktop = {} as Desktop

export const desktopSlice = createSlice({
  name: 'desktop',
  initialState,
  reducers: {
    setBackgroundColor: (state, payload: PayloadAction<string | null>) => {
      state.backgroundColor = payload.payload
    },
  },
})

export const { setBackgroundColor } = desktopSlice.actions

export default desktopSlice.reducer
