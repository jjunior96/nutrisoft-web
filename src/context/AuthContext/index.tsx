import { createContext, useCallback, useContext, useState } from 'react';

import api from 'services/api';
import * as Yup from 'yup';

import { IAuthContext, AuthProviderProps, AuthProps } from './types';

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [sucessoLogout, setSucessoLogout] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState();

  const signOut = useCallback(async () => {
    try {
      setSucessoLogout(true);
    } catch (err) {
      setError('Error ao fazer logout');
      setSucessoLogout(false);
    }
  }, []);

  /**
   * POST
   * Realiza uma chamada POST à API para cadastrar uma nova Area
   */
  const signIn = useCallback(async (data: AuthProps) => {
    setError('');
    setIsLoading(true);

    const { user, password } = data;

    try {
      const schema = Yup.object().shape({
        user: Yup.string().required('Usuário obrigatório.'),
        password: Yup.string().required('Senha obrigatória.')
      });

      await schema.validate(data, {
        abortEarly: false
      });

      const response = await api.post(`/login_usuarios?nomedb`, {
        login: user,
        senha: password
      });

      if (response.data.token) {
        // Cookie.set('user-token-green-acesso', response.data.token, {
        //   expires: addDays(new Date(), 1)
        // });

        // Cookie.set('user-name-green-acesso', nomeUser.split(' ')[0], {
        //   expires: addDays(new Date(), 1)
        // });

        // Cookie.set('user-id-green-acesso', response.data.usuario.id_usuario, {
        //   expires: addDays(new Date(), 1)
        // });

        setUser(response.data.nome);

        setIsLoading(false);
      }
    } catch (err) {
      setIsLoading(false);

      setError('Usuário não encontrado');
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLogged,
        isLoading,
        error,
        sucessoLogout,
        setError,
        signOut,
        signIn
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

export const useLogin = () => useContext(AuthContext);
