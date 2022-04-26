// @ts-ignore
import React, {useCallback, useMemo, useState} from 'react';

import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import styled from 'styled-components/native';
import 'react-native-gesture-handler';
import CreateContact from './CreateContact';
import SectionListModule from 'react-native-sectionlist-contacts';
import {useContacts} from './hooks';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const Item = ({item, index}) => (
    <ItemView key={index}>
        <ItemImage>
            {item.image ? (
                <ImageItem source={{uri: item.image}}/>
            ) : (
                <ImageItem source={require('../image/Mask.png')}/>
            )}
        </ItemImage>
        <FlexBox>
            {index !== 0 ? <Divider/> : null}
            <ItemTitle>
                {item?.firstName || ""} {item?.lastName || ""}
            </ItemTitle>
            <ItemSubTitle>{item?.phones[0]}</ItemSubTitle>
        </FlexBox>
    </ItemView>
);


const Contact = React.memo(({navigation}) => {
    const listItems = useContacts();

    const [search, setSearch] = useState('');

    const data = useMemo(() => {
        return listItems
            .filter(item => {
                return item.firstName.includes(search) || item.lastName.includes(search)
            })
            .map(item => {
                return {
                    ...item,
                    name: item.firstName,
                };
            })
    }, [listItems, search])

    const checkData = useMemo(() => {
        return data.length != 0;
    }, [data])

    const openAddContact = useCallback(() => {
        return navigation.navigate('CreateContact')
    }, [])

    const openDrawer = useCallback(() => {
        return navigation.openDrawer()
    }, [])

    const renderHeader = useCallback((params) => {
        return (
            <BoxHeader>
                <ViewHeader>
                    <HeaderTitle>{params.key}</HeaderTitle>
                </ViewHeader>
            </BoxHeader>)
    }, []);

    const renderItem = useCallback((item, index) => {
        const onGoToDetails = () => {
            navigation.navigate('Details', {
                contactId: item.id,
            });
        }
        return (
            <TouchableOpacity onPress={onGoToDetails}>
                <Item item={item} index={index}/>
            </TouchableOpacity>
        )
    }, [])

    return (
        <Container>
            <SectionTop>
                <More onPress={openDrawer}>
                    <MoreImage source={require('../image/more.png')}/>
                </More>
                <STextContact>Liên hệ</STextContact>
                <Camera onPress={openAddContact}>
                    <CameraImage source={require('../image/Camera.png')}/>
                </Camera>
            </SectionTop>

            <Input>
                <ImageSearchView>
                    <ImageSearch source={require('../image/Search.png')}/>
                </ImageSearchView>
                <TextSearch
                    placeholder="Tìm kiếm danh bạ"
                    value={search}
                    onChangeText={setSearch}
                />
            </Input>
            <DeviderWhite/>
            {checkData
                ?
                <SectionListModule
                    sectionListData={data}
                    initialNumToRender={data.length}
                    showsVerticalScrollIndicator={false}
                    letterTextStyle={styles.contactList}
                    renderItem={renderItem}
                    renderHeader={renderHeader}
                    otherAlphabet="#"
                />
                :
                <SDataImage source={require('../image/Data.jpeg')}/>
            }
        </Container>
    );
})
const SDataImage = styled.Image`
  align-self: center;
`
const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const SectionTop = styled.View`
  flex-direction: row;
  margin-top: ${10 + getStatusBarHeight()}px;
  justify-content: space-between;
`;

const More = styled.TouchableOpacity`
  margin-left: 16px;
`;


const STextContact = styled.Text`
  font-size: 24px;
  color: #333333;
  font-weight: 500;
`;

const Camera = styled.TouchableOpacity`
`;

const Input = styled.View`
  background-color: #f2f2f2;
  height: 36px;
  opacity: 0.5;
  border-radius: 6px;
  margin: 14px 10px 0 10px;
  flex-direction: row;
`;
const ImageSearchView = styled.View`
  justify-content: center;
`;

const ImageSearch = styled.Image`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`;
const TextSearch = styled.TextInput`
  margin-left: 11px;
  width: 90%;
`;

const CameraImage = styled.Image`
  margin-right: 16px;
`;

const MoreImage = styled.Image`
`;

const ItemView = styled.View`
  width: 100%;
  height: 64px;
  flex-direction: row;
  padding: 0 16px;
  background-color: rgb(255, 255, 255);
`;

const FlexBox = styled.View`
  flex: 1;
`;

const ItemTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  letter-spacing: 0.12px;
  padding-top: 12px;
`;

const ItemSubTitle = styled.Text`
  padding-top: 4px;
  font-size: 14px;
  color: #828282;
`;

const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: #eee;
`;
const ItemImage = styled.View`
  width: 56px;
  height: 100%;
  padding-top: 12px;
`;

const ImageItem = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;


const BoxHeader = styled.View`
  background-color: #fff;
`

const ViewHeader = styled.View`
  background-color: rgba(224, 224, 224, 0.5);
  height: 36px;
  justify-content: center;
`;
const HeaderTitle = styled.Text`
  font-weight: 500;
  font-size: 15px;
  margin-left: 16px;
`;

const DeviderWhite = styled.View`
  height: 9px;
  background-color: white;
`;

export default Contact;

const styles = StyleSheet.create({
    contactList: {
        color: '#F2A54A',
        fontSize: 13,
        marginLeft: 20,
    }
})