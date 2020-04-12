import React from "react";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Container, Typography, Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper' ;
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import {useSelector, useDispatch} from 'react-redux'
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
    paper:{padding:'30px',marginTop:'5px'},
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
   
      dense: {
        marginTop: theme.spacing(2),
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth:'100%',
      },
  
}))

export default function CreatePerson(props) {
    const  classes = useStyles();
    const inputLabel = React.useRef(null)
    const [name,setName]=React.useState('');
    const [address,setAddress]=React.useState('');
    const [emp,setEmp]=React.useState('');

    const [labelWidth, setLabelWidth] = React.useState(0);
    const dispatch =useDispatch();

    const value = useSelector((state) => state.post);
    console.log("REDUX Data",value)
    const CompanyData=Object.values(value);
    console.log("REDUX",CompanyData);

    React.useEffect(() => {
      
    }, [props.refresh])

    const menuList=()=>{
        return CompanyData.map((item,index)=>{
         
         return( <MenuItem value={item.key}>{item.Name}</MenuItem>)
         
        })
         
         }

         const addRecord=()=>{
             let body={
                 'name':name,'address':address,'emp':emp
             }
             console.log('Body',body);
             dispatch({type:'ADD_PERSON',payload:[body.name,body]})
             setName('');
             setAddress('');
             setEmp('');
         }
         const onChangeEmp =(event)=>{

            setEmp(event.target.value);
         }


  return (<Container maxWidth="xs">
       <Paper className={classes.paper}>
       <Grid container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center" >
               <Typography style={{paddingLeft:20}}>Create New Person</Typography>
 <Grid item xs={12}>
   
 <TextField
        id="outlined-dense"
        label="Name"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        required
        variant="outlined"
        value={name}
        onChange={(event)=>setName(event.target.value)}
        fullWidth
      />
 </Grid>   
 <Grid item xs={12}>
 <TextField
        id="outlined-dense"
        label="Address"
        required
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
        value={address}
         onChange={(event)=>setAddress(event.target.value)}
        fullWidth
      />
 </Grid>   
 <Grid item xs={12}>
         <FormControl fullWidth variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Select Employer</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          fullWidth
          required
          value={emp}
          onChange={onChangeEmp}
          label="Select Employer"
        >
          {CompanyData.length===0?<MenuItem value={''}>{"Select"}</MenuItem>:<React.Fragment></React.Fragment>}
          {menuList()}
        </Select>
      </FormControl>
        </Grid>
 <Grid item   xs={12}style={{paddingLeft:10,width:'50%'}} > <Button  variant="contained" color="primary" type="submit" onClick={()=>{
   if(name!==''){
     if(address!==''){
       if(emp!=='')
       addRecord()
     }
   }
 }} >
        Save
      </Button>
      </Grid>
 
    </Grid>
    </Paper>
    </Container>
  );
}
