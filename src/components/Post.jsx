import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(){
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
        <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/115679546?v=4" />
          <div className={styles.authorInfo}>
            <strong>Leonardo Anders</strong>
            <span>Desenvolvedor ERP</span>
          </div>
        </div>
        <time title='06 de junho as 09:15h' dateTime="2023-06-16 09:15:50">Publicado há 1h</time>
      
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a href="#">👉 jane.design/doctorcare</a></p>
        <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder='Deixe seu comentário'></textarea>

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>

    </article>
  )
}