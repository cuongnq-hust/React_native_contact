// @ts-ignore
import React, {useCallback} from "react";
import {Dimensions, Linking, TouchableOpacity} from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`
const ModalView = styled.View`
  padding-top: 10px;
  background-color: #F2A54A;
  border-radius: 10px;
  width: ${Dimensions.get('window').width - 20}px;
`
const Add = styled.TouchableOpacity`
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
const STextCancle = styled.Text`
  font-size: 16px;
  align-self: center;
  margin-top: 10px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ModalCall = React.memo(({data, setModalCall, type}) => {
    const hideModal = useCallback(() => {
        setModalCall(false)
    }, [])
    const pressCall = useCallback((item) => {
        const url = `tel://${item}`
        Linking.openURL(url)
        hideModal()
    }, [])
    const pressSms = useCallback((item) => {
        const url = `sms://${item}`
        Linking.openURL(url)
        hideModal()
    }, [])
    const pressFacetime = useCallback((item) => {
        const url = `facetime://${item}`
        Linking.openURL(url)
        hideModal()
    }, [])
    const pressEmails = useCallback((item) => {
        const url = `mailto://${item}`
        Linking.openURL(url)
        hideModal()
    }, [])


    if (type == 1) {
        return (
            <Container>
                <ModalView>
                    {data?.phones?.map((item, index) => (
                        <Add key={index} onPress={() => pressCall(item)}>
                            <Phone>ĐIỆN THOẠI</Phone>
                            <TextPhone>{item}</TextPhone>
                        </Add>
                    ))}
                    <TouchableOpacity onPress={() => hideModal()}>
                        <STextCancle>CANCLE</STextCancle>
                    </TouchableOpacity>
                </ModalView>

            </Container>
        )
    }
    if (type == 2) {
        return (
            <Container>
                <ModalView>
                    {data?.phones?.map((item, index) => (
                        <Add key={index} onPress={() => pressSms(item)}>
                            <Phone>NHẮN TIN</Phone>
                            <TextPhone>{item}</TextPhone>
                        </Add>
                    ))}
                    <TouchableOpacity onPress={() => hideModal()}>
                        <STextCancle>CANCLE</STextCancle>
                    </TouchableOpacity>
                </ModalView>

            </Container>
        )
    }
    if (type == 3) {
        return (
            <Container>
                <ModalView>
                    {data?.phones?.map((item, index) => (
                        <Add key={index} onPress={() => pressFacetime(item)}>
                            <Phone>FACETIME</Phone>
                            <TextPhone>{item}</TextPhone>
                        </Add>
                    ))}
                    <TouchableOpacity onPress={() => hideModal()}>
                        <STextCancle>CANCLE</STextCancle>
                    </TouchableOpacity>
                </ModalView>

            </Container>
        )
    }
    if (type == 4) {
        return (
            <Container>
                <ModalView>
                    {data?.emails?.map((item, index) => (
                        <Add key={index} onPress={() => pressEmails(item)}>
                            <Phone>EMAILS</Phone>
                            <TextPhone>{item}</TextPhone>
                        </Add>
                    ))}
                    <TouchableOpacity onPress={() => hideModal()}>
                        <STextCancle>CANCLE</STextCancle>
                    </TouchableOpacity>
                </ModalView>
            </Container>
        )
    }
})
