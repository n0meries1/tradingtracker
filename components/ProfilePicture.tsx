import React, { FC } from 'react';
import Image from 'next/image';
import image from '@/public/next.svg'



interface ProfilePictureProps {
  src: string;
  alt: string;
}

const ProfilePicture: FC<ProfilePictureProps> = ({ src, alt}) => {
  return (
    <div className="profile-picture">
        <Image src={image} alt={alt} layout="fill" objectFit="cover" className="profile-image"/>
    </div>  
)
}

export default ProfilePicture