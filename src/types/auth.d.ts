import { ReactNode } from 'react';

export interface AuthContextData {
    signed: boolean;
    user: UserType | null;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => void;
    isAdmin?: boolean;
}

export interface AuthProviderProps {
    children: ReactNode;
}

export interface UserType {
    id: number;
    name: string;
    email: string;
}
