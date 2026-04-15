import Hero from "@/components/templates/Hero";
import Image from "next/image"

export default async function Home() {
  let picod = null;
  try{
    const nasapod = await fetch(`${process.env.APOD_URL}?api_key=${process.env.NASA_API_KEY}`, {
      next: { revalidate: 3600 } //cache for 1 hour and reduces API calls to stop flakiness from the api 
    });
    if(nasapod.ok){
      picod = await nasapod.json();
    }
  }catch(e){
    console.error("NASA API unavilable:", e);
  }
  const isVideo = picod.media_type === "video";
  const pic = picod?.url;

  const luna = 'fallback.png';

  return (
    <>
    <Hero imageUrl={luna}></Hero>
    {picod ? (
      <section className="bg-[#0a0a0a] text-[#f0ede6] py-16">
            <div className="max-w-5xl mx-auto px-8">
              <p className="text-md uppercase tracking-widest text-white/40 mb-3"> NASA {isVideo ? "Video" : "Picture"} of the day</p>
              <h2 className="text-3xl md:text-4xl font-serif font-normal tracking-tight mb-10"> {picod.title}</h2>
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-10 items-stretch">
                <div className="w-full">
                {isVideo ? (
                  <video src={pic} controls autoPlay muted loop className="w-full h-full object-cover rounded-xl" />
                ) : (
                <Image src={pic} width={800} height={800} alt="NASA picture of the day"  className="w-full h-full object-cover rounded-xl"/>
              )}
                </div>
              <div className="flex items-center">
                <p className="text-base sm:text-lg lg:text-xl text-justify leading-relaxed text-white/60"> {picod.explanation} </p>
              </div>
            </div>
          </div>
        </section>
    ) :(
      <section className="bg-[#0a0a0a] text-[#f0ede6] py-16">
        <p className="text-center text-white/40">NASA content unavailable right now, check back soon.</p>
      </section>
    )}
    </>
  );
}
