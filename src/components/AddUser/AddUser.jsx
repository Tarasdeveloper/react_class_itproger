import React, { Component } from 'react';

export default class AddUser extends Component {
  userAdd = {};
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      bio: '',
      age: null,
      // isHappy: false,
    };
  }

  render() {
    return (
      <form ref={(el) => (this.myForm = el)}>
        <input
          type="text"
          placeholder="Имя"
          onChange={(e) => this.setState({ first_name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Фамиия"
          onChange={(e) => this.setState({ last_name: e.target.value })}
        />
        <textarea
          type="text"
          placeholder="Биография"
          onChange={(e) => this.setState({ bio: e.target.value })}
        ></textarea>
        <input
          type="text"
          placeholder="Возраст"
          onChange={(e) => this.setState({ age: e.target.value })}
        />
        <label htmlFor="isHappy">Счастлив?</label>
        <input
          type="checkbox"
          id="isHappy"
          onChange={(e) => this.setState({ isHappy: e.target.checked })}
        />
        <button
          type="button"
          onClick={() => {
            this.myForm.reset();

            this.userAdd = {
              first_name: this.state.first_name,
              last_name: this.state.last_name,
              bio: this.state.bio,
              age: this.state.age,
              // isHappy: this.state.isHappy,
            };
            if (this.props.user) this.userAdd.id = this.props.user.id;
            this.props.onAdd(this.userAdd);
          }}
        >
          Добавить
        </button>
      </form>
    );
  }
}
