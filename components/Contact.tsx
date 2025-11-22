'use client'

import { FormEvent, useState } from 'react'
import { submitJoinRequest } from '@/lib/firestore'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      experience: formData.get('experience') as string,
      message: formData.get('message') as string,
    }

    try {
      await submitJoinRequest(data)
      alert('가입 신청이 접수되었습니다!')
      e.currentTarget.reset()
    } catch (error) {
      alert('가입 신청 중 오류가 발생했습니다. 다시 시도해주세요.')
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">JOIN THE CREW</h2>
          <div className="title-underline"></div>
        </div>
        <div className="contact-content">
          <div className="contact-form">
            <form id="joinForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">이름</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">이메일</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">전화번호</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              <div className="form-group">
                <label htmlFor="experience">러닝 경험</label>
                <select id="experience" name="experience" required>
                  <option value="">선택해주세요</option>
                  <option value="beginner">초보자 (6개월 미만)</option>
                  <option value="intermediate">중급자 (6개월-2년)</option>
                  <option value="advanced">상급자 (2년 이상)</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">자기소개</label>
                <textarea id="message" name="message" rows={4}></textarea>
              </div>
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? '처리 중...' : 'JOIN CONCRETE RUNNERS'}
              </button>
            </form>
          </div>
          <div className="contact-info">
            <h3>GET IN TOUCH</h3>
            <div className="contact-item">
              <strong>📧 Email</strong>
              <p>info@concreterunners.com</p>
            </div>
            <div className="contact-item">
              <strong>📱 Instagram</strong>
              <p>@concrete_runners_seoul</p>
            </div>
            <div className="contact-item">
              <strong>📍 Meeting Point</strong>
              <p>성수동 카페거리<br />매주 토요일 오전 7시</p>
            </div>
            <div className="contact-item">
              <strong>💬 KakaoTalk</strong>
              <p>오픈채팅방: &quot;콘크리트러너스&quot;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
