import { alpha } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const brand = {
  50: "#FFFCF0",
  100: "#FFF7DB",
  200: "#FFF0B8",
  300: "#FFE894",
  400: "#FFE175",
  500: "#FFD850",
  600: "#FFCB0F",
  700: "#C79C00",
  800: "#856800",
  900: "#423400",
};

export const secondary = {
  50: "#ECF8F3",
  100: "#DDF3EA",
  200: "#BCE6D5",
  300: "#9ADABF",
  400: "#79CEAA",
  500: "#56C195",
  600: "#3CA479",
  700: "#2D7B5B",
  800: "#1E523C",
  900: "#0F291E",
};

export const gray = {
  50: "#FBFCFE",
  100: "#EAF0F5",
  200: "#D6E2EB",
  300: "#BFCCD9",
  400: "#94A6B8",
  500: "#5B6B7C",
  600: "#4C5967",
  700: "#364049",
  800: "#131B20",
  900: "#090E10",
};

export const green = {
  50: "#F6FEF6",
  100: "#E3FBE3",
  200: "#C7F7C7",
  300: "#A1E8A1",
  400: "#51BC51",
  500: "#1F7A1F",
  600: "#136C13",
  700: "#0A470A",
  800: "#042F04",
  900: "#021D02",
};

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      light: brand[200],
      main: brand[500],
      dark: brand[800],
      contrastText: "#333333",
      ...(mode === "dark" && {
        contrastText: brand[100],
        light: brand[300],
        main: brand[400],
        dark: brand[800],
      }),
    },
    secondary: {
      light: secondary[300],
      main: secondary[500],
      dark: secondary[800],
      ...(mode === "dark" && {
        light: secondary[400],
        main: secondary[500],
        dark: secondary[900],
      }),
    },
    warning: {
      main: "#F7B538",
      dark: "#F79F00",
      ...(mode === "dark" && { main: "#F7B538", dark: "#F79F00" }),
    },
    error: {
      light: red[50],
      main: red[500],
      dark: red[700],
      ...(mode === "dark" && {
        light: "#D32F2F",
        main: "#D32F2F",
        dark: "#B22A2A",
      }),
    },
    success: {
      light: green[300],
      main: green[400],
      dark: green[800],
      ...(mode === "dark" && {
        light: green[400],
        main: green[500],
        dark: green[700],
      }),
    },
    grey: {
      50: gray[50],
      100: gray[100],
      200: gray[200],
      300: gray[300],
      400: gray[400],
      500: gray[500],
      600: gray[600],
      700: gray[700],
      800: gray[800],
      900: gray[900],
    },
    divider: mode === "dark" ? alpha(gray[600], 0.3) : alpha(gray[300], 0.5),
    background: {
      default: "#fff",
      ...(mode === "dark" && { default: gray[900], paper: gray[800] }),
    },
    text: {
      primary: "#1F1F1F",
      secondary: "#6A6A6A",
      ...(mode === "dark" && { primary: "#fff", secondary: gray[400] }),
    },
    action: {
      selected: `${alpha(brand[200], 0.2)}`,
      ...(mode === "dark" && {
        selected: alpha(brand[800], 0.2),
      }),
    },
  },
  typography: {
    fontFamily: ['"Roboto Mono", "Roboto", "sans-serif"'].join(","),
    h1: {
      fontSize: 60,
      fontWeight: 600,
      lineHeight: 78 / 70,
      letterSpacing: -0.2,
    },
    h2: {
      fontSize: "2.25rem",
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: -0.2,
    },
    h3: {
      fontSize: 42,
      lineHeight: 1.2,
    },
    h4: {
      fontSize: 32,
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: -0.2,
    },
    h5: {
      fontSize: 20,
      fontWeight: 600,
    },
    h6: {
      fontSize: 18,
      fontWeight: 600,
      lineHeight: 1.4,
    },
    subtitle1: {
      fontSize: 16,
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 400,
      color: "#red",
    },
    body1: {
      fontWeight: 400,
      fontSize: 15,
    },
    body2: {
      fontWeight: 400,
      fontSize: 14,
    },
    caption: {
      fontWeight: 400,
      fontSize: 12,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

});

export function getAppTheme(mode) {
  return {
    ...getDesignTokens(mode),
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableTouchRipple: true,
          disableRipple: true,
        },
        styleOverrides: {
          root: {
            boxSizing: "border-box",
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            boxShadow: "none",
            borderRadius: "0.625rem",
            textTransform: "uppercase",

            ...(ownerState.variant === "filled" && {
              backgroundColor: "#fff",
              border: "0.125rem solid #323232",

              "&:hover": {
                backgroundColor: alpha(brand[500], 0.8),
              },
            }),
          }),
        },
      },
      MuiButton: {
        styleOverrides: {
          root: ({ theme, ownerState }) => ({
            boxShadow: "none",
            borderRadius: "0.625rem",
            textTransform: "capitalize",
            ...(ownerState.size === "small" && {
              maxHeight: "32px",
            }),
            ...(ownerState.size === "medium" && {
              height: "40px",
            }),
            ...(ownerState.size === "large" && {
              height: "48px",
            }),
            ...(ownerState.variant === "contained" && {
              backgroundColor: brand[500],
              border: "0.125rem solid #323232",
              padding: "0.75rem 1rem",
              boxShadow: "0.25rem 0.25rem #323232",
              transition: "transform 50ms, box-shadow 50ms",
              "&:hover": {
                backgroundColor: brand[400],
                borderWidth: "0.125rem",
                transition: "translate(0.125rem, 0.125rem)",
                boxShadow: "0.125rem 0.12rem #323232",
              },
              "&:active": {
                transition: "translate(0.125rem, 0.125rem)",
                boxShadow: "0.125rem 0.12rem #323232",
              },
              "&:disabled": {
                backgroundColor: brand[200],
                borderColor: brand[200],
              },
            }),
            ...(ownerState.variant === "outlined" && {
              color: '#323232',
              backgroundColor: brand[50],
              border: "0.125rem solid #323232",
              padding: "0.75rem 1rem",
              boxShadow: "0.25rem 0.25rem #323232",
              transition: "transform .15s",
              "&:hover": {
                backgroundColor: brand[100],
                border: "0.125rem solid #323232",
                transition: "translate(0.125rem, 0.125rem)",
                boxShadow: "0.125rem 0.12rem #323232",
              },
              "&:active": {
                transition: "translate(0.125rem, 0.125rem)",
                boxShadow: "0.125rem 0.12rem #323232",
              },
            }),
            ...(ownerState.variant === "outlined" && ownerState.size === "medium" && {
              color: '#323232',
              backgroundColor: brand[50],
              border: "0.125rem solid #323232",
              padding: "0.75rem 1rem",
              boxShadow: "0.125rem 0.125rem #323232",
              transition: "transform .15s",
              "&:hover": {
                backgroundColor: brand[100],
                border: "0.125rem solid #323232",
                transition: "translate(0.125rem, 0.125rem)",
                boxShadow: "0.063rem 0.06rem #323232",
              },
              "&:active": {
                transition: "translate(0.125rem, 0.125rem)",
                boxShadow: "0.125rem 0.12rem #323232",
              },
            }),
            ...(ownerState.variant === "text" && {
              backgroundColor: '#fff',
              border: "none",
              color: "#323232",
              transition: "transform 50ms",
              "&:hover": {
                backgroundColor: '#f3fbfb',
                transition: "translate(0.125rem, 0.125rem)",

              },
            }),
            ...(theme.palette.mode === "dark" && {
              ...(ownerState.variant === "contained" &&
                ownerState.color === "primary" && {
                border: `1px solid ${brand[600]}`,
                backgroundImage: "none",
                backgroundColor: brand[500],
                "&:hover": {
                  background: brand[600],
                  backgroundImage: "none",
                  boxShadow: `0 0 0 1px  ${alpha(brand[700], 0.5)}`,
                },
              }),
              ...(ownerState.variant === "outlined" && {
                backgroundColor: "white",
                border: "0.125rem solid #323232",
                padding: "0.75rem 1rem",
                boxShadow: "0.25rem 0.25rem #323232",
                transition: "transform 50ms, box-shadow 50ms",
                "&:hover": {
                  backgroundColor: alpha(brand[600], 0.3),
                  borderColor: brand[700],
                },
                "&:active": {
                  transition: "translate(0.125rem, 0.125rem)",
                  boxShadow: "0.125rem 0.12rem #323232",
                },
              }),
              ...(ownerState.variant === "text" && {
                color: brand[300],
                "&:hover": {
                  backgroundColor: alpha(brand[600], 0.3),
                  borderColor: brand[700],
                },
              }),
            }),
          }),
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundImage: "none",
            backgroundColor: "#FFF",
            borderRadius: "0.625rem",
            border: "0.125rem solid #323232",
            transition: "transform 25ms, box-shadow 25ms",
            "&:hover": {
              backgroundColor: "#fff",
              transition: "translate(0.25rem, 0.25rem)",
            },

            ...(theme.palette.mode === "dark" && {
              backgroundColor: "gray[800]",
            }),
          }),
        },
      },
    },
  };
}
