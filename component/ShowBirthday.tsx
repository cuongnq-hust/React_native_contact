// @ts-ignore
import React from "react";
// @ts-ignore
import dayjs from "dayjs";
import styled from "styled-components/native";

export const ShowBirthday = React.memo(({itemContact}) => {
    return (
        <>
            {itemContact?.birthday.map((item, index) => {
                let day = item ? dayjs(item).format('DD/MM/YYYY') : '';
                return (
                    <Add key={index}>
                        <Phone>Ngày Sinh</Phone>
                        <TextPhone>{day}</TextPhone>
                    </Add>
                );
            })}
        </>
    )
})
const Add = styled.View`
  width: 100%;
  height: 70px;
  border-bottom-width: 0.5px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  margin: 0 16px 0 16px;
`;
const Phone = styled.Text`
  margin-top: 9px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.41px;
`;
const TextPhone = styled.Text`
  font-size: 17px;
  color: #2f80ed;
  margin-top: 3px;
`;