import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const styles = {
  card: {
    minWidth: 275
  },
  pos: {
    marginBottom: 12
  }
};

const regionList = [
  { value: "detection", text: "Auto Detect" },
  { value: "br", text: "Brazil" },
  { value: "euw", text: "Europe West" },
  { value: "eune", text: "Europe Nordic & East" },
  { value: "id", text: "Indonesia" },
  { value: "jp", text: "Japan" },
  { value: "www", text: "Korea" },
  { value: "lan", text: "Latin America North" },
  { value: "las", text: "Latin America South" },
  { value: "na", text: "North America" },
  { value: "oce", text: "Oceania" },
  { value: "ph", text: "Philippines" },
  { value: "ru", text: "Russia" },
  { value: "sg", text: "Singapore" },
  { value: "tw", text: "Taiwan" },
  { value: "th", text: "Thailand" },
  { value: "tr", text: "Turkey" },
  { value: "vn", text: "Vietnam" }
];

class SimpleCard extends React.Component {
  state = {
    checkedA: true,
    checkedB: true,
    name: "D:",
    region: "kr"
  };

  handleChangeSwitch = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography component="h2">Chrome Extension</Typography>
          <Typography component="p">
            text text
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            directory
          </Typography>
          <TextField
            id="standard-name"
            label="Name"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange("name")}
            margin="normal"
            fullWidth
          />
          <Select
            value={this.state.region}
            onChange={this.handleChange("region")}
            inputProps={{
              name: "region",
              id: "region-simple"
            }}
          >
            {regionList.map((region, index) => (
              <MenuItem key={index} value={region.value}>
                {region.text}
              </MenuItem>
            ))}
          </Select>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" size="small">
            Learn More
          </Button>
          Turn On/Off
          <Switch
            checked={this.state.checkedA}
            onChange={this.handleChangeSwitch("checkedA")}
            value="checkedA"
          />
        </CardActions>
      </Card>
    );
  }
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
