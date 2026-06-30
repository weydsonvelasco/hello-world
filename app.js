oc patch clusterrole devops-deployer --type='json' -p='[
  {
    "op":"add",
    "path":"/rules/-",
    "value":{
      "apiGroups":["rbac.authorization.k8s.io"],
      "resources":["clusterrolebindings"],
      "verbs":["get","list","watch","create","update","patch"]
    }
  }
]'
