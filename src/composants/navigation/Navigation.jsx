import React from 'react'
import { AiOutlineWechat } from "react-icons/ai";
import styles from "../navigation/navigation.module.css";



function Navigation() {
  return (
    <nav className={styles.navigation}>
      <a href='#' className='logo'><AiOutlineWechat />
      </a>
      <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>A propos</a></li>
        <li><a href='#'>Contact</a></li>

      </ul>

    </nav>

  )
}

export default Navigation