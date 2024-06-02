interface Props {
  onClick: () => void;
}

const Down = ({ onClick }: Props) => {
  return (
    <button className="btn btn-secondary" type="submit" onClick={onClick}>
      Down
    </button>
  );
};

export default Down;
