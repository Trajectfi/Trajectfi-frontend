"use client"


import React from 'react'
import Search from './Search'
import Icon from './Icon'

const _Icons = [
    {
        src: "/images/icons/search.svg",
        _function: () => { }
    },
    {
        src: "/images/icons/bell.svg",
        _function: () => { }
    },
    {
        src: "/images/icons/help.svg",
        _function: () => { }
    },
]

const Header = () => {
    return (
        <div className='flex items-center justify-between p-6 w-full border-b-2 border-[#131429]'>
            <div>

                <Search />
            </div>
            <div className='flex space-x-3'>
                <div className='flex space-x-3'>
                    {
                        _Icons.map((icon, index) => {
                            return <button className='w-fit rounded-full p-2 bg-[#131429]' type="button" key={index} onClick={() => { icon._function() }}> <Icon src={icon.src} /> </button>
                        })
                    }
                </div>
                <div className='rounded-full p-2 bg-[#131429]'>
                    connect wallet
                </div>
            </div>
        </div>
    )
}

export default Header