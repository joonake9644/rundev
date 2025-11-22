import {
  signInWithPopup,
  signOut as firebaseSignOut,
  GoogleAuthProvider,
  User
} from 'firebase/auth'
import { auth } from './firebase'

const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider)
    return result.user
  } catch (error) {
    console.error('Google 로그인 에러:', error)
    throw error
  }
}

export const signOut = async () => {
  try {
    await firebaseSignOut(auth)
  } catch (error) {
    console.error('로그아웃 에러:', error)
    throw error
  }
}

export { auth }
export type { User }
