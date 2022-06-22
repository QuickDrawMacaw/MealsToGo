import React, { useState, useEffect } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import * as firebase from "firebase";

import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";

import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

import { Navigation } from "./src/infrastructure/navigation/index";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

const firebaseConfig = {
  apiKey: "AIzaSyAjNiC31rBw1PsiEDAbAfRoTHlsNyh5SSM",
  authDomain: "mealstogo-be169.firebaseapp.com",
  projectId: "mealstogo-be169",
  storageBucket: "mealstogo-be169.appspot.com",
  messagingSenderId: "441794937180",
  appId: "1:441794937180:web:d686d59c1e4d6005a7c199",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
            <ExpoStatusBar style="auto" />
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
    </>
  );
}
