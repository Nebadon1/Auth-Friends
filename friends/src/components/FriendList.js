import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getFriendList } from '../actions/index'
import Friend from './Friend'

class FriendsList extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getFriendList()
  }

  render(){
    return (
      <div>
        { this.props.loading ? <h1>LOADING</h1> : null }

        { this.props.error !== '' ? <h1>{this.props.error}</h1> : null }

        { this.props.friends.map( friend => <Friend friend={friend} key={friend.id}/> ) } 
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    error: state.error,
    loading: state.loading
  }
}

export default connect(mapStateToProps, { getFriendList })(FriendsList)
