import React, { FC } from 'react';
import styled from 'styled-components'
import {Colors} from "../../StyledHelpers/Colors";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { Link } from 'react-router-dom';

import Account from './Account'

const Wrapper = styled.div`
position: absolute;
top: 24px;
left: 0;
background: white;
padding: 16px;
border: 1px solid;
width: 300px;
z-index:1;
font-size:20px;
font-family:sans-serif;
`;


const MenuItem = styled.div`
    width:90%;
    padding: 10px;
    img {
        height: 30px;
        width:30px;
        
    }
   
`;

const InnerWarpper = styled.div`
    width:100%;
    overflow-y:scroll;
    height:400px;
    flex-direction: column;
    a {
        text-decoration:none;
        color: ${Colors.black};
        margin:10px;

    }
`;

const FilterInput = styled.div`
width:100%;
height:50px;
display:flex;
justify-content:center;
align-items:center;
input{
border-radius:5px;
height: 20px;
width: 90%;
font-size: 18px;

}
`



export const ShowMenu: FC = () => {

    const [inputText, setInputText] = useState<string>('');
    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }

    return (
       <Wrapper>
            <FilterInput>
                <input type="text" value={inputText} onChange={inputHandler} placeholder="Filter..." />
            </FilterInput>
            <InnerWarpper>
                <MenuItem><p>Platform</p></MenuItem>
                {
                    'Home'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem ><img src='./media/icons/house2.png'/><Link to="/">Home</Link></MenuItem>
                }
                {
                    'Publication'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem>  <img src='./media/icons/publications.png'/> <a href="publication">Publication</a></MenuItem>
                }
                {
                    'People'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem> <img src='./media/icons/people.png'/> <a href="people">People</a> </MenuItem>
                }
                {
                    'Entities'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem> <img src='./media/icons/entities2.png'/> <Link to="entities">Entities</Link></MenuItem>
                }
                {
                    'Administration'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem> <img src='./media/icons/administration.png'/> <a href="administration">Administration</a></MenuItem>
                }
                <MenuItem><p>Workspaces</p></MenuItem>
                {
                    'Client contract'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem> <img src='./media/icons/entities2.png'/> <a href="client_contract">Client contract</a></MenuItem>
                }
                {
                    'Supplier contract'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem> <img src='./media/icons/entities2.png'/> <a href="supplier_contract">Supplier contract</a></MenuItem>
                }
                {
                    'Corporate'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem> <img src='./media/icons/entities.png'/> <a href="corporate">Corporate</a></MenuItem>
                }
                {
                    'Group norms'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem> <img src='./media/icons/people.png'/> <a href="group_norms">Group norms</a> </MenuItem>
                }
                {
                    'Real estate contracts'.toLowerCase().includes(inputText.toLowerCase()) && <MenuItem> <img src='./media/icons/entities.png'/> <a href="real_estate_contracts">Real estate contracts</a></MenuItem>
                }
            </InnerWarpper>
            <Account/>
        </Wrapper>

    );
}

