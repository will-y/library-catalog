import { StyleSheet } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {BottomNavigation} from "./src/app/navigation/BottomNav";
import {Provider} from "@react-native-material/core";

export default function App() {
  return (
      <Provider>
          <NavigationContainer>
              <BottomNavigation />
          </NavigationContainer>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
