import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(1),
        color: '#fff'
    },
    title: {
        flexGrow: 1
    },
    appBar: {
        backgroundColor: "#680A77",
        boxShadow: 'none'
    }
}))


export const Header = () =>{

    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Container fixed>
                <Toolbar>
                    <Typography variant="h6" className={classes.title} >
                        Mr.Pink
                    </Typography>

                    <Button href={'/'} className="menuButton">Войти</Button>
                    <Button href={'/reg'} className="menuButton">Регистрация</Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}