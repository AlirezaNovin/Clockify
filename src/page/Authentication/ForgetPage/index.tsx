import { Forget } from '../../../components/Authentication/Forget';
import { AuthLayout } from '../../../components/Layout/Authentication';

interface IForgetPageProps {}

export const ForgetPage: React.FC<IForgetPageProps> = (): JSX.Element => {
  return (
    <>
      <AuthLayout page="forgetpassword">
        <Forget />
      </AuthLayout>
    </>
  );
};
