import React, { FC } from 'react';
import styled from 'styled-components'


import {Wrapper} from "../StyledHelpers/Components";
import {Colors} from "../StyledHelpers/Colors";
import { ExpandedMenu } from './DropDown';
import { fontSize } from '../StyledHelpers/FontSizes'
import { RightIcons } from './Icons/Icons';






const InnerWrapper = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${fontSize["18"]};
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12)
  
  
`;



const InputWrapper = styled.div`
  align-content: center;
  display:flex;
`;

const LeftLogo = styled.div`
  justify-self: start;
  margin-left: 10px;
  cursor: pointer;
    
`;

const SearchField = styled.div`
  width: 250px;
  padding: 8px;
  margin-left: -350px;
  
`;

const SearchButton = styled.div`
  height: 30px;
  color: white;
  padding: 3px;
  font-size: 30px;
  cursor: pointer;
  margin-top: 2px;
  margin-left: 140px;
  position: absolute;
  
  `;






export const TopBar: FC = () => {

    return (
        <Wrapper>
            <InnerWrapper>

                <LeftLogo>
                    <img src="./media/logo.png" alt="logo" height="40px" />
                </LeftLogo>
                <ExpandedMenu>
                </ExpandedMenu>
               

                <InputWrapper>
                    <SearchField>
                        <input type="text" placeholder="Search Legalcluster" style={{width:'500px', height:'20px'}}/>
                    </SearchField>

                    <SearchButton>
                        <img src="./media/icons/search.png" alt="search" />
                    </SearchButton>
                </InputWrapper>

                <RightIcons>
                </RightIcons>
            </InnerWrapper>
        </Wrapper>
    );
};
export default TopBar

