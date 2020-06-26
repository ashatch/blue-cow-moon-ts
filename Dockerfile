FROM node:latest

COPY build/bcm.js /
CMD [ "node", "/bcm.js" ]
