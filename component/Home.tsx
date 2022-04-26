// @ts-ignore
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const SView = styled.View`
`
const SImage = styled.Image`
`
const Section1 = styled.View`
  flex: 3.5;
  align-items: center;
`;

const BackgroudImage = styled.Image`
  position: absolute;
  width: 375px;
  height: 196.77px;
  top: 40%;
`;

const AvatarImage = styled.Image`
  width: 200px;
  height: 200px;
  background: rgba(242, 165, 74, 0.1);
  border-radius: 100px;
  top: 27%;
`;

const Section2 = styled.View`
  flex: 5;
`;

const TitleText = styled.Text`
  font-weight: bold;
  font-size: 33px;
  line-height: 35px;
  letter-spacing: 0.12px;
  text-align: center;
  color: #F2A54A;
`;

const SubTitleText = styled.Text`
  margin-top: 7px;
  font-size: 17px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.12px;
  color: #333;
`;

const Logo = styled.View`
  align-items: center;
`;

const TextLogIn = styled.Text`
  font-style: italic;
  font-weight: normal;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.24px;
  color: #828282;
  margin-bottom: 24px;
`;

const LoginTop = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  align-self: center;
  width: 90%;
  padding: 0 37px;
  height: 52px;
  background-color: #F2A54A;
  border-radius: 4px;
  margin-bottom: 12px;
`;

const TextLogInTop = styled.Text`
  font-weight: 500;
  font-size: 15px;
  color: #fff;
`;

const LoginBot = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  align-self: center;
  width: 90%;
  height: 52px;
  background-color: #fff;
  border-radius: 4px;
  border-width: 1px;
  border-color: #F2A54A;
  margin-bottom: 40px;
`;

const TextLogInBot = styled.Text`
  font-weight: 500;
  font-size: 15px;
  color: #F2A54A;
`;

const Section3 = styled.View`
  flex: 1;
  justify-content: space-between;
  margin-bottom: 50px;
`;
const Section4 = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

const Home = React.memo(({navigation}) => {
    return (
        <Container>
            <Section1>
                <BackgroudImage source={require('../image/Group2.png')}/>
                <AvatarImage source={require('../image/Group.png')}/>
            </Section1>
            <Section2>
                <Section3>
                    <SView>
                        <TitleText>Base wework</TitleText>
                        <SubTitleText>Giải pháp quản lý công việc</SubTitleText>
                        <SubTitleText> & dự án toàn diện cho doanh nghiệp 4.0</SubTitleText>
                    </SView>
                    <Logo>
                        <SImage source={require('../image/Vector.png')}/>
                    </Logo>
                </Section3>
                <Section4>
                    <TextLogIn>Bạn chưa đăng nhập</TextLogIn>
                    <LoginTop onPress={() => navigation.navigate('HomeDrawer')}>
                        <TextLogInTop>ĐĂNG NHẬP BẰNG BASE ACCOUNT</TextLogInTop>
                    </LoginTop>
                    <LoginBot onPress={() => navigation.navigate('HomeDrawer')}>
                        <TextLogInBot>ĐĂNG NHẬP THỦ CÔNG</TextLogInBot>
                    </LoginBot>
                </Section4>
            </Section2>
        </Container>
    );
})

export default Home;