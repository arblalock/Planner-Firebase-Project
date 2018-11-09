//sign in with promises

// export const signIn = (credentials) => {
//   return (dispatch, getState, { getFirebase }) => {
//     const firebase = getFirebase();
//     firebase.auth().signInWithEmailAndPassword(
//       credentials.email,
//       credentials.password
//     ).then(() => {
//       dispatch({ type: 'LOGIN_SUCCESS' })
//     }).catch((err) => {
//       dispatch({ type: 'LOGIN_ERROR', err })
//     })
//   }
// }

// export const signOut = () => {
//   return (dispatch, getState, { getFirebase }) => {
//     const firebase = getFirebase()
//     firebase.auth().signOut().then(() => {
//       console.log('success')
//       dispatch({ type: 'SIGNOUT_SUCCESS' })
//     })
//   }
// }

//sign in with async await
export const signIn = (credentials) => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      await firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      )
      dispatch({ type: 'LOGIN_SUCCESS' })
    }
    catch (err) {
      dispatch({ type: 'LOGIN_ERROR', err })
    }
  }
}

export const signOut = () => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    try {
      await firebase.auth().signOut()
      console.log('success')
      dispatch({ type: 'SIGNOUT_SUCCESS' })
    }
    catch (err) {
      console.log('error')
    }
  }
}

export const signUp = (newUser) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    try {
      const resp = await firebase.auth().createUserWithEmailAndPassword(
        newUser.email,
        newUser.password
      )
      await firestore.collection('users').doc(resp.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0]
      })
      dispatch({ type: 'SIGNUP_SUCCESS' })
    }
    catch (err) {
      dispatch({ type: 'SIGNUP_ERROR', err })
    }
  }
}