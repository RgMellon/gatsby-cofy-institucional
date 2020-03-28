import React from 'react'

import { Container, Content, Separator } from './styles'

import logo from '../../assets/icon.png'

export default function Menu() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Logo cofyCode" />

        <Separator />

        <ul>
          <li>INICIO</li>
          <li>QUEM SOMOS</li>
          <li>FALE CONOSCO</li>
          <li> TECNOLOGIAS </li>
        </ul>
      </Content>
    </Container>
  )
}
