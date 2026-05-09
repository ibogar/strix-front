import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
    white: '#FFF',
    jetBlack: '#253031',
    darkSlateGrey: '#315659',
    cerulean: '#2978a0',
    paleSky: '#c6e0ff',
    carrotOrange: '#f1933f',
    snow: '#fffafa',
    scarletFire: '#ff4328ff'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const fonts = {
    highlightFont: 'Mynerve, cursive',
    mainFont: 'Roboto, sans-serif'
}

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${fonts.mainFont};
        list-style: none;
    }

    body {
        padding: 40px 0;
        background-color: ${colors.snow};
        color: ${colors.jetBlack};
    }

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
    }
`

export const Content = styled.div`
    width: 100%;
    display: grid;
    align-items: start;
    gap: 16px;
    grid-template-columns: 25% 75%;
    padding: 16px;
`

export const PageTitle = styled.h2`
    font-size: 40px;
    font-weight: bold;
    font-family: ${fonts.highlightFont};
    color: ${colors.carrotOrange};
    text-shadow: 2px 2px ${colors.cerulean};
    border-bottom: 1px solid ${colors.darkSlateGrey};
    margin-bottom: 20px;
`