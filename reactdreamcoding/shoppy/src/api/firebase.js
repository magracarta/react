import { getAuth, signInWithPopup, GoogleAuthProvider ,signOut ,onAuthStateChanged  } from "firebase/auth";
import { v4 as uuid } from 'uuid';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get , set ,remove } from "firebase/database";


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
  onAuthStateChanged(auth, async (user) => {
    //1. 사용자가 있는 경우에 (로그인한 경우)
    const updateUser =  user ? await adminUser(user): null;
    callback(updateUser);
  });
}

const database  = getDatabase(app);
const dbRef = ref(database);

async function adminUser(user){
    //2. 사용자가 어드빈 권한을 가지고 있는지 확인!
    //3. {...user, isAdmin: true/false}
    return get(child(dbRef, `admins`)).then((snapshot) => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return {...user,isAdmin}
      }
      return user;
    }).catch(console.error);
}


export async function addNewProduct(product, image){
  const id = uuid();
  return set(ref(database, `products/${id}`), {
    ...product,
    id,
    price: parseInt(product.price),
    image,
    options: product.options.split(',')
  });
}

export async function getProducts(){
  return get(child(dbRef, `products`)).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
  }).catch(console.error);
}


export async function getCart(userId){
  return get(ref(database,`carts/${userId}`))
  .then(snapshot=>{
    const items = snapshot.val() || {};
    return Object.values(items);
  })
}

export async function addOrUpdateToCart(userId, product){
  return set(ref(database, `carts/${userId}/${product.id}` ),product)
}

export async function removeFromCart(userId, productsId){
  return remove(ref(database,`carts/${userId}/${productsId}`));
}