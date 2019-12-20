import React from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { saveUser } from '../redux/actions'

class PageLogin extends React.Component{
  constructor(props){
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.usernameChanged = this.usernameChanged.bind(this);

    this.state = {
      username: null
    }
  }

  onSubmit(e)
  {
    e.preventDefault();
    e.persist();
    const username = this.state.username;
    let userFound;
    fetch('http://localhost:3004/users')
      .then((data) => data.json())
      .then(
          (users) => { 
            userFound = users.find((user) => user.username == username );
            if(userFound)
            {
              this.props.saveUser(userFound);
              this.props.history.push("/list");
            }
          }
      )
  }

  usernameChanged(e)
  {
    this.setState({username: e.target.value});
  }

  render(){
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Username: <input type="text" onChange={this.usernameChanged}></input></label>
          <input type="submit" value="Login"></input>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => ({
  saveUser: user => dispatch(saveUser(user))
})

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(PageLogin)