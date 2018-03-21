import React, { Component } from 'react'
import bishop from '../assets/bishop.png'
import styled from 'styled-components'

export default class Bishop extends Component {
  render () {
    return (
      <B>
        <img src={bishop} alt='knight' />
      </B>
    )
  }
}

const B = styled.div`
  z-index: 10;
`