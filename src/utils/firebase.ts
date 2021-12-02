import { initializeApp } from 'firebase/app';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut as authSignOut,
	onAuthStateChanged,
	User
} from 'firebase/auth';
import {
	collection,
	CollectionReference,
	doc,
	DocumentReference,
	getFirestore
} from 'firebase/firestore';

// Initialize Firebase
initializeApp({
	apiKey: 'AIzaSyBg3n_AeSukEU8SPnMF9-VpaxPcvlNgrf8',
	authDomain: 'pv247finalproject.firebaseapp.com',
	projectId: 'pv247finalproject',
	storageBucket: 'pv247finalproject.appspot.com',
	messagingSenderId: '69087849182',
	appId: '1:69087849182:web:90f9f8841745a6f9f6f04f'
});

// Authentication
const auth = getAuth();

// Sign up handler
export const signUp = (email: string, password: string) =>
	createUserWithEmailAndPassword(auth, email, password);

// Sign in handler
export const signIn = (email: string, password: string) =>
	signInWithEmailAndPassword(auth, email, password);

// Sign out handler
export const signOut = () => authSignOut(auth);

// Subscribe to auth state changes
export const onAuthChanged = (callback: (u: User | null) => void) =>
	onAuthStateChanged(auth, callback);

// Firestore
const db = getFirestore();

// Feedbacks collection
export type Feedback = {
	by: string;
	email: string;
	text: string;
};

export const feedbacksCollection = collection(
	db,
	'feedbacks'
) as CollectionReference<Feedback>;

export const feedbacksDocument = (id: string) =>
	doc(db, 'feedbacks', id) as DocumentReference<Feedback>;
