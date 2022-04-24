import React from "react";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import TextField from "@material-ui/core/TextField";
import './calculate.css';
import styles from './calculate.module.css';

class Calculate extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        expression: "",
      };
    }
  
    //when (+ - * /) key is pressed
    whenOperationKeyPressed = (event) => {
      let inputString = this.state.expression;
      if (inputString !== "" && inputString.length > 0) {
        let lastIndexChar = inputString.charAt(inputString.length - 1);
        if (lastIndexChar !== event.currentTarget.value && lastIndexChar.match(/^([0-9])$/)) {
          inputString = this.state.expression + event.currentTarget.value;
          this.setState({ expression: inputString });
        }
      }
    };
  
    //when number keys are pressed
    whenNumberKeyPressed = (event) => {
      let inputString = this.state.expression + event.currentTarget.value;
      this.setState({ expression: inputString });
    };
  
    //to calculate final output when (=) key is pressed
    calculateFinalValue = () => {
      let inputExpression = this.state.expression;
      if (inputExpression !== "" && inputExpression.length > 0) {
        let lastIndexChar = inputExpression.charAt(inputExpression.length - 1);
        if (!lastIndexChar.match(/^([0-9])$/)) {
          inputExpression = inputExpression.substring(0, inputExpression.length - 1);
        }
        //using eval() to evaluate the mathematical expression
        let finalOutput = eval(inputExpression);
        this.setState({ expression: finalOutput.toString() });
      }
    };
  
    //when (AC) key is pressed to clear the field
    whenResetBtnPressed = () => {
      this.setState({ expression: "" });
    };
  
    render() {
      if(this.state.expression === "Infinity" || this.state.expression === "NaN") {
        throw new Error('you can\'t divide a number by Zero "0"!');
      }
      return (
        <React.Fragment>
            <div className={styles.container}>
                <h2>CALCULATOR</h2>
                <p>Press The Button and Calculate!</p>
            </div>
            <table>
                <tr>
                    <td colSpan="4">
                        <TextField
                        type="text"
                        id="standard-full-width"
                        fullWidth
                        value={this.state.expression}
                        margin="normal"
                        style={{ fontSize: "50px" }}
                        />
                    </td>
                    </tr>
                    <tr>
                    <td>
                        <Button variant="contained" color="primary" onClick={this.whenResetBtnPressed}>
                        AC
                        </Button>
                    </td>
                    <td>
                        <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        value="0"
                        onClick={this.whenNumberKeyPressed}
                        >
                        0
                        </Button>
                    </td>
                    <td>
                        <Button
                        variant="contained"
                        color="primary"
                        value="/"
                        onClick={this.whenOperationKeyPressed}
                        >
                        <span>&#247;</span>
                        </Button>
                    </td>
        
                    <td>
                        <Button
                        variant="contained"
                        color="primary"
                        value="*"
                        onClick={this.whenOperationKeyPressed}
                        startIcon={<CloseIcon />}
                        />
                    </td>
                    </tr>
                    <tr>
                    <td>
                        <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        value="1"
                        onClick={this.whenNumberKeyPressed}
                        >
                        1
                        </Button>
                    </td>
                    <td>
                        <Button
                        variant="contained"
                        color="primary"
                        value="2"
                        onClick={this.whenNumberKeyPressed}
                        >
                        2
                        </Button>
                    </td>
                    <td>
                        <Button
                        variant="contained"
                        color="primary"
                        value="3"
                        onClick={this.whenNumberKeyPressed}
                        >
                        3
                        </Button>
                    </td>
                    <td>
                        <Button
                        variant="contained"
                        color="primary"
                        value="-"
                        onClick={this.whenOperationKeyPressed}
                        startIcon={<RemoveIcon />}
                        />
                    </td>
                    </tr>
                    <tr>
                    <td>
                        <Button
                        variant="contained"
                        color="primary"
                        value="4"
                        onClick={this.whenNumberKeyPressed}
                        >
                        4
                        </Button>
                    </td>
                    <td>
                        <Button
                        variant="contained"
                        color="primary"
                        value="5"
                        onClick={this.whenNumberKeyPressed}
                        >
                        5
                        </Button>
                    </td>
                    <td>
                        <Button
                        variant="contained"
                        color="primary"
                        value="6"
                        onClick={this.whenNumberKeyPressed}
                        >
                        6
                        </Button>
                    </td>
                    <td>
                        <Button
                        variant="contained"
                        color="primary"
                        value="+"
                        onClick={this.whenOperationKeyPressed}
                        startIcon={<AddIcon />}
                        />
                    </td>
                    </tr>
                    <tr>
                    <td>
                        <Button
                        variant="contained"
                        color="primary"
                        value="7"
                        onClick={this.whenNumberKeyPressed}
                        >
                        7
                        </Button>
                    </td>
                    <td>
                        <Button
                        variant="contained"
                        color="primary"
                        value="8"
                        onClick={this.whenNumberKeyPressed}
                        >
                        8
                        </Button>
                    </td>
                    <td>
                        <Button
                        variant="contained"
                        color="primary"
                        value="9"
                        onClick={this.whenNumberKeyPressed}
                        >
                        9
                        </Button>
                    </td>
                    <td>
                        <Button variant="contained" color="primary" onClick={this.calculateFinalValue}>
                        <span style={{ marginLeft: "-10%" }}>=</span>
                        </Button>
                    </td>
                </tr>
            </table>
        </React.Fragment>
      );
    }
}

export default Calculate;