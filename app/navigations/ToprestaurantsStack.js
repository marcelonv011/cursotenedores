import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Toprestaurants from "../screens/Toprestaurants";

const Stack = createNativeStackNavigator();

export default function ToprestaurantsStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="toprestaurants"
            component={Toprestaurants}
            options={{ title: "Los mejores restaurantes" }}
            />
        </Stack.Navigator>
    );
}