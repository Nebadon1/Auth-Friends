import React from 'react'
import { connect } from 'react-redux'
import '../Friend.css'
// import { deleteFriend } from '../actions/friendsActions'


const redx = {
  border: '1px solid black',
  borderRadius: '5px',
  color: 'red',
  float: 'right'
}

const Friend = props => {
  console.log('Friend props', props);
  
  const { friend, deleteFriend } = props

  const clickHandler = () => {
    deleteFriend(friend.id)
  }

  return (
  
    <div  key={friend.id} className="friend-card">
      <p style={redx} className="close-button" onClick={clickHandler}>X</p>
      <p>Id: {friend.id}</p>
      <h2>Name: {friend.name}</h2>
      <h4>Age: {friend.age}</h4>
      <p>E-mail: {friend.email}</p>
    </div>

  )
}
const mapStateToProps = () => ({})
export default connect(mapStateToProps)(Friend)

//{ deleteFriend }