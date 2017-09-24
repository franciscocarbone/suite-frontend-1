all:
	@echo "No hay ha especificado ningun comando"

deploy_a_produccion:
	rm -rf dist
	@SUITE_API_URL="http://suite2-backend.dtelab.com.ar" ember build --prod
	@echo "Compilando aplicación en modo producción"
	@rm -rf suite2
	@echo "Clonando repositorio para realizar el deploy."
	@git clone dokku@dtelab.com.ar:suite2
	@echo "Moviendo archivos..."
	@cp -r dist/* suite2/
	@echo "Realizando deploy..."
	@cd suite2; git add .; git commit -am 'rebuild' --allow-empty; git push
