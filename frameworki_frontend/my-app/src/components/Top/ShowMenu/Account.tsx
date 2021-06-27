import {FC} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";



const Wrapper = styled.div`
border-top:1px grey solid;
    width:100%;
    height:152px;
    display: flex;
    flex-direction: column;
    font-family: Tahoma;
    #Account{
        margin-left:10px;
        margin-top:8px;

    }
    font-size:18px;
`;
const Profile = styled.div` 
    margin-left: 10px;
    margin-top: 5px;
    margin-right: 15px;
    display:flex;
    flex-direction:row;
    align-items:center;
    img{
        margin-top: 5px;
        height:40px;
        width:auto;
        margin-right: 10px;
    }
    p{

        margin-bottom:5px;
    }
    a{
        text-decoration:none;
        font-weight: bold;
    }
    #NameAndLink{
        
        margin-left:8px;
    }
    div{
        display:flex;
        flex-direction:column;
    }
`;

const PrivacyAndSettings = styled.div`
    
    display:flex;
    flex-direction:column;
    width:100%;
    height:150px;
    #Privacy,#Settings{
        display:flex;
        align-items:center;
        margin-top: 10px;
        margin-left: 15px;
        img{
            height:25px;
            margin-right:20px;
        }
        a{
            text-decoration:none;

        }
    }
`;

const Account: FC = () => {
	return (
        <Wrapper>
            <p id="Account">Account</p>

            <Profile>
                <img src="./media/user.jpg"></img>
                <div id="NameAndLink">
                    <p id="Name">John Doe</p>
                    <Link to="/profile"><p style={{fontSize:"12px"}}>See profile</p></Link>
                </div>
            </Profile>

            <PrivacyAndSettings>
                <div id="Privacy">
                    <img src="./media/icons/privacy.png"></img>
                    <Link to="privacy">Privacy</Link>
                </div>
                <div id="Settings">
                    <img src="./media/icons/settings.png"></img>
                    <Link to="settings">Settings</Link>
                </div>
            </PrivacyAndSettings>

        </Wrapper>
	)
}

export default Account;