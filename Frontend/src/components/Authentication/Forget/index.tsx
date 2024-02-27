import { useFormik } from 'formik';
import { Input } from '../../common/Input';
import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup.string().required('لطفا ایمیل خود را وارد کنید.')
});

interface IForgetProps {}
export const Forget: React.FC<IForgetProps> = (): JSX.Element => {
  const formik = useFormik({
    initialValues: {
      email: ''
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
            <h6 className="mt-4 mb-[2.5rem] text-center text-2xl font-extrabold text-gray-900">
              فراموشی رمز عبور
            </h6>
          </div>
          <div className="mt-6 space-y-6">
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
          </div>
          <div>
            <button
              className="btn bg-[#03a9f4] text-[#fefefe] mt-6 w-full"
              type="submit"
            >
              درخواست بازیابی رمز عبور
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
