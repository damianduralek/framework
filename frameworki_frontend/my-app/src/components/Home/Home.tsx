import React, { FC } from 'react';
import styled from 'styled-components';
import Publications from './Publications';
import Workspaces from './Workspaces';
import ResumeWork from './ResumeWork';

const Wrap = styled.div`
box-sizing: border-box;
    padding: 0px;
    margin: 0;
    width:100%;
`

export const HomePage: FC = () => {

    return (
        <Wrap>
          <Publications>
          </Publications>
          <Workspaces>
          </Workspaces>
          <ResumeWork>
          </ResumeWork>
        </Wrap>
    );
}