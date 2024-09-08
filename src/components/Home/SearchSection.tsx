import InputItem from "./InputItem";

export default function SearchSection() {
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
