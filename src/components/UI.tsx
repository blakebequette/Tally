import { Button, Container, Typography } from '@mui/material'

export default function UI() {
  return (
    <Container
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: 'grey',
      }}
    >
      <Typography component="h1" color="background" textAlign="center">
        Homepage by B
      </Typography>
    </Container>
  )
}
