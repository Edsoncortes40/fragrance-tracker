import * as functions from "firebase-functions";
import * as logger from "firebase-functions/logger";
import {initializeApp} from "firebase-admin/app";
import {FieldValue, Firestore} from "firebase-admin/firestore";
import {onCall} from "firebase-functions/v2/https";

initializeApp();

const firestore = new Firestore();
const fragCollectionId = "fragrances";
const userCollectionId = "users";

export const createUser = functions.auth.user().onCreate((user) => {
  const userInfo = {
    uid: user.uid,
    email: user.email,
    photoUrl: user.photoURL,
    admin: 0,
  };

  firestore.collection(userCollectionId).doc(user.uid).set(userInfo);
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

export const getUser = onCall({maxInstances: 1}, async (req) => {
  const userId = req.data.userId;
  const snapshot = await firestore.collection(userCollectionId)
    .doc(userId).get();
  return snapshot.data();
});

export const createFrag = onCall({maxInstances: 1}, async (req) => {
  const fragInfo = {
    Brand: req.data.brand,
    Description: req.data.description,
    Gender: req.data.gender,
    ImageUrl: req.data.imageUrl,
    Name: req.data.name,
  };

  firestore.collection(fragCollectionId).doc(req.data.name).set(fragInfo);
  logger.info("Fragrance was added: " + JSON.stringify(fragInfo));
  return;
});

export const createReview = onCall({maxInstances: 1}, async (req) => {
  const reviewInfo = {
    ImageUrl: req.data.userImage,
    Rating: req.data.rating,
    Review: req.data.review,
    UserName: req.data.userName,
  };

  const fragDoc = firestore.collection(fragCollectionId)
    .doc(req.data.fragrance);

  fragDoc.update({
    Reviews: FieldValue.arrayUnion(reviewInfo),
  });

  logger.info("Fragrance was added: " + JSON.stringify(reviewInfo));
  return;
});
