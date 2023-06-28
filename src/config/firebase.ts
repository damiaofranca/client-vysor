import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import "firebase/storage";

const firebaseConfig = {
	appId: process.env.REACT_APP_APP_ID,
	apiKey: process.env.REACT_APP_API_KEY,
	projectId: process.env.REACT_APP_PROJECT_ID,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

const app = initializeApp(firebaseConfig);

const dbFireStore = getFirestore(app);

const storageBucket = getStorage(app);

export { app, dbFireStore, storageBucket };
