import { FC } from 'react';
import styled from 'styled-components'
import ResumeWork from '../Home/ResumeWork';
import { Wrapper } from '../StyledHelpers/Components';

const Wrap = styled.div`
margin: auto;
display:block;
width:40%
`
const Wrap1 = styled.div`
display:flex;
height:80%;
`
const Top = styled.div`
display:block;
width:100%;
height:300px;
background-color:#f0f0f0;
margin: 15px;
`
const Image1 = styled.div`
height:100%;
`
const Image2 = styled.div`

`
const Text = styled.div`
margin:15px;
display:flex;
font-size:25px;
`
const Wrap2 = styled.div`
height:20%;
display:flex;
`
export const Contract: FC = () => {
    return (
        <Wrap>

            <Top>
            <Wrap1>
                <Image1><img src='/media/sunset.jpg' alt="sunset" height="100%" width="100%"></img></Image1>
            </Wrap1>    
            <Wrap2>
                <Image2><img src = "./media/icons/entities.png"  style={{margin:'20px', display:'flex'}}></img></Image2>
            <Text>Corporate holdings</Text>
            </Wrap2>
            
            
            </Top>

            <ResumeWork/>

        </Wrap>
    );
}