import * as functions from "firebase-functions";
import * as logger from "firebase-functions/logger";
import {initializeApp} from "firebase-admin/app";
import {Firestore} from "firebase-admin/firestore";
import {onCall} from "firebase-functions/v2/https";

initializeApp();

const firestore = new Firestore();
const fragCollectionId = "fragrances";

export const createUser = functions.auth.user().onCreate((user) => {
  const userInfo = {
    uid: user.uid,
    email: user.email,
    photoUrl: user.photoURL,
    admin: 0,
  };

  firestore.collection("users").doc(user.uid).set(userInfo);
  logger.info("User was created: " + JSON.stringify(userInfo));
  return;
});

export const getFrags = onCall({maxInstances: 1}, async () => {
  const snapshot = await firestore.collection(fragCollectionId)
    .limit(10).get();
  return snapshot.docs.map((doc) => doc.data());
});

export const getFrag = onCall({maxInstances: 1}, async (req) => {
  const docName = req.data.fragName;
  const snapshot = await firestore.collection(fragCollectionId)
    .doc(docName).get();
  return snapshot.data();
});
