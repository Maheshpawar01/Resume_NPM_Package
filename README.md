## NPM Package:
This project provides Mahesh Pawar's resume as an installable npm package. It allows you to quickly view the resume details directly in your terminal. It's a convenient way to access and share resume information.


📸 **Screenshots**

<img width="1243" height="824" alt="Screenshot 2025-09-14 141751" src="https://github.com/user-attachments/assets/31f88f23-df3e-498c-95dc-24f9c11979d7" />


🚀 **Key Features**

*   **Command-Line Access:** View the resume directly from your terminal by running a simple command.
*   **JSON Data Source:** The resume data is stored in a structured `resume.json` file, making it easy to parse and use in other applications.
*   **Formatted Output:** The `index.js` script formats the resume data for easy readability in the console.
*   **Publicly Available:** The package is published to npm with public access, making it easily accessible to anyone.

🛠️ **Tech Stack**

*   **Data Storage:** `JSON` (`resume.json`)
*   **Backend/CLI:** `Node.js` (`index.js`)
*   **Package Management:** `npm` (`package.json`)

📦 **Getting Started**

### Prerequisites

*   Node.js and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1.  Install the package globally using npm:

    ```bash
    npm install -g maheshpawar01
    ```

### Running Locally

1. Clone the repository:

    ```bash
    git clone <repository_url>
    cd <repository_directory>
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the package:

    ```bash
    npm link # Create a global link to the package
    maheshpawar01
    ```

💻 **Usage**

After installing the package globally, simply run the following command in your terminal:

```bash
maheshpawar01
```

This will display Mahesh Pawar's resume information in a formatted way in your console.

📂 **Project Structure**

```
├── resume.json       # Resume data in JSON format
├── index.js        # Main entry point, reads and displays resume data
└── package.json      # Project metadata and dependencies
```




💖 **Thanks**

Thank you for checking out this project! I hope you find it useful.
