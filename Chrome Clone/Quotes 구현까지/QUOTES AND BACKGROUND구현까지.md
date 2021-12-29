### QUOTES AND BACKGROUND구현까지

*****

#### **1. Quotes 구현 설명**

* quotes 리스트변수에 명언과 사람을 Key와 value형태로 생성
* random_Number 변수에 Math모듈의 random메소드를 사용하여 숫자를 무작위로 할당
* 무작위 숫자가 할당된 random_Number변수를 innerText를 통하여 Html문서에 삽입

*****

#### 2. BackGround_Img 구현 설명

* images 변수에 src에 들어갈 이미지 파일명을 String형태로 입력하여 생성
* bgImage 변수를 생성하여 createElement를 사용하여 img를 생성하여 할당
* chosenImage변수에  images[Math.floor(Math.random() * images.length)]을 할당
* bgImage.src를 사용하여 img/chosenImages로 주소를 할당
*  appendChild를 사요하여 bgImage를 Html문서에 추가

****

#### 내가 추가한것

​	**- BackGround_Img 구현파트**	

* 변경 이유 : img를 랜덤하게 송출하는 것이 아니라 사계절 사진이 순차적으로 나오게 구현하고 싶었습니다..

  * 변경 방법 

    1. count 변수 생성 (값이 변경되어야 하기 때문에 let 사용)

    2. Season_Change함수를 생성하여  count변수를 제외한 앞으로 나올 작업들을 다 집어넣음

    3. 위의 함수안에서 images리스트변수에 들어있는 src 문자들을 순차적으로 가져오기위해

       함수 밖에 선언해둔 count변수를 0부터 시작하게 하여 images안의 값을 순차적으로 호출

    4. count는 한번 돌아갈때마다 1식 더해지고 조건문을 사용하여 4가 될경우 0으로 초기화하여 반복
    5. 호출한 값을 chosenImage변수의 할당 그후 bgImage.src에 할당후 appendChild로 Html에 추가
    6. 처음에 사진이 나와야하기 때문에 Season_Change함수를 한번 호출 그 후

    7. 앞의 clock부분에서 사용한 setInterval기능을 이용하여  Season_Change함수 20초마다 반복

    

