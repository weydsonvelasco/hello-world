2026-07-01T13:25:30.7517178Z Error from server (Forbidden): clusterrolebindings.rbac.authorization.k8s.io "system:openshift:scc:anyuid" is forbidden: user "system:serviceaccount:default:svc-ads" (groups=["system:serviceaccounts" "system:serviceaccounts:default" "system:authenticated"]) is attempting to grant RBAC permissions not currently held:
2026-07-01T13:25:30.7517609Z {APIGroups:["security.openshift.io"], Resources:["securitycontextconstraints"], ResourceNames:["anyuid"], Verbs:["use"]}
 
