#!/bin/bash

start() {
  echo 'start'
  cd /var/www/html/web
  nohup yarn start &
}

stop() {
  echo 'stop'
}

case "$1" in
    start)
       start
       ;;
    stop)
       stop
       ;;
    restart)
       stop
       start
       ;;
    status)
       # code to check status of app comes here
       # example: status program_name
       ;;
    *)
       echo "Usage: $0 {start|stop|status|restart}"
esac

exit 0
