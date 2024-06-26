import React from "react";
import { AuthProvider } from "./useAuth";   

const AppProvider = ({children}) => <AuthProvider>{children}</AuthProvider>;

export default AppProvider;