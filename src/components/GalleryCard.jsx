/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import clsx from "clsx";
import { motion } from "framer-motion";

const GalleryCard = ({
  id,
  name,
  category,
  image,
  onClick,
  selected,
}) => {
  const { url, height } = image;

  const className = clsx(
    "h-64",
    "rounded-md",
    "relative",
    {
      "[@media(min-width:1040px)]:border-green-400": selected,
      "[@media(min-width:1040px)]:border-solid": selected,
      "[@media(min-width:1040px)]:border-4": selected,
    },
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      layout
      onClick={() => onClick(id)}
      className={className}
      style={{
        backgroundImage: `url(${url})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height,
      }}
    >
      <div className="absolute left-12 bottom-14 space-y-5">
        <button
          className="py-1 px-4 capitalize rounded-full bg-white"
          type="button"
          onClick={(ev) => {
            ev.stopPropagation();
            onClick(category);
          }}
        >
          {category}
        </button>
        <p className="capitalize text-4xl text-white">{name}</p>
      </div>
    </motion.div>
  );
};

export default GalleryCard;
