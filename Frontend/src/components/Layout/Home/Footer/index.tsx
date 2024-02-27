interface IFooterProps {}

export const Footer: React.FC<IFooterProps> = (): JSX.Element => {
  return (
    <div className="footer footer-center  w-full p-4 bg-gray-300 text-gray-800">
      <div className="text-center">
        <p>Copyright © 2024 -</p>
      </div>
    </div>
  );
};
