import { useFormik } from 'formik';
import * as yup from 'yup';
import { Input } from '../../common/Input';
import { useState } from 'react';
import { IoEyeOutline } from 'react-icons/io5';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const validationSchema = yup.object({
  email: yup.string().required('لطفا ایمیل خود را وارد کنید.'),
  password: yup.string().required('رمز عبور خود را وارد کنید.')
});

interface IAuthenticationProps {}

export const Login: React.FC<IAuthenticationProps> = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Form submitted:', values);
    }
  });
  const [visible, setVisible] = useState(false);
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className=" bg-[#f3f8fa] min-h-screen flex items-center justify-center ">
        <div className="bg-gray-50 max-w-md w-[25.625rem]  p-[2.50005rem] shadow-md rounded m-4">
          <div>
            <h6 className="mt-6 mb text-center text-3xl font-extrabold text-gray-900">
              ورود
            </h6>
          </div>
          <div className="mt-6 space-y-6">
            <div className="flex flex-col gap-xs">
              <div className="w-full min-w-[200px] h-10">
                <Input
                  type="email"
                  name="email"
                  placeholder="ایمیل"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.email}
                  </div>
                )}
              </div>
              <div className="relative w-full min-w-[200px] h-10 mt-5">
                <Input
                  name="password"
                  type={visible ? 'text' : 'password'}
                  placeholder="رمز عبور"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                <div
                  className="absolute inset-y-0 left-3 flex items-center pr-3 cursor-pointer"
                  onClick={() => setVisible(!visible)}
                >
                  {visible ? <IoEyeOutline /> : <AiOutlineEyeInvisible />}
                </div>
                {formik.errors.password && formik.touched.password && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.password}
                  </div>
                )}
              </div>
            </div>
          </div>
          <Link
            to={'/Reset'}
            className="flex justify-start text-xs mt-8 cursor-pointer text-[#03a9f4]"
          >
            رمز عبور را فراموش کرده‌ای؟
          </Link>
          <div>
            <button className="btn bg-[#03a9f4] mt-6 w-full" type="submit">
              ورود
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
