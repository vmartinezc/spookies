import { getApps, initializeApp } from 'firebase/app';
import { doc, getDoc, getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
};

const missingKeys = Object.entries(firebaseConfig)
  .filter(([, value]) => !value)
  .map(([key]) => key);

if (missingKeys.length > 0) {
  throw new Error(
    `Missing Firebase env vars: ${missingKeys.join(', ')}. Check your .env file.`
  );
}

const app = initializeApp(firebaseConfig);

export const verifyFirebaseInit = () => {
  const apps = getApps();

  if (apps.length === 0) {
    console.error('Firebase initialization check failed: no apps found.');
    return false;
  }

  const initializedApp = apps[0];
  console.log(
    `Firebase initialized: ${initializedApp.name} (${initializedApp.options.projectId})`
  );
  return true;
};

export const verifyFirebaseConnectivity = async () => {
  try {
    const db = getFirestore(app);
    await getDoc(doc(db, 'healthcheck', 'ping'));
    console.log('Firestore connectivity check succeeded.');
    return true;
  } catch (error) {
    const errorCode = error?.code;

    if (errorCode === 'permission-denied' || errorCode === 'not-found') {
      console.log(
        `Firestore reachable (received expected response: ${errorCode}).`
      );
      return true;
    }

    console.error(
      `Firestore connectivity check failed${
        errorCode ? ` (${errorCode})` : ''
      }.`,
      error
    );
    return false;
  }
};

export default app;
