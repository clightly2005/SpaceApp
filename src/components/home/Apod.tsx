"use client"
import Image from "next/image"
import { useState, useEffect } from "react";

type ApodData = {
    title: string;
    explanation: string;
    url: string;
    mediaType: string;
};

export default function Apod(){
    const [pic, setPic] = useState<ApodData | null>(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch("/api/apod")
        .then((res) => {
            if(!res.ok) throw new Error("bad response");
            return res.json();
        })
        .then((pod) => setPic(pod))
        .catch(() => setError(true));
    }, []);

    if (error){
        return(
            <section className="bg-[#0a0a0a] text-[#f0ede6] py-16">
                <p className="text-center text-white/40">NASA content is unavailble right now.</p>
            </section>
        );
    }
    if(!pic){
        return(
            <section className="bg-[#0a0a0a] text-[#f0ede6] py-16">
                <p className="text-center text-white/40">Loading...</p>
            </section>
        );
    }

    const isVideo = pic.mediaType === "video";

    return(
        <section className="bg-[#0a0a0a] text-[#f0ede6] py-12">
            <div className="max-w-6xl mx-auto px-8">
                <p className="text-md uppercase tracking-widest text-white/40 mb-6">
                    NASA {isVideo ? "Video" : "Picture"} of the day
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* media column */}
                    <div>
                        {isVideo ? (
                            <video src={pic.url} controls autoPlay muted loop
                                className="w-full max-h-[40vh] md:max-h-[70vh] object-contain rounded-xl" />
                        ) : (
                            <Image src={pic.url} width={800} height={800} alt={pic.title}
                                className="w-full h-auto max-h-[40vh] md:max-h-[70vh] object-contain rounded-xl" />
                        )}
                    </div>

                    {/* text column */}
                    <div className="max-h-[40vh] md:max-h-[70vh] overflow-y-auto">
                        <h2 className="text-2xl md:text-3xl font-serif text-white/90 mb-4">{pic.title}</h2>
                        <p className="text-white/60 text-justify leading-relaxed">{pic.explanation}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}