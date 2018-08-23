cd $pusher
if [[ echo $? = "1" ]]; then
  mkdir "$pusher"
fi
