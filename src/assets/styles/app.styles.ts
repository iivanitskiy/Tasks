import styled, {keyframes} from 'styled-components'

export const SApp = styled.div`
  text-align: center;
`

export const SHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const SLogo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${spin} infinite 20s linear;
  }
`

export const SLink = styled.a`
  color: #61dafb;
`
export const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`

export const Container = styled.div`
  display: flex;
	justify-content: space-evenly;
	align-items: center;
  padding: 15px;
  background-color: #fff;
  border-radius: 5px;
`

export const Title = styled.h1`
  font-weight: 300;
`
export const Text = styled.p`
  font-size: 16px;
`

