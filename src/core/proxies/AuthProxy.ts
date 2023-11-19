import ProxyBase from "./ProxyBase";

class AuthProxy extends ProxyBase {
  login(params: { username: string; password: string }) {
    return this.post("login", params);
  }

  register(params: {
    phone: string;
    password: string;
    password_confirmation: string;
  }) {
    return this.post("register", params);
  }

  generateOtp(params: { phone: string }) {
    return this.post("generate-otp", params);
  }

  verifyOtp(params: { phone: string; otp: string }) {
    return this.post("verify-otp", params);
  }
}

const authProxy = new AuthProxy();
export default authProxy;
