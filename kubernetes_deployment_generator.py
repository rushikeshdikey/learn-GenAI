
def generate_deployment_yaml(image, app_name, replicas, container_port):
    """Generates a Kubernetes Deployment YAML file content."""
    deployment_yaml = f"""
apiVersion: apps/v1
kind: Deployment
metadata:
  name: {app_name}-deployment
  labels:
    app: {app_name}
spec:
  replicas: {replicas}
  selector:
    matchLabels:
      app: {app_name}
  template:
    metadata:
      labels:
        app: {app_name}
    spec:
      containers:
      - name: {app_name}-container
        image: {image}
        ports:
        - containerPort: {container_port}
"""
    return deployment_yaml

if __name__ == "__main__":
    # Example usage with user-defined inputs
    image_name = "nginx:latest"
    application_name = "my-nginx-app"
    number_of_replicas = 3
    port = 80

    # Generate the YAML
    deployment_file_content = generate_deployment_yaml(
        image=image_name,
        app_name=application_name,
        replicas=number_of_replicas,
        container_port=port
    )

    # Print or save the generated YAML
    print(deployment_file_content)

    # To save to a file:
    # with open(f"{application_name}-deployment.yaml", "w") as f:
    #     f.write(deployment_file_content)
    # print(f"Deployment file '{application_name}-deployment.yaml' created.")
