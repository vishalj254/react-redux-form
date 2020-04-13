import React,{useState} from 'react';
import AddCompany from '../Company/AddCompany';
import CreatePerson from '../Employee/CreatePerson';
import DisplayCompany from '../Company/DisplayCompany'
import { Grid,Link,Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Header from '../Header/Header'

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="">
          Gautam Ojha
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default function HomePage(){
    const [refresh, setrefresh] = useState(true)
    const [view, setview] = useState('')

    const changeValue=()=>{
        setrefresh(!refresh)
    }

    const changeView=(v)=>{
        setview(v)
    }

    return(
        <div>
            <Header changeView={changeView} />
            {view==''?<Container maxWidth="lg">
            <div>
             <Grid container>
                 <Grid item xs={12} sm={8} >
                    <DisplayCompany changeView={changeView} refresh={refresh} />
                 </Grid>
                 <Grid item xs={12} sm={4} >
                    <AddCompany changeValue={changeValue} />
                    <CreatePerson refresh={refresh} />
                 </Grid>
            </Grid>
            </div>
        </Container>:view}
        <div style={{margin:20}} >
            <Copyright />
        </div>
        
        </div>
          
    )
}