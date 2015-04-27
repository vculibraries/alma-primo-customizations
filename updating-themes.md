# Adding/updating updating custom CSS/Javascript in Primo frontend and backoffice

[Erin White](mailto:erwhite@vcu.edu) - Fall 2014

## Initial setup of custom theme files

A difficult thing done once:

1. Upload files to Primo server
  * ssh to your primo server
  * `sudo su - primo`
  * Find your `libweb/customized` directory. 
  * Download any new files to this new directory. 
2. If there are javascript files that need to be linked up, add the `<script>` tags to the `header.html` or `footer.html` files in `libweb/customized/static_htmls/`
3. Add CSS files to CSS mapping table in Primo Backoffice
  * Log in to the Primo backoffice
  * Advanced Configuration -> Mapping Tables -> CSS
  * Create a new CSS configuration with a descriptive name and a list of CSS files separated by semicolon. Use the Primo default CSS as the base. Note the directory structure for custom CSS files![image alt text](image_0.png)
  * For handheld styles, create another new CSS for handheld. Use mobile.css for the base.
  * Save.
4. Apply CSS theme(s) to view
  * Primo backoffice -> Ongoing configuration -> Views
  * Choose the active view
  * Select the CSS configurations you just created:
  * Click through the view steps and deploy the view.
  * Verify that the updates are showing.

## Ongoing updates

1. Update files on Primo server:
  * ssh to your Primo server
  * `sudo su - primo`
  * `cd /exlibris_real/primo/p4_1/ng/primo/home/system/tomcat/search/webapps/primo_library#libweb/customized/DIRECTORYNAME`
  * [Optional] back up old JS/CSS files:
```
    cp search-handheld.css search-handheld.css.bak
    cp search.css  search.css.bak
    cp search.js search.js.bak
```
If changing services pages design:
```
    cp services-handheld.css services-handheld.css.bak
    cp services.css  services.css.bak
```
  * Copy over any changed files. There is probably a better way to do this, but I wget the newest files from web-prod. In most cases it will just be the two CSS files and maybe the JS:
```
    wget https://apps.library.vcu.edu/primo_assets/search.css --no-check-certificate
    wget https://apps.library.vcu.edu/primo_assets/search-handheld.css --no-check-certificate
    wget https://apps.library.vcu.edu/primo_assets/search.js --no-check-certificate
```
If changing services pages design:
```
wget https://apps.library.vcu.edu/primo_assets/services.css --no-check-certificate
wget https://apps.library.vcu.edu/primo_assets/services-handheld.css --no-check-certificate
```

  * The files will have a .1 on the end of the filename so need to be renamed:
```
mv search.css.1  search.css
mv search-handheld.css.1 search-handheld.css
mv search.js.1 search.js
```
If changing services pages design:
```
mv services-handheld.css.1 services-handheld.css
mv services.css.1  services.css
```
2. Deploy CSS updates in the Primo backoffice:
  * Primo backoffice -> Ongoing configuration -> Views
  * Choose the active view
  * If updating the services page design, select vid vcu_services_page
  * Make sure the correct CSS configurations are selected:
  * If updating the services page design:
  * Click through the view steps and deploy the view.
3. Verify the changes are showing on the public interface.

