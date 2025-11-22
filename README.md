# CONCRETE RUNNERS

> Industrial Brutalism 스타일 러닝 크루 웹사이트

## 🏗️ 프로젝트 개요

**CONCRETE RUNNERS**는 도시의 콘크리트 위를 달리는 러닝 크루를 위한 브루탈리즘 디자인 웹사이트입니다. Next.js, Tailwind CSS, shadcn/ui를 사용하여 현대적이고 유지보수가 쉬운 방식으로 재구축되었습니다.

## 🛠️ 기술 스택

- **Next.js 15** - React 프레임워크 (App Router)
- **TypeScript** - 타입 안전성
- **Tailwind CSS** - 유틸리티 우선 CSS 프레임워크
- **shadcn/ui** - 고품질 React 컴포넌트
- **Lucide React** - 아이콘 라이브러리

## 🚀 설치 및 실행

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 시작
npm start
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx      # 루트 레이아웃
│   ├── page.tsx        # 홈 페이지
│   └── globals.css     # 글로벌 스타일
├── components/
│   ├── ui/             # shadcn/ui 컴포넌트
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── textarea.tsx
│   │   └── select.tsx
│   ├── Navigation.tsx  # 네비게이션 컴포넌트
│   ├── Hero.tsx        # 히어로 섹션
│   ├── About.tsx       # 소개 섹션
│   ├── Events.tsx      # 이벤트 섹션
│   ├── Members.tsx     # 멤버 섹션
│   ├── Contact.tsx     # 연락처 폼
│   └── Footer.tsx      # 푸터
└── lib/
    └── utils.ts        # 유틸리티 함수
```

## 🎨 디자인 시스템

### 컬러 팔레트
- **Background**: Zinc 950 (거의 검정)
- **Foreground**: White/Zinc 100
- **Accent**: Zinc 900 (다크 그레이)
- **Muted**: Zinc 100/500

### 타이포그래피
- **Headings**: System UI 폰트 스택 (굵고 강한 느낌)
- **Body**: Sans-serif 폰트 스택

## 📱 주요 기능

### 1. 네비게이션
- 고정형 네비게이션 바
- 반응형 모바일 메뉴
- 스무스 스크롤
- 스크롤 시 배경 변화 효과

### 2. Hero Section
- 그리드 패턴 배경
- 통계 정보 표시
- CTA 버튼 (shadcn/ui Button)
- 완전 반응형

### 3. About Section
- 크루 소개
- 3개의 핵심 가치 카드
- 호버 효과

### 4. Events Section
- 이벤트 카드 그리드
- 날짜, 장소, 시간 정보
- 깔끔한 카드 디자인

### 5. Members Section
- 멤버 프로필 카드
- 아바타, 이름, 역할, 통계
- 반응형 그리드 레이아웃

### 6. Contact Section
- shadcn/ui Form 컴포넌트 사용
- 유효성 검사
- 연락처 정보 카드

## 🔧 커스터마이징

### shadcn/ui 컴포넌트 추가

```bash
npx shadcn@latest add [component-name]
```

예시:
```bash
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
```

### Tailwind 색상 변경

`tailwind.config.ts` 파일에서 색상 팔레트를 수정할 수 있습니다:

```typescript
theme: {
  extend: {
    colors: {
      // 커스텀 색상 추가
    }
  }
}
```

### 컴포넌트 수정

각 섹션은 독립적인 컴포넌트로 구성되어 있어 쉽게 수정할 수 있습니다:
- `src/components/Events.tsx` - 이벤트 데이터 수정
- `src/components/Members.tsx` - 멤버 정보 수정
- `src/components/Contact.tsx` - 연락처 정보 수정

## 🌐 배포

### Vercel (권장)

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

또는 GitHub 저장소를 Vercel에 연결하면 자동 배포됩니다.

### Netlify

```bash
# 빌드 명령어: npm run build
# 퍼블리시 디렉토리: .next
```

## 📦 이전 버전

기존 HTML/CSS/JS 버전은 `old_site/` 디렉토리에 백업되어 있습니다.

## 🎓 학습 리소스

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [TypeScript](https://www.typescriptlang.org/docs)

## 📄 라이선스

MIT License - 자유롭게 사용, 수정, 배포할 수 있습니다.

## 📧 문의

- Email: info@concreterunners.com
- Instagram: @concrete_runners_seoul
- Meeting Point: 성수동 카페거리, 매주 토요일 오전 7시

---

**Made with Next.js, Tailwind CSS, and shadcn/ui**

*도시를 달리는 브루탈리즘 러닝 크루*
