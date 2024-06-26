// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrations from 'src/views/pages/misc/FooterIllustrations'

// ** Styled Components
const BoxWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '90vw'
  }
}))

const Img = styled('img')(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    height: 350,
    marginTop: theme.spacing(10)
  },
  [theme.breakpoints.down('md')]: {
    height: 300
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    maxWidth: 497,
    height: 'auto',
    maxHeight: 300
  },
  [theme.breakpoints.up('lg')]: {
    marginTop: theme.spacing(20)
  }
}))

const UnderMaintenance = () => {
  return (
    <Box className='content-center'>
      <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <BoxWrapper>
          <Typography variant='h2' sx={{ mb: 1 }}>
            Under Maintenance!
          </Typography>
          <Typography sx={{ mb: 2, color: 'text.secondary' }}>
            Sorry for the inconvenience but we're performing some maintenance at the moment
          </Typography>
          <Button href='/login' onClick={() => localStorage.clear()} component={Link} variant='contained'>
            Back to Home
          </Button>
        </BoxWrapper>
        <Img height='300' alt='under-maintenance-illustration' src='/images/pages/misc-under-maintenance.png' />
      </Box>
      {/* <FooterIllustrations /> */}
    </Box>
  )
}
UnderMaintenance.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default UnderMaintenance
