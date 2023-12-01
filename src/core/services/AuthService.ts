import authProxy from "../proxies/AuthProxy";
import ServiceBase from "./ServiceBase";

class AuthService extends ServiceBase {
  login(params: { username: string; password: string }) {
    return this.getData(() => authProxy.login(params), true);
  }

  register(params: {
    username: string;
    phone: string;
    email: string;
    password: string;
    password_confirmation: string;
  }) {
    return this.getData(() => authProxy.register(params));
  }

  generateOtp(params: { phone: string }) {
    return this.getData(() => authProxy.generateOtp(params));
  }

  verifyOtp(params: { phone: string; otp: string }) {
    return this.getData(() => authProxy.verifyOtp(params));
  }
}

const authService = new AuthService();
export default authService;
