import { TextInput, StyleSheet } from "react-native";

export default function InputNumero({
  placeholder,
  value,
  onChangeText,
  borderColor = "#ccc",
  backgroundColor = "#fff",
}) {
  return (
    <TextInput
      style={[styles.input, { borderColor, backgroundColor }]}
      value={value}
      onChangeText={onChangeText}
      keyboardType="numeric"
      placeholder={placeholder}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: "20%",
    borderWidth: 0.5,
    padding: 8,
    marginBottom: 10,
    borderRadius: 6,
  },
});
