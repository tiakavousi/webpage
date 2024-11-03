// src/config/previews.js
export const previewsConfig = {
    title: "Previews",
    contextInfo: {
      context: "minikube",
      cluster: "minikube",
      user: "minikube"
    },
    tableHeaders: {
      name: "NAME",
      age: "AGE"
    },
    tableData: [
      {
        name: "system:aggregate-to-view",
        age: "6d6h"
      }
      // You can easily add more rows by adding objects to this array
    ]
  };