// @ts-ignore
import React from "react";
import DrawerContent from "../../component/DrawerContent";
import HomeNavigation from "../StackNavigation/HomeNavigation";
import {createDrawerNavigator} from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
    return (
        <Drawer.Navigator
            initialRouteName="HomeNavigation"
            screenOptions={{headerShown: false, drawerType: 'front'}}
            drawerContent={props => <DrawerContent {...props} />}
        >
            <Drawer.Screen name="HomeNavigation" component={HomeNavigation} />
        </Drawer.Navigator>
    );
};

export default HomeDrawer;
