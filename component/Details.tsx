// @ts-ignore
import React, {useCallback, useMemo, useRef, useState} from 'react';
import {TouchableOpacity, Alert, Modal, Animated} from 'react-native';
import styled from 'styled-components/native';
import {removeItem} from '../storeMain/addReducer';
import {useDispatch} from 'react-redux';
// @ts-ignore
import dayjs from 'dayjs';
import {useContact} from "./hooks";
import {ShowDetaiInfo} from "./ShowDetaiInfo";
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {ModalCall} from "./ModalCall";
import {ShowInfoDetail} from "./ShowInfoDetail";
import {ShowBirthday} from "./ShowBirthday";
import {AnimationCreate} from "./AnimationCreate";


const Details = React.memo(({navigation, route}) => {
    const contactId = route.params.contactId;
    const dispatch = useDispatch();
    const [type, setType] = useState('')
    const [modalCall, setModalCall] = useState(false)
    const showModal = useCallback(() => {
        setModalCall(true)
    }, [])
    const itemContact = useContact(contactId)

    const deleteItem = useCallback(() => {
        Alert.alert(
            'Chú Ý',
            'Bạn Có Muốn Xoá Liên Lạc Này',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Yes Pressed'),
                    style: 'cancel'
                },
                {
                    text: 'OK',
                    onPress: () => {
                        dispatch(removeItem(contactId));
                        navigation.popToTop();
                    }
                },
            ],
        );
    }, [itemContact]);


    const gotoChange = useCallback(() => {
        navigation.navigate('ChangeInfo', {
            contactId: contactId,
        });
    }, []);

    const onGoBack = useCallback(() => {
        return navigation.popToTop()
    }, [])

    const isPressCall = useMemo(() => {
        return itemContact?.phones.length !== 0;
    }, [itemContact?.phones])


    const isPressEmails = useMemo(() => {
        return itemContact?.emails.length !== 0;
    }, [itemContact?.emails])

    const scrollY = useRef(new Animated.Value(0)).current

    return (
        <Container>
            <SectionTop>
                <Fix>
                    <Cancel onPress={onGoBack}>
                        <SImage source={require('../image/Back.png')}/>
                    </Cancel>
                    <Done onPress={gotoChange}>
                        <STextChange>Sửa</STextChange>
                    </Done>
                </Fix>

                <AnimationCreate itemContact={itemContact} scrollY={scrollY}/>

                <Modal
                    transparent={true}
                    animationType={"fade"}
                    visible={modalCall}>
                    <ModalCall setModalCall={setModalCall} data={itemContact || []} type={type}/>
                </Modal>
                <Action>
                    <ViewAction>
                        <ShowInfoDetail
                            active={isPressCall}
                            setType={setType}
                            keyName={"1"}
                            title={"Gọi Điện"}
                            showModal={showModal}
                            imageAction={require('../image/Call.png')}
                            imageNone={require('../image/CallNone.png')}
                        />
                    </ViewAction>
                    <ViewAction>
                        <ShowInfoDetail
                            active={isPressCall}
                            setType={setType}
                            keyName={"2"}
                            title={"Nhắn Tin"}
                            showModal={showModal}
                            imageAction={require('../image/Chat.png')}
                            imageNone={require('../image/ChatNone.png')}
                        />
                    </ViewAction>
                    <ViewAction>
                        <ShowInfoDetail
                            active={isPressCall}
                            setType={setType}
                            keyName={"3"}
                            title={"Facetime"}
                            showModal={showModal}
                            imageAction={require('../image/Video.png')}
                            imageNone={require('../image/VideoNone.png')}
                        />
                    </ViewAction>
                    <ViewAction>
                        <ShowInfoDetail
                            active={isPressEmails}
                            setType={setType}
                            keyName={"4"}
                            title={"Gửi mail"}
                            showModal={showModal}
                            imageAction={require('../image/EmailAction.png')}
                            imageNone={require('../image/Email.png')}
                        />
                    </ViewAction>
                </Action>
            </SectionTop>
            <Save>
                <Animated.ScrollView showsVerticalScrollIndicator={false}
                                     scrollEventThrottle={16}
                                     onScroll={Animated.event(
                                         [{nativeEvent: {contentOffset: {y: scrollY}}}],
                                         {useNativeDriver: false},
                                     )}>
                    <ShowDetaiInfo data={itemContact?.phones || []} Title={"Điện thoại"}/>
                    <ShowDetaiInfo data={itemContact?.emails || []} Title={"Email"}/>
                    <ShowDetaiInfo data={itemContact?.address || []} Title={"Address"}/>
                    <ShowBirthday itemContact={itemContact}/>
                    <AddNote>
                        <Phone>Ghi chú</Phone>
                        <TextPhone> {itemContact?.note} </TextPhone>
                    </AddNote>
                    <SViewAddMessage>
                        <TextSend>Gửi tin nhắn</TextSend>
                    </SViewAddMessage>
                    <SViewAddMessage>
                        <TouchableOpacity onPress={deleteItem}>
                            <TextDetele>Xóa người gọi</TextDetele>
                        </TouchableOpacity>
                    </SViewAddMessage>
                </Animated.ScrollView>
            </Save>
        </Container>
    );
})

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const SectionTop = styled.View`
  background-color: rgba(242, 166, 74, 0.05);
`;

const Fix = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${10 + getStatusBarHeight()}px;
`;

const Cancel = styled.TouchableOpacity`
  margin-left: 16px;
`;

const Done = styled.TouchableOpacity`
  margin-right: 16px;
`;

const STextChange = styled.Text`
  font-size: 20px;
  line-height: 22px;
  color: #f2a54a;
`;

const Action = styled.View`
  flex-direction: row;
  align-items: center;
  height: 66px;
  padding: 0 20px;
  justify-content: space-around;
  margin-top: 20px;
  margin-bottom: 5px;
`;


const SViewAddMessage = styled.View`
  height: 50px;
  border-bottom-width: 0.5px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  margin-left: 16px;
`;

const TextPhone = styled.Text`
  font-size: 17px;
  color: #2f80ed;
  margin-top: 3px;
  margin-bottom: 10px;
`;

const SImage = styled.Image`
`

const Phone = styled.Text`
  margin-top: 9px;
  font-size: 14px;
  line-height: 22px;
`;

const TextSend = styled.Text`
  margin-top: 14px;
  font-size: 16px;
  line-height: 22px;
`;

const TextDetele = styled.Text`
  font-size: 16px;
  line-height: 22px;
  margin-top: 14px;
  color: #ff4a4a;
`;

const ViewAction = styled.View`
  align-items: center;
`;

const Save = styled.SafeAreaView`
  flex: 1;
`;

const AddNote = styled.View`
  width: 100%;
  border-bottom-width: 0.5px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  margin: 0 16px 0 16px;
`;

export default Details;
