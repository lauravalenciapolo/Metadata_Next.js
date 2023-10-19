import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import SlideUp from '../landingEfects/slideUp';

const Header = () => {

  return (
    <SlideUp in={true} slideDirection='up'>
      <Box
        display={'flex'}
        flexDirection={{ xs: 'column', md: 'row' }}
      >
        <Box ml={{ md: 8 }} mt={10} textAlign={{ xs: 'center', md: 'left' }} >
          <Typography color={'primary'} variant='h2' >
            Bienvenido a Stalak,
          </Typography>
          <Typography variant={'h1'} >
            una red social para <br />
            lograr buenos hábitos.
          </Typography>
          <Typography variant='h2'>
            Soy una plataforma que te acompaña a todos <br />
            lados y te ayudará a alcanzar tus metas con el fin <br />
            de convertirlas en cambios positivos para tu vida.
          </Typography>

          <Link
            href={'https://testflight.apple.com/v1/app/1638320785?build=96408600'}
            target='_blank'

          >
            <Button sx={{ marginTop: '5%' }}>
              <Image
                src="/svg/buttomDownloadIOS.svg"
                alt="buttomDownloadIOS"
                layout='responsive'
                width={213}
                height={61}
              />
            </Button>
          </Link>

          <Link
            href={'https://play.google.com/store/apps/details?id=app.stalakapp&hl=en-US&ah=tghTXuXLnpRVDus5JsPEOWknNqw'}
            target='_blank'
          >
            <Button sx={{ marginTop: '5%' }} >
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
        <Box ml={{ xs: 0, md: 20 }} >
          <Image
            src="/img/Phone1.png"
            // src="/svg/landingPhone.svg"
            alt="landingPhone"
            layout='responsive'
            width={476.38}
            height={566.5}
          />
        </Box>
      </Box>
    </SlideUp>
  )
}

export default Header