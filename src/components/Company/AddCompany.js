import React,{useState} from "react";
import { useForm, Controller } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Container, Typography, Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper' ;
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx'
import Dialog from '../Dialog/Dialog'
import { useDispatch } from "react-redux";

const useStyles = makeStyles(theme => ({
    paper:{padding:'30px',marginTop:'30px',backgroundColor:'#C0C0C0'},
  
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
      },
      dense: {
        marginTop: theme.spacing(2),
      },
  
}))

export default function AddCompany(props) {
    const  classes = useStyles();
    const dispatch =useDispatch();
    const [dialogopen, setdialogopen] = useState(false)
  const { control, handleSubmit,reset } = useForm();
  const onSubmit = data => {
    const key=new Date().toISOString()
    data['key']=key

    dispatch({type:'ADD_POST',payload:[key,data]})
    props.changeValue()
    setdialogopen(true)
    reset({'Name':'',"Address":'','Revenue':'',"Phone":''})
    
  }
  



  return (<Container maxWidth="xs">
    {dialogopen?<Dialog heading={"Company Added Successfully"} />:<React.Fragment></React.Fragment>}
       <Paper className={classes.paper}>
           <Grid container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center" >
               <Typography  variant="h5">Create New Company</Typography>
    <form onSubmit={handleSubmit(onSubmit)}>
        {/* <Grid item xs={'12'}>   <Controller as={ <TextField id="outlined-basic" label="Name" placeholder="Name" variant="outlined" />} name="Name" control={control} defaultValue="" /></Grid> */}
        <Grid item xs={12}><Controller as={<TextField  className={clsx(classes.textField, classes.dense)} label="Name" placeholder="Name" variant="outlined" required />} name="Name" control={control} defaultValue="" /></Grid>
        <Grid item xs={12}>   <Controller as={<TextField  className={clsx(classes.textField, classes.dense)}  label="Address" placeholder="Address" variant="outlined" required  />} name="Address" control={control} defaultValue="" /></Grid>
        <Grid item xs={12}> <Controller as={ <TextField  className={clsx(classes.textField, classes.dense)}  label="Revenue" placeholder="Revenue" variant="outlined" required  />} name="Revenue" control={control} defaultValue="" /></Grid>
        <Grid item xs={12}><Controller as={<TextField   className={clsx(classes.textField, classes.dense)} label="Phone" placeholder="Phone" variant="outlined" required  />} name="Phone" control={control} defaultValue="" /></Grid>
      
     <Grid item xs={6} className={clsx(classes.textField, classes.dense)}><Button variant="contained" type="submit" >Save</Button></Grid>
      
     
      
     
    </form>
    </Grid>
    </Paper>
    </Container>
  );
}
