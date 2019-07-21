FROM nginx
COPY default.conf /etc/nginx/conf.d/default.conf
RUN chmod g+rwx /var/cache/nginx /var/run /var/log/nginx
RUN sed -i.bak 's/^user/#user/' /etc/nginx/nginx.conf
EXPOSE 8080
COPY ./washeuteessen-ui /usr/share/nginx/html
