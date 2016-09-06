# Creating custom Illiad links in Primo

Authors: [Alison Tinker](mailto:atinker@vcu.edu)

### Check Status link

We created a 'Check Status' button that links to Illiad and then injected it into the Loans and Requests tables in My Account.

CSS (found in [vcu_primo_custom.css](primo/vcu_primo_custom.css))

```
/* a call-to-action button */
a.cta-button {
  background: #004957;
    border: none;
    display: inline-block;
    height: auto;
    text-align: center;
    text-decoration: none !important;
    color: #FFF;
    margin: 10px auto 10px 0;
    padding: 0.5em 1.8em;
    width: auto;
    border-radius: 4px;
}
```

And the Javascript to inject the code for the link (found in [vcu_primo_custom.js](primo/vcu_primo_custom.js)). You will need to load JQuery as well.

```
  // Create the link to inject
    var illiadLink ='<a class="cta-button" href="https://www.library.vcu.edu/illiad/">Check Status</a>';

  // add the link to the Requests list
    $('#requestList tbody tr').each(function( i ) {
      var requestA = $(this).find('#request_type');
      var requestLoc = $(this).find('#pickup_location_name');
      var requestTrim = requestA.text().trim();

    if (requestTrim === 'ILL'){
      requestLoc.html(illiadLink);
    }

  });

  // add the link to the Loans list
  $('#LoansTable tbody tr').each(function( i ) {
      var loanA = $(this).find('.MyAccount_Loans_location');
      var loanStatus = $(this).find('.MyAccount_Loans_renewal');
      var loanTrim = loanA.text().trim();

    if (loanTrim === 'Interlibrary Loan Borrowing Resource Sharing Requests'){
      loanStatus.html(illiadLink);
    }

  });
```




