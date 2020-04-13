import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    maxWidth: 160,
    margin:7
  },
}));

export default function SearchAppBar(props) {
  const classes = useStyles();

  const handleClick=()=>{
      props.changeView('')
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
            <Toolbar>
                <img onClick={handleClick} src="/logo.png" alt="logo" className={classes.logo} />
            </Toolbar>
      </AppBar>
    </div>
  );
}
