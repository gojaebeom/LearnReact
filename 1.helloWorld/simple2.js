//createElement 사용해보기 2
function HelloWorld(){
    return React.createElement(
        'div',
        null,
        React.createElement('p',null,'hello'),
        React.createElement('p',null,'world'),
    )
}



const domContainer = document.getElementById('root');
ReactDOM.render(React.createElement(HelloWorld), domContainer);