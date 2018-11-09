import React from 'react'
//import {Link} from 'react-router-dom'
import NavLink from 'react-router-dom/NavLink';
import { signOut } from '../../store/actions/authActions'
import { connect } from 'react-redux'

const SignedInLinks = (props) => {

  return (
    <ul className="right">
      <li><NavLink to="/create">New Project</NavLink></li>
      {/* eslint-disable-next-line */}
      <li><a onClick={props.signOut}>Log Out</a></li>
      <li><NavLink to="/" className="btn btn-floating pink lighten-1">{props.profile.initials}</NavLink></li>

    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)