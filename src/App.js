import React, { Component } from 'react'
import styled from 'styled-components'
import Board from './components/Board'
import Bishop from './components/Bishop'
import Knight from './components/Knight'

class App extends Component {
  render() {
    return (
      <div>
        <Board>
          <Bishop position={{x: 1, y:1}} />
          <Knight position={{x: 2, y: 2}} />
        </Board>
      
      </div>
    );
  }
}

export default App
