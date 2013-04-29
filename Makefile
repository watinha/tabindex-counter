#!/usr/bin/make

export PHANTOMJS_SET=`which phantomjs`
export CASPERJS_SET=`which casperjs`
export PHANTOMJS_FLAGS=""

dev:
	@echo "Checking dev operations..."
	@if [ "$(PHANTOMJS_SET)" ]; then echo "phantomjs... \033[32mOK\033[0m"; else echo "phantomjs... \033[31mNOT ok\033[0m"; fi
	@if [ "$(CASPERJS_SET)" ]; then echo "casperjs... \033[32mOK\033[0m"; else echo "casperjs... \033[31mNOT ok\033[0m"; fi

tests: unit integration

unit:
	@echo "Running \033[32munit-tests\033[0m..."
	casperjs test tests/content_scripts/

integration:
	@echo "Running \033[31mintegration-tests\033[0m..."
	casperjs test tests/integration/

.PHONY: dev tests unit integration
