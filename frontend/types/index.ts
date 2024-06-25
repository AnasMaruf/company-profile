import { ReactNode } from "react";

export interface userProps {
  id: string;
  username: string;
  email: string;
  password: string;
  user_role: string;
}

export interface contentProps {
  id: number;
  title: string;
  body: string;
  tags?: string[];
  images?: string[];
  date: string;
}

export interface tagsProps {
  tag: string;
}

export interface AuthContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

export interface AuthProviderProps {
  children: ReactNode;
}
