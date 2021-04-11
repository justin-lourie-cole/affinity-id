import {
  EmployeeContextProvider,
  IdContextProvider,
  SearchContextProvider
} from './Context'

import { combineComponents } from './CombineComponents'
const providers = [
  EmployeeContextProvider,
  IdContextProvider,
  SearchContextProvider
]
export const AppContextProvider = combineComponents(...providers)
