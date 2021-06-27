import React, { FC } from 'react';
import styled from 'styled-components';

import { TopBar } from '../Top/Top';
import { LeftMenu } from '../LeftMenu/LeftMenu';
import { Wrapper } from '../StyledHelpers/Components';
import { Colors } from '../StyledHelpers/Colors';
import {HomePage} from "../Home/Home";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import { Entities } from '../Entities/Entities';
import { NotFound } from '../NotFound/NotFound';
import { Contract } from '../Contract/Contract';
import { Profile } from '../Profile/Profile';

const Content = styled.div`
  height: 1000px;
  display: flex;
`;

const MainPage: FC = () => {
    return (
        <Router>
        <Wrapper>
            <TopBar/>
            <Content>
                <LeftMenu/>
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route path="/entities">
                        <Entities/>
                    </Route>
                    <Route path="/contract">
                        <Contract/>
                    </Route>
                    <Route path="/profile">
                        <Profile/>
                    </Route>
                    <Route>
                        <NotFound/>
                    </Route>
                    
                    
                </Switch>

            </Content>

        </Wrapper>
        </Router>
    );
};

export default MainPage;
