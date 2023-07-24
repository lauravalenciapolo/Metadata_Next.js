"use client"
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import ZoomIn from '../landingEfects/zoom';
import React, { useEffect, useState } from 'react';


const Feature = () => {

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const landingFeatures1 = document.getElementById('landingFeatures1');
      const landingFeatures2 = document.getElementById('landingFeatures2');
      const landingFeatures3 = document.getElementById('landingFeatures3');
      const landingFeatures4 = document.getElementById('landingFeatures4');


      if (landingFeatures1) {
        const rect = landingFeatures1.getBoundingClientRect();
        setIsVisible1(rect.top <= window.innerHeight);
      }
      if (landingFeatures2) {
        const rect = landingFeatures2.getBoundingClientRect();
        setIsVisible2(rect.top <= window.innerHeight);
      }
      if (landingFeatures3) {
        const rect = landingFeatures3.getBoundingClientRect();
        setIsVisible3(rect.top <= window.innerHeight);
      }
      if (landingFeatures4) {
        const rect = landingFeatures4.getBoundingClientRect();
        setIsVisible4(rect.top <= window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      mt={8}
      display={'flex'}
      flexDirection={'column'}
    >

      <ZoomIn in={isVisible1}>
        <Typography
          id='landingFeatures1'
          variant='h1'
          textAlign={'center'}
          color={'#000000'}
          fontSize={38}
        >
          ¿Qué puedo hacer por ti?
        </Typography>
      </ZoomIn>

      <Box
        display={'flex'}
        flexDirection={{ xs: 'column', md: 'row' }}
        alignItems={'center'}
        justifyContent={'space-evenly'}
      >

        <ZoomIn in={isVisible2}>
          <Box
            id='landingFeatures2'
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            mt={{ xs: 8 }}
          >
            <Image
              src="/svg/landingIconPin.svg"
              alt="landingIconPin"
              width={66}
              height={44}
            />
            <Typography
              variant='h2'
              mt={3}
              textAlign={{ xs: 'center', md: 'left' }}
            >
              Ayudo a establecer rutinas <br />
              saludables que te animan a <br />
              crear y mantener buenos <br />
              hábitos para tu vida
            </Typography>
          </Box>
        </ZoomIn>

        <ZoomIn in={isVisible3}>
          <Box
            id='landingFeatures3'
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            mt={{ xs: 8 }}
          >
            <Image
              src="/svg/landingIconStats.svg"
              alt="landingIconStats"
              width={66}
              height={66}
            />
            <Typography
              variant='h2'
              mt={3}
              textAlign={{ xs: 'center', md: 'left' }}
            >
              Muestro las estadísticas de <br />
              tus metas para que puedas <br />
              evaluar tu desempeño y <br />
              medir tus logros
            </Typography>
          </Box>
        </ZoomIn>

        <ZoomIn in={isVisible4}>
          <Box
            id='landingFeatures4'
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            mt={{ xs: 8 }}
          >
            <Image
              src="/svg/landingIconClubs.svg"
              alt="landingIconClubs"
              width={66}
              height={56}
            />
            <Typography
              variant='h2'
              mt={3}
              textAlign={{ xs: 'center', md: 'left' }}
            >
              Organizo tus actividades <br />
              en los clubes a los que <br />
              puedes pertenecer con <br />
              otras personas
            </Typography>
          </Box>
        </ZoomIn>

      </Box>

    </Box>
  )
}

export default Feature
