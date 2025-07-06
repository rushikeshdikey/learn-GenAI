
import yaml

ingress = {
    "apiVersion": "networking.k8s.io/v1",
    "kind": "Ingress",
    "metadata": {
        "name": "example-ingress",
        "annotations": {
            "nginx.ingress.kubernetes.io/rewrite-target": "/"
        }
    },
    "spec": {
        "rules": [
            {
                "host": "example.com",
                "http": {
                    "paths": [
                        {
                            "path": "/api",
                            "pathType": "Prefix",
                            "backend": {
                                "service": {
                                    "name": "api-service",
                                    "port": {
                                        "number": 80
                                    }
                                }
                            }
                        }
                    ]
                }
            }
        ]
    }
}

with open("ingress.yaml", "w") as f:
    yaml.dump(ingress, f)

print("ingress.yaml created successfully.")
