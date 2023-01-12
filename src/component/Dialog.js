import React, { useEffect,useState } from 'react';
import styled, { keyframes,css } from 'styled-components';
import ButtonTotal from './ButtonTotal';

//fadeIn keyframes만들기
const fadeIn = keyframes`
    from {opacity: 0}
    to{opacity:1}
`;
//slideUp-keyframes만들기
const slideUp = keyframes`
    from{transform:translateY(200px)}
    to{transform:translateY(0px)}
`;
//fadeout-keyframes만들기
const fadeOut = keyframes`
    from {opacity: 1}
    to{opacity:0}
`;
//slideDown-keyframes만들기
const slideDown = keyframes`
    from{transform:translateY(0px)}
    to{transform:translateY(200px)}
`;



//배경 컴포넌트
const DarkBackground = styled.div`
    position:fixed;
    left: 0;
    top:0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items:center;
    background: rgba(0,0,0,0.8);
    animation-duration:0.5s;
    animation-name:${fadeIn};
    animation-fill-mode: forwards;
    ${props=>
        props.disappear && 
        css`
        animation-name:${fadeOut};
        `
    }
`;
// 컨펌창 블럭
const DialogBlock = styled.div`
    width:320px;
    padding: 1.5em;
    background: white;
    border-radius: 2px;
    h3{
        margin: 0;
        font-size: 1.5em;
    }
    p{
        font-size: 1.125em;
    }
    animation-duration:0.5s;
    animation-name:${slideUp};
    animation-fill-mode: forwards;
    ${props=>
        props.disappear && 
        css`
        animation-name:${slideDown};
        `
    }
`;
const Dialog = ({title,children,confirmText,cancelText,visible,onCancel,onConfirm}) => {
    //현재 트랜지션 효과를 보여주고 있는중이라는 상태를 의미
    const [animate, setAnimate]=useState(false);
    //실제로 컴포넌트가 사라지는 시점을 지연시키기 위한 상태
    const [localvisible, setlocalvisible]=useState(visible);
    // useEffect작성 언마운트되는시점에 실행해야하기때문
    //visible값이 true에서 false로 바뀌는 시점을 감지하여 animate값을 true로 변경
    //setTimeout함수를 사용하여 0.5초 이후에 animate값을 false로변경
    useEffect(()=>{
        //visible값이 true에서 false로 바뀔때를확인. (확인이나취소버튼클릭하면)
        if(localvisible && !visible){
            setAnimate(true);
            setTimeout(()=>setAnimate(false),500);
        }
        setlocalvisible(visible); //로컬visible은null이됨
    },[localvisible,visible])
    if(!animate && !localvisible) return null;
    // if(!visible) return null; 이거땜에 안내려갔음 이따가 확인좀,,,
    return (
        <DarkBackground disappear={!visible}>
            <DialogBlock disappear={!visible}>
                <h3>{title}</h3>
                <p>{children}</p>
                <div>
                    <ButtonTotal color="gray" onClick={onConfirm}>{confirmText}</ButtonTotal>
                    <ButtonTotal color="pink" onClick={onCancel}>{cancelText}</ButtonTotal>
                </div>
            </DialogBlock>
        </DarkBackground>
    );
};

export default Dialog;