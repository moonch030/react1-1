# REACT1-1
## 문채현 202230310
### 2024-03-27
### 1. JSX(JavaScript XML)란?
- JavaScript에 XML을 추가한 확장 문법   
- 리액트는 컴포넌트를 태그화   
- JSX의 역할   
-> JSX는 내부적으로 XML/HTML 코드를 자바스크립트로 변환   
-> React가 createElement함수를 사용하여 자동으로 자바스크립트로 변환   
-> 만일 JS작업 할 경우 직접 createElement함수를 사용   
-> 가독성을 높여주는 역할  
- JSX의 장점
-> 코드가 간결해짐   
-> 가독성 향상   
-> Injection Attack이라 불리는 해킹 방법을 방어함으로써 보안에 강함   

- JSX 사용법   
-> 모든 자바스크립트 문법 지원   
-> 자바스크립트 문법에 XML과 HTML을 섞어서 사용   
-> html이나 xml에 자바스크립트 코드를 사용하고 싶으면 {} 괄호 사용   
-> 태그의 속성값을 넣고 싶을때는 아래와 같이 사용

``` 
큰따옴표 사이에 문자열을 넣거나   
const element = <div tabIndex="0"></div>;   
중괄호 사이에 자바스크립트 코드를 넣으면 됨
const element = <img src={user.avatarUrl}></img>;
```
### 2. 엘리먼트 정의   
-> 리액트 앱을 구성하는 요소   
-> "엘리먼트는 리액트 앱의 가장 작은 빌딩 블록들"   
-> 웹사이트 경우 DOM 엘리먼트이며 HTML 요소를 의미

- 리액트 엘리먼트와 DOM엘리먼트 차이   
-> 리액트 엘리먼트는 Virtual DOM의 형태를 취함   
-> DOM 엘리먼트는 페이지의 모든 정보를 갖고 있어 무거움   
-> 반면 리액트 엘리먼트는 변화한 부분만 갖고 있어 가벼움  

- 엘리먼트의 생김새   
-> 리액트 엘리먼트는 자바스크립트 객체의 형태로 존재   
-> 컴포넌트(Button 등), 속성(color 등) 및 내부의 모든 children을 포함하는 일반 JS객체   
-> 이 객체는 마음대로 변경할 수 없는 불변성을 가지고 있음   

- 엘리먼트 정의   
-> 리액트 엘리먼트의 가장 큰 특징은 불변성 즉, 한 번 생성 된 엘리먼트의 chlidern이나 속성(attributes)를 바꿀 수 없음  

-> 내용이 바뀐다면 ?
1. 컴포넌트를 통해 새로운 엘리먼트 생성   
2. 이전 엘리먼트와 교체하는 방법을 내용을 바꿈   
3. 교체하는 작업을 하기 위해 Virtual DOM을 사용   

- Root DOM node   
-> 다음 html 코드는 id 값이 root 인 div태그로 단순하지만 리액트에 필수로 들어가는 아주 중요한 코드입니다.   
이 div 태그 안에 리액트 엘리먼트가 렌더링 되며, 이 것을 root DOM node 라고 합니다.
```
01 <div id="root"></div>
```
엘리먼트를 렌더링 하기 위해서는 다음과 같은 코드가 필요합니다.   
```
01 const element = <h1>안녕, 리액트!</h1>;
02 ReactDOM.render(element, document.getElementById('root'));
```
이때 render() 함수를 사용하게 됩니다.   
이 함수의 첫 번째 파라미터 출력 할 리액트 엘리먼트이고, 두 번째 파라미터는 출력 할 타겟을 나타냅니다.   
**"즉, 리액트 렌더링의 과정은 Vitrual DOM에서 실제 DOM으로 이동하는 과정입니다. "**   

---
### 2024-03-20 강의 내용   
### 1. 리액트는 무엇인가?
- 사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리
- 사용자와 웹사이트의 상호작용을 돕는 인터페이스를 만들기 위한 자바스크립트 기능 모음집
- **라이브러리란?** 자주 사용되는 기능을 정리해 모아 놓은 것
- **라이브러리와 프레임워크 차이** :    
-> 가장 큰 차이점은 프로그램의 *흐름에 대한 제어 권한*   
-> 프레임워크는 프레임워크, 라이브러리는 개발자

### 2. 리액트의 장점
- 빠른 업데이트와 렌더링 속도   
-> **업데이트란** 웹사이트를 탐색할 때 화면에 나타나는 내용이 바뀌는 것   
-> 빠른 업데이트를 위해 내부적으로 Virtual DOM을 사용   
-> **Virtual DOM**은 말 그대로 가상의 DOM : 웹페이지를 정의하는 하나의 객체   
- **동기식** :  
    1. 코드가 실행되면 순서대로 Call Stack에 실행할 함수가 쌓인다.  (push)

    2. 쌓인 반대 순서로 함수가 실행된다.(LIFO)

    3. 실행이 된 함수는 Call Stack에서 제거된다(pop)
- **비동기식** :  
    1. Call Stack에서 비동기 함수가 호출되면 Call Stack에 먼저 쌓였다가 Web API(혹은 백그라운드라고도 한다)로 이동한 후 해당 함수가 등록되고 Call Stack에서 사라진다.

    2. Web API(백그라운드)에서 비동기 함수의 이벤트가 발생하면, 해당 콜백 함수는 Callback Queue에 push(이동) 된다.

    3. 이제 Call Stack이 비어있는지 이벤트 루프(Event Loop)가 확인을 하는데 만약 비어있으면, Call Stack에 Callback Queue에 있는 콜백 함수를 넘겨준다.(push)

    4. Call Stack에 들어온 함수는 실행이 되고 실행이 끝나면 Call Stack에서 사라진다. 

- 컴포넌트 기반 구조   
-> 리액트의 모든 페이지는 컴포넌트로 구성   
-> 하나의 컴포넌트는 다른 여러 개의컴포넌트의 조합으로 구성할 수 있다.   
-> 그래서 리액트로 개발 하다 보면 레고 블록을 조립하는 것처럼 컴포넌트를 조합해서 웹사이트를 개발하게 된다.   
-> 재사용성이 뛰어나다.   

- 재사용성   
-> 반복적인 작업을 줄여주기 때문에 생산선을 높여줌   
-> 유지보수 용이   
-> **재사용이 가능하려면 해당 모듈의 의존성이 없어야함**


- 든든한 지원군   
-> 메타(구 페이스북)에서 오픈소스 프로젝트로 관리하고 있어 계속 발전   
-> 활발한 지식 공유 & 커뮤니티   
-> 모바일 앱 개발 가능 : 리액트 네이티브라는 모바일 환경 UI프레임워크를 사용하면 크로스 플랫폼 모바일앱을 개발 가능

### 3. 리액트의 단점
- 방대한 학습량   
-> 자바스크립트를 공부한 경우 빠르게 학습할 수 있음   
- 높은 상태 관리 복잡도   
-> state,component life cycle 등의 개념이 있지만 어렵지 않음
---
### 2024-03-13 강의 내용
### 1. GitHub 사용법
- GitHub 연동
- GitHub 커밋 및 푸쉬
### 2. JavaScript
- JavaScript란?
- ES6(ECMAScript6) - 표준 ECMA-262
- JavaScript의 자료형  
-> var : 재선언 가능, 업데이트 가능  
-> let : 재선언 불가능, 업데이트 가능  
...
- 연산자  
-> ==, === 차이  
-> 기본 자료형(Primitive) : **데이터 타입**  
-> 객체형(Object Type) : **메모리 주소**  

### 3. Node.js 설치
- 터미널 명령어 버전 확인  
-> node -v  
-> npm -v  
-> npx -v  
-> versionv, -v
---