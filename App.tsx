// @ts-ignore
import React from 'react';
import Home from './component/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store, persistor} from './storeMain/store';
import HomeDrawer from "./Navigation/DrawerNavigation/HomeDrawer";
import {PersistGate} from 'redux-persist/lib/integration/react';

const Stack = createNativeStackNavigator();

const App = React.memo(() => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Stack.Navigator
                        initialRouteName="Home"
                        screenOptions={{headerShown: false}}
                    >
                        <Stack.Screen name="Home" component={Home}/>
                        <Stack.Screen name="HomeDrawer" component={HomeDrawer}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
})

export default App;
