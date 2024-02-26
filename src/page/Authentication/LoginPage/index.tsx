import { Login } from '../../../components/Authentication/Login';
import { AuthLayout } from '../../../components/Layout/Authentication';

interface ILoginPageProps {}
export const LoginPage: React.FC<ILoginPageProps> = (): JSX.Element => {
  return (
    <>
      <AuthLayout page="login">
        <Login />
      </AuthLayout>
    </>
  );
};
