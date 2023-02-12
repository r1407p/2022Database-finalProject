# 2022Database-finalProject
To run application
1. ensure their is `node` and `postgre` environment set up
  download **postrge**
  install **node**
2. make sure there is a connection to the AWS RDS instance and the DB is running
3. install and build in front end
```
cd ./frontend
npm install
npm run build
```
4. replace the files in `backend/app/views` with the files in `frontend/build`
5. run application on locol host
```
cd ./backend
npm install
node server.js
```

For auto update 
1. in commander "!pip install kaggle"
2. add kaggle.json in /user/users/.kaggle
3. run auto_updata.py
