import { UserButton } from '@clerk/nextjs';
import Image from 'next/image'
import React from 'react'

interface HeaderMenuItem {
    id: number;
    name: string;
    icon: string;
}

function Header() {
    const headerMenu: HeaderMenuItem[] = [
        {
            id: 1,
            name: 'Ride',
            icon: '/icons/taxi.png'
        },
        {
            id: 1,
            name: 'Package',
            icon: '/icons/box.png'
        },
    ]

  return (
    <div className='p-4 pb-3 pl-10 border-b-[4px] border-gray-200 
    flex items-center justify-between'>
        <div className='flex gap-24 items-center'>
            <Image 
                src='/icons/uberLogo.png' 
                alt='Uber Logo'
                width={70}
                height={70}
            />
            <div className='flex gap-6 items-center'>
                {headerMenu.map((item) => 
                    <div className='flex gap-2 items-center'>
                        <Image 
                            src={item.icon}
                            alt={item.name}
                            width={17}
                            height={17}
                        />
                        <h2 className='text-[14px] text-black'>{item.name}</h2>
                    </div>
                )}
            </div>
        </div>
        <UserButton />
    </div>
  )
}

export default Header