- - # VueJS

    ## I. 핵심

    ### 1. SPA

    Single Page Application

    - 페이지 전환 없이(새로운 요청 응답 없이) UI 전환
    - 왜?
      1. 사용자 편의(페이지가 리로드 되지 않는)
      2. 서버 리소스 절약

    ### 2. MVVM

    Model-ViewModel-View
    모델과 뷰가 연결이 되어있기 떄문에 자동으로 변경

    - MVC(Model-Controller-View)

    ### 3. Declarative Programming (선언적 프로그래밍) <= VueJS는 선언적 프로그래밍이다!

    <-> 명령형 프로그래밍 (Imperative Programming)

    - 명령형(절차적) : 변화를 단계적으로 명령하는 방식
      - Vanilla Javascript DOM 조작
    - 선언형 : 변화를 선언(그림 그리기)
      - 프레임워크를 통한 조작

    ```html
    <div id="app">{{ message }}<!-- 선언한 message값이 출력됨 --></div>

    <script>
      var app = new Vue({
        el: "#app",
        data: {
          message: "안녕하세요 Vue!", //선언적 렌더링
        },
      });
    </script>

    <!-- 개발버전, 도움되는 콘솔 경고를 포함. -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    ```

    이 요소의 `title` 속성을 Vue 인스턴스의 `message` 속성으로 최신 상태를 유지

    ```html
    <div id="app-2">
      <span v-bind:title="message">
        내 위에 잠시 마우스를 올리면 동적으로 바인딩 된 title을 볼 수 있습니다! </span
      ><!--마우스를 올리면 툴팁이 뜨는 것을 알 수 있음-->
    </div>

    <script>
      var app2 = new Vue({
        el: "#app-2",
        data: {
          message: "이 페이지는 " + new Date() + " 에 로드 되었습니다",
        },
      });
    </script>
    ```

  ## II. Vue의 요소

  ### 1. Directive(지시자)

  - `v-for` : 배열과 같은 데이터를 순회

  ```html
  <div id="app-4">
    <ol>
      <li v-for="todo in todos">
        {{ todo.text }}
      </li>
    </ol>
  </div>

  <script>
    var app4 = new Vue({
      el: "#app-4",
      data: {
        todos: [
          { text: "JavaScript 배우기" },
          { text: "Vue 배우기" },
          { text: "무언가 멋진 것을 만들기" },
        ],
      },
    });
  </script>
  ```

  - `v-if` : 조건부 렌더링
  - `v-else` : 조건부 렌더링

  ```html
  <div id="app-3">
    <p v-if="seen">이제 나를 볼 수 있어요</p>
  </div>
  <script>
    var app3 = new Vue({
      el: "#app-3",
      data: {
        seen: true, //false를 입력하면 사라짐.
      },
    });
  </script>
  ```

  - `v-on` : 이벤트 바인딩(addEventListener)

  ```html
  <div id="app-5">
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">메시지 뒤집기</button>
  </div>

  <script>
    var app5 = new Vue({
      el: "#app-5",
      data: {
        message: "안녕하세요! Vue.js!",
      },
      methods: {
        //메소드 선언부
        //메시지 뒤집기 기능
        reverseMessage: function () {
          this.message = this.message.split("").reverse().join("");
        },
      },
    });
  </script>
  ```

  - `v-model` : 양방향 데이터 바인딩

  ```html
  <div id="app-6">
    <!--텍스트 필드에 입력하면 메시지에 바인딩 처리-->
    <p>{{ message }}</p>
    <input v-model="message" />
  </div>
  <script>
    var app6 = new Vue({
      el: "#app-6",
      data: {
        message: "안녕하세요 Vue!",
      },
    });
  </script>
  ```

  #### 컴포넌트 정의 예제

  ```html
  <div id="container">
    <ol>
      <!-- 각 요소에 todo 객체 제공, key 전달 -->
      <todo-item
        v-for="item in groceryList"
        v-bind:todo="item"
        v-bind:key="item.id"
      >
      </todo-item>
    </ol>
  </div>
  <!--CDN-->
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script>
    //todo-item 컴포넌트 정의
    Vue.component("todo-item", {
      props: ["todo"],
      template: "<li>{{todo.text}}</li>",
    });
    //새 인스턴스 생성
    new Vue({
      el: "#container",
      data: {
        groceryList: [
          { id: 0, text: "Vegetables" },
          { id: 1, text: "Cheese" },
          { id: 2, text: "Whatever else humans are supposed to eat" },
        ],
      },
      methods: {},
    });
  </script>
  ```

## Array Heloper Method 정리

### 1.forEach

- 배열 요소를 돌아가면서 한번씩 콜백함수를 실행한다. (리턴값이 없다.)

```javascript
function myFunction(value, index, array) {
  console.log("값: " + value + ", 인덱스:  " + index);
}

var numbers = [1, 2, 3, 4, 5];
numbers.forEach(myFunction);
// 값: 1, 인덱스: 0
// 값: 2, 인덱스: 1
// 값: 3, 인덱스: 2
// 값: 4, 인덱스: 3
// 값: 5, 인덱스: 4
```

### 2.map

- 콜백함수에 의해 만들어진 새로운 배열을 반환한다.(리턴값이 있다.)

```javascript
function myFunction(value, index, array) {
  return value + index;
}

var numbers = [1, 2, 3, 4, 5];
var array = numbers.map(myFunction);
console.log(array);
```

### 3.filter

- 콜백함수의 조건에 의해 만들어진 새로운 배열을 반환한다.

```javascript
function myFunction(value, index, array) {
  return value > 3;
}

var numbers = [1, 2, 3, 4, 5];
var array = numbers.filter(myFunction);
console.log(array); // [4, 5]
```

### 4.find

- 배열에서 조건을 만족하는 첫 번째 요소를 반환한다.

```javascript
function myFunction(value, index, array) {
  return value > 3;
}

var numbers = [1, 2, 3, 4, 5];
var num = numbers.find(myFunction);
console.log(num); // 4
```

### 5.every

- 각 요소가 모두 조건을 만족하면 true, 그렇지 않으면 false를 반환한다.

```javascript
function myFunction(value, index, array) {
  return value > 3;
}

var numbers = [1, 2, 3, 4, 5];
var bool = numbers.every(myFunction);
console.log(bool); // false
```

### 6.some

- 하나의 요소라도 조건을 만족하면 true, 그렇지 않으면 false를 반환한다.

```javascript
function myFunction(value, index, array) {
  return value > 3;
}

var numbers = [1, 2, 3, 4, 5];
var bool = numbers.every(myFunction);
console.log(bool); // true
```

### 7.reduce

- 각 요소에 대해 콜백함수를 실행한다.

```javascript
function myFunction(total, value, index, array) {
  return total + value;
}

var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce(myFunction);
console.log(sum); // 15
```

## II. Vue JS의 요소

### 1. Directive(지시자)

- `v-for` : 배열과 같은 데이터를 순회
- `v-if` : 조건부 렌더링
- `v-else` : 조건부 렌더링
- `v-model` : 양방향 데이터 바인딩
- `v-on` : 이벤트 설정(`addEventListener()`)
  (`@`)
- `v-bind` : 속성값 설정(`:`)
- `v-text` : 데이터 렌더(innerText) == `{{}}`
- `v-html` : 데이터 렌더(innerHTML)

### 2. Vue Instance(객체)

- `new Vue({})`
- `el : '#app'` : 마운트 포인트
- `data : {}` : 관리할 데이터
- `methods: {}` : 함수
- `computed: {}` : 함수화된 데이터
- `watch : {}` : 데이터 변경에 대한 콜백

### 라이프사이클 훅

- `created()` : 객체 생성 직후
- `beforeMount()`
  --- Mounted: DOM 보이기 시작
