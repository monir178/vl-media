import React from 'react';
import MaxWidthWrapper from './ui/Shared/MaxWidthWrapper';
import { BsInstagram, BsTwitterX } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className="bg-[#0a0f21]  w-full py-6 text-white font-sans">

           <MaxWidthWrapper>
            <div className='text-center space-y-4 p-4'>
                <p className='tracking-wide'>vlad@vlmedia.online</p>
                <div className='flex justify-center items-center gap-4'>
                    <BsInstagram/>
                    <BsTwitterX/>
                </div>
                <p className='tracking-wide'>©2025 by VLMedia All Rights Reserved.</p>

            </div>

           </MaxWidthWrapper>
            
        </div>
    );
};

export default Footer;