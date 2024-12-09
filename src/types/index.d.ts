type Store = {
  id: number
  name: string
  address: string
  area: string
  region: string
  latitude: number
  longitude: number
  waitingGroup: number
  open: boolean
  localTicketing: boolean
}

type StoreResponse = {
  data: Store[]
  timestamp: number
}

type StoreMapState = {
  storeId: number | null
  showInfo: boolean
  selectedTiers: number[]
  resetTimer: boolean
}

type StoreState = {
  storeMap: StoreMapState
}

type Config = {
  languages: Array<string>
  refetchDuration: number
  apiTimeout: number
  tier: number[]
  map: {
    defaultZoom: number
    markerZoom: number
    boundPadding: number
    language: string
  }
  momentTimezone: string
  disclaimer: {
    email: string
  }
}
