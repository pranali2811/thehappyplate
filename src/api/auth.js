import db from '../db/index'
import firebase from 'firebase'
import 'firebase/auth'

const createUserProfile = (userProfile) => 
    db.collection('profiles')
      .doc(userProfile.uid)
      .set(userProfile)

    export const register =  async({email, fullName,phone, password}) => {
      try{
         const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
         const { user } = res

         const userProfile = { uid: user.uid, fullName, email, phone, services: [], address: ''}
         await createUserProfile(userProfile)
         return userProfile
      } catch(error){
        return Promise.reject(error.message)
      }
    }

    export const login = ({email, password}) => 
      firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(error => Promise.reject(error.message))

    export const logout = () => firebase.auth().signOut();

    export const onAuthStateChanged = onAuthCallback => 
    firebase.auth().onAuthStateChanged(onAuthCallback)
      
      
    export const getUserProfile = uid =>
      db.collection('profiles')
        .doc(uid)
        .get()
        .then(snapshot => ({uid, ...snapshot.data()}))

        

    
    
    