import React, { useState } from 'react'
import styles from './Main.module.css'

const Main = () => {
  const [prompt, setPrompt] = useState(false)
  const handlHelp = () => {
    setPrompt(true)
  }
  const handleCloseHelp = () => {
    setPrompt(false)
  }

  const help = (
    <div className={styles.help}>
      <button className={styles.buttoninHelp} onClick={handleCloseHelp}>
        x
      </button>
      <div className={styles.lorem}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste at fugiat
        corrupti magnam
      </div>{' '}
    </div>
  )
  return (
    <div className={styles.mainDiv}>
      <div className={styles.div450px}>
        <div className={styles.nikeSneakerDiv}>
          Nike Sneaker <br /> <br /> 120$
        </div>
        <div className={styles.buttonDiv}>
          <button className={styles.detailsButton} onMouseOver={handlHelp}>
            Детали
          </button>
        </div>
        {prompt ? help : null}
      </div>
    </div>
  )
}

export default Main
