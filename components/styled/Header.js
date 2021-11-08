import styled from "styled-components/native"

export const Header = styled.ImageBackground`
    width:100%;
    height:105%;
    padding:20px;
    marginBottom:12px;
    position:relative;
`

export const HeaderMain = styled.View`
    width:100%;
    height:30%;
    margin-bottom:20px;
`

export const Ovl = styled.View`
    flex:1;
    position:absolute;
    left:0;
    top:0;
    background: rgba(0,0,0,.7);
    padding:10px;
    width:100%;
    height:105%;
    z-index:100;
    border-radius:10px;
`

export const Top = styled.View`
    width:100%;
    height:auto;
    padding:10px;
    display:flex;
    align-items:flex-start;
    flex-direction: column;
`

export const Bottom = styled.View`
    width:100%;
    height:auto;
    padding:10px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:row;
    margin-top:-10px;
`

export const Left = styled.View`
    height:auto;
    padding:10px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:column;
`

export const Right = styled.View`
    height:auto;
    padding:10px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:column;
`


export const H1 = styled.Text`
    color: #fff;
    font-size:25px;
    font-weight:bold;
`

export const H2 = styled.Text`
    color: #fff;
    font-size:20px;
    font-weight:bold;
`

export const P = styled.Text`
    color: #777;
    font-size:15px;
`

export const Span = styled.Text`
    color: #ccc;
    font-size:15px;
`