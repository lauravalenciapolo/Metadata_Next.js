"use client"
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import SlideUp from "../landingEfects/slideUp";
//comentario random

const Metrics = () => {

    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const landingMetrics1 = document.getElementById('landingMetrics1');
            const landingMetrics2 = document.getElementById('landingMetrics2');
            const landingMetrics3 = document.getElementById('landingMetrics3');

            if (landingMetrics1) {
                const rect = landingMetrics1.getBoundingClientRect();
                setIsVisible1(rect.top <= window.innerHeight);
            }
            if (landingMetrics2) {
                const rect = landingMetrics2.getBoundingClientRect();
                setIsVisible2(rect.top <= window.innerHeight);
            }
            if (landingMetrics3) {
                const rect = landingMetrics3.getBoundingClientRect();
                setIsVisible3(rect.top <= window.innerHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <Box
            sx={{ overflow: 'hidden' }}
            mt={15}
            display={"flex"}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            <Box
                display={"flex"}
                alignItems={'center'}
                justifyContent={'center'}
                width={'100%'}
                height={'50vh'}
                sx={{
                    backgroundImage: 'url(/img/Habits.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <Typography
                    variant='h1'
                    textAlign={'center'}
                    color={'#FFFFFF'}
                    fontSize={38}
                >
                    Quiero ayudarte a crear hábitos saludables <br />
                    que te impulsen a alcanzar tus objetivos
                </Typography>
            </Box>

            <SlideUp in={isVisible1} slideDirection='left'>
                <Box
                    id="landingMetrics1"
                    mt={15}
                    display={"flex"}
                    flexDirection={{ xs: 'column', md: 'row' }}
                    alignItems={'center'}
                    justifyContent={'space-between'}

                >
                    <Box mr={{ md: 20 }}>
                        <Image
                            src="/img/Phone2.png"
                            alt="landingMetrics1"
                            layout='responsive'
                            width={378}
                            height={378}
                        />
                    </Box>
                    <Typography
                        variant="h3"
                        textAlign={{ xs: 'center', md: 'left' }}
                        mt={{ xs: 5 }}
                    >
                        Te ayudo a compartir tus hábitos <br />
                        saludables con tus amigos y conocidos, así <br />
                        aprendes de las experiencias de otros y <br />
                        construyes una comunidad parecida a ti
                    </Typography>
                </Box>
            </SlideUp>

            <SlideUp in={isVisible2} slideDirection='right'>
                <Box
                    id="landingMetrics2"
                    mt={15}
                    display={"flex"}
                    flexDirection={{ xs: 'column-reverse', md: 'row' }}
                    alignItems={'center'}
                    justifyContent={'space-around'}

                >
                    <Typography
                        variant="h3"
                        mr={{ md: 20 }}
                        textAlign={{ xs: 'center', md: 'left' }}
                        mt={{ xs: 5 }}
                    >
                        Soy una red social en la que puedes <br />
                        conocer nuevas personas a partir de un <br />
                        gusto común, además puedes unirte a los <br />
                        clubes y practicar tus actividades favoritas
                    </Typography>
                    <Box>
                        <Image
                            src="/img/Phone3.png"
                            alt="landingMetrics2"
                            layout='responsive'
                            width={378}
                            height={378}
                        />
                    </Box>
                </Box>
            </SlideUp>

            <SlideUp in={isVisible3} slideDirection='left'>
                <Box
                    id="landingMetrics3"
                    mt={15}
                    display={"flex"}
                    flexDirection={{ xs: 'column', md: 'row' }}
                    alignItems={'center'}
                    justifyContent={'space-around'}

                >
                    <Box mr={{ md: 20 }}>
                        <Image
                            src="/img/Phone4.png"
                            alt="landingMetrics3"
                            layout='responsive'
                            width={378}
                            height={378}
                        />
                    </Box>
                    <Typography
                        variant="h3"
                        textAlign={{ xs: 'center', md: 'left' }}
                        mt={{ xs: 5 }}
                    >
                        Conecta con personas en diferentes <br />
                        lugares para planificar y ejecutar <br />
                        actividades en común que te hagan feliz y <br />
                        te ayuden a llevar una vida saludable
                    </Typography>
                </Box>
            </SlideUp>

        </Box>
    )
}

export default Metrics