import React from 'react';
import styled,{css} from 'styled-components';


const ButtonTotal = ({children,color,size,fullWidth}) => {
    //배경색변수
    const colorStyle=css`
    ${({theme,color})=>{
        const selected = theme.palette[color];
        return css`
        background: ${selected};
        `;
    }}`;
    // 사이즈
    const sizes ={
        large:{
            height: '3em',
            fontSize: '1.25em',
            width:'40%'
        },
        medium:{
            height: '2.5em',
            fontSize: '1em',
            width:'25%'
        },
        small:{
            height: '1.75em',
            fontSize: '1em',
            width:'15%'
        },
    }
    const sizestyle = css`
    ${({size})=>css`
    height:${sizes[size].height};
    font-size:${sizes[size].fontSize};
    width:${sizes[size].width};
    `}
    `;
    
    const StyledButton = styled.button`
    
    /*공통스타일*/
    display:inline-flex;
    outline: none;
    border:none;
    border-radius:4px;
    color:white;
    font-weight:bold;
    cursor:pointer;
    padding: 1em;
    justify-contents:center;
    

    /*크기*/
    font-size:1em;
    margin: 0.5em;
    align-items:center;
    
    /*색상*/
    ${colorStyle}   
    /*크기스타일*/
    ${sizestyle}
    //전체너비 100%스타일
    ${props=>{
        return props.fullWidth &&
        css `
        width:100%; 
        `;
    }}
    &:hover{
        background:#1c7ed6
    }
    &+&{
        margin-left: 1em;
    }
    `;
    
    return (
        <StyledButton color={color} size={size} fullWidth={fullWidth}>{children}</StyledButton>
    );
};

ButtonTotal.defaultProps={
    color:'blue',
    size:'medium'
}
export default ButtonTotal;