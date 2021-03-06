#!/bin/sh
basedir=$(dirname "$(echo "$0" | sed -e 's,\\,/,g')")

case `uname` in
    *CYGWIN*) basedir=`cygpath -w "$basedir"`;;
esac

if [ -z "$NODE_PATH" ]; then
  export NODE_PATH="/home/workspace/reactjs/coding-practices/iplDashboardApp/node_modules/.pnpm/sha.js@2.4.11/node_modules/sha.js/node_modules:/home/workspace/reactjs/coding-practices/iplDashboardApp/node_modules/.pnpm/sha.js@2.4.11/node_modules:/home/workspace/reactjs/coding-practices/iplDashboardApp/node_modules/.pnpm/node_modules:/home/workspace/reactjs/coding-practices/iplDashboardApp/node_modules:/home/workspace/reactjs/coding-practices/node_modules:/home/workspace/reactjs/node_modules:/home/workspace/node_modules:/home/node_modules:/node_modules:/home/workspace/reactjs/coding-practices/iplDashboardApp/node_modules/sha.js/node_modules"
else
  export NODE_PATH="$NODE_PATH:/home/workspace/reactjs/coding-practices/iplDashboardApp/node_modules/.pnpm/sha.js@2.4.11/node_modules/sha.js/node_modules:/home/workspace/reactjs/coding-practices/iplDashboardApp/node_modules/.pnpm/sha.js@2.4.11/node_modules:/home/workspace/reactjs/coding-practices/iplDashboardApp/node_modules/.pnpm/node_modules:/home/workspace/reactjs/coding-practices/iplDashboardApp/node_modules:/home/workspace/reactjs/coding-practices/node_modules:/home/workspace/reactjs/node_modules:/home/workspace/node_modules:/home/node_modules:/node_modules:/home/workspace/reactjs/coding-practices/iplDashboardApp/node_modules/sha.js/node_modules"
fi
if [ -x "$basedir/node" ]; then
  exec "$basedir/node"  "$basedir/../sha.js/bin.js" "$@"
else
  exec node  "$basedir/../sha.js/bin.js" "$@"
fi
