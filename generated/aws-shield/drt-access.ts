// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/shield_drt_access

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDRTAccessProps extends cdktn.TerraformMetaArguments {
    /**
    * Authorizes the Shield Response Team (SRT) to access the specified Amazon S3 bucket containing log data such as Application Load Balancer access logs, CloudFront logs, or logs from third party sources. You can associate up to 10 Amazon S3 buckets with your subscription.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/shield_drt_access#log_bucket_list CcDRTAccess#log_bucket_list}
    */
    readonly logBucketList?: string[];
    /**
    * Authorizes the Shield Response Team (SRT) using the specified role, to access your AWS account to assist with DDoS attack mitigation during potential attacks. This enables the SRT to inspect your AWS WAF configuration and create or update AWS WAF rules and web ACLs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/shield_drt_access#role_arn CcDRTAccess#role_arn}
    */
    readonly roleArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/shield_drt_access awscc_shield_drt_access}
*/
export class CcDRTAccess extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_shield_drt_access";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDRTAccess resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDRTAccess to import
    * @param importFromId The id of the existing CcDRTAccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/shield_drt_access#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDRTAccess to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_shield_drt_access", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/shield_drt_access awscc_shield_drt_access} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDRTAccessProps
    */
    public constructor(scope: Construct, id: string, config: CcDRTAccessProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_shield_drt_access',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._logBucketList = config.logBucketList;
        this._roleArn = config.roleArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // account_id - computed: true, optional: false, required: false
    public get accountId() {
        return this.getStringAttribute('account_id');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // log_bucket_list - computed: true, optional: true, required: false
    private _logBucketList?: string[]; 
    public get logBucketList() {
        return this.getListAttribute('log_bucket_list');
    }
    public set logBucketList(value: string[]) {
        this._logBucketList = value;
    }
    public resetLogBucketList() {
        this._logBucketList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logBucketListInput() {
        return this._logBucketList;
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            log_bucket_list: cdktn.listMapper(cdktn.stringToTerraform, false)(this._logBucketList),
            role_arn: cdktn.stringToTerraform(this._roleArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            log_bucket_list: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._logBucketList),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcDRTAccess {
}
