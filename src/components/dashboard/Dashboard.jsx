import React, { Component } from 'react';
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'


class Dashboard extends Component {
  render() {

    //we access the projects object that we assigned to our internal properties in mapStateToProps
    const { projects, auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  //using 'compose' below we will connect the state of this component to the firebase database while at the same time adding new properties using mapStateToProps.  
  //this mapStateToProps function adds a reference onto this.props that will contain the projects from the database, which is connected to our state using 'compose' below
  console.log(state.firestore)
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

//below we directly connect/merge the firebase database (a collection named 'projects') to the state of this component. This allows us to always have access to
//the latest version of the datbase when projects are created/deleted
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc'] },
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] }
  ])
)(Dashboard);
