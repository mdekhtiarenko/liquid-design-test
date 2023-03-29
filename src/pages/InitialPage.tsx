import {LdButton, LdIcon} from "@emdgroup-liquid/liquid/dist/react";
import React, {useContext} from "react";
import {ModalContext} from "../contexts/ModalContextProps";
import {ModalContentWithSelect} from "../components/ModalContentWithSelect";

export function InitialPage() {
  const {showModal} = useContext(ModalContext);
  return (
      <LdButton onClick={() => showModal({headline: "Modal", content: <ModalContentWithSelect/>})}>
        Show modal
        <LdIcon name="bulb"/>
      </LdButton>
  )
}