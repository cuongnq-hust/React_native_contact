// @ts-ignore
import React from 'react';
import {FlatList, Alert} from 'react-native';
import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const SectionTop = styled.View`
  margin-top: ${10 + getStatusBarHeight()}px;
  flex-direction: row;
  justify-content: space-between;
`;

const More = styled.TouchableOpacity`
  padding-bottom: 10px;
  margin-left: 16px;
`;


const STextTitle = styled.Text`
  font-size: 24px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 10px;
`;


const CameraImage = styled.Image`
  margin-right: 16px;
`;

const MoreImage = styled.Image`
`;

const DATA = [
    {
        id: '1',
        name: 'Nguyen Van Tai',
        phone: '0123421421',
        day: 'Thứ 4',
    },
    {
        id: '2',
        name: 'Nguyen Van Tai',
        phone: '0123421421',
        day: 'Thứ 4',
    },
    {
        id: '3',
        name: 'Nguyen Van Tai',
        phone: '0123421421',
        day: 'Thứ 4',
    },
    {
        id: '4',
        name: 'Nguyen Van Tai',
        phone: '0123421421',
        day: 'Thứ 4',
    },
    {
        id: '5',
        name: 'Nguyen Van Tai',
        phone: '0123421421',
        day: 'Thứ 4',
    },
    {
        id: '6',
        name: 'Nguyen Van Tai',
        phone: '0123421421',
        day: 'Thứ 4',
    },
    {
        id: '7',
        name: 'Nguyen Van Tai',
        phone: '0123421421',
        day: 'Thứ 4',
    },
    {
        id: '8',
        name: 'Nguyen Van Tai',
        phone: '0123421421',
        day: 'Thứ 4',
    },
    {
        id: '9',
        name: 'Nguyen Van Tai',
        phone: '0123421421',
        day: 'Thứ 4',
    },
    {
        id: '10',
        name: 'Nguyen Van Tai',
        phone: '0123421421',
        day: 'Thứ 4',
    },
    {
        id: '11',
        name: 'Nguyen Van Tai',
        phone: '0123421421',
        day: 'Thứ 4',
    },
    {
        id: '12',
        name: 'Nguyen Van Tai',
        phone: '0123421421',
        day: 'Thứ 4',
    },
    {
        id: '13',
        name: 'Nguyen Van Tai',
        phone: '0123421421',
        day: 'Thứ 4',
    },
    {
        id: '14',
        name: 'Nguyen Van Tai',
        phone: '0123421421',
        day: 'Thứ 4',
    },
    {
        id: '15',
        name: 'Nguyen Van Tai',
        phone: '0123421421',
        day: 'Thứ 4',
    },
    {
        id: '16',
        name: 'Nguyen Van Tai',
        phone: '0123421421',
        day: 'Thứ 4',
    },
    {
        id: '17',
        name: 'Nguyen Van Tai',
        phone: '0123421421',
        day: 'Thứ 4',
    },
];

const Item = ({item, index}) => {
        const onPress = () => {
            Alert.alert(item.id)
        }
        return (
            <ItemView key={index} onPress={onPress}>
                <ImageCall source={require('../image/Phone.png')}/>
                <SBoxViewBig>
                    {index !== 0 ? <Divider/> : null}

                    <SBoxView>
                        <Info>
                            <ItemTitle>{item.name}</ItemTitle>
                            <ItemSubTitle>{item.phone}</ItemSubTitle>
                        </Info>
                        <Day>
                            <STextDay>{item.day}</STextDay>
                        </Day>
                        <Action>
                            <ActionImage source={require('../image/Action.png')}/>
                        </Action>
                    </SBoxView>

                </SBoxViewBig>
            </ItemView>
        )
    }
;
const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: #eee;
`;
const ImageCall = styled.Image`
  margin-top: 11px;
`;
const Info = styled.View`
  width: 200px;
`;
const Day = styled.View`
  justify-content: center;
`;
const Action = styled.View`
  justify-content: center;
  margin-right: 5px;
`;
const ActionImage = styled.Image`
`;
const SBoxViewBig = styled.View`
  width: 100%;
  margin-left: 20px;
`
const SBoxView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 91%;
`
const ItemView = styled.TouchableOpacity`
  width: 100%;
  height: 64px;
  flex-direction: row;
  padding: 0 16px;
  justify-content: space-between;
`;
const ItemTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  letter-spacing: 0.12px;
  padding-top: 12px;
`;

const STextDay = styled.Text`
  color: rgba(130, 130, 130, 1);
  font-size: 13px;
`

const ItemSubTitle = styled.Text`
  padding-top: 4px;
  font-size: 14px;
  color: #828282;
`;


const History = React.memo(({navigation}) => {
    return (
        <Container>
            <SectionTop>
                <More onPress={() => navigation.openDrawer()}>
                    <MoreImage source={require('../image/more.png')}/>
                </More>
                <STextTitle>Lịch sử</STextTitle>
                <CameraImage source={require('../image/Camera.png')}/>
            </SectionTop>
            <FlatList
                data={DATA}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => <Item item={item} index={index}/>}
            />
        </Container>
    );
})

export default History;
