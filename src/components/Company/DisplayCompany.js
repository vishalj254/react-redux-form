import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import {Button,Paper} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CompanyById from './CompanyById'
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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
  paper:{padding:'30px',marginTop:'10px',backgroundColor:'#C0C0C0'},
});

export default function SimpleCard(props) {
  const classes = useStyles();
  React.useEffect(() => {
      
  }, [props.refresh])

  const data=useSelector(state=>state.post)
  const companydata=Object.values(data)

  const handleClick=(key)=>{
      props.changeView(<CompanyById changeView={props.changeView} key1={key} />)
  }

  return (
      <div style={{marginTop:30}} >
          <Paper className={classes.paper}>
          <Typography variant="h4" component="h2">
            Companies
          </Typography>
          <hr/>
          {
              companydata.length===0?<Typography>
                  There are currently no companies to review.
              </Typography>:companydata.map((item,index)=>{
              return(<Card className={classes.root}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {item.Name}
                  </Typography>
                  <hr/>
                  <Typography color="textSecondary">
                    Address
                  </Typography>
                  <Typography variant="body2" component="p">
                    {item.Address}
                  </Typography>
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
                <CardActions>
                  <Button variant="contained" size="small" onClick={()=>handleClick(item.key)}>Company Overview</Button>
                </CardActions>
              </Card>)
          })
          }
    </Paper>
    </div>
  );
}
