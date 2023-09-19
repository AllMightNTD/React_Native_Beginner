import { StatusBar } from "expo-status-bar";
import {
  Button,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { NativeRouter, Route, Routes } from "react-router-native"; // Thêm NativeRouter, Route, và Routes từ react-router-native
import Register from "./src/components/Register";
import Login from "./src/components/Login";
import ToastManager from "toastify-react-native";

export default function App() {
  return (
    <NativeRouter>
      <ToastManager />
      <Routes>
        <Route path="/" element={<Register />} />{" "}
        <Route path="/login" element={<Login />} />{" "}
      </Routes>
    </NativeRouter>
  );
}
