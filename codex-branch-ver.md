# codex 브랜치 버전 관리

이 문서는 `codex` 브랜치의 공개 확인 링크, 현재 브랜치 상태, 주요 수정사항, 요구사항 메모를 한 곳에 모아 관리하기 위한 기록 파일이다.

## 1. 웹 확인 링크

- 최신 기준 링크: https://presentationvibecodex-67q6ggmuu-woowa0913s-projects.vercel.app
- 공개 확인 링크(alias): https://presentationvibecodex.vercel.app
- Vercel 프로젝트: `presentation_vibe_codex`
- 마지막 프로덕션 배포 확인 시각: 2026-04-10 16:26:31 KST
- 프로덕션 배포 URL: `https://presentationvibecodex-oxa4ze8a1-woowa0913s-projects.vercel.app`
- 최신 preview 배포 확인 시각: 2026-04-14 10:11:30 KST
- 최신 preview 배포 URL: `https://presentationvibecodex-67q6ggmuu-woowa0913s-projects.vercel.app`
- 직전 기준 preview URL: `https://presentationvibecodex-8g06yd552-woowa0913s-projects.vercel.app`

### 확인 메모

- 공개 alias인 `https://presentationvibecodex.vercel.app`는 현재 브라우저로 바로 열 수 있다.
- 최신 preview 배포는 `vercel curl`로 확인했을 때 새 도입 슬라이드 제목 `오늘 이 자리는 다독(多讀)의 시간입니다`가 실제 포함되어 있다.
- 최신 preview 배포는 `vercel curl` 기준 `다상량(多商量)`, `기분 좋은 자극제가 되길 바랍니다.`, `<div class="branch-label">codex 브랜치</div>` 문자열도 실제 포함되어 있다.
- 다만 개별 preview 배포 URL은 현재 Vercel Authentication 보호가 걸려 있어, 접근 시 Vercel 인증이 필요할 수 있다.
- 공개 alias 응답의 `css/wanted-theme.css?v=32` 기준으로 보면, 현재 공개 링크는 `8dfae5e` 시점의 결과물과 일치한다.
- 즉, 공개 alias는 최신 `codex` HEAD가 아니라 이전 프로덕션 버전을 가리키고 있다.

### 작업 기준 선언

- 앞으로 `codex` 브랜치 작업 기준본은 아래 링크로 고정한다.
- 기준 링크: `https://presentationvibecodex-67q6ggmuu-woowa0913s-projects.vercel.app`
- 사용 목적: `codex` 브랜치 관련 화면 확인, 비교, 요구사항 기준점, 회귀 확인의 기본 참조본

## 2. 현재 브랜치 상태

- 브랜치: `codex`
- 현재 HEAD 요약: `feat: add intro reading-time slide`
- 커밋 메시지: `feat: add intro reading-time slide`
- HEAD 시각: 2026-04-14 10:14:03 KST
- 현재 확인 시점 상태: 도입 슬라이드 추가 반영 및 문서 동기화 완료

## 3. 기술/구조 요약

- 프레젠테이션 방식: 정적 `Reveal.js` 기반 웹 슬라이드
- 엔트리 파일: `index.html`
- 핵심 스타일: `css/wanted-theme.css`
- 보조 스크립트:
  - `js/beam-effect.js`
  - `js/hero-text-clip.js`
  - `js/demo-loader.js`
- 의존성:
  - runtime: `reveal.js`
  - dev: `playwright`

## 4. 공개 버전과 HEAD 차이

### 공개 링크 기준

- 공개 alias는 `css/wanted-theme.css?v=32`
- 이 값은 `8dfae5e` 커밋의 `index.html`과 일치한다.
- 따라서 현재 공개 링크는 "HRD 메이커 초대형 개편" 시점 산출물로 보는 것이 가장 안전하다.

### 현재 HEAD 기준

- 현재 `codex` 브랜치 HEAD는 `8cb1c48`
- 최신 preview 배포 `8g06yd552`의 생성 시각은 2026-04-11 00:56:39 KST로, HEAD 커밋 시각과 거의 동일하다.
- 최신 preview 배포에서는 `learningRailSwitch`와 관련 레이블/스크립트가 실제 확인되었다.
- `8dfae5e` 이후 추가 반영된 대표 변경:
  - `1ecde6f`: 내러티브 재구성
  - `b326969`: 클릭 레일 메타포 슬라이드 추가
  - `2b0f2e8`: 클릭 레일 애니메이션 적용
  - `2430ef2`: 사례 데모 통합
  - `8cb1c48`: 학습 성장 레일 고도화

## 5. 주요 수정 이력

### Phase 1. 인터랙션/오프닝 기반 구성

| Commit | 일시 | 변경 내용 |
|---|---|---|
| `2b7cff8` | 2026-04-09 21:40 | 전 슬라이드 마우스 beam effect 추가 |
| `6d009d1` | 2026-04-09 21:42 | beam 색상 원본 계열로 조정 |
| `4d1ff74` | 2026-04-09 21:47 | beam을 ribbon trail 효과로 교체 |
| `725c569` | 2026-04-09 21:56 | trail effect 재현도 보정 |
| `c22e2c9` | 2026-04-10 08:40 | 챕터 배경 순환, 섹션 이미지, 상단 네비게이션 바 도입 |
| `db103a8` | 2026-04-10 08:52 | hero 비디오 슬라이드, nav auto-hide, effect toggle 추가 |

### Phase 2. 인트로/hero 정렬 및 비주얼 정교화

| Commit | 일시 | 변경 내용 |
|---|---|---|
| `eb20059` | 2026-04-10 09:10 | hero 텍스트 확대, 비디오 풀스크린 보정 |
| `d4ee728` | 2026-04-10 09:16 | hero 비디오/로고 위치 보정 |
| `2d80a2c` | 2026-04-10 09:25 | 발표자 정보 및 텍스트 크기 조정 |
| `b18ad56` | 2026-04-10 09:37 | 인트로 페이지를 타이틀 레이아웃과 유사하게 조정 |
| `bc7874b` | 2026-04-10 09:50 | 인트로 중앙 정렬 개선 |
| `bbfb6d7` | 2026-04-10 09:55 | mix-blend-mode 안정화 |
| `32fd748` | 2026-04-10 10:18 | 인트로 블루 톤/텍스트 조정 |
| `2e6b38e` | 2026-04-10 10:24 | 비디오 기반 동적 블루 텍스트 효과 추가 |
| `363f28d` | 2026-04-10 10:29 | isolation container 정리 |
| `0e3275b` | 2026-04-10 10:34 | pixel-level video-to-text mapping 도입 |
| `ddf1958` | 2026-04-10 10:46 | 로컬 비디오 기반 text clip 동작 보정 |
| `33533b6` | 2026-04-10 10:49 | 텍스트 톤 불투명도 조정 |
| `4fe2bcc` | 2026-04-10 10:57 | 밝은 배경은 남색, 어두운 배경은 흰색으로 맵핑 반전 |
| `1756a91` | 2026-04-10 11:04 | 인트로 로고 정렬 보정 |
| `190373a` | 2026-04-10 11:13 | hero 로고 위치를 타이틀 기준에 맞춤 |
| `fbd5c51` | 2026-04-10 11:24 | source coordinate 기준 로고 스케일 보정 |
| `2474e17` | 2026-04-10 11:34 | hero 로고/텍스트를 Reveal section 내부로 이동 |
| `8239478` | 2026-04-10 12:45 | intro 브랜드 마크와 타이틀 정렬 완료 |

### Phase 3. 스토리/슬라이드 구조 확장

| Commit | 일시 | 변경 내용 |
|---|---|---|
| `8dfae5e` | 2026-04-10 14:42 | HRD 메이커 발표 대규모 개편 |
| `1ecde6f` | 2026-04-10 17:47 | 내러티브 재구성 |
| `b326969` | 2026-04-10 18:10 | 클릭 레일 메타포 슬라이드 추가 |
| `2b0f2e8` | 2026-04-10 18:23 | 클릭 레일 애니메이션 적용 |
| `2430ef2` | 2026-04-11 00:35 | 사례 데모를 슬라이드에 통합 |
| `8cb1c48` | 2026-04-11 00:56 | 학습 성장 레일 슬라이드 고도화 |

## 6. 요구사항 기록

### 문서/운영 요구사항

| 날짜 | 요청자 | 요구사항 |
|---|---|---|
| 2026-04-13 | user | 별도 언급 전까지 `codex` 브랜치 기준으로 작업 |
| 2026-04-13 | user | `codex` 브랜치를 웹에서 확인할 수 있는 링크 제공 |
| 2026-04-13 | user | `codex-branch-ver.md`를 생성해 버전 관리 기록 유지 |
| 2026-04-13 | user | `codex` 브랜치 수정사항 및 요구사항을 이 문서에 누적 기록 |
| 2026-04-13 | user | `https://presentationvibecodex-8g06yd552-woowa0913s-projects.vercel.app` 를 `codex` 브랜치 최신 기준 링크로 기록 |
| 2026-04-13 | user | 앞으로 `codex` 브랜치 작업은 위 기준 링크를 기반으로 진행 |
| 2026-04-14 | user | `Intro — 이 발표를 시작하기 전에` 도입 슬라이드 1장 추가 |
| 2026-04-14 | user | 작업 완료 시 `codex` 브랜치만 커밋/푸시하고 웹 링크 제공, `main`은 건드리지 않기 |
| 2026-04-14 | user | 완료 후 최신 `codex` 웹 링크를 기준 링크로 갱신해 관리 |

### 제품 요구사항 요약

`PRD.md`, `DESIGN_PRINCIPLES.md` 기준 핵심 요구사항:

- HIGH FIVE 26 PPT 템플릿을 웹에서 최대한 충실히 재현
- `Reveal.js` 기반 정적 발표 구조 유지
- 간지 배경과 본문 배경을 엄격히 분리
- 발표 자체가 바이브 코딩 사례가 되도록 메타 스토리 유지
- iframe 데모와 fallback 체계를 포함
- 1920x1080 기준 발표 품질 확보
- 타이틀, 목차, Q&A, 마무리 등 PPT 원본 좌표/배경 규칙 준수

## 7. 다음 업데이트 규칙

- `codex` 브랜치에서 커밋이 추가되면 이 문서의 `현재 브랜치 상태`와 `주요 수정 이력`을 함께 갱신한다.
- 공개 배포가 새로 나가면 `웹 확인 링크` 섹션에 배포 시각과 공개/보호 여부를 같이 기록한다.
- 사용자의 운영 요청이 생기면 `요구사항 기록` 표에 날짜와 함께 추가한다.

## 8. 최근 작업

### 2026-04-14 — 도입부 Intro 슬라이드 추가

- 커밋 메시지: `feat: add intro reading-time slide`
- 요청 목적: 본편으로 들어가기 전에 청중이 사례를 "읽는 시간"이라는 프레임으로 발표를 받아들이도록 도입 슬라이드 1장 추가
- 반영 위치: `index` 슬라이드 다음, Chapter 1 간지 직전
- 위치 판단 메모: 현재 `codex` 브랜치에는 별도 `Intro — 이 발표를 시작하기 전에` 섹션이 독립적으로 존재하지 않아, 가장 자연스러운 도입부 구간인 `index`와 `ch1` 사이에 배치
- 제목: `오늘 이 자리는 다독(多讀)의 시간입니다`
- 구성:
  - 1단계: 질문과 답, `다독(多讀) · 다상량(多商量) · 다작(多作)` 강조 타이포
  - 2단계: 바이브 코딩 사례 부족 문제 제기, `가능성을 읽는 시간` / `다작을 꿈꾸는 시간` 메시지, 마무리 자극 문장
- 인터랙션: Reveal fragment를 사용해 2단계 블록이 순차 등장하도록 구성
- 스타일 메모:
  - 기존 흰 배경 본문 슬라이드 톤 유지
  - WantedSans 및 기존 포인트 컬러 사용
  - 충분한 여백과 대형 타이포 중심으로 호흡감 확보
- 배포 메모: preview `https://presentationvibecodex-67q6ggmuu-woowa0913s-projects.vercel.app` 에서 새 슬라이드와 `codex 브랜치` 라벨 확인
