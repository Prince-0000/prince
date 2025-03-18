import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

interface CardProps {
  image: StaticImageData;
  title: string;
  tech:string[];
  liveUrl: string;
  codeUrl: string;
  description: string;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  tech,
  liveUrl,
  codeUrl,
  description
}): JSX.Element => {
  const router = useRouter();
  const handleClick = () => {
    // Redirect to /project/[title] route
    localStorage.setItem(
      "selectedProject",
      JSON.stringify({
        title,
        liveUrl,
        codeUrl,
        tech,
        description,
        image: image.src,
      })
    );
    router.push(`/project/${encodeURIComponent(title)}`);
  };
  return (
    <div className="w-full max-w-[300px] shadow-xl flex flex-col justify-center items-center p-12 my-5 rounded-lg hover:scale-105 duration-300">
      <Image
        className="w-[200px] mx-auto bg-white rounded-md object-cover"
        src={image}
        alt={title}
      />
      <h2 className="text-xl font-bold text-center py-3">{title}</h2>
      {liveUrl !== "" ? (
        <Link href={liveUrl} target="_blank">
          <button type="button" className="bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 text-black">
            Live Demo
          </button>
        </Link>
      ) : (
        <>
        </>
      )}

      <button
        type="button"
        className="bg-black text-[#00DF9A] w-[200px] rounded-md font-medium mx-auto px-6 py-3"
        onClick={handleClick}
      >
        Know More
      </button>
    </div>
  );
};

export default Card;