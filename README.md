# CONCRETE RUNNERS

> Industrial Brutalism 스타일 러닝 크루 웹사이트

## 🏗️ 프로젝트 개요

**CONCRETE RUNNERS**는 도시의 콘크리트 위를 달리는 러닝 크루를 위한 브루탈리즘 디자인 웹사이트입니다. 산업적 미학과 러닝 문화를 결합하여 강인하고 독특한 시각적 경험을 제공합니다.

## 🎨 디자인 컨셉

### 컬러 팔레트
- **Primary Orange**: `#FF6B35` - 브랜드 메인 컬러
- **Concrete Gray**: `#666666` - 산업적 느낌
- **Deep Black**: `#1A1A1A` - 배경 컬러
- **Light Gray**: `#CCCCCC` - 텍스트 컬러
- **Dark Gray**: `#2A2A2A` - 섹션 배경

### 타이포그래피
- **Heading Font**: Space Grotesk (Google Fonts)
- **Body Font**: Inter (Google Fonts)

## 📁 파일 구조

```
rundev/
├── index.html          # 메인 HTML 파일
├── styles.css          # 브루탈리즘 스타일시트
├── script.js           # 인터랙티브 JavaScript
└── README.md          # 프로젝트 문서
```

## 🚀 설치 및 실행

### 1. 로컬에서 바로 실행
```bash
# 프로젝트 디렉토리로 이동
cd rundev

# 브라우저에서 index.html 파일 열기
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

### 2. 로컬 서버로 실행 (권장)

#### Python 사용
```bash
# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000
```

#### Node.js 사용
```bash
# http-server 설치 (한 번만 실행)
npm install -g http-server

# 서버 실행
http-server
```

#### VS Code Live Server
1. VS Code에서 프로젝트 열기
2. "Live Server" 확장 프로그램 설치
3. index.html 우클릭 → "Open with Live Server"

### 3. 브라우저 접속
```
http://localhost:8000
```

## 📱 주요 기능

### 1. 네비게이션
- 고정형 네비게이션 바
- 모바일 햄버거 메뉴
- 스무스 스크롤
- 호버 효과

### 2. Hero Section
- 애니메이션 배경 (콘크리트 텍스처, 그리드 패턴)
- 실시간 카운터 애니메이션
- CTA 버튼
- 반응형 디자인

### 3. About Section
- 크루 소개
- 핵심 가치 3가지
- 호버 인터랙션

### 4. Events Section
- 예정된 이벤트 카드
- 날짜, 장소, 시간 정보
- 슬라이드 애니메이션 효과

### 5. Members Section
- 멤버 프로필 카드
- 아바타, 역할, 통계
- 그리드 레이아웃

### 6. Contact Section
- 가입 신청 폼
- 유효성 검사
- 연락처 정보

## 🎯 브라우저 호환성

- ✅ Chrome (최신 버전)
- ✅ Firefox (최신 버전)
- ✅ Safari (최신 버전)
- ✅ Edge (최신 버전)
- ⚠️ IE11 (부분 지원)

## 📐 반응형 브레이크포인트

```css
/* Mobile */
@media (max-width: 480px) { }

/* Tablet */
@media (max-width: 768px) { }

/* Desktop */
@media (min-width: 769px) { }
```

## ⚡ 성능 최적화

### 적용된 최적화 기법
- CSS 애니메이션 하드웨어 가속
- Intersection Observer API 활용
- requestAnimationFrame 사용
- 이미지 최적화 (Google Fonts CDN)
- 최소한의 외부 리소스

### 성능 지표
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Time to Interactive (TTI): < 3.0s

## 🔧 커스터마이징 가이드

### 색상 변경
`styles.css` 파일에서 주요 색상 변수 수정:
```css
/* Primary Color */
#FF6B35 → 원하는 색상 코드

/* Background */
#1A1A1A → 원하는 배경색
```

### 폰트 변경
`index.html` head 섹션의 Google Fonts 링크 수정:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont" rel="stylesheet">
```

### 컨텐츠 수정
`index.html` 파일에서 각 섹션의 텍스트 수정:
- 이벤트 정보
- 멤버 정보
- 연락처 정보

## 🌐 배포 가이드

### GitHub Pages
```bash
git add .
git commit -m "Initial commit"
git push origin main

# Settings → Pages → Source: main branch
```

### Netlify
1. Netlify에 로그인
2. "New site from Git" 클릭
3. 저장소 연결
4. 배포 설정 (Build command: 없음, Publish directory: /)

### Vercel
```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

## 📚 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, Grid, 애니메이션
- **JavaScript (ES6+)**: Vanilla JS
- **Google Fonts**: Space Grotesk, Inter

## 🎓 학습 리소스

### 브루탈리즘 디자인
- [Brutalist Websites](https://brutalistwebsites.com/)
- [Web Design Museum](https://www.webdesignmuseum.org/)

### CSS 그리드 & Flexbox
- [CSS Grid Generator](https://cssgrid-generator.netlify.app/)
- [Flexbox Froggy](https://flexboxfroggy.com/)

### 웹 성능
- [Web.dev](https://web.dev/)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)

## 📄 라이선스

MIT License - 자유롭게 사용, 수정, 배포할 수 있습니다.

## 👥 기여

이슈 및 Pull Request는 언제나 환영합니다!

## 📧 문의

- Email: info@concreterunners.com
- Instagram: @concrete_runners_seoul

---

**Made with 🧡 by CONCRETE RUNNERS**

*도시를 달리는 브루탈리즘 러닝 크루*
