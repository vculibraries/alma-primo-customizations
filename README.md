# Alma/Primo customizations

These are visual customizations for [VCU Libraries Search](http://search.library.vcu.edu/) which is running on Ex Libris' Alma and Primo platforms.

Each file exists independently and doesn't require the other files.

* vcu_primo_custom.css is included in all views for Primo
	* [Example Primo page](http://search.library.vcu.edu/primo_library/libweb/action/dlSearch.do?institution=VCU&vid=VCU&onCampus=false&group=GUEST&search_scope=all_scope&query=any,contains,kittens)
* vcu_services_pages_custom.css is included in the services_page view for Alma
	* [Example services page](http://vcu-alma-primo.hosted.exlibrisgroup.com/primo_library/libweb/action/openurl?dscnt=1&id=pmid%3A23296443&sid=Entrez%3APubMed&isSerivcesPage=true&url_ctx_fmt=null&dstmp=1368806607612&vid=vcu_services_page&institution=VCU&fromLogin=true)
* vcu_uresolver_custom.css is included in the uresolver pages in the "view online" and "find or request" tabs
	* ["View online" tab](http://vcu-alma-primo.hosted.exlibrisgroup.com/primo_library/libweb/action/openurl?dscnt=1&id=pmid%3A23296443&sid=Entrez%3APubMed&isSerivcesPage=true&url_ctx_fmt=null&dstmp=1368806607612&vid=vcu_services_page&institution=VCU&fromLogin=true) on services page and search results
* services_page_custom_tab.html contains code to insert another tab on the services page
	* 	ex: ["Report problems" tab](http://vcu-alma-primo.hosted.exlibrisgroup.com/primo_library/libweb/action/openurl?dscnt=1&id=pmid%3A23296443&sid=Entrez%3APubMed&isSerivcesPage=true&url_ctx_fmt=null&dstmp=1368806607612&vid=vcu_services_page&institution=VCU&fromLogin=true) on VCU services page 

## See also
* [Primo topbar](https://gist.github.com/erinrwhite/3701830) - HTML and CSS to add a top banner to Primo screens
	* [Demo](http://www.people.vcu.edu/~erwhite/code/primo-topbar.html)
* [Query string redirector](https://gist.github.com/erinrwhite/5406567) - Quick PHP script to take a GET request and forward it to another URL. Helpful for uresolver migration.

## More reading
* [Jimmy Ghaphery's presentation at ELUNA 2013](http://www.people.vcu.edu/~jghapher/eluna2013/eluna_2013_openurl.pdf) details some of the customizations VCU made to Alma.

## Author
Written and maintained by [Erin White](mailto:erwhite@vcu.edu), VCU 