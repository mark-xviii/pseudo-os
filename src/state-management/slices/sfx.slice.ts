import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export const SFXSlice = createSlice({
  name: 'sfx',
  initialState: {},
  reducers: {
    playSound: (
      state,
      payload: PayloadAction<typeof import('*.ogg|*.mp3|*.wav')>
    ) => {
      new Audio(payload.payload.default).play()
    },
  },
})

export const { playSound } = SFXSlice.actions

export default SFXSlice.reducer
