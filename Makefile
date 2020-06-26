.PHONY: build run

build: ## Build the container
	docker build -t bcm-hatch-ts .

run: build
	docker run bcm-hatch-ts:latest
