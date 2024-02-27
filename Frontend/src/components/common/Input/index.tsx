interface IInputProps {
  type: string;
  name: string;
  placeholder: string;
  onChange: (e: any) => void;
  value: any;
}
export const Input: React.FC<IInputProps> = ({
  type,
  name,
  placeholder,
  onChange,
  value
}): JSX.Element => {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
        onChange={onChange}
        value={value}
      />
    </>
  );
};
