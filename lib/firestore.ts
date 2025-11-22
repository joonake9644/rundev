import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  Timestamp
} from 'firebase/firestore'
import { db } from './firebase'

// Types
export interface Member {
  id?: string
  initials: string
  name: string
  role: string
  years: string
  races: string
  createdAt?: Timestamp
}

export interface Event {
  id?: string
  day: string
  month: string
  title: string
  description: string
  location: string
  time: string
  capacity: string
  createdAt?: Timestamp
}

export interface JoinRequest {
  id?: string
  name: string
  email: string
  phone: string
  experience: string
  message?: string
  createdAt?: Timestamp
  status: 'pending' | 'approved' | 'rejected'
}

// Members Collection
export const getMembers = async (): Promise<Member[]> => {
  try {
    const q = query(collection(db, 'members'), orderBy('createdAt', 'desc'))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Member))
  } catch (error) {
    console.error('멤버 목록 가져오기 실패:', error)
    return []
  }
}

export const addMember = async (member: Omit<Member, 'id' | 'createdAt'>) => {
  try {
    const docRef = await addDoc(collection(db, 'members'), {
      ...member,
      createdAt: Timestamp.now()
    })
    return docRef.id
  } catch (error) {
    console.error('멤버 추가 실패:', error)
    throw error
  }
}

// Events Collection
export const getEvents = async (): Promise<Event[]> => {
  try {
    const q = query(collection(db, 'events'), orderBy('createdAt', 'desc'))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Event))
  } catch (error) {
    console.error('이벤트 목록 가져오기 실패:', error)
    return []
  }
}

export const addEvent = async (event: Omit<Event, 'id' | 'createdAt'>) => {
  try {
    const docRef = await addDoc(collection(db, 'events'), {
      ...event,
      createdAt: Timestamp.now()
    })
    return docRef.id
  } catch (error) {
    console.error('이벤트 추가 실패:', error)
    throw error
  }
}

// Join Requests Collection
export const submitJoinRequest = async (request: Omit<JoinRequest, 'id' | 'createdAt' | 'status'>) => {
  try {
    const docRef = await addDoc(collection(db, 'joinRequests'), {
      ...request,
      status: 'pending',
      createdAt: Timestamp.now()
    })
    return docRef.id
  } catch (error) {
    console.error('가입 신청 실패:', error)
    throw error
  }
}

export const getJoinRequests = async (): Promise<JoinRequest[]> => {
  try {
    const q = query(collection(db, 'joinRequests'), orderBy('createdAt', 'desc'))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as JoinRequest))
  } catch (error) {
    console.error('가입 신청 목록 가져오기 실패:', error)
    return []
  }
}

export const updateJoinRequestStatus = async (id: string, status: 'approved' | 'rejected') => {
  try {
    const docRef = doc(db, 'joinRequests', id)
    await updateDoc(docRef, { status })
  } catch (error) {
    console.error('가입 신청 상태 업데이트 실패:', error)
    throw error
  }
}
