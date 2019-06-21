# VCU Libraries Search customizations (classic UI)

These are visual customizations for [VCU Libraries Search](http://search.library.vcu.edu/) which is running on Ex Libris' Alma and Primo platforms.

## Alma customizations

Each file exists independently and doesn't require the other files.

* vcu_services_pages_custom.css is included in the services_page view for Alma
	* [Example services page](http://vcu-alma-primo.hosted.exlibrisgroup.com/primo_library/libweb/action/openurl?dscnt=1&id=pmid%3A23296443&sid=Entrez%3APubMed&isSerivcesPage=true&url_ctx_fmt=null&dstmp=1368806607612&vid=vcu_services_page&institution=VCU&fromLogin=true)
* vcu_uresolver_custom.css is included in the uresolver pages in the "view online" and "find or request" tabs
	* ["View online" tab](http://vcu-alma-primo.hosted.exlibrisgroup.com/primo_library/libweb/action/openurl?dscnt=1&id=pmid%3A23296443&sid=Entrez%3APubMed&isSerivcesPage=true&url_ctx_fmt=null&dstmp=1368806607612&vid=vcu_services_page&institution=VCU&fromLogin=true) on services page and search results
* services_page_custom_tab.html contains code to insert another tab on the services page
	* 	ex: ["Report problems" tab](http://vcu-alma-primo.hosted.exlibrisgroup.com/primo_library/libweb/action/openurl?dscnt=1&id=pmid%3A23296443&sid=Entrez%3APubMed&isSerivcesPage=true&url_ctx_fmt=null&dstmp=1368806607612&vid=vcu_services_page&institution=VCU&fromLogin=true) on VCU services page 

### Alma customizations: more reading
* [Jimmy Ghaphery's presentation at ELUNA 2013](http://scholarscompass.vcu.edu/libraries_present/23/) details some of the customizations VCU made to Alma.

## Primo customizations

We rolled out visual updates to VCU Libraries search in July 2014. These files all need to be present for the design to work.

* vcu_primo_custom.css and
vcu_primo_custom_handheld.css - Desktop and responsive designs included in all views for Primo
    * [Example Primo page](http://search.library.vcu.edu/primo_library/libweb/action/dlSearch.do?institution=VCU&vid=VCU&onCampus=false&group=GUEST&search_scope=all_scope&query=any,contains,kittens)
* vcu_primo_custom.js updates the DOM for some of the CSS changes including the expanding/collapsing facets and the slide-in facets list for mobile devices. It incorporates [Notre Dame's Primo date slider fixes](https://github.com/ndlib/primo-javascript).

We've also documented [how to add and update custom CSS and Javascript](updating-themes.md) to Primo.

### Sites using Primo customizations

* [VCU Libraries](http://search.library.vcu.edu/)
* [CUNY System](http://onesearch.cuny.edu/primo_library/libweb/action/search.do?vid=CUNY)
* [Purdue Libraries](http://purdue-primo-prod.hosted.exlibrisgroup.com/primo_library/libweb/action/search.do?vid=PURDUE)
* If you're using these customizations, [let Erin White know](mailto:erwhite@vcu.edu) or submit a pull request to this readme.

### Virtual bookplates

We have implemented virtual bookplates:
 - [How we implemented virtual bookplates](alma-primo-bookplates-classic-UI.md)
 - [Examples of bookplates](http://search.library.vcu.edu/primo_library/libweb/action/dlSearch.do?institution=VCU&vid=VCU&search_scope=all_scope&dym=true&query=any,contains,libgift)

### Primo customizations: see also
* [Primo topbar](https://gist.github.com/erinrwhite/3701830) - HTML and CSS to add a top banner to Primo screens
	* [Demo](http://www.people.vcu.edu/~erwhite/code/primo-topbar.html)
* [Query string redirector](https://gist.github.com/erinrwhite/5406567) - Quick PHP script to take a GET request and forward it to another URL. Helpful for uresolver migration.

### Primo customizations: more reading
* [Erin White's writeup on these design customizations](http://erinrwhite.com/a-new-look-for-search-at-vcu-libraries/)

## Authors
* [Erin White](mailto:erwhite@vcu.edu), Web Systems Librarian, VCU Libraries
* [Alison Tinker](mailto:atinker@vcu.edu), Web Designer, VCU Libraries
