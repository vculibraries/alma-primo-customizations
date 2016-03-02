# Creating custom bookplates in Alma-Primo

Authors: [Emily Owens](mailto:eaowens@vcu.edu) and [Erin White](mailto:erwhite@vcu.edu), VCU

[VCU's bookplates in Primo](http://search.library.vcu.edu/primo_library/libweb/action/dlSearch.do?institution=VCU&vid=VCU&search_scope=all_scope&dym=true&query=any,contains,libgift)

## Part 1: Cataloging setup

Our catalogers use the 599 field for gift notes: $a for the note display, and ```$c``` is "virtual bookplate." 

Here is an example:

```
599__ |a In recognition of Dr. John S. Mahoney, Jr. for his leadership and service with the VCU Friends of the Library |c virtual bookplate |s standard |d 201505 |5 VRC
```
## Part 2: Primo backoffice setup
In the Primo norm rules, we set up two norm rules for Display and one for Search. All should use the conditions ```599 $a exists``` and ```599 $c = virtual bookplate```.

Here's an [example of a finished PNX record](http://goo.gl/M5anVG).

```lds08``` and ```lds09``` are the two PNX fields for Display. 

### Brief display
```lds08``` is ```$a``` wrapped in an HTML ```<a>``` tag. Then we put this field in the third line of the brief display view. 

```<a href="#bookplates">In recognition of Dr. John S. Mahoney, Jr. for his leadership and service with the VCU Friends of the Library </a>```

That HTML tag is used trigger the javascript that makes the bookplates display.

![bookplate brief display](http://vculibraries.github.io/alma-primo-customizations/readme-images/bookplate-briefdisplay.png)

### Full display
```lds09``` is the same ```$a``` text without the wrapper. We insert this in the full display view and map it to the label Donor/Honoree.

### Search configuration
```lsr08``` is the custom field for Search. I copied ```599 $a``` again so that the donor's name would be searchable and also created a little codeword ([LIBGIFT](http://search.library.vcu.edu/primo_library/libweb/action/dlSearch.do?institution=VCU&vid=VCU&search_scope=all_scope&dym=true&query=any,contains,libgift)) that librarians can use to find these quickly.

## Part 3: Primo display customizations

On the Primo frontend, there is custom CSS and Javascript that is enabled if  the special ```<a>``` tag appears in the brief display field. 

See [instructions for adding custom CSS and Javascript to Primo](updating-themes.md). Note: the CSS references images that are stored on the Primo server, but images can be stored on any server.

### Brief display 

Styling for the brief display ([example records](http://search.library.vcu.edu/primo_library/libweb/action/dlSearch.do?institution=VCU&vid=VCU&search_scope=all_scope&dym=true&query=any,contains,libgift)):

![bookplate brief display](http://vculibraries.github.io/alma-primo-customizations/readme-images/bookplate-briefdisplay.png)

CSS (found in [vcu_primo_custom.css](vcu_primo_custom.css))

```
/* brief display */
h3.EXLResultFourthLine a {
  background-image: url('path/to/librarylogo.png');
  background-size: 74px;
  background-position: 12px;
  background-repeat: no-repeat;
  padding: 9px 16px 8px 101px !important;
  font-weight: bold;
  display: inline-block;
  border: 2px solid #FFD261;
  margin: 8px 0;

}
```
### Bookplate popup/lightbox display

For the lightboxed bookplate we are using some custom CSS and JS along with the [Magnific Popup](http://dimsemenov.com/plugins/magnific-popup/).

![bookplate popup](http://vculibraries.github.io/alma-primo-customizations/readme-images/bookplate-popup.png)

CSS (found in [vcu_primo_custom.css](vcu_primo_custom.css))

```
/* actual bookplate popup */
.bp-standard {
    background-image: url('path/to/background.png');
}

.bookplate-popup {
  position: relative;
  padding: 40px;
  width: 280px;
  height: 540px;
  margin: 20px auto;
  text-align: center;
  background-repeat: no-repeat;
}

.bookplate-text {
  margin-top: 80px;
  font-size: 30px;
}
```

And the Javascript to inject the code for the popup (found in [vcu_primo_custom.js](vcu_primo_custom.js)). Note that the Javascript for the [Magnific Popup](http://dimsemenov.com/plugins/magnific-popup/) is included at the very beginning of the Javascript file as well.

```
  // bookplate popup
  $('h3.EXLResultFourthLine a').click(function(evt){
    evt.preventDefault();
    var bookplateText = $(this).text();
    $.magnificPopup.open({
      items: {
          src: $('<div class="bookplate-popup bp-standard"><div class="bookplate-text">' + bookplateText + '</div></div>'),
          type: 'inline'
      }
    }, 0 );
  });
```




