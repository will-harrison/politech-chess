import React, { Component } from 'react'
import knight from '../assets/knight.png'
import styled from 'styled-components'

export default class Knight extends Component {
  render () {
    return (
      <K>
        <Img src={knight} alt='knight' />
      </K>
    )
  }
}

const K = styled.div`
  z-index: 10;
`
const Img = styled.img`
  height: 100px;
  width: 100px;
`