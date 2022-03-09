FROM 989429664884.dkr.ecr.us-east-1.amazonaws.com/middleware-base:latest

COPY --chown=www-data:www-data . /var/www/html/

RUN find /var/www -type d ! -path "*/node_modules/*" ! -path "*/vendor/*" -exec chmod 755 {} \; \
    && find /var/www -type f ! -path "*/node_modules/*" ! -path "*/vendor/*" -exec chmod 644 {} \;

COPY etc/apache.conf /etc/apache2/conf-enabled/00_middleware.conf

COPY entrypoint.sh /usr/local/bin/entrypoint.sh

USER www-data

RUN echo "*/10 * * * * /usr/local/bin/php /var/www/html/bin/console cron:run 2>&1 >> /var/www/html/var/log/cron.log" | crontab -

USER root

ENTRYPOINT [ "bash", "/usr/local/bin/entrypoint.sh" ]