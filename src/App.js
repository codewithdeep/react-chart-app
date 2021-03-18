import React from "react";
import { Select, MenuItem, Box } from "@material-ui/core";
import ChartsList from "./components/ChartList/ChartList";
import typeList from "./data/typeList";
import styles from "./App.module.css";

class App extends React.Component {
  state = {
    selectedType: 'A',
  };

  handleStateChange = (e) => {
    this.setState({ selectedType: e.target.value });
  };
  render() {
    const { selectedType } = this.state;
    return (
      <Box className={styles.container}>
        <Box className={styles.selectComponent}>
          <Select onChange={this.handleStateChange} value={selectedType}>
            {typeList.map((Type, index) => (
              <MenuItem key={index} value={Type}>
                {Type}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <ChartsList selectedType={selectedType} />
      </Box>
    );
  }
}

export default App;