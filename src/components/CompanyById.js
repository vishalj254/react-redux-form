import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import {Button,Paper,Grid} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin:10
  },
  root1: {
    minWidth: 200,
    margin:10
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  paper:{padding:'30px',marginTop:'10px'},
});

export default function SimpleCard(props) {
  const classes = useStyles();

  React.useEffect(() => {
      console.log(props.key1)
  }, [])

  const data=useSelector(state=>state.post)
  const companydata=Object.values(data)
  const finaldata=companydata.filter((item,index)=>{
      if(props.key1==item.key){
          return item
      }
  })

  const empdata=useSelector(state=>state.person)
  const employeedata=Object.values(empdata)
  const finaldataemployee=employeedata.filter((item,index)=>{
      if(props.key1==item.emp){
          return item
      }
  })

  console.log("REDUX LIST",companydata)

  const handleClick=()=>{
      props.changeView('')
  }

  return (
      <div style={{margin:40}} >
          <Button variant={'contained'} color='primary' onClick={handleClick} >
              Back
          </Button>
          <Paper className={classes.paper}>
          <Typography variant="h4" component="h2">
            Profile Overview
          </Typography>
          <hr/>
          {finaldata.map((item,index)=>{
              return(<Card className={classes.root}>
                <CardContent>
                  <Grid container>
                  <Grid item xs={12} sm={6}>
                  <Typography color="textSecondary">
                    Address
                  </Typography>
                  <Typography variant="body2" component="p">
                    {item.Address}
                  </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <Typography color="textSecondary">
                    Total Employees
                  </Typography>
                  <Typography variant="body2" component="p">
                    {finaldataemployee.length}
                  </Typography>
                  </Grid>
                  </Grid>
                  <Typography color="textSecondary">
                    Revenue
                  </Typography>
                  <Typography variant="body2" component="p">
                    {item.Revenue}
                  </Typography>
                  <Typography color="textSecondary">
                    Phone
                  </Typography>
                  <Typography variant="body2" component="p">
                    {item.Phone}
                  </Typography>
                </CardContent>
              </Card>)
          })}
    </Paper>

    <Paper className={classes.paper}>
          <Typography variant="h4" component="h2">
           Employees
          </Typography>
          <hr/>
          {finaldataemployee.map((item,index)=>{
              return(<Card className={classes.root1}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {item.name}
                  </Typography>
                  <hr/>
                  <Typography color="textSecondary">
                    Address
                  </Typography>
                  <Typography variant="body2" component="p">
                    {item.address}
                  </Typography>
                </CardContent>
              </Card>)
          })}
    </Paper>
    </div>
  );
}
