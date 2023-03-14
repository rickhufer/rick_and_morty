import React from "react"
import styles from './About.module.css'

export default function About(props) {
  return (
    <div className={styles.aboutCont}>
      <h1>Lorem 1</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, nemo eaque molestiae rerum autem tenetur nam nesciunt sequi sunt porro tempora architecto est alias pariatur? Molestias vitae voluptatem quia nihil.</p>
      <h1>Lorem 2</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, nemo eaque molestiae rerum autem tenetur nam nesciunt sequi sunt porro tempora architecto est alias pariatur? Molestias vitae voluptatem quia nihil.</p>
      <img src="https://images.unsplash.com/photo-1674555092106-349971db6965?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" alt="" />
    </div>
  )
}