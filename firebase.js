import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAft3GasB9xtWOngixTtviyfpRRiLITv08",
  authDomain: "products-93737.firebaseapp.com",
  projectId: "products-93737",
  storageBucket: "products-93737.firebasestorage.app",
  messagingSenderId: "988121766945",
  appId: "1:988121766945:web:33512b119e1b1f30505760",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
