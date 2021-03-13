import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import './HomePage.css'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2)
      },
    },
  }));




function HomePage() {
    const [userId,setUserId] = useState('');
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');

    

    const classes = useStyles();

    const submitHandler = (e) =>{
        e.preventDefault();
        console.log(userId);
        console.log(title);
        console.log(body);
        axios
            .post('https://jsonplaceholder.typicode.com/posts',{userId,title,body})
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
            

    }

    return (
        <div>
            <form className={classes.root} onSubmit={submitHandler}> 
                    <div className="txt">
                    <TextField 
                    value={userId} 
                    onChange={ e => setUserId(e.target.value)}
                    id="outlined-basic" 
                    label="UserID" 
                    variant="outlined" 
                    name="userId"
                    style = {{width: 700}}
                    />
                    </div>
                    <div className="txt">
                    <TextField value={title}
                    onChange={ e => setTitle(e.target.value)} 
                    id="outlined-basic" 
                    label="Title" 
                    variant="outlined" 
                    name="title"
                    style = {{width: 700}}/>
                    </div>
                    <div className="txt"> 
                    <TextField 
                    value={body} 
                    onChange={ e => setBody(e.target.value)} 
                    id="outlined-basic" 
                    label="Body" 
                    variant="outlined" 
                    name="body"
                    style = {{width: 700}}/>
                    </div>
                    <div>
                    <Button type="submit" variant="contained" color="primary" style = {{width: 200}}>Submit
                    </Button>
                    </div>
            </form>
        </div>
    )
}

export default HomePage
