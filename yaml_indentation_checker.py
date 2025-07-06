
import yaml
import sys

def check_yaml_indentation(file_path):
    """
    Checks for indentation errors in a YAML file.

    Args:
        file_path (str): The path to the YAML file.

    Returns:
        bool: True if no indentation errors are found, False otherwise.
    """
    try:
        with open(file_path, 'r') as f:
            yaml.safe_load(f)
        print(f"No indentation errors found in {file_path}")
        return True
    except yaml.YAMLError as e:
        if hasattr(e, 'problem_mark'):
            mark = e.problem_mark
            print(f"Indentation error in {file_path} at line {mark.line + 1}, column {mark.column + 1}")
        else:
            print(f"An error occurred while parsing {file_path}: {e}")
        return False

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python yaml_indentation_checker.py <file_path>")
        sys.exit(1)

    file_path = sys.argv[1]
    check_yaml_indentation(file_path)
