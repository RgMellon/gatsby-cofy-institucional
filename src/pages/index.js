import React from 'react'

import {
  Container,
  Header,
  Content,
  LeftSide,
  RightSide,
  MethodsWork,
  ContentHeader,
  DetailMethods,
  MainButton,
  PlatformDevelopment,
  Grid,
  Title,
  Card,
  ContainerTecs,
  Ball,
  ContentTitle,
  WeAre,
  LogoCody,
  SeparatorHorizontal,
  TalkToUs,
} from './styles'

import Menu from '../components/Menu'
import Contact from '../components/Contact'

import imageHeader from '../../src/assets/image-header.jpg'
import mobile from '../../src/assets/mobile.jpg'
import desktop from '../../src/assets/desktop.jpg'
import web from '../../src/assets/web.jpg'
import logo from '../../src/assets/icon.png'
import wp from '../../src/assets/wp-icon.svg'

export default function pages() {
  return (
    <Container>
      <Menu />

      <Content>
        <Header>
          <LeftSide>
            <h1>Quer tirar sua ideia do papel ?</h1>
            <h2>Chegou ao lugar certo !</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem
            </p>
            <MainButton> Entre em contato </MainButton>
          </LeftSide>
          <RightSide>
            <img src={imageHeader} alt="header-image" />
          </RightSide>
        </Header>
      </Content>

      <MethodsWork>
        <Content>
          <ContentHeader>
            <h3>Modo que trabalhamos </h3>
            <p> Tudo começa com um MVP </p>
          </ContentHeader>

          <DetailMethods>
            <MainButton>Reunião inicial</MainButton>
            <MainButton>Alocação do time</MainButton>
            <MainButton>Mockups</MainButton>
            <MainButton>Desenvolvimento</MainButton>
          </DetailMethods>
        </Content>
      </MethodsWork>

      <PlatformDevelopment>
        <Content>
          <Title> O que desenvolvemos </Title>

          <Grid col={3}>
            <Card>
              <img src={mobile} alt="mobile image" />
              <footer>
                <p> Desenvolvimento Mobile</p>
              </footer>
            </Card>
            <Card light>
              <img src={web} alt="mobile image" />
              <footer>
                <p> Desenvolvimento Web</p>
              </footer>
            </Card>
            <Card>
              <img src={desktop} alt="mobile image" />
              <footer>
                <p> Desenvolvimento Desktop</p>
              </footer>
            </Card>
          </Grid>
        </Content>
      </PlatformDevelopment>

      <ContainerTecs>
        <Content>
          <ContentTitle>
            <Title light> Tecnologias usada por nós </Title>
          </ContentTitle>
          <Grid col={5}>
            <Ball>
              <img
                src="https://miro.medium.com/max/800/1*Pk2mZo1cBqfVqQi-mtAkuA.png"
                alt="logo"
              />
            </Ball>
            <Ball>
              <img
                src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/landscape/nodejslogo.png"
                alt="node logo"
              />
            </Ball>
            <Ball>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                alt="react-logo"
              />
            </Ball>
            <Ball>
              <img
                src="https://surround-bg.com/wp-content/uploads/2018/10/laravel-logo.png"
                alt="laravel logo"
              />
            </Ball>
            <Ball>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPlTuhTJ7UaZndOn_qN4cknI7xhkIRog9B8IZpOXYNSMA0YUsH"
                alt="digital-ocean"
              />
            </Ball>
            <Ball>
              <img
                src="https://seeklogo.com/images/G/gatsby-logo-1A245AD37F-seeklogo.com.png"
                alt="gatsby logo"
              />
            </Ball>
            <Ball>
              <img
                src="https://1.bp.blogspot.com/-uWcJtv9kELE/VrOY_xn7jZI/AAAAAAAAAT4/zmEnNcLUOAo/s1600/logo-immutable.png"
                alt="js logo"
              />
            </Ball>
            <Ball>
              <img
                src="https://logodownload.org/wp-content/uploads/2016/10/php-logo.png"
                alt="php logo"
              />
            </Ball>
            <Ball>
              <img
                src=" https://kyetoy.files.wordpress.com/2014/03/postgresql-logo.png"
                alt="postgres logo"
              />
            </Ball>
            <Ball>
              <img
                src="https://www.mundodocker.com.br/wp-content/uploads/2015/06/docker_facebook_share.png"
                alt="docker logo"
              />
            </Ball>
          </Grid>
        </Content>
      </ContainerTecs>

      <WeAre>
        <Content>
          <Title> Somos a CofyCode, mas pode nos chamar de Cofy</Title>

          <p>
            A Cofy é uma software house nascida no interior do Brasil, em
            Araçatuba / SP. Com o objetivo de entregar o maior valor para nossos
            clientes.
          </p>
          <p>
            A equipe Cofy irá lhe ajudar em todas as etapas do desenvolvimento
            de seu produto, utilizando de varias metodologias testadas no
            mercado, indo dos primeiros passos, até o mvp. Sendo que todas as
            etapas passarão por aprovações de nossos clientes.
          </p>
          <p>
            Nossa especialidade é em desenvolvimento web e aplicações mobile,
            utilizamos as melhores tecnologias que estão presentes no mercado.
            Trabalhamos também em empresas pequenas ou grande porte para ajudar
            no desenvolvimento de produtos. Então se quiser uma boa aplicação
            você ja sabe com quem falar :D
          </p>
        </Content>

        <LogoCody>
          <img src={logo} alt="" />
        </LogoCody>
      </WeAre>

      <TalkToUs>
        <Content>
          <SeparatorHorizontal />

          <Title> Vamos tomar um café </Title>

          <Grid col={2}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.222757859361!2d-50.06230698526144!3d-21.420487585787495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9496019e1dfdbcd3%3A0xf9e4bf82979f00fd!2sR.%20Alberto%20Vieira%20Bonfim%2C%20Pen%C3%A1polis%20-%20SP%2C%2016300-000!5e0!3m2!1spt-BR!2sbr!4v1585433041117!5m2!1spt-BR!2sbr"></iframe>

            <button>
              <img src={wp} alt="icon-wp" />
            </button>
          </Grid>
        </Content>
      </TalkToUs>

      <Contact />
    </Container>
  )
}
