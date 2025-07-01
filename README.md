# learn-GenAI
Repo for documenting GenAI learning journey


## Gemini Generate Dockerfile

This repository contains `gemini-generate-dockerfile.py`, a script that leverages Google Gemini to automatically generate Dockerfiles for your projects.

### Features

- Uses Gemini API to analyze your project and suggest a suitable Dockerfile.
- Supports multiple programming languages and frameworks.
- Simple command-line interface.

### Usage

1. Clone this repository:
    ```
    git clone https://github.com/yourusername/learn-GenAI.git
    cd learn-GenAI
    ```

2. Install dependencies:
    ```
    pip3 install -r requirements.txt
    ```

3. Run the script:
    ```
    python3 gemini-generate-dockerfile.py
    ```

4. The generated Dockerfile will be saved in your project directory.

### Requirements

- Python 3.8+
- Gemini API access (set your API key as an environment variable: `GEMINI_API_KEY`)

### License

This project is licensed under the MIT License.
