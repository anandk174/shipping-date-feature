# shipping-date-feature
full stack project to implement feature for calculating shipping date of products

## Prerequisites 
To run this project you need to have docker installed in your machine. If you don't have docker, you can download it from [here](https://www.docker.com/products/docker-desktop/).

## Context
This application has been developed to implement a feature which shows all the products in an e-commerce store, its details and the date it would ship if purchased. 

## Directory Structure
```
root
│-- accumula_frontend
│-- accumula_backend
│-- docker-compose.yml
```

There are two main parts of this application, the frontend and the backend.

1. The frontend is an angular application which consists of the UI components of this feature. It has been created using Angular's tutorial [titled tour-of-heroes](https://angular.io/tutorial/tour-of-heroes)
2. The backend is a Flask server which has the necessary APIs for serving this application

Each of the above have their own respective dockerfiles which allow them to be containerized. 

Please follow the instructions below to run the application in your local environment

```
1. open terminal
2. go to desired folder location
3. execute: git clone https://github.com/anandk174/shipping-date-feature.git
4. execute: cd shipping-date-feature
5. execute: docker-compose up
```

After executing the above commands, you should be able to access the application at http://localhost:4200/ (assuming you have no other applications running on that port)

