FROM nginx:1.17.1-alpine

RUN rm -rf /etc/nginx/conf.d && mkdir -p /etc/nginx/logs

COPY ops/docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY ops/docker/nginx/includes /etc/nginx/includes/
COPY ops/docker/nginx/entrypoint.sh /entrypoint.sh

ENTRYPOINT [ "/entrypoint.sh" ]

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]