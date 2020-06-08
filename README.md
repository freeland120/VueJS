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
  
    ### 3. Declarative Programming (선언적 프로그래밍)
  
    <-> 명령형 프로그래밍 (Imperative Programming)
  
    - 명령형(절차적) : 변화를 단계적으로 명령하는 방식
      - Vanilla Javascript DOM 조작
    - 선언형 : 변화를 선언(그림 그리기)
      - 프레임워크를 통한 조작
  
    ~~~html
    <div id="app">
      {{ message }}<!-- 선언한 message값이 출력됨 -->
    </div>
    
    <script>
    var app = new Vue({
      el: '#app',
      data: {
        message: '안녕하세요 Vue!'//선언적 렌더링
      }
    })
    </script>
    
    <!-- 개발버전, 도움되는 콘솔 경고를 포함. -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    ~~~
  
    이 요소의 `title` 속성을 Vue 인스턴스의 `message` 속성으로 최신 상태를 유지
  
    ~~~html
    <div id="app-2">
      <span v-bind:title="message">
        내 위에 잠시 마우스를 올리면 동적으로 바인딩 된 title을 볼 수 있습니다!
      </span><!--마우스를 올리면 툴팁이 뜨는 것을 알 수 있음-->
    </div>
    
    <script>
    var app2 = new Vue({
      el: '#app-2',
      data: {
        message: '이 페이지는 ' + new Date() + ' 에 로드 되었습니다'
      }
    })
    </script>
    ~~~
  
    
  
    
  
    ## II. Vue의 요소
  
    ### 1. Directive(지시자)
  
    
  
    - `v-for` : 배열과 같은 데이터를 순회
  
    ~~~html
    <div id="app-4">
      <ol>
        <li v-for="todo in todos">
          {{ todo.text }}
        </li>
      </ol>
    </div>
    
    <script>
    var app4 = new Vue({
      el: '#app-4',
      data: {
        todos: [
          { text: 'JavaScript 배우기' },
          { text: 'Vue 배우기' },
          { text: '무언가 멋진 것을 만들기' }
        ]
      }
    })
    </script>
    ~~~
  
    
  
    - `v-if` : 조건부 렌더링
    - `v-else` : 조건부 렌더링
  
    ~~~html
    <div id="app-3">
      <p v-if="seen">이제 나를 볼 수 있어요</p>
    </div>
    <script>
    	var app3 = new Vue({
        el: '#app-3',
        data: {
          seen: true //false를 입력하면 사라짐.
        }
      })
    </script>
    ~~~
  
    
  
    
  
    - `v-on` : 이벤트 바인딩(addEventListener) 
  
    ~~~html
    <div id="app-5">
      <p>{{ message }}</p>
      <button v-on:click="reverseMessage">메시지 뒤집기</button>
    </div>
    
    <script>
    var app5 = new Vue({
      el: '#app-5',
      data: {
        message: '안녕하세요! Vue.js!'
      },
      methods: {//메소드 선언부
        //메시지 뒤집기 기능
        reverseMessage: function () {
          this.message = this.message.split('').reverse().join('')
        }
      }
    })
    </script>
    ~~~
  
    
  
    - `v-model` : 양방향 데이터 바인딩
  
    ~~~html
    <div id="app-6">
      <!--텍스트 필드에 입력하면 메시지에 바인딩 처리-->
      <p>{{ message }}</p>
      <input v-model="message">
    </div>
    <script>
    var app6 = new Vue({
      el: '#app-6',
      data: {
        message: '안녕하세요 Vue!'
      }
    })
    </script>
    ~~~
  
    
  
    #### 컴포넌트 정의 예제
  
    ~~~html
    <div id="container">
            <ol>
              	<!-- 각 요소에 todo 객체 제공, key 전달 -->
                <todo-item v-for="item in groceryList" v-bind:todo="item" v-bind:key="item.id">							</todo-item>
            </ol>
    </div>
    <!--CDN-->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
      	//todo-item 컴포넌트 정의
        Vue.component('todo-item',{
          props:['todo'],
          template: '<li>{{todo.text}}</li>'
        })
      	//새 인스턴스 생성
        new Vue({
          el:"#container",
          data:{
            groceryList: [
              { id: 0, text: 'Vegetables' },
              { id: 1, text: 'Cheese' },
              { id: 2, text: 'Whatever else humans are supposed to eat' }
            ]
          },
          methods:{}
        })
    </script>
    ~~~
  
    
