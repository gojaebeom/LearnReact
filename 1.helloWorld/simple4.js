//createElement 사용해보기 4
function LikeButton(){
    const [liked, setLiked] = React.useState(false);
    const text = liked ? '좋아요 취소': '좋아요';
    return React.createElement(
        'button', // 태그명
        { onClick : () => setLiked(!liked) }, // 속성
        text //내용
    );
}

const domContainer1 = document.getElementById('root');
ReactDOM.render(
    React.createElement(
        'div',
        null,
        React.createElement(LikeButton),
        React.createElement(LikeButton),
        React.createElement(LikeButton),
    ), 
    domContainer1
);
