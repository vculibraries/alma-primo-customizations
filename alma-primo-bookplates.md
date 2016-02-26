# Creating custom bookplates in Alma-Primo

Authors: [Emily Owens](mailto:eaowens@vcu.edu) and [Erin White](mailto:erwhite@vcu.edu), VCU

[VCU's bookplates in Primo](http://search.library.vcu.edu/primo_library/libweb/action/dlSearch.do?institution=VCU&vid=VCU&search_scope=all_scope&dym=true&query=any,contains,libgift)

## Part 1: Cataloging setup

Our catalogers use the 599 field for gift notes: $a for the note display, and $c is "virtual bookplate." 

Here is an example:

```
599__ |a In recognition of Dr. John S. Mahoney, Jr. for his leadership and service with the VCU Friends of the Library |c virtual bookplate |s standard |d 201505 |5 VRC
```
## Part 2: Primo backoffice setup
In the Primo norm rules, I set up two norm rules for Display and one for Search. All use the conditions ```599 $a exists``` and ```599 $c = virtual bookplate```.

Here's an [example of the finished PNX](http://goo.gl/M5anVG).

```lds08``` and ```lds09``` are the two PNX fields for Display. ```lds08``` is ```$a``` wrapped in a reference tag. This is the field we put in the third line of the brief display view. 

Erin and her team are able to use that reference to insert the script that makes the bookplate look so nice.

```lds09``` is the same ```$a``` text without the wrapper. We insert this in the full display view and map it to the label Donor/Honoree.

```lsr08``` is the custom field for Search. I copied ```599 $a``` again so that the donor's name would be searchable and also created a little codeword ([LIBGIFT](http://search.library.vcu.edu/primo_library/libweb/action/dlSearch.do?institution=VCU&vid=VCU&search_scope=all_scope&dym=true&query=any,contains,libgift)) that librarians can use to find these quickly.

## Part 3: Primo display customizations
