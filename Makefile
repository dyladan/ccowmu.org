RUBY_VERSION=2.1.0
CURRENT_RUBY=$(shell ruby -e "puts RUBY_VERSION")
JEKYLL=$(shell gem list jekyll -i)
JEKYLLcompass=$(shell gem list jekyll-compass -i)
JEKYLLhaml=$(shell gem list jekyll-haml -i)

all: sysdeps serve

.PHONY: serve
serve:
	jekyll serve

.PHONY: sysdeps
sysdeps: version jekyll jekyll-compass jekyll-haml

.PHONY: jekyll
jekyll:
ifneq ($(JEKYLL),true)
	@echo "missing jekyll"
	gem install jekyll -V
else
	@echo "jekyll up to date"
endif

.PHONY: jekyll-compass
jekyll-compass:
ifneq ($(JEKYLLcompass),true)
	@echo "missing jekyll-compass"
	gem install jekyll-compass -V
else
	@echo "jekyll-compass up to date"
endif

.PHONY: jekyll-haml
jekyll-haml:
ifneq ($(JEKYLLhaml),true)
	@echo "missing jekyll-haml"
	gem install jekyll-haml -V
else
	@echo "jekyll-haml up to date"
endif

.PHONY: version
version:
ifneq ($(RUBY_VERSION),$(CURRENT_RUBY))
	exit 1
else
	@echo "Using Ruby $(RUBY_VERSION)"
endif

.PHONY: test
test:
	@echo $(JEKYLL)
	@echo $(JEKYLLcompass)
