import React from 'react';
import Styles from './styles.module.scss';
import cx from 'classnames';
import { useArticle } from './useArticle';

export const Article = (props)=> {
        const {id, title, description, isConfirmed, hidden, isSelected} = props;
        const {isArticleVisible, setVisible} = useArticle(hidden);
        
        const confirmedJsx = isConfirmed && <h1>Новость подтверждена правительством</h1>
        const articleCx = cx({
            [Styles.article]: true,
            [Styles.selected]: isSelected
        })

        const showArticle = () => {
            setVisible(true);
        };

        const articleJsx =  isArticleVisible && (
            <div
            key = {id}
            className = {articleCx}
            >
                <h4>{title}</h4>
                <p>{description}</p>
                {confirmedJsx}
            </div>
        );

        const showJsx = !isArticleVisible && (
            <>
                <p>
                    Article is hidden but you want to open it, just 
                    <button onClick = {showArticle}>Click here !</button>
                </p>
            </>
        );


        return (
        <>
            {articleJsx}
            {showJsx}
        </>
        )
   
}