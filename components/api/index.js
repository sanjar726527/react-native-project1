import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export const ApiCall = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    async function getApiData() {
      const apiResponse = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const finalData = await apiResponse.json();
      
    }
    getApiData();
  }, []);
  return (
    <View>
      <Text>ApiCall</Text>
    </View>
  );
};
