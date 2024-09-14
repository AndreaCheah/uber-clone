import { LocationType } from "@/types/LocationTypes";
import { createContext } from "react";

interface DestinationContextType {
    destination: LocationType | null;
    setDestination: (destination: LocationType) => void;
}

export const DestinationContext = createContext<DestinationContextType | null>(null);