
# git pull
git config --global user.email "pjspan@foxmail.com"
git config --global --list
echo "已更改git提交邮箱";


echo "3秒后将自动退出本脚本："
for i in $(seq 3 -1 1)
do
  echo -e $i;sleep 1
done 
exit