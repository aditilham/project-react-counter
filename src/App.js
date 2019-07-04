import React from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
// import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import { useScrollTrigger } from "@material-ui/core";

const styles = {
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dzikir: 0
    };
  }


  incrementDzikir = () => {
    this.setState({
      dzikir: this.state.dzikir + 1
    });
    if (this.state.dzikir === 32) {
      alert("الحَمْد لله");
      this.setState({
        dzikir: 0
      });
    }
  };

  decrementDzikir = () => {
    this.setState({
      dzikir: this.state.dzikir - 1
    });
  };

  render() {
    return (
      <div align="center">
        <div>
          <br />
          <header>
            <div>
              <h1>ذِكْر Counter</h1>
            </div>
            <div class="ui container">
              <h1>{this.state.dzikir}</h1>
            </div>
          </header>

          <div>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.decrementDzikir}
              style={{ margin: "5px" }}
            >
              -
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={this.incrementDzikir}
              style={{ margin: "5px" }}
            >
              +
            </Button>
          </div>
          <br /><br />
          <div className={styles.root}>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <Paper className={styles.paper}>
                  <h2>First:</h2>
                  <h3>
                    Arabic :
                    <br /><br />
                    سُبْحَانَ اللَّهِ
                    <br /><br />
                    Transliteration :
                    <br /><br />
                    Subhanallah
                  </h3>
                  <br />
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={styles.paper}>
                  <h2>Second:</h2>
                  <h3>
                    Arabic :
                    <br /><br />
                    وَالْحَمْدُ لِلَّهِ
                    <br /><br />
                    Transliteration :
                    <br /><br />
                    Alhamdulillah
                  </h3>
                  <br />
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={styles.paper}>
                  <h2>Third:</h2>
                  <h3>
                    Arabic :
                    <br /><br />
                    وَلَا إِلَهَ إِلَّا اللَّهُ
                    <br /><br />
                    Transliteration :
                    <br /><br />
                    Laa ilaaha illallah
                  </h3>
                  <br />
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={styles.paper}>
                  <h2>Fourth:</h2>
                  <h3>
                    Arabic :
                    <br /><br />
                    وَاللَّهُ أَكْبَرُ
                    <br /><br />
                    Transliteration :
                    <br /><br />
                    Allahu Akbar
                  </h3>
                  <br />
                </Paper>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
