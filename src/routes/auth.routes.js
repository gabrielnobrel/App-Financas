import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Signin from "../pages/Singin";

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="SingIn" component={Signin} />
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;
