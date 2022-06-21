#!/bin/sh

# Strip `http://`, `https://` from the URL.
export BASE_PATH=$(echo "$BASE_PATH" | sed 's~http[s]*://~~g')

echo $BASE_PATH
echo $APP_URL

# Replace magic variables %BASE_URL%, %APP_PATH% in nginx.conf with the value of
# environment variables with the same name.
sed -i "s|%BASE_PATH%|${BASE_PATH}|g" /etc/nginx/nginx.conf
sed -i "s|%APP_URL%|${APP_URL}|g" /etc/nginx/nginx.conf

# Replace the entrypoint process with the process started by the command.
exec "$@"