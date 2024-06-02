interface Props {
  onClick: () => void;
}

const Up = ({ onClick }: Props) => {
  return (
    <button className="btn btn-primary" type="submit" onClick={onClick}>
      UP
    </button>
  );
};

export default Up;
