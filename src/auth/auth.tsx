import React, { createContext, useState, useContext } from 'react';
import type {
    AuthContextData,
    AuthProviderProps,
    UserType,
} from '../types/auth';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<UserType | null>(null);

    async function signIn(email: string, password: string) {
        // Here you would typically make a request to your server for authenticating the user.
        // For the sake of simplicity, let's simulate a successful request.

        console.debug('user', { email, password });

        const response = { data: { id: 1, name: 'Dummy', email: email } };

        setUser(response.data);
    }

    function signOut() {
        setUser(null);
    }

    return (
        <AuthContext.Provider
            value={{ signed: Boolean(user), user, signIn, signOut }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}
