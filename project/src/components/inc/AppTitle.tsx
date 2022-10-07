import React from 'react'
import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';

const animation = keyframes`${zoomIn}`;
export const AnimDiv = styled.div`
  animation: 1s ${animation};
`;

function AppTitle( item: { title: string } ) {
  return (
    <>
        <AnimDiv>
            <h2>{item.title}</h2>
        </AnimDiv>
    </>
  )
}

export default AppTitle