export interface LocationType {
    lat: number;
    lng: number;
    name: string;
    label: string;
}

export interface SourceContextType {
    source: LocationType | null;
    setSource: (location: LocationType | null) => void;
}

export interface DestinationContextType {
    destination: LocationType | null;
    setDestination: (location: LocationType | null) => void;
}