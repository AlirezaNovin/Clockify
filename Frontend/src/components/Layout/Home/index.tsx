import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

interface ILayoutProps {}
export const Layout: React.FC<ILayoutProps> = (): JSX.Element => {
  return (
    <div className="bg-[#f3f8fa] flex flex-col items-center">
      <Header />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
