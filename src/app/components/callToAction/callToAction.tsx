"use client"
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import SlideUp from '../landingEfects/slideUp';
import ZoomIn from '../landingEfects/zoom';


const CallToAction = () => {

    const [isVisible1, setIsVisible1] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const landingCallToAction1 = document.getElementById('landingCallToAction1');
            if (landingCallToAction1) {
                const rect = landingCallToAction1.getBoundingClientRect();
                setIsVisible1(rect.top <= window.innerHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <ZoomIn in={isVisible1}>
         {/* <SlideUp in={isVisible1} slideDirection='up'> */}
            <Box
                id='landingCallToAction1'
                display={"flex"}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Box
                    mt={8}
                    width={'80%'}
                    height={{ xs: '65vh', md: '50vh' }}
                    sx={{
                        backgroundImage: 'url(/img/Background.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    borderRadius={3}

                    display={"flex"}
                    alignItems={'center'}
                    justifyContent={'space-evenly'}
                    flexDirection={'column'}

                >
                    <Typography
                        variant='h1'
                        textAlign={'center'}
                        color={'#FFFFFF'}
                        fontSize={{ xs: 28, md: 45 }}
                    >
                        ¿Estás listo para construir tu Everest?
                    </Typography>
                    <Typography
                        variant='h2'
                        textAlign={'center'}
                        color={'#FFFFFF'}
                        fontSize={26}
                    >
                        Empecemos a organizar tus hábitos y convertirlos en propósitos de vida.
                    </Typography>
                    <Typography
                        variant='h3'
                        textAlign={'center'}
                        color={'#FFFFFF'}
                        fontSize={20}
                        fontWeight={500}
                        mt={{ md: 3 }}
                    >
                        Descarga Stalak
                    </Typography>

                    <Box
                        display={"flex"}
                        alignItems={'center'}
                        justifyContent={{ xs: 'flex-end', md: 'center' }}
                        flexDirection={{ xs: 'column', md: 'row' }}
                    >
                        <Link
                            href={'https://testflight.apple.com/v1/app/1638320785?build=96408600'}
                            target='_blank'
                        >
                            <Button>
                                <Image
                                    src="/svg/buttomDownloadIOS.svg"
                                    layout='responsive'
                                    alt="buttomDownloadIOS"
                                    width={213}
                                    height={61}
                                />
                            </Button>
                        </Link>

                        <Link
                            href={'https://play.google.com/store/apps/details?id=app.stalakapp&hl=en-US&ah=tghTXuXLnpRVDus5JsPEOWknNqw'}
                            target='_blank'
                        >
                            <Button>
                                <Image
                                    src="/svg/buttomDownloadAndroid.svg"
                                    alt="buttomDownloadAndroid"
                                    layout='responsive'
                                    width={213}
                                    height={61}
                                />
                            </Button>
                        </Link>

                    </Box>
                </Box>
            </Box>
         {/* </SlideUp> */}
        </ZoomIn>
    )
}

export default CallToAction