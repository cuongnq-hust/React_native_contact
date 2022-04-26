// @ts-ignore
import React from "react";
import Contact from "../../component/Contact";
import History from "../../component/History";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import styled from "styled-components/native";

const Tab = createBottomTabNavigator();

const MyTabs =()=>{
    return(
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#F2A54A',
                },
                tabBarIcon: ({focused}) => {
                    if (route.name === 'Contact') {
                        return (
                            <ViewContact>
                                <ImageContact
                                    source={
                                        focused
                                            ? require('../../image/Contact.png')
                                            : require('../../image/Contactnull.png')
                                    }
                                />
                                {focused ? (
                                    <TextBar>Danh bạ</TextBar>
                                ) : (
                                    <TextBarNull>Danh bạ</TextBarNull>
                                )}
                            </ViewContact>
                        );
                    } else if (route.name === 'History') {
                        return (
                            <ViewContact>
                                <ImageContact
                                    source={
                                        focused
                                            ? require('../../image/TimeNull.png')
                                            : require('../../image/Time.png')
                                    }
                                />
                                {focused ? (
                                    <TextBar>Gần đây</TextBar>
                                ) : (
                                    <TextBarNull>Gần Đây</TextBarNull>
                                )}
                            </ViewContact>
                        );
                    }
                },
                tabBarInactiveTintColor: 'gray',
                tabBarActiveTintColor: 'tomato',
            })}
        >
            <Tab.Screen name="Contact" component={Contact} />
            <Tab.Screen name="History" component={History} />
        </Tab.Navigator>
    );
}

const ViewContact = styled.View`
  align-items: center;
`;
const ImageContact = styled.Image``;
const TextBar = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  letter-spacing: 0.12px;
  color: #ffffff;
`;
const TextBarNull = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  letter-spacing: 0.12px;
  color: #ffdaae;
`;
export default MyTabs;