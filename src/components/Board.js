import React, { Component } from 'react'
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <Board>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />

        <Box odd/>
        <Box odd/>
        <Box odd/>
        <Box odd/>
        <Box odd/>
        <Box odd/>
        <Box odd/>
        <Box odd/>

        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />

        <Box odd/>
        <Box odd/>
        <Box odd/>
        <Box odd/>
        <Box odd/>
        <Box odd/>
        <Box odd/>
        <Box odd/>

        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />

        <Box odd/>
        <Box odd/>
        <Box odd/>
        <Box odd/>
        <Box odd/>
        <Box odd/>
        <Box odd/>
        <Box odd/> 

        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />

        <Box odd/>
        <Box odd/>
        <Box odd/>
        <Box odd/>
        <Box odd/>
        <Box odd/>
        <Box odd/>
        <Box odd/>
      </Board>
    );
  }
}

const Board = styled.div.attrs({ className: 'avenir' }) `
  display: grid;
  grid-gap: 0;
  grid-template-columns: repeat(8, 100px);
  grid-template-rows: repeat(8, 100px);
  grid-auto-flow: row;
  justify-content: center;
  align-items: center;
`

const Box = styled.div`
  height: 100px;
  width: 100px;
  background-color: #fff;

  &:nth-child(${props => props.odd ? 'odd' : 'even'}) {
    background-color: #336688;
  }
`

export default App
