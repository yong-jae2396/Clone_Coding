### Login 화면 구현 설명

*****

#### 특징

* submit를 할 때 마다 auto refresh가 되는 form의 특징을 막기 위하여 e.preventDefault()를 사용

* localStorage를 사용하여 사용자 데이터를 저장하고 끌어오는(getItem) 형식을 구성

* 조건문을 사용하여 localStorage의 데이터 여부를 확인하여 동작을 시킴

  * 데이터가 들어있지 않는 null일 경우 loginForm의 부여되어있는 class인 hidden을 

    삭제 후 onLoginSubmit을 실행

  * 데이터가 들어있는 경우 paintGreetings를 실행



