import React, { Component } from 'react';
import User from '../User/User';

export default class Users extends Component {
  render() {
    if (this.props.users.length > 0)
      return (
        <main>
          {this.props.users.map((el) => (
            <User
              onEdit={this.props.onEdit}
              onDelete={this.props.onDelete}
              key={el.id}
              user={el}
            />
          ))}
        </main>
      );
    else
      return (
        <div className="user">
          <h3>Пользователей нет</h3>
        </div>
      );
  }
}
