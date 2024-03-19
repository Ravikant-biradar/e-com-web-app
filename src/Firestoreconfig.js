import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBA4JgM7IU9sWa6VW-OeyxxC7Cy6-xnFj8",
  authDomain: "ravikantfirebase.firebaseapp.com",
  //    my database url which is very important
  databaseURL: "https://ravikantfirebase-default-rtdb.firebaseio.com",
  projectId: "ravikantfirebase",
  storageBucket: "ravikantfirebase.appspot.com",
  messagingSenderId: "310150699072",
  appId: "1:310150699072:web:a0b606482acf226bdba7a5",
  measurementId: "G-30C6G6NP1L",
};

export const app = initializeApp(firebaseConfig);
