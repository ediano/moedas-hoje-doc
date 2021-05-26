import styled from 'styled-components'

type Props = {
  as?: 'div' | 'section' | 'main' | 'header' | 'footer'
}

export const Container = styled('div')<Props>`
  width: 90%;
  max-width: 1200px;
  margin: auto;

  border: 1px solid #ccc;
`
