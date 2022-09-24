import db from '../db/index'

import 'firebase/auth'


// export const createUserRef = (uid) => db.doc('profiles/' + uid)
export const createRef = (collection, docId) => db.doc(`${collection}/` + docId)

export * from './services'
export * from './auth'
export * from './requests'
export * from './collaborations'

    