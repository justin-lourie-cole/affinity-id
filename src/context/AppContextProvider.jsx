import { EmployeeContextProvider, IdContextProvider } from './Context'

import { combineComponents } from './CombineComponents'
const providers = [EmployeeContextProvider, IdContextProvider]
export const AppContextProvider = combineComponents(...providers)
