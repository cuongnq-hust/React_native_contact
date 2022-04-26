// @ts-ignore
import React, {useCallback} from "react";
import styled from "styled-components/native";

export const CreateItemOnCreate = React.memo(({onChangeValue, keyName, title}) => {
    const onCreate = () => {
        onChangeValue([keyName])
    }
    return (
        <>
            <Add onPress={onCreate}>
                <AddImage source={require('../image/add.png')}/>
                <AddText>{title}</AddText>
            </Add>
            <ViewWhite/>
        </>
    )
})
const Add = styled.TouchableOpacity`
  flex-direction: row;
  height: 44px;
  border-bottom-width: 0.5px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  align-items: center;
  margin: 0 16px;
`;
const AddImage = styled.Image`
  width: 24px;
  height: 24px;
`;
const AddText = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;
  color: #333333;
  margin-left: 17px;
`;
const ViewWhite = styled.View`
  background-color: white;
  height: 20px;
`;