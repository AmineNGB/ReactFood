import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD4gZdkaekxXs2Q8FGg4mZyfFi4wH-yjvY",
  authDomain: "reactfood-a051c.firebaseapp.com",
  databaseURL: "https://reactfood-a051c.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base
