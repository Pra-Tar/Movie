import { Heart } from "lucide-react"

const Footer = ()=>{

    return(
        <>
            <div className="w-full flex justify-center items-center h-8 text-gray-200 bg-stone-800">
                <h2>Made with <Heart className="inline fill-gray-200" size={18}/> Pranchal</h2>
            </div>
        </>
    )

}

export default Footer