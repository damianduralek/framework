import { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Wrapper } from '../StyledHelpers/Components';




const InnerWrapper = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  height: 170px;
  width: 250px;
  background: #f0f0f0;
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12)
  
  
`;
const InnerWrapper2 = styled.div`
  margin-top: 1px;
  margin-left: 20px;
  height: 70px;
  width: 250px;
  background: white;
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12)
`;

const Photo = styled.div`
    margin-left: 80px;
`;
const NameAndTitle = styled.div`
    margin-top: 15px;
    text-align: center;
`;
const YourNetwork = styled.div`
margin-left: 10px;
`;

const YourPublications = styled.div`
margin-left: 10px;
  margin-top: 10px;
`;

const PEE = styled.div`

  margin-left: 40px;
  margin-top: 20px;
`;

const EmployeImg = styled.img`
border-radius:50%;
width:100px;
`;

export const LeftMenu: FC = () => {

    return (
        <Wrapper>
            <InnerWrapper>
                <Photo>
                    <EmployeImg src="./media/user.jpg"/>
                </Photo>
                <NameAndTitle>
                    <div>
                      <button style={{fontSize:'15px', fontFamily:'sans-serif', border:'none', cursor: 'pointer', overflow:'hidden', outline:'none'}}>
                          <h1>John Doe</h1>
                      </button>
                    </div>
                    <div>
                        <br/> <h3 style={{color:'darkgrey'}}>Job Title - Company</h3>
                    </div>
                </NameAndTitle>

            </InnerWrapper>
            <InnerWrapper2>
                <YourNetwork>
                   <div style={{marginLeft:'5px'}}>
                       <button style={{background:'white', border:'none', cursor:'pointer', }}>
                           <img src = "./media/icons/network.png" alt = "" style={{marginTop:'px'}}/>
                           <a style={{marginLeft:'10px'}}>Your Network</a>
                       </button>

                       <button style={{width:'28px', marginLeft:'71px', cursor: 'pointer', background:'white', height:'20px', borderRadius:'5px'}}>
                           <img src = "./media/icons/user-plus.png" alt ="" style={{}}/>
                       </button>
                   </div>
                </YourNetwork>
                <YourPublications>
                    <div style={{marginLeft:'5px'}}>
                        <button style={{background:'white', border:'none', cursor:'pointer', }}>
                        <img src = "./media/icons/publications.png" alt = ''/>
                            <a style={{marginLeft:'10px'}}>Your Publications</a>
                        </button>

                      <button style={{width:'28px', marginLeft:'50px', cursor: 'pointer', background:'white', height:'20px', borderRadius:'5px'}}>
                          <img src = "./media/icons/plus.png" alt = "" style={{}}/>
                      </button>
                    </div>
                </YourPublications>

            </InnerWrapper2>
            <PEE>
                <div>
                    <button style={{border:'none', background:'none', marginTop:'10px',cursor:'pointer'}}>
                        <img src = "./media/icons/house.png" alt = "" style={{height:'18px'}}/>
                        <a style={{marginLeft:'15px', fontSize:'18px'}}>Publications</a>
                    </button>
                </div>
                <div>
                    <button style={{border:'none', background:'none', marginTop:'10px',cursor:'pointer'}}>
                        <img src = "./media/icons/ecosystem.png" alt ="" style={{height:'25px'}}/>
                        <a style={{marginLeft:'15px', fontSize:'18px'}}>Ecosystem</a>
                    </button>
                </div>
                <Link to="entities">
                <div>
                    <button style={{border:'none', background:'none', marginTop:'10px',cursor:'pointer'}}>
                        <img src = "./media/icons/house.png" alt = ""/>
                        <a style={{marginLeft:'15px', fontSize:'18px'}}>Entities</a>
                        
                    </button>
                </div>
                </Link>

            </PEE>

        </Wrapper>
    )

}