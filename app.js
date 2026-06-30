 systemctl restart dhcpd
^C
mv: cannot stat '/tmp/.dhcpd.conf.c7290c781dbd6f219c60d91502939f54': No such file or directory
[root@cadclcldlx010 ~]# systemctl restart dhcpd
[root@cadclcldlx010 ~]# systemctl cat dhcpd
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
[root@cadclcldlx010 ~]# witch systemctl
-bash: witch: command not found
[root@cadclcldlx010 ~]# which systemctl
/usr/bin/systemctl
[root@cadclcldlx010 ~]# rpm -qf $(which systemctl)
systemd-252-46.el9_5.2.x86_64
[root@cadclcldlx010 ~]
