oc patch clusterrole devops-deployer --type=json -p='[
  {
    "op":"add",
    "path":"/rules/-",
    "value":{
      "apiGroups":["template.openshift.io"],
      "resources":["templates","processedtemplates"],
      "verbs":["*"]
    }
  }
]'
