import { FC } from "react";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";


const WorkspacesWrapper = styled.div`
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
`;

const WorkspacesHeader = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: auto;
`;

const HeaderDiv = styled.div`
width: 20%;
height: auto;
& > h1 {
    font-family: Helvetica;
    font-weight: bold;
    color: #4d4d4d;
    font-size: 25px;
    margin-bottom: 10px;
    margin-left: 20px;
}
`;


const Item = styled.div`
-webkit-box-shadow: 0 10px 6px -6px #777;
     -moz-box-shadow: 0 10px 6px -6px #777;
          box-shadow: 0 10px 6px -6px #777;


  text-align:center;
  align-items: center;
  height: 250px;
  width: 100%;
  background-color:#e9ecef;
  color: #fff;
  margin: 15px;
  font-size: 2em;
  color: #59809a;
  & > #dot {
    width: 3px;
    margin-left: 15px;
    margin-right: 15px;
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

const Text = styled.div`
width: 100%;
marigin

`


//background-image: url("/media/skyscraper.jpg");
//background-size:cover;
//height:40%;
//width:100%;


export const Workspaces: FC = () => {
    return (
      <>
        <WorkspacesWrapper>
            <MainContentWrapper>
                <WorkspacesHeader>
                    <HeaderDiv>
                    <h1>Workspaces</h1>
                    </HeaderDiv>
                    
                </WorkspacesHeader>
                
                <Carousel isRTL={false} itemsToShow={6} showArrows={false} itemPosition={"START"} pagination={true}>
                <Item>
                <Link to="contract" style={{ textDecoration: 'none' }}><img src='/media/corporation.jpg' alt="corporation" height="70%" width="100%"></img></Link>
                  <Text>Client contract</Text>
                  <span>Updated 3 days ago by John Doe</span>
                  </Item>

                  <Item>
                  <Link to="contract" style={{ textDecoration: 'none' }}><img src='/media/contract.jpg' alt="contract" height="70%" width="100%"></img></Link>
                  <Text>Corporate</Text>
                  <span>Updated 3 days ago by John Doe</span>
                  </Item>

                  <Item>
                  <Link to="contract" style={{ textDecoration: 'none' }}><img src='/media/corporation.jpg' alt="corporation" height="70%" width="100%"></img></Link>
                  <Text>Client contract</Text>
                  <span>Updated 3 days ago by John Doe</span>
                  </Item>
                  
                  <Item>
                  <Link to="contract" style={{ textDecoration: 'none' }}><img src='/media/contract.jpg' alt="contract" height="70%" width="100%"></img></Link>
                  <Text>Corporate</Text>
                  <span>Updated 3 days ago by John Doe</span>
                  </Item>

                  <Item>
                  <Link to="contract" style={{ textDecoration: 'none' }}><img src='/media/corporation.jpg' alt="corporation" height="70%" width="100%"></img></Link>
                  <Text>Client contract</Text>
                  <span>Updated 3 days ago by John Doe</span>
                  </Item>

                  <Item>
                  <Link to="contract" style={{ textDecoration: 'none' }}><img src='/media/contract.jpg' alt="contract" height="70%" width="100%"></img></Link>
                  <Text>Corporate</Text>
                  <span>Updated 3 days ago by John Doe</span>
                  </Item>

                  <Item>
                  <Link to="contract" style={{ textDecoration: 'none' }}><img src='/media/corporation.jpg' alt="corporation" height="70%" width="100%"></img></Link>
                  <Text>Client contract</Text>
                  <span>Updated 3 days ago by John Doe</span>
                  </Item>

                  <Item>
                  <Link to="contract" style={{ textDecoration: 'none' }}><img src='/media/contract.jpg' alt="contract" height="70%" width="100%"></img></Link>
                  <Text>Corporate</Text>
                  <span>Updated 3 days ago by John Doe</span>
                  </Item>

                  <Item>
                  <Link to="contract" style={{ textDecoration: 'none' }}><img src='/media/corporation.jpg' alt="corporation" height="70%" width="100%"></img></Link>
                  <Text>Client contract</Text>
                  <span>Updated 3 days ago by John Doe</span>
                  </Item>

                  <Item>
                  <Link to="contract" style={{ textDecoration: 'none' }}><img src='/media/contract.jpg' alt="contract" height="70%" width="100%"></img></Link>
                  <Text>Corporate</Text>
                  <span>Updated 3 days ago by John Doe</span>
                  </Item>

                  <Item>
                  <Link to="contract" style={{ textDecoration: 'none' }}><img src='/media/corporation.jpg' alt="corporation" height="70%" width="100%"></img></Link>
                  <Text>Client contract</Text>
                  <span>Updated 3 days ago by John Doe</span>
                  </Item>

                  <Item>
                  <Link to="contract" style={{ textDecoration: 'none' }}><img src='/media/contract.jpg' alt="contract" height="70%" width="100%"></img></Link>
                  <Text>Corporate</Text>
                  <span>Updated 3 days ago by John Doe</span>
                  </Item>

                  <Item>
                  <Link to="contract" style={{ textDecoration: 'none' }}><img src='/media/corporation.jpg' alt="corporation" height="70%" width="100%"></img></Link>
                  <Text>Client contract</Text>
                  <span>Updated 3 days ago by John Doe</span>
                  </Item>

                  <Item>
                  <Link to="contract" style={{ textDecoration: 'none' }}><img src='/media/contract.jpg' alt="contract" height="70%" width="100%"></img></Link>
                  <Text>Corporate</Text>
                  <span>Updated 3 days ago by John Doe</span>
                  </Item>

                  <Item>
                  <Link to="contract" style={{ textDecoration: 'none' }}><img src='/media/corporation.jpg' alt="corporation" height="70%" width="100%"></img></Link>
                  <Text>Client contract</Text>
                  <span>Updated 3 days ago by John Doe</span>
                  </Item>
              
                </Carousel>
                
                
            </MainContentWrapper>
        </WorkspacesWrapper>
      </>
    );
  };
  export default Workspaces;