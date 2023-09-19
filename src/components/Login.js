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
import { Link } from "react-router-native";
const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In To Project</Text>
      {/* Text */}
      <TextInput style={styles.input} placeholder="Enter your name ..." />
      {/* Password */}
      <TextInput style={styles.input} secureTextEntry placeholder="Password" />
      <View style={styles.viewRecover}>
        <Text style={styles.recover}>Recover Password ?</Text>
      </View>
      <Link to="/" style={styles.loginButton}>
        <Text style={styles.text}>Sign in</Text>
      </Link>
      <Text style={styles.registerdes}>
        If you don't an account you an
        <>
          <Text
            style={{
              color: "#4461F2",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            Register here!
          </Text>
        </>
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
  },
  loginButton: {
    borderRadius: 10,
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4461F2",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  input: {
    height: 60,
    margin: 12,
    backgroundColor: "#fff",
    width: "100%",
    borderWidth: 1,
    padding: 10,
    outline: "none",
    borderColor: "#fff",
    borderRadius: 10,
  },
  title: {
    color: "#000",
    fontSize: 32,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 77,
  },
  recover: {
    color: "#C7C7C7",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 77,
    letterSpacing: 1.4,
    textAlign: "right",
  },
  viewRecover: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  registerdes: {
    color: "#000",
    textAlign: "center",
    marginTop: 40,
    fontSize: 20,
    fontWeight: 500,
    lineHeight: "normal",
  },
});
export default Login;
