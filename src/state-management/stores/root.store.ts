import { configureStore } from '@reduxjs/toolkit'
import desktopSlice from '../slices/desktop.slice'
import SFXSlice from '../slices/sfx.slice'
import iconsSlice from '../slices/icons.slice'

export const store = configureStore({
  reducer: {
    sfx: SFXSlice,
    desktop: desktopSlice,
    icons: iconsSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
