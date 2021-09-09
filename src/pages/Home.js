import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    standardBasic: {
      backgroundColor: '#fff',
        borderRadius: '10px',
        marginBottom: '15px',
        display: 'flex',
        width: '317px',
        height: '36px',
        padding: '0 10px',
        border: 0

    },
    auth__box: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70,
        width: '392px',
        height: '463px',
        backgroundColor: '#482945',
        borderRadius: '10px',
        position: 'relative'

    },

    auth__input: {
      position: 'absolute',
        top: 130
    },

    auth__title: {
        color: '#fff',
        position: 'absolute',
        top: 2,
        left: '34px'
    },
    enterBtn: {
        color: '#CC00FF',
        backgroundColor: '#2D083A',
        marginTop: 41,
        padding: '10px 30px',
        borderRadius: '10px',
        position: 'absolute',
        bottom: '20px'
    },
    container: {
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        maxWidth: '1100px',
        width: '100%'

    }

}))

export const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.auth__box}>
                <div className={classes.auth__title}>
                    <h1>Вход</h1>
                </div>
                <div className={classes.auth__input}>
                    <form className={classes.root}>
                        <TextField className={classes.standardBasic} placeholder="Ваш логин" />
                        <TextField className={classes.standardBasic} placeholder="Ваш пароль" />
                    </form>
                </div>
                <Button variant="primary" className={classes.enterBtn}>Войти</Button>
            </div>
        </div>
    )
}