interface Props {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <div>
      <button type="button" className="" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
