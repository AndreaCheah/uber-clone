import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
  return (
    <>
        <div className='absolute top-10 right-10'>
            {/* <Image src='/images/homepage.jpeg' alt='Home Page' width={900} height={1000} className='object-contain w-full h-full' /> */}
            <SignIn />
        </div>
    </>
)}