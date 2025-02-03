import { getAuth, signInWithPopup, GoogleAuthProvider ,signOut ,onAuthStateChanged  } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export function login(){
   provider.setCustomParameters({ prompt: 'select_account' });
   signInWithPopup(auth, provider).catch(console.error);
}


export function logout() {
  signOut(auth).catch(console.error);;
}

export async function onUserStateChange(callback) {
  onAuthStateChanged(auth, (user) => {
    //1. 사용자가 있는 경우에 (로그인한 경우)
    //2. 사용자가 어드빈 권한을 가지고 있는 지 확인!
    //3. {...user, isAdmin: true/false}
    callback(user);
  });
}

const dbRef = ref(getDatabase());
export async function getAdmin(user,callback) {
  get(child(dbRef, `admins`)).then((snapshot) => {
    if(!user) return callback(false);
    let adminid = snapshot.val();
    if( adminid.indexOf(user.uid) >= 0) callback(true);
    else  callback(false);
  }).catch(console.error);
}

