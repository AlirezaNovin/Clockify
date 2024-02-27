import { Link } from 'react-router-dom';

interface IHomePageProps {}

export const HomePage: React.FC<IHomePageProps> = (): JSX.Element => {
  return (
    <div className="flex items-center justify-bitween gap-20 pt-[130px]">
      <div>
        <h1 className=" pb-10 text-[40px] leading-1.2 font-normal text-[#3D4853]">
          محبوب ترین برنامه <span className="text-[#03a9f4]"> ردیابی زمان</span>{' '}
          برای کارمندان
        </h1>
        <p className="mr-auto ml-auto max-w-[650px] text-xl leading-1.2 text-[#5A6B7B]">
          ساعت کار، حضور و غیاب و استراحت را پیگیری کنید. به کارمندان اجازه دهید
          از تلفن یا رایانه لوحی مشترک وارد و خارج شوند. جدول زمانی برای حقوق و
          دستمزد صادر کنید و هزینه های نیروی کار را کنترل کنید.
        </p>
        <Link to={'/Login'}>
          <button className="btn bg-[#03a9f4] mt-12 mr-40 w-[345px] h-[55px] text-white">
            شروع ردیابی زمان - به صورت کاملا رایگان
          </button>
        </Link>
      </div>
      <div>
        <img
          src="/images/home.jpg"
          alt=""
          className=" w-[400px] h-[400px] mb-15 flex"
        />
      </div>
    </div>
  );
};
