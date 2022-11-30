import React from 'react'
import styles from './Image.module.css'

const Image = () => {
  return (
    <div className={styles.sneakDiv}>
      <img
        className={styles.sneakImage}
        src="https://img.championat.com/c/1350x759/news/big/g/t/trendy-krossovok-2021_16143524381305802667.jpg"
        alt=""
      />
    </div>
  )
}

export default Image
