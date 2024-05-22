import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Loader from "../Loader";
import {
  useAddToFavoriteMutation,
  useGetFavoritesQuery,
} from "../../redux/api";

const LikeButton = ({ id }: { id?: number }) => {
  const favState = useGetFavoritesQuery();

  const isLiked = favState.data?.results.find((i) => i.id === id);
  const [addToFavorite, { isLoading }] = useAddToFavoriteMutation();

  const handleLike = () => {
    addToFavorite({
      media_id: id || 1,
      media_type: "movie",
      favorite: isLiked ? false : true,
    });
  };

  return (
    <div>
      <button
        className="mt-4 text-xl"
        disabled={isLoading}
        onClick={handleLike}
      >
        {isLoading ? (
          <Loader type="xs" />
        ) : isLiked ? (
          <FaHeart />
        ) : (
          <FaRegHeart />
        )}
      </button>
    </div>
  );
};

export default LikeButton;
