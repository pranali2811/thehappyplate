import * as api from '../api/index'

export * from './services'
export * from './auth'
export * from './requests'
export * from './collaborations'

export const createRef = (collection, docId) => api.createRef(collection, docId)
  
  
  
