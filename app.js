systemctl cat dhcpd
# /usr/lib/systemd/system/dhcpd.service
[Unit]
Description=DHCPv4 Server Daemon
Documentation=man:dhcpd(8) man:dhcpd.conf(5)
Wants=network-online.target
After=network-online.target
After=time-sync.target

[Service]
Type=notify
EnvironmentFile=-/etc/sysconfig/dhcpd
ExecStart=/usr/sbin/dhcpd -f -cf /etc/dhcp/dhcpd.conf -user dhcpd -group dhcpd --no-pid $DHCPDARGS
StandardError=null

[Install]
WantedBy=multi-user.target
[root@cadclcldlx010 ~]# type systemctl
systemctl is hashed (/usr/bin/systemctl)
[root@cadclcldlx010 ~]#
