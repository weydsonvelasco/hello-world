oc auth can-i create projectrequests.project.openshift.io \
  --as=system:serviceaccount:default:svc-ads

oc adm policy add-cluster-role-to-user \
  self-provisioner \
  system:serviceaccount:default:svc-ads
