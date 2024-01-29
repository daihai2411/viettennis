import ProxyBase from "./ProxyBase";

class AuthProxy extends ProxyBase {
  login(params: { username: string; password: string }) {
    return this.post("login", params);
  }

  register(params: {
    username: string;
    phone: string;
    email: string;
    password: string;
    password_confirmation: string;
  }) {
    return this.post("register", params);
  }

  generateOtp(params: { phone: string; email: string }) {
    return this.post("generate-otp", params);
  }

  verifyOtp(params: { phone: string; otp: string; email: string }) {
    return this.post("verify-otp", params);
  }

  socialLogin(params: any) {
    return this.post("social-login", params, "", {}, true);
  }

  forgotPassword(params: any) {
    return this.post("forgot-password", params);
  }

  changePassword(params: any) {
    return this.post("auth/change-password", params);
  }
}

const authProxy = new AuthProxy();
export default authProxy;
