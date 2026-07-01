oc patch clusterrole devops-deployer --type='json' -p='[
  {
    "op":"add",
    "path":"/rules/-",
    "value":{
      "apiGroups":["k8s.ovn.org"],
      "resources":["egressips"],
      "verbs":["get","list","watch","create","update","patch","delete"]
    }
  }
]'



oc auth can-i list egressips.k8s.ovn.org \
  --as=system:serviceaccount:default:svc-ads


oc auth can-i create egressips.k8s.ovn.org \
  --as=system:serviceaccount:default:svc-ads

oc auth can-i patch egressips.k8s.ovn.org \
  --as=system:serviceaccount:default:svc-ads
