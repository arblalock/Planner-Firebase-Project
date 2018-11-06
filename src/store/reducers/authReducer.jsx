const initState = {
  authError: null
}

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case 'LOGIN_ERROR':
      console.log('login error')
      return {
        ...state,
        authError: 'Login failed'
      }
    case 'LOGIN_SUCCESS':
      console.log('Login success')
      return {
        ...state,
        authError: null
      }
    default:
      return state
  }
}