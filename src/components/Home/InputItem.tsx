"use client";
import Image from "next/image";
import { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

// Import types, constants, and styles
import { InputItemProps, Option } from "@/types/InputItemTypes";
import { iconPaths, placeholders, instanceIds, iconAltText } from "@/constants/InputItemConstants";
import { getCustomStyles } from "@/styles/InputItemStyles";

export default function InputItem({ type }: InputItemProps) {
    const [value, setValue] = useState<Option | null>(null);

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
                    onChange: setValue,
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
