import React from 'react'
import styles from '../formulaire/formulaire.module.css'
import Boutons from '../boutons/Boutons'
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import Image from '../../assets/home.svg'


function Formulaire() {
  return (

    <section className={styles.formulaire_container}>
      <div className={styles.formulaire_form}>
        <div className={styles.formulaire_btns}>
          <Boutons text='Via le chat' icon=
            {<IoChatbubbleEllipsesOutline />}
          />
          <Boutons text='Via le telephone' icon=
            {<IoIosCall />}
          />
        </div>
        <h2>Contacter nous par mail</h2>
        <form className={styles.formulaire}>
          <div className={styles.inputGroup}>
            <label htmlFor='nom'
            >Nom</label>
            <input type="text" name="nom" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor='prenom'
            >Prenom</label>
            <input type="text" name="prenom" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor='Email'
            >Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor='message'
            >Message</label>
            <textarea name="message"></textarea>
          </div>
          <Boutons text='Envoyer' />
        </form>


      </div>
      <div className={styles.formulaire_form}>
        <img src={Image} alt="image contact" />
      </div>
    </section>
  )
}

export default Formulaire