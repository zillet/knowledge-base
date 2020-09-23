FROM node:10-slim
RUN curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 1.16.0

ENV HOST=0.0.0.0 \
	PORT=80 

WORKDIR /app
ADD . /app/

RUN yarn install \
	&& yarn build 
	
CMD ["yarn","start"]