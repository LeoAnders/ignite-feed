import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/115679546?v=4"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Leonardo Anders</strong>
              <time
                title="06 de junho as 09:15h"
                dateTime="2023-06-16 09:15:50"
              >
                Cerca de uma 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
