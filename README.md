# 아힘하 사이트

공구 판매자와 온라인 초보 셀러를 위한 운영 도우미 사이트입니다.

## 주요 화면

- `index.html`: 메인 이미지 슬라이드, 문제 제기, 차별점, 서비스 미리보기
- `pages/services.html`: 서비스 상세 목록과 장바구니 담기
- `pages/market.html`: 업종별 품목 선택, 찜한 품목 저장, 104,177개 기준가 카탈로그 기반 상품 가격검색, 식당 메뉴 원가 계산
- `pages/tools.html`: 무료 마진 계산기와 공구 준비 체크
- `pages/samples.html`: 주문관리표, 안내문, 상세페이지 문구 샘플
- `pages/guide.html`: 이용 순서와 자료 준비 체크리스트
- `pages/notice.html`: 공지사항 목록, 검색, 상세 안내
- `pages/support.html`: 고객센터, 문의 폼, Instagram/KakaoTalk 연결 예정 자리
- `pages/cart.html`: 장바구니 수량 변경, 삭제, 예상 합계 계산
- `pages/checkout.html`: 결제 준비와 주문 상담 접수 화면
- `pages/mypage.html`: 주문 내역과 상담 상태가 들어갈 마이페이지
- `pages/login.html`: 로그인 화면
- `pages/signup.html`: 회원가입 화면
- `pages/find-account.html`: ID/PW 찾기 화면
- `pages/terms.html`: 이용약관 자리
- `pages/privacy.html`: 개인정보처리방침 자리
- `pages/admin.html`: 관리자 확인용 대시보드. 현재는 정적 사이트용 임시 로그인 잠금이며, 실제 배포 전에는 서버 로그인 보호 필요

## 기능

- 이미지 슬라이드
- 실제 하위 페이지 이동
- localStorage 기반 장바구니
- 장바구니 배지 자동 갱신
- 공지사항 검색
- 마진 계산기
- 104,177개 상품 검색형 원가/판매가/마진 비교
- 한식, 중식, 치킨, 카페 등 16개 업종별 식당 필요 품목 분류
- 식당 필수 재료, 자주 쓰는 재료, 포장/소모품, 기타 품목 가격검색 연결
- localStorage 기반 찜한 품목 저장과 가격보기 연결
- 식당 메뉴 그램수 기반 재료 원가 계산
- 공구 준비율 체크
- 백엔드 연결 전 임시 폼 안내
- 모바일 메뉴
- 결제 준비 페이지 이동
- 마이페이지, 약관, 개인정보 페이지
- 관리자용 운영 체크 대시보드

## 로컬 실행

VS Code 터미널에서:

```powershell
python -m http.server 5500
```

Chrome에서:

```text
http://localhost:5500
```

## 나중에 연결할 정보

- Instagram 프로필 URL
- KakaoTalk 채널 URL
- 실제 문의 이메일 또는 폼 링크
- 결제 링크 또는 결제대행사 정보
- 사업자 정보와 통신판매업 신고번호
