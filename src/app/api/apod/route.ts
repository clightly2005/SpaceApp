import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const nasapod = await fetch(
            `${process.env.APOD_URL}?api_key=${process.env.NASA_API_KEY}`,
            { next: { revalidate: 3600 } }
        );
        if(!nasapod.ok){
            return NextResponse.json({ error: "NASA API error"}, { status: nasapod.status});
        }
        const pic = await nasapod.json();

        return NextResponse.json({
            title: pic.title,
            explanation: pic.explanation,
            url: pic.url,
            mediaType: pic.mediaType,
        });
    }catch(e){
        return NextResponse.json({error: "NASA unavailable"}, {status: 502});
    }
}