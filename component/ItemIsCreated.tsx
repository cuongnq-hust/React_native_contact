import {Image, TouchableOpacity} from "react-native";
// @ts-ignore
import React, {useCallback} from "react";
import styled from "styled-components/native";

const ChangeItem = styled.View`
  flex-direction: row;
  height: 44px;
  border-bottom-width: 0.5px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  align-items: center;
  margin: 0 16px;
`;

const ChangeInput = styled.TextInput`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: #2f80ed;
  width: 90%;
  margin-left: 17px;
`;

export const ItemIsCreated = React.memo(({data, setData, keyName, onDeleteValue, keyboardType}) => {
    return (
        <>
            {
                data[keyName] && data[keyName].map((item, index) => {
                    return (
                        <ChangeItem key={index}>
                            <TouchableOpacity onPress={() => onDeleteValue([keyName], index)}>
                                <Image source={require('../image/Delete.png')}/>
                            </TouchableOpacity>
                            <ChangeInput
                                keyboardType={keyboardType}
                                value={item}
                                onChangeText={value => {
                                    const oldItem = [...data[keyName]];
                                    oldItem[index] = value;
                                    setData({
                                        ...data,
                                        [keyName]: oldItem,
                                    });
                                }}
                            />
                        </ChangeItem>
                    )
                })}
        </>
    )
})