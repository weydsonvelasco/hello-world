 vim /var/named/dynamic/nuvem.caixa
^C
mv: cannot stat '/tmp/.named.conf.ea9c9414940d1807afa19876a6961199': No such file or directory
[root@cadclcldlx011 ~]#

systemctl restart dhcpd
^C
mv: cannot stat '/tmp/.dhcpd.conf.4c48836041167720e11e8e38edda0465': No such file or directory


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
