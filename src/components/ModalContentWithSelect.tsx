import {LdOption, LdSelect} from "@emdgroup-liquid/liquid/dist/react";

export function ModalContentWithSelect(){
  return(
      <div>
        <LdSelect placeholder="Pick a fruit" name="fruit">
          <LdOption value="apple">Apple</LdOption>
          <LdOption value="banana">Banana</LdOption>
          <LdOption value="strawberry">Strawberry</LdOption>
        </LdSelect>

      </div>
  )
}