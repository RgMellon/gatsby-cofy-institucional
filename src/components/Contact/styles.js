import styled from 'styled-components'

export const Container = styled.div`
  background: ${props => props.theme.primary};
  width: 100%;
  margin-top: 40px;
`

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1155px;
  width: 100%;

  h3 {
    padding-top: 40px;
    color: #fff;
    font-size: 30px;
  }

  form {
    padding-bottom: 100px;

    select {
      width: 100%;
      height: 60px;
      border: 0px;
      background: #fff;
      margin-top: 30px;

      option {
        color: #707070;
        opacity: 0.7; /* Firefox */
        font-size: 16px;
      }
    }

    input {
      width: 100%;
      height: 60px;
      border: 0px;
      padding: 20px;
      border-radius: 8px;
      margin-top: 30px;

      &::placeholder {
        color: #707070;
        opacity: 0.7; /* Firefox */
        font-size: 16px;
      }
    }

    textarea {
      width: 100%;
      margin-top: 30px;
      height: 200px;
      border: 0px;
      border-radius: 3px;
      padding: 20px;
      color: #707070;
      font-size: 16px;
    }

    button {
      width: 150px;
      height: 40px;
      margin-top: 30px;
      background: #40433d;
      color: #fff;
      font-size: 15px;
      border-radius: 8px;
      border: 0px;
    }
  }
`
