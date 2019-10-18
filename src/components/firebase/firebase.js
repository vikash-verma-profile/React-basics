import app from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyA0pm7Gemb7ksQ12OZZ1Dysm_QC-xNVBoI",
    authDomain: "sample-project-f191f.firebaseapp.com",
    databaseURL: "https://sample-project-f191f.firebaseio.com",
    projectId: "sample-project-f191f",
    storageBucket: "sample-project-f191f.appspot.com",
    messagingSenderId: "838688558926",
    appId: "1:838688558926:web:dba2a7c1752c30fa"
  };
  
  class Firebase {
    constructor() {
      app.initializeApp(config);
      this.auth=app.auth();
    }
  }
  
  export default Firebase;