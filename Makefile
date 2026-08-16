.PHONY: dev build start lint install docker-build docker-run

install:
	npm install

dev:
	npm run dev

build:
	npm run build

start:
	npm run start

lint:
	npm run lint

docker-build:
	docker build -f docker/Dockerfile -t portfolio-ex .

docker-run:
	docker run --rm -p 3000:3000 portfolio-ex
