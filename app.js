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


2026-07-01T14:06:26.1942089Z IP alocado: 10.190.160.201
2026-07-01T14:06:26.4093456Z Error from server (Forbidden): egressips.k8s.ovn.org is forbidden: User "system:serviceaccount:default:svc-ads" cannot list resource "egressips" in API group "k8s.ovn.org" at the cluster scope
2026-07-01T14:06:26.4129476Z Configurando o IP de saída 10.190.160.201 para o projeto sample-des
2026-07-01T14:06:28.0035325Z Error from server (Forbidden): error when retrieving current configuration of:
2026-07-01T14:06:28.0035814Z Resource: "k8s.ovn.org/v1, Resource=egressips", GroupVersionKind: "k8s.ovn.org/v1, Kind=EgressIP"
2026-07-01T14:06:28.0036357Z Name: "sample-des-egress", Namespace: ""
2026-07-01T14:06:28.0038158Z Object: &{map["kind":"EgressIP" "metadata":map["annotations":map["kubectl.kubernetes.io/last-applied-configuration":""] "name":"sample-des-egress" "namespace":""] "spec":map["egressIPs":["10.190.160.201"] "namespaceSelector":map["matchLabels":map["kubernetes.io/metadata.name":"sample-des"]]] "apiVersion":"k8s.ovn.org/v1"]}
2026-07-01T14:06:28.0038938Z from server for: "STDIN": egressips.k8s.ovn.org "sample-des-egress" is forbidden: User "system:serviceaccount:default:svc-ads" cannot get resource "egressips" in API group "k8s.ovn.org" at the cluster scope
 
