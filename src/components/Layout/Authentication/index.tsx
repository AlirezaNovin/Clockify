import { HeadersButton } from '../../Authentication/HeadersButton';

interface IAuthLayoutProps extends React.PropsWithChildren {
  page: 'login' | 'register' | 'forgetpassword';
}
export const AuthLayout: React.FC<IAuthLayoutProps> = ({
  page,
  children
}): JSX.Element => {
  return (
    <div className="bg-[#f3f8fa] flex flex-col items-center">
      <header className="w-full max-w-[1100px] fixed top-[30px] flex flex-row justify-between items-center">
        <div>
          <h1 className="font-bold text-3xl text-[#03a9f4]">Clockify</h1>
        </div>
        <div className=" text-base">
          {page === 'login' ? (
            <HeadersButton text="حساب کاربری ندارید؟" content="ثبت نام" />
          ) : (
            <HeadersButton text="" content="ورود" />
          )}
        </div>
      </header>
      <main className=" flex justify-center items-center">{children}</main>
    </div>
  );
};
