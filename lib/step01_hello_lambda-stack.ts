import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";
import * as apigw from "@aws-cdk/aws-apigateway";
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';


export class Step01HelloLambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);


    const hello = new lambda.Function(this, "HelloHandler", {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset("lambda"),
      handler: "hello.handler",
  });

     new apigw.LambdaRestApi(this, "Endpoint", {
      handler: hello,
    });
    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'Step01HelloLambdaQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
