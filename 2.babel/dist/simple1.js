// React.createElement 로 작성
function Counter() {
  const [count, setCount] = React.useState(0);
  return React.createElement('div', null, React.createElement('span', null, '현재 카운트'), React.createElement('span', {
    style: {
      marginRight: 10
    }
  }, count), React.createElement('button', {
    onClick: () => setCount(count + 1)
  }, '증가'), React.createElement('button', {
    onClick: () => setCount(count - 1)
  }, '감소'));
}

const domContainer = document.getElementById('root');
ReactDOM.render(React.createElement(Counter), domContainer);