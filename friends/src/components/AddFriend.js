import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import "../loging.css";

class AddFriend extends React.Component {
   state ={
       credentials: {
           name: '',
           age: '',
           email: '',

       }
   }

   handleChange = e => {

    this.setState({
        credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value
        }
      });
    } 
      login = e => {
        
        e.preventDefault();
        // axiosWithAuth ==> ?? an axios instance; .post() ==> ?? promise
        axiosWithAuth()
          .post('/friends', this.state.credentials)
          .then(res => {
            // localStorage.setItem('token', res.data.payload);
            // redirect to the apps main page?
            this.props.history.push('/protected');
          })
          .catch(err => console.log(err));
      };

    

   render() {
    return (
      <div className="form">
        <form onSubmit={this.login}>
        <label htmlFor="friendName" id="friendNameLabel">Name</label>
          <input
            type="text"
            name="name"
            value={this.state.credentials.name}
            onChange={this.handleChange}
          />
          <label htmlFor="loginEmail" id="loginEmailLabel">Age</label>
          <input
            type="text"
            name="age"
            value={this.state.credentials.age}
            onChange={this.handleChange}
          />
         <label htmlFor="loginPassword" id="loginPasswordLabel">Email</label>
          <input
            type="email"
            name="email"
            value={this.state.credentials.email}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
    
}

export default AddFriend;
