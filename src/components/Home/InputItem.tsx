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
        {/* <input 
            type="text"
            placeholder={type === "source" ? "Pickup Address" : "Destination Address"}
            className="bg-transparent w-full outline-none text-black"
        /> */}
        <GooglePlacesAutocomplete
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
            selectProps={{
                value,
                onChange: setValue,
            }}
            // add more props at 58:00
        />
    </div>
  )
}
