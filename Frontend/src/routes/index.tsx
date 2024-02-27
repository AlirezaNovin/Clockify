import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout/Home';
import { HomePage } from '../page/Home';
import { LoginPage } from '../page/Authentication/LoginPage';
import { RegisterPage } from '../page/Authentication/RegisterPage';
import { ForgetPage } from '../page/Authentication/ForgetPage';

interface IRouteProviderProps {}
export const RouteProvider: React.FC<IRouteProviderProps> = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Reset" element={<ForgetPage />} />
      </Routes>
    </BrowserRouter>
  );
};
