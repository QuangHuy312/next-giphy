import { responsiveFontSizes, createTheme } from "@mui/material/styles";

export let theme = createTheme({
    components: {
        MuiUseMediaQuery: {
            defaultProps: {
                noSsr: true,
            },
        },
    },
    typography: {
        fontFamily: 'Inter, sans-serif',
        color: "#fff"
    },
    palette: {
        mode: "dark",
    }
})
console.log(theme)

theme = responsiveFontSizes(theme)
