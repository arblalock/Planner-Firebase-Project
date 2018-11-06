const initState = {
  projects: [
    { id: '1', title: 'help me find peach', content: 'blah blah blah' },
    { id: '2', title: 'collect at the stars', content: 'blah blah blah' },
    { id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah' },
  ]
}

//reducers handle how the overall state gets changed after we succesfully (or unsuccessfully) make an async call to the firebase database
//the async database request for project creation is handled first by projectActions jsx, then a dispatch is made and the reducer below handles the state change
//this component gets added to the rootReducer, which creates an entry in the store for these projects under "project: projects{}"
export default function projectReducer(state = initState, action) {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log('Created project', action.project)
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error')
      return state;
    default:
      return state
  }
}