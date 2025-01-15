# invitation-be

My wedding invitation serverless back-end. This project creates a serverless stack that deploys a `s3` bucket and the needed lambdas for the Invitation to retrieve information to be shown.

## Requirements
- [NodeJS](https://nodejs.org/download/release/v20.11.1) >= 20
- [Serverless](https://www.serverless.com/framework/docs/getting-started)
- [aws-cli](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)

## Installing
Run `npm i` command for installation.

## Project Commands

```bash
# run local service
$ npm start

# deployment of service
$ sls deploy
```

### Notes

Ensure `aws-cli` configuration to deploy correctly to your AWS account.

## Contact & Author

[Azael Contreras](https://github.com/thedamphair)