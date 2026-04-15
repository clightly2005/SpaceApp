export default function Education(){
    console.log("render");
    //side nav and article list 
    return(
        <>
        <div className="text-white-200 mt-20">
            <h1 className="text-3xl md:text-4xl uppercase tracking-widest text-white drop-shadow-2xl font-serif">Luna Education</h1>
            <p className="text-sm lg:text-base xl:text-xl leading-7 text-justify text-white/80 mt-10">Please use the pannel on the left to begin learning about Space today! <br></br><span className="text-md text-white/50">Each article has been researched, hand written and reviewed.</span> </p>
            <h2 className="text-xl mt-30 md:text-2xl uppercase tracking-widest text-white drop-shadow-2xl ">Today's fun fact!</h2>
        </div>
        </>
    )
}