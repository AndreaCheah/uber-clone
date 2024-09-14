"use client";
import GoogleMapSection from "@/components/Home/GoogleMapSection";
import SearchSection from "@/components/Home/SearchSection";
import { DestinationContext } from "@/context/DestinationContext";
import { SourceContext } from "@/context/SourceContext";
import { useState } from "react";
import { LocationType } from "@/types/LocationTypes";

export default function Home() {
    const [source, setSource] = useState<LocationType | null>(null);
    const [destination, setDestination] = useState<LocationType | null>(null);

    return (
        <SourceContext.Provider value={{ source, setSource }}>
            <DestinationContext.Provider value={{ destination, setDestination }}>
                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div>
                        <SearchSection />
                    </div>
                    <div className="col-span-2">
                        <GoogleMapSection />
                    </div>
                </div>
            </DestinationContext.Provider>
        </SourceContext.Provider>
    );
}
