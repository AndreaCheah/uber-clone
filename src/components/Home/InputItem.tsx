"use client"
import Image from "next/image";
import { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

interface InputItemProps {
    type: string;
}

interface Option {
    label: string;
    value: string;
}

export default function InputItem({ type }: InputItemProps) {
    const [value, setValue] = useState<Option | null>(null);
  return (
    <div className="bg-slate-200 p-3 rounded-lg mt-3 
        flex items-center gap-4">
        <Image
            src={type === "source" ? "/icons/pickUpIcon.png" : "/icons/destinationIcon.png"}
            alt="Pick Up Icon"
            width={15}
            height={15}
        />
        {/* Enable both the Places API and Maps JavaScript API as Google Autocomplete relies on it */}
        <GooglePlacesAutocomplete
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
            selectProps={{
                value,
                onChange: setValue,
                placeholder: type === "source" ? "Pickup Address" : "Destination Address",
                // explicitly define id to ensure consistent id for both server and client-side rendering
                instanceId: type === "source" ? "pickup-location" : "destination-location",
                isClearable: true,  // for a more intuitive UX where user can click cross button to clear the input
                className: "w-full",
                // components:{
                //     DropdownIndicator: false
                // },
                styles: {
                    control: (provided) => ({
                        ...provided,
                        backgroundColor: 'transparent',
                        border: 'none',
                    }),
                    option: (provided) => ({
                        ...provided,
                        color: 'black'
                    })
                }
            }}
        />
    </div>
  )
}
