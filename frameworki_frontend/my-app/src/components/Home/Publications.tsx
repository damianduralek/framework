import { FC, useState, useEffect } from "react";
import styled from "styled-components";


const PublicationsWrapper = styled.div`
-webkit-box-shadow: 0 10px 6px -6px #777;
     -moz-box-shadow: 0 10px 6px -6px #777;
          box-shadow: 0 10px 6px -6px #777;
display: flex;
width: 60%;
height: auto;
padding: 15px;

`;

const MainContentWrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%; 
height: auto;
`;

const MainContentHeader = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: auto;
width: 100%;
`;

const PublicationsDiv = styled.div`
display: flex;
width: 100%;
height: auto;
& > img {
    width: 300px;
    height: 100%;
}
`;

const PublicationsContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: left;
width: 100%;
height: 100%;
align-items: center;
background-color: white;
`;

const ContentHeaderText = styled.div`
width: 92%;
height: auto;
text-align: left;
& > p {
    font-family: Helvetica;
    font-weight: bold;
    color: #4d4d4d;
    font-size: 20px;
}
`;

const ContentText = styled.div`
width: 92%;
height: auto;
text-align: left;
& > p {
    font-family: Helvetica;
    font-weight: bold;
    color: #5353cc;
    font-size: 15px;
}
`;

const PublicationsDIV = styled.div`
display: flex;
width: 92%;
padding: 5px;
& > img {
    width: 75px;
    height: 75px;
}
& > p {
    font-family: Helvetica;
    font-weight: bold;
    color: #4d4d4d;
    font-size: 15px;
    margin: 5px;
    line-height: 1.3;
}
`;

const  AuthorDataProfile = styled.div`

display: flex;
width: 92%;
height: auto;
flex-direction: column;
& > h1 {
    font-family: Helvetica;
    font-weight: bold;
    color: #4d4d4d;
    font-size: 15px;
    margin: 5px;
    line-height: 1.3;
}
`;

const AuthorData = styled.div`
display: flex;
align-items: center;
justify-content: left;
gap: 10px;
width: 100%;
height: auto;
margin-left: 5px;
& > img {
    height: 23px;
    width: 23px;
    border-radius: 30px;
}
& > p {
    font-size: 12px;
    font-weight: bold;
    color: #cac7c7;
    font-family: Helvetica;
}
& > span {
    font-size: 12px;
    font-weight: bold;
    color: #4d4d4d;;
}
`;


type Publications = {
    userId: number;
    id: number;
    body: string;
    title: string;
    url:string;
}

export const Publications: FC = () => {
    
    const [apiCon, setApi] = useState<Publications>()
    useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(res=>res.json())
    .then(json=>setApi(json))
 }, [])

 console.log(Publications)


    
    
    
    return (
        
      <>
      
        <PublicationsWrapper>
            <MainContentWrapper>
                
                <MainContentHeader>
                    <PublicationsDiv>
                        <img src='/media/skyscraper.jpg' alt="skyscraper"></img>
                            <PublicationsContent>
                                <ContentHeaderText>
                                <p>Latest publications</p>
                                </ContentHeaderText>
                                <PublicationsDIV>
                                <img src='/media/guywriting.jpg' alt="guy"></img>
                                <AuthorDataProfile>
                                <h1>{apiCon?.title}</h1>
                                <AuthorData>
                                <p>7 jan. 2020</p>
                                <img src='/media/user.jpg' alt="guy"></img>
                                <span>John Doe</span>
                                </AuthorData>
                                </AuthorDataProfile>
                                </PublicationsDIV>
                                <PublicationsDIV>
                                <img src='/media/guywriting.jpg' alt="guy"></img>
                                <AuthorDataProfile>
                                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit... and one more line for the demo</h1>
                                <AuthorData>
                                <p>7 jan. 2020</p>
                                <img src='/media/user.jpg' alt="guy"></img>
                                <span>John Doe</span>
                                </AuthorData>
                                </AuthorDataProfile>
                                </PublicationsDIV>
                                <PublicationsDIV>
                                <img src='/media/guywriting.jpg' alt="guy"></img>
                                <AuthorDataProfile>
                                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit... and one more line for the demo</h1>
                                <AuthorData>
                                <p>7 jan. 2020</p>
                                <img src='/media/user.jpg' alt="guy"></img>
                                <span>John Doe</span>
                                </AuthorData>
                                </AuthorDataProfile>
                                </PublicationsDIV>
                                <ContentText>
                                <p>See more publications</p>  
                                </ContentText>
                            </PublicationsContent>  
                    </PublicationsDiv>
                </MainContentHeader>
                <MainContentHeader>

                </MainContentHeader>
            </MainContentWrapper>
        </PublicationsWrapper>
      </>
    );
  };
  export default Publications;