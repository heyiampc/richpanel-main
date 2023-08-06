import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA9dPU4xF95XJPO6ftqNHneJ8WJ-Ka0dF8",
  authDomain: "richpanel-53342.firebaseapp.com",
  projectId: "richpanel-53342",
  storageBucket: "richpanel-53342.appspot.com",
  messagingSenderId: "393470465461",
  appId: "1:393470465461:web:de5c4f43bf0169ce9cf5fc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
