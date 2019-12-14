import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { employeesLoaded, listLoadedFirstTime } from '../redux/actions'

const EmployeeLine = ({ employee }) => <div>{employee.name} ({employee.age} yrs old): {employee.company}</div>

class PageEmployeesList extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      isLoading: false,
    }
  }

  componentDidMount() {
    if(!this.props.firstLoading)
      return;
    console.log('FirstLoading');
    this.setState({ isLoading: true });
    this.props.listLoadedFirstTime();
    fetch('http://localhost:3004/employees')
    .then((data) => data.json())
    // Without Redux
    // .then((employees) => this.setState({ employees, isLoading: false }));
    // With Redux
    .then((employees) => {
      this.props.employeesLoaded(employees);
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { isLoading } = this.state;
    const { employees } = this.props;

    if(isLoading) {
      return <p>Loading ...</p>
    }
    
    return (
      <div>
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
    firstLoading: state.firstLoading
  }
}

const mapDispatchToProps = (dispatch) => ({
  employeesLoaded: employees => dispatch(employeesLoaded(employees)),
  listLoadedFirstTime: () => dispatch(listLoadedFirstTime())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageEmployeesList)