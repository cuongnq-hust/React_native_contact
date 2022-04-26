// @ts-ignore
import React from "react";
import MyTabs from "../TabNavigator/MyTabs";
import CreateContact from "../../component/CreateContact";
import Contact from "../../component/Contact";
import Details from "../../component/Details";
import ChangeInfo from "../../component/ChangeInfo";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const HomeStack = createNativeStackNavigator();

const HomeNavigation = () => {
    return (
        <HomeStack.Navigator screenOptions={{headerShown: false}}>
            <HomeStack.Screen name="MyTabs" component={MyTabs} />
            <HomeStack.Screen name="CreateContact" component={CreateContact} />
            <HomeStack.Screen name="Contact" component={Contact} />
            <HomeStack.Screen name="Details" component={Details} />
            <HomeStack.Screen name="ChangeInfo" component={ChangeInfo} />
        </HomeStack.Navigator>
    );
};

export default HomeNavigation;