import {FC} from 'react';
import styled from 'styled-components';
import useDropdown from "react-dropdown-hook";
import { ShowMenu } from './ShowMenu/ShowMenu';

// const Wrapper = styled.div`
//   position: absolute;
//   top: 24px;
//   left: 0;
//   background: grey;
//   padding: 16px;
//   border: 1px solid;
//   width: 215px;
// `;
const MenuWrapper = styled.div`
  display: flex;
  cursor: pointer;
  position: relative;
  align-items: center;
  width: 200px;
  justify-content: space-between;
  margin-left: -1020px;
  font-size:22px;
  
`;
const LeftSide = styled.div`

`;
const CustomImg = styled.img`
padding:0 20px
`;


export const ExpandedMenu: FC = () => {
    const [wrapperRef, dropdownOpen, toggleDropDown] = useDropdown();

    const menuHandler = () => {
        toggleDropDown();
    }

    return(
        <MenuWrapper ref={wrapperRef}>
        <LeftSide onClick={menuHandler}>
        <CustomImg src="./media/icons/house.png" alt="search" title=""/>
            <span>Home</span>
        </LeftSide >
        <img onClick={menuHandler} src ="./media/icons/arrow-down.png" alt = ""/>
        {dropdownOpen &&
        <ShowMenu/>
        }
    </MenuWrapper>
    );

};