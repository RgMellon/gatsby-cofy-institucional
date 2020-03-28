import styled from 'styled-components'

export const Container = styled.div`
  background: ${props => props.theme.primary};
`

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  img {
    width: 70px;
  }

  display: flex;
  align-items: center;

  ul {
    display: flex;

    li {
      padding: 0px 20px;
      color: #fff;
      font-weight: 300;
      cursor: pointer;
      height: 71px;
      display: flex;
      align-items: center;

      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    }
  }
`

export const Separator = styled.div`
  height: 40px;
  width: 0.5px;
  background: #fafafa;
  margin-right: 10px;
`
