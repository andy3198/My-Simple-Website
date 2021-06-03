import { createApp } from "vue";
import firebase from "firebase";
import App from "./App.vue";
import router from "./router";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDcQcghyvLKgTVcAi49GuHonsASP6txshY",
    authDomain: "vue-app-977ae.firebaseapp.com",
    projectId: "vue-app-977ae",
    storageBucket: "vue-app-977ae.appspot.com",
    messagingSenderId: "424236683684",
    appId: "1:424236683684:web:3d60eb9536400e5ff53131"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App)
    .use(router)
    .mount("#app");
