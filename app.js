oc patch clusterrole devops-deployer --type='json' -p='[
  {
    "op": "add",
    "path": "/rules/-",
    "value": {
      "apiGroups": ["security.openshift.io"],
      "resources": ["securitycontextconstraints"],
      "verbs": ["get","list","watch","update","patch"]
    }
  }
]'

oc auth can-i update securitycontextconstraints \
  --as=system:serviceaccount:default:svc-ads
