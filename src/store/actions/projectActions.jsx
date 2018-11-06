export const createProject = (project) => {

  //this is returned as an anonymous function because redux thunk works with functions
  //it accepts any middlewhere (like firebase) and these can be accessed by specifying func params (ie getFirestore )
  //after we add firebase to the overall store of the application, we then dispatch an action to update the database
  //projectReducer.jsx handles the action that this dispatches
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project,
      authorFirstName: 'Net',
      authorLastName: 'Ninja',
      authorId: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', project })
    }).catch((err) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err })
    })
  }
}
