import * as cdk from '@aws-cdk/core';
import * as route53 from '@aws-cdk/aws-route53';
  
export interface IcloudRoute53RecordsProps extends cdk.StackProps {
  domainName: string;
  txtRecord: string;
}

export class IcloudRoute53RecordsStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: IcloudRoute53RecordsProps) {
    super(scope, id, props);

    const zone = route53.HostedZone.fromLookup(this, "Zone", { domainName: props.domainName });

    new route53.MxRecord(this, "MxRecords", {
      values: [
        {
          hostName: "mx01.mail.icloud.com.",
          priority: 10
        },
        {
          hostName: "mx02.mail.icloud.com.",
          priority: 10
        }
      ],
      zone,
    });

    new route53.TxtRecord(this, "TxtRecord", {
      values: [
        props.txtRecord,
        "v=spf1 redirect=icloud.com"
      ],
      zone
    })

    new route53.CnameRecord(this, "CnameRecord", {
      recordName: "sig1._domainkey",
      domainName: "sig1.dkim.compti.me.at.icloudmailadmin.com.",
      zone
    })
  }
}
