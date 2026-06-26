import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function RegisterForm() {

    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [inputConfirmPassword, setInputConfirmPassword] = useState('');
    const [done, setDone] = useState(false)

    const handleEmailChange = (input: string) => {
        setInputEmail(input)
    }

    const handlePasswordChange = (input: string) => {
        setInputPassword(input)
    }

    const handleConfirmPasswordChange = (input: string) => {
        setInputConfirmPassword(input)
    }

    const isFormValid = () => {
        // Empty fields
        if (
            inputEmail.trim() === '' ||
            inputPassword.trim() === '' ||
            inputConfirmPassword.trim() === ''
        ) {
            return false;
        }

        // Email 
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(inputEmail)) {
            return false;
        }

        // Password
        if (inputPassword.length < 6) {
            return false;
        }
        if (inputConfirmPassword.length < 6) {
            return false;
        }

        return true;
    };

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.title}>Create account</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#888"
                    onChangeText={handleEmailChange}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#888"
                    onChangeText={handlePasswordChange}
                    secureTextEntry
                />

                <TextInput
                    style={styles.input}
                    placeholder="Confirm password"
                    placeholderTextColor="#888"
                    onChangeText={handleConfirmPasswordChange}
                    onBlur={() => setDone(true)}
                    secureTextEntry
                />

                {done && inputPassword.length < 6 && (
                    <Text style={styles.alert}>
                        Password must contain at least 6 characters.
                    </Text>
                )}

                {done &&
                    inputPassword.length >= 6 &&
                    inputPassword !== inputConfirmPassword && (
                        <Text style={styles.alert}>
                            Passwords don't match.
                        </Text>
                    )}

                <Pressable
                    style={[
                        styles.button,
                        !isFormValid() && styles.buttonDisabled,
                    ]}
                    disabled={!isFormValid()}
                >
                    <Text style={styles.buttonText}>Create account</Text>
                </Pressable>


            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 24,
    },

    form: {
        width: "100%",
        maxWidth: 420,
    },

    title: {
        fontSize: 34,
        fontWeight: "700",
        textAlign: "center",
        marginBottom: 40,
        color: "#111",
    },

    input: {
        width: "100%",
        height: 62,
        backgroundColor: "#F4F4F4",
        borderRadius: 18,
        paddingHorizontal: 22,
        fontSize: 18,
        marginBottom: 18,
        borderWidth: 1,
        borderColor: "#ECECEC",
    },

    button: {
        height: 62,
        borderRadius: 18,
        backgroundColor: "#F4C430",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },

    buttonDisabled: {
        backgroundColor: "#D9D9D9",
    },

    buttonText: {
        fontSize: 18,
        fontWeight: "700",
        color: "#000",
    },

    alert: {
        color: "#E53935",
        fontSize: 14,
        marginBottom: 8,
        marginLeft: 8,
    },
});