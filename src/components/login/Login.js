import React from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Paper from "material-ui/Paper";
import Button from 'material-ui/Button';
import TextField from "material-ui/TextField";
import "./login.css";

// @flow weak
const LoginForm = (props: Object) : HTMLElement => (
  <div className="login-grid__container">
     <Grid container spacing={24}>
      <Paper className="paper">
        <Typography className="heading" type="headline" component="h1">
          LOGIN
        </Typography>
        <form onSubmit={(event) => { props.handleSubmit(event) }}>
          <Grid item xs={12}>
            <TextField
              label="username"
              name="username"
              type="text"
              className="form-input"
              onChange={props.handleChange}/>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="password"
              name="password"
              type="password"
              className="form-input"
              onChange={props.handleChange} />
          </Grid>
          <Grid item xs={12}>
            <Button color="primary" raised className="btn-submit" type="submit">
              Login
            </Button>
          </Grid>
        </form>
      </Paper>
    </Grid>
  </div>
);

export default LoginForm;
