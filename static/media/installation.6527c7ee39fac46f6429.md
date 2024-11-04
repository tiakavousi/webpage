# Installation Guide

## Prerequisites

Before installing KubeKitty, ensure you have:
- Kubernetes cluster version 1.19 or higher
- kubectl installed and configured
- Helm 3.x (if using Helm installation method)

## Quick Install

You can install KubeKitty using either Helm or kubectl:

### Using Helm

```bash
# Add the KubeKitty repository
helm repo add kubekitty https://charts.kubekitty.io
helm repo update

# Install KubeKitty
helm install kubekitty kubekitty/kubekitty
```

### Using kubectl

```bash
kubectl apply -f https://kubekitty.io/install.yaml
```

## Verification

Check if KubeKitty is running properly:

```bash
kubectl get pods -n kubekitty
```

You should see output similar to:

```
NAME                         READY   STATUS    RESTARTS   AGE
kubekitty-8d4f7b9c7-2x4k9   1/1     Running   0          1m
```

## Next Steps

After installation, you might want to:
1. [Configure security settings](/documentation/configuration)
2. [Review security features](/documentation/security)
3. Check the [troubleshooting guide](/documentation/troubleshooting)