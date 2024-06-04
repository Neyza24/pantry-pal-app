import { alpha } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const brand = {
  50: "#FFFCF050",
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

export const bgPaper = {
  500: "#30392D",
}

export const bg = {
  400: "#566751",
  500: "#222921",
  600: "#262E24",
  700: "#1D221B",
  800: "#131712",
}

export const gray = {
  50: "#EBEBEB",
  100: "#D6D6D6",
  200: "#ADADAD",
  300: "#858585",
  400: "#5C5C5C",
  500: "#323232",
  600: "#292929",
  700: "#1F1F1F",
  800: "#141414",
  900: "#0A0A0A",
  950: "#050505"
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
      ...(mode === "dark" && { default: bg[500], }),
    },
    text: {
      primary: gray[700],
      secondary: gray[600],
      ...(mode === "dark" && { primary: "#fff", secondary: gray[200] }),
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
          root: ({ theme, ownerState }) => ({
            boxShadow: "none",
            borderRadius: "0.625rem",
            textTransform: "uppercase",
            ...(ownerState.variant === "filled" && {
              backgroundColor: "#fff",
              border: `0.125rem solid  ${gray[500]}`,
              "&:hover": {
                backgroundColor: alpha(brand[500], 0.8),
                boxShadow: `0.125rem 0.125rem  ${gray[900]}`,
              },
            }),
            ...(theme.palette.mode === "dark" && {
              ...(ownerState.variant === "filled" &&
              {
                color: gray[100],
                borderColor: gray[400],
                backgroundColor: '#30392d',
                "&:hover": {
                  color: gray[500],
                  backgroundColor: brand[600],
                  boxShadow: `0.125rem 0.125rem  ${gray[400]}`,
                },
              }),

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
            transition: "transform 50ms, box-shadow 50ms",
            "&:hover": {
              transition: "translate(0.125rem, 0.125rem)",
            },
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
              border: `0.125rem solid  ${gray[500]}`,
              padding: "0.75rem 1rem",
              boxShadow: `0.25rem 0.25rem  ${gray[500]}`,
              "&:hover": {
                backgroundColor: brand[400],
                boxShadow: `0.125rem 0.125rem  ${gray[500]}`,
              },
              "&:active": {
                boxShadow: `0.125rem 0.125rem  ${gray[500]}`,
              },
              "&:disabled": {
                backgroundColor: brand[200],
                borderColor: brand[200],
              },
            }),
            ...(ownerState.variant === "outlined" && {
              color: gray[500],
              backgroundColor: brand[50],
              border: `0.125rem solid  ${gray[500]}`,
              padding: "0.75rem 1rem",
              boxShadow: `0.25rem 0.25rem  ${gray[500]}`,
              "&:hover": {
                border: `0.125rem solid  ${gray[500]}`,
                backgroundColor: brand[100],
                boxShadow: `0.125rem 0.125rem  ${gray[500]}`,
              },
            }),
            ...(ownerState.variant === "outlined" && ownerState.size === "medium" && {
              boxShadow: `0.125rem 0.125rem  ${gray[500]}`,
              "&:hover": {
                border: `0.125rem solid  ${gray[500]}`,
                boxShadow: `0.063rem 0.063rem  ${gray[500]}`,
              },
            }),
            ...(ownerState.variant === "text" && {
              border: "none",
              color: gray[500],
              fontSize: '14px',
              "&:hover": {
                backgroundColor: brand[100],
              },
            }),
            ...(theme.palette.mode === "dark" && {
              ...(ownerState.variant === "contained" &&
              {
                color: gray[700],
                borderColor: brand[50],
                backgroundColor: brand[500],
                boxShadow: `0.25rem 0.25rem  ${gray[400]}`,
                "&:hover": {
                  backgroundColor: brand[600],
                  boxShadow: `0.125rem 0.125rem  ${gray[400]}`,
                },

              }),
              ...(ownerState.variant === "outlined" && ownerState.size === "large" && {
                backgroundColor: "#fff",
                boxShadow: `0.25rem 0.25rem  ${gray[400]}`,
                "&:hover": {
                  backgroundColor: gray[100],
                  borderColor: gray[700],
                  boxShadow: `0.125rem 0.125rem  ${gray[400]}`,
                },
              }),
              ...(ownerState.variant === "outlined" && ownerState.size === "medium" && {
                backgroundColor: "#fff",
                boxShadow: `0.125rem 0.125rem  ${gray[400]}`,
                "&:hover": {
                  backgroundColor: gray[100],
                  borderColor: gray[700],
                  boxShadow: `0.063rem 0.063rem  ${gray[400]}`,
                },
              }),
              ...(ownerState.variant === "text" && {
                color: brand[100],
                "&:hover": {
                  borderColor: brand[700],
                },
              }),
            }),
          }),
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: ({ theme, ownerState }) => ({
            backgroundImage: "none",
            backgroundColor: "#FFF",
            borderRadius: "0.625rem",
            border: `0.125rem solid  ${gray[500]}`,
            ...(ownerState.variant !== "outlined" && {
              transition: "transform 25ms, box-shadow 25ms",
              "&:hover": {
                backgroundColor: secondary[50],
                transition: "translate(0.25rem, 0.25rem)",
              },
            }),

            ...(theme.palette.mode === "dark" && {
              ...(ownerState.variant === "outlined" && {
                backgroundColor: bgPaper[500],
                borderColor: alpha(gray[400], 0.5),
              }),
              ...(ownerState.variant !== "outlined" && {
                backgroundColor: bgPaper[500],

                borderColor: alpha(gray[400], 0.5),
                "&:hover": {
                  backgroundColor: alpha(secondary[50], 0.2),
                },
              }),
            }),
          }),
        },
      },
      MuiAlert: {
        styleOverrides: {
          root: ({ theme, ownerState }) => ({
            ...(ownerState.variant === "outlined" && ownerState.severity === "error" && {
              color: gray[500],
              borderColor: gray[500],
              borderWidth: '0.063rem',
              fontSize: '12px',
              backgroundColor: brand[100],
              boxShadow: 'none',
              "&:hover": {
                backgroundColor: "transparent",
              },
            }),

            ...(theme.palette.mode === "dark" && {
              ...(ownerState.variant === "outlined" && {
                color: gray[100],
                borderColor: gray[400],
                backgroundColor: "transparent",

              }),
          
              }),
          }),
        },
      },
    },
  };
}
