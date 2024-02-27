interface IHeaderProps {}

export const Header: React.FC<IHeaderProps> = (): JSX.Element => {
  return (
    <div className="w-full max-w-[1300px] fixed top-[10px] flex flex-row justify-between items-center">
      <div>
        <h1 className="font-bold text-3xl text-[#03a9f4] mr-8">Clockify</h1>
      </div>
      <div className="text-base">
        <button className="cursor-pointer text-[#03A9F4] border border-solid border-[#03A9F4] font-[0.8125rem] ml-6 px-4 py-2 ">
          ورود
        </button>
      </div>
    </div>
  );
};
