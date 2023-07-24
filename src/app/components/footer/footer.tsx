import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const Footer = () => {
    return (
        <Box
            width={'100%'}
            height={{ xs: '80vw', md: '20vw' }}
            sx={{ backgroundColor: '#252525' }}
            mt={8}
            display={'flex'}
            alignItems={'center'}
            flexDirection={'column'}
            justifyContent={{ xs: 'space-evenly', md: 'center' }}
        >

            <Box
                display={'flex'}
                flexDirection={{ xs: 'column', md: 'row' }}
                alignItems={'center'}
                justifyContent={'space-evenly'}
                width={'100%'}

            >
                <Box
                    width={'50%'}
                >
                    <Image
                        src="/svg/landingFooterLogo.svg"
                        alt="landingFooterLogo"
                        width={178}
                        height={80}
                    />
                </Box>

                <Box
                    display={'flex'}
                    flexDirection={'row'}
                    alignItems={'center'}
                    width={{ xs: '50%', md: '20%' }}
                    justifyContent={'space-evenly'}
                    mt={{ xs: 5 }}
                >
                    <Image
                        src="/svg/landingFooterInstaIcon.svg"
                        alt="landingFooterInstaIcon"
                        width={29}
                        height={29}
                    />
                    <Image
                        src="/svg/landingFooterFaceIcon.svg"
                        alt="landingFooterFaceIcon"
                        width={12}
                        height={21}
                    />
                    <Image
                        src="/svg/landingFooterInIcon.svg"
                        alt="landingFooterInIcon"
                        width={29}
                        height={29}
                    />
                </Box>
            </Box>

            <Image
                src="/svg/landingFooterHr.svg"
                alt="landingFooterHr"
                layout='responsive'
                width={1}
                height={4}
                style={{ marginTop: '2vw' }}
            />
            <Typography
                textAlign={'center'}
                color={'rgba(255, 255, 255, 0.5)'}
                variant='h3'
                fontSize={20}
                mt={{ xs: -2, md: 1 }}
            >
                © 2023 Stalak Copyright
            </Typography>

        </Box>
    )
}

export default Footer