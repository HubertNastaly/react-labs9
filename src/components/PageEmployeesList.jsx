import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { employeesLoaded, listLoadedFirstTime, fetchEmployees } from '../redux/actions'

const EmployeeLine = ({ employee }) => <div>{employee.name} ({employee.age} yrs old): {employee.company}</div>

class PageEmployeesList extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if(!this.props.firstLoading)
      return;
    this.props.fetchEmployees();
  }

  render() {
    var userLabelStyle = {
      width: '100%',
      textAlign: 'right',
      margin: '0 10px 0 0'
    };

    const { employees, isListLoading } = this.props;

    if(isListLoading) {
      return <p>Loading ...</p>
    }
    
    return (
      <div>
        <h4 style={userLabelStyle}>{this.props.user.fullName}</h4>
        <h1>Employees List:</h1>
        {employees && employees.map((employee => <EmployeeLine key={employee._id} employee={employee} />))}
        <Link to="/new">
          <button>Create employee</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    employees: state.employees,
    firstLoading: state.firstLoading,
    isListLoading: state.isListLoading,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchEmployees: () => dispatch(fetchEmployees())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageEmployeesList)