import React,{useState} from "react";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm, Controller } from "react-hook-form";
import { Container, Typography, Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper' ;
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import {useSelector, useDispatch} from 'react-redux'
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '../Dialog/Dialog'

const useStyles = makeStyles(theme => ({
    paper:{padding:'30px',marginTop:'30px',backgroundColor:'#C0C0C0',marginBottom:30},
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
    const { control, handleSubmit,reset } = useForm();
    const [dialogopen, setdialogopen] = useState(false)
    const dispatch =useDispatch();
    const [emp, setemp] = useState('')

    const value = useSelector((state) => state.post);
    const CompanyData=Object.values(value);

    React.useEffect(() => {
      
    }, [props.refresh])

    const menuList=()=>{
        return CompanyData.map((item,index)=>{
         
         return( <MenuItem value={item.key}>{item.Name}</MenuItem>)
         
        })
         
         }

         const onSubmit = data => {
           if(emp!==''){
             const key=new Date().toISOString()
          data['key']=key
          data['emp']=emp
          dispatch({type:'ADD_PERSON',payload:[key,data]})
          setdialogopen(true)
          setemp('')
          reset({'name':'',"address":''}) 
           }
           else{
             alert("Please Select Employer")
           }
          

        }



  return (<Container maxWidth="xs">
    {dialogopen?<Dialog heading={"Employee Added Successfully"} />:<React.Fragment></React.Fragment>}
       <Paper className={classes.paper}>
       
       <Grid container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center" >
               <Typography variant="h5" >Create New Person</Typography>
               <form  onSubmit={handleSubmit(onSubmit)}>
               <Grid item xs={12}>   <Controller as={<TextField  className={clsx(classes.textField, classes.dense)}  label="Name" placeholder="Name" variant="outlined" required  />} name="name" control={control} defaultValue="" /></Grid>   
 <Grid item xs={12}>   <Controller as={<TextField  className={clsx(classes.textField, classes.dense)}  label="Address" placeholder="Address" variant="outlined" required  />} name="address" control={control} defaultValue="" /></Grid>  
 <Grid item xs={12} sm={11}>
 <Controller as={<FormControl fullWidth variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Select Employer</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          fullWidth
          value={emp}
          name="emp"
          onChange={(e)=>setemp(e.target.value)}
          required
          label="Select Employer"
        >
          {CompanyData.length===0?<MenuItem value={''}>{"Select"}</MenuItem>:<React.Fragment></React.Fragment>}
          {menuList()}
        </Select>
      </FormControl>} name="emp" control={control} defaultValue="" />
        </Grid>
 <Grid item   xs={12}style={{paddingLeft:10,width:'50%'}} > <Button  variant="contained" type="submit">
        Save
      </Button>
      
      </Grid>
      </form>
 
    </Grid>
    
    </Paper>
    </Container>
  );
}
