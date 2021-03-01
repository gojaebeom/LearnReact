import React from 'react';
import './box.css';
import Style from './box.module.css';
import './box.scss';
import Styled from 'styled-components';

//1. 일반적인 css 적용방식
export function Box1(){
    return (
        <React.Fragment>
            <div className="box"></div>
        </React.Fragment>
    )
}

//2. css 모듈 방식
//빌드될 때 className 뒤에 hash 값이 붙습니다.
export function Box2(){
    console.log(Style);
    return (
        <React.Fragment>
            <div className={Style.box}></div>
        </React.Fragment>
    )
}

//
export function Box3(){
    return (
        <React.Fragment>
            <div className="box-v2">
                <p>hello scss!</p>
            </div>
        </React.Fragment>
    )
}

const Box = Styled.div`
    width:300px;
    height:300px;
    background-color: #F39C12;
    border-radius:3px;
    margin:0px auto;
    margin-top:20px;
`;

const Text = Styled.p`
    text-align:center;
    line-height:300px;
`;

export function Box4(){
    return (
        <React.Fragment>
            <Box>
                <Text>hello styled-components!</Text>
            </Box>
        </React.Fragment>
    )
}