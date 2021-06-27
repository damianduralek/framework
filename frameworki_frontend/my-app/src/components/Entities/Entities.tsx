import { FC, useState, useEffect, ChangeEvent } from "react";
import styled from "styled-components";
import React, { Component } from 'react';
import TaskFilter from "../Filters";

const MainWrap = styled.div`
box-shadow:
0 2.8px 2.2px rgba(0, 0, 0, 0.034),
0 6.7px 5.3px rgba(0, 0, 0, 0.048),
0 12.5px 10px rgba(0, 0, 0, 0.06),
0 22.3px 17.9px rgba(0, 0, 0, 0.072),
0 41.8px 33.4px rgba(0, 0, 0, 0.086),
0 100px 80px rgba(0, 0, 0, 0.12)
;
display:block;
flex-wrap: wrap;
width:62%;
background-color:#dadada;
margin:30px auto;
`
const Wrap1 = styled.div`

display:flex;

height:100px;
background-color:#dadada;

h1{
    margin: auto;
    font-size:60px;
}
`
const Wrap2 = styled.div`

display:flex;
flex-wrap: wrap;

background-color:#dadada;
`
const Entis = styled.div`
width: 100px;
  
/* #1 */
border: 5px solid hsl(0, 0%, 40%);

/* #2 */
padding: 5px;
background: hsl(0, 0%, 20%);

/* #3 */
outline: 5px solid hsl(0, 0%, 60%);

/* #4 AND INFINITY!!! (CSS3 only) */
box-shadow:
    0 0 0 10px hsl(0, 0%, 80%),
    0 0 0 15px hsl(0, 0%, 90%);

width:200px;
height:200px;
margin:20px;
img{
    width:200px;
    height:200px;
}
`

type Articles = {
    userId: number;
    id: number;
    body: string;
    title: string;
    url: string;
}

export const Entities: FC = () => {

    const [filter, setFilter] = useState<string>('');
    const [articles, setArticles] = useState<Articles[]>([])
    const filterChange = (ev: React.FormEvent<HTMLInputElement>) => { setFilter((ev.target as HTMLInputElement).value); }
    const filterTitle = ({ title }: { title: string }) => {
        if (filter === '') return true
        return title.toLowerCase().includes(filter.toLowerCase());
    }

    const showArticles = articles.filter(filterTitle).slice(0, 24);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => response.json())
            .then((json) => {
                setArticles(json);

            });
    }, [])

    console.log(document.getElementById("xd"));


    return (

        <>< MainWrap>
            <Wrap1>
                <h1>ENTITIES</h1>
                <Wrap1>
                <TaskFilter inputType={'search'} align={'left'} placeholder={'Filter by title...'} onChange={filterChange} />
                </Wrap1>
            </Wrap1>

            <Wrap2>
                        
                {showArticles.map(article => (
                    <Entis>
                    <img src={article.url}></img>
                    </Entis>
                ))}
            </Wrap2>
            </MainWrap>
        </>
    );
};
export default Entities;


