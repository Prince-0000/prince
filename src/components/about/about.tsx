import Image from "next/image";
import { getAboutData } from "@/utils/api";
import { urlFor } from "@/sanity/lib/image";

export default async function About() {
  const data = await getAboutData();

  if (!data) return null;

  return (
    <div id="about" className="w-full bg-[#fefaf6] py-[8rem] px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <Image
          className="w-[500px] my-0 mx-auto border-0"
          src={urlFor(data.image).url()}
          alt="profile"
          width={500}
          height={500}
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold mt-2">{data.sectionTitle}</p>
          <h1 className="md:text-3xl whitespace-pre sm:text-2xl text-xl font-bold py-2">
            {data.heading}
          </h1>

          {data.introParagraphs && (
            <>
              <p>{data.introParagraphs[0]}</p>
              <p className="py-3">{data.introParagraphs[1]}</p>
              <p className="py-3">{data.introParagraphs[2]}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
