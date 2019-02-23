# Application Process GraphQL API

This repository contains the GraphQL API for the High Fives application process. This app is used to create new applicant accounts, save application progress, and submit final applications to High Fives Staff.

## Deployment Instructions

This project is built on Amazon Web Services. Specifically the GraphQL API uses AWS Lambdas, Dynamo DB Tables, and Cognito User Pools. To get started you must first clone this repository and deploy it to your own AWS development account.

### Step 1: Clone Repository

First clone this repository and install the dependencies.

1. clone repository: `git clone https://github.com/HighFivesFoundation/application-api.git`
2. navigate to project root: `cd application-api`
3. install dependencies: `npm i`

### Step 2: AWS Setup

You must create an AWS Account, an IAM user, and install the aws cli locally. If you already have an AWS account and the AWS cli setup you can skip these steps.

1. create AWS account: Navigate to [AWS Homepage](https://aws.amazon.com/), and click `create account`.
2. Create an IAM User Account: Follow [these instructions](https://serverless-stack.com/chapters/create-an-iam-user.html) to create an IAM user account.
3. Install AWS CLI with `pip` or `homebrew`
   - PIP: `sudo pip install awscli`
   - Homebrew: `brew install awscli`
4. Configure AWS CLI with IAM credentials: `aws configure`
   - Add your **Access Key ID** and **Secret access key** from your IAM user
   - Set the default format to **json**

### Step 4: Deploy Serverless Resources to AWS

The final step is to deploy the resources for this project to your AWS account.

1. Install Serverless: `npm install -g serverless`
2. Deploy: `serverless deploy`

```
Service Information
service: apollo-lambda
stage: dev
region: us-west-1
stack: apollo-lambda-dev
resources: 11
api keys:
  None
endpoints:
  POST - https://3bab949j4k.execute-api.us-west-1.amazonaws.com/dev/graphql
functions:
  graphql: apollo-lambda-dev-graphql
layers:
  None
```

Once complete you should see information about how to access your dev lambda. You can POST GraphQL operations to the endpoint provided.
