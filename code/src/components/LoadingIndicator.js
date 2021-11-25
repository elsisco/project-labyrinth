import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../animations/loading-double'
import { useSelector } from 'react-redux'
// import { getColors } from 'lottie-colorify';
import { flatten } from 'lottie-colorify'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  z-index: 3;
`

export const LoadingIndicator = () => {
  const loading = useSelector((store) => store.ui.loading)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: flatten('#000000', animationData),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  // animationData flatten replaces all colors with one color, #000000
  // console.log(getColors(animationData));

  return (
    <>
      {loading && (
        <Wrapper>
          <Lottie options={defaultOptions} height={300} width={300} />
        </Wrapper>
      )}
    </>
  )
}
