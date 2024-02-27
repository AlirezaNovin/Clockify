import { useFormik } from 'formik';
import { Input } from '../../common/Input';
import * as yup from 'yup';

const validationSchema = yup.object({
  username: yup.string().required('لطفا نام کاربری خود را وارد کنید.'),
  email: yup.string().required('لطفا ایمیل خود را وارد کنید.'),
  password: yup.string().required('لطفا رمز عبور خود را وارد کنید.')
});

interface IRegisterProps {}
export const Register: React.FC<IRegisterProps> = (): JSX.Element => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Form submitted:', values);
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className=" bg-[#f3f8fa] min-h-screen flex items-center justify-center ">
        <div className="bg-gray-50 max-w-md w-[25.625rem] space-y-4 p-[2.50005rem] shadow-md rounded m-4">
          <div>
            <h6 className="mt-6  mb-[2.5rem] text-center text-3xl font-extrabold text-gray-900">
              ثبت نام
            </h6>
          </div>
          <div className="mt-6 space-y-6">
            <div className="w-full min-w-[200px] h-10">
              <Input
                type="text"
                name="username"
                placeholder="نام کاربری"
                onChange={formik.handleChange}
                value={formik.values.username}
              />
              {formik.errors.username && formik.touched.username && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.username}
                </div>
              )}
            </div>
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
            <div className="w-full min-w-[200px] h-10">
              <Input
                type="Password"
                name="Password"
                placeholder="نام کاربری"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.errors.password && formik.touched.password && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.password}
                </div>
              )}
            </div>
            <div className="mt-20 flex justify-start items-center gap-xs">
              <input
                type="checkbox"
                name="contract"
                id="contract"
                className="w-[15px] h-[15px] rounded-[4px] border border-[#999] cursor-pointer mt-4"
              />
              <label
                htmlFor="contract"
                className=" text-right cursor-pointer mr-2 mt-4"
              >
                قوانین و مقررات را می‌پذیرم.
              </label>
            </div>
          </div>
          <div>
            <button className="btn bg-[#03a9f4] mt-4 w-full" type="submit">
              ثبت نام
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
