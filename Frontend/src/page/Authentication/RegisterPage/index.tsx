import { Register } from '../../../components/Authentication/Register';
import { AuthLayout } from '../../../components/Layout/Authentication';

interface IRegisterPageProps {}

export const RegisterPage: React.FC<IRegisterPageProps> = (): JSX.Element => {
  return (
    <>
      <AuthLayout page="register">
        <Register />
      </AuthLayout>
    </>
  );
};
