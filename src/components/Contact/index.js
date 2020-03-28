import React from 'react'

import { Container, Content } from './styles'

export default function Contact() {
  return (
    <Container>
      <Content>
        <h3> Gostou da gente ? entre em contato ;)</h3>

        <form action="">
          <input type="text" placeholder="Seu nome é ?" />
          <input type="text" placeholder="Seu nome é ?" />
          <select>
            <option selected="selected">
              Sua aplicação é um App, Web ou Desktop
            </option>
            <option> Web </option>
            <option> Aplicativo </option>
            <option> Desktop </option>
          </select>

          <textarea placeholder="Conte-nos detalhe sobre o projeto, estamos interessados! "></textarea>

          <button> Enviar </button>
        </form>
      </Content>
    </Container>
  )
}
