
mv: cannot stat '/tmp/.dhcpd.conf.463288e28198570467c83f270d69a4e3': No such file or directory
[root@cadclcldlx010 ~]# systemctl restart dhcpd
[root@cadclcldlx010 ~]# dmesg -T | tail -100
[Fri Jun 19 15:32:45 2026] systemd[1]: Mounting POSIX Message Queue File System...
[Fri Jun 19 15:32:45 2026] systemd[1]: Mounting Kernel Debug File System...
[Fri Jun 19 15:32:45 2026] systemd[1]: Mounting Kernel Trace File System...
[Fri Jun 19 15:32:45 2026] systemd[1]: Kernel Module supporting RPCSEC_GSS was skipped because of an unmet condition check (ConditionPathExists=/etc/krb5.keytab).
[Fri Jun 19 15:32:45 2026] systemd[1]: Starting Create List of Static Device Nodes...
[Fri Jun 19 15:32:45 2026] systemd[1]: Starting Monitoring of LVM2 mirrors, snapshots etc. using dmeventd or progress polling...
[Fri Jun 19 15:32:45 2026] systemd[1]: Starting Load Kernel Module configfs...
[Fri Jun 19 15:32:45 2026] systemd[1]: Starting Load Kernel Module drm...
[Fri Jun 19 15:32:45 2026] systemd[1]: Starting Load Kernel Module fuse...
[Fri Jun 19 15:32:45 2026] Adding 4194300k swap on /dev/mapper/local-swap.  Priority:-2 extents:1 across:4194300k SS
[Fri Jun 19 15:32:45 2026] systemd[1]: Starting Read and set NIS domainname from /etc/sysconfig/network...
[Fri Jun 19 15:32:45 2026] systemd[1]: plymouth-switch-root.service: Deactivated successfully.
[Fri Jun 19 15:32:45 2026] systemd[1]: Stopped Plymouth switch root service.
[Fri Jun 19 15:32:45 2026] systemd[1]: systemd-fsck-root.service: Deactivated successfully.
[Fri Jun 19 15:32:45 2026] systemd[1]: Stopped File System Check on Root Device.
[Fri Jun 19 15:32:45 2026] systemd[1]: Stopped Journal Service.
[Fri Jun 19 15:32:45 2026] systemd[1]: Starting Journal Service...
[Fri Jun 19 15:32:45 2026] systemd[1]: Starting Load Kernel Modules...
[Fri Jun 19 15:32:45 2026] systemd[1]: Starting Generate network units from Kernel command line...
[Fri Jun 19 15:32:45 2026] systemd[1]: TPM2 PCR Machine ID Measurement was skipped because of an unmet condition check (ConditionPathExists=/sys/firmware/efi/efivars/StubPcrKernelImage-4a67b082-0a4c-41cf-b6c7-440b29bb8c4f).
[Fri Jun 19 15:32:45 2026] systemd[1]: Starting Remount Root and Kernel File Systems...
[Fri Jun 19 15:32:45 2026] systemd[1]: Repartition Root Disk was skipped because no trigger condition checks were met.
[Fri Jun 19 15:32:45 2026] systemd[1]: Starting Coldplug All udev Devices...
[Fri Jun 19 15:32:45 2026] systemd[1]: Activated swap /dev/mapper/local-swap.
[Fri Jun 19 15:32:45 2026] systemd[1]: Mounted Huge Pages File System.
[Fri Jun 19 15:32:45 2026] systemd[1]: Mounted POSIX Message Queue File System.
[Fri Jun 19 15:32:45 2026] systemd[1]: Mounted Kernel Debug File System.
[Fri Jun 19 15:32:45 2026] systemd[1]: Mounted Kernel Trace File System.
[Fri Jun 19 15:32:45 2026] systemd[1]: Finished Create List of Static Device Nodes.
[Fri Jun 19 15:32:45 2026] systemd[1]: Finished Read and set NIS domainname from /etc/sysconfig/network.
[Fri Jun 19 15:32:45 2026] systemd[1]: Finished Generate network units from Kernel command line.
[Fri Jun 19 15:32:45 2026] systemd[1]: Reached target Preparation for Network.
[Fri Jun 19 15:32:45 2026] systemd[1]: Reached target Swaps.
[Fri Jun 19 15:32:45 2026] systemd[1]: Finished Remount Root and Kernel File Systems.
[Fri Jun 19 15:32:45 2026] systemd[1]: One time configuration for iscsi.service was skipped because of an unmet condition check (ConditionPathExists=!/etc/iscsi/initiatorname.iscsi).
[Fri Jun 19 15:32:45 2026] systemd[1]: Special handling of early boot iSCSI sessions was skipped because of an unmet condition check (ConditionDirectoryNotEmpty=/sys/class/iscsi_session).
[Fri Jun 19 15:32:45 2026] systemd[1]: First Boot Wizard was skipped because of an unmet condition check (ConditionFirstBoot=yes).
[Fri Jun 19 15:32:45 2026] systemd[1]: Rebuild Hardware Database was skipped because of an unmet condition check (ConditionNeedsUpdate=/etc).
[Fri Jun 19 15:32:45 2026] systemd[1]: Create System Users was skipped because no trigger condition checks were met.
[Fri Jun 19 15:32:45 2026] systemd[1]: Starting Create Static Device Nodes in /dev...
[Fri Jun 19 15:32:45 2026] systemd[1]: Started Journal Service.
[Fri Jun 19 15:32:46 2026] piix4_smbus 0000:00:07.3: SMBus Host Controller not enabled!
[Fri Jun 19 15:32:46 2026] vmw_vmci 0000:00:07.7: Using capabilities 0x1c
[Fri Jun 19 15:32:46 2026] input: PC Speaker as /devices/platform/pcspkr/input/input5
[Fri Jun 19 15:32:46 2026] Guest personality initialized and is active
[Fri Jun 19 15:32:46 2026] VMCI host device registered (name=vmci, major=10, minor=123)
[Fri Jun 19 15:32:46 2026] Initialized host personality
[Fri Jun 19 15:32:46 2026] RAPL PMU: API unit is 2^-32 Joules, 1 fixed counters, 10737418240 ms ovfl timer
[Fri Jun 19 15:32:46 2026] RAPL PMU: hw unit of domain psys 2^-0 Joules
[Fri Jun 19 15:32:46 2026] XFS (dm-5): Mounting V5 Filesystem ca9258ac-1f5a-4338-80ef-e1755d77f5f5
[Fri Jun 19 15:32:46 2026] XFS (dm-8): Mounting V5 Filesystem 53602630-7af3-419a-a714-5e1d8a7e89c2
[Fri Jun 19 15:32:46 2026] XFS (sda1): Mounting V5 Filesystem 44979596-71c8-4a7b-9892-6088a8dfb996
[Fri Jun 19 15:32:46 2026] XFS (dm-11): Mounting V5 Filesystem 4a66fddc-1acb-4985-925b-56e992627a58
[Fri Jun 19 15:32:46 2026] XFS (dm-3): Mounting V5 Filesystem a191388b-6d16-443a-aa99-2fa942886e26
[Fri Jun 19 15:32:46 2026] XFS (dm-6): Mounting V5 Filesystem 958eb5a2-2718-45f4-9122-a0cfe23707a2
[Fri Jun 19 15:32:46 2026] XFS (dm-7): Mounting V5 Filesystem 1820639f-1293-4bfb-b88a-e8fd30a0b288
[Fri Jun 19 15:32:46 2026] XFS (sda1): Ending clean mount
[Fri Jun 19 15:32:46 2026] XFS (dm-8): Starting recovery (logdev: internal)
[Fri Jun 19 15:32:46 2026] XFS (dm-11): Starting recovery (logdev: internal)
[Fri Jun 19 15:32:46 2026] XFS (dm-8): Ending recovery (logdev: internal)
[Fri Jun 19 15:32:46 2026] XFS (dm-7): Starting recovery (logdev: internal)
[Fri Jun 19 15:32:46 2026] XFS (dm-11): Ending recovery (logdev: internal)
[Fri Jun 19 15:32:46 2026] XFS (dm-5): Ending clean mount
[Fri Jun 19 15:32:46 2026] XFS (dm-6): Ending clean mount
[Fri Jun 19 15:32:46 2026] XFS (dm-7): Ending recovery (logdev: internal)
[Fri Jun 19 15:32:46 2026] XFS (dm-3): Ending clean mount
[Fri Jun 19 15:32:46 2026] XFS (dm-9): Mounting V5 Filesystem f3f19728-48ab-43e5-bec6-57fc750b0f82
[Fri Jun 19 15:32:46 2026] XFS (dm-10): Mounting V5 Filesystem 58da3d2d-f374-43fd-aba1-9e2bbfd254c0
[Fri Jun 19 15:32:46 2026] XFS (dm-4): Mounting V5 Filesystem 6dfd3c59-3879-4fd1-8472-11b001c9d6bb
[Fri Jun 19 15:32:46 2026] XFS (dm-9): Starting recovery (logdev: internal)
[Fri Jun 19 15:32:46 2026] XFS (dm-9): Ending recovery (logdev: internal)
[Fri Jun 19 15:32:46 2026] XFS (dm-4): Starting recovery (logdev: internal)
[Fri Jun 19 15:32:46 2026] XFS (dm-10): Starting recovery (logdev: internal)
[Fri Jun 19 15:32:46 2026] XFS (dm-10): Ending recovery (logdev: internal)
[Fri Jun 19 15:32:46 2026] XFS (dm-4): Ending recovery (logdev: internal)
[Fri Jun 19 15:32:46 2026] XFS (dm-2): Mounting V5 Filesystem 81d24b5a-16bd-4182-a949-fb4b818764f7
[Fri Jun 19 15:32:46 2026] systemd-journald[733]: Received client request to flush runtime journal.
[Fri Jun 19 15:32:47 2026] XFS (dm-2): Starting recovery (logdev: internal)
[Fri Jun 19 15:32:47 2026] XFS (dm-2): Ending recovery (logdev: internal)
[Fri Jun 19 15:32:47 2026] NET: Registered PF_VSOCK protocol family
[Fri Jun 19 15:32:47 2026] vmxnet3 0000:0b:00.0 ens192: intr type 3, mode 0, 3 vectors allocated
[Fri Jun 19 15:32:47 2026] vmxnet3 0000:0b:00.0 ens192: NIC Link is Up 10000 Mbps
[Fri Jun 19 15:32:47 2026] RPC: Registered named UNIX socket transport module.
[Fri Jun 19 15:32:47 2026] RPC: Registered udp transport module.
[Fri Jun 19 15:32:47 2026] RPC: Registered tcp transport module.
[Fri Jun 19 15:32:47 2026] RPC: Registered tcp-with-tls transport module.
[Fri Jun 19 15:32:47 2026] RPC: Registered tcp NFSv4.1 backchannel transport module.
[Fri Jun 19 15:32:48 2026] block dm-7: the capability attribute has been deprecated.
[Tue Jun 23 08:20:13 2026] vmxnet3 0000:0b:00.0 ens192: NIC Link is Down
[Tue Jun 23 08:20:13 2026] vmxnet3 0000:0b:00.0 ens192: NIC Link is Up 10000 Mbps
[Wed Jun 24 00:59:16 2026] evm: overlay not supported
[Wed Jun 24 00:59:46 2026] overlayfs: idmapped layers are currently not supported
[Thu Jun 25 17:26:34 2026] Bluetooth: Core ver 2.22
[Thu Jun 25 17:26:34 2026] NET: Registered PF_BLUETOOTH protocol family
[Thu Jun 25 17:26:34 2026] Bluetooth: HCI device and connection manager initialized
[Thu Jun 25 17:26:34 2026] Bluetooth: HCI socket layer initialized
[Thu Jun 25 17:26:34 2026] Bluetooth: L2CAP socket layer initialized
[Thu Jun 25 17:26:34 2026] Bluetooth: SCO socket layer initialized
[Thu Jun 25 17:26:34 2026] device ens192 entered promiscuous mode
[Fri Jun 26 09:22:33 2026] device ens192 left promiscuous mode
[root@cadclcldlx010 ~]#
[root@cadclcldlx010 ~]#
[root@cadclcldlx010 ~]# vim /etc/dhcp/dhcpd.conf
[root@cadclcldlx010 ~]# systemctl restart dhcpd
^C
mv: cannot stat '/tmp/.dhcpd.conf.961a94a7013ae56916136d5b7843cc72': No such file or directory
[root@cadclcldlx010 ~]# systemctl restart dhcpd
[root@cadclcldlx010 ~]# strace -f -tt -o /tmp/systemd.trave systemctl status sshd
● sshd.service - OpenSSH server daemon
     Loaded: loaded (/usr/lib/systemd/system/sshd.service; enabled; preset: enabled)
     Active: active (running) since Fri 2026-06-19 15:32:47 -03; 1 week 3 days ago
       Docs: man:sshd(8)
             man:sshd_config(5)
   Main PID: 1065 (sshd)
      Tasks: 1 (limit: 23141)
     Memory: 6.2M
        CPU: 500ms
     CGroup: /system.slice/sshd.service
             └─1065 "sshd: /usr/sbin/sshd -D [listener] 0 of 10-100 startups"

Jun 29 01:23:55 cadclcldlx010 sshd[302652]: Unable to negotiate with 127.0.0.1 port 57172: no matching key exchange method found. Their offer: diffie-hellman-group1-sha1 [preauth]
Jun 29 10:28:13 cadclcldlx010 sshd[313734]: pam_sss(sshd:auth): authentication success; logname= uid=0 euid=0 tty=ssh ruser= rhost=10.190.160.13 user=p940372
Jun 29 10:28:13 cadclcldlx010 sshd[313734]: Accepted password for p940372 from 10.190.160.13 port 48326 ssh2
Jun 29 10:28:13 cadclcldlx010 sshd[313734]: pam_unix(sshd:session): session opened for user p940372(uid=10940372) by p940372(uid=0)
Jun 30 03:35:16 cadclcldlx010 sshd[335963]: error: kex_exchange_identification: Connection closed by remote host
Jun 30 03:35:16 cadclcldlx010 sshd[335963]: Connection closed by 127.0.0.1 port 55066
Jun 30 03:35:16 cadclcldlx010 sshd[335964]: Unable to negotiate with 127.0.0.1 port 55080: no matching key exchange method found. Their offer: diffie-hellman-group1-sha1 [preauth]
Jun 30 08:16:27 cadclcldlx010 sshd[341810]: pam_sss(sshd:auth): authentication success; logname= uid=0 euid=0 tty=ssh ruser= rhost=10.190.160.13 user=p940372
Jun 30 08:16:27 cadclcldlx010 sshd[341810]: Accepted password for p940372 from 10.190.160.13 port 51020 ssh2
Jun 30 08:16:27 cadclcldlx010 sshd[341810]: pam_unix(sshd:session): session opened for user p940372(uid=10940372) by p940372(uid=0)
[root@cadclcldlx010 ~]# strace -f -tt -o /tmp/systemd.trave systemctl status sshd
● sshd.service - OpenSSH server daemon
     Loaded: loaded (/usr/lib/systemd/system/sshd.service; enabled; preset: enabled)
     Active: active (running) since Fri 2026-06-19 15:32:47 -03; 1 week 3 days ago
       Docs: man:sshd(8)
             man:sshd_config(5)
   Main PID: 1065 (sshd)
      Tasks: 1 (limit: 23141)
     Memory: 6.2M
        CPU: 500ms
     CGroup: /system.slice/sshd.service
             └─1065 "sshd: /usr/sbin/sshd -D [listener] 0 of 10-100 startups"

Jun 29 01:23:55 cadclcldlx010 sshd[302652]: Unable to negotiate with 127.0.0.1 port 57172: no matching key exchange method found. Their offer: diffie-hellman-group1-sha1 [preauth]
Jun 29 10:28:13 cadclcldlx010 sshd[313734]: pam_sss(sshd:auth): authentication success; logname= uid=0 euid=0 tty=ssh ruser= rhost=10.190.160.13 user=p940372
Jun 29 10:28:13 cadclcldlx010 sshd[313734]: Accepted password for p940372 from 10.190.160.13 port 48326 ssh2
Jun 29 10:28:13 cadclcldlx010 sshd[313734]: pam_unix(sshd:session): session opened for user p940372(uid=10940372) by p940372(uid=0)
Jun 30 03:35:16 cadclcldlx010 sshd[335963]: error: kex_exchange_identification: Connection closed by remote host
Jun 30 03:35:16 cadclcldlx010 sshd[335963]: Connection closed by 127.0.0.1 port 55066
Jun 30 03:35:16 cadclcldlx010 sshd[335964]: Unable to negotiate with 127.0.0.1 port 55080: no matching key exchange method found. Their offer: diffie-hellman-group1-sha1 [preauth]
Jun 30 08:16:27 cadclcldlx010 sshd[341810]: pam_sss(sshd:auth): authentication success; logname= uid=0 euid=0 tty=ssh ruser= rhost=10.190.160.13 user=p940372
Jun 30 08:16:27 cadclcldlx010 sshd[341810]: Accepted password for p940372 from 10.190.160.13 port 51020 ssh2
Jun 30 08:16:27 cadclcldlx010 sshd[341810]: pam_unix(sshd:session): session opened for user p940372(uid=10940372) by p940372(uid=0)
[root@cadclcldlx010 ~]# vim /etc/dhcp/dhcpd.conf
[root@cadclcldlx010 ~]# strace -f -tt -o /tmp/systemd.trave systemctl restart dhcpd
^C
mv: cannot stat '/tmp/.dhcpd.conf.d3ab8135f7d34b91f2c5440835fa7598': No such file or directory
[root@cadclcldlx010 ~]# strace -f -tt -o /tmp/systemd.trave systemctl restart dhcpd
[root@cadclcldlx010 ~]# cat  /tmp/systemd.trave
344817 08:53:08.786471 execve("/usr/bin/systemctl", ["systemctl", "restart", "dhcpd"], 0x7fff7b7e8fc0 /* 23 vars */) = 0
344817 08:53:08.787279 brk(NULL)        = 0x555b4e4d3000
344817 08:53:08.787390 arch_prctl(0x3001 /* ARCH_??? */, 0x7ffc881c6920) = -1 EINVAL (Invalid argument)
344817 08:53:08.787441 mmap(NULL, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7f320f428000
344817 08:53:08.787466 access("/etc/ld.so.preload", R_OK) = -1 ENOENT (No such file or directory)
344817 08:53:08.787490 openat(AT_FDCWD, "/usr/lib64/systemd/glibc-hwcaps/x86-64-v4/libsystemd-shared-252.so", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.787516 newfstatat(AT_FDCWD, "/usr/lib64/systemd/glibc-hwcaps/x86-64-v4", 0x7ffc881c5b50, 0) = -1 ENOENT (No such file or directory)
344817 08:53:08.787538 openat(AT_FDCWD, "/usr/lib64/systemd/glibc-hwcaps/x86-64-v3/libsystemd-shared-252.so", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.787554 newfstatat(AT_FDCWD, "/usr/lib64/systemd/glibc-hwcaps/x86-64-v3", 0x7ffc881c5b50, 0) = -1 ENOENT (No such file or directory)
344817 08:53:08.787570 openat(AT_FDCWD, "/usr/lib64/systemd/glibc-hwcaps/x86-64-v2/libsystemd-shared-252.so", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.787586 newfstatat(AT_FDCWD, "/usr/lib64/systemd/glibc-hwcaps/x86-64-v2", 0x7ffc881c5b50, 0) = -1 ENOENT (No such file or directory)
344817 08:53:08.787601 openat(AT_FDCWD, "/usr/lib64/systemd/tls/haswell/avx512_1/x86_64/libsystemd-shared-252.so", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.787618 newfstatat(AT_FDCWD, "/usr/lib64/systemd/tls/haswell/avx512_1/x86_64", 0x7ffc881c5b50, 0) = -1 ENOENT (No such file or directory)
344817 08:53:08.787634 openat(AT_FDCWD, "/usr/lib64/systemd/tls/haswell/avx512_1/libsystemd-shared-252.so", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.787647 newfstatat(AT_FDCWD, "/usr/lib64/systemd/tls/haswell/avx512_1", 0x7ffc881c5b50, 0) = -1 ENOENT (No such file or directory)
344817 08:53:08.787660 openat(AT_FDCWD, "/usr/lib64/systemd/tls/haswell/x86_64/libsystemd-shared-252.so", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.787677 newfstatat(AT_FDCWD, "/usr/lib64/systemd/tls/haswell/x86_64", 0x7ffc881c5b50, 0) = -1 ENOENT (No such file or directory)
344817 08:53:08.787692 openat(AT_FDCWD, "/usr/lib64/systemd/tls/haswell/libsystemd-shared-252.so", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.787703 newfstatat(AT_FDCWD, "/usr/lib64/systemd/tls/haswell", 0x7ffc881c5b50, 0) = -1 ENOENT (No such file or directory)
344817 08:53:08.787729 openat(AT_FDCWD, "/usr/lib64/systemd/tls/avx512_1/x86_64/libsystemd-shared-252.so", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.787751 newfstatat(AT_FDCWD, "/usr/lib64/systemd/tls/avx512_1/x86_64", 0x7ffc881c5b50, 0) = -1 ENOENT (No such file or directory)
344817 08:53:08.787766 openat(AT_FDCWD, "/usr/lib64/systemd/tls/avx512_1/libsystemd-shared-252.so", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.787778 newfstatat(AT_FDCWD, "/usr/lib64/systemd/tls/avx512_1", 0x7ffc881c5b50, 0) = -1 ENOENT (No such file or directory)
344817 08:53:08.787789 openat(AT_FDCWD, "/usr/lib64/systemd/tls/x86_64/libsystemd-shared-252.so", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.787801 newfstatat(AT_FDCWD, "/usr/lib64/systemd/tls/x86_64", 0x7ffc881c5b50, 0) = -1 ENOENT (No such file or directory)
344817 08:53:08.787812 openat(AT_FDCWD, "/usr/lib64/systemd/tls/libsystemd-shared-252.so", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.787823 newfstatat(AT_FDCWD, "/usr/lib64/systemd/tls", 0x7ffc881c5b50, 0) = -1 ENOENT (No such file or directory)
344817 08:53:08.787834 openat(AT_FDCWD, "/usr/lib64/systemd/haswell/avx512_1/x86_64/libsystemd-shared-252.so", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.787846 newfstatat(AT_FDCWD, "/usr/lib64/systemd/haswell/avx512_1/x86_64", 0x7ffc881c5b50, 0) = -1 ENOENT (No such file or directory)
344817 08:53:08.787863 openat(AT_FDCWD, "/usr/lib64/systemd/haswell/avx512_1/libsystemd-shared-252.so", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.787874 newfstatat(AT_FDCWD, "/usr/lib64/systemd/haswell/avx512_1", 0x7ffc881c5b50, 0) = -1 ENOENT (No such file or directory)
344817 08:53:08.787886 openat(AT_FDCWD, "/usr/lib64/systemd/haswell/x86_64/libsystemd-shared-252.so", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.787897 newfstatat(AT_FDCWD, "/usr/lib64/systemd/haswell/x86_64", 0x7ffc881c5b50, 0) = -1 ENOENT (No such file or directory)
344817 08:53:08.787908 openat(AT_FDCWD, "/usr/lib64/systemd/haswell/libsystemd-shared-252.so", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.787920 newfstatat(AT_FDCWD, "/usr/lib64/systemd/haswell", 0x7ffc881c5b50, 0) = -1 ENOENT (No such file or directory)
344817 08:53:08.787931 openat(AT_FDCWD, "/usr/lib64/systemd/avx512_1/x86_64/libsystemd-shared-252.so", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.787943 newfstatat(AT_FDCWD, "/usr/lib64/systemd/avx512_1/x86_64", 0x7ffc881c5b50, 0) = -1 ENOENT (No such file or directory)
344817 08:53:08.787954 openat(AT_FDCWD, "/usr/lib64/systemd/avx512_1/libsystemd-shared-252.so", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.787966 newfstatat(AT_FDCWD, "/usr/lib64/systemd/avx512_1", 0x7ffc881c5b50, 0) = -1 ENOENT (No such file or directory)
344817 08:53:08.787977 openat(AT_FDCWD, "/usr/lib64/systemd/x86_64/libsystemd-shared-252.so", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.787989 newfstatat(AT_FDCWD, "/usr/lib64/systemd/x86_64", 0x7ffc881c5b50, 0) = -1 ENOENT (No such file or directory)
344817 08:53:08.788000 openat(AT_FDCWD, "/usr/lib64/systemd/libsystemd-shared-252.so", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.788013 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0\260G\10\0\0\0\0\0"..., 832) = 832
344817 08:53:08.788027 fstat(3, {st_mode=S_IFREG|0755, st_size=3827296, ...}) = 0
344817 08:53:08.788040 mmap(NULL, 3760240, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f320f000000
344817 08:53:08.788057 mmap(0x7f320f06d000, 2281472, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x6d000) = 0x7f320f06d000
344817 08:53:08.788078 mmap(0x7f320f29a000, 905216, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x29a000) = 0x7f320f29a000
344817 08:53:08.788091 mmap(0x7f320f377000, 122880, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x377000) = 0x7f320f377000
344817 08:53:08.788109 mmap(0x7f320f395000, 4208, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_ANONYMOUS, -1, 0) = 0x7f320f395000
344817 08:53:08.788132 close(3)         = 0
344817 08:53:08.788147 openat(AT_FDCWD, "/usr/lib64/systemd/libgcc_s.so.1", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.788159 openat(AT_FDCWD, "/etc/ld.so.cache", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.788171 fstat(3, {st_mode=S_IFREG|0644, st_size=26763, ...}) = 0
344817 08:53:08.788183 mmap(NULL, 26763, PROT_READ, MAP_PRIVATE, 3, 0) = 0x7f320f421000
344817 08:53:08.788196 close(3)         = 0
344817 08:53:08.788208 openat(AT_FDCWD, "/lib64/libgcc_s.so.1", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.788222 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0\3605\0\0\0\0\0\0"..., 832) = 832
344817 08:53:08.788234 fstat(3, {st_mode=S_IFREG|0755, st_size=108136, ...}) = 0
344817 08:53:08.788245 mmap(NULL, 107208, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f320f406000
344817 08:53:08.788259 mprotect(0x7f320f409000, 90112, PROT_NONE) = 0
344817 08:53:08.788277 mmap(0x7f320f409000, 73728, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x3000) = 0x7f320f409000
344817 08:53:08.788292 mmap(0x7f320f41b000, 12288, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x15000) = 0x7f320f41b000
344817 08:53:08.788307 mmap(0x7f320f41f000, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x18000) = 0x7f320f41f000
344817 08:53:08.788330 close(3)         = 0
344817 08:53:08.788343 openat(AT_FDCWD, "/usr/lib64/systemd/libc.so.6", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.788359 openat(AT_FDCWD, "/lib64/libc.so.6", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.788372 read(3, "\177ELF\2\1\1\3\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0\220\227\2\0\0\0\0\0"..., 832) = 832
344817 08:53:08.788383 pread64(3, "\6\0\0\0\4\0\0\0@\0\0\0\0\0\0\0@\0\0\0\0\0\0\0@\0\0\0\0\0\0\0"..., 784, 64) = 784
344817 08:53:08.788395 pread64(3, "\4\0\0\0 \0\0\0\5\0\0\0GNU\0\2\0\0\300\4\0\0\0\3\0\0\0\0\0\0\0"..., 48, 848) = 48
344817 08:53:08.788406 pread64(3, "\4\0\0\0\24\0\0\0\3\0\0\0GNU\0\327\212D\256\224\361\323 4.\17\366\3021[+"..., 68, 896) = 68
344817 08:53:08.788417 fstat(3, {st_mode=S_IFREG|0755, st_size=2543976, ...}) = 0
344817 08:53:08.788429 pread64(3, "\6\0\0\0\4\0\0\0@\0\0\0\0\0\0\0@\0\0\0\0\0\0\0@\0\0\0\0\0\0\0"..., 784, 64) = 784
344817 08:53:08.788441 mmap(NULL, 2129840, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f320ec00000
344817 08:53:08.788458 mmap(0x7f320ec28000, 1527808, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x28000) = 0x7f320ec28000
344817 08:53:08.788480 mmap(0x7f320ed9d000, 360448, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x19d000) = 0x7f320ed9d000
344817 08:53:08.788495 mmap(0x7f320edf5000, 24576, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x1f5000) = 0x7f320edf5000
344817 08:53:08.788512 mmap(0x7f320edfb000, 53168, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_ANONYMOUS, -1, 0) = 0x7f320edfb000
344817 08:53:08.788533 close(3)         = 0
344817 08:53:08.788551 openat(AT_FDCWD, "/usr/lib64/systemd/libacl.so.1", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.788566 openat(AT_FDCWD, "/lib64/libacl.so.1", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.788579 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0\260%\0\0\0\0\0\0"..., 832) = 832
344817 08:53:08.788592 fstat(3, {st_mode=S_IFREG|0755, st_size=40496, ...}) = 0
344817 08:53:08.788608 mmap(NULL, 40984, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f320f3fb000
344817 08:53:08.788626 mprotect(0x7f320f3fd000, 28672, PROT_NONE) = 0
344817 08:53:08.788644 mmap(0x7f320f3fd000, 20480, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x2000) = 0x7f320f3fd000
344817 08:53:08.788660 mmap(0x7f320f402000, 4096, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x7000) = 0x7f320f402000
344817 08:53:08.788678 mmap(0x7f320f404000, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x8000) = 0x7f320f404000
344817 08:53:08.788691 mmap(0x7f320f405000, 24, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_ANONYMOUS, -1, 0) = 0x7f320f405000
344817 08:53:08.788709 close(3)         = 0
344817 08:53:08.788732 openat(AT_FDCWD, "/usr/lib64/systemd/libblkid.so.1", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.788746 openat(AT_FDCWD, "/lib64/libblkid.so.1", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.788760 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0\260\204\0\0\0\0\0\0"..., 832) = 832
344817 08:53:08.788771 fstat(3, {st_mode=S_IFREG|0755, st_size=229424, ...}) = 0
344817 08:53:08.788783 mmap(NULL, 222096, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f320f3c4000
344817 08:53:08.788795 mmap(0x7f320f3cb000, 135168, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x7000) = 0x7f320f3cb000
344817 08:53:08.788812 mmap(0x7f320f3ec000, 36864, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x28000) = 0x7f320f3ec000
344817 08:53:08.788826 mmap(0x7f320f3f5000, 24576, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x31000) = 0x7f320f3f5000
344817 08:53:08.788848 close(3)         = 0
344817 08:53:08.788859 openat(AT_FDCWD, "/usr/lib64/systemd/libcap.so.2", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.788872 openat(AT_FDCWD, "/lib64/libcap.so.2", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.788885 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0P'\0\0\0\0\0\0"..., 832) = 832
344817 08:53:08.788899 fstat(3, {st_mode=S_IFREG|0755, st_size=36304, ...}) = 0
344817 08:53:08.788910 mmap(NULL, 36920, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f320f3ba000
344817 08:53:08.788923 mmap(0x7f320f3bc000, 16384, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x2000) = 0x7f320f3bc000
344817 08:53:08.788940 mmap(0x7f320f3c0000, 8192, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x6000) = 0x7f320f3c0000
344817 08:53:08.788955 mmap(0x7f320f3c2000, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x7000) = 0x7f320f3c2000
344817 08:53:08.788975 close(3)         = 0
344817 08:53:08.788987 openat(AT_FDCWD, "/usr/lib64/systemd/libcrypt.so.2", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.789000 mmap(NULL, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7f320f3b8000
344817 08:53:08.789014 openat(AT_FDCWD, "/lib64/libcrypt.so.2", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.789028 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0P \0\0\0\0\0\0"..., 832) = 832
344817 08:53:08.789039 fstat(3, {st_mode=S_IFREG|0755, st_size=201808, ...}) = 0
344817 08:53:08.789050 mmap(NULL, 233728, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f320efc6000
344817 08:53:08.789063 mprotect(0x7f320efc8000, 188416, PROT_NONE) = 0
344817 08:53:08.789078 mmap(0x7f320efc8000, 81920, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x2000) = 0x7f320efc8000
344817 08:53:08.789093 mmap(0x7f320efdc000, 102400, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x16000) = 0x7f320efdc000
344817 08:53:08.789107 mmap(0x7f320eff6000, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x2f000) = 0x7f320eff6000
344817 08:53:08.789124 mmap(0x7f320eff7000, 33024, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_ANONYMOUS, -1, 0) = 0x7f320eff7000
344817 08:53:08.789145 close(3)         = 0
344817 08:53:08.789156 openat(AT_FDCWD, "/usr/lib64/systemd/libgcrypt.so.20", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.789169 openat(AT_FDCWD, "/lib64/libgcrypt.so.20", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.789183 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0\200\353\0\0\0\0\0\0"..., 832) = 832
344817 08:53:08.789194 fstat(3, {st_mode=S_IFREG|0755, st_size=1304856, ...}) = 0
344817 08:53:08.789205 mmap(NULL, 1294576, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f320ee89000
344817 08:53:08.789217 mprotect(0x7f320ee97000, 1200128, PROT_NONE) = 0
344817 08:53:08.789232 mmap(0x7f320ee97000, 942080, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0xe000) = 0x7f320ee97000
344817 08:53:08.789246 mmap(0x7f320ef7d000, 253952, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0xf4000) = 0x7f320ef7d000
344817 08:53:08.789262 mmap(0x7f320efbc000, 36864, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x132000) = 0x7f320efbc000
344817 08:53:08.789279 mmap(0x7f320efc5000, 240, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_ANONYMOUS, -1, 0) = 0x7f320efc5000
344817 08:53:08.789297 close(3)         = 0
344817 08:53:08.789308 openat(AT_FDCWD, "/usr/lib64/systemd/libkmod.so.2", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.789321 openat(AT_FDCWD, "/lib64/libkmod.so.2", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.789334 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0pP\0\0\0\0\0\0"..., 832) = 832
344817 08:53:08.789346 fstat(3, {st_mode=S_IFREG|0755, st_size=107528, ...}) = 0
344817 08:53:08.789357 mmap(NULL, 102448, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f320f39e000
344817 08:53:08.789369 mmap(0x7f320f3a2000, 65536, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x4000) = 0x7f320f3a2000
344817 08:53:08.789383 mmap(0x7f320f3b2000, 16384, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x14000) = 0x7f320f3b2000
344817 08:53:08.789397 mmap(0x7f320f3b6000, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x18000) = 0x7f320f3b6000
344817 08:53:08.789416 close(3)         = 0
344817 08:53:08.789430 openat(AT_FDCWD, "/usr/lib64/systemd/liblz4.so.1", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.789457 openat(AT_FDCWD, "/lib64/liblz4.so.1", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.789477 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\00007\0\0\0\0\0\0"..., 832) = 832
344817 08:53:08.789489 fstat(3, {st_mode=S_IFREG|0755, st_size=144120, ...}) = 0
344817 08:53:08.789502 mmap(NULL, 143368, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f320ee65000
344817 08:53:08.789514 mmap(0x7f320ee68000, 114688, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x3000) = 0x7f320ee68000
344817 08:53:08.789530 mmap(0x7f320ee84000, 12288, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x1f000) = 0x7f320ee84000
344817 08:53:08.789544 mmap(0x7f320ee87000, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x21000) = 0x7f320ee87000
344817 08:53:08.789562 mmap(0x7f320ee88000, 8, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_ANONYMOUS, -1, 0) = 0x7f320ee88000
344817 08:53:08.789575 close(3)         = 0
344817 08:53:08.789585 openat(AT_FDCWD, "/usr/lib64/systemd/libmount.so.1", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.789598 openat(AT_FDCWD, "/lib64/libmount.so.1", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.789611 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0\20\314\0\0\0\0\0\0"..., 832) = 832
344817 08:53:08.789623 fstat(3, {st_mode=S_IFREG|0755, st_size=291496, ...}) = 0
344817 08:53:08.789634 mmap(NULL, 283144, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f320ee1f000
344817 08:53:08.789646 mmap(0x7f320ee29000, 184320, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0xa000) = 0x7f320ee29000
344817 08:53:08.789661 mmap(0x7f320ee56000, 49152, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x37000) = 0x7f320ee56000
344817 08:53:08.789674 mmap(0x7f320ee62000, 12288, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x43000) = 0x7f320ee62000
344817 08:53:08.789695 close(3)         = 0
344817 08:53:08.789709 openat(AT_FDCWD, "/usr/lib64/systemd/libcrypto.so.3", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.789741 openat(AT_FDCWD, "/lib64/libcrypto.so.3", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.789759 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0@\324\r\0\0\0\0\0"..., 832) = 832
344817 08:53:08.789773 fstat(3, {st_mode=S_IFREG|0755, st_size=6147696, ...}) = 0
344817 08:53:08.789788 mmap(NULL, 6039984, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f320e600000
344817 08:53:08.789804 mmap(0x7f320e6dc000, 3436544, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0xdc000) = 0x7f320e6dc000
344817 08:53:08.789824 mmap(0x7f320ea23000, 1191936, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x423000) = 0x7f320ea23000
344817 08:53:08.789840 mmap(0x7f320eb46000, 499712, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x545000) = 0x7f320eb46000
344817 08:53:08.789864 mmap(0x7f320ebc0000, 10672, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_ANONYMOUS, -1, 0) = 0x7f320ebc0000
344817 08:53:08.789892 close(3)         = 0
344817 08:53:08.789912 openat(AT_FDCWD, "/usr/lib64/systemd/libp11-kit.so.0", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.789928 openat(AT_FDCWD, "/lib64/libp11-kit.so.0", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.789942 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0\20b\3\0\0\0\0\0"..., 832) = 832
344817 08:53:08.789953 fstat(3, {st_mode=S_IFREG|0755, st_size=1714240, ...}) = 0
344817 08:53:08.789964 mmap(NULL, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7f320f39c000
344817 08:53:08.789980 mmap(NULL, 1664200, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f320e469000
344817 08:53:08.789994 mmap(0x7f320e49e000, 864256, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x35000) = 0x7f320e49e000
344817 08:53:08.790010 mmap(0x7f320e571000, 479232, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x108000) = 0x7f320e571000
344817 08:53:08.790030 mmap(0x7f320e5e6000, 102400, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x17c000) = 0x7f320e5e6000
344817 08:53:08.790047 mmap(0x7f320e5ff000, 1224, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_ANONYMOUS, -1, 0) = 0x7f320e5ff000
344817 08:53:08.790073 close(3)         = 0
344817 08:53:08.790089 openat(AT_FDCWD, "/usr/lib64/systemd/libpam.so.0", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.790114 openat(AT_FDCWD, "/lib64/libpam.so.0", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.790130 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0P:\0\0\0\0\0\0"..., 832) = 832
344817 08:53:08.790142 fstat(3, {st_mode=S_IFREG|0755, st_size=69608, ...}) = 0
344817 08:53:08.790153 mmap(NULL, 69640, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f320ee0d000
344817 08:53:08.790174 mmap(0x7f320ee10000, 36864, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x3000) = 0x7f320ee10000
344817 08:53:08.790202 mmap(0x7f320ee19000, 16384, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0xc000) = 0x7f320ee19000
344817 08:53:08.790220 mmap(0x7f320ee1d000, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0xf000) = 0x7f320ee1d000
344817 08:53:08.790243 close(3)         = 0
344817 08:53:08.790255 openat(AT_FDCWD, "/usr/lib64/systemd/libseccomp.so.2", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.790268 openat(AT_FDCWD, "/lib64/libseccomp.so.2", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.790281 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0\260#\0\0\0\0\0\0"..., 832) = 832
344817 08:53:08.790292 fstat(3, {st_mode=S_IFREG|0755, st_size=127680, ...}) = 0
344817 08:53:08.790303 mmap(NULL, 127040, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f320ebe0000
344817 08:53:08.790316 mprotect(0x7f320ebe2000, 114688, PROT_NONE) = 0
344817 08:53:08.790332 mmap(0x7f320ebe2000, 57344, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x2000) = 0x7f320ebe2000
344817 08:53:08.790345 mmap(0x7f320ebf0000, 53248, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x10000) = 0x7f320ebf0000
344817 08:53:08.790359 mmap(0x7f320ebfe000, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x1d000) = 0x7f320ebfe000
344817 08:53:08.790378 close(3)         = 0
344817 08:53:08.790389 openat(AT_FDCWD, "/usr/lib64/systemd/libselinux.so.1", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.790401 openat(AT_FDCWD, "/lib64/libselinux.so.1", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.790413 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0pp\0\0\0\0\0\0"..., 832) = 832
344817 08:53:08.790424 fstat(3, {st_mode=S_IFREG|0755, st_size=175752, ...}) = 0
344817 08:53:08.790437 mmap(NULL, 181896, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f320e43c000
344817 08:53:08.790449 mmap(0x7f320e442000, 110592, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x6000) = 0x7f320e442000
344817 08:53:08.790465 mmap(0x7f320e45d000, 32768, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x21000) = 0x7f320e45d000
344817 08:53:08.790479 mmap(0x7f320e465000, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x28000) = 0x7f320e465000
344817 08:53:08.790495 mmap(0x7f320e467000, 5768, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_ANONYMOUS, -1, 0) = 0x7f320e467000
344817 08:53:08.790511 close(3)         = 0
344817 08:53:08.790523 openat(AT_FDCWD, "/usr/lib64/systemd/libzstd.so.1", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.790536 openat(AT_FDCWD, "/lib64/libzstd.so.1", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.790549 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0\300^\0\0\0\0\0\0"..., 832) = 832
344817 08:53:08.790560 fstat(3, {st_mode=S_IFREG|0755, st_size=882376, ...}) = 0
344817 08:53:08.790571 mmap(NULL, 877168, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f320e365000
344817 08:53:08.790583 mprotect(0x7f320e36a000, 851968, PROT_NONE) = 0
344817 08:53:08.790597 mmap(0x7f320e36a000, 782336, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x5000) = 0x7f320e36a000
344817 08:53:08.790613 mmap(0x7f320e429000, 65536, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0xc4000) = 0x7f320e429000
344817 08:53:08.790627 mmap(0x7f320e43a000, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0xd4000) = 0x7f320e43a000
344817 08:53:08.790647 close(3)         = 0
344817 08:53:08.790660 openat(AT_FDCWD, "/usr/lib64/systemd/liblzma.so.5", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.790673 openat(AT_FDCWD, "/lib64/liblzma.so.5", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.790687 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0\3609\0\0\0\0\0\0"..., 832) = 832
344817 08:53:08.790702 fstat(3, {st_mode=S_IFREG|0755, st_size=178744, ...}) = 0
344817 08:53:08.790760 mmap(NULL, 176136, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f320e339000
344817 08:53:08.790777 mprotect(0x7f320e33c000, 159744, PROT_NONE) = 0
344817 08:53:08.790789 mmap(0x7f320e33c000, 110592, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x3000) = 0x7f320e33c000
344817 08:53:08.790803 mmap(0x7f320e357000, 45056, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x1e000) = 0x7f320e357000
344817 08:53:08.790820 mmap(0x7f320e363000, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x29000) = 0x7f320e363000
344817 08:53:08.790838 mmap(0x7f320e364000, 8, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_ANONYMOUS, -1, 0) = 0x7f320e364000
344817 08:53:08.790851 close(3)         = 0
344817 08:53:08.790862 openat(AT_FDCWD, "/usr/lib64/systemd/libm.so.6", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.790875 openat(AT_FDCWD, "/lib64/libm.so.6", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.790887 read(3, "\177ELF\2\1\1\3\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0\220\323\0\0\0\0\0\0"..., 832) = 832
344817 08:53:08.790899 fstat(3, {st_mode=S_IFREG|0755, st_size=912440, ...}) = 0
344817 08:53:08.790910 mmap(NULL, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7f320f39a000
344817 08:53:08.790923 mmap(NULL, 893184, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f320e25e000
344817 08:53:08.790936 mmap(0x7f320e26b000, 458752, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0xd000) = 0x7f320e26b000
344817 08:53:08.790952 mmap(0x7f320e2db000, 376832, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x7d000) = 0x7f320e2db000
344817 08:53:08.790966 mmap(0x7f320e337000, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0xd8000) = 0x7f320e337000
344817 08:53:08.790987 close(3)         = 0
344817 08:53:08.791001 openat(AT_FDCWD, "/usr/lib64/systemd/libattr.so.1", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.791018 openat(AT_FDCWD, "/lib64/libattr.so.1", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.791031 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0P%\0\0\0\0\0\0"..., 832) = 832
344817 08:53:08.791042 fstat(3, {st_mode=S_IFREG|0755, st_size=28552, ...}) = 0
344817 08:53:08.791053 mmap(NULL, 28688, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f320ebd8000
344817 08:53:08.791066 mmap(0x7f320ebda000, 12288, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x2000) = 0x7f320ebda000
344817 08:53:08.791084 mmap(0x7f320ebdd000, 4096, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x5000) = 0x7f320ebdd000
344817 08:53:08.791097 mmap(0x7f320ebde000, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x5000) = 0x7f320ebde000
344817 08:53:08.791112 mmap(0x7f320ebdf000, 16, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_ANONYMOUS, -1, 0) = 0x7f320ebdf000
344817 08:53:08.791129 close(3)         = 0
344817 08:53:08.791142 openat(AT_FDCWD, "/usr/lib64/systemd/libgpg-error.so.0", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.791155 openat(AT_FDCWD, "/lib64/libgpg-error.so.0", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.791168 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0PJ\0\0\0\0\0\0"..., 832) = 832
344817 08:53:08.791179 fstat(3, {st_mode=S_IFREG|0755, st_size=153600, ...}) = 0
344817 08:53:08.791194 mmap(NULL, 151952, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f320e238000
344817 08:53:08.791207 mprotect(0x7f320e23c000, 131072, PROT_NONE) = 0
344817 08:53:08.791221 mmap(0x7f320e23c000, 90112, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x4000) = 0x7f320e23c000
344817 08:53:08.791234 mmap(0x7f320e252000, 36864, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x1a000) = 0x7f320e252000
344817 08:53:08.791248 mmap(0x7f320e25c000, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x23000) = 0x7f320e25c000
344817 08:53:08.791268 close(3)         = 0
344817 08:53:08.791281 openat(AT_FDCWD, "/usr/lib64/systemd/libz.so.1", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.791293 openat(AT_FDCWD, "/lib64/libz.so.1", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.791306 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0\3605\0\0\0\0\0\0"..., 832) = 832
344817 08:53:08.791317 fstat(3, {st_mode=S_IFREG|0755, st_size=102552, ...}) = 0
344817 08:53:08.791328 mmap(NULL, 102408, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f320e21e000
344817 08:53:08.791341 mprotect(0x7f320e221000, 86016, PROT_NONE) = 0
344817 08:53:08.791358 mmap(0x7f320e221000, 57344, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x3000) = 0x7f320e221000
344817 08:53:08.791374 mmap(0x7f320e22f000, 24576, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x11000) = 0x7f320e22f000
344817 08:53:08.791386 mmap(0x7f320e236000, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x17000) = 0x7f320e236000
344817 08:53:08.791401 mmap(0x7f320e237000, 8, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_ANONYMOUS, -1, 0) = 0x7f320e237000
344817 08:53:08.791414 close(3)         = 0
344817 08:53:08.791428 openat(AT_FDCWD, "/usr/lib64/systemd/libffi.so.8", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.791441 openat(AT_FDCWD, "/lib64/libffi.so.8", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.791454 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0\220%\0\0\0\0\0\0"..., 832) = 832
344817 08:53:08.791465 fstat(3, {st_mode=S_IFREG|0755, st_size=44784, ...}) = 0
344817 08:53:08.791476 mmap(NULL, 46320, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f320ebcc000
344817 08:53:08.791488 mprotect(0x7f320ebce000, 32768, PROT_NONE) = 0
344817 08:53:08.791503 mmap(0x7f320ebce000, 24576, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x2000) = 0x7f320ebce000
344817 08:53:08.791521 mmap(0x7f320ebd4000, 4096, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x8000) = 0x7f320ebd4000
344817 08:53:08.791539 mmap(0x7f320ebd6000, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x9000) = 0x7f320ebd6000
344817 08:53:08.791560 close(3)         = 0
344817 08:53:08.791572 openat(AT_FDCWD, "/usr/lib64/systemd/libaudit.so.1", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.791585 openat(AT_FDCWD, "/lib64/libaudit.so.1", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.791598 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0\20<\0\0\0\0\0\0"..., 832) = 832
344817 08:53:08.791610 fstat(3, {st_mode=S_IFREG|0755, st_size=163464, ...}) = 0
344817 08:53:08.791621 mmap(NULL, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7f320f398000
344817 08:53:08.791634 mmap(NULL, 213168, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f320e1e9000
344817 08:53:08.791648 mprotect(0x7f320e1ec000, 147456, PROT_NONE) = 0
344817 08:53:08.791665 mmap(0x7f320e1ec000, 57344, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x3000) = 0x7f320e1ec000
344817 08:53:08.791678 mmap(0x7f320e1fa000, 86016, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x11000) = 0x7f320e1fa000
344817 08:53:08.791691 mmap(0x7f320e210000, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x26000) = 0x7f320e210000
344817 08:53:08.791707 mmap(0x7f320e212000, 45232, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_ANONYMOUS, -1, 0) = 0x7f320e212000
344817 08:53:08.791757 close(3)         = 0
344817 08:53:08.791773 openat(AT_FDCWD, "/usr/lib64/systemd/libeconf.so.0", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.791786 openat(AT_FDCWD, "/lib64/libeconf.so.0", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.791799 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0p&\0\0\0\0\0\0"..., 832) = 832
344817 08:53:08.791810 fstat(3, {st_mode=S_IFREG|0755, st_size=40520, ...}) = 0
344817 08:53:08.791821 mmap(NULL, 42032, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f320e1de000
344817 08:53:08.791835 mmap(0x7f320e1e0000, 20480, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x2000) = 0x7f320e1e0000
344817 08:53:08.791852 mmap(0x7f320e1e5000, 8192, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x7000) = 0x7f320e1e5000
344817 08:53:08.791866 mmap(0x7f320e1e7000, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x8000) = 0x7f320e1e7000
344817 08:53:08.791881 mmap(0x7f320e1e8000, 1072, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_ANONYMOUS, -1, 0) = 0x7f320e1e8000
344817 08:53:08.791894 close(3)         = 0
344817 08:53:08.791906 openat(AT_FDCWD, "/usr/lib64/systemd/libpcre2-8.so.0", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.791918 openat(AT_FDCWD, "/lib64/libpcre2-8.so.0", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.791931 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0\220$\0\0\0\0\0\0"..., 832) = 832
344817 08:53:08.791942 fstat(3, {st_mode=S_IFREG|0755, st_size=636848, ...}) = 0
344817 08:53:08.791953 mmap(NULL, 635440, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f320e142000
344817 08:53:08.791965 mmap(0x7f320e144000, 446464, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x2000) = 0x7f320e144000
344817 08:53:08.791980 mmap(0x7f320e1b1000, 176128, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x6f000) = 0x7f320e1b1000
344817 08:53:08.791993 mmap(0x7f320e1dc000, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x99000) = 0x7f320e1dc000
344817 08:53:08.792013 close(3)         = 0
344817 08:53:08.792030 openat(AT_FDCWD, "/usr/lib64/systemd/libcap-ng.so.0", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.792043 openat(AT_FDCWD, "/lib64/libcap-ng.so.0", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.792056 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0\20&\0\0\0\0\0\0"..., 832) = 832
344817 08:53:08.792067 fstat(3, {st_mode=S_IFREG|0755, st_size=32528, ...}) = 0
344817 08:53:08.792078 mmap(NULL, 32792, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f320ebc3000
344817 08:53:08.792091 mprotect(0x7f320ebc5000, 20480, PROT_NONE) = 0
344817 08:53:08.792105 mmap(0x7f320ebc5000, 12288, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x2000) = 0x7f320ebc5000
344817 08:53:08.792122 mmap(0x7f320ebc8000, 4096, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x5000) = 0x7f320ebc8000
344817 08:53:08.792135 mmap(0x7f320ebca000, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x6000) = 0x7f320ebca000
344817 08:53:08.792151 mmap(0x7f320ebcb000, 24, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_ANONYMOUS, -1, 0) = 0x7f320ebcb000
344817 08:53:08.792164 close(3)         = 0
344817 08:53:08.792191 mmap(NULL, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7f320ee0b000
344817 08:53:08.792230 mmap(NULL, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7f320ee09000
344817 08:53:08.792251 mmap(NULL, 12288, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7f320e13f000
344817 08:53:08.792267 arch_prctl(ARCH_SET_FS, 0x7f320e13fb40) = 0
344817 08:53:08.792277 set_tid_address(0x7f320e13fe10) = 344817
344817 08:53:08.792287 set_robust_list(0x7f320e13fe20, 24) = 0
344817 08:53:08.792297 rseq(0x7f320e1404e0, 0x20, 0, 0x53053053) = 0
344817 08:53:08.792351 mprotect(0x7f320edf5000, 16384, PROT_READ) = 0
344817 08:53:08.792377 mprotect(0x7f320ebca000, 4096, PROT_READ) = 0
344817 08:53:08.792405 mprotect(0x7f320e1dc000, 4096, PROT_READ) = 0
344817 08:53:08.792431 mprotect(0x7f320e1e7000, 4096, PROT_READ) = 0
344817 08:53:08.792468 mprotect(0x7f320e210000, 4096, PROT_READ) = 0
344817 08:53:08.792492 mprotect(0x7f320ebd6000, 4096, PROT_READ) = 0
344817 08:53:08.792516 mprotect(0x7f320e236000, 4096, PROT_READ) = 0
344817 08:53:08.792546 mprotect(0x7f320e25c000, 4096, PROT_READ) = 0
344817 08:53:08.792567 mprotect(0x7f320ebde000, 4096, PROT_READ) = 0
344817 08:53:08.792594 mprotect(0x7f320e337000, 4096, PROT_READ) = 0
344817 08:53:08.792630 mprotect(0x7f320e363000, 4096, PROT_READ) = 0
344817 08:53:08.792667 mprotect(0x7f320e43a000, 4096, PROT_READ) = 0
344817 08:53:08.792705 mprotect(0x7f320e465000, 4096, PROT_READ) = 0
344817 08:53:08.792735 mprotect(0x7f320ebfe000, 4096, PROT_READ) = 0
344817 08:53:08.792764 mprotect(0x7f320ee1d000, 4096, PROT_READ) = 0
344817 08:53:08.792873 mprotect(0x7f320e5e6000, 49152, PROT_READ) = 0
344817 08:53:08.793174 mprotect(0x7f320eb46000, 487424, PROT_READ) = 0
344817 08:53:08.793224 mprotect(0x7f320f3f5000, 20480, PROT_READ) = 0
344817 08:53:08.793292 mprotect(0x7f320ee62000, 8192, PROT_READ) = 0
344817 08:53:08.793316 mprotect(0x7f320ee87000, 4096, PROT_READ) = 0
344817 08:53:08.793336 mprotect(0x7f320f41f000, 4096, PROT_READ) = 0
344817 08:53:08.793380 mprotect(0x7f320f3b6000, 4096, PROT_READ) = 0
344817 08:53:08.793429 mprotect(0x7f320efbc000, 20480, PROT_READ) = 0
344817 08:53:08.793451 mprotect(0x7f320eff6000, 4096, PROT_READ) = 0
344817 08:53:08.793471 mprotect(0x7f320f3c2000, 4096, PROT_READ) = 0
344817 08:53:08.793494 mprotect(0x7f320f404000, 4096, PROT_READ) = 0
344817 08:53:08.793981 mprotect(0x7f320f377000, 118784, PROT_READ) = 0
344817 08:53:08.794059 mprotect(0x555b4c670000, 16384, PROT_READ) = 0
344817 08:53:08.794076 mprotect(0x7f320f45e000, 8192, PROT_READ) = 0
344817 08:53:08.794101 prlimit64(0, RLIMIT_STACK, NULL, {rlim_cur=8192*1024, rlim_max=RLIM64_INFINITY}) = 0
344817 08:53:08.794124 munmap(0x7f320f421000, 26763) = 0
344817 08:53:08.794151 openat(AT_FDCWD, "/proc/sys/kernel/cap_last_cap", O_RDONLY) = 3
344817 08:53:08.794171 fstatfs(3, {f_type=PROC_SUPER_MAGIC, f_bsize=4096, f_blocks=0, f_bfree=0, f_bavail=0, f_files=0, f_ffree=0, f_fsid={val=[0, 0]}, f_namelen=255, f_frsize=4096, f_flags=ST_VALID|ST_NOSUID|ST_NODEV|ST_NOEXEC|ST_RELATIME}) = 0
344817 08:53:08.794187 read(3, "40\n", 7) = 3
344817 08:53:08.794208 close(3)         = 0
344817 08:53:08.794237 getrandom("\x3f\x06\x44\x7d\xa5\xe0\xc6\x4d", 8, GRND_NONBLOCK) = 8
344817 08:53:08.794251 brk(NULL)        = 0x555b4e4d3000
344817 08:53:08.794261 brk(0x555b4e4f4000) = 0x555b4e4f4000
344817 08:53:08.794292 statfs("/sys/fs/selinux", {f_type=SYSFS_MAGIC, f_bsize=4096, f_blocks=0, f_bfree=0, f_bavail=0, f_files=0, f_ffree=0, f_fsid={val=[0, 0]}, f_namelen=255, f_frsize=4096, f_flags=ST_VALID|ST_NOSUID|ST_NODEV|ST_NOEXEC|ST_RELATIME}) = 0
344817 08:53:08.794310 statfs("/selinux", 0x7ffc881c68b0) = -1 ENOENT (No such file or directory)
344817 08:53:08.794333 openat(AT_FDCWD, "/proc/filesystems", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.794349 fstat(3, {st_mode=S_IFREG|0444, st_size=0, ...}) = 0
344817 08:53:08.794362 read(3, "nodev\tsysfs\nnodev\ttmpfs\nnodev\tbd"..., 1024) = 381
344817 08:53:08.794382 close(3)         = 0
344817 08:53:08.794393 openat(AT_FDCWD, "/proc/mounts", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.794412 fstat(3, {st_mode=S_IFREG|0444, st_size=0, ...}) = 0
344817 08:53:08.794423 read(3, "proc /proc proc rw,nosuid,nodev,"..., 1024) = 1024
344817 08:53:08.794455 read(3, "lbfs rw,relatime,pagesize=2M 0 0"..., 1024) = 1024
344817 08:53:08.794486 read(3, "r2,inode64,logbufs=8,logbsize=32"..., 1024) = 1021
344817 08:53:08.794510 read(3, "", 1024) = 0
344817 08:53:08.794520 close(3)         = 0
344817 08:53:08.794531 access("/etc/selinux/config", F_OK) = 0
344817 08:53:08.794632 access("/etc/gcrypt/fips_enabled", F_OK) = -1 ENOENT (No such file or directory)
344817 08:53:08.794650 openat(AT_FDCWD, "/proc/sys/crypto/fips_enabled", O_RDONLY) = 3
344817 08:53:08.794665 fstat(3, {st_mode=S_IFREG|0444, st_size=0, ...}) = 0
344817 08:53:08.794677 read(3, "0\n", 1024) = 2
344817 08:53:08.794689 close(3)         = 0
344817 08:53:08.794708 prctl(PR_CAPBSET_READ, CAP_MAC_OVERRIDE) = 1
344817 08:53:08.794731 prctl(PR_CAPBSET_READ, 0x30 /* CAP_??? */) = -1 EINVAL (Invalid argument)
344817 08:53:08.794742 prctl(PR_CAPBSET_READ, CAP_CHECKPOINT_RESTORE) = 1
344817 08:53:08.794752 prctl(PR_CAPBSET_READ, 0x2c /* CAP_??? */) = -1 EINVAL (Invalid argument)
344817 08:53:08.794762 prctl(PR_CAPBSET_READ, 0x2a /* CAP_??? */) = -1 EINVAL (Invalid argument)
344817 08:53:08.794772 prctl(PR_CAPBSET_READ, 0x29 /* CAP_??? */) = -1 EINVAL (Invalid argument)
344817 08:53:08.794796 openat(AT_FDCWD, "/usr/lib/locale/locale-archive", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.794811 openat(AT_FDCWD, "/usr/share/locale/locale.alias", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.794824 fstat(3, {st_mode=S_IFREG|0644, st_size=2998, ...}) = 0
344817 08:53:08.794837 read(3, "# Locale name alias data base.\n#"..., 4096) = 2998
344817 08:53:08.794857 read(3, "", 4096) = 0
344817 08:53:08.794867 close(3)         = 0
344817 08:53:08.794885 openat(AT_FDCWD, "/usr/lib/locale/en_US.UTF-8/LC_IDENTIFICATION", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.794897 openat(AT_FDCWD, "/usr/lib/locale/en_US.utf8/LC_IDENTIFICATION", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.794911 fstat(3, {st_mode=S_IFREG|0644, st_size=369, ...}) = 0
344817 08:53:08.794926 mmap(NULL, 369, PROT_READ, MAP_PRIVATE, 3, 0) = 0x7f320f427000
344817 08:53:08.794946 close(3)         = 0
344817 08:53:08.794960 openat(AT_FDCWD, "/usr/lib64/gconv/gconv-modules.cache", O_RDONLY) = 3
344817 08:53:08.794972 fstat(3, {st_mode=S_IFREG|0644, st_size=26988, ...}) = 0
344817 08:53:08.794983 mmap(NULL, 26988, PROT_READ, MAP_SHARED, 3, 0) = 0x7f320e138000
344817 08:53:08.794997 close(3)         = 0
344817 08:53:08.795008 futex(0x7f320edfaa6c, FUTEX_WAKE_PRIVATE, 2147483647) = 0
344817 08:53:08.795024 openat(AT_FDCWD, "/usr/lib/locale/en_US.UTF-8/LC_MEASUREMENT", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.795037 openat(AT_FDCWD, "/usr/lib/locale/en_US.utf8/LC_MEASUREMENT", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.795048 fstat(3, {st_mode=S_IFREG|0644, st_size=23, ...}) = 0
344817 08:53:08.795059 mmap(NULL, 23, PROT_READ, MAP_PRIVATE, 3, 0) = 0x7f320f426000
344817 08:53:08.795072 close(3)         = 0
344817 08:53:08.795086 openat(AT_FDCWD, "/usr/lib/locale/en_US.UTF-8/LC_TELEPHONE", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.795098 openat(AT_FDCWD, "/usr/lib/locale/en_US.utf8/LC_TELEPHONE", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.795109 fstat(3, {st_mode=S_IFREG|0644, st_size=59, ...}) = 0
344817 08:53:08.795120 mmap(NULL, 59, PROT_READ, MAP_PRIVATE, 3, 0) = 0x7f320f425000
344817 08:53:08.795132 close(3)         = 0
344817 08:53:08.795146 openat(AT_FDCWD, "/usr/lib/locale/en_US.UTF-8/LC_ADDRESS", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.795158 openat(AT_FDCWD, "/usr/lib/locale/en_US.utf8/LC_ADDRESS", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.795169 fstat(3, {st_mode=S_IFREG|0644, st_size=167, ...}) = 0
344817 08:53:08.795180 mmap(NULL, 167, PROT_READ, MAP_PRIVATE, 3, 0) = 0x7f320f424000
344817 08:53:08.795191 close(3)         = 0
344817 08:53:08.795207 openat(AT_FDCWD, "/usr/lib/locale/en_US.UTF-8/LC_NAME", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.795219 openat(AT_FDCWD, "/usr/lib/locale/en_US.utf8/LC_NAME", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.795231 fstat(3, {st_mode=S_IFREG|0644, st_size=77, ...}) = 0
344817 08:53:08.795242 mmap(NULL, 77, PROT_READ, MAP_PRIVATE, 3, 0) = 0x7f320f423000
344817 08:53:08.795253 close(3)         = 0
344817 08:53:08.795266 openat(AT_FDCWD, "/usr/lib/locale/en_US.UTF-8/LC_PAPER", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.795278 openat(AT_FDCWD, "/usr/lib/locale/en_US.utf8/LC_PAPER", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.795289 fstat(3, {st_mode=S_IFREG|0644, st_size=34, ...}) = 0
344817 08:53:08.795301 mmap(NULL, 34, PROT_READ, MAP_PRIVATE, 3, 0) = 0x7f320f422000
344817 08:53:08.795315 close(3)         = 0
344817 08:53:08.795329 openat(AT_FDCWD, "/usr/lib/locale/en_US.UTF-8/LC_MESSAGES", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.795340 openat(AT_FDCWD, "/usr/lib/locale/en_US.utf8/LC_MESSAGES", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.795353 fstat(3, {st_mode=S_IFDIR|0755, st_size=29, ...}) = 0
344817 08:53:08.795364 close(3)         = 0
344817 08:53:08.795374 openat(AT_FDCWD, "/usr/lib/locale/en_US.utf8/LC_MESSAGES/SYS_LC_MESSAGES", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.795386 fstat(3, {st_mode=S_IFREG|0644, st_size=57, ...}) = 0
344817 08:53:08.795397 mmap(NULL, 57, PROT_READ, MAP_PRIVATE, 3, 0) = 0x7f320f421000
344817 08:53:08.795409 close(3)         = 0
344817 08:53:08.795422 openat(AT_FDCWD, "/usr/lib/locale/en_US.UTF-8/LC_MONETARY", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.795434 openat(AT_FDCWD, "/usr/lib/locale/en_US.utf8/LC_MONETARY", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.795445 fstat(3, {st_mode=S_IFREG|0644, st_size=286, ...}) = 0
344817 08:53:08.795456 mmap(NULL, 286, PROT_READ, MAP_PRIVATE, 3, 0) = 0x7f320f397000
344817 08:53:08.795468 close(3)         = 0
344817 08:53:08.795482 openat(AT_FDCWD, "/usr/lib/locale/en_US.UTF-8/LC_COLLATE", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.795494 openat(AT_FDCWD, "/usr/lib/locale/en_US.utf8/LC_COLLATE", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.795506 fstat(3, {st_mode=S_IFREG|0644, st_size=2586930, ...}) = 0
344817 08:53:08.795517 mmap(NULL, 2586930, PROT_READ, MAP_PRIVATE, 3, 0) = 0x7f320de00000
344817 08:53:08.795529 close(3)         = 0
344817 08:53:08.795547 openat(AT_FDCWD, "/usr/lib/locale/en_US.UTF-8/LC_TIME", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.795559 openat(AT_FDCWD, "/usr/lib/locale/en_US.utf8/LC_TIME", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.795571 fstat(3, {st_mode=S_IFREG|0644, st_size=3284, ...}) = 0
344817 08:53:08.795581 mmap(NULL, 3284, PROT_READ, MAP_PRIVATE, 3, 0) = 0x7f320ee08000
344817 08:53:08.795593 close(3)         = 0
344817 08:53:08.795609 openat(AT_FDCWD, "/usr/lib/locale/en_US.UTF-8/LC_NUMERIC", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.795620 openat(AT_FDCWD, "/usr/lib/locale/en_US.utf8/LC_NUMERIC", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.795632 fstat(3, {st_mode=S_IFREG|0644, st_size=54, ...}) = 0
344817 08:53:08.795643 mmap(NULL, 54, PROT_READ, MAP_PRIVATE, 3, 0) = 0x7f320e137000
344817 08:53:08.795655 close(3)         = 0
344817 08:53:08.795668 openat(AT_FDCWD, "/usr/lib/locale/en_US.UTF-8/LC_CTYPE", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344817 08:53:08.795680 openat(AT_FDCWD, "/usr/lib/locale/en_US.utf8/LC_CTYPE", O_RDONLY|O_CLOEXEC) = 3
344817 08:53:08.795693 fstat(3, {st_mode=S_IFREG|0644, st_size=346132, ...}) = 0
344817 08:53:08.795704 mmap(NULL, 346132, PROT_READ, MAP_PRIVATE, 3, 0) = 0x7f320e0e2000
344817 08:53:08.795735 close(3)         = 0
344817 08:53:08.795762 getpid()         = 344817
344817 08:53:08.795783 prlimit64(0, RLIMIT_NOFILE, {rlim_cur=512*1024, rlim_max=512*1024}, NULL) = 0
344817 08:53:08.795797 rt_sigaction(SIGBUS, {sa_handler=0x7f320f1d82a0, sa_mask=[], sa_flags=SA_RESTORER|SA_SIGINFO, sa_restorer=0x7f320ec3e730}, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=0}, 8) = 0
344817 08:53:08.795816 statfs("/proc/", {f_type=PROC_SUPER_MAGIC, f_bsize=4096, f_blocks=0, f_bfree=0, f_bavail=0, f_files=0, f_ffree=0, f_fsid={val=[0, 0]}, f_namelen=255, f_frsize=4096, f_flags=ST_VALID|ST_NOSUID|ST_NODEV|ST_NOEXEC|ST_RELATIME}) = 0
344817 08:53:08.795841 newfstatat(AT_FDCWD, "/proc/1/root", {st_mode=S_IFDIR|0555, st_size=4096, ...}, 0) = 0
344817 08:53:08.795858 newfstatat(AT_FDCWD, "/", {st_mode=S_IFDIR|0555, st_size=4096, ...}, 0) = 0
344817 08:53:08.795878 faccessat2(AT_FDCWD, "/run/systemd/system/", F_OK, AT_SYMLINK_NOFOLLOW) = 0
344817 08:53:08.795893 geteuid()        = 0
344817 08:53:08.795920 socket(AF_UNIX, SOCK_STREAM|SOCK_CLOEXEC|SOCK_NONBLOCK, 0) = 3
344817 08:53:08.795979 getsockopt(3, SOL_SOCKET, SO_RCVBUF, [212992], [4]) = 0
344817 08:53:08.795997 setsockopt(3, SOL_SOCKET, SO_RCVBUF, [8388608], 4) = 0
344817 08:53:08.796010 getsockopt(3, SOL_SOCKET, SO_RCVBUF, [425984], [4]) = 0
344817 08:53:08.796021 setsockopt(3, SOL_SOCKET, SO_RCVBUFFORCE, [8388608], 4) = 0
344817 08:53:08.796033 getsockopt(3, SOL_SOCKET, SO_SNDBUF, [212992], [4]) = 0
344817 08:53:08.796044 setsockopt(3, SOL_SOCKET, SO_SNDBUF, [8388608], 4) = 0
344817 08:53:08.796055 getsockopt(3, SOL_SOCKET, SO_SNDBUF, [425984], [4]) = 0
344817 08:53:08.796067 setsockopt(3, SOL_SOCKET, SO_SNDBUFFORCE, [8388608], 4) = 0
344817 08:53:08.796078 connect(3, {sa_family=AF_UNIX, sun_path="/run/systemd/private"}, 23) = 0
344817 08:53:08.796114 getsockopt(3, SOL_SOCKET, SO_PEERCRED, {pid=1, uid=0, gid=0}, [12]) = 0
344817 08:53:08.796128 getsockopt(3, SOL_SOCKET, SO_PEERSEC, "kernel\0", [64 => 7]) = 0
344817 08:53:08.796142 getsockopt(3, SOL_SOCKET, SO_PEERGROUPS, 0x555b4e4d93b0, [256 => 0]) = 0
344817 08:53:08.796172 fstat(3, {st_mode=S_IFSOCK|0777, st_size=0, ...}) = 0
344817 08:53:08.796184 getsockopt(3, SOL_SOCKET, SO_ACCEPTCONN, [0], [4]) = 0
344817 08:53:08.796200 getsockname(3, {sa_family=AF_UNIX}, [128 => 2]) = 0
344817 08:53:08.796220 sendmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="\0AUTH EXTERNAL\r\nDATA\r\n", iov_len=22}, {iov_base="NEGOTIATE_UNIX_FD\r\n", iov_len=19}, {iov_base="BEGIN\r\n", iov_len=7}], msg_iovlen=3, msg_controllen=0, msg_flags=0}, MSG_DONTWAIT|MSG_NOSIGNAL) = 48
344817 08:53:08.796242 getsockopt(3, SOL_SOCKET, SO_PEERCRED, {pid=1, uid=0, gid=0}, [12]) = 0
344817 08:53:08.796257 ioctl(0, TCGETS, {B38400 opost isig icanon echo ...}) = 0
344817 08:53:08.796274 gettid()         = 344817
344817 08:53:08.796286 rt_sigprocmask(SIG_SETMASK, ~[RTMIN RT_1], [], 8) = 0
344817 08:53:08.796300 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f320e13fe10) = 344818
344817 08:53:08.796523 rt_sigprocmask(SIG_SETMASK, [], NULL, 8) = 0
344817 08:53:08.796536 geteuid()        = 0
344817 08:53:08.796602 getrandom("\x6d\x92\x4d\x81\xb6\x88\xe5\x5a\x87\xb1\x86\xf0\xc1\x16\x86\xae", 16, GRND_INSECURE) = 16
344817 08:53:08.796615 futex(0x7f320f3954e4, FUTEX_WAKE_PRIVATE, 2147483647) = 0
344817 08:53:08.796644 recvmsg(3, {msg_namelen=0}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = -1 EAGAIN (Resource temporarily unavailable)
344817 08:53:08.796659 ppoll([{fd=3, events=POLLIN}], 1, {tv_sec=89, tv_nsec=999512000}, NULL, 8 <unfinished ...>
344818 08:53:08.796681 set_robust_list(0x7f320e13fe20, 24) = 0
344818 08:53:08.796736 prctl(PR_SET_NAME, "(sd-askpwagent)"...) = 0
344818 08:53:08.796758 geteuid()        = 0
344818 08:53:08.796771 mmap(NULL, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7f320e0e1000
344818 08:53:08.796788 prctl(PR_SET_MM, PR_SET_MM_ARG_START, 0x7f320e0e1000, 0, 0) = 0
344818 08:53:08.796800 prctl(PR_SET_MM, PR_SET_MM_ARG_END, 0x7f320e0e1010, 0, 0) = 0
344818 08:53:08.796810 prctl(PR_SET_PDEATHSIG, SIGTERM) = 0
344818 08:53:08.796824 rt_sigaction(SIGHUP, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.796836 rt_sigaction(SIGINT, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.796847 rt_sigaction(SIGQUIT, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.796858 rt_sigaction(SIGILL, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.796869 rt_sigaction(SIGTRAP, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.796879 rt_sigaction(SIGABRT, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.796890 rt_sigaction(SIGBUS, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.796903 rt_sigaction(SIGFPE, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.796914 rt_sigaction(SIGUSR1, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.796925 rt_sigaction(SIGSEGV, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.796936 rt_sigaction(SIGUSR2, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.796947 rt_sigaction(SIGPIPE, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.796958 rt_sigaction(SIGALRM, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.796968 rt_sigaction(SIGTERM, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.796979 rt_sigaction(SIGSTKFLT, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.796990 rt_sigaction(SIGCHLD, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797001 rt_sigaction(SIGCONT, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797012 rt_sigaction(SIGTSTP, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797023 rt_sigaction(SIGTTIN, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797033 rt_sigaction(SIGTTOU, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797044 rt_sigaction(SIGURG, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797055 rt_sigaction(SIGXCPU, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797066 rt_sigaction(SIGXFSZ, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797076 rt_sigaction(SIGVTALRM, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797087 rt_sigaction(SIGPROF, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797098 rt_sigaction(SIGWINCH, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797109 rt_sigaction(SIGIO, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797119 rt_sigaction(SIGPWR, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797130 rt_sigaction(SIGSYS, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797143 rt_sigaction(SIGRT_2, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797154 rt_sigaction(SIGRT_3, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797165 rt_sigaction(SIGRT_4, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797176 rt_sigaction(SIGRT_5, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797187 rt_sigaction(SIGRT_6, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797199 rt_sigaction(SIGRT_7, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797210 rt_sigaction(SIGRT_8, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797221 rt_sigaction(SIGRT_9, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797232 rt_sigaction(SIGRT_10, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797243 rt_sigaction(SIGRT_11, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797253 rt_sigaction(SIGRT_12, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797264 rt_sigaction(SIGRT_13, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797275 rt_sigaction(SIGRT_14, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344817 08:53:08.797290 <... ppoll resumed>) = 1 ([{fd=3, revents=POLLIN}], left {tv_sec=89, tv_nsec=998891850})
344817 08:53:08.797301 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="DATA\r\nOK 87c1fb9c8d384c45b21866e"..., iov_len=256}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 58
344817 08:53:08.797328 sendmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="l\1\4\1 \0\0\0\1\0\0\0\240\0\0\0\1\1o\0\31\0\0\0/org/fre"..., iov_len=176}, {iov_base="\r\0\0\0dhcpd.service\0\0\0\7\0\0\0replace\0", iov_len=32}], msg_iovlen=2, msg_controllen=0, msg_flags=0}, MSG_DONTWAIT|MSG_NOSIGNAL) = 208
344817 08:53:08.797353 recvmsg(3, {msg_namelen=0}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = -1 EAGAIN (Resource temporarily unavailable)
344817 08:53:08.797370 ppoll([{fd=3, events=POLLIN}], 1, {tv_sec=24, tv_nsec=999984000}, NULL, 8 <unfinished ...>
344818 08:53:08.797383 rt_sigaction(SIGRT_15, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797399 rt_sigaction(SIGRT_16, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797410 rt_sigaction(SIGRT_17, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797422 rt_sigaction(SIGRT_18, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797433 rt_sigaction(SIGRT_19, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797444 rt_sigaction(SIGRT_20, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797455 rt_sigaction(SIGRT_21, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797466 rt_sigaction(SIGRT_22, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797477 rt_sigaction(SIGRT_23, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797488 rt_sigaction(SIGRT_24, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797499 rt_sigaction(SIGRT_25, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797509 rt_sigaction(SIGRT_26, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797521 rt_sigaction(SIGRT_27, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797534 rt_sigaction(SIGRT_28, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797545 rt_sigaction(SIGRT_29, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797556 rt_sigaction(SIGRT_30, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797567 rt_sigaction(SIGRT_31, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797578 rt_sigaction(SIGRT_32, {sa_handler=SIG_DFL, sa_mask=[], sa_flags=SA_RESTORER|SA_RESTART, sa_restorer=0x7f320ec3e730}, NULL, 8) = 0
344818 08:53:08.797591 rt_sigprocmask(SIG_SETMASK, [], NULL, 8) = 0
344818 08:53:08.797602 getppid()        = 344817
344818 08:53:08.797613 close_range(3, 4294967295, 0) = 0
344818 08:53:08.797625 getpid()         = 344818
344818 08:53:08.797641 ioctl(1, TCGETS, {B38400 opost isig icanon echo ...}) = 0
344818 08:53:08.797655 ioctl(2, TCGETS, {B38400 opost isig icanon echo ...}) = 0
344818 08:53:08.797666 prlimit64(0, RLIMIT_NOFILE, NULL, {rlim_cur=512*1024, rlim_max=512*1024}) = 0
344818 08:53:08.797678 prlimit64(0, RLIMIT_NOFILE, {rlim_cur=1024, rlim_max=512*1024}, NULL) = 0
344818 08:53:08.797689 execve("/usr/bin/systemd-tty-ask-password-agent", ["/usr/bin/systemd-tty-ask-passwor"..., "--watch"], 0x7ffc881c6a58 /* 23 vars */ <unfinished ...>
344817 08:53:08.797914 <... ppoll resumed>) = 1 ([{fd=3, revents=POLLIN}], left {tv_sec=24, tv_nsec=999453741})
344817 08:53:08.797930 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="l\4\1\1C\3\0\0\1\0\0\0\266\0\0\0\1\1o\0.\0\0\0", iov_len=24}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 24
344817 08:53:08.797948 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="/org/freedesktop/systemd1/unit/d"..., iov_len=1011}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 1011
344817 08:53:08.797967 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="l\4\1\1\320\3\0\0\2\0\0\0\266\0\0\0\1\1o\0.\0\0\0", iov_len=24}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 24
344817 08:53:08.797980 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="/org/freedesktop/systemd1/unit/d"..., iov_len=1152}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 1152
344817 08:53:08.797998 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="l\4\1\1B\0\0\0\3\0\0\0\231\0\0\0\1\1o\0\31\0\0\0", iov_len=24}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 24
344817 08:53:08.798011 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="/org/freedesktop/systemd1\0\0\0\0\0\0\0"..., iov_len=218}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 218
344817 08:53:08.798027 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="l\2\1\1+\0\0\0\4\0\0\0007\0\0\0\5\1u\0\1\0\0\0", iov_len=24}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 24
344817 08:53:08.798040 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="\7\1s\0\30\0\0\0org.freedesktop.systemd1"..., iov_len=91}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 91
344817 08:53:08.798061 sendmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="l\1\4\1\22\0\0\0\2\0\0\0\227\0\0\0\1\1o\0\31\0\0\0/org/fre"..., iov_len=168}, {iov_base="\r\0\0\0dhcpd.service\0", iov_len=18}], msg_iovlen=2, msg_controllen=0, msg_flags=0}, MSG_DONTWAIT|MSG_NOSIGNAL) = 186
344817 08:53:08.798078 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="l\4\1\1C\3\0\0\5\0\0\0\266\0\0\0\1\1o\0.\0\0\0", iov_len=24}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 24
344817 08:53:08.798101 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="/org/freedesktop/systemd1/unit/d"..., iov_len=1011}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 1011
344817 08:53:08.798123 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="l\4\1\1\320\3\0\0\6\0\0\0\266\0\0\0\1\1o\0.\0\0\0", iov_len=24}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 24
344817 08:53:08.798259 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="/org/freedesktop/systemd1/unit/d"..., iov_len=1152}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 1152
344817 08:53:08.798278 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="l\4\1\1C\3\0\0\7\0\0\0\266\0\0\0\1\1o\0.\0\0\0", iov_len=24}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 24
344817 08:53:08.798294 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="/org/freedesktop/systemd1/unit/d"..., iov_len=1011}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 1011
344817 08:53:08.798311 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="l\4\1\1\340\3\0\0\10\0\0\0\266\0\0\0\1\1o\0.\0\0\0", iov_len=24}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 24
344817 08:53:08.798326 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="/org/freedesktop/systemd1/unit/d"..., iov_len=1168}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 1168
344817 08:53:08.798341 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="l\4\1\1H\0\0\0\t\0\0\0\256\0\0\0\1\1o\0&\0\0\0", iov_len=24}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 24
344817 08:53:08.798356 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="/org/freedesktop/systemd1/job/13"..., iov_len=240}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 240
344817 08:53:08.798373 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="l\2\1\0013\0\0\0\n\0\0\0007\0\0\0\5\1u\0\2\0\0\0", iov_len=24}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 24
344817 08:53:08.798388 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="\7\1s\0\30\0\0\0org.freedesktop.systemd1"..., iov_len=99}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 99
344817 08:53:08.798409 sendmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="l\1\4\19\0\0\0\3\0\0\0\240\0\0\0\1\1o\0.\0\0\0/org/fre"..., iov_len=176}, {iov_base="\35\0\0\0org.freedesktop.systemd1.Uni"..., iov_len=57}], msg_iovlen=2, msg_controllen=0, msg_flags=0}, MSG_DONTWAIT|MSG_NOSIGNAL) = 233
344817 08:53:08.798428 recvmsg(3, {msg_namelen=0}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = -1 EAGAIN (Resource temporarily unavailable)
344817 08:53:08.798442 ppoll([{fd=3, events=POLLIN}], 1, {tv_sec=24, tv_nsec=999986000}, NULL, 8 <unfinished ...>
344818 08:53:08.798453 <... execve resumed>) = 0
344818 08:53:08.798471 brk(NULL)        = 0x55de7c1d9000
344818 08:53:08.798570 arch_prctl(0x3001 /* ARCH_??? */, 0x7ffd2f69ee00) = -1 EINVAL (Invalid argument)
344818 08:53:08.798596 mmap(NULL, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7f63734c6000
344818 08:53:08.798615 access("/etc/ld.so.preload", R_OK) = -1 ENOENT (No such file or directory)
344818 08:53:08.798636 openat(AT_FDCWD, "/usr/lib64/systemd/glibc-hwcaps/x86-64-v4/libsystemd-shared-252.so", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.798655 newfstatat(AT_FDCWD, "/usr/lib64/systemd/glibc-hwcaps/x86-64-v4", 0x7ffd2f69e030, 0) = -1 ENOENT (No such file or directory)
344818 08:53:08.798674 openat(AT_FDCWD, "/usr/lib64/systemd/glibc-hwcaps/x86-64-v3/libsystemd-shared-252.so", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.798699 newfstatat(AT_FDCWD, "/usr/lib64/systemd/glibc-hwcaps/x86-64-v3", 0x7ffd2f69e030, 0) = -1 ENOENT (No such file or directory)
344818 08:53:08.798711 openat(AT_FDCWD, "/usr/lib64/systemd/glibc-hwcaps/x86-64-v2/libsystemd-shared-252.so", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.798749 newfstatat(AT_FDCWD, "/usr/lib64/systemd/glibc-hwcaps/x86-64-v2", 0x7ffd2f69e030, 0) = -1 ENOENT (No such file or directory)
344818 08:53:08.798761 openat(AT_FDCWD, "/usr/lib64/systemd/tls/haswell/avx512_1/x86_64/libsystemd-shared-252.so", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.798773 newfstatat(AT_FDCWD, "/usr/lib64/systemd/tls/haswell/avx512_1/x86_64", 0x7ffd2f69e030, 0) = -1 ENOENT (No such file or directory)
344818 08:53:08.798784 openat(AT_FDCWD, "/usr/lib64/systemd/tls/haswell/avx512_1/libsystemd-shared-252.so", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.798796 newfstatat(AT_FDCWD, "/usr/lib64/systemd/tls/haswell/avx512_1", 0x7ffd2f69e030, 0) = -1 ENOENT (No such file or directory)
344818 08:53:08.798807 openat(AT_FDCWD, "/usr/lib64/systemd/tls/haswell/x86_64/libsystemd-shared-252.so", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.798819 newfstatat(AT_FDCWD, "/usr/lib64/systemd/tls/haswell/x86_64", 0x7ffd2f69e030, 0) = -1 ENOENT (No such file or directory)
344818 08:53:08.798830 openat(AT_FDCWD, "/usr/lib64/systemd/tls/haswell/libsystemd-shared-252.so", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.798842 newfstatat(AT_FDCWD, "/usr/lib64/systemd/tls/haswell", 0x7ffd2f69e030, 0) = -1 ENOENT (No such file or directory)
344818 08:53:08.798854 openat(AT_FDCWD, "/usr/lib64/systemd/tls/avx512_1/x86_64/libsystemd-shared-252.so", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.798865 newfstatat(AT_FDCWD, "/usr/lib64/systemd/tls/avx512_1/x86_64", 0x7ffd2f69e030, 0) = -1 ENOENT (No such file or directory)
344818 08:53:08.798877 openat(AT_FDCWD, "/usr/lib64/systemd/tls/avx512_1/libsystemd-shared-252.so", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.798888 newfstatat(AT_FDCWD, "/usr/lib64/systemd/tls/avx512_1", 0x7ffd2f69e030, 0) = -1 ENOENT (No such file or directory)
344818 08:53:08.798900 openat(AT_FDCWD, "/usr/lib64/systemd/tls/x86_64/libsystemd-shared-252.so", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.798911 newfstatat(AT_FDCWD, "/usr/lib64/systemd/tls/x86_64", 0x7ffd2f69e030, 0) = -1 ENOENT (No such file or directory)
344818 08:53:08.798922 openat(AT_FDCWD, "/usr/lib64/systemd/tls/libsystemd-shared-252.so", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.798934 newfstatat(AT_FDCWD, "/usr/lib64/systemd/tls", 0x7ffd2f69e030, 0) = -1 ENOENT (No such file or directory)
344818 08:53:08.798945 openat(AT_FDCWD, "/usr/lib64/systemd/haswell/avx512_1/x86_64/libsystemd-shared-252.so", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.798957 newfstatat(AT_FDCWD, "/usr/lib64/systemd/haswell/avx512_1/x86_64", 0x7ffd2f69e030, 0) = -1 ENOENT (No such file or directory)
344818 08:53:08.798969 openat(AT_FDCWD, "/usr/lib64/systemd/haswell/avx512_1/libsystemd-shared-252.so", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.798980 newfstatat(AT_FDCWD, "/usr/lib64/systemd/haswell/avx512_1", 0x7ffd2f69e030, 0) = -1 ENOENT (No such file or directory)
344818 08:53:08.798991 openat(AT_FDCWD, "/usr/lib64/systemd/haswell/x86_64/libsystemd-shared-252.so", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.799003 newfstatat(AT_FDCWD, "/usr/lib64/systemd/haswell/x86_64", 0x7ffd2f69e030, 0) = -1 ENOENT (No such file or directory)
344818 08:53:08.799014 openat(AT_FDCWD, "/usr/lib64/systemd/haswell/libsystemd-shared-252.so", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.799030 newfstatat(AT_FDCWD, "/usr/lib64/systemd/haswell", 0x7ffd2f69e030, 0) = -1 ENOENT (No such file or directory)
344818 08:53:08.799041 openat(AT_FDCWD, "/usr/lib64/systemd/avx512_1/x86_64/libsystemd-shared-252.so", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.799053 newfstatat(AT_FDCWD, "/usr/lib64/systemd/avx512_1/x86_64", 0x7ffd2f69e030, 0) = -1 ENOENT (No such file or directory)
344818 08:53:08.799064 openat(AT_FDCWD, "/usr/lib64/systemd/avx512_1/libsystemd-shared-252.so", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.799076 newfstatat(AT_FDCWD, "/usr/lib64/systemd/avx512_1", 0x7ffd2f69e030, 0) = -1 ENOENT (No such file or directory)
344818 08:53:08.799087 openat(AT_FDCWD, "/usr/lib64/systemd/x86_64/libsystemd-shared-252.so", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.799099 newfstatat(AT_FDCWD, "/usr/lib64/systemd/x86_64", 0x7ffd2f69e030, 0) = -1 ENOENT (No such file or directory)
344818 08:53:08.799122 openat(AT_FDCWD, "/usr/lib64/systemd/libsystemd-shared-252.so", O_RDONLY|O_CLOEXEC) = 3
344818 08:53:08.799135 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0\260G\10\0\0\0\0\0"..., 832) = 832
344818 08:53:08.799148 fstat(3, {st_mode=S_IFREG|0755, st_size=3827296, ...}) = 0
344818 08:53:08.799161 mmap(NULL, 3760240, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f6373000000
344817 08:53:08.799178 <... ppoll resumed>) = 1 ([{fd=3, revents=POLLIN}], left {tv_sec=24, tv_nsec=999258376})
344817 08:53:08.799188 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="l\2\1\1\10\0\0\0\v\0\0\0007\0\0\0\5\1u\0\3\0\0\0", iov_len=24}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 24
344817 08:53:08.799203 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="\7\1s\0\30\0\0\0org.freedesktop.systemd1"..., iov_len=56}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 56
344817 08:53:08.799262 recvmsg(3, {msg_namelen=0}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = -1 EAGAIN (Resource temporarily unavailable)
344817 08:53:08.799276 ppoll([{fd=3, events=POLLIN}], 1, NULL, NULL, 8 <unfinished ...>
344818 08:53:08.799285 mmap(0x7f637306d000, 2281472, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x6d000) = 0x7f637306d000
344818 08:53:08.799304 mmap(0x7f637329a000, 905216, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x29a000) = 0x7f637329a000
344818 08:53:08.799318 mmap(0x7f6373377000, 122880, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x377000) = 0x7f6373377000
344818 08:53:08.799336 mmap(0x7f6373395000, 4208, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_ANONYMOUS, -1, 0) = 0x7f6373395000
344818 08:53:08.799359 close(3)         = 0
344818 08:53:08.799374 openat(AT_FDCWD, "/usr/lib64/systemd/libgcc_s.so.1", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.799387 openat(AT_FDCWD, "/etc/ld.so.cache", O_RDONLY|O_CLOEXEC) = 3
344818 08:53:08.799401 fstat(3, {st_mode=S_IFREG|0644, st_size=26763, ...}) = 0
344818 08:53:08.799413 mmap(NULL, 26763, PROT_READ, MAP_PRIVATE, 3, 0) = 0x7f63734bf000
344818 08:53:08.800186 close(3)         = 0
344818 08:53:08.800210 openat(AT_FDCWD, "/lib64/libgcc_s.so.1", O_RDONLY|O_CLOEXEC) = 3
344818 08:53:08.800236 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0\3605\0\0\0\0\0\0"..., 832) = 832
344818 08:53:08.800255 fstat(3, {st_mode=S_IFREG|0755, st_size=108136, ...}) = 0
344818 08:53:08.800273 mmap(NULL, 107208, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f63734a4000
344818 08:53:08.800878 mprotect(0x7f63734a7000, 90112, PROT_NONE) = 0
344818 08:53:08.800911 mmap(0x7f63734a7000, 73728, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x3000) = 0x7f63734a7000
344818 08:53:08.800933 mmap(0x7f63734b9000, 12288, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x15000) = 0x7f63734b9000
344818 08:53:08.800949 mmap(0x7f63734bd000, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x18000) = 0x7f63734bd000
344818 08:53:08.800977 close(3)         = 0
344818 08:53:08.800991 openat(AT_FDCWD, "/usr/lib64/systemd/libc.so.6", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.801012 openat(AT_FDCWD, "/lib64/libc.so.6", O_RDONLY|O_CLOEXEC) = 3
344818 08:53:08.801025 read(3, "\177ELF\2\1\1\3\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0\220\227\2\0\0\0\0\0"..., 832) = 832
344818 08:53:08.801038 pread64(3, "\6\0\0\0\4\0\0\0@\0\0\0\0\0\0\0@\0\0\0\0\0\0\0@\0\0\0\0\0\0\0"..., 784, 64) = 784
344818 08:53:08.801049 pread64(3, "\4\0\0\0 \0\0\0\5\0\0\0GNU\0\2\0\0\300\4\0\0\0\3\0\0\0\0\0\0\0"..., 48, 848) = 48
344818 08:53:08.801061 pread64(3, "\4\0\0\0\24\0\0\0\3\0\0\0GNU\0\327\212D\256\224\361\323 4.\17\366\3021[+"..., 68, 896) = 68
344818 08:53:08.801072 fstat(3, {st_mode=S_IFREG|0755, st_size=2543976, ...}) = 0
344818 08:53:08.801090 pread64(3, "\6\0\0\0\4\0\0\0@\0\0\0\0\0\0\0@\0\0\0\0\0\0\0@\0\0\0\0\0\0\0"..., 784, 64) = 784
344818 08:53:08.801105 mmap(NULL, 2129840, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f6372c00000
344818 08:53:08.801119 mmap(0x7f6372c28000, 1527808, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x28000) = 0x7f6372c28000
344818 08:53:08.801137 mmap(0x7f6372d9d000, 360448, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x19d000) = 0x7f6372d9d000
344818 08:53:08.801152 mmap(0x7f6372df5000, 24576, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x1f5000) = 0x7f6372df5000
344818 08:53:08.801170 mmap(0x7f6372dfb000, 53168, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_ANONYMOUS, -1, 0) = 0x7f6372dfb000
344818 08:53:08.801190 close(3)         = 0
344818 08:53:08.801203 openat(AT_FDCWD, "/usr/lib64/systemd/libacl.so.1", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.801217 openat(AT_FDCWD, "/lib64/libacl.so.1", O_RDONLY|O_CLOEXEC) = 3
344818 08:53:08.801231 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0\260%\0\0\0\0\0\0"..., 832) = 832
344818 08:53:08.801243 fstat(3, {st_mode=S_IFREG|0755, st_size=40496, ...}) = 0
344818 08:53:08.801255 mmap(NULL, 40984, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f6373499000
344818 08:53:08.801268 mprotect(0x7f637349b000, 28672, PROT_NONE) = 0
344818 08:53:08.801282 mmap(0x7f637349b000, 20480, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x2000) = 0x7f637349b000
344818 08:53:08.801296 mmap(0x7f63734a0000, 4096, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x7000) = 0x7f63734a0000
344818 08:53:08.801309 mmap(0x7f63734a2000, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x8000) = 0x7f63734a2000
344818 08:53:08.801323 mmap(0x7f63734a3000, 24, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_ANONYMOUS, -1, 0) = 0x7f63734a3000
344818 08:53:08.801340 close(3)         = 0
344818 08:53:08.801351 openat(AT_FDCWD, "/usr/lib64/systemd/libblkid.so.1", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.801364 openat(AT_FDCWD, "/lib64/libblkid.so.1", O_RDONLY|O_CLOEXEC) = 3
344818 08:53:08.801377 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0\260\204\0\0\0\0\0\0"..., 832) = 832
344818 08:53:08.801389 fstat(3, {st_mode=S_IFREG|0755, st_size=229424, ...}) = 0
344818 08:53:08.801401 mmap(NULL, 222096, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f6373462000
344818 08:53:08.801413 mmap(0x7f6373469000, 135168, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x7000) = 0x7f6373469000
344818 08:53:08.801427 mmap(0x7f637348a000, 36864, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x28000) = 0x7f637348a000
344818 08:53:08.801442 mmap(0x7f6373493000, 24576, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x31000) = 0x7f6373493000
344818 08:53:08.801462 close(3)         = 0
344818 08:53:08.801473 openat(AT_FDCWD, "/usr/lib64/systemd/libcap.so.2", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.801486 openat(AT_FDCWD, "/lib64/libcap.so.2", O_RDONLY|O_CLOEXEC) = 3
344818 08:53:08.801499 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0P'\0\0\0\0\0\0"..., 832) = 832
344818 08:53:08.801512 fstat(3, {st_mode=S_IFREG|0755, st_size=36304, ...}) = 0
344818 08:53:08.801524 mmap(NULL, 36920, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f6373458000
344818 08:53:08.801536 mmap(0x7f637345a000, 16384, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x2000) = 0x7f637345a000
344818 08:53:08.801553 mmap(0x7f637345e000, 8192, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x6000) = 0x7f637345e000
344818 08:53:08.801567 mmap(0x7f6373460000, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x7000) = 0x7f6373460000
344818 08:53:08.801586 close(3)         = 0
344818 08:53:08.801598 openat(AT_FDCWD, "/usr/lib64/systemd/libcrypt.so.2", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.801611 mmap(NULL, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7f6373456000
344818 08:53:08.801625 openat(AT_FDCWD, "/lib64/libcrypt.so.2", O_RDONLY|O_CLOEXEC) = 3
344818 08:53:08.801638 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0P \0\0\0\0\0\0"..., 832) = 832
344818 08:53:08.801650 fstat(3, {st_mode=S_IFREG|0755, st_size=201808, ...}) = 0
344818 08:53:08.801661 mmap(NULL, 233728, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f637341c000
344818 08:53:08.801673 mprotect(0x7f637341e000, 188416, PROT_NONE) = 0
344818 08:53:08.801686 mmap(0x7f637341e000, 81920, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x2000) = 0x7f637341e000
344818 08:53:08.801700 mmap(0x7f6373432000, 102400, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x16000) = 0x7f6373432000
344818 08:53:08.801725 mmap(0x7f637344c000, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x2f000) = 0x7f637344c000
344818 08:53:08.801742 mmap(0x7f637344d000, 33024, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_ANONYMOUS, -1, 0) = 0x7f637344d000
344818 08:53:08.801760 close(3)         = 0
344818 08:53:08.801771 openat(AT_FDCWD, "/usr/lib64/systemd/libgcrypt.so.20", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.801784 openat(AT_FDCWD, "/lib64/libgcrypt.so.20", O_RDONLY|O_CLOEXEC) = 3
344818 08:53:08.801797 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0\200\353\0\0\0\0\0\0"..., 832) = 832
344818 08:53:08.801809 fstat(3, {st_mode=S_IFREG|0755, st_size=1304856, ...}) = 0
344818 08:53:08.801820 mmap(NULL, 1294576, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f6372ec3000
344818 08:53:08.801833 mprotect(0x7f6372ed1000, 1200128, PROT_NONE) = 0
344818 08:53:08.801849 mmap(0x7f6372ed1000, 942080, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0xe000) = 0x7f6372ed1000
344818 08:53:08.801864 mmap(0x7f6372fb7000, 253952, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0xf4000) = 0x7f6372fb7000
344818 08:53:08.801881 mmap(0x7f6372ff6000, 36864, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x132000) = 0x7f6372ff6000
344818 08:53:08.801901 mmap(0x7f6372fff000, 240, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_ANONYMOUS, -1, 0) = 0x7f6372fff000
344818 08:53:08.801925 close(3)         = 0
344818 08:53:08.801939 openat(AT_FDCWD, "/usr/lib64/systemd/libkmod.so.2", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.801953 openat(AT_FDCWD, "/lib64/libkmod.so.2", O_RDONLY|O_CLOEXEC) = 3
344818 08:53:08.801967 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0pP\0\0\0\0\0\0"..., 832) = 832
344818 08:53:08.801978 fstat(3, {st_mode=S_IFREG|0755, st_size=107528, ...}) = 0
344818 08:53:08.801989 mmap(NULL, 102448, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f6373402000
344818 08:53:08.802002 mmap(0x7f6373406000, 65536, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x4000) = 0x7f6373406000
344818 08:53:08.802018 mmap(0x7f6373416000, 16384, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x14000) = 0x7f6373416000
344818 08:53:08.802031 mmap(0x7f637341a000, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x18000) = 0x7f637341a000
344818 08:53:08.802050 close(3)         = 0
344818 08:53:08.802064 openat(AT_FDCWD, "/usr/lib64/systemd/liblz4.so.1", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.802077 openat(AT_FDCWD, "/lib64/liblz4.so.1", O_RDONLY|O_CLOEXEC) = 3
344818 08:53:08.802091 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\00007\0\0\0\0\0\0"..., 832) = 832
344818 08:53:08.802102 fstat(3, {st_mode=S_IFREG|0755, st_size=144120, ...}) = 0
344818 08:53:08.802116 mmap(NULL, 143368, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f63733de000
344818 08:53:08.802132 mmap(0x7f63733e1000, 114688, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x3000) = 0x7f63733e1000
344818 08:53:08.802148 mmap(0x7f63733fd000, 12288, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x1f000) = 0x7f63733fd000
344818 08:53:08.802161 mmap(0x7f6373400000, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x21000) = 0x7f6373400000
344818 08:53:08.802177 mmap(0x7f6373401000, 8, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_ANONYMOUS, -1, 0) = 0x7f6373401000
344818 08:53:08.802191 close(3)         = 0
344818 08:53:08.802201 openat(AT_FDCWD, "/usr/lib64/systemd/libmount.so.1", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.802215 openat(AT_FDCWD, "/lib64/libmount.so.1", O_RDONLY|O_CLOEXEC) = 3
344818 08:53:08.802228 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0\20\314\0\0\0\0\0\0"..., 832) = 832
344818 08:53:08.802239 fstat(3, {st_mode=S_IFREG|0755, st_size=291496, ...}) = 0
344818 08:53:08.802251 mmap(NULL, 283144, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f6373398000
344818 08:53:08.802262 mmap(0x7f63733a2000, 184320, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0xa000) = 0x7f63733a2000
344818 08:53:08.802278 mmap(0x7f63733cf000, 49152, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x37000) = 0x7f63733cf000
344818 08:53:08.802290 mmap(0x7f63733db000, 12288, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x43000) = 0x7f63733db000
344818 08:53:08.802311 close(3)         = 0
344818 08:53:08.802323 openat(AT_FDCWD, "/usr/lib64/systemd/libcrypto.so.3", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.802337 openat(AT_FDCWD, "/lib64/libcrypto.so.3", O_RDONLY|O_CLOEXEC) = 3
344818 08:53:08.802354 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0@\324\r\0\0\0\0\0"..., 832) = 832
344818 08:53:08.802365 fstat(3, {st_mode=S_IFREG|0755, st_size=6147696, ...}) = 0
344818 08:53:08.802376 mmap(NULL, 6039984, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f6372600000
344818 08:53:08.802391 mmap(0x7f63726dc000, 3436544, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0xdc000) = 0x7f63726dc000
344818 08:53:08.802411 mmap(0x7f6372a23000, 1191936, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x423000) = 0x7f6372a23000
344818 08:53:08.802424 mmap(0x7f6372b46000, 499712, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x545000) = 0x7f6372b46000
344818 08:53:08.802442 mmap(0x7f6372bc0000, 10672, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_ANONYMOUS, -1, 0) = 0x7f6372bc0000
344818 08:53:08.802463 close(3)         = 0
344818 08:53:08.802477 openat(AT_FDCWD, "/usr/lib64/systemd/libp11-kit.so.0", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.802490 openat(AT_FDCWD, "/lib64/libp11-kit.so.0", O_RDONLY|O_CLOEXEC) = 3
344818 08:53:08.802503 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0\20b\3\0\0\0\0\0"..., 832) = 832
344818 08:53:08.802514 fstat(3, {st_mode=S_IFREG|0755, st_size=1714240, ...}) = 0
344818 08:53:08.802525 mmap(NULL, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7f6372ec1000
344818 08:53:08.802539 mmap(NULL, 1664200, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f6372469000
344818 08:53:08.802552 mmap(0x7f637249e000, 864256, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x35000) = 0x7f637249e000
344818 08:53:08.802566 mmap(0x7f6372571000, 479232, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x108000) = 0x7f6372571000
344818 08:53:08.802581 mmap(0x7f63725e6000, 102400, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x17c000) = 0x7f63725e6000
344818 08:53:08.802600 mmap(0x7f63725ff000, 1224, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_ANONYMOUS, -1, 0) = 0x7f63725ff000
344818 08:53:08.802619 close(3)         = 0
344818 08:53:08.802630 openat(AT_FDCWD, "/usr/lib64/systemd/libpam.so.0", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.802644 openat(AT_FDCWD, "/lib64/libpam.so.0", O_RDONLY|O_CLOEXEC) = 3
344818 08:53:08.802658 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0P:\0\0\0\0\0\0"..., 832) = 832
344818 08:53:08.802670 fstat(3, {st_mode=S_IFREG|0755, st_size=69608, ...}) = 0
344818 08:53:08.802682 mmap(NULL, 69640, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f6372eaf000
344818 08:53:08.802709 mmap(0x7f6372eb2000, 36864, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x3000) = 0x7f6372eb2000
344818 08:53:08.802760 mmap(0x7f6372ebb000, 16384, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0xc000) = 0x7f6372ebb000
344818 08:53:08.802832 mmap(0x7f6372ebf000, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0xf000) = 0x7f6372ebf000
344818 08:53:08.802855 close(3)         = 0
344818 08:53:08.802867 openat(AT_FDCWD, "/usr/lib64/systemd/libseccomp.so.2", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.802882 openat(AT_FDCWD, "/lib64/libseccomp.so.2", O_RDONLY|O_CLOEXEC) = 3
344818 08:53:08.802896 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0\260#\0\0\0\0\0\0"..., 832) = 832
344818 08:53:08.802908 fstat(3, {st_mode=S_IFREG|0755, st_size=127680, ...}) = 0
344818 08:53:08.802919 mmap(NULL, 127040, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f6372e8f000
344818 08:53:08.802932 mprotect(0x7f6372e91000, 114688, PROT_NONE) = 0
344818 08:53:08.802947 mmap(0x7f6372e91000, 57344, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x2000) = 0x7f6372e91000
344818 08:53:08.802962 mmap(0x7f6372e9f000, 53248, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x10000) = 0x7f6372e9f000
344818 08:53:08.803042 mmap(0x7f6372ead000, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x1d000) = 0x7f6372ead000
344818 08:53:08.803064 close(3)         = 0
344818 08:53:08.803075 openat(AT_FDCWD, "/usr/lib64/systemd/libselinux.so.1", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.803089 openat(AT_FDCWD, "/lib64/libselinux.so.1", O_RDONLY|O_CLOEXEC) = 3
344818 08:53:08.803102 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0pp\0\0\0\0\0\0"..., 832) = 832
344818 08:53:08.803170 fstat(3, {st_mode=S_IFREG|0755, st_size=175752, ...}) = 0
344818 08:53:08.803186 mmap(NULL, 181896, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f6372e62000
344818 08:53:08.803199 mmap(0x7f6372e68000, 110592, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x6000) = 0x7f6372e68000
344818 08:53:08.803214 mmap(0x7f6372e83000, 32768, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x21000) = 0x7f6372e83000
344818 08:53:08.803228 mmap(0x7f6372e8b000, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x28000 <unfinished ...>
344817 08:53:08.803239 <... ppoll resumed>) = 1 ([{fd=3, revents=POLLIN}])
344817 08:53:08.803253 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="l\4\1\1C\3\0\0\f\0\0\0\266\0\0\0\1\1o\0.\0\0\0", iov_len=24}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 24
344817 08:53:08.803273 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="/org/freedesktop/systemd1/unit/d"..., iov_len=1011}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 1011
344817 08:53:08.803300 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="l\4\1\1\330\3\0\0\r\0\0\0\266\0\0\0\1\1o\0.\0\0\0", iov_len=24}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 24
344817 08:53:08.803314 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="/org/freedesktop/systemd1/unit/d"..., iov_len=1160}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 1160
344817 08:53:08.803333 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="l\4\1\1H\0\0\0\16\0\0\0\256\0\0\0\1\1o\0&\0\0\0", iov_len=24}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 24
344817 08:53:08.803346 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="/org/freedesktop/systemd1/job/13"..., iov_len=240}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 240
344817 08:53:08.803363 recvmsg(3, {msg_namelen=0}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = -1 EAGAIN (Resource temporarily unavailable)
344817 08:53:08.803376 ppoll([{fd=3, events=POLLIN}], 1, NULL, NULL, 8 <unfinished ...>
344818 08:53:08.803390 <... mmap resumed>) = 0x7f6372e8b000
344818 08:53:08.803399 mmap(0x7f6372e8d000, 5768, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_ANONYMOUS, -1, 0) = 0x7f6372e8d000
344818 08:53:08.803416 close(3)         = 0
344818 08:53:08.803429 openat(AT_FDCWD, "/usr/lib64/systemd/libzstd.so.1", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.803442 openat(AT_FDCWD, "/lib64/libzstd.so.1", O_RDONLY|O_CLOEXEC) = 3
344818 08:53:08.803455 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0\300^\0\0\0\0\0\0"..., 832) = 832
344818 08:53:08.803466 fstat(3, {st_mode=S_IFREG|0755, st_size=882376, ...}) = 0
344818 08:53:08.803478 mmap(NULL, 877168, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f6372392000
344818 08:53:08.803490 mprotect(0x7f6372397000, 851968, PROT_NONE) = 0
344818 08:53:08.803506 mmap(0x7f6372397000, 782336, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x5000) = 0x7f6372397000
344818 08:53:08.803519 mmap(0x7f6372456000, 65536, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0xc4000) = 0x7f6372456000
344818 08:53:08.803532 mmap(0x7f6372467000, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0xd4000) = 0x7f6372467000
344818 08:53:08.803552 close(3)         = 0
344818 08:53:08.803565 openat(AT_FDCWD, "/usr/lib64/systemd/liblzma.so.5", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.803578 openat(AT_FDCWD, "/lib64/liblzma.so.5", O_RDONLY|O_CLOEXEC) = 3
344818 08:53:08.803591 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0\3609\0\0\0\0\0\0"..., 832) = 832
344818 08:53:08.803602 fstat(3, {st_mode=S_IFREG|0755, st_size=178744, ...}) = 0
344818 08:53:08.803613 mmap(NULL, 176136, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f6372e36000
344818 08:53:08.803625 mprotect(0x7f6372e39000, 159744, PROT_NONE) = 0
344818 08:53:08.803640 mmap(0x7f6372e39000, 110592, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x3000) = 0x7f6372e39000
344818 08:53:08.803654 mmap(0x7f6372e54000, 45056, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x1e000) = 0x7f6372e54000
344818 08:53:08.803666 mmap(0x7f6372e60000, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x29000) = 0x7f6372e60000
344818 08:53:08.803680 mmap(0x7f6372e61000, 8, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_ANONYMOUS, -1, 0) = 0x7f6372e61000
344818 08:53:08.803693 close(3)         = 0
344818 08:53:08.803704 openat(AT_FDCWD, "/usr/lib64/systemd/libm.so.6", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.803729 openat(AT_FDCWD, "/lib64/libm.so.6", O_RDONLY|O_CLOEXEC) = 3
344818 08:53:08.803741 read(3, "\177ELF\2\1\1\3\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0\220\323\0\0\0\0\0\0"..., 832) = 832
344818 08:53:08.803753 fstat(3, {st_mode=S_IFREG|0755, st_size=912440, ...}) = 0
344818 08:53:08.803764 mmap(NULL, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7f6372e34000
344818 08:53:08.803778 mmap(NULL, 893184, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f63722b7000
344818 08:53:08.803790 mmap(0x7f63722c4000, 458752, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0xd000) = 0x7f63722c4000
344818 08:53:08.803806 mmap(0x7f6372334000, 376832, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x7d000) = 0x7f6372334000
344818 08:53:08.803821 mmap(0x7f6372390000, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0xd8000) = 0x7f6372390000
344818 08:53:08.803843 close(3)         = 0
344818 08:53:08.803870 openat(AT_FDCWD, "/usr/lib64/systemd/libattr.so.1", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.803888 openat(AT_FDCWD, "/lib64/libattr.so.1", O_RDONLY|O_CLOEXEC) = 3
344818 08:53:08.803902 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0P%\0\0\0\0\0\0"..., 832) = 832
344818 08:53:08.803913 fstat(3, {st_mode=S_IFREG|0755, st_size=28552, ...}) = 0
344818 08:53:08.803924 mmap(NULL, 28688, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f6372e2c000
344818 08:53:08.803937 mmap(0x7f6372e2e000, 12288, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x2000) = 0x7f6372e2e000
344818 08:53:08.803952 mmap(0x7f6372e31000, 4096, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x5000) = 0x7f6372e31000
344818 08:53:08.803965 mmap(0x7f6372e32000, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x5000) = 0x7f6372e32000
344818 08:53:08.803979 mmap(0x7f6372e33000, 16, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_ANONYMOUS, -1, 0) = 0x7f6372e33000
344818 08:53:08.803996 close(3)         = 0
344818 08:53:08.804013 openat(AT_FDCWD, "/usr/lib64/systemd/libgpg-error.so.0", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.804026 openat(AT_FDCWD, "/lib64/libgpg-error.so.0", O_RDONLY|O_CLOEXEC) = 3
344818 08:53:08.804042 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0PJ\0\0\0\0\0\0"..., 832) = 832
344818 08:53:08.804053 fstat(3, {st_mode=S_IFREG|0755, st_size=153600, ...}) = 0
344818 08:53:08.804066 mmap(NULL, 151952, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f6372bda000
344818 08:53:08.804079 mprotect(0x7f6372bde000, 131072, PROT_NONE) = 0
344818 08:53:08.804094 mmap(0x7f6372bde000, 90112, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x4000) = 0x7f6372bde000
344818 08:53:08.804107 mmap(0x7f6372bf4000, 36864, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x1a000) = 0x7f6372bf4000
344818 08:53:08.804119 mmap(0x7f6372bfe000, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x23000) = 0x7f6372bfe000
344818 08:53:08.804138 close(3)         = 0
344818 08:53:08.804163 openat(AT_FDCWD, "/usr/lib64/systemd/libz.so.1", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.804176 openat(AT_FDCWD, "/lib64/libz.so.1", O_RDONLY|O_CLOEXEC) = 3
344818 08:53:08.804189 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0\3605\0\0\0\0\0\0"..., 832) = 832
344818 08:53:08.804200 fstat(3, {st_mode=S_IFREG|0755, st_size=102552, ...}) = 0
344818 08:53:08.804305 mmap(NULL, 102408, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f6372e12000
344818 08:53:08.804328 mprotect(0x7f6372e15000, 86016, PROT_NONE) = 0
344818 08:53:08.804344 mmap(0x7f6372e15000, 57344, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x3000) = 0x7f6372e15000
344818 08:53:08.804357 mmap(0x7f6372e23000, 24576, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x11000) = 0x7f6372e23000
344818 08:53:08.804371 mmap(0x7f6372e2a000, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x17000) = 0x7f6372e2a000
344818 08:53:08.804386 mmap(0x7f6372e2b000, 8, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_ANONYMOUS, -1, 0) = 0x7f6372e2b000
344818 08:53:08.804403 close(3)         = 0
344818 08:53:08.804417 openat(AT_FDCWD, "/usr/lib64/systemd/libffi.so.8", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.804431 openat(AT_FDCWD, "/lib64/libffi.so.8", O_RDONLY|O_CLOEXEC) = 3
344818 08:53:08.804443 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0\220%\0\0\0\0\0\0"..., 832) = 832
344818 08:53:08.804455 fstat(3, {st_mode=S_IFREG|0755, st_size=44784, ...}) = 0
344818 08:53:08.804466 mmap(NULL, 46320, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f6372bce000
344818 08:53:08.804480 mprotect(0x7f6372bd0000, 32768, PROT_NONE) = 0
344818 08:53:08.804497 mmap(0x7f6372bd0000, 24576, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x2000) = 0x7f6372bd0000
344818 08:53:08.804512 mmap(0x7f6372bd6000, 4096, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x8000) = 0x7f6372bd6000
344818 08:53:08.804528 mmap(0x7f6372bd8000, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x9000) = 0x7f6372bd8000
344818 08:53:08.804547 close(3)         = 0
344818 08:53:08.804560 openat(AT_FDCWD, "/usr/lib64/systemd/libaudit.so.1", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.804573 openat(AT_FDCWD, "/lib64/libaudit.so.1", O_RDONLY|O_CLOEXEC) = 3
344818 08:53:08.804586 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0\20<\0\0\0\0\0\0"..., 832) = 832
344818 08:53:08.804598 fstat(3, {st_mode=S_IFREG|0755, st_size=163464, ...}) = 0
344818 08:53:08.804609 mmap(NULL, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7f6372e10000
344818 08:53:08.804623 mmap(NULL, 213168, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f6372282000
344818 08:53:08.804636 mprotect(0x7f6372285000, 147456, PROT_NONE) = 0
344818 08:53:08.804650 mmap(0x7f6372285000, 57344, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x3000) = 0x7f6372285000
344818 08:53:08.804664 mmap(0x7f6372293000, 86016, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x11000) = 0x7f6372293000
344818 08:53:08.804677 mmap(0x7f63722a9000, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x26000) = 0x7f63722a9000
344818 08:53:08.804693 mmap(0x7f63722ab000, 45232, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_ANONYMOUS, -1, 0) = 0x7f63722ab000
344818 08:53:08.804710 close(3)         = 0
344818 08:53:08.804741 openat(AT_FDCWD, "/usr/lib64/systemd/libeconf.so.0", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.804755 openat(AT_FDCWD, "/lib64/libeconf.so.0", O_RDONLY|O_CLOEXEC) = 3
344818 08:53:08.804768 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0p&\0\0\0\0\0\0"..., 832) = 832
344818 08:53:08.804779 fstat(3, {st_mode=S_IFREG|0755, st_size=40520, ...}) = 0
344818 08:53:08.804791 mmap(NULL, 42032, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f6372bc3000
344818 08:53:08.804803 mmap(0x7f6372bc5000, 20480, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x2000) = 0x7f6372bc5000
344818 08:53:08.804818 mmap(0x7f6372bca000, 8192, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x7000) = 0x7f6372bca000
344818 08:53:08.804831 mmap(0x7f6372bcc000, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x8000) = 0x7f6372bcc000
344818 08:53:08.804846 mmap(0x7f6372bcd000, 1072, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_ANONYMOUS, -1, 0) = 0x7f6372bcd000
344818 08:53:08.804859 close(3)         = 0
344818 08:53:08.805199 openat(AT_FDCWD, "/usr/lib64/systemd/libpcre2-8.so.0", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.805219 openat(AT_FDCWD, "/lib64/libpcre2-8.so.0", O_RDONLY|O_CLOEXEC) = 3
344818 08:53:08.805233 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0\220$\0\0\0\0\0\0"..., 832) = 832
344818 08:53:08.805245 fstat(3, {st_mode=S_IFREG|0755, st_size=636848, ...}) = 0
344818 08:53:08.805257 mmap(NULL, 635440, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f63721e6000
344818 08:53:08.805272 mmap(0x7f63721e8000, 446464, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x2000) = 0x7f63721e8000
344818 08:53:08.805289 mmap(0x7f6372255000, 176128, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x6f000) = 0x7f6372255000
344818 08:53:08.805304 mmap(0x7f6372280000, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x99000) = 0x7f6372280000
344818 08:53:08.805327 close(3)         = 0
344818 08:53:08.805348 openat(AT_FDCWD, "/usr/lib64/systemd/libcap-ng.so.0", O_RDONLY|O_CLOEXEC) = -1 ENOENT (No such file or directory)
344818 08:53:08.805366 openat(AT_FDCWD, "/lib64/libcap-ng.so.0", O_RDONLY|O_CLOEXEC) = 3
344818 08:53:08.805379 read(3, "\177ELF\2\1\1\0\0\0\0\0\0\0\0\0\3\0>\0\1\0\0\0\20&\0\0\0\0\0\0"..., 832) = 832
344818 08:53:08.805393 fstat(3, {st_mode=S_IFREG|0755, st_size=32528, ...}) = 0
344818 08:53:08.805404 mmap(NULL, 32792, PROT_READ, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x7f63721dd000
344818 08:53:08.805418 mprotect(0x7f63721df000, 20480, PROT_NONE) = 0
344818 08:53:08.805435 mmap(0x7f63721df000, 12288, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x2000) = 0x7f63721df000
344818 08:53:08.805450 mmap(0x7f63721e2000, 4096, PROT_READ, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x5000) = 0x7f63721e2000
344818 08:53:08.805465 mmap(0x7f63721e4000, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x6000) = 0x7f63721e4000
344818 08:53:08.805490 mmap(0x7f63721e5000, 24, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_ANONYMOUS, -1, 0) = 0x7f63721e5000
344818 08:53:08.805504 close(3)         = 0
344818 08:53:08.805532 mmap(NULL, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7f6372e0e000
344818 08:53:08.805568 mmap(NULL, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7f6372e0c000
344818 08:53:08.805585 mmap(NULL, 12288, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7f6372e09000
344818 08:53:08.805599 arch_prctl(ARCH_SET_FS, 0x7f6372e09b40) = 0
344818 08:53:08.805610 set_tid_address(0x7f6372e09e10) = 344818
344818 08:53:08.805619 set_robust_list(0x7f6372e09e20, 24) = 0
344818 08:53:08.805630 rseq(0x7f6372e0a4e0, 0x20, 0, 0x53053053) = 0
344818 08:53:08.805680 mprotect(0x7f6372df5000, 16384, PROT_READ) = 0
344818 08:53:08.805709 mprotect(0x7f63721e4000, 4096, PROT_READ) = 0
344818 08:53:08.805747 mprotect(0x7f6372280000, 4096, PROT_READ) = 0
344818 08:53:08.805773 mprotect(0x7f6372bcc000, 4096, PROT_READ) = 0
344818 08:53:08.805807 mprotect(0x7f63722a9000, 4096, PROT_READ) = 0
344818 08:53:08.805831 mprotect(0x7f6372bd8000, 4096, PROT_READ) = 0
344818 08:53:08.805856 mprotect(0x7f6372e2a000, 4096, PROT_READ) = 0
344818 08:53:08.805885 mprotect(0x7f6372bfe000, 4096, PROT_READ) = 0
344818 08:53:08.805907 mprotect(0x7f6372e32000, 4096, PROT_READ) = 0
344818 08:53:08.805933 mprotect(0x7f6372390000, 4096, PROT_READ) = 0
344818 08:53:08.805963 mprotect(0x7f6372e60000, 4096, PROT_READ) = 0
344818 08:53:08.805999 mprotect(0x7f6372467000, 4096, PROT_READ) = 0
344818 08:53:08.806035 mprotect(0x7f6372e8b000, 4096, PROT_READ) = 0
344818 08:53:08.806055 mprotect(0x7f6372ead000, 4096, PROT_READ) = 0
344818 08:53:08.806082 mprotect(0x7f6372ebf000, 4096, PROT_READ) = 0
344818 08:53:08.806192 mprotect(0x7f63725e6000, 49152, PROT_READ) = 0
344818 08:53:08.806501 mprotect(0x7f6372b46000, 487424, PROT_READ) = 0
344818 08:53:08.806552 mprotect(0x7f6373493000, 20480, PROT_READ) = 0
344818 08:53:08.806619 mprotect(0x7f63733db000, 8192, PROT_READ) = 0
344818 08:53:08.806643 mprotect(0x7f6373400000, 4096, PROT_READ) = 0
344818 08:53:08.806662 mprotect(0x7f63734bd000, 4096, PROT_READ) = 0
344818 08:53:08.806705 mprotect(0x7f637341a000, 4096, PROT_READ) = 0
344818 08:53:08.806803 mprotect(0x7f6372ff6000, 20480, PROT_READ) = 0
344818 08:53:08.806827 mprotect(0x7f637344c000, 4096, PROT_READ) = 0
344818 08:53:08.806848 mprotect(0x7f6373460000, 4096, PROT_READ) = 0
344818 08:53:08.806870 mprotect(0x7f63734a2000, 4096, PROT_READ) = 0
344817 08:53:08.807008 <... ppoll resumed>) = 1 ([{fd=3, revents=POLLIN}])
344817 08:53:08.807024 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="l\4\1\0013\3\0\0\17\0\0\0\266\0\0\0\1\1o\0.\0\0\0", iov_len=24}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 24
344817 08:53:08.807046 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="/org/freedesktop/systemd1/unit/d"..., iov_len=995}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 995
344817 08:53:08.807070 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="l\4\1\1\330\3\0\0\20\0\0\0\266\0\0\0\1\1o\0.\0\0\0", iov_len=24}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 24
344817 08:53:08.807087 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="/org/freedesktop/systemd1/unit/d"..., iov_len=1160}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 1160
344817 08:53:08.807105 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="l\4\1\0013\3\0\0\21\0\0\0\266\0\0\0\1\1o\0.\0\0\0", iov_len=24}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 24
344817 08:53:08.807174 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="/org/freedesktop/systemd1/unit/d"..., iov_len=995}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 995
344817 08:53:08.807191 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="l\4\1\1\330\3\0\0\22\0\0\0\266\0\0\0\1\1o\0.\0\0\0", iov_len=24}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 24
344817 08:53:08.807204 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="/org/freedesktop/systemd1/unit/d"..., iov_len=1160}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 1160
344817 08:53:08.807219 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="l\4\1\1H\0\0\0\23\0\0\0\256\0\0\0\1\1o\0&\0\0\0", iov_len=24}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 24
344817 08:53:08.807233 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="/org/freedesktop/systemd1/job/13"..., iov_len=240}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 240
344817 08:53:08.807248 recvmsg(3, {msg_namelen=0}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = -1 EAGAIN (Resource temporarily unavailable)
344817 08:53:08.807263 ppoll([{fd=3, events=POLLIN}], 1, NULL, NULL, 8 <unfinished ...>
344818 08:53:08.807763 mprotect(0x7f6373377000, 118784, PROT_READ) = 0
344818 08:53:08.807811 mprotect(0x55de7a5ca000, 4096, PROT_READ) = 0
344818 08:53:08.807844 mprotect(0x7f63734fc000, 8192, PROT_READ) = 0
344818 08:53:08.807871 prlimit64(0, RLIMIT_STACK, NULL, {rlim_cur=8192*1024, rlim_max=RLIM64_INFINITY}) = 0
344818 08:53:08.807892 munmap(0x7f63734bf000, 26763) = 0
344818 08:53:08.807919 openat(AT_FDCWD, "/proc/sys/kernel/cap_last_cap", O_RDONLY) = 3
344818 08:53:08.807938 fstatfs(3, {f_type=PROC_SUPER_MAGIC, f_bsize=4096, f_blocks=0, f_bfree=0, f_bavail=0, f_files=0, f_ffree=0, f_fsid={val=[0, 0]}, f_namelen=255, f_frsize=4096, f_flags=ST_VALID|ST_NOSUID|ST_NODEV|ST_NOEXEC|ST_RELATIME}) = 0
344818 08:53:08.807954 read(3, "40\n", 7) = 3
344818 08:53:08.807974 close(3)         = 0
344818 08:53:08.808001 getrandom("\x49\x15\xc4\x78\xdb\x81\xd3\xde", 8, GRND_NONBLOCK) = 8
344818 08:53:08.808015 brk(NULL)        = 0x55de7c1d9000
344818 08:53:08.808025 brk(0x55de7c1fa000) = 0x55de7c1fa000
344818 08:53:08.808058 statfs("/sys/fs/selinux", {f_type=SYSFS_MAGIC, f_bsize=4096, f_blocks=0, f_bfree=0, f_bavail=0, f_files=0, f_ffree=0, f_fsid={val=[0, 0]}, f_namelen=255, f_frsize=4096, f_flags=ST_VALID|ST_NOSUID|ST_NODEV|ST_NOEXEC|ST_RELATIME}) = 0
344818 08:53:08.808076 statfs("/selinux", 0x7ffd2f69ed90) = -1 ENOENT (No such file or directory)
344818 08:53:08.808095 openat(AT_FDCWD, "/proc/filesystems", O_RDONLY|O_CLOEXEC) = 3
344818 08:53:08.808110 fstat(3, {st_mode=S_IFREG|0444, st_size=0, ...}) = 0
344818 08:53:08.808123 read(3, "nodev\tsysfs\nnodev\ttmpfs\nnodev\tbd"..., 1024) = 381
344818 08:53:08.808144 close(3)         = 0
344818 08:53:08.808155 openat(AT_FDCWD, "/proc/mounts", O_RDONLY|O_CLOEXEC) = 3
344818 08:53:08.808173 fstat(3, {st_mode=S_IFREG|0444, st_size=0, ...}) = 0
344818 08:53:08.808184 read(3, "proc /proc proc rw,nosuid,nodev,"..., 1024) = 1024
344818 08:53:08.808215 read(3, "lbfs rw,relatime,pagesize=2M 0 0"..., 1024) = 1024
344818 08:53:08.808240 read(3, "r2,inode64,logbufs=8,logbsize=32"..., 1024) = 1021
344818 08:53:08.808264 read(3, "", 1024) = 0
344818 08:53:08.808274 close(3)         = 0
344818 08:53:08.808288 access("/etc/selinux/config", F_OK) = 0
344818 08:53:08.808376 access("/etc/gcrypt/fips_enabled", F_OK) = -1 ENOENT (No such file or directory)
344818 08:53:08.808393 openat(AT_FDCWD, "/proc/sys/crypto/fips_enabled", O_RDONLY) = 3
344818 08:53:08.808407 fstat(3, {st_mode=S_IFREG|0444, st_size=0, ...}) = 0
344818 08:53:08.808419 read(3, "0\n", 1024) = 2
344818 08:53:08.808431 close(3)         = 0
344818 08:53:08.808445 prctl(PR_CAPBSET_READ, CAP_MAC_OVERRIDE) = 1
344818 08:53:08.808456 prctl(PR_CAPBSET_READ, 0x30 /* CAP_??? */) = -1 EINVAL (Invalid argument)
344818 08:53:08.808473 prctl(PR_CAPBSET_READ, CAP_CHECKPOINT_RESTORE) = 1
344818 08:53:08.808483 prctl(PR_CAPBSET_READ, 0x2c /* CAP_??? */) = -1 EINVAL (Invalid argument)
344818 08:53:08.808494 prctl(PR_CAPBSET_READ, 0x2a /* CAP_??? */) = -1 EINVAL (Invalid argument)
344818 08:53:08.808504 prctl(PR_CAPBSET_READ, 0x29 /* CAP_??? */) = -1 EINVAL (Invalid argument)
344818 08:53:08.808533 getpid()         = 344818
344818 08:53:08.808552 umask(022)       = 022
344818 08:53:08.808575 openat(AT_FDCWD, "/proc/self/stat", O_RDONLY|O_CLOEXEC) = 3
344818 08:53:08.808594 fstat(3, {st_mode=S_IFREG|0444, st_size=0, ...}) = 0
344818 08:53:08.808605 read(3, "344818 (systemd-tty-ask) R 34481"..., 1024) = 330
344818 08:53:08.808624 ioctl(3, TCGETS, 0x7ffd2f69e700) = -1 ENOTTY (Inappropriate ioctl for device)
344818 08:53:08.808636 read(3, "", 1024) = 0
344818 08:53:08.808647 close(3)         = 0
344818 08:53:08.808669 newfstatat(AT_FDCWD, "/run/systemd/ask-password-block", {st_mode=S_IFDIR|0700, st_size=60, ...}, 0) = 0
344818 08:53:08.808688 mknodat(AT_FDCWD, "/run/systemd/ask-password-block/136:1", S_IFIFO|0600) = -1 EEXIST (File exists)
344818 08:53:08.808702 openat(AT_FDCWD, "/run/systemd/ask-password-block/136:1", O_RDONLY|O_NOCTTY|O_NONBLOCK|O_CLOEXEC) = 3
344818 08:53:08.808730 newfstatat(AT_FDCWD, "/run/systemd", {st_mode=S_IFDIR|0755, st_size=540, ...}, 0) = 0
344818 08:53:08.808746 mkdirat(AT_FDCWD, "/run/systemd/ask-password", 0755) = -1 EEXIST (File exists)
344818 08:53:08.808759 newfstatat(AT_FDCWD, "/run/systemd/ask-password", {st_mode=S_IFDIR|0755, st_size=40, ...}, 0) = 0
344818 08:53:08.808772 rt_sigprocmask(SIG_SETMASK, [TERM], NULL, 8) = 0
344818 08:53:08.808784 signalfd4(-1, [TERM], 8, SFD_CLOEXEC|SFD_NONBLOCK) = 4
344818 08:53:08.808798 inotify_init1(IN_CLOEXEC) = 5
344818 08:53:08.808810 inotify_add_watch(5, "/run/systemd/ask-password", IN_CLOSE_WRITE|IN_MOVED_TO) = 1
344818 08:53:08.808825 openat(AT_FDCWD, "/run/systemd/ask-password", O_RDONLY|O_NONBLOCK|O_CLOEXEC|O_DIRECTORY) = 6
344818 08:53:08.808837 fstat(6, {st_mode=S_IFDIR|0755, st_size=40, ...}) = 0
344818 08:53:08.808852 getdents64(6, 0x55de7c1d9e80 /* 2 entries */, 32768) = 48
344818 08:53:08.808866 getdents64(6, 0x55de7c1d9e80 /* 0 entries */, 32768) = 0
344818 08:53:08.808877 close(6)         = 0
344818 08:53:08.808887 ppoll([{fd=4, events=POLLIN}, {fd=5, events=POLLIN}], 2, NULL, NULL, 8 <unfinished ...>
344817 08:53:09.839277 <... ppoll resumed>) = 1 ([{fd=3, revents=POLLIN}])
344817 08:53:09.839415 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="l\4\1\0013\3\0\0\24\0\0\0\266\0\0\0\1\1o\0.\0\0\0", iov_len=24}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 24
344817 08:53:09.839600 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="/org/freedesktop/systemd1/unit/d"..., iov_len=995}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 995
344817 08:53:09.839651 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="l\4\1\1\320\3\0\0\25\0\0\0\266\0\0\0\1\1o\0.\0\0\0", iov_len=24}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 24
344817 08:53:09.839679 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="/org/freedesktop/systemd1/unit/d"..., iov_len=1152}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 1152
344817 08:53:09.839763 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="l\4\1\1M\0\0\0\26\0\0\0\242\0\0\0\1\1o\0\31\0\0\0", iov_len=24}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 24
344817 08:53:09.839795 recvmsg(3, {msg_name=NULL, msg_namelen=0, msg_iov=[{iov_base="/org/freedesktop/systemd1\0\0\0\0\0\0\0"..., iov_len=237}], msg_iovlen=1, msg_controllen=0, msg_flags=MSG_CMSG_CLOEXEC}, MSG_DONTWAIT|MSG_CMSG_CLOEXEC) = 237
344817 08:53:09.839848 close(3)         = 0
344817 08:53:09.840402 kill(344818, SIGTERM) = 0
344817 08:53:09.840437 kill(344818, SIGCONT <unfinished ...>
344818 08:53:09.840444 <... ppoll resumed>) = 1 ([{fd=4, revents=POLLIN}])
344817 08:53:09.840459 <... kill resumed>) = 0
344817 08:53:09.840469 waitid(P_PID, 344818,  <unfinished ...>
344818 08:53:09.840481 --- SIGCONT {si_signo=SIGCONT, si_code=SI_USER, si_pid=344817, si_uid=0} ---
344818 08:53:09.840494 close(4)         = 0
344818 08:53:09.840506 close(5)         = 0
344818 08:53:09.840542 close(3)         = 0
344818 08:53:09.840655 exit_group(0)    = ?
344818 08:53:09.840948 +++ exited with 0 +++
344817 08:53:09.840972 <... waitid resumed>{si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=344818, si_uid=0, si_status=0, si_utime=0, si_stime=0}, WEXITED, NULL) = 0
344817 08:53:09.840991 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=344818, si_uid=0, si_status=0, si_utime=0, si_stime=0} ---
344817 08:53:09.841127 exit_group(0)    = ?
344817 08:53:09.841424 +++ exited with 0 +++
[root@cadclcldlx010 ~]#
