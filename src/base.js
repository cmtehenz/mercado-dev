import Rebase from 're-base'
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAov_Jv6W_KFTFkwVaDY95KZHyi2EG5m78",
    authDomain: "henz-mercadodev.firebaseapp.com",
    databaseURL: "https://henz-mercadodev.firebaseio.com",
    projectId: "henz-mercadodev",
    storageBucket: "gs://henz-mercadodev.appspot.com",
    messagingSenderId: "847329967572"
}

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export const storage = app.storage()

export default base
