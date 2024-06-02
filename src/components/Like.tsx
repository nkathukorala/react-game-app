import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [state, setState] = useState(false);

  return (
    <div>
      {state ? (
        <AiFillHeart
          onClick={() => {
            onClick();
            setState(false);
          }}
          size="100"
          color="pink"
        />
      ) : (
        <AiOutlineHeart
          size={100}
          onClick={() => {
            setState(true);
            onClick();
          }}
        />
      )}
    </div>
  );
};

export default Like;
