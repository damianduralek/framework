import { FC, useState, useEffect, ChangeEvent } from "react";
import styled from "styled-components";
import React, { Component } from 'react';
import { isTemplateSpan } from "typescript";
import TaskFilter from "../Filters";
import Pagination from "../Pagination";


const ResumeWorkWrapper = styled.div`

display: flex;
width: auto;
height: auto;
padding: 15px;
`;

const MainContentWrapper = styled.div`

display: flex;
flex-direction: column;
width: 100%;
height: auto;
gap: 15px;
`;

const ResumeWorkHeader = styled.div`
width: 20%;
height: auto;
& > h1 {
    font-family: sans-serif;
    font-weight: bold;
    color: #4d4d4d;
    font-size: 25px;
    margin-bottom: 10px;
    margin-left: 15px;
}
`;

const ResumeWorkDiv = styled.div`
display: flex;
flex-direction: column;
width: auto;
height: auto;
background-color: white;
box-shadow: 0px 2px 3px #999;
`;

const WorkHeader = styled.div`
width: 20%;
height: auto;
& > h1 {
    font-family: Helvetica;
    font-weight: bold;
    color: #2679bf;
    font-size: 15px;
    padding: 10px;
    margin-left: 7px;

}
`;

const WorkContent = styled.div`

height: auto;
& > p {
    font-family: Helvetica;
    color: #4d4d4d;
    font-size: 13px;
    margin-left: 15px;
    line-height: 1.5;
    margin-top:5px;
    margin-bottom:5px;
}
`;

const WorkAuthors = styled.div`

display: flex;
flex-direction: row;
width: 60%;
height: auto;
margin-left: 15px;
padding: 5px;
align-items: center;
& > #dot {
    width: 3px;
    margin-left: 15px;
    margin-right: 20px;
}
& > img {
    width: 15px;
}
& > p {
    font-size: 11px;
    font-family: Helvetica;
    color: #4d4d4d;
    margin-left: 10px;
}
& > span {
    font-size: 11px;
    font-family: Helvetica;
    color: #7a7a7a;
}
`;
type Articles = {
    userId: number;
    id: number;
    body: string;
    title: string;
    url:string;
}
export const ResumeWork: FC = () => {

    const [filter, setFilter] = useState<string>('');
    const [articles, setArticles] = useState<Articles[]>([])
    const [calcPage, setPage] = useState<number>(0);
    const [Pages, setPages] = useState<number>(0);


 const filterChange = (ev: React.FormEvent<HTMLInputElement>) => {setFilter((ev.target as HTMLInputElement).value);}
 const filterTitle = ({ title }: { title: string }) => {
    if (filter === '') return true
    return title.toLowerCase().includes(filter.toLowerCase());
    }
const paginationPage = (selectedItem: { selected: number }) => {setPage(selectedItem.selected); }
const showArticles = articles.filter(filterTitle).slice(calcPage * 10, (calcPage + 1) * 10);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => {
            setArticles(json);
            setPages(Math.ceil(json.length / 10));
            });
    }, [])
    
    return (
      <>
      
        <ResumeWorkWrapper>
            <MainContentWrapper>
                <ResumeWorkHeader>
                    <h1>Resume your work</h1>
                    <TaskFilter inputType={'search'} align={'left'} placeholder={'Filter by title...'} onChange={filterChange} />
                </ResumeWorkHeader>
                
            {showArticles.map(article => ( 
                <ResumeWorkDiv>
                <WorkHeader>
                    <h1>{article.title}</h1>
                </WorkHeader>
                <WorkContent>
                    <p>{article.body}</p>
                </WorkContent>
                <WorkAuthors>
                <img src='./media/icons/comments.png' alt="podcast"></img>
                <p>Subsid. corp.</p>
                <img id="dot" src='./media/icons/publications.png' alt="dot"></img>
                <img src='./media/icons/people.png' alt="podcast"></img>
                <p>Corporate</p>
                <img id="dot" src='./media/icons/publications.png' alt="dot"></img>
                <span>Updated 3 days ago by John Doe</span>
                </WorkAuthors>
                </ResumeWorkDiv>

                ))}
                <Pagination marginPagesDisplayed={1} pageCount={Pages} pageRangeDisplayed={2} onPageChange={paginationPage} />
                    
            </MainContentWrapper>
        </ResumeWorkWrapper>
      </>
    );
  };
  export default ResumeWork;


