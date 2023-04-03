import {LdButton, LdIcon, LdTooltip, LdTypo} from "@emdgroup-liquid/liquid/dist/react";
import React, {useContext} from "react";
import {ModalContext} from "../contexts/ModalContextProps";
import {ModalContent} from "../components/ModalContent";

export function InitialPage() {
  const {showModal, modalRef} = useContext(ModalContext);
  return (
      <div>

        <div style={{width: "100%", height: "80px", display: "flex", alignItems: "center", justifyContent: "center"}}>
          <LdTooltip>
            <LdTypo>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </LdTypo>
          </LdTooltip>

        </div>

        <LdButton onClick={() => showModal({headline: "Modal", content: <ModalContent modalRef={modalRef.current}/>})}>
          Show modal
          <LdIcon name="bulb"/>
        </LdButton>
      </div>
  )
}