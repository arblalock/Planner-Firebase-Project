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
    case 'SIGNUP_SUCCESS':
      console.log('signup success')
      return {
        ...state,
        authError: null
      }
    case 'SIGNUP_ERROR':
      return {
        ...state,
        authError: action.err.message
      }
    case 'SIGNOUT_SUCCESS':
      console.log('signout success')
      return state
    default:
      return state
  }
}