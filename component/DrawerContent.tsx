// @ts-ignore
import React, {useCallback, useState} from 'react';
import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const DrawerContent = React.memo(() => {
    const [isShowContent, setShowContent] = useState(false);

    const showContent = useCallback(() => {
        setShowContent(true);
    }, []);

    const hideContent = useCallback(() => {
        setShowContent(false);
    }, []);

    return (
        <Container>
            <DrawerContentTop>
                <User>
                    <SImage source={require('../image/Avatar.png')}/>
                    <Info>
                        <Name>Nguyễn Tiến Nam</Name>
                        <JobText> Admin Admin</JobText>
                    </Info>
                </User>
            </DrawerContentTop>
            <New>
                <Plus source={require('../image/Plus.png')}/>
                <TextTitle>New collection</TextTitle>
            </New>
            <BtnSection onPress={isShowContent ? hideContent : showContent}>
                <SImage source={isShowContent ? require('../image/Play.png') : require('../image/Play2.png')}/>
                <SectionTitle>Collections</SectionTitle>
            </BtnSection>
            {isShowContent ? (
                <>
                    <New>
                        <Plus source={require('../image/Human.png')}/>
                        <TextTitle>All</TextTitle>
                    </New>
                    <New>
                        <Plus source={require('../image/Human.png')}/>
                        <TextTitle>New General</TextTitle>
                    </New>
                    <New>
                        <Plus source={require('../image/Human.png')}/>
                        <TextTitle>Investors</TextTitle>
                    </New>
                    <New>
                        <Plus source={require('../image/Human.png')}/>
                        <TextTitle>Lead</TextTitle>
                    </New>
                    <New>
                        <Plus source={require('../image/Human.png')}/>
                        <TextTitle>VIP</TextTitle>
                    </New>
                </>
            ) : null}
        </Container>
    );
})

const Container = styled.View`
  flex: 1;
`;
const SImage = styled.Image`
`
const DrawerContentTop = styled.View`
  height: ${60 + getStatusBarHeight()}px;
  background-color: #f2a54a;
  padding-top: ${getStatusBarHeight()}px;
`;
const User = styled.View`
  flex-direction: row;
  margin-left: 20px;
  margin-top: 10px;
`;
const Info = styled.View`
  margin-left: 9px;
`;
const Name = styled.Text`
  color: #fff;
  font-size: 16px;
`;
const JobText = styled.Text`
  color: #fff;
  font-size: 12px;
`;

const New = styled.View`
  height: 44px;
  margin-top: 8px;
  flex-direction: row;
`;
const Plus = styled.Image`
  margin-left: 20px;
  margin-top: 12px;
`;

const TextTitle = styled.Text`
  color: #333;
  font-size: 15px;
  margin-top: 14px;
  margin-left: 20px;
`;

const BtnSection = styled.TouchableOpacity`
  height: 44px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: rgba(242, 165, 74, 0.1);
  padding: 0 20px;
`;

const SectionTitle = styled.Text`
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.12px;
  text-transform: uppercase;
  color: #333333;
  padding: 0 10px;
`;

export default DrawerContent;
