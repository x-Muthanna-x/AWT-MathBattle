import { Button } from '@mui/material'
import { useState } from 'react'
function StartMenu() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button variant="contained">Hello world</Button>
    </>
  )
}

export default StartMenu
