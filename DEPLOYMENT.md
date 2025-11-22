# Vercel 배포 가이드

이 문서는 CONCRETE RUNNERS 웹사이트를 Vercel에 배포하는 방법을 설명합니다.

## 사전 준비사항

1. **Vercel 계정 생성**
   - [Vercel](https://vercel.com/)에 가입하세요
   - GitHub 계정으로 로그인하는 것을 권장합니다

2. **Firebase 프로젝트 설정**
   - [Firebase Console](https://console.firebase.google.com/)에서 프로젝트 생성
   - Authentication 활성화 및 Google 로그인 설정
   - Firestore Database 생성

## 배포 단계

### 1. Firebase 설정

#### Firebase Authentication 설정
1. Firebase Console → Authentication → Sign-in method
2. Google 로그인 활성화
3. 승인된 도메인에 Vercel 도메인 추가:
   - `your-app-name.vercel.app`
   - 커스텀 도메인(있는 경우)

#### Firestore Database 설정
1. Firebase Console → Firestore Database → 데이터베이스 만들기
2. 보안 규칙 설정:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // 멤버 읽기는 모두 허용, 쓰기는 인증된 사용자만
    match /members/{memberId} {
      allow read: if true;
      allow write: if request.auth != null;
    }

    // 이벤트 읽기는 모두 허용, 쓰기는 인증된 사용자만
    match /events/{eventId} {
      allow read: if true;
      allow write: if request.auth != null;
    }

    // 가입 신청은 모두 쓰기 가능, 읽기는 인증된 사용자만
    match /joinRequests/{requestId} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }
  }
}
```

### 2. 로컬 환경 변수 설정

`.env.local` 파일에 Firebase 설정 추가:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

### 3. Vercel CLI로 배포 (옵션 1)

```bash
# Vercel CLI 설치
npm i -g vercel

# 로그인
vercel login

# 배포
vercel

# 프로덕션 배포
vercel --prod
```

### 4. Vercel 대시보드로 배포 (옵션 2)

1. **GitHub에 코드 푸시**
   ```bash
   git add .
   git commit -m "Setup Next.js with Firebase"
   git push origin main
   ```

2. **Vercel에서 프로젝트 가져오기**
   - [Vercel Dashboard](https://vercel.com/dashboard)에 접속
   - "Add New..." → "Project" 클릭
   - GitHub 저장소 선택
   - "Import" 클릭

3. **환경 변수 설정**
   - "Environment Variables" 섹션에서 모든 Firebase 환경 변수 추가
   - `.env.local`에 있는 모든 변수를 입력

4. **배포**
   - "Deploy" 버튼 클릭
   - 빌드 및 배포 과정 확인

### 5. Firebase에 Vercel 도메인 추가

배포가 완료되면:
1. Vercel에서 할당받은 도메인 확인 (예: `concrete-runners.vercel.app`)
2. Firebase Console → Authentication → Settings → Authorized domains
3. Vercel 도메인 추가

### 6. 배포 확인

- `https://your-app-name.vercel.app` 접속
- Google 로그인 테스트
- 가입 신청 폼 테스트
- Firestore 데이터 저장 확인

## 자동 배포 설정

Vercel은 GitHub와 연동시 자동으로 배포됩니다:

- **main 브랜치에 푸시** → 프로덕션 배포
- **다른 브랜치에 푸시** → 프리뷰 배포
- **Pull Request 생성** → 프리뷰 배포

## 환경 변수 업데이트

환경 변수를 변경할 때:

1. Vercel Dashboard → 프로젝트 선택 → Settings → Environment Variables
2. 변수 업데이트
3. "Redeploy" 버튼을 클릭하여 재배포

## 커스텀 도메인 설정

1. Vercel Dashboard → 프로젝트 → Settings → Domains
2. 도메인 추가
3. DNS 설정 (Vercel이 제공하는 안내 따라하기)
4. Firebase Console → Authentication → Settings → Authorized domains에 커스텀 도메인 추가

## 트러블슈팅

### 빌드 에러
- `npm run build`를 로컬에서 실행하여 에러 확인
- TypeScript 에러가 있는지 확인

### Firebase 연결 에러
- 환경 변수가 올바르게 설정되었는지 확인
- Firebase 콘솔에서 도메인이 승인되었는지 확인

### 로그인 에러
- Firebase Authentication에서 Google 로그인이 활성화되었는지 확인
- Authorized domains에 Vercel 도메인이 추가되었는지 확인

## 유용한 링크

- [Vercel 문서](https://vercel.com/docs)
- [Next.js 배포 가이드](https://nextjs.org/docs/deployment)
- [Firebase 문서](https://firebase.google.com/docs)
