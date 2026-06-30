oc auth can-i create processedtemplates.template.openshift.io \
  -n openshift \
  --as=system:serviceaccount:default:svc-ads


- apiGroups:
  - security.openshift.io
  resources:
  - securitycontextconstraints
  verbs:
  - get
  - list
  - watch


- apiGroups:
  - template.openshift.io
  resources:
  - templates
  verbs:
  - get
  - list
  - watch
  - create
  - update
  - patch
  - delete
