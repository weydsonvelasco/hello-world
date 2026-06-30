2026-06-30T12:41:35.7667733Z Error from server (NotFound): namespaces "sample-des" not found
2026-06-30T12:41:35.9334210Z Error from server (Forbidden): You may not request a new project via this API.
2026-06-30T12:41:35.9363203Z cheguei 1
2026-06-30T12:41:36.0758630Z Error from server (Forbidden): securitycontextconstraints.security.openshift.io "anyuid" is forbidden: User "system:serviceaccount:default:svc-ads" cannot get resource "securitycontextconstraints" in API group "security.openshift.io" at the cluster scope
2026-06-30T12:41:36.2632488Z Error from server (NotFound): namespaces "sample-des" not found
2026-06-30T12:41:36.4542720Z Error from server (NotFound): namespaces "sample-des" not found
2026-06-30T12:41:36.6427051Z Error from server (NotFound): namespaces "sample-des" not found


kind: ClusterRole
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  name: devops-deployer
  uid: 4f5ee41b-da2f-48d8-9686-3f16af2b3610
  resourceVersion: '5723033'
  creationTimestamp: '2026-06-29T14:55:15Z'
  managedFields:
    - manager: Mozilla
      operation: Update
      apiVersion: rbac.authorization.k8s.io/v1
      time: '2026-06-30T12:33:04Z'
      fieldsType: FieldsV1
      fieldsV1:
        'f:rules': {}
rules:
  - verbs:
      - get
      - list
      - watch
      - create
      - update
      - patch
      - delete
    apiGroups:
      - ''
    resources:
      - configmaps
      - secrets
      - services
      - serviceaccounts
      - persistentvolumeclaims
      - pods
      - pods/log
      - events
  - verbs:
      - get
      - list
      - watch
      - create
    apiGroups:
      - project.openshift.io
    resources:
      - projects
  - verbs:
      - get
      - list
      - watch
      - create
    apiGroups:
      - ''
    resources:
      - namespaces
  - verbs:
      - get
      - list
      - watch
      - create
      - update
      - patch
      - delete
    apiGroups:
      - apps
    resources:
      - deployments
      - replicasets
      - statefulsets
      - daemonsets
  - verbs:
      - get
      - list
      - watch
      - create
      - update
      - patch
      - delete
    apiGroups:
      - batch
    resources:
      - jobs
      - cronjobs
  - verbs:
      - get
      - list
      - watch
      - create
      - update
      - patch
      - delete
    apiGroups:
      - autoscaling
    resources:
      - horizontalpodautoscalers
  - verbs:
      - get
      - list
      - watch
      - create
      - update
      - patch
      - delete
    apiGroups:
      - networking.k8s.io
    resources:
      - ingresses
      - networkpolicies
  - verbs:
      - get
      - list
      - watch
      - create
      - update
      - patch
      - delete
    apiGroups:
      - route.openshift.io
    resources:
      - routes
  - verbs:
      - get
      - list
      - watch
      - create
      - update
      - patch
      - delete
    apiGroups:
      - image.openshift.io
    resources:
      - imagestreams
      - imagestreamtags
  - verbs:
      - get
      - list
      - watch
      - create
      - update
      - patch
      - delete
    apiGroups:
      - build.openshift.io
    resources:
      - builds
      - buildconfigs
