import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css'
import './global.css';
import { ApplePodcastsLogo } from 'phosphor-react';

// author: { avatar_url:"", name:"", role: "" }
// publishedAt: Date
// content: String

// simulando posts vindos do backend
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/vbmelo.png',
      name: 'Victor Melo',
      role: 'Software Engineer @ OpenForWork',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Ignite Front-End, curso da Rocketseat. O nome do projeto é Ignite Feed 😁'},
      { type: 'link', content: '👉 github.com/vbmelo/ignite-feed'},
      { type: 'paragraph', content: '#novoprojeto #react #rocketseat'},
      { type: 'paragraph', content: 'https://rocketseat.com.br'},
    ],
    publishedAt: new Date ('2022-10-04 01:59:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://i1.sndcdn.com/artworks-vC646wixlzVT1jpO-lrhJvg-t500x500.jpg',
      name: 'Prison Mike',
      role: 'Project Manager @ Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'I’m Prison Mike! You know why they call me Prison Mike? 🤨'},
      { type: 'paragraph', content: 'Because i know that Victor Melo is a awesome Software Developer 🚀'},
      { type: 'link', content: 'Checkout his Github: github.com/vbmelo/'},
      { type: 'paragraph', content: '#SoftwareDeveloper #HireHim #GiveHimAJob'},
    ],
    publishedAt: new Date ('2022-04-10 16:20:00'),
  },
];

// o metodo map funciona como um for each, mas no caso
// o map retorna um array, enquanto o forEach nao retorna nada

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
                <Post 
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
          })} 
        </main>
      </div>
    </div>
  )
}