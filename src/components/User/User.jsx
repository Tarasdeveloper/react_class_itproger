import React, { Component } from 'react';
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5';
import AddUser from '../AddUser/AddUser';

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editForm: false,
    };
  }

  user = this.props.user;

  render() {
    return (
      <div className="user">
        <IoCloseCircleSharp
          className="delete-icon"
          onClick={() => this.props.onDelete(this.user.id)}
        />
        <IoHammerSharp
          className="edit-icon"
          onClick={() => {
            this.setState({ editForm: !this.state.editForm });
          }}
        />
        <h3>
          {this.user.first_name} {this.user.last_name}
        </h3>
        <p>{this.user.email}</p>
        <img src={this.user.avatar} alt={this.user.firs_tname} />
        {/* <b>{this.user.isHappy ? 'Счастлив :)' : 'Не особо :('}</b> */}
        {this.state.editForm && (
          <AddUser user={this.user} onAdd={this.props.onEdit} />
        )}
      </div>
    );
  }
}
