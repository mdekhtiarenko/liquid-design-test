import React, {createRef, ReactNode, useCallback, useRef, useState} from "react";
import {LdModal, LdTypo} from "@emdgroup-liquid/liquid/dist/react";

export type Modal = {
  headline?: string,
  content?: ReactNode,
}

interface ModalContextProps {
  showModal: (modal: Modal | null) => void,
  hideModal: () => void,
  modalRef: React.MutableRefObject<any>
}

export const ModalContext = React.createContext<ModalContextProps>({
  showModal: () => {},
  hideModal: () => {},
  modalRef: createRef()
});


export const ModalContextProvider = ({children}: { children: ReactNode }) => {

  const [modal, setModal] = useState<Modal | null>(null);
  const modalRef = useRef<HTMLLdModalElement>(null);

  const showModal = useCallback((modal: Modal | null) => {
    setModal(modal);
    modalRef.current?.showModal();
  }, [setModal, modalRef]);

  const hideModal = useCallback(() => {
    setModal(null);
    modalRef.current?.close();
  }, [setModal, modalRef])

  return <ModalContext.Provider value={{modalRef, showModal, hideModal}}>
    {children}


    <LdModal blurryBackdrop ref={modalRef}>
      {
          modal && <>
            {modal.headline && <LdTypo slot="header">{modal.headline}</LdTypo>}
            {modal.content}
          </>
      }
    </LdModal>

  </ModalContext.Provider>
}

