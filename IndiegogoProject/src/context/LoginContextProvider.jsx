import React, { createContext, useRef } from 'react';
import { useDisclosure } from '@chakra-ui/react';

export const LoginContext = createContext();

export default function LoginContextProvider({ children }) {
    const { isOpen: isOpenLogin, onOpen: onOpenLogin, onClose: onCloseLogin } = useDisclosure();
    const initialRefLogin = useRef(null);
    const finalRefLogin = useRef(null);

    return (
        <LoginContext.Provider value={{ isOpenLogin, onOpenLogin, onCloseLogin, initialRefLogin, finalRefLogin }}>
            {children}
        </LoginContext.Provider>
    );
}
