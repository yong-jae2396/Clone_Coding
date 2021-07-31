## Responsive Header Project

**project 간단설명** : 위에 사진이 완성화면으로 Header안에 3개의 영역으로  나누어져 있고 반응형으로 

​						            사이트에크기가 일정크기를 기준으로 변화하면 Header의 구조도 변한다.

****

* **전체화면으로 사이트를 늘린경우 화면**

![Responsive Header  완성 화면](C:\Users\김용재\Desktop\imgas\Responsive Header  완성 화면.jpg)

****

* **화면을 일정크기 줄인경우**
* Header의 메뉴와 아이콘이 사라지고 메뉴를 보이게 해주는 메뉴바도 생기게 된다.

![Responsive Header  줄인 화면](C:\Users\김용재\Desktop\imgas\Responsive Header  줄인 화면.jpg)

****

* **메뉴바를 클릭할 경우 아래로 펼치지면서 메뉴와 아이콘이 나타나는 효과 (JavsScript정리)**

  ````javascript
  // Html의 변수들을 javascript변수에 할당
  const toggleBtn = document.querySelector('.navbar__toggleBtn');
  const menu = document.querySelector('.navbar__menu');
  const icons = document.querySelector('.navbar__icons');
  
  // addEventListener메서드를 통하여 클릭했을 경우 active 부여 여부 설정
  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
  });
  ````

* **메뉴바를 눌렀을 때 결과 창 (아래로 펼쳐지며 메뉴와 아이콘이 나타난다.)**

![Responsive Header  메뉴바 클릭한 화면](C:\Users\김용재\Desktop\imgas\Responsive Header  메뉴바 클릭한 화면.jpg)

****

