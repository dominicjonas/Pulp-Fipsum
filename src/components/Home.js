import React, { useState } from 'react'
import GiphyFetch from './GiphyFetch'
import { quoteData } from '../quoteData'

const Home = () => {
  const [formInput, setFormInput] = useState(0)
  const [paraData, setParaData] = useState([])

  function generatePara() {
    let paragraph = []
    for (let i = 0; i < 4; i++) {
      paragraph.push(
        quoteData[Math.floor(Math.random() * quoteData.length)]
      )
    }
    return paragraph.join(' ')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const paraGroup = []

    for (let i = 0; i < formInput; i++) {
      paraGroup.push(generatePara())
    }
    setParaData(paraGroup)
  }

  return (
    <div className='content-container'>
      <form className='form-container' onSubmit={handleSubmit}>
        <div className='form-input'>
          <label>paragraphs:</label>
          <input
            type='number'
            onChange={(e) => setFormInput(e.target.value)}
          />
        </div>
        <button type='submit'>i double dare you</button>
      </form>
      <div className='paragraph-container'>
        {paraData.map((para, index) => (
          <div className='paragraph' key={index}>
            {para}
          </div>
        ))}
      </div>
      <GiphyFetch />
    </div>
  )
}

export default Home
