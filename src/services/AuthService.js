import BaseService from './BaseService';

class AuthService extends BaseService {
  async login(credentials) {
    const {data} = await this.http.post('/login', credentials);
    return data;
  }

  async register(user) {
    const {data} = await this.http.post('/register', user);
    return data;
  }

  logout() {
    return this.http.post('/logout');
  }

  async getMyProfile() {
    const {data} = await this.http.get('/me');
    return data;
  }
}

const authService = new AuthService();
export default authService;