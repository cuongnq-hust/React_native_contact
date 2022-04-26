// @ts-ignore
import React from "react";
import styled from "styled-components/native";

export const CreateNote = React.memo(({data, onValueChange, keyName}) => {
    return (
        <AddPhone>
            <Phone>Ghi chú</Phone>
            <TextNote
                multiline={true}
                value={data[keyName]}
                onChangeText={value => {
                    onValueChange([keyName], value);
                }}
            />
        </AddPhone>
    )
})
const AddPhone = styled.View`
  width: 100%;
  border-bottom-width: 0.5px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  margin: 0 16px 0 16px;
`;

const Phone = styled.Text`
  margin-top: 14px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
`;
const TextNote = styled.TextInput`
  font-size: 17px;
  color: #2f80ed;
  margin-top: 3px;
  margin-bottom: 10px;
`;