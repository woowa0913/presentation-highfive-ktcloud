# PRD — claude 브랜치 요구사항

> 브랜치: `claude` | 배포: https://pv-claude.vercel.app/index_reveal.html  
> 최종 업데이트: 2026-04-12

---

## 슬라이드 구조 (28슬라이드)

| # | 챕터 | 슬라이드명 |
|---|------|----------|
| 1 | Hero | 영상 배경 + 텍스트 |
| 2 | intro | Title |
| 3 | index | 목차 |
| 4 | ch1 | CH1 간지 — HRD 담당자의 딜레마 |
| 5 | ch1 | 아이디어는 있는데, 만들 수가 없다 |
| 6 | ch1 | HRD는 어디로 진화하는가 |
| 7 | ch2 | CH2 간지 — 그러다 만난, 바이브 코딩 |
| 8 | ch2 | 유튜브에서 만난, 우연한 영상 |
| 9 | ch2 | 도파민 루프의 시작 |
| 10 | ch2 | HRD × Vibe Coding = HRD 메이커 |
| 11 | ch3 | CH3 간지 — 잠깐, 여러분의 선택은? |
| 12 | ch3 | 실시간 밸런스게임 |
| 13 | ch4 | CH4 간지 |
| 14 | ch4 | CH4 앱 갤러리 |
| 15 | ch5 | CH5 간지 |
| 16 | ch5 | CH5 앱 갤러리 |
| 17 | ch6 | CH6 간지 — 팀이 만든 세계 |
| 18 | ch6 | 나만의 이야기가 아닙니다 (팀 소개) |
| 19 | ch6 | 신입사원 PI 프로젝트 평가 시스템 |
| 20 | ch6 | kt cloud 2033 |
| 21 | ch6 | 1on1 시뮬레이터 |
| 22 | closing | 기차 레일 — 레벨스위치 대 딸깍 |
| 23 | closing | 지금 시작하는 법 — 3단계 공식 |
| 24 | closing | AI를 어떻게 쓰느냐가 성과를 가른다 (그래프) |
| 25-26 | closing | META (이 프레젠테이션도 바이브코딩으로) |
| 27 | closing | Q&A |
| 28 | closing | CLOSING |

---

## 요구사항 전체 목록

### 1. 5페이지 (CH1-p1) — 아이디어는 있는데, 만들 수가 없다
- **상태: ✅ 완료** (commit 9d0e3d4)
- 좌우 2-column 레이아웃 → 3-column 수평 카드로 전환
- 각 카드: 🏢 내부 개발자 의뢰 / 💸 외부 업체 외주 / 🤝 지인 부탁
- 하단 전폭 결론 배너: "세 경로의 공통된 한계" + "늘 그게 한계였다" 강조
- 빈 여백 제거, 좌우 균형 맞춤

### 2. 6페이지 (CH1-p2) — HRD는 어디로 진화하는가
- **상태: ✅ 완료** (commit 9d0e3d4)
- 4-column 진화 카드 (Operator → Curator → Designer → **Maker**) + `›` 화살표 연결
- Maker 카드: 파란 테두리 + 파란 배지 + "✦ 지금, 여기" 강조
- 하단 메시지 배너: `font-size:1.05em`, 그라데이션 배경, 더 넉넉한 padding
- 참고: https://ktc-coachingculture.vercel.app/ 관리자 모드 (우측 네비 1 더블클릭, 비밀번호 0951)

### 3. 8페이지 (CH2-p1) — 유튜브에서 만난, 우연한 영상
- **상태: ✅ 완료** (commit 7c4f76c)
- 2×2 스토리 그리드: ① 유튜브 알고리즘 / ② 맥북 단축키 / ③ 검색해도 없었다→결심 / ④ 30분 만에 완성+도파민
- 안보이는 텍스트 수정: 명시적 색상 지정 (`color:#fff`, `color:rgba(176,176,192,0.9)`)
- 배경: `#0A0A0F`

### 4. 9페이지 (CH2-p2) — 도파민 루프의 시작
- **상태: ✅ 완료** (commit 7c4f76c)
- 안보이는 텍스트 수정
- 배경 `#0A0A0F` → `#FFFFFF` (흰색) 변경 (AI 느낌 제거)
- 핵심 메시지 상단 배치 (fragment 첫 번째)
- Before/After: 표준 blue(`var(--wanted-accent1)`) 팔레트 사용 (AI violet/mint 제거)

### 5. 10페이지 (CH2-p3) — HRD × Vibe Coding = HRD 메이커
- **상태: ✅ 완료** (commit 7c4f76c)
- 원형 다이어그램 크기 확대: `width:min(480px,90%)`
- 내부 원 포지션: `inset:22%` (기존 작은 크기 수정)
- 이미지 위치/여백 레이아웃 수정

### 6. 13페이지 (CH4 간지) — 간지 텍스트 색상
- **상태: ❌ 미완료**
- image3 배경에 section-number "04"와 h2 텍스트가 어두운 배경에서 안 보이는 문제
- 수정 방법: `color:#fff; text-shadow:0 2px 20px rgba(0,0,0,0.9), 0 0 50px rgba(0,0,0,0.7);` 추가

### 7. CH4 ↔ CH5 순서 교체
- **상태: ❌ 미완료**
- 현재: CH4=리더십 메이커, CH5=온보딩 메이커
- 변경 후: **CH4=온보딩 메이커, CH5=리더십 메이커**
- Index 슬라이드도 함께 수정: 04=온보딩 메이커, 05=리더십 메이커
- CH4 간지: image6 배경 + white text
- CH5 간지: image3 배경 + white text + strong text-shadow

### 8. 온보딩 앱 갤러리 (CH4 앱, 교체 후 기준 14페이지)
- **상태: ❌ 미완료**
- 마니또 앱 삭제 (이미 삭제됨)
- 3개 앱 유지: D툰D툰 / 구성원 얼굴 익히기 / 땡큐레터
- 온보딩 여정 흐름 표시: 📅 입사 전 → 🗓 입사 당일 → 📆 온보딩 기간
- 각 카드: 앱별 mockup 스타일 헤더 (색상 그라데이션 + 앱 특성 시각화)
- 더 많은 설명 + 2개 태그 시스템
- 링크 유지

### 9. 리더십 앱 갤러리 (CH5 앱, 교체 후 기준 16페이지)
- **상태: ❌ 미완료**
- 참고: https://ktc-coachingculture.vercel.app/ 앱 소개 순서와 흐름
- 4개 앱: DISC 행동유형 진단 / KAC 서류점검 / KAC 모의고사 / 1on1 코칭 시뮬레이터
- 리더십 여정 흐름 표시: 🧠 팀 진단 → 📋 자격 도전 → 🎯 합격 준비 → 💬 스킬 내재화
- 각 카드: Practice 01~04 태그 + journey 단계 태그
- 앱별 mockup 스타일 헤더

### 10. 18페이지 (CH6-team) — 팀 소개
- **상태: ✅ 완료** (commit ce677bd)
- "코딩 경험 0명에서 시작 → 팀 HRD 도구 6개+ 보유" 메시지를 Fragment 제거
- 슬라이드 진입 시 상단에 항상 노출
- gradient 배경 배너로 강조

### 11. 19페이지 (CH6-PI) — PI 평가 시스템
- **상태: ✅ 완료** (commit ce677bd)
- 안보이는 텍스트 수정: 모든 텍스트에 명시적 색상 지정
- 3-element 구조 확인: 배경 / 기능 / 결과 (이 구조 유지)
- `body-title`에 `accent-mint` 강조

### 12. 기차 레일 슬라이드 (22페이지)
- **상태: ✅ 완료** (commit ce677bd)
- 6개 역 이름 유지: 문제 인식 / 요구 분석 / 솔루션 기획 / 개발 & 제작 / 실행 & 운영 / 효과 측정
- START/GOAL → Rail Switch 버튼 → 대 딸깍 순서로 상단에 바로 붙여서 배치
- compact: START(y=160), RailSwitch(y=222), 대딸깍(y=340)

### 13. 23페이지 (END-3steps) — 지금 시작하는 법
- **상태: ✅ 완료** (commit ce677bd)
- 화살표가 번호 카드에 너무 가까운 문제 해결
- grid 화살표 컬럼: 80px → 120px, 화살표 크기 2.2em → 2.8em

### 14. 24페이지 (END-graph) — 성과 그래프
- **상태: ✅ 완료** (commit ce677bd)
- 그래프 SVG 확대: viewBox `800×260` → `920×300`
- 컨테이너 높이: `flex:0 0 52%` → `flex:0 0 62%`
- 잘림(clipping) 제거: `overflow:visible`
- CSS draw-line 애니메이션 유지 + 경로 업데이트
- 설명 카드는 그래프 아래 2-column 배치

---

## 기술 스택

- **프레임워크**: Reveal.js 6.x (순수 HTML/CSS/JS, 빌드 없음)
- **CSS 테마**: `css/wanted-theme.css` (버전 캐시버스팅 `?v=N`)
- **배포**: Vercel CLI (`npx vercel --prod --yes` + alias)
- **Git**: `claude` 브랜치, worktree at `/tmp/pv-claude`

### CSS 변수 (다크 슬라이드)
```css
--maker-violet: #6C63FF
--maker-mint:   #00D4AA
--maker-bg:     #0A0A0F
--maker-text:   #B0B0C0
--maker-card-bg: rgba(255,255,255,0.05)
```

### CSS 변수 (라이트 슬라이드)
```css
--wanted-accent1: #00A2FF  (blue)
--wanted-accent2: #16E7CF  (mint)
--wanted-dark:    #1A1538
--wanted-gray:    #6B7080
```

---

## 배포 절차

```bash
cd /tmp/pv-claude
git add index_reveal.html
git commit -m "feat: ..."
npx vercel --prod --yes
npx vercel alias <new-url>.vercel.app pv-claude.vercel.app
```

---

## 미완료 항목 요약 (재작업 필요)

| 항목 | 슬라이드 | 내용 |
|------|---------|------|
| CH4 간지 텍스트 색상 | 13p | image3 배경에 white text + text-shadow |
| CH4↔CH5 순서 교체 | 전체 | 온보딩→CH4, 리더십→CH5 |
| 온보딩 앱 카드 재설계 | 14p (교체 후) | journey flow + mockup 헤더 + 2개 태그 |
| 리더십 앱 카드 재설계 | 16p (교체 후) | journey flow + Practice 태그 + ktc 참고 |
| Index 슬라이드 레이블 | 3p | 04=온보딩, 05=리더십으로 변경 |
