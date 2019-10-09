import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import  { logout } from '../actions'
import '../NavBar.css';



function NavBar (props){
    console.log("Navbar props", props)
    console.log('props.logout', props.logout);
    
    return (
        <div className="NavBar">

             <div>
            {props.loggedIn ? (
                <Link to="/" onClick={props.logout}>Log Out</Link>
            ) : 
             (
                <Link to="/login">Log In</Link>
            )}
            </div>

           <div>
               {props.loggedIn ? (
               <Link to="/protected">Protected Page</Link>
               ):
               ( <Link to="/"></Link>
               )}
          </div>
          {props.loggedIn ? (
              <Link to="/addfriend">Add Friends</Link>
        
               ):
               ( <Link to="/"></Link>
               )}
          </div>
                
    );
};

const mapStateToProps = state => ({
    loggedIn: state.loggedIn
})

export default withRouter(connect(mapStateToProps, {logout} )(NavBar));
