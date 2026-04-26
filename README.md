# Rosietaxicab.com

````
npm install

npm run build
````
To change the port of service, you need to edit packages.json
for both npm run dev and npm run start commands.
```shell
npm start

or 
pm2 start "npm start"
pm2 start npm --name newrosi -- start
pm2 start npm --name rosi -- start

```

in case pm2 is not responding or is stuck and you want to restart service.
```shell
ps aux | grep pm2 | grep -v grep | awk '{print $2}' | xargs kill -9

```
## Database 
database table creation scripts are located in ``migrations`` folder. there is a file in root directory. file named ``migrate.js`` which iterates over all the files in migrations directory and runs the code in .sql files to create and edit tables.
```dotenv
DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=
DB_NAME=rosie
```
```shell
node migrate
```

Table helper function files are located in ``db`` directory.

```
sudo certbot certonly --manual --preferred-challenges dns -d new.rosietaxicab.com


Successfully received certificate.
Certificate is saved at: /etc/letsencrypt/live/new.rosietaxicab.com/fullchain.pem
Key is saved at:         /etc/letsencrypt/live/new.rosietaxicab.com/privkey.pem

```

