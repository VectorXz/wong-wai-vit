import React from 'react'
import Head from 'next/head'

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { THEME } from './theme'
import styled from 'styled-components'
import { getCurrentDate } from './utils'
import Logo from "./Logo"

// Scroll App bar
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// Main theme
const theme = createMuiTheme({
    palette: {
        primary: {
            main: THEME.primary,
            contrastText: THEME.secondary,
        },
        secondary: {
            main: THEME.secondary,
        },

    },
    typography: {
        fontFamily: "Kanit, sans-serif",
        fontWeight: 400,
    },
    overrides: {
        MuiButton: {
            root: {
                fontSize: '1rem',
                height: 45,
                width: 163,
                borderRadius: 32,
                fontWeight: 200,
            },
        },
    },

})

const MainContainer = styled(Container)`
    margin-top: 55px;
`

export default function PageLayout(props) {
    return (
        <MuiThemeProvider theme={theme}>
            <Head>
                <title>Wongwaivit QC department</title>
                <link rel="icon" href="/logo_1.svg" />
            </Head>
            <AppBar style={{ height: 87, boxShadow: "none" }} position="static">
                <Toolbar style={{ height: "100%" }}>
                    <Container style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography  style={{ fontSize: 36,height: "100%", display: "flex", alignItems: "center" }}>
                            <Logo />
                            &nbsp; Wongwaivit QC department
                        </Typography>
                        <Typography  style={{ fontSize: 18}}>
                            วันที่ {getCurrentDate()}
                        </Typography>
                    </Container>
                </Toolbar>
            </AppBar>
            <MainContainer>
                {props.children}
            </MainContainer>
        </MuiThemeProvider>


    )
}
