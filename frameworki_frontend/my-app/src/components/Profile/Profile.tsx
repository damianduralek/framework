import { FC } from 'react';
import styled from 'styled-components'
import { EditText, EditTextarea } from 'react-edit-text';
import React from 'react';

const Wrap = styled.div`
margin: 0 auto;

width:30%
`
const Wrap1 = styled.div`
display:flex;
height:60%;
`
const Top = styled.div`
-webkit-box-shadow: 0 10px 6px -6px #777;
     -moz-box-shadow: 0 10px 6px -6px #777;
          box-shadow: 0 10px 6px -6px #777;
display:block;
width:100%;
height:500px;
background-color:#f0f0f0;
margin-top: 15px;
`
const Top2 = styled.div`
-webkit-box-shadow: 0 10px 6px -6px #777;
     -moz-box-shadow: 0 10px 6px -6px #777;
          box-shadow: 0 10px 6px -6px #777;
display:block;
width:100%;
height:500px;
background-color:#f0f0f0;

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
const Wrap3 = styled.div`
height:20%;
display:block;
`
const Wrap4 = styled.div`
height:20%;
display:flex;
margin-bottom:65px;

img{
    margin-top:20px;
}
`
const Ho1 = styled.h1`
font-size:20px;
padding:15px;
`
const Ho2 = styled.h2`
color:#0909a9;
font-size:18px;
padding:15px;
`
const Po1 = styled.p`
font-size:17px;
padding:20px;
`
export const Profile: FC = () => {
    return (
        <React.Fragment>
        <Wrap>

            <Top>
            <Wrap1>
                <Image1><img src='/media/sunset.jpg' alt="sunset" height="100%" width="100%"></img></Image1>
            </Wrap1>    
            <Wrap2>
                <Image2><img src = "./media/user.jpg"  style={{width:"200px", height:"200px", display:'flex'}}></img></Image2>
                <Wrap3 > 
                <Wrap4 > 
            <EditText style={{margin:"20px", fontSize:"20px"}}
            name="textbox1"
            defaultValue="Damian Durałek"
            />
            <img src="./media/edit.png" alt="edit" height="20px" width="20px"  />
            </Wrap4> 
            <EditText  style={{margin:"25px"}}
            name="textbox1"
            defaultValue="Polska"
            />
            <EditText  style={{margin:"25px"}}
            name="textbox1"
            defaultValue="Kraków"
            />
            <EditText  style={{margin:"25px"}}
            name="textbox1"
            defaultValue="Fiołkowa"
            />
            </Wrap3>
            
           

            
            </Wrap2>
            
            
            </Top>
            <Top2>
            <Ho1>Panel informations</Ho1>
            <Po1>Hourly fee</Po1>
            <Ho2>630$/hour (Negociated)</Ho2>
            <Po1>Terms and condidtions</Po1>
            <Ho2>Monthly 10k$ retainer - see Jeanny Smith</Ho2>
            <Ho1>Services and projects</Ho1>
            <Ho2>Corporate MA and international acquisitions</Ho2>
            </Top2>

        </Wrap>
        </React.Fragment>
    );
}
export default Profile;