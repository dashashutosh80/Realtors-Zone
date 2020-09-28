# Realtors-Zone
A web application where users can view details of different listings posted by the realtors.

Features:
1. Admin user can add realtors and different listings with features such as House Type, price, Sqft, No. of bathrooms, No. of bedrooms, No. of photos available,
   open house feature, RENT/SALE of house, and keywords.
2. Users can see the entire list of listings.
3. Users can filter the listings based on any combination of search fields.
4. Users can view details of every listing by clicking on them.
5. For viewing detil of a listing, user has to be authenticated.
6. Users can view the top seller among all the realtors.
7. They can also view the contact information of every realtor.
8. Users can also send an email regarding their queries by filling out a contact form.

This application uses Django Rest Framework for APIs in the backend, ReactJs as frontend and PostgreSQL as the database. Redux is used for state management and for authentication
purposes as certain features of application are only available for logged in users. Pagination feature has been implemented in this application using both Django and React in
order to provide developers a better understanding of the workings of each of them. Custom Styling is implemented using SASS.

