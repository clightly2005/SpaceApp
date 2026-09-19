import Hero from "@/components/home/Hero";
import Apod from "@/components/home/Apod"
export default async function Home() {
  const luna = 'background.png';

  return (
    <>
    <Hero imageUrl={luna}></Hero>
    <Apod></Apod>
    </>
  );
}
