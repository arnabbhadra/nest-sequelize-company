## Description
This application consists of create fetch companies and teams with JWT authorization.
One need docker install to run the application. So no there set up is needed.
The application has been developed using NestJS framework.
**Postgresql** is used as database.
## Getting Started
One can download this repo or clone using below command. 
```
git clone https://github.com/arnabbhadra/nest-sequelize-company.git
```
or from **Download Zip**
```
https://github.com/arnabbhadra/nest-sequelize-company
```
### Project Setup
Once one clone or download project go into the folder
### Database Config Setup
Create new database (let's say we going to use postgres and database name is **CompanyDB**).
so in the **.env** file will set below parameters.
```
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=admin
DB_DIALECT=postgres
DB_NAME_DEVELOPMENT=CompanyDB
```
some other important parameters/keys in **.env** file
```
SECRET_KEY="131456789ihytrewretyuio98i7u6y5t4r3eewqrtyui"
TOKEN_EXPIRATION=48h
```

## Build the application
As docker is implemented, run the below command and it will create docker image

```
sudo docker build . -t nestjs-app
```
## Run the application
To run the application, use below command
```
sudo docker run --network=host nestjs-app
```
To run the application for development, use below command
```
npm run start:dev
```

## APIs

### Get JWT token (Both scope)
```
> GET http://localhost:3000/api/v1/auth/both
> RESPONSE
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJtaXNzaW9ucyI6WyJyZWFkIiwid3JpdGUiXSwiaWF0IjoxNjg3MDI0NDk0fQ.3xNpFe99ZCSqFvyRmogodzimxGKEwd1A-WWADcpiFLw"
}
```

## GET JWT token (Single scope (read))
```
> GET http://localhost:3000/api/v1/auth/single
> RESPONSE
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJtaXNzaW9ucyI6WyJyZWFkIiwid3JpdwqwrerewroxNjg3MDI0NDk0fQ.3xNpFe99ZCSqFvyRmogodzimxGKEwd1A-WWADcpiFLw"
}
```
## Create a company
```
> POST http://localhost:3000/api/v1/company
> AUTHORIZATION Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJtaXNzaW9ucyI6WyJyZWFkIiwid3JpdwqwrerewroxNjg3MDI0NDk0fQ.3xNpFe99ZCSqFvyRmogodzimxGKEwd1A-WWADcpiFLw
> PAYLOAD EXAMPLE
{
    "companyName": " Y soultion",
    "companyCeo": "peter",
    "companyAddress": "Hyderabad 3456",
    "inceptionDate": "01/01/2023"    
}
```
## create a team
```
> POST http://localhost:3000/api/v1/team/:uuid    
> AUTHORIZATION Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJtaXNzaW9ucyI6WyJyZWFkIiwid3JpdwqwrerewroxNjg3MDI0NDk0fQ.3xNpFe99ZCSqFvyRmogodzimxGKEwd1A-WWADcpiFLw
> PARAM uuid company id
> PAYLOAD EXAMPLE
{
    "teamLeadName": "rohit"
}
```
### Fetch a company by company id
```
> GET http://localhost:3000/api/v1/company/:uuid
> AUTHORIZATION Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJtaXNzaW9ucyI6WyJyZWFkIiwid3JpdwqwrerewroxNjg3MDI0NDk0fQ.3xNpFe99ZCSqFvyRmogodzimxGKEwd1A-WWADcpiFLw
> PARAM uuid company id
> RESPONSE
{
    data:{
        "uuid": "f2bc4cee-ea19-4ea2-aac7-c2d33706aa8c",
        "companyName": " Y soultion",
        "companyCeo": "peter",
        "companyAddress": "Hyderabad 3456",
        "inceptionDate": "2022-12-31T18:30:00.000Z"
    }
}
```
## Search a company by name
```
> GET http://localhost:3000/api/v1/company?name=Solution
> AUTHORIZATION Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJtaXNzaW9ucyI6WyJyZWFkIiwid3JpdwqwrerewroxNjg3MDI0NDk0fQ.3xNpFe99ZCSqFvyRmogodzimxGKEwd1A-WWADcpiFLw
> QUERY name 
> RESPONSE
{
    data: [{
        "uuid": "f2bc4cee-ea19-4ea2-aac7-c2d33706aa8c",
        "companyName": " Y soultion",
        "companyCeo": "peter",
        "companyAddress": "Hyderabad 3456",
        "inceptionDate": "2022-12-31T18:30:00.000Z"
    }]  
}
```

## GET All teams
```
> GET http://localhost:3000/api/v1/company/all
> AUTHORIZATION Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJtaXNzaW9ucyI6WyJyZWFkIiwid3JpdwqwrerewroxNjg3MDI0NDk0fQ.3xNpFe99ZCSqFvyRmogodzimxGKEwd1A-WWADcpiFLw
> RESPONSE
{
    data: [
        {
            "uuid": "5a68ea94-a374-4be1-9a7d-8436e8b85966",
            "companyName": " Y soultion",
            "companyCeo": "peter",
            "companyAddress": "Hyderabad 3456",
            "inceptionDate": "2022-12-31T18:30:00.000Z",
            "teams": [
                {
                    "uuid": "c68305fc-7fa8-4172-8913-307708fc9344",
                    "teamLeadName": "rohit"
                }
            ]
        }]
}
```




