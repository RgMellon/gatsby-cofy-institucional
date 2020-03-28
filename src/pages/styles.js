import styled from 'styled-components'

export const Container = styled.div`
  background: #fff;
`

export const Header = styled.header`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  margin-top: 100px;
  padding-bottom: 20px;
  /* padding: 40px; */
  /* section {
    margin-top: 40px;
    position: relative;
    margin-bottom: 40px;
  } */
`

export const Content = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 1155px;
`

export const LeftSide = styled.section`
  h1 {
    color: #707070;
    font-size: 35px;
  }

  h2 {
    color: #707070;
    font-size: 30px;
  }

  p {
    margin-top: 20px;
    color: #707070;
    font-size: 16px;
    font-weight: 200;
  }
`

export const RightSide = styled.section`
  img {
    width: 100%;
  }
`

export const MethodsWork = styled.section`
  background: ${props => props.theme.primary};
  padding: 40px 0px;
`

export const ContentHeader = styled.div`
  h3 {
    color: #fff;
    font-size: 30px;
  }

  p {
    color: #fafafa;
    font-size: 16px;
    font-weight: 200;
    margin-top: 10px;
  }
`

export const DetailMethods = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* height: 200px; */
`

export const MainButton = styled.button`
  background: #40433d;
  color: #fff;
  font-size: 15px;
  padding: 13px;
  margin-top: 40px;
  border-radius: 8px;
  width: 200px;
  border: 0px;
`

export const PlatformDevelopment = styled.section``

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.col}, 1fr);
  grid-gap: 15px;
  margin-top: 30px;
  padding-bottom: 20px;
`

export const Title = styled.h3`
  margin-top: 30px;
  color: ${props => (props.light ? '#fff' : '#707070')};
  font-size: 30px;
`

export const Card = styled.div`
  width: 100%;
  border-radius: 8px;
  border: 1px solid #d6d6d6;

  img {
    padding: 20px;
    width: 100%;
  }

  footer {
    height: 80px;
    width: 100%;
    background: ${props => (props.light ? '#DDC79E' : '#707070;')};
    display: flex;

    justify-content: center;
    align-items: center;

    p {
      color: #fff;
      font-weight: 300;
    }
  }
`

export const ContainerTecs = styled.section`
  width: 100%;
  background: ${props => props.theme.primary};
`

export const Ball = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 20px;
  background: #fff;
  margin-bottom: 40px;
  /* padding: 10px; */

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.2s ease-in-out;

  img {
    width: 100px;
  }

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`

export const ContentTitle = styled.div`
  margin-top: 20px;
  padding: 20px 0px;
`

export const WeAre = styled.section`
  p {
    line-height: 26px;
    margin-top: 40px;
    color: #999;
    font-weight: 200;
    text-align: start;
  }

  padding-bottom: 30px;
  position: relative;
  height: 600px;
`

export const LogoCody = styled.div`
  position: absolute;
  right: 100px;
  top: 350px;

  img {
    width: 200px;
    border-radius: 100px;
  }
`

export const SeparatorHorizontal = styled.div`
  width: 100%;
  height: 1px;
  background: #d6d6d6;
`

export const TalkToUs = styled.section`
  iframe {
    width: 100%;
    height: 400px;
    border: 0px;
  }

  img {
    width: 60%;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }

  button {
    border: 0px;
  }
`
