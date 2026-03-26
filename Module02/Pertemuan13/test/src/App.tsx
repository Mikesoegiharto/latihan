import './App.css'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'

function App() {
  return (
    <>
      <h1 class="text-3xl font-bold underline"> hello world</h1>
      <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
      </Stack>
      <Button class="bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ..."> Helo </Button>
    </>
  )
}

export default App
