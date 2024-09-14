import { DestinationContext } from "@/context/DestinationContext";
import { SourceContext } from "@/context/SourceContext";
import { DestinationContextType, SourceContextType } from "@/types/LocationTypes";
import { useContext, useEffect } from "react";
import InputItem from "./InputItem";

export default function SearchSection() {
    const sourceContext = useContext<SourceContextType | null>(SourceContext);
    const destinationContext = useContext<DestinationContextType | null>(DestinationContext);

        // Early return if context is null, avoid rendering
        if (!sourceContext || !destinationContext) {
            console.error("SourceContext or DestinationContext is null");
            return null;
        }

    const { source, setSource } = sourceContext;
    const { destination, setDestination } = destinationContext;

    useEffect(() => {
        if (source) {
            console.log(source);
        } 
        if (destination) {
            console.log(destination);
        }
    }, [source, destination]);

    return (
        <div className="p-2 md:pd-6 border-[2px] rounded-xl">
            <p className="text-[20px] font-bold text-black">
                Get a ride
            </p>
            <InputItem type="source" />
            <InputItem type="destination" />

            <button className="p-3 w-full mt-5 rounded-lg bg-black text-white">
                Search
            </button>
        </div>
    )
}
