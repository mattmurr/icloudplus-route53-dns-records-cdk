import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as IcloudRoute53Records from '../lib/icloud-route53-records-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new IcloudRoute53Records.IcloudRoute53RecordsStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
