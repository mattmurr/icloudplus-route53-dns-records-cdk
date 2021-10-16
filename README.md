# Usage

After adding your domain name on [iCloud settings](https://www.icloud.com/settings/) you will be given a bunch of DNS records.

Export the environment variables: 
```
export TXT_RECORD=apple-domain=<Some alphanumeric string>
export DOMAIN_NAME=example.com
```

If your account does not already CDK bootstrapped for the AWS region, you'll need to do this before deploying:
```
npx cdk boostrap
```

Finally, assuming you already have your domain Route53 and AWS credentials configured, Deploy the stack:
```
npx cdk deploy
```

Once DNS is propogated to iCloud servers, you should be able to confirm that your domain is configured and you're ready to go 🚀
