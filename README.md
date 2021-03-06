## Gamsung 프로젝트 소개

- 삼성전자 쇼핑몰을 모티브로한 전자제품 쇼핑몰 구현
- 기본적인 메인페이지, 상품리스트, 상품 상세페이지 등을 구현

### 개발 인원 및 기간

- 개발기간 : 2021/12/27 ~ 2022/1/07
- 개발 인원 : 프론트엔드 3명, 백엔드 2명
- [백엔드 github 링크](https://github.com/wecode-bootcamp-korea/28-1st-Gamsung-backend)

### 프로젝트 선정이유
- 디자인이 깔끔하고 쇼핑몰 웹사이트가 갖추어야할 다양한 기능들을 두루 갖추고 있음

## 적용 기술 및 구현 기능
### 적용 기술
- Front-End : React, Javascript, Sass, etc.
- Back-End : Python, Django web framework, Bcrypt, My SQL
- Common : RESTful API, CRUD

### 구현 내용

#### 공통

- 일반 회원가입 / 로그인
- 상품 리스트
- 상품 상세 페이지

#### 상품 리스트 (본인 담당)
<img width="500px" alt="products" src="https://user-images.githubusercontent.com/93215875/159445750-14e75b08-c0d8-451f-85ac-cad8b216dde4.png" />

✔️ **React를 이용하여 상품 목록 페이지를 구현하고, 목록 내용에 필터를 적용하여 화면 렌더링**
- 체크리스트 형태로 상품 필터 구현
- React state에 사용자가 선택한 필터 옵션을 저장하고, 해당 옵션과 일치하는 제품군만 화면 렌더링
- 전체 선택, 선택 없음을 동일한 상태로 취급하여 제품 전체가 화면에 표현되도록 구성

✔️ **CSS grid 사용한 화면 레이아웃 구성**

✔️ **Sass를 사용한 스타일링**
- `hover` , `box shadow` 속성을 적용하여 마우스커서 상호작용
- 공통되는 스타일링 요소의 경우 `Sass - mixin` 기능을 활용

✔️ **컴포넌트 재사용**
- 카드 컴포넌트를 사용하여 상품정보 카드 반복 렌더링
- 카드 컴포넌트 안의 내용들은 데이터가 저장된 React state를 props로 전달받아 표현
- 상품 개수에 따라 `grid row` 개수를 유동적으로 설정
- 추가로 `query string`을 이용한 `pagination` 기능 구현

✔️ **Router 컴포넌트 구성**

- `구매하기` 버튼 클릭 시, 제품의 상세 페이지로 이동
- 백엔드 서버로 부터 전달받은 제품 고유의 id 값을 path parameter에 활용하여 웹페이지 Route 구성

<br>

## Reference

- 이 프로젝트는 [삼성전자](https://www.samsung.com/sec/) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
