import React from 'react'
import Icon from './Icon'

const Search = () => {
    return (
        <div className='flex w-full items-center rounded-lg bg-[#131429] p-2 px-3 space-x-4'>
            <Icon src={'/images/icons/search.svg'} />
            <input
                type="search"
                name=""
                id=""
                className='bg-inherit w-full border-none p-1s px-3 focus:outline-none'
                placeholder='Search'
            />
        </div>
    )
}

export default Search