FROM node:14.16.1-alpine3.10
RUN apk add libcap
RUN setcap 'cap_net_bind_service=+ep' /usr/local/bin/node
RUN adduser matthew -D
USER matthew
WORKDIR /home/matthew

ADD --chown=matthew . .
RUN npm i
CMD npm start