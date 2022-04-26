// @ts-ignore
import React from "react";
import styled from "styled-components/native";

const Add = styled.View`
  width: 100%;
  height: 70px;
  border-bottom-width: 0.5px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  margin: 0 16px 0 16px;
`;
const TextPhone = styled.Text`
  font-size: 17px;
  color: #2f80ed;
  margin-top: 3px;
`;
const Phone = styled.Text`
  margin-top: 9px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.41px;
`;
export const ShowDetaiInfo = React.memo(({data, Title}) => {
    return (
        <>
            {data.map((item, index) => (
                <Add key={index}>
                    <Phone>{Title}</Phone>
                    <TextPhone>{item}</TextPhone>
                </Add>
            ))}
        </>
    )
})