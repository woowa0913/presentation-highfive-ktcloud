# stich 브랜치 버전 관리

> 브랜치: `stich` (gemini 브랜치에서 분기)  
> 배포 링크: https://presentationvibe-git-stich-woowa0913s-projects.vercel.app  
> 마지막 업데이트: 2026-04-14 (v1.0)

---

## 현재 슬라이드 구조 (50 sections)

| # | data-chapter | 내용 | 배경 |
|---|-------------|------|------|
| 0 | hero | 영상 배경 Intro | 영상 fullscreen |
| 1 | intro | 다독 슬라이드 — "오늘 이 자리는 다독의 시간입니다" | #0a0a0a |
| 2 | intro | Title 슬라이드 | image1.png |
| 3 | index | 목차 | image2.png |
| 4 | ch1 간지 | HRD 담당자의 딜레마 | image3.png |
| 5~11 | ch1 | 본문 슬라이드 7개 (흰/검정 교차) | mixed |
| 12 | ch2 간지 | 그러다 만난, 바이브 코딩 | image4.png |
| 13~21 | ch2 | 본문 슬라이드 9개 | #FFFFFF / #0a0a0f |
| 22 | ch3 간지 | 당신의 선택은? (밸런스게임) | image5.png |
| 23~24 | ch3 | 본문 슬라이드 2개 | #FFFFFF |
| 25 | ch4 간지 | 리더십 메이커 | image6.png |
| 26~35 | ch4 | 본문 슬라이드 10개 + 간지 반복 | mixed |
| 36 | ch5 간지 | 온보딩 메이커 | image3.png |
| 37~39 | ch5 | 본문 슬라이드 3개 | #FFFFFF |
| 40~49 | ch6/closing | 팀이 만든 세계 + Closing | mixed |

---

## 분기 기록

- **분기 시점**: gemini 브랜치 `14ce5c7` (feat: add intro preamble slide 'Dadok time')
- **분기일**: 2026-04-14
- **gemini 배포 링크**: https://presentationvibe-git-gemini-woowa0913s-projects.vercel.app

---

## 버전 이력

### v1.0 — 2026-04-14
**design: MONOLITH 디자인 시스템 전면 적용 (Stitch 디자인 원칙 기반)**

CSS 변경 (wanted-theme.css +417줄):
- MONOLITH 디자인 토큰 추가 (다크: #000000/#3363FF, 라이트: #f7f9fd/#0047e4)
- 폰트: Plus Jakarta Sans (헤드라인), Inter (본문), Noto Sans KR (한국어 폴백)
- `.slide-body` 라이트 모드 오버라이드: #f7f9fd 배경, 깔끔한 카드 (soft shadow)
- `.slide-body.dark` 다크 모드 오버라이드: #000000 배경, glass panel 카드
- `.body-title::after` 데코레이티브 블루 라인 (다크에서 neon glow)
- Progress bar: hover-only 표시 (opacity 0 → hover시 1), 2px, #3363FF
- `.chapter-nav`: 더 어두운 glass panel, #3363FF active 색상
- `.slide-impact-wrap`: 다크 배경 + neon 블루 넘버
- 유틸리티: `.glass-panel`, `.neon-glow`, `.mono-chip`, `.mono-mesh-bg`, `.mono-ambient`

HTML 변경 (index.html +593줄 -170줄):
- Google Fonts (Plus Jakarta Sans, Inter, Material Symbols) 링크 추가
- 라이트 본문 배경: #FFFFFF → #f7f9fd (28개 슬라이드)
- 다크 본문 배경: #0a0a0a/#0a0a0f → #000000 (8개 슬라이드)
- 임팩트 슬라이드 (95%): 라이트 → 다크 배경 전환
- 다크 슬라이드 8개: `mono-mesh-bg` (메시 그라데이션), `glass-panel` (카드), `neon-glow` (강조)
- 전체 본문 35개 슬라이드: `mono-chip` 카테고리 배지 추가 (ASPIRATION, CASE STUDY 등)
- 인라인 accent 색상: var(--wanted-accent1) → #3363FF / var(--mono-neon)

보호된 슬라이드 (변경 없음):
- hero, title, 간지 (6개), index, closing (4개)

### v0.1 — 2026-04-14
**chore: 브랜치 라벨 gemini → stich 변경**
- 좌측 하단 고정 라벨: "gemini 브랜치" → "stich 브랜치"로 변경 (index.html:1333)

### v0.0 — 2026-04-14 (`14ce5c7`, gemini에서 복사)
**초기 분기 — gemini 브랜치 전체 복제**
- gemini 브랜치 최신 상태 그대로 복사
- 50개 section, 6챕터 + intro/closing 구조
- 주요 gemini 이력 포함:
  - 다독 intro 슬라이드 (14ce5c7)
  - invisible text / broken SVG 수정 (6e229cc)
  - CH4 navigation 차단 수정 (314e319)
  - 4개 구조 시각 슬라이드 추가 (b659620)
  - 이론 슬라이드, 임팩트 수치, QR 추가 (034cfec)
  - HTML 태그 불일치 수정 (b56409b)
  - 슬라이드 레이아웃/콘텐츠 개선 (02fe0f8)
  - HRD Maker 여정 콘텐츠 재구성 (353e0c6)
  - CH3 인터랙티브 사례 + gemini 라벨 (9dde816)

---

## 미완료 / 추후 검토

(gemini에서 상속된 항목 — stich 브랜치에서 별도 관리)

| 항목 | 설명 |
|------|------|
| 디자인 톤 통일 | 슬라이드별 색상/타이포 일관성 점검 필요 |
| ~~브랜치 라벨 변경~~ | ~~좌측 하단 gemini → stich로 변경~~ ✅ v0.1에서 완료 |

---

## 기술 스택

- **프레임워크**: Reveal.js (순수 HTML/CSS/JS, 빌드 없음)
- **메인 파일**: `index.html` (gemini는 index_reveal.html이 아닌 index.html 사용)
- **CSS 테마**: `css/wanted-theme.css`
- **배포**: Vercel (GitHub 연동 자동 배포)

---

## 배포 정보

- **브랜치 별칭 URL**: https://presentationvibe-git-stich-woowa0913s-projects.vercel.app
- **GitHub**: https://github.com/woowa0913/presentation-highfive-ktcloud/tree/stich
