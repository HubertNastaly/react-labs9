import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'

class PageLogin extends React.Component{
  constructor(props)
  {
    super(props);
  }
  render(){
    return(
      <div>
        <label>Login: <input type="text"></input></label>
      </div>
    );
  }
}

export default PageLogin