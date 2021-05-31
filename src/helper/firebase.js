import admin from "firebase-admin";

import { firebaseConfig } from "../../config/firebase.js";

admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig),
});

export const firestore = admin.firestore();
