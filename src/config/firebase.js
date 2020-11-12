import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

var config = {
    apiKey: "AIzaSyBYxs865gQfnOae6z5lD3ZO6wub_-A554s",
    authDomain: "fir-login-b587d.firebaseapp.com",
    databaseURL: "https://fir-login-b587d.firebaseio.com",
    projectId: "fir-login-b587d",
    storageBucket: "fir-login-b587d.appspot.com",
    messagingSenderId: "547285758246",
    appId: "1:547285758246:web:5ba3cfd9998dbc29fb91e7",
    measurementId: "G-MBHXQP4650"
  };

class Firebase{
  constructor(){
    app.initializeApp(config)
    this.auth = app.auth()
    this.db = app.firestore()
  }

  login(email, password){
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  logout(){
    return this.auth.signOut()
  }

  async signUp(name, email, password){
    await this.auth.createUserWithEmailAndPassword(email, password)
    return this.auth.currentUser.updateProfile({
      displayName: name
    })
  }

  isInitialized(){
    return new Promise(resolve =>{
      this.auth.onAuthStateChanged(resolve)
    })
  }

  getUsername(){
    console.log(this.auth.currentUser.displayName);
    return this.auth.currentUser && this.auth.currentUser.displayName
  }
}
  export default new Firebase();