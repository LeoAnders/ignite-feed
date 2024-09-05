import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import "./global.css";

import { post } from "./data";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
