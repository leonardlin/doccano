# install the first time
$ pipenv shell
$ pip install doccano
$ doccano init
# doccano createuser --username admin --password pass

# run it

$ pipenv shell
$ doccano webserver --port 8000 &
$ doccano task &

$ cd frontend
$ yarn dev

yarn bug to resolve to git protocol
$ git config --global url."https://github.com/".insteadOf git@github.com:
$ git config --global url."https://".insteadOf git://

# build own image
mv .env .env.bak

docker build -f ./docker/Dockerfile -t doccano-leo ./
aws ecr get-login-password --region eu-west-1 | docker login --username AWS --password-stdin 945774840637.dkr.ecr.eu-west-1.amazonaws.com

docker tag doccano-leo:latest 945774840637.dkr.ecr.eu-west-1.amazonaws.com/doccano-leo:1
docker push 945774840637.dkr.ecr.eu-west-1.amazonaws.com/doccano-leo:1

mv .env.bak .env


##### leo variety #####
make changes in master and make PR to mainline
merge changes to branch 'leo-variety'
create docker and publish to own docker regisry
