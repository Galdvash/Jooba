# My Backend Project

This is a backend server project built with Express.js. The server provides API endpoints to fetch financial data and other related information.

## Features

- **Express.js**: A minimal and flexible Node.js web application framework.
- **Axios**: Used for making HTTP requests to external APIs.
- **CORS**: Middleware for handling Cross-Origin Resource Sharing.
- **dotenv**: Module to load environment variables from a `.env` file.
- **Yahoo Finance 2**: A library for fetching financial data from Yahoo Finance.
- **Nodemon**: A tool that automatically restarts the server when file changes in the directory are detected.

## Project Structure

- `server.mjs`: The main entry point of the server.
- `apiHandlers.js`: Contains the API handler functions for different endpoints.
- `package.json`: Project metadata and dependencies.
- `yarn.lock`: Yarn lockfile for dependency versions.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/my-backend-project.git
   cd my-backend-project
   ```

2. **Install dependencies**:

   ```bash
   yarn install
   ```

3. **Set up environment variables**:

   - Create a `.env` file in the root directory.
   - Add any necessary environment variables, such as API keys.

4. **Run the server**:
   ```bash
   yarn start
   ```

## API Endpoints

### Fetch Stock Data

- **Endpoint**: `/api/stocks/:symbol`
- **Method**: `GET`
- **Description**: Fetches stock data for the specified symbol from the Yahoo Finance API.

### Fetch Stock News

- **Endpoint**: `/api/news/:symbol`
- **Method**: `GET`
- **Description**: Fetches news related to the specified stock symbol.

## Dependencies

- [Express.js](https://expressjs.com/)
- [Axios](https://axios-http.com/)
- [CORS](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Yahoo Finance 2](https://www.npmjs.com/package/yahoo-finance2)
- [Nodemon](https://www.npmjs.com/package/nodemon)

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Author

- **Your Name** - [Your GitHub Profile](https://github.com/Galdvash)
