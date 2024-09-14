"use client";
import Image from "next/image";
import { useContext, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

import { iconAltText, iconPaths, instanceIds, placeholders } from "@/constants/InputItemConstants";
import { DestinationContext } from "@/context/DestinationContext";
import { SourceContext } from "@/context/SourceContext";
import { getCustomStyles } from "@/styles/InputItemStyles";
import { DestinationContextType, SourceContextType } from "@/types/LocationTypes";

type LocationType = "source" | "destination";

interface InputItemProps {
    type: LocationType;
}

interface Option {
    label: string;
    value: string;
}

export default function InputItem({ type }: InputItemProps) {
    const [value, setValue] = useState<Option | null>(null);
    const sourceContext = useContext<SourceContextType | null>(SourceContext);
    const destinationContext = useContext<DestinationContextType | null>(DestinationContext);

    // If context is null, early return to prevent rendering this component
    if (!sourceContext || !destinationContext) {
        console.error("SourceContext or DestinationContext is null");
        return null;
    }

    const { source, setSource } = sourceContext;
    const { destination, setDestination } = destinationContext;

    const getLatLng = (place: { value: { place_id: string } }, type: LocationType) => {
        const placeId = place.value.place_id;
        
        // Docs: https://developers.google.com/maps/documentation/javascript/reference/places-service
        // Using Google PlacesService to get details about the place
        const service = new google.maps.places.PlacesService(document.createElement("div"));
        service.getDetails(
            {placeId: placeId}, // req for place using placeId
            (place: google.maps.places.PlaceResult | null, status: google.maps.places.PlacesServiceStatus) => { // place and status res from req
                if (status === "OK" && place?.geometry?.location && place?.name && place?.formatted_address) {
                    const location = {
                        lat: place.geometry.location.lat(),
                        lng: place.geometry.location.lng(),
                        name: place.formatted_address,
                        label: place.name
                    };
                    if (type === "source") {
                        setSource(location);
                    } else {
                        setDestination(location);
                    }
                };
            }
        );
    };

    return (
        <div className="bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4">
            <Image
                src={iconPaths[type]}
                alt={iconAltText[type]}
                width={15}
                height={15}
            />

            <GooglePlacesAutocomplete
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
                selectProps={{
                    value,
                    onChange: (place) => {
                        if (!place) {
                            if (type === "source") {
                                setSource(null);
                            } else {
                                setDestination(null);
                            }
                        } else if (place?.value?.place_id) {
                            getLatLng(place, type)
                        };
                        setValue(place);
                    },
                    placeholder: placeholders[type],
                    instanceId: instanceIds[type],
                    isClearable: true,
                    className: "w-full",
                    styles: getCustomStyles,
                }}
            />
        </div>
    );
}
