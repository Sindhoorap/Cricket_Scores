# Time and Transaction of Two iterations 

This project visualizes transactions over time using a line chart.


### Installation Steps
1. Clone this repository to your local machine:
   
   git clone https://github.com/Sindhoorap/Time-and-Transaction.git
   

2. Install project dependencies using npm:
   
   npm install
   

## Running the Project

1. Start the local development server:
   
   npm start
   

2. Open your web browser and navigate to the following URL:
   
   http://127.0.0.1:8080
   http://172.20.10.3:8080
   

3. You should now see the transaction visualization webpage displaying a line chart comparing transactions over time for two iterations.

## Project Structure

- `index.html`: HTML file containing the webpage structure.
- `app.js`: JavaScript file containing the logic for configuring and rendering the line chart using Chart.js.
- `node_modules/`: Directory containing project dependencies installed via npm.
- `package.json`: File containing project metadata and dependencies.

## Data

The data for the two iterations is stored in the `app.js` file. The `labels` array represents the time (X-axis) for both iterations. The `iterationOneData` and `iterationTwoData` objects represent the data for the first and second iterations, respectively. Each object contains a `label` (name of the iteration), `data` (transaction count at each time), `borderColor` (color of the line), and `fill` (whether to fill the area under the line).

## Configuration

The chart configuration is stored in the `config` object in the `app.js` file. It includes the chart `type` ('line'), `data`, and `options`. The `options` object includes the `responsive` property (whether the chart should resize based on the container size), the `title` object (chart title), and the `scales` object (X and Y axis labels).


## Dependencies

- Chart.js (https://www.chartjs.org): JavaScript library for creating charts and graphs.

## Contributing

Contributions are welcome! Feel free to submit bug reports, feature requests, or pull requests to help improve this project.

 