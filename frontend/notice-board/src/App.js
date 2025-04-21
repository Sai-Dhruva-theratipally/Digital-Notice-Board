import './App.css';
import React from 'react';
import Header from './components/Header';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import StaffDashboard from './components/StaffDashboard';
import StudentDashboard from './components/StudentDashboard';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false, id: '', role: '' };
  }

  componentDidMount() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const id = localStorage.getItem('id');
    const role = localStorage.getItem('role');

    if (isLoggedIn && id && role) {
      this.setState({ isLoggedIn, id, role });
    }
  }

  isLogin = (id, role) => {
    this.setState({ isLoggedIn: true, role, id });
    localStorage.setItem('isLoggedIn', true);
    localStorage.setItem('id', id);
    localStorage.setItem('role', role);
    console.log(`${id} logged in as ${role}`);
  };

  logout = () => {
    this.setState({ isLoggedIn: false, id: '', role: '' });
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('id');
    localStorage.removeItem('role');
  };

  render() {
    return (
      <>
        <Header 
          isLoggedIn={this.state.isLoggedIn} 
          role={this.state.role} 
          id={this.state.id} 
          logout={this.logout} 
        />
        <br />
        <br />
        <br />
        {!this.state.isLoggedIn ? (
          <Login isLogin={this.isLogin} />
        ) : (
          this.state.role === 'staff' ? (
            <StaffDashboard id={this.state.id} />
          ) : (
            <StudentDashboard id={this.state.id} />
          )
        )}
      </>
    );
  }
}

export default App;
