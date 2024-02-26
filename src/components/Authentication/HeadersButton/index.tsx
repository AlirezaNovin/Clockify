import { Link } from 'react-router-dom';

interface IHeadersButtonProps {
  text: string;
  content: string;
}

export const HeadersButton: React.FC<IHeadersButtonProps> = ({
  text,
  content
}): JSX.Element => {
  return (
    <div className="flex justify-end items-center gap-[7px]">
      <span className="cl-text-gray-9 cl-mr-md-1 cl-d-block cl-d-md-inline">
        {text}
      </span>
      <Link to={content === 'ورود' ? '/Login' : '/Register'}>
        <button className="cursor-pointer text-[#03a9f4] no-underline bg-transparent box-border">
          {content}
        </button>
      </Link>
    </div>
  );
};
