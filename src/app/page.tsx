import Hero from "@/components/templates/Hero";
import Image from "next/image"
export default async function Home() {
  const apod = await fetch(`${process.env.APOD_URL}?api_key=${process.env.NASA_API_KEY}`);
  const picod = await apod.json();
  const luna = 'fallback.png';
  console.log(picod);

  const isVideo = picod.media_type === "video";
  return (
    <>
    <Hero imageUrl={luna}></Hero>
    
      <section className=" bg-[#0a0a0a] text-[#f0ede6] px-6 py-10" >
        <div className=" px-20">
          <p className="text-xl leading-relaxed text-white/50 my-6"> NASA {isVideo ? "Video" : "Picture"} of the day </p>
          <h2 className="text-3xl md:text-4xl font-serif font-normal tracking-tight mb-8">{picod.title}</h2>
          <div className="flex gap-10 items-start">
            <div className="flex-shrink-0">
              {isVideo ? (
                <video src={picod.url} width={500} height={200} controls autoPlay muted loop className="items-center rounded-lg"></video>
              ) :(
                <Image src={picod} width={500} height={500} alt="NASA picture of the day"></Image>
              )}
            </div>
            <div className="flex flex-col gap-4 max-w-lg pt-1">
              <p className="text-sm leading-7 text-white/50"> {picod.explanation}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
