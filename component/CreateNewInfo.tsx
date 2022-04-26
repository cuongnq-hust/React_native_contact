// @ts-ignore
import React from "react";
import styled from "styled-components/native";

const ButtonFind = styled.View`
  height: 54px;
  border-bottom-width: 0.5px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  margin: 0 16px;
  justify-content: flex-end;
`;
const Change = styled.TextInput`
  height: 40px;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: #2f80ed;
`;

export const CreateNewInfo = React.memo(({data, onValueChange, placeholder, keyName}) => {
    return (
        <ButtonFind>
            <Change
                placeholder={placeholder}
                value={data[keyName]}
                onChangeText={value => {
                    onValueChange([keyName], value);
                }}
            />
        </ButtonFind>
    )
})