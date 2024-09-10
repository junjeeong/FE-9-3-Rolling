<img width="1008" alt="스크린샷 2024-09-10 오후 12 55 28" src="https://github.com/user-attachments/assets/4b6d0452-5757-428b-8ab8-6ae236e721d5">

## Rolling 롤링페이퍼를 만들어 친구들과 공유해보세요!! 😝
Rolling은 롤링 페이퍼를 만들고 친구들에게 공유할 수 있는 웹 서비스입니다.</br>
React를 사용한 동적인 웹 애플리케이션이며, Vite를 통해 빠르고 효율적인 개발 환경을 제공합니다.

## 팀원 소개

<table>
 <tr>
    <td align="center"><a href="https://github.com/junjeeong" target="_blank"><img src="https://avatars.githubusercontent.com/u/81373171?v=4" width="130px;" alt="정준영"></a></td>
    <td align="center"><a href="https://github.com/kim-miso" target="_blank"> <img src="https://avatars.githubusercontent.com/u/140625982?v=4" width="130px"alt="김미소"></a></td>
    <td align="center"><a href="https://github.com/yyezzzy" target="_blank"><img src="https://avatars.githubusercontent.com/u/128662353?v=4" width="130px;" alt="김예지"></a></td>
   <td align="center"><a href="https://github.com/cccwon2" target="_blank"> <img src="https://avatars.githubusercontent.com/u/10387266?v=4" width="130px;" alt="김원"></a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/junjeeong"><b>정준영</b></a></td>
    <td align="center"><a href="https://github.com/kim-miso"><b>김미소</b></a></td>
    <td align="center"><a href="https://github.com/yyezzzy"><b>김예지</b></a></td>
    <td align="center"><a href="https://github.com/cccwon2"><b>김원</b></a></td>
  </tr>
  <tr>
    <td align="center">PostPage</br> PostPage{edit} 작업</td>
    <td align="center">HomePage</br> ListPage 작업</td>
    <td align="center">PostPage</br> PostPage{edit} 작업</td>
    <td align="center">ToPage</br> FromPage 작업</td>
  </tr>
</table>

## 브랜치 전략
- **main** : 안정적인 프로덕션 상태의 코드가 위치합니다.
- **dev** : 개발 중인 최신 코드가 위치하며, 새로운 기능과 수정 사항이 통합됩니다.
- **[이름]** : 페이지 단위로 작업을 나누었으며 최종적으로 dev 브랜치에 merge합니다.

## 기술 스택

- **Tech** : HTMl, CSS, Javscript, React, Vite, Axios, Styled Components, Jotai
- **Design** : Figma
- **Code Convention** : Prettier, ESLint
- **Communication** : Discord, Notion, Github

## 신경쓴 부분
- 코드의 재사용성과 유지보수성을 높이기 위해 Container-Presentation 디자인 패턴을 채택하였습니다.
- 학습곡선이 비교적 낮고 간단한 전역 상태 관리를 위해 Jotai 라이브러리를 사용하였습니다.
- 코드의 재사용성을 높이고 상태 관리를 간단하게 하기 위해 API 관련 함수들은 Custom Hook으로 만들었습니다.

## 페이지별 기능
### [HomePage]
- 간단한 소개 페이지입니다.
- "롤링 페이퍼 만들기" 버튼을 누르면 To페이지로 이동합니다.
- "구경해보기" 버튼을 누르면 ListPage로 이동합니다.

### [ListPage]
- 사용자가 작성한 롤링페이퍼들을 인기순, 최신 순으로 나누어 정렬해줍니다.
- 화면에는 4개의 롤링페이퍼만 보이도록 페이지네이션 기능을 적용했습니다.
- 최신순은 20개의 데이터를 불러와서 총 5페이지까지만 보이도록 구성했습니다.
- 인기순은 20개의 데이터를 불러와서 8개만 보이도록 구성했습니다.
- 롤링페이퍼를 누르면 PostPage로 이동합니다.
- "나도 만들어보기" 버튼을 누르면 ToPage로 이동합니다.

### [PostPage]
- 헤더에 메시지 카운터 기능을 제공합니다.
- 사용자가 롤링페이퍼를 열람할 때 리액션을 추가할 수 있도록 이모지 추가 기능을 제공합니다.
- 카톡 공유 기능과 URL 복사 기능을 제공합니다.
- URL 공유를 클릭하면 하단에 알람문구가 뜨는 toast 기능을 제공합니다.
- API에서 데이터를 요청해 포스트 형태로 렌더링합니다.
- 사용자가 스크롤을 내리면 계속 새로운 카드를 불러오는 무한 스크롤 기능을 제공합니다.
- 포스트를 누르면 팝업으로 상세한 내용이 보이는 modal 기능을 제공합니다.
- [+] 카드를 누르면 FromPage로 이동합니다.


  
### [PostPage{edit}]
- 아직은 로그인 기능이 없어 URL에 직접 "edit"를 넣어주어야 합니다.
- 쓰레기통 버튼을 누르면 Card가 삭제되는 기능을 제공합니다.
- "삭제하기" 버튼을 누르면 롤링 페이퍼가 삭제되는 기능을 제공합니다.

### [ToPage]
- 배경을 컬러,이미지 중 하나로 선택할 수 있습니다.
- 이름과 배경을 선택하면 "생성하기" 버튼이 활성화됩니다.
- "생성하기" 버튼을 누르면 롤링 페이퍼가 생성되고 PostPage로 이동합니다.

### [FromPage]
- 프로필 선택 기능을 제공합니다.
- 관계 선택 기능을 제공합니다.
- 텍스트 에디터를 제공합니다.
- 폰트를 총 4개 선택할 수 있습니다.
