import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import config from '../config'

const initialState: StoreMapState = {
  storeId: null,
  showInfo: false,
  selectedTiers: Array.from(config.tier.keys()),
  resetTimer: false,
}

export const storeMapSlice = createSlice({
  name: 'storeMap',
  initialState,
  reducers: {
    setStoreId: (state, action: PayloadAction<number | null>) => {
      state.storeId = action.payload
    },
    setShowInfo: (state, action: PayloadAction<boolean>) => {
      state.showInfo = action.payload
    },
    setSelectedTiers: (state, action: PayloadAction<number[]>) => {
      state.selectedTiers = action.payload
    },
    setResetTimer: (state, action: PayloadAction<boolean>) => {
      state.resetTimer = action.payload
    },
  },
})

export const { setStoreId, setShowInfo, setSelectedTiers, setResetTimer } = storeMapSlice.actions

export default storeMapSlice.reducer
