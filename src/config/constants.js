import firebase from 'firebase';
// Required for side-effects
require('firebase/firestore');

const config = {
  apiKey: "AIzaSyBhyqFqNG7hINT5hqFbXiDlE4GT9bS2Ig8",
  authDomain: "ai-saas-3feea.firebaseapp.com",
  databaseURL: "https://ai-saas-3feea-default-rtdb.firebaseio.com",
  projectId: "ai-saas-3feea",
  storageBucket: "ai-saas-3feea.appspot.com",
  messagingSenderId: "342561513500",
  appId: "1:342561513500:web:a7263647e425f6cdd83fd9"
};

firebase.initializeApp(config);

export const storageKey = 'KEY_FOR_LOCAL_STORAGE';
export const db = firebase.firestore();
export const firebaseAuth = firebase.auth;
export const minTime = new Date();
minTime.setHours(7, 0, 0);
export const maxTime = new Date();
maxTime.setHours(20, 0, 0);
export const calendarInitialState = {
  events: [],
  equipments: [],
  people: [],
  modal: {
    id: null,
    title: null,
    desc: null,
    start: new Date(2018, 4, 4, 7, 0, 0),
    end: new Date(2018, 4, 4, 8, 0, 0),
  },
  modalOpen: false,
  equipmentsOpen: false,
  peopleOpen: false,

}
