# CONCRETE RUNNERS

> Next.js + Firebase 기반 Industrial Brutalism 스타일 러닝 크루 웹사이트

## 🏗️ 프로젝트 개요

**CONCRETE RUNNERS**는 도시의 콘크리트 위를 달리는 러닝 크루를 위한 브루탈리즘 디자인 웹사이트입니다. Next.js와 Firebase를 활용하여 현대적이고 확장 가능한 웹 애플리케이션으로 구현되었습니다.

## ✨ 주요 기능

- 🔐 **Google 소셜 로그인** - Firebase Authentication
- 💾 **실시간 데이터베이스** - Firestore를 통한 멤버 및 이벤트 관리
- 📱 **반응형 디자인** - 모바일, 태블릿, 데스크톱 완벽 지원
- 🎨 **브루탈리즘 디자인** - 산업적 미학의 독특한 UI/UX
- 🚀 **Vercel 배포** - 원클릭 배포 및 자동 CI/CD
- ⚡ **최적화된 성능** - Next.js App Router와 서버 컴포넌트 활용

## 🛠️ 기술 스택

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS3 (Custom Design)
- **Fonts**: Space Grotesk, Inter (Google Fonts)

### Backend & Database
- **Authentication**: Firebase Authentication (Google OAuth)
- **Database**: Firestore
- **Hosting**: Vercel

### Dev Tools
- **Package Manager**: npm
- **Linting**: ESLint
- **Type Checking**: TypeScript

## 📁 프로젝트 구조

```
rundev/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # 루트 레이아웃
│   ├── page.tsx             # 메인 페이지
│   └── globals.css          # 글로벌 스타일
├── components/              # React 컴포넌트
│   ├── Navigation.tsx       # 네비게이션 바
│   ├── Hero.tsx            # 히어로 섹션
│   ├── About.tsx           # About 섹션
│   ├── Events.tsx          # 이벤트 섹션
│   ├── Members.tsx         # 멤버 섹션
│   ├── Contact.tsx         # 문의/가입 폼
│   ├── Footer.tsx          # 푸터
│   └── AuthButton.tsx      # 인증 버튼
├── lib/                     # 유틸리티 및 설정
│   ├── firebase.ts         # Firebase 초기화
│   ├── auth.ts             # 인증 관련 함수
│   └── firestore.ts        # Firestore 데이터 관리
├── old-static/             # 기존 정적 파일 백업
├── public/                 # 정적 파일
├── .env.local              # 환경 변수 (로컬)
├── .env.example            # 환경 변수 예제
├── next.config.js          # Next.js 설정
├── tsconfig.json           # TypeScript 설정
├── package.json            # 프로젝트 의존성
├── vercel.json             # Vercel 배포 설정
├── DEPLOYMENT.md           # 배포 가이드
└── README.md               # 프로젝트 문서
```

## 🚀 빠른 시작

### 1. 프로젝트 클론 및 의존성 설치

```bash
# 저장소 클론
git clone https://github.com/your-username/rundev.git
cd rundev

# 의존성 설치
npm install
```

### 2. Firebase 프로젝트 설정

1. [Firebase Console](https://console.firebase.google.com/)에서 새 프로젝트 생성
2. Authentication 설정:
   - Authentication → Sign-in method
   - Google 로그인 활성화
3. Firestore Database 생성:
   - Firestore Database → 데이터베이스 만들기
   - 테스트 모드로 시작 (나중에 보안 규칙 적용)
4. 프로젝트 설정에서 웹 앱 추가
5. Firebase 구성 정보 복사

### 3. 환경 변수 설정

`.env.local` 파일에 Firebase 구성 정보 입력:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

### 4. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

### 5. 프로덕션 빌드

```bash
# 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 🔥 Firebase 보안 규칙

Firestore 보안 규칙 설정:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /members/{memberId} {
      allow read: if true;
      allow write: if request.auth != null;
    }

    match /events/{eventId} {
      allow read: if true;
      allow write: if request.auth != null;
    }

    match /joinRequests/{requestId} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }
  }
}
```

## 🌐 Vercel 배포

자세한 배포 가이드는 [DEPLOYMENT.md](./DEPLOYMENT.md)를 참고하세요.

### 간단 배포

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel

# 프로덕션 배포
vercel --prod
```

## 🎨 디자인 컨셉

### 컬러 팔레트
- **Primary Orange**: `#FF6B35` - 브랜드 메인 컬러
- **Concrete Gray**: `#666666` - 산업적 느낌
- **Deep Black**: `#1A1A1A` - 배경 컬러
- **Light Gray**: `#CCCCCC` - 텍스트 컬러
- **Dark Gray**: `#2A2A2A` - 섹션 배경

### 타이포그래피
- **Heading**: Space Grotesk (Google Fonts)
- **Body**: Inter (Google Fonts)

## 📱 주요 섹션

1. **Hero Section** - 메인 히어로 배너와 통계
2. **About Section** - 크루 소개 및 핵심 가치
3. **Events Section** - 예정된 이벤트 목록
4. **Members Section** - 크루 멤버 프로필
5. **Contact Section** - 가입 신청 폼 및 연락처
6. **Auth Section** - Google 로그인/로그아웃

## 🔧 개발 스크립트

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 린트 검사
npm run lint
```

## 📊 Firestore 데이터 구조

### Members Collection
```typescript
{
  initials: string      // 이니셜 (예: "KJ")
  name: string         // 이름
  role: string         // 역할
  years: string        // 경력 연수
  races: string        // 참가 레이스 수
  createdAt: Timestamp // 생성 시간
}
```

### Events Collection
```typescript
{
  day: string          // 일 (예: "15")
  month: string        // 월 (예: "DEC")
  title: string        // 이벤트 제목
  description: string  // 설명
  location: string     // 장소
  time: string         // 시간
  capacity: string     // 정원
  createdAt: Timestamp // 생성 시간
}
```

### Join Requests Collection
```typescript
{
  name: string         // 이름
  email: string        // 이메일
  phone: string        // 전화번호
  experience: string   // 러닝 경험 수준
  message: string      // 자기소개
  status: string       // 상태 (pending/approved/rejected)
  createdAt: Timestamp // 신청 시간
}
```

## 🎯 브라우저 호환성

- ✅ Chrome (최신 버전)
- ✅ Firefox (최신 버전)
- ✅ Safari (최신 버전)
- ✅ Edge (최신 버전)

## 📐 반응형 브레이크포인트

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: > 768px

## 🤝 기여하기

이슈 및 Pull Request는 언제나 환영합니다!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

MIT License - 자유롭게 사용, 수정, 배포할 수 있습니다.

## 📧 문의

- **Email**: info@concreterunners.com
- **Instagram**: @concrete_runners_seoul

## 🔗 유용한 링크

- [Next.js 문서](https://nextjs.org/docs)
- [Firebase 문서](https://firebase.google.com/docs)
- [Vercel 문서](https://vercel.com/docs)
- [TypeScript 문서](https://www.typescriptlang.org/docs)

---

**Made with 🧡 by CONCRETE RUNNERS**

*도시를 달리는 브루탈리즘 러닝 크루*
