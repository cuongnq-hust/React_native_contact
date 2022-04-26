// @ts-ignore
import React, {useCallback, useMemo, useState} from 'react';
import {Alert} from 'react-native';
import styled from 'styled-components/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';
import {removeItem} from '../storeMain/addReducer';
// @ts-ignore
import dayjs from 'dayjs';
import {useContact} from "./hooks";
import {ItemIsCreated} from "./ItemIsCreated";
import {CreateNewDate} from "./CreateNewDate";
import {CreateNewImage} from "./CreateNewImage";
import {CreateNewInfo} from "./CreateNewInfo";
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {CreateNote} from "./CreateNote";
import {CreateItemOnCreate} from "./CreateItemOnCreate";

const ChangeInfo = React.memo(({navigation, route}) => {
    const contactId = route.params.contactId;
    const dispatch = useDispatch();
    const contact = useContact(contactId)

    const [param, setParam] = useState({
        firstName: contact?.firstName,
        lastName: contact?.lastName,
        company: contact?.company,
        phones: contact?.phones,
        image: contact?.image,
        id: contact?.id,
        emails: contact?.emails,
        address: contact?.address,
        note: contact?.note,
        birthday: contact?.birthday,
    });
    const deleteItem = useCallback(() => {
        Alert.alert(
            "Chú Ý",
            "Bạn Có Muốn Xoá Người Này Không",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK", onPress: () => {
                        dispatch(removeItem(contactId));
                        navigation.popToTop();
                    }
                }
            ]
        );
    }, [contactId])

    const onValueChange = useCallback(
        (keyName: string, value: string) => {
            setParam({
                ...param,
                [keyName]: value,
            });
        },
        [param],
    );

    const onEditItem = useCallback(() => {
        dispatch({
            type: 'EDIT_ITEM',
            payload: {
                id: param.id,
                firstName: param.firstName,
                lastName: param.lastName,
                company: param.company,
                phones: param.phones.filter(_item => _item.length != 0),
                emails: param.emails.filter(_item => _item.length != 0),
                address: param.address.filter(_item => _item.length != 0),
                note: param.note,
                birthday: param.birthday.filter(_item => _item.length != 0),
                image: param.image,
            }
        });
        navigation.goBack();
    }, [param]);

    const onChangeValue = useCallback(
        (keyName: string) => {
            setParam({
                ...param,
                [keyName]: param[keyName].concat(''),
            });
        },
        [param],
    );

    const onDeleteValue = useCallback(
        (keyName: string, index) => {
            const newItem = [...param[keyName]]
            newItem.splice(index, 1);
            setParam({
                ...param,
                [keyName]: newItem
            })
        },
        [param],
    );

    const onGoBack = useCallback(() => {
        return navigation.goBack()
    }, [])

    return (
        <Container>
            <Fix>
                <Cancel onPress={onGoBack}>
                    <STextCancle>Huỷ</STextCancle>
                </Cancel>
                <Done onPress={onEditItem}>
                    <STextDone>Xong</STextDone>
                </Done>
            </Fix>
            <KeyboardAwareScrollView extraScrollHeight={20}>
                <AvatarContainer>
                    <CreateNewImage paramAddContact={param} setParamAddNewContact={setParam}/>
                </AvatarContainer>
                <Section3>
                    <CreateNewInfo data={param}
                                   onValueChange={onValueChange}
                                   placeholder={"Họ"}
                                   keyName={"firstName"}/>

                    <CreateNewInfo data={param}
                                   onValueChange={onValueChange}
                                   placeholder={"Tên"}
                                   keyName={"lastName"}/>

                    <CreateNewInfo data={param}
                                   onValueChange={onValueChange}
                                   placeholder={"Công Ty"}
                                   keyName={"company"}/>

                    <Divider/>

                    <ItemIsCreated data={param} setData={setParam}
                                   onDeleteValue={onDeleteValue} keyName={"phones"}
                                   keyboardType={"decimal-pad"}/>
                    <CreateItemOnCreate onChangeValue={onChangeValue} keyName={"phones"}
                                        title={"Thêm số điện thoại"}/>

                    <ItemIsCreated data={param} setData={setParam}
                                   onDeleteValue={onDeleteValue} keyName={"emails"}
                                   keyboardType={"email-address"}/>
                    <CreateItemOnCreate onChangeValue={onChangeValue} keyName={"emails"}
                                        title={"Thêm email"}/>

                    <ItemIsCreated data={param} setData={setParam}
                                   onDeleteValue={onDeleteValue} keyName={"address"}
                                   keyboardType={"email-address"}/>
                    <CreateItemOnCreate onChangeValue={onChangeValue} keyName={"address"}
                                        title={"Thêm địa chỉ"}/>

                    <CreateNewDate data={param} setData={setParam}
                                   onDeleteValue={onDeleteValue}/>
                    <CreateItemOnCreate onChangeValue={onChangeValue} keyName={"birthday"}
                                        title={"Thêm ngày"}/>

                    <CreateNote data={param} onValueChange={onValueChange}
                                keyName={"note"}/>
                    <DeleteBox onPress={deleteItem}>
                        <TextDelete>Xóa người gọi</TextDelete>
                    </DeleteBox>
                </Section3>
            </KeyboardAwareScrollView>
        </Container>
    );
})
const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const Fix = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${10 + getStatusBarHeight()}px;
`;

const Section3 = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Cancel = styled.TouchableOpacity`
  margin-left: 16px;
`;

const STextCancle = styled.Text`
  font-size: 20px;
  line-height: 22px;
  color: #828282;
`;

const Done = styled.TouchableOpacity`
  margin-right: 16px;
`;

const STextDone = styled.Text`
  font-size: 20px;
  line-height: 22px;
  text-align: center;
  color: #f2a54a;
`;

const AvatarContainer = styled.View`
  width: 120px;
  height: 120px;
  margin-top: 24px;
  align-self: center;
  justify-content: center;
`;

const Divider = styled.View`
  height: 24px;
  background-color: white;
`;

const DeleteBox = styled.TouchableOpacity`
  height: 50px;
  border-bottom-width: 0.5px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  margin-left: 16px;
`;

const TextDelete = styled.Text`
  font-size: 16px;
  line-height: 22px;
  margin-top: 14px;
  color: #ff4a4a;
`;

export default ChangeInfo;
