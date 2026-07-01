oc patch clusterrole devops-deployer --type='json' -p='[
  {
    "op":"add",
    "path":"/rules/-",
    "value":{
      "apiGroups":["security.openshift.io"],
      "resources":["securitycontextconstraints"],
      "resourceNames":["anyuid"],
      "verbs":["use"]
    }
  }
]'






oc auth can-i use securitycontextconstraints/anyuid \
  --as=system:serviceaccount:default:svc-ads
