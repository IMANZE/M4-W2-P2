# M4-W2-P2
Strive Book Shop 📚
You are creating a shopping cart experience for an online marketplace.

You should put together the tools you've been taught to create a working application with these basic requirements:

 

A homepage with book displayed as cards
the cards have an add to cart button and a skip button
A cart section. The cart is going to be a list of elements the user puts into it
An input field to filter the books
 

Tasks you need to perform to achieve those requirements:

Get all products from the API: https://striveschool-api.herokuapp.com/books
Display all the books using template literals and .forEach() or .map()
Add an add to cart button into each item
When this button is pressed: 1) add the item to another list (the cart), and 2) change the card styling to show that the element is in the cart (eg. red border, a badge, an icon… you choose)
Add a skip button inside each card
When pressed, this button should remove that book element from the page
Add a search bar. When the user types more than 3 characters, filter the content of the API response to only display the books with a matching (or partially matching) title (hint: use .filter())
Allow users to delete books from their cart
Count the cart items using a .reduce() method and display the result somewhere in the cart
EXTRAS:
Add a empty cart button, to delete the whole list
Create a detail page: when the user clicks on a book, they get redirected to another page. Pass the ASIN as a query string.
In the detail page, show the details of the book matching the ASIN in the query string: use this endpoint: https://striveschool-api.herokuapp.com/books/your_id_here


See final image attached for pictorial view of project
 
