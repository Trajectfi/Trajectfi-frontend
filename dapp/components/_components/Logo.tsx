import Image from 'next/image'
import React from 'react'

const Logo = () => {
    return (
        <Image src={'/images/icons/logo.svg'} alt={'Logo'} width={120} height={120}></Image>
    )
}

export default Logo