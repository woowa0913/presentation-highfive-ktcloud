# claude 브랜치 버전 관리

> 브랜치: `claude`  
> 배포 링크: https://presentationvibe-git-claude-woowa0913s-projects.vercel.app  
> 마지막 업데이트: 2026-04-13

---

## 현재 슬라이드 구조 (20슬라이드)

| # | data-chapter | 내용 | 배경 |
|---|-------------|------|------|
| 0 | hero | 영상 배경 Intro | 영상 fullscreen |
| 1 | intro | Title 슬라이드 | image1.png |
| 2 | index | 목차 | image2.png |
| 3 | ch1 간지 | HRD, 왜 '메이커'가 되어야 하는가 | image3.png |
| 4 | ch1 | 아이디어는 있는데, 만들 수가 없다 | #FFFFFF |
| 5 | ch1 | HRD는 어디로 진화하는가 | #FFFFFF |
| 6 | ch2 간지 | 바이브 코딩이란 무엇인가 | image4.png |
| 7 | ch2 | 유튜브에서 만난, 우연한 영상 | #0a0a0a |
| 8 | ch3 간지 | 실제 사례: 만들어본 것들 | image5.png |
| 9 | ch3 | 앱 갤러리 A (온보딩) | #FFFFFF |
| 10 | ch3 | 앱 갤러리 B (리더십) | #FFFFFF |
| 11 | ch4 간지 | 어떻게 만들었나: 프로세스와 도구 | image6.png |
| 12 | ch4 | ADDIE × 바이브코딩 / 5대 역량 | #0a0a0a |
| 13 | ch4 | 퀵스타트 가이드 / 리스크 / AI 리터러시 | #0a0a0a |
| 14 | ch5 간지 | HRD 메이커 시대의 생존 전략 | image3.png |
| 15 | ch5 | 생존 전략 본문 | #FFFFFF |
| 16 | closing | META (auto-animate A) | image1.png |
| 17 | closing | META (auto-animate B) | image1.png |
| 18 | closing | Q&A | image7.png |
| 19 | closing | 기차 레일 — 레벨스위치 대 딸깍 | image10.png |

---

## 버전 이력

### v0.9 — 2026-04-13 (`f95509b`)
**fix: dark slide text visibility and rail sequential fragments**
- CSS: `.slide-body.maker p/li`, `.maker-card p/li` 색상 override 추가
  - Reveal.js `.reveal p` 우선순위가 `.maker-text` 색상을 덮어쓰던 버그 수정
  - 영향 슬라이드: kt cloud 2033 카드, 1on1 시뮬레이터 카드 (검정 배경)
- 레일 슬라이드 3단계 fragment 분리:
  - Fragment 1: 대/딸깍 텍스트 + 커넥터 (`rail-daltak-group`)
  - Fragment 2: 중앙 타원 + 레벨스위치 + HRD×AI×바이브코딩 (`rail-center-group`)
  - Fragment 3: 내부 레일 + 기차 (`inner-rail-group`)

### v0.8 — 2026-04-13 (`73656b7`)
**fix: apply 12-point design feedback**
- 12개 항목 디자인 피드백 반영 (텍스트 크기, 여백, 계층 구조 등)

### v0.7 — 2026-04-13 (`4c6e53f`)
**design: comprehensive body slide overhaul — bigger fonts, cleaner hierarchy**
- 본문 슬라이드 전체 폰트 크기 확대
- 시각적 계층 구조 정리
- 불필요한 AI 느낌 디자인 요소 제거

### v0.6 — 2026-04-13 (`47d0fe4`)
**feat: add 5 new slides from image content**
- 이미지 원본 콘텐츠 기반 5개 슬라이드 추가:
  - ADDIE × 바이브코딩 프레임워크
  - HRD 메이커 5대 역량
  - 퀵스타트 가이드 (30분 도전)
  - 리스크 & 한계 슬라이드
  - AI 리터러시 격차 슬라이드

### v0.5 — 2026-04-12 (`34fd02c`)
**feat: 콘텐츠 보강 — 이론 인용·흐름 재구성·UX 개선**
- 슬라이드 23/24 순서 변경: 성과 그래프(동기부여) → 3단계 공식(실행방법)
- Flow Theory(Csikszentmihalyi) + Progress Principle(Amabile) 이론 각주 추가
- 성과 그래프: 선 중간 인라인 레이블 + Mollick(2023) 연구 출처 각주
- 간지 슬라이드 6개에 zoom-in fade-out 전환 효과 추가
- CH2 화살표 non-fragment 처리 (클릭 수 7→4 감소)
- HRD 메이커 원: 내부 원 pulse 애니메이션 (등장 후 3회)
- META 슬라이드: data-id auto-animate 크기 변환 효과 강화
- Rail Switch 버튼: SVG rect 클릭 시 `Reveal.nextFragment()` 연동
- 팀원 카드: 박창윤 두 카드를 아이콘/색상/앱명으로 명확히 구분
- CLOSING 슬라이드: 핵심 메시지 + 사이트 URL + 연락처 추가

### v0.4 — 2026-04-11 (`ce677bd`)
**feat: items 7-15 complete overhaul**
- CH6 팀 소개: "코딩 경험 0명에서 시작" 메시지 Fragment 제거 → 항상 노출
- CH6 PI: 3-column 등폭 레이아웃, 텍스트 색상 명시적 지정
- 기차 레일: 6개 역 이름 확정 (문제인식~효과측정), START/GOAL/Rail Switch/대딸깍 배치
- END 3-steps: 화살표 컬럼 80px→120px, 크기 2.2em→2.8em
- END 그래프: SVG viewBox 800×260→920×300, overflow:visible, 설명 카드 아래 배치

### v0.3 — 2026-04-11 (`7c4f76c`)
**feat: 15-item layout overhaul**
- CH4↔CH5 순서 교체: 리더십(04) ↔ 온보딩(05)
- CH1-p1: 3-column 수평 카드 (내부개발자/외주/지인)
- CH1-p2: 4-column 진화 카드 (Operator→Curator→Designer→**Maker**)
- CH2-p1: 2×2 스토리 그리드, 텍스트 색상 명시적 지정
- CH2-p2: 배경 #0A0A0F→#FFFFFF, AI 색상 제거, 핵심 메시지 상단 배치
- CH2-p3: 원형 다이어그램 크기 확대 (480px), 내부 원 inset:22%
- CH4(리더십): 4개 앱 카드 (DISC/KAC서류/KAC모의/1on1)
- CH5(온보딩): 3-column 그리드, 스크린샷 미리보기
- 기차 레일: 6개 역 이름 변경, Rail Switch 버튼 추가

### v0.2 — 2026-04-10 (`75db6ec` ~ `bce8f75`)
**feat: 기차 레일 슬라이드 + 발표 흐름 전면 재구조화**
- 기차 레일 슬라이드: 화면 전체 SVG 타원 레일, `animateMotion` 기차 순환
- 내부 민트 레일: fragment 클릭 시 페이드인 + 빠른 기차
- 발표 흐름 재구조화: 6챕터 → Hero/Intro/Index/CH1~5/Closing
- Hero 슬라이드: fullscreen 영상 배경, 챕터 네비 자동 숨김
- 챕터 네비 바: 상단 고정, 교번 배경색 (흰/검정)

### v0.1 — 2026-04-09 (`e777a9f` ~ `c22e2c9`)
**feat: HIGH FIVE 26 초기 빌드**
- Reveal.js 기반 웹 프레젠테이션 초기 구현
- vendor/reveal 로컬 번들 (Vercel 배포용)
- 마우스 빔 캔버스 이펙트 (knolskape.com 스타일 trail)
- 좌우 커스텀 네비 버튼
- 교번 챕터 배경 (흰/검정), 순환 섹션 이미지

---

## 요구사항 & 미완료 항목

### 완료
| 항목 | 슬라이드 | 완료 커밋 |
|------|---------|----------|
| CH1-p1 3-column 카드 레이아웃 | 4p | `9d0e3d4` |
| CH1-p2 진화 4-column 카드 | 5p | `9d0e3d4` |
| CH2-p1 스토리 그리드, 텍스트 수정 | 7p | `7c4f76c` |
| CH2-p2 흰 배경 전환, AI 색상 제거 | 8p | `7c4f76c` |
| CH2-p3 원형 다이어그램 확대 | 9p | `7c4f76c` |
| CH6 팀 소개 메시지 상시 노출 | 18p | `ce677bd` |
| CH6 PI 3-column 텍스트 수정 | 19p | `ce677bd` |
| 기차 레일 역 이름·Rail Switch 버튼 | 22p | `ce677bd` |
| END 3-steps 화살표 간격 | 23p | `ce677bd` |
| END 그래프 SVG 확대·잘림 제거 | 24p | `ce677bd` |
| ADDIE·5대역량·퀵스타트·리스크·AI리터러시 슬라이드 추가 | 12~13p | `47d0fe4` |
| 다크 슬라이드 텍스트 가시성 수정 | 전체 | `f95509b` |
| 레일 3단계 fragment 분리 | 19p | `f95509b` |

### 미완료 / 추후 검토
| 항목 | 슬라이드 | 상세 |
|------|---------|------|
| CH4 간지 텍스트 색상 | 11p | image6 배경에 흰 텍스트 + text-shadow 필요 |
| 온보딩 앱 카드 재설계 | 9p | journey flow (입사전→당일→기간) + mockup 헤더 + 2개 태그 |
| 리더십 앱 카드 재설계 | 10p | Practice 01~04 태그 + journey 단계 태그, ktc 참고 |
| Index 슬라이드 레이블 | 2p | 현재 CH 번호 표기 확인 필요 |
| CH5 생존 전략 본문 내용 보강 | 15p | 현재 단일 슬라이드, 콘텐츠 추가 여부 검토 |

---

## CSS 변수 (주요)

```css
/* 다크 슬라이드 (ch2, ch4) */
--maker-violet: #6C63FF;
--maker-mint:   #00D4AA;
--maker-bg:     #0A0A0F;
--maker-text:   #B0B0C0;
--maker-card-bg: rgba(255,255,255,0.05);

/* 라이트 슬라이드 (ch1, ch3, ch5) */
--wanted-accent1: #00A2FF;  /* blue */
--wanted-accent2: #16E7CF;  /* mint */
--wanted-dark:    #1A1538;
--wanted-gray:    #6B7080;
```

---

## 배포 정보

- **브랜치 별칭 URL**: https://presentationvibe-git-claude-woowa0913s-projects.vercel.app
- **최신 배포 URL**: https://presentationvibe-4yl3udblh-woowa0913s-projects.vercel.app
- **Vercel 프로젝트**: `presentation_vibe` (`prj_j3cuNzWqdURlr7kSO7IehpThXrDs`)
- **GitHub**: https://github.com/woowa0913/presentation-highfive-ktcloud/tree/claude
