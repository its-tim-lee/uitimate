import { initializeApp, getApps, getApp, type FirebaseOptions } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

type NODE_ENV = NonNullable<typeof process.env.NODE_ENV>;

const env = process.env.NODE_ENV as NODE_ENV;
const modeToConfig: Record<NODE_ENV, FirebaseOptions> = {
  production: {
    apiKey: "AIzaSyDWuRxjCHi4VafkD4tvHG1W-Y7bc61Rjik",
    authDomain: "uitimate-production.firebaseapp.com",
    projectId: "uitimate-production",
    storageBucket: "uitimate-production.firebasestorage.app",
    messagingSenderId: "63678526150",
    appId: "1:63678526150:web:ac6408408507b93ee2ddc7",
    measurementId: "G-NG3646V7SM"
  },
  staging: {},
  development: {},
};
let analytics: ReturnType<typeof getAnalytics> | undefined = undefined;

if (typeof window !== 'undefined') { // run only in the client side
  const app = getApps().length === 0 ? initializeApp(modeToConfig[env]) : getApp();
  analytics = getAnalytics(app);
}

export { analytics };