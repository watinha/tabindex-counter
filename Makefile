#!/usr/bin/make

export PHANTOMJS_SET=`which phantomjs`
export CASPERJS_SET=`which casperjs`
export PHANTOMJS_FLAGS=""

dev:
	@echo "Checking dev operations..."
	@if [ "$(PHANTOMJS_SET)" ]; then echo "phantomjs... \033[32mOK\033[0m"; else echo "phantomjs... \033[31mNOT ok\033[0m"; fi
	@if [ "$(CASPERJS_SET)" ]; then echo "casperjs... \033[32mOK\033[0m"; else echo "casperjs... \033[31mNOT ok\033[0m"; fi

tests: unit integration acceptance

unit:
	@echo "Running \033[32munit-tests\033[0m..."
	casperjs test tests/content_scripts/

integration:
	@echo "Running \033[34mintegration-tests\033[0m..."
	casperjs test tests/integration/

acceptance:
	@echo "Running \033[33macceptance-tests\033[0m..."
	casperjs main.js tests/fixtures/dropdown.html > tmp.output
	diff tmp.output tests/fixtures/dropdown.html.output
	@echo "... \033[32mPASSED\033[0m"
	@rm tmp.output

.PHONY: dev tests unit integration acceptance
