import { Component } from 'react';
import Header from './Header/Header';
import Users from './Users/Users';
import AddUser from './AddUser/AddUser';
import axios from 'axios';

const baseUrl = 'https://reqres.in/api/users?page=1';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.editUser = this.editUser.bind(this);
  }

  componentDidMount() {
    axios
      .get(baseUrl)
      .then((res) => {
        this.setState({ users: res.data.data });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  addUser(user) {
    const id = this.state.users.length + 1;
    this.setState({ users: [...this.state.users, { id, ...user }] });
  }

  deleteUser(id) {
    this.setState({
      users: this.state.users.filter((user) => user.id !== id),
    });
  }

  editUser(user) {
    let allUsers = this.state.users;
    allUsers[user.id - 1] = user;

    this.setState({ users: [] }, () => {
      this.setState({ users: [...allUsers] });
    });
  }

  render() {
    return (
      <div>
        <Header title="Список пользователей" />
        <Users
          users={this.state.users}
          onEdit={this.editUser}
          onDelete={this.deleteUser}
        />
        <aside>
          <AddUser onAdd={this.addUser} />
        </aside>
      </div>
    );
  }
}

export default App;
