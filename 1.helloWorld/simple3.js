//createElement 사용해보기 3 : 멀티 랜더링
//레거시 프로젝트를 포팅할 때 사용할 수 도 있지만
//보통 여러 랜더링을 해야할 경우 하나의 돔안에서 해결하는 것이 좋다.
function LikeButton(){
    const [liked, setLiked] = React.useState(false);
    const text = liked ? '좋아요 취소': '좋아요';
    return React.createElement(
        'button', // 태그명
        { onClick : () => setLiked(!liked) }, // 속성
        text //내용
    );
}

const domContainer1 = document.getElementById('root1');
ReactDOM.render(React.createElement(LikeButton), domContainer1);

const domContainer2 = document.getElementById('root2');
ReactDOM.render(React.createElement(LikeButton), domContainer2);

const domContainer3 = document.getElementById('root3');
ReactDOM.render(React.createElement(LikeButton), domContainer3);
