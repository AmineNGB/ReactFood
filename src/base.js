import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const apiKey = process.env.REACT_APP_FOOD_KEY

const firebaseApp = firebase.initializeApp({
  apiKey: apiKey,
  authDomain: "reactfood-a051c.firebaseapp.com",
  databaseURL: "https://reactfood-a051c.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base
