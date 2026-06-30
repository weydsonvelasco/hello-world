- apiGroups:
  - project.openshift.io
  resources:
  - projects
  verbs:
  - get
  - list
  - watch
  - create

- apiGroups:
  - ""
  resources:
  - namespaces
  verbs:
  - get
  - list
  - watch
  - create
