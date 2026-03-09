import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonBasic from './components/Button.jsx'
import Checkboxes from './components/Checkbox.jsx'
import GroupSizesColors from './components/ButtonGroup.jsx'
import BasicSelect from './components/Dropdown.jsx'
import LoadingButtonGroup from './components/loading.jsx'
import ContinuousSlider from './components/Slider.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ButtonBasic />
      <Checkboxes />
      <GroupSizesColors />
      <BasicSelect />
      <LoadingButtonGroup />
      <ContinuousSlider />
      
    </>
  )
}

export default App
