import { useState, useEffect } from "react";
import * as Location from "expo-location";

const useLocation = () => {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      try {
        const [result] = await Location.reverseGeocodeAsync(location.coords);
        setAddress(result);
      } catch (e) {
        setErrorMsg("Erro ao obter endereço");
      }
    })();
  }, []);

  return { location, address, errorMsg };
};

export default useLocation;
