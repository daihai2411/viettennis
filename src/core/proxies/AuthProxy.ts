import ProxyBase from "./ProxyBase";

class AuthProxy extends ProxyBase {
  login(params: { username: string; password: string }) {
    return this.post("login", params);
  }

  register(params: {
    phone_number: string;
    password: string;
    password_confirmation: string;
  }) {
    return this.post("register", params);
  }

  generateOtp(params: { phone_number: string }) {
    return this.post("generateOtp", params);
  }

  verifyOtp(params: { phone_number: string; otp: string }) {
    return this.post("verifyOtp", params);
  }
}

const authProxy = new AuthProxy();
export default authProxy;
