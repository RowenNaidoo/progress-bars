import React from 'react'
import styled, { keyframes } from 'styled-components'

const PlaceLoader = () => (
  <LinearBackground>
    <Seperator top='40' />
    <Seperator top='90' />
    <Seperator top='140' />
  </LinearBackground>
)

const placeHolderShimmer = keyframes`
  0%{
      background-position: -468px 0
  }
  100%{
      background-position: 468px 0
  }
`

const LinearBackground = styled.div`
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${placeHolderShimmer};
  animation-timing-function: linear;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 1000px 104px;
  height: 200px;
  position: relative;
  overflow: hidden;
`

const Seperator = styled.div`
  background: #FFF;
  width: 100%;
  height: 10px;
  position: absolute;
  top:  ${props => props.top}px;
  left: 0px;
`

export default PlaceLoader