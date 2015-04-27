# Adding/updating updating custom CSS/Javascript in Primo frontend and backoffice

Author: [Erin White](mailto:erwhite@vcu.edu)

## Initial setup of custom theme files

A difficult thing done once:

1. Upload files to Primo server
  * ssh to your primo server
  * `sudo su - primo`
  * `cd /your/path/to/libweb/customized`
  * Download any new files to this new directory. 
2. If there are javascript files that need to be linked up, add the `<script>` tags to the `header.html` or `footer.html` files in `/your/path/to/libweb/customized/static_htmls`
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
  * `cd /your/path/to/libweb/customized`
  * [Optional] back up old JS/CSS files:
  ```
      cp search-handheld.css search-handheld.css.bak
      cp search.css  search.css.bak
      cp search.js search.js.bak
  ```
  * Copy over any changed files. There is probably a better way to do this, but I wget the newest files from web-prod. In most cases it will just be the two CSS files and maybe the JS:
  ```
      wget http://your-website/search.css
      wget http://your-website/search-handheld.css 
      wget http://your-website/search.js
  ```
  * The files will have a .1 on the end of the filename so need to be renamed:
  ```
  mv search.css.1  search.css
  mv search-handheld.css.1 search-handheld.css
  mv search.js.1 search.js
  ```
2. Deploy CSS updates in the Primo backoffice:
  * Primo backoffice -> Ongoing configuration -> Views
  * Choose the active view
  * Make sure the correct CSS configurations are selected:
  * Click through the view steps and deploy the view.
3. Verify the changes are showing on the public interface.

