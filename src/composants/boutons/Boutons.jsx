import React from 'react'
import styles from '../boutons/boutons.module.css'



function Boutons({ icon, text }) {


  return (


    <button className={styles.btn}>
      {icon}
      {text}
    </button>
  )
}

export default Boutons