import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function FavButton(props) {
  return (
    <Pressable style={styles.button} onPress={props.onPress}>
      <Ionicons name={props.icon} size={30} color={props.color} />
    </Pressable>
  );
}


export default FavButton;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
        padding: 10, // Increase touch area
      },
  });
  