import {LdTooltip, LdTypo} from "@emdgroup-liquid/liquid/dist/react";

export function ModalContent({modalRef}: { modalRef: any }) {

  const tetherOptions = {
    bodyElement: modalRef,
    constraints: [{to: 'scrollParent'}],
  }
  console.log(modalRef)

  return (
      <div>
        <LdTooltip tetherOptions={tetherOptions}>
          <LdTypo>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </LdTypo>
        </LdTooltip>

      </div>
  )
}