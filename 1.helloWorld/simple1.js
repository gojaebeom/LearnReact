//createElement 사용해보기 1
function LikeButton(){
    const [liked, setLiked] = React.useState(false);
    const text = liked ? '좋아요 취소': '좋아요';
    return React.createElement(
        'button', // 태그명
        { onClick : () => setLiked(!liked) }, // 속성
        text //내용
    );
}
const domContainer = document.getElementById('root');
ReactDOM.render(React.createElement(LikeButton), domContainer);