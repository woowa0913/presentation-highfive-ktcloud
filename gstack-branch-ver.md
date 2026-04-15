# gstack 브랜치 버전 관리

이 문서는 `gstack` 브랜치의 기준 버전, 배포 링크, 운영 원칙을 기록합니다.

## 1. 브랜치 기준

- 브랜치: `gstack`
- 복제 기준: `final` 브랜치 최신 상태
- 기준 커밋: `38c7fe7`
- 기준 커밋 메시지: `feat: tune early chapter layout`
- 목적: `final`과 분리된 실험/후속 작업을 안전하게 이어가기 위한 독립 브랜치 운영

## 2. 분리 운영 원칙

- `gstack`에서의 수정은 `final`에 자동 반영되지 않는다.
- `final` 브랜치에는 직접 작업하지 않는다.
- 커밋은 `gstack` 전용으로 분리해 남긴다.
- 웹 확인도 `gstack` 전용 alias 링크를 사용한다.

## 3. 현재 상태

- 시작 시점의 화면 구성은 `final`과 동일하다.
- 다만 좌측 하단 브랜치 라벨은 `gstack 브랜치`로 분리했다.
- 이후 변경 이력은 이 문서 기준으로 누적 관리한다.

## 4. 웹 링크

- 기준 원본 링크: `https://presentationvibe-git-final-woowa0913s-projects.vercel.app`
- gstack 전용 alias: `설정 후 갱신`
- 마지막 확인 시각: 2026-04-15 KST
- Vercel 프로젝트: `presentation_vibe`

## 5. 변경 이력

### v1.0.0 (2026-04-15) - gstack 분리 시작

- `final` 최신 상태를 `gstack` 기준점으로 복제
- 좌측 하단 브랜치 라벨을 `gstack 브랜치`로 변경
- `gstack-branch-ver.md` 생성
- `gstack` 전용 alias 운영 시작

