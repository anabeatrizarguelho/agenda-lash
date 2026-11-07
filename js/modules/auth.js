import { auth } from "../firebase-config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

export async function registerUser(email, senha) {
    const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
    return userCredential.user;
}

export async function loginUser(email, senha) {
    const userCredential = await signInWithEmailAndPassword(auth, email, senha);
    return userCredential.user;
}

export async function logoutUser() {
    await signOut(auth);
}
