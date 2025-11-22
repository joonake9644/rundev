// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 네비게이션 토글 기능
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // 네비게이션 링크 클릭 시 메뉴 닫기
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // 스무스 스크롤
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 스크롤 시 네비게이션 배경 변화
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('.nav-container');
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(26, 26, 26, 0.98)';
        } else {
            nav.style.background = 'rgba(26, 26, 26, 0.95)';
        }
    });

    // 폼 제출 처리
    const joinForm = document.getElementById('joinForm');
    joinForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // 폼 데이터 수집
        const formData = new FormData(joinForm);
        const data = Object.fromEntries(formData);

        // 간단한 유효성 검사
        if (!data.name || !data.email || !data.phone || !data.experience) {
            alert('모든 필수 항목을 입력해주세요.');
            return;
        }

        // 성공 메시지
        alert('가입 신청이 완료되었습니다! 곧 연락드리겠습니다.');

        // 폼 초기화
        joinForm.reset();

        // 실제 구현에서는 서버로 데이터 전송
        console.log('Form Data:', data);
    });

    // 인터랙션 애니메이션
    const observeElements = () => {
        const elements = document.querySelectorAll('.feature-item, .event-card, .member-card');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    };

    // 애니메이션 초기화
    observeElements();

    // 통계 카운터 애니메이션
    const animateCounters = () => {
        const counters = document.querySelectorAll('.stat-number');
        const targets = [250, 1000, 50]; // 목표 숫자들

        counters.forEach((counter, index) => {
            const target = targets[index];
            const increment = target / 100;
            let current = 0;

            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.floor(current) + '+';
                    setTimeout(updateCounter, 20);
                } else {
                    counter.textContent = target + '+';
                }
            };

            // 페이지 로드 후 1초 뒤 애니메이션 시작
            setTimeout(updateCounter, 1000);
        });
    };

    // 카운터 애니메이션 시작
    animateCounters();

    // CTA 버튼 클릭 이벤트
    const ctaPrimary = document.querySelector('.cta-primary');
    const ctaSecondary = document.querySelector('.cta-secondary');

    ctaPrimary.addEventListener('click', function() {
        document.getElementById('contact').scrollIntoView({
            behavior: 'smooth'
        });
    });

    ctaSecondary.addEventListener('click', function() {
        document.getElementById('about').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // 키보드 접근성
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });

    // 터치 스와이프 감지 (모바일)
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 100;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0 && navMenu.classList.contains('active')) {
                // 왼쪽 스와이프 - 메뉴 닫기
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        }
    }

    // 페이지 성능 최적화
    let ticking = false;

    function updateOnScroll() {
        // 스크롤 기반 애니메이션 최적화
        if (!ticking) {
            requestAnimationFrame(function() {
                // 여기에 스크롤 기반 업데이트 로직 추가 가능
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('scroll', updateOnScroll);

    // 콘솔 메시지
    console.log('🏃‍♂️ CONCRETE RUNNERS - Industrial Running Crew');
    console.log('🏗️ Brutalism meets running culture');
    console.log('🧡 Built with industrial aesthetics');
});

// 유틸리티 함수들
const utils = {
    // 이메일 유효성 검사
    validateEmail: function(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },

    // 전화번호 포맷팅
    formatPhone: function(phone) {
        return phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    },

    // 디바운스 함수
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
};

// 에러 처리
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
});

// 성능 모니터링
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        }, 0);
    });
}
