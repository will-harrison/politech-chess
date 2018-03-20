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

        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />

        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />

        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />

        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />

        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />

        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />

        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
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
`

const Box = styled.div`
  height: 100px;
  width: 100px;
  background-color: #336699;

  &:nth-child(2n) {
    background-color: #fff;
  }
`

export default App
