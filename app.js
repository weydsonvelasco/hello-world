2026-06-30T12:49:32.1775332Z Now using project "sample-des" on server "https://api.nctvmrh001.nuvem.caixa:6443".
2026-06-30T12:49:32.1775642Z 
2026-06-30T12:49:32.1775847Z You can add applications to this project with the 'new-app' command. For example, try:
2026-06-30T12:49:32.1775944Z 
2026-06-30T12:49:32.1776141Z     oc new-app centos/ruby-25-centos7~https://github.com/sclorg/ruby-ex.git
2026-06-30T12:49:32.1776203Z 
2026-06-30T12:49:32.1776313Z to build a new example application in Ruby.
2026-06-30T12:49:32.1827734Z cheguei 1
2026-06-30T12:49:32.3306507Z Error from server (Forbidden): securitycontextconstraints.security.openshift.io "anyuid" is forbidden: User "system:serviceaccount:default:svc-ads" cannot get resource "securitycontextconstraints" in API group "security.openshift.io" at the cluster scope
2026-06-30T12:49:32.5590003Z Error from server (Forbidden): namespaces "sample-des" is forbidden: User "system:serviceaccount:default:svc-ads" cannot patch resource "namespaces" in API group "" in the namespace "sample-des"
2026-06-30T12:49:32.7941720Z Error from server (Forbidden): namespaces "sample-des" is forbidden: User "system:serviceaccount:default:svc-ads" cannot patch resource "namespaces" in API group "" in the namespace "sample-des"
2026-06-30T12:49:33.0314358Z Error from server (Forbidden): namespaces "sample-des" is forbidden: User "system:serviceaccount:default:svc-ads" cannot patch resource "namespaces" in API group "" in the namespace "sample-des"
