import React, { createContext, useRef } from 'react';
import { useDisclosure } from '@chakra-ui/react';

export const SignupContext = createContext();

export default function SignupContextProvider({children}) {
    
  const { isOpen:isOpenSignup, onOpen: onOpenSignup,onClose: onCloseSignup } = useDisclosure();
  const initialRefSignup = useRef(null);
  const finalRefSignup = useRef(null);
  return (
    <SignupContext.Provider value={{isOpenSignup, onOpenSignup, onCloseSignup, initialRefSignup,finalRefSignup }}>
        {children}
    </SignupContext.Provider>
  )
}

