'use client';
import React, { useState } from 'react';
import { auth, signInWithEmailAndPassword } from "@/utils/firebase";

export default function LoggedInBar() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const user = auth.currentUser;

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setEmail('');
            setPassword('');
        } catch (error) {
            setError(error.message);
        }
    };

    const handleSignOut = () => {
        auth.signOut();
    };

    return (
        <div className='w-screen h-[40px] fixed top-0 z-max flex items-center p-4 justify-center bg-gray-950 text-white'>
            {user ? (
                <div className='flex items-center justify-center gap-2'>
                    <p className='text-sm'>Logged in as {user.email}</p>
                    <button className='text-sm' onClick={handleSignOut}>
                        Sign out
                    </button>
                </div>
            ) : (
                <div>
                    <div className='flex items-center justify-center gap-2'>
                        <p className='text-sm'>Not logged in</p>
                    </div>
                    <div className="mt-2">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            // @ts-ignore
                            onChange={(e) => setEmail(e.target.value)}
                            className="px-2 py-1"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            // @ts-ignore
                            onChange={(e) => setPassword(e.target.value)}
                            className="px-2 py-1 mt-2"
                        />
                        <button className="px-2 py-1 mt-2" onClick={handleLogin}>
                            Login
                        </button>
                        {error && (
                            <p className="text-red-500 mt-2">{error}</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
