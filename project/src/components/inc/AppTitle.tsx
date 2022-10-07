import React, { useContext } from 'react'
import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';
import { UserContext } from '../../UserContext';

const animation = keyframes`${zoomIn}`;
export const AnimDiv = styled.div`
  animation: 1s ${animation};
`;

function AppTitle( item: { title: string } ) {

  const { data, setData } = useContext(UserContext)
  setData( { title: data.title, color: '#db4618' } )

  return (
    <>
        <AnimDiv>
            <h2 style={{ color: data.color }}>{item.title}</h2>
        </AnimDiv>
    </>
  )
}

export default AppTitle