import styles from './Comment.module.css';
import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from './Avatar';
import { useState } from 'react';

interface Author {
    avatarUrl: String;
    name: String;
    role: String;
}

interface CommentProps { 
    content: string;
    onDeleteComment: (comment: string) => void;
    author: Author;
}

export function Comment({ content, onDeleteComment, author }: CommentProps){
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content);
    }

    function handleLikeComment(){
        setLikeCount((state) => {
            return state + 1;
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false} 
                src="https://github.com/vbmelo.png" 
                alt=""
                onClick={() => alert('Hello World')}
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>{author.name}</strong>
                            <time title="11 de Maio às 01:59h" dateTime='2022-05-10 1:59:00'>Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>
                        {content}
                    </p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}