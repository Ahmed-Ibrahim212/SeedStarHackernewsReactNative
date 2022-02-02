import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { Store } from "./redux/store";
import { SignUpScreen } from "./screens/SignUpScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { Login } from "./screens/Login";
import { AboutScreen } from "./screens/About";


const Stack = createStackNavigator();



export default function App() {
return (
<Provider store={Store}>
    <NavigationContainer>
        <StatusBar backgroundColor="#000" barStyle="light-content"/>

        <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Signup">

            <Stack.Screen name="Signup"component={SignUpScreen}/>
            <Stack.Screen name="Login"component={Login}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="About"component={AboutScreen}/>

        </Stack.Navigator>
    </NavigationContainer>
</Provider>
);
}
