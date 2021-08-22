import AuthService from '../service/auth.service';
import { PersistentStore } from '.';

// const user = JSON.parse(localStorage.getItem('user'));
// const initialState = user ? {
//   status: {
//     loggedIn: true
//   },
//   user
// } : {
//   status: {
//     loggedIn: false
//   },
//   user: null
// };

class Auth extends PersistentStore {
  namespaced = true;
//  state = initialState;
  data() {
    return {
//      user: null
    }
  }
  isLoggedIn() {
    return this.state.status.loggedIn;
  }
  userID() {
    return this.state.user.id;
  }
  getUserName() {
    return this.state.user.first + ' ' + this.state.user.last;
  }
  login(user) {
    return AuthService.login(user).then(
      user => {
        this.state.status.loggedIn = true;
        this.state.user = user;
      },
      error => {
        this.state.status.loggedIn = false;
        this.state.user = null;
        this.state.error = error;
      }
    );
  }
  logout() {
    AuthService.logout();
      this.state.status.loggedIn = false;
      this.state.user = null;
  }
  register(user) {
    return AuthService.register(user).then(
      response => {
         this.state.status.loggedIn = false;
        return Promise.resolve(response.data);
      },
      error => {
         this.state.status.loggedIn = false;
        return Promise.reject(error);
      }
    );
  }
}

export const auth = new Auth('user');