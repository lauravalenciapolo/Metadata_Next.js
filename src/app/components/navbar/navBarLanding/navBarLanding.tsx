import Image from 'next/image';
import { Box } from '@mui/material';

export default function NavBarLanding() {
    return (
        <Box mt={5} ml={8}>
            <Image
                src="/svg/landingNavBarLogo.svg"
                alt="landingNavBarLogo"
                width={219.99}
                height={85.95}
            />
        </Box>
    )
}