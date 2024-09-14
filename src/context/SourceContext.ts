import { LocationType } from "@/types/LocationTypes";
import { createContext } from "react";

interface SourceContextType {
    source: LocationType | null;
    setSource: (source: LocationType) => void;
}

export const SourceContext = createContext<SourceContextType | null>(null);