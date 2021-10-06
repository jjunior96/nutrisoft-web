import { Dispatch, SetStateAction } from 'react';

export interface AuthProps {
  user: string;
  password: string;
}

export interface IAuthContext {
  isLoading: boolean;
  user: string | undefined;
  isLogged: boolean;
  error: string | null;
  sucessoLogout: boolean;
  setError: Dispatch<SetStateAction<string | null>>;
  signOut: () => void;
  signIn(data: AuthProps): Promise<void>;
}

export type AuthProviderProps = {
  children: React.ReactNode;
};
