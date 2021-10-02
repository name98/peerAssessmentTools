import { createTheme } from '@mui/material'
import { palette } from './colors'
const theme = createTheme({
    palette: {
        primary: {
            main: palette.fill.primary,
        },
        secondary: {
            main: palette.fill.secondary,
        },
        warning: {
            main: palette.fill.warning,
        },
        info: {
            main: palette.fill.info,
        },
        error: {
            main: palette.fill.danger,
        },
        common: {
            black: palette.fill.black,
            white: palette.fill.white
        },
        divider: palette.divider
    },

    typography: {
        fontFamily: ['"Inter"', 'sans-serif'].join(','),
        h1: {
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '48px',
            lineHeight: '66px',
            color: '#0F1B41',
            padding: 0,
            margin: 0
        },
        h2: {
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '36px',
            lineHeight: '48px',
            color: '#0F1B41',
            padding: 0,
            margin: 0
        },
        h3: {
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '28px',
            lineHeight: '36px',
            color: '#0F1B41',
            padding: 0,
            margin: 0
        },
        h4: {
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '24px',
            lineHeight: '34px',
            color: '#0F1B41',
            padding: 0,
            margin: 0
        },
        h5: {
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '34px',
            color: '#0F1B41',
            padding: 0,
            margin: 0
        },
        h6: {
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '24px',
            color: '#0F1B41',
            padding: 0,
            margin: 0
        },
        body1: {
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '26px',
            color: '#5A7180',
            padding: 0,
            margin: 0
        },
        body2: {
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '24px',
            color: '#5A7180',
            padding: 0,
            margin: 0
        },
        button: {
            textTransform: 'none',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '26px',
            color: '#5A7180',
            padding: 0,
            margin: 0,
            ":hover": {
                textDecoration: 'underline',
                cursor: 'pointer',
                color: palette.hover.black
            }
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true
            },
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                    textTransform: 'none',
                    lineHeight: '26px',
                    fontFamily: ['"Inter"', 'sans-serif'].join(','),
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '14px',
                    padding: '14px 40px',
                },
                contained: {
                    backgroundColor: palette.active.primary,
                    ":hover": {
                        backgroundColor: palette.hover.primary,
                        boxShadow: 'none',
                        color: palette.hover.white
                    }
                },
                outlined: {
                    backgroundColor: 'transparent',
                    border: `1px solid ${palette.outline.greyLight}`,
                    borderRadius: '4px',
                    color: palette.outline.grey,
                    ":hover": {
                        border: `1px solid ${palette.outline.greyLight}`,
                        borderRadius: '4px',
                        backgroundColor: 'transparent',
                        color: palette.active.black
                    }
                },
                startIcon: {
                    margin: '0px 14px 0px 0px'
                }
            },
        },
        MuiCheckbox: {
            defaultProps: {
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    padding: '0px',
                    color: palette.outline.greyLight,
                    borderRadius: '4px',
                    "&.Mui-checked": {
                        "color": `${palette.fill.info}`
                    }
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    width: '100%'
                },
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                
                
                input: {
                    padding: '18px 16px 16px 16px',
                    
                },
                root: {
                    fontFamily: "'Inter', sans-serif",
                    color: palette.fill.black,
                    lineHeight: '26px',
                    fontStyle: 'normal',
                    fontSize: '14px',
                    backgroundColor: palette.fill.white,
                    boxSizing: 'border-box',
                    focus: {
                        backgroundColor: 'black'
                    }
                },
                notchedOutline: {
                    borderRadius: '5px',
                    border: `1px solid ${palette.divider}`,
                },
                multiline: {
                    padding: '0px'
                }
                
                

            }
        }
    }

})


export default theme