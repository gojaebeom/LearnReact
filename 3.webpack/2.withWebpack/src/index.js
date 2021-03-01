import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button.js';

const domContainer = document.getElementById('root');
ReactDOM.render(
    React.createElement(
        'div',
        null,
        React.createElement('p', null, '버튼을 클릭해 주세요.'),
        React.createElement(Button, {label : '좋아요'}),
        React.createElement(Button, {label : '싫어요'}),
    ),
    domContainer
)

//아무런 설정도 없이 npx webpack 명령어입력하면 
//src 의 js 파일이  dist 폴더의 하나의 main.js로 압축됩니다. 