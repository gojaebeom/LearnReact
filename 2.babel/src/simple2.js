// JSX 문법으로 작성
// 브라우저는 JSX 문법을 읽을 수 없기 때문에 babel을 통해 
// JSX 문법을 React.createElement 코드로 변환
// npx babel --watch src --out-dir ./dist --presets @babel/preset-react
// npx 명령어를 사용하게되면 node_modules 에 있는 .bin 폴더의 바이너리 파일을 실행
// 만약 해당 모듈이 없다면 npx 명령어가 자동으로 해당 모듈을 설치하여 실행해줍니다.

function Counter(){
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <span>현재 카운트</span>
            <span>{count}</span>
            <button onClick={ () => setCount(count+1)}>증가</button>
            <button onClick={ () => setCount(count-1)}>감소</button>
        </div>
    )
}

const domContainer = document.getElementById('root');
ReactDOM.render(
    <Counter/>,
    domContainer
);