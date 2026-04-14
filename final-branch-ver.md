# final 브랜치 버전 관리

이 문서는 `final` 브랜치의 기준 버전, 배포 링크, 변경 이력, 운영 규칙을 기록합니다.

## 1. 브랜치 기준

- 브랜치: `final`
- 복제 기준: `gemini` 브랜치 최신 상태
- 기준 커밋: `14ce5c7`
- 기준 커밋 메시지: `feat: add intro preamble slide 'Dadok time'`
- 목적: 발표 최종본 관리 및 승인본 추적

## 2. 웹 링크

- gemini 기준 원본 링크: `https://presentationvibe-git-gemini-woowa0913s-projects.vercel.app`
- final 브랜치 링크: `https://presentationvibe-git-final-woowa0913s-projects.vercel.app`
- 현재 preview 배포 URL: `https://presentationvibe-og15shyzl-woowa0913s-projects.vercel.app`
- 마지막 확인 시각: 2026-04-14 10:50:04 KST
- Vercel 프로젝트: `presentation_vibe`

## 3. 현재 상태

- `final` 브랜치는 현재 `gemini` 브랜치 내용을 기준으로 유지한다.
- 차이는 `final` 전용 기록 문서와 좌측 하단 `final 브랜치` 라벨이다.
- `main` 브랜치는 변경하지 않는다.

## 4. 변경 이력

### v1.0.0 (2026-04-14) - final 브랜치 초기화

- `gemini` 브랜치 최신 상태를 `final` 기준으로 채택
- `final-branch-ver.md`를 공식 기록 문서로 생성
- 좌측 하단 브랜치 라벨을 `final 브랜치`로 정리

## 5. 운영 규칙

- 앞으로 모든 작업은 `final` 브랜치에서만 진행한다.
- 작업이 끝날 때마다 이 문서에 변경 사항을 기록한다.
- 작업이 끝날 때마다 `final` 브랜치에 커밋하고 푸시한다.
- 푸시 후 웹에서 볼 수 있는 링크를 함께 전달한다.
- `main` 브랜치는 건드리지 않는다.

## 6. 요구사항 기록

| 날짜 | 요청자 | 요구사항 |
|---|---|---|
| 2026-04-14 | user | `final` 브랜치를 만들고 현재 `gemini` 브랜치를 그대로 복사 |
| 2026-04-14 | user | 앞으로 `final-branch-ver.md`에 기록 |
| 2026-04-14 | user | 작업 후 `final` 브랜치에 커밋/푸시하고 웹 링크 제공 |
| 2026-04-14 | user | `main` 브랜치는 건드리지 않기 |

## 7. 다음 업데이트 규칙

- 새 커밋이 생기면 `현재 상태`, `변경 이력`, `웹 링크`를 함께 갱신한다.
- 새 배포가 나오면 해당 링크와 시각을 이 문서에 반영한다.
- 사용자가 새 운영 원칙을 주면 `요구사항 기록` 표에 추가한다.
