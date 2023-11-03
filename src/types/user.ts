export type UserSession = {
  id: string;
  name: string | null;
  phone_number: string;
  email: string | null;
  avatar: string | null;
  birthday: string | null;
  sex: string | null;
  address_id: string | null;
  auth_token: string;
  is_phone_verified: number;
};
