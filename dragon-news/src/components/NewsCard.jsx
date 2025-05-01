import { FaStar, FaEye } from "react-icons/fa";
import { format } from "date-fns";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    total_view,
    thumbnail_url,
    details,
    rating,
    tags,
    others,
  } = news;

  return (
    <div className="card bg-base-100 shadow-xl rounded-2xl overflow-hidden">
      <figure>
        <img
          src={thumbnail_url}
          alt="Thumbnail"
          className="w-full h-64 object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-xl font-bold">{title}</h2>

        <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
          <div className="flex items-center gap-2">
            <img
              src={author.img}
              alt={author.name}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="font-medium">{author.name}</p>
              <p>{format(new Date(author.published_date), "PPP")}</p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <FaEye /> <span>{total_view}</span>
          </div>
        </div>

        <p className="mt-4 text-gray-700">{details.slice(0, 150)}...</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <span key={index} className="badge badge-outline badge-sm">
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2 text-yellow-500">
            <FaStar />
            <span>
              {rating.number} ({rating.badge})
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
            {others?.is_trending && (
              <div className="badge badge-warning w-fit">🔥 Trending</div>
            )}
            {others?.is_today_pick && (
              <div className="badge badge-success w-fit">✅ Today’s Pick</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
