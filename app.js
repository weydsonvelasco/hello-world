bom dia !!
 
2026-06-30T12:14:49.2403916Z Error from server (Forbidden): projects.project.openshift.io "sample-des" is forbidden: User "system:serviceaccount:default:svc-ads" cannot get resource "projects" in API group "project.openshift.io" in the namespace "sample-des"
2026-06-30T12:14:49.4311074Z Error from server (Forbidden): You may not request a new project via this API.
2026-06-30T12:14:49.5900606Z Error from server (Forbidden): securitycontextconstraints.security.openshift.io "anyuid" is forbidden: User "system:serviceaccount:default:svc-ads" cannot get resource "securitycontextconstraints" in API group "security.openshift.io" at the cluster scope
2026-06-30T12:14:49.8143382Z Error from server (Forbidden): namespaces "sample-des" is forbidden: User "system:serviceaccount:default:svc-ads" cannot get resource "namespaces" in API group "" in the namespace "sample-des"
2026-06-30T12:14:50.0293918Z Error from server (Forbidden): namespaces "sample-des" is forbidden: User "system:serviceaccount:default:svc-ads" cannot get resource "namespaces" in API group "" in the namespace "sample-des"
2026-06-30T12:14:50.2398943Z Error from server (Forbidden): namespaces "sample-des" is forbidden: User "system:serviceaccount:default:svc-ads" cannot get resource "namespaces" in API group "" in the namespace "sample-des"
2026-06-30T12:14:51.9182581Z error: the server doesn't have a resource type "netnamespace"


kind: ClusterRole
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  name: devops-deployer
  uid: 4f5ee41b-da2f-48d8-9686-3f16af2b3610
  resourceVersion: '4737210'
  creationTimestamp: '2026-06-29T14:55:15Z'
  managedFields:
    - manager: Mozilla
      operation: Update
      apiVersion: rbac.authorization.k8s.io/v1
      time: '2026-06-29T14:55:15Z'
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
