import React, { useState } from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  const addBasket = 'Добавить в корзину'
  const inBasket = 'Уже в корзине'

  const [onBasket, setOnBasket] = useState(false)
  const handleState = () => {
    setOnBasket(true)
  }
  const handleState2 = () => {
    setOnBasket(false)
  }
  const deleteBask = (
    <button className={styles.deleteBasket} onClick={handleState2}>
      удалить из корзины
    </button>
  )

  return (
    <div className={styles.mainDiv}>
      <hr />
      <div className={styles.lorem}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
        assumenda dignissimos discasus binushes?
      </div>
      <div className={styles.buttonDiv}>
        <button
          className={styles.basketButton}
          onClick={handleState}
          disabled={onBasket}
        >
          {onBasket ? inBasket : addBasket}
        </button>
        {onBasket ? deleteBask : null}
      </div>
    </div>
  )
}

export default Footer
