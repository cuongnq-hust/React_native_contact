// @ts-ignore
import React, {useCallback, useState} from "react";
import {Image, TouchableOpacity} from "react-native";
import styled from "styled-components/native";
// @ts-ignore
import dayjs from "dayjs";
import DateTimePicker from "react-native-modal-datetime-picker";


export const CreateNewDate = React.memo(({data, setData, onDeleteValue}) => {
    const [indexDate, setIndexDate] = useState('');
    const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);

    const showDateTimePicker = useCallback(index => {
        setIndexDate(index);
        setIsDateTimePickerVisible(true);
    }, []);
    const handleDatePicked = date => {
        hideDateTimePicker();
        const oldBirthday = [...data.birthday];
        oldBirthday[indexDate] = date;
        setData({
            ...data,
            birthday: oldBirthday,
        });
    };
    const hideDateTimePicker = useCallback(() => {
        setIsDateTimePickerVisible(false);
    }, []);
    return (
        <>
            {data.birthday &&
                data.birthday.map((item, index) => {
                    let day = item ? dayjs(item).format('DD/MM/YYYY') : '';
                    return (
                        <ChangeItem key={index}>
                            <TouchableOpacity onPress={() => onDeleteValue('birthday', index)}>
                                <Image source={require('../image/Delete.png')}/>
                            </TouchableOpacity>
                            <ShowButton>
                                <TouchableOpacity
                                    onPress={() => {
                                        showDateTimePicker(index);
                                    }}
                                >
                                    {day ? (
                                        <Textday>{day}</Textday>
                                    ) : (
                                        <TextdayError>Picker date</TextdayError>
                                    )}
                                </TouchableOpacity>
                            </ShowButton>
                        </ChangeItem>
                    );
                })}
            <DateTimePicker
                isVisible={isDateTimePickerVisible}
                onConfirm={handleDatePicked}
                onCancel={hideDateTimePicker}
            />
        </>
    )
})
const ChangeItem = styled.View`
  flex-direction: row;
  height: 44px;
  border-bottom-width: 0.5px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  align-items: center;
  margin: 0 16px;
`;
const ShowButton = styled.View`
  width: 90%;
  margin-left: 17px;
`;
const Textday = styled.Text`
  font-style: normal;
  font-size: 15px;
  color: #2f80ed;
`;

const TextdayError = styled.Text`
  color: #989898;
  font-size: 15px;
  font-style: normal;
`;