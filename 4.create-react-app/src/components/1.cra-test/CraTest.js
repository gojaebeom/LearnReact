import React from 'react';
import PersonData from './person.json';

function CraTest(){

    // 이미 import 한 데이터 보여주기
    function onClick1(){
        console.log(PersonData);
    }

    // 클릭 이벤트가 실행될 때 동적으로 import를 처리
    function onClick2(){
        import('./person2.json').then((data)=>{
            console.log(data);
        })
    }

    return (
        <React.Fragment>
            <h1>JS 파일에서 css, json 등의 파일에 접근할 수 있습니다.</h1>
            <button onClick={ onClick1 }>데이터 가져오기</button>
            <button onClick={ onClick2 }>동적으로 데이터 가져오기</button>
        </React.Fragment>
    )
}
export default CraTest;