import authProxy from "../proxies/AuthProxy";
import ServiceBase from "./ServiceBase";

class AuthService extends ServiceBase {
  login(params: { username: string; password: string }) {
    return this.getData(() => authProxy.login(params), true);
  }

  register(params: {
    phone_number: string;
    password: string;
    password_confirmation: string;
  }) {
    return this.getData(() => authProxy.register(params));
  }

  generateOtp(params: { phone_number: string }) {
    return this.getData(() => authProxy.generateOtp(params));
  }

  verifyOtp(params: { phone_number: string; otp: string }) {
    return this.getData(() => authProxy.verifyOtp(params));
  }
}

const authService = new AuthService();
export default authService;
