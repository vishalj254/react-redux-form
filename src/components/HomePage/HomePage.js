import React,{useState} from 'react';
import AddCompany from '../AddCompany';
import CreatePerson from '../CreatePerson';
import DisplayCompany from '../DisplayCompany'
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
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
        </div>
          
    )
}