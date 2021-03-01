// JSX 문법으로 작성
// 브라우저는 JSX 문법을 읽을 수 없기 때문에 babel을 통해 
// JSX 문법을 React.createElement 코드로 변환
// npx babel --watch src --out-dir ./dist --presets @babel/preset-react
// npx 명령어를 사용하게되면 node_modules 에 있는 .bin 폴더의 바이너리 파일을 실행
// 만약 해당 모듈이 없다면 npx 명령어가 자동으로 해당 모듈을 설치하여 실행해줍니다.
function Counter() {
  const [count, setCount] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "\uD604\uC7AC \uCE74\uC6B4\uD2B8"), /*#__PURE__*/React.createElement("span", null, count), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count + 1)
  }, "\uC99D\uAC00"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count - 1)
  }, "\uAC10\uC18C"));
}

const domContainer = document.getElementById('root');
ReactDOM.render( /*#__PURE__*/React.createElement(Counter, null), domContainer);