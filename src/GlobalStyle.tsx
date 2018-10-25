import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html {
    font-size: 9px;
    font-family: Roboto;

    @media (min-width: 260px) {
      font-size: 10px;
    }

    @media (min-width: 320px) {
      font-size: 11px;
    }

    @media (min-width: 540px) {
      font-size: 12px;
    }

    @media (min-width: 640px) {
      font-size: 13px;
    }

    @media (min-width: 720px) {
      font-size: 14px;
    }
  }


  body {
    background: url('https://images.unsplash.com/photo-1504595403659-9088ce801e29?w=1920');
    background-attachment: fixed;
    background-size: cover;
    background-position: 50%;

    &:after {
      content: '';
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      background: -webkit-radial-gradient(center center, ellipse farthest-corner, rgba(0, 0, 0, .3) 0%, rgba(0, 0, 0, .8) 100%);
    }
  }
`
