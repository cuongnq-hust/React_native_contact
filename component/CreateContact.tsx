// @ts-ignore
import React, {useCallback, useMemo, useState} from 'react';
import styled from 'styled-components/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';
// @ts-ignore
import dayjs from 'dayjs';
import {ItemIsCreated} from "./ItemIsCreated";
import {CreateNewDate} from "./CreateNewDate";
import {CreateNewImage} from "./CreateNewImage";
import {CreateNewInfo} from "./CreateNewInfo";
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {CreateItemOnCreate} from "./CreateItemOnCreate";
import {CreateNote} from "./CreateNote";


const CreateContact = React.memo(({navigation}) => {
    const dispatch = useDispatch();
    const [paramAddContact, setParamAddNewContact] = useState(() => ({
        firstName: '',
        lastName: '',
        company: '',
        note: '',
        phones: [],
        emails: [],
        address: [],
        birthday: [],
        image: '',
    }));

    const onValueChange = useCallback(
        (keyName: string, value: string) => {
            setParamAddNewContact({
                ...paramAddContact,
                [keyName]: value,
            });
        },
        [paramAddContact],
    );

    const isCanUpdate = useMemo(() => {
        return !(
            paramAddContact.firstName.length === 0 &&
            paramAddContact.lastName.length === 0 &&
            paramAddContact.company.length === 0 &&
            paramAddContact.note.length === 0 &&
            paramAddContact.phones.length === 0 &&
            paramAddContact.emails.length === 0 &&
            paramAddContact.address.length === 0 &&
            paramAddContact.image.length === 0 &&
            paramAddContact.birthday.length === 0);
    }, [paramAddContact]);

    const onSaveNote = useCallback(() => {
        if (isCanUpdate) {
            const newId = Math.random();
            dispatch({
                type: 'ADD_TODO',
                payload: {
                    id: newId,
                    firstName: paramAddContact.firstName,
                    lastName: paramAddContact.lastName,
                    company: paramAddContact.company,
                    phones: paramAddContact.phones.filter(item => item.length != 0),
                    emails: paramAddContact.emails.filter(item => item.length != 0),
                    address: paramAddContact.address.filter(item => item.length != 0),
                    note: paramAddContact.note,
                    birthday: paramAddContact.birthday.filter(item => item.length != 0),
                    image: paramAddContact.image,
                },
            });
            navigation.navigate('Details', {
                contactId: newId,
            });
        } else {
            return alert('ban chua dien thong tin');
        }
    }, [paramAddContact, isCanUpdate]);

    const onChangeValue = useCallback(
        (keyName: string) => {
            setParamAddNewContact({
                ...paramAddContact,
                [keyName]: paramAddContact[keyName].concat(''),
            })
        },
        [paramAddContact],
    );
    const onDeleteValue = useCallback(
        (keyName: string, index) => {
            const newItem = [...paramAddContact[keyName]]
            newItem.splice(index, 1);
            setParamAddNewContact({
                ...paramAddContact,
                [keyName]: newItem
            })
        },
        [paramAddContact],
    );

    const onGoBack = useCallback(() => {
        return navigation.goBack()
    }, [])

    return (
        <Container>
            <Fix>
                <Cancel onPress={onGoBack}>
                    <Text1>Hủy</Text1>
                </Cancel>
                <Done onPress={onSaveNote}>
                    <TextNotDone isCanUpdate={isCanUpdate}>Xong</TextNotDone>
                </Done>
            </Fix>
            <KeyboardAwareScrollView extraScrollHeight={20}>
                <AvatarContainer>
                    <CreateNewImage paramAddContact={paramAddContact} setParamAddNewContact={setParamAddNewContact}/>
                </AvatarContainer>
                <Section3>
                    <CreateNewInfo data={paramAddContact}
                                   onValueChange={onValueChange}
                                   placeholder={"Họ"}
                                   keyName={"firstName"}/>

                    <CreateNewInfo data={paramAddContact}
                                   onValueChange={onValueChange}
                                   placeholder={"Tên"}
                                   keyName={"lastName"}/>

                    <CreateNewInfo data={paramAddContact}
                                   onValueChange={onValueChange}
                                   placeholder={"Công Ty"}
                                   keyName={"company"}/>

                    <ViewWhite/>
                    <ItemIsCreated data={paramAddContact} setData={setParamAddNewContact}
                                   onDeleteValue={onDeleteValue} keyName={"phones"}
                                   keyboardType={"decimal-pad"}/>
                    <CreateItemOnCreate onChangeValue={onChangeValue} keyName={"phones"}
                                        title={"Thêm số điện thoại"}/>

                    <ItemIsCreated data={paramAddContact} setData={setParamAddNewContact}
                                   onDeleteValue={onDeleteValue} keyName={"emails"}
                                   keyboardType={"email-address"}/>
                    <CreateItemOnCreate onChangeValue={onChangeValue} keyName={"emails"}
                                        title={"Thêm email"}/>

                    <ItemIsCreated data={paramAddContact} setData={setParamAddNewContact}
                                   onDeleteValue={onDeleteValue} keyName={"address"}
                                   keyboardType={"email-address"}/>
                    <CreateItemOnCreate onChangeValue={onChangeValue} keyName={"address"}
                                        title={"Thêm address"}/>

                    <CreateNewDate data={paramAddContact} setData={setParamAddNewContact}
                                   onDeleteValue={onDeleteValue}/>
                    <CreateItemOnCreate onChangeValue={onChangeValue} keyName={"birthday"}
                                        title={"Thêm ngày"}/>


                    <CreateNote data={paramAddContact}
                                onValueChange={onValueChange}
                                keyName={"note"}/>
                </Section3>
            </KeyboardAwareScrollView>
        </Container>
    );
})
const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const Section3 = styled.View`
  margin-top: 20px;
  margin-bottom: 50px;
`;

const AvatarContainer = styled.View`
  width: 120px;
  height: 120px;
  margin-top: 24px;
  align-self: center;
  justify-content: center;
`;

const Fix = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${10 + getStatusBarHeight()}px;
`;

const Cancel = styled.TouchableOpacity`
  margin-left: 16px;
`;

const Text1 = styled.Text`
  font-size: 20px;
  line-height: 22px;
  letter-spacing: -0.41px;
  color: #f2a54a;
`;

const Done = styled.TouchableOpacity`
  margin-right: 16px;
`;

const TextNotDone = styled.Text<{ isCanUpdate: boolean }>`
  font-size: 20px;
  line-height: 22px;
  text-align: center;
  color: ${p => p.isCanUpdate ? '#f2a54a' : "#828282"};
`;

const ViewWhite = styled.View`
  background-color: white;
  height: 20px;
`;

export default CreateContact;
