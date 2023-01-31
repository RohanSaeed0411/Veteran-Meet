
import colors from "./colors";

// font asset files parts
// these are loaded on app start in App.tsx
export const fontAssets = {
  "Montserrat-Black": require("../assets/fonts/montserrat/Montserrat-Black.ttf"),
  "Montserrat-Bold": require("../assets/fonts/montserrat/Montserrat-Bold.ttf"),
  "Montserrat-Light": require("../assets/fonts/montserrat/Montserrat-Light.ttf"),
  "Montserrat-Medium": require("../assets/fonts/montserrat/Montserrat-Medium.ttf"),
  "Montserrat-Regular": require("../assets/fonts/montserrat/Montserrat-Regular.ttf"),
  "Montserrat-SemiBold": require("../assets/fonts/montserrat/Montserrat-SemiBold.ttf"),
  "Montserrat-Thin": require("../assets/fonts/montserrat/Montserrat-Thin.ttf"),
  "OpenSans-Bold": require("../assets/fonts/opensans/OpenSans-Bold.ttf"),
  "OpenSans-ExtraBold": require("../assets/fonts/opensans/OpenSans-ExtraBold.ttf"),
  "OpenSans-Italic": require("../assets/fonts/opensans/OpenSans-Italic.ttf"),
  "OpenSans-Light": require("../assets/fonts/opensans/OpenSans-Light.ttf"),
  "OpenSans-Regular": require("../assets/fonts/opensans/OpenSans-Regular.ttf"),
  "OpenSans-SemiBold": require("../assets/fonts/opensans/OpenSans-SemiBold.ttf"),
};

const fontFamily = {
  montserrat: {
    black: "Montserrat-Black",
    bold: "Montserrat-Bold",
    light: "Montserrat-Light",
    medium: "Montserrat-Medium",
    regular: "Montserrat-Regular",
    semibold: "Montserrat-SemiBold",
    thin: "Montserrat-Thin",
  },
  opensans: {
    bold: "OpenSans-Bold",
    extrabold: "OpenSans-ExtraBold",
    italic: "OpenSans-Italic",
    light: "OpenSans-Light",
    regular: "OpenSans-Regular",
    semibold: "OpenSans-SemiBold",
  },
};

const MAP_STYLES = {
  light: [
    {
      featureType: "all",
      elementType: "geometry.fill",
      stylers: [
        {
          weight: "2.00",
        },
      ],
    },
    {
      featureType: "all",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#9c9c9c",
        },
      ],
    },
    {
      featureType: "all",
      elementType: "labels.text",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "all",
      stylers: [
        {
          color: "#f2f2f2",
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
    {
      featureType: "landscape.man_made",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "all",
      stylers: [
        {
          saturation: -100,
        },
        {
          lightness: 45,
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#eeeeee",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#7b7b7b",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "all",
      stylers: [
        {
          visibility: "simplified",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "all",
      stylers: [
        {
          color: "#46bcec",
        },
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#c8d7d4",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#070707",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
  ],
};

export default {
  colors,
  MAP_STYLES,
  primary: {
    color: colors.primary,
  },
  typography: {
    h1: {
      fontSize: 36,
      lineHeight: 48,
      fontFamily: fontFamily.montserrat.black,
    },
    h2: {
      fontSize: 24,
      lineHeight: 32,
      fontFamily: fontFamily.montserrat.bold,
    },
    h3: {
      fontSize: 18,
      lineHeight: 24,
      fontFamily: fontFamily.montserrat.bold,
    },
    h4: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: fontFamily.montserrat.semibold,
    },
    body: {
      sm: {
        regular: {
          fontSize: 12,
          lineHeight: 18,
          fontFamily: fontFamily.opensans.regular,
        },
        bold: {
          fontSize: 12,
          lineHeight: 18,
          fontFamily: fontFamily.opensans.bold,
        },
      },
      md: {
        semiBold: {
          fontSize: 14,
          lineHeight: 20,
          fontFamily: fontFamily.opensans.semibold,
        },
        regular: {
          fontSize: 14,
          lineHeight: 20,
          fontFamily: fontFamily.opensans.regular,
        },
      },
      large: {
        regular: {
          fontSize: 16,
          lineHeight: 28,
          fontFamily: fontFamily.opensans.regular,
        },
        bold: {
          fontSize: 16,
          lineHeight: 28,
          fontFamily: fontFamily.opensans.bold,
        },
      },
    },
    labels: {
      xs: {
        semiboldCaps: {
          fontSize: 11,
          lineHeight: 16,
          fontFamily: fontFamily.opensans.semibold,
        },
      },
      large: {
        regular: {
          fontSize: 16,
          lineHeight: 24,
          fontFamily: fontFamily.opensans.regular,
        },
        bold: {
          fontSize: 16,
          lineHeight: 24,
          fontFamily: fontFamily.opensans.bold,
        },
      },
    },
  },
  helpers: {
    screenPaddingHorizontal: 16,
    screenPaddingVertical: 16,
  },
};
