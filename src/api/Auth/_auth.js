import { ref, firebaseAuth } from './_constants';

export function auth(email, pw, firstname, lastname) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then((user)=>{saveUser(user, firstname, lastname)});
  //  .catch(error => console.log('Oops', error));
}


export function logout() {
  return firebaseAuth().signOut();
}

export function login(email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw);
}


export function saveUser(user, firstname, lastname) {
  return ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      firstname: firstname,
      lastname: lastname
    })
    .then(() => user);
}
