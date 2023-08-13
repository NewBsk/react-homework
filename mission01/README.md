# 아토믹 컴포넌트 설계 후 React 컴포넌트로 구현

1. 컴포넌트 구현 설계 및 시안 선정
   마켓칼리(https://www.figma.com/file/QFZXAD6Q7VVp4zeh6M1CrV/%EB%A7%88%EC%BC%93%EC%B9%BC%EB%A6%AC-(Copy)?type=design&node-id=0-1&mode=design&t=xFLwXIfZqDPOvAp1-0) 시안 내 좋아요 아이콘을 이용해 클릭 이벤트 발생시 아이콘 이미지 컴포넌트가 변화하게 계획한다.
   <br>
2. assets 폴더에 시안 내 좋아요 아이콘 파일(heart.svg, clickedHeart.svg) 저장
   <br>
3. useState를 이용해 isClicked 변수를 설정한다. (추후 보충이 더 필요한 부분)

```js
const [isClicked, setIsClicked] = useState(false);
```

<br>
4. handleClick 함수를 만들어서 false, true 토글 상태를 만든다.
```js
const handleClick = () => {
  setIsClicked(!isClicked);
};
```
<br>
5. button 태그 안에 onClick 클릭 이벤트로 handleClick 함수를 연결해서 isClicked 값이 false면 HeartIcon 컴포넌트와 빈문자를 랜더링하고 True면 ClickedHeartIcon 컴포넌트와 "1개" 라는 문자열을 랜더링 하도록 한다.
```jsx
<button type="button" onClick={handleClick}>
        {!isClicked ? <HeartIcon /> : <ClickedHeartIcon />}
        좋아요 {!isClicked ? " " : "1개"}
      </button>
```
<br>
6. 위에서 사용한 HeartIcon 컴포넌트와 ClcikedHeartIcon 컴포넌트는 component 폴더를 생성해 그 안에 각각의 파일로 관리한다.
```jsx
// HeartIcon 컴포넌트
import heart from "../assets/heart.svg";

const HeartIcon = () => {
return (

<div className="heartIcon">
<img src={heart} alt="좋아요" />
</div>
);
};

export default HeartIcon;

````
```jsx
// ClickedHeartIcon 컴포넌트
import clickedHeart from "../assets/clickedHeart.svg";

const ClickedHeartIcon = () => {
  return (
    <div className="clickedHeartIcon">
      <img src={clickedHeart} alt="좋아요" />
    </div>
  );
};

export default ClickedHeartIcon;

````

<br>
7. 구현 결과
<br>
<img src="/mission01/mission01.gif>

<br>

<br>
#### 과제 회고: 혼자 구현해 보고싶어서 무리하다가 시간을 많이 소모했고 결국 작성해주신 코드와 검색을 통해 힌트를 많이 얻어서 구현했습니다. 그리고 이번에는 실패했지만 기회가 된다면 좋아요 갯수 까지 구현해보고 싶었는데 좀 더 학습해서 isClicked 값이 false면 0개 true면 1개가 되는것까지 문자열이 아닌 리액트로 구현해 보고 싶습니다.
