import { createContext, useContext, useReducer, useEffect } from "react";
import { dummyUsers } from "./Users";

export type User = {
    id: string;
    username: string;
    email: string;
    mobile: string;
    gender: string;
    password: string;
};

type Access = {
    isAuthenticated: boolean;
    loginError?: string;
    registerError?: string;
    updatePasswordError?: string;
};

type AuthState = {
    users: User[];
    loggedInUser: User | null;
    access: {
        isAuthenticated: boolean;
        loginError?: string;
        registerError?: string;
        updatePasswordError?: string;
    };
};

type AuthAction =
    // | { type: "GET_USER"; payload: User[] }
    | { type: "REGISTER"; payload: User }
    | { type: "LOGIN"; payload: { email: string; password: string } }
    | { type: "LOGOUT" }
    | { type: "UPDATE_PASSWORD"; payload: { password: string } }
    | { type: "CLEAR_ERROR" };

type AuthContextType = {
    state: AuthState;
    dispatch: React.Dispatch<AuthAction>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const initialState: AuthState = {
    users: (() => {
        try {
            const storedUsers = localStorage.getItem("users");
            if (storedUsers) {
                return JSON.parse(storedUsers) as User[];
            } else {
                localStorage.setItem("users", JSON.stringify(dummyUsers));
                return dummyUsers;
            }
        } catch {
            return [];
        }
    })(),
    loggedInUser: (() => {
        try {
            const storedUser = localStorage.getItem("loggedInUser");
            return storedUser ? (JSON.parse(storedUser) as User) : null;
        } catch {
            return null;
        }
    })(),
    access: (() => {
        try {
            const access = localStorage.getItem("access");
            return access ? (JSON.parse(access) as Access) : { isAuthenticated: false };
        } catch {
            return { isAuthenticated: false };
        }
    })()
};

const reducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        // case "GET_USER":
        //     return {
        //         users: action.payload,
        //         loggedInUser: null,
        //         access: { ...state.access, isAuthenticated: false, loginError: undefined, registerError: undefined, updatePasswordError: undefined },
        //     };

        case "REGISTER":
            return {
                users: [...state.users, action.payload],
                loggedInUser: null,
                access: { ...state.access, isAuthenticated: false, loginError: undefined, registerError: undefined, updatePasswordError: undefined },
            };

        case "LOGIN": {
            const user = state.users.find(
                (u) =>
                    u.email === action.payload.email &&
                    u.password === action.payload.password
            );

            if (!user) {
                return {
                    ...state,
                    loggedInUser: null,
                    access: { ...state.access, isAuthenticated: false, loginError: "Invalid email or password" },
                };
            }

            return {
                ...state,
                loggedInUser: user,
                access: { ...state.access, isAuthenticated: true, loginError: undefined, registerError: undefined, updatePasswordError: undefined },
            };

        }

        case "LOGOUT":
            return {
                ...state,
                loggedInUser: null,
                access: { ...state.access, isAuthenticated: false, loginError: undefined, registerError: undefined, updatePasswordError: undefined },
            };

        case "UPDATE_PASSWORD":
            if (!state.loggedInUser) return state;

            const updatedUsers = state.users.map((u) =>
                u.id === state.loggedInUser!.id
                    ? { ...u, password: action.payload.password }
                    : u
            );

            const updatedLoggedInUser = {
                ...state.loggedInUser,
                password: action.payload.password,
            };

            return {
                users: updatedUsers,
                loggedInUser: updatedLoggedInUser,
                access: { ...state.access, isAuthenticated: false, loginError: undefined, registerError: undefined, updatePasswordError: undefined },
            };
        case "CLEAR_ERROR":
            return {
                ...state,
                access: {
                    ...state.access,
                    loginError: "",
                    registerError: "",
                    updatePasswordError: ""
                },
            };


        default:
            return state;
    }
};

type AuthProviderProps = {
    children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(state.users));

        if (state.loggedInUser) {
            localStorage.setItem(
                "loggedInUser",
                JSON.stringify(state.loggedInUser)
            );
        } else {
            localStorage.removeItem("loggedInUser");
        }
        if (state.access) {
            localStorage.setItem(
                "access",
                JSON.stringify(state.access)
            );
        } else {
            localStorage.removeItem("access");
        }
    }, [state.users, state.loggedInUser, state.access]);

    useEffect(()=>{
        fetchUser();
    },[])

    const fetchUser = async()=>{
        const response = await fetch("http://localhost:5000/users");
        const data = await response.json();
        // dispatch({type:"GET_USER",payload:data});
    }
    return (
        <AuthContext.Provider
            value={{ state, dispatch }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used inside AuthProvider");
    }

    return context;
};
