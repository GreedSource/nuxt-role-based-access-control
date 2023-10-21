export interface UserProps {
  id: string;
  name: string;
  email: string;
  audit: {
    createdAt: Date;
    updatedAt: Date;
  };
  avatar: {
    path: string;
  };
  accessToken: string;
  refreshToken: string;
}
