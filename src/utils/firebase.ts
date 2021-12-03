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
	apiKey: 'AIzaSyCsDHN6jk4KxrVsvL2nc3UrdA2TJcVAbSE',
	authDomain: 'pv247finalproject2.firebaseapp.com',
	projectId: 'pv247finalproject2',
	storageBucket: 'pv247finalproject2.appspot.com',
	messagingSenderId: '414173149598',
	appId: '1:414173149598:web:e1cf568486de762560fe8f'
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

export type PortfolioItem = {
	imageUrl: string;
	referenceUrl: string;
	title: string;
	shortDescription: string;
};

export const portfolioItemsCollection = collection(
	db,
	'portfolioItems'
) as CollectionReference<PortfolioItem>;

export const portfolioItemDocument = (id: string) =>
	doc(db, 'portfolioItems', id) as DocumentReference<PortfolioItem>;
