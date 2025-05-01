import Image from 'next/image';
import React from 'react'

interface IconProps {
    src: string;
}

const Icon = ({ src }: IconProps) => {
    return (
        <Image className='w-fit' src={src} alt={src} width={17} height={17} />
    )
}

export default Icon