import { GetPrinter3dInput, GetFavorInput } from '../generated/graphql'

export const printer3dProperties: GetPrinter3dInput = {
  minPrice: 0,
  maxPrice: 0,
  minRating: 0,
  manufacturer: '',
  minX: 0,
  maxX: 0,
  minY: 0,
  maxY: 0,
  minZ: 0,
  maxZ: 0,
  autoLeveling: false,
  resumePrinting: false,
  removeableBuildSurface: false,
  material: '',
  minWeight: 0,
  maxWeight: 0,
  minVoltage: 0,
  maxVoltage: 0,
  minWattage: 0,
  maxWattage: 0,
  compatibleMaterial: '',
  pageSize: 0,
  pageNumber: 0,
}

export const favorsProperties: GetFavorInput = {
  minPrice: 0,
  maxPrice: 0,
  status: '',
  public: false,
  foodTask: false,
  groceryTask: false,
  laundryTask: false,
  pageSize: 0,
  pageNumber: 0,
}

export const defaultItemPageSize = 10
export const defaultItemPageNumber = 1

export const colorPalette = {
  charcoal: '#264653',
  green: '#2A9D8F',
  yellow: '#E9C46A',
  orange: '#F4A261',
  redOrange: '#E76F51',
}
