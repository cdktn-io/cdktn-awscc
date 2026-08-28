// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediapackagev2_origin_endpoint_policy

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcOriginEndpointPolicyProps extends cdktn.TerraformMetaArguments {
    /**
    * <p>The settings to enable CDN authorization headers in MediaPackage.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediapackagev2_origin_endpoint_policy#cdn_auth_configuration CcOriginEndpointPolicy#cdn_auth_configuration}
    */
    readonly cdnAuthConfiguration?: CcOriginEndpointPolicy.CdnAuthConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediapackagev2_origin_endpoint_policy#channel_group_name CcOriginEndpointPolicy#channel_group_name}
    */
    readonly channelGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediapackagev2_origin_endpoint_policy#channel_name CcOriginEndpointPolicy#channel_name}
    */
    readonly channelName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediapackagev2_origin_endpoint_policy#origin_endpoint_name CcOriginEndpointPolicy#origin_endpoint_name}
    */
    readonly originEndpointName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediapackagev2_origin_endpoint_policy#policy CcOriginEndpointPolicy#policy}
    */
    readonly policy: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediapackagev2_origin_endpoint_policy awscc_mediapackagev2_origin_endpoint_policy}
*/
export class CcOriginEndpointPolicy extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_mediapackagev2_origin_endpoint_policy";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcOriginEndpointPolicy resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcOriginEndpointPolicy to import
    * @param importFromId The id of the existing CcOriginEndpointPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediapackagev2_origin_endpoint_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcOriginEndpointPolicy to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediapackagev2_origin_endpoint_policy", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediapackagev2_origin_endpoint_policy awscc_mediapackagev2_origin_endpoint_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcOriginEndpointPolicyProps
    */
    public constructor(scope: Construct, id: string, config: CcOriginEndpointPolicyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_mediapackagev2_origin_endpoint_policy',
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
        this._cdnAuthConfiguration.internalValue = config.cdnAuthConfiguration;
        this._channelGroupName = config.channelGroupName;
        this._channelName = config.channelName;
        this._originEndpointName = config.originEndpointName;
        this._policy = config.policy;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cdn_auth_configuration - computed: true, optional: true, required: false
    private _cdnAuthConfiguration = new CcOriginEndpointPolicy.CdnAuthConfigurationPropertyOutputReference(this, "cdn_auth_configuration");
    public get cdnAuthConfiguration() {
        return this._cdnAuthConfiguration;
    }
    public putCdnAuthConfiguration(value: CcOriginEndpointPolicy.CdnAuthConfigurationProperty) {
        this._cdnAuthConfiguration.internalValue = value;
    }
    public resetCdnAuthConfiguration() {
        this._cdnAuthConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cdnAuthConfigurationInput() {
        return this._cdnAuthConfiguration.internalValue;
    }

    // channel_group_name - computed: false, optional: false, required: true
    private _channelGroupName?: string; 
    public get channelGroupName() {
        return this.getStringAttribute('channel_group_name');
    }
    public set channelGroupName(value: string) {
        this._channelGroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get channelGroupNameInput() {
        return this._channelGroupName;
    }

    // channel_name - computed: false, optional: false, required: true
    private _channelName?: string; 
    public get channelName() {
        return this.getStringAttribute('channel_name');
    }
    public set channelName(value: string) {
        this._channelName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get channelNameInput() {
        return this._channelName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // origin_endpoint_name - computed: false, optional: false, required: true
    private _originEndpointName?: string; 
    public get originEndpointName() {
        return this.getStringAttribute('origin_endpoint_name');
    }
    public set originEndpointName(value: string) {
        this._originEndpointName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get originEndpointNameInput() {
        return this._originEndpointName;
    }

    // policy - computed: false, optional: false, required: true
    private _policy?: string; 
    public get policy() {
        return this.getStringAttribute('policy');
    }
    public set policy(value: string) {
        this._policy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
        return this._policy;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            cdn_auth_configuration: ccOriginEndpointPolicyCdnAuthConfigurationPropertyToTerraform(this._cdnAuthConfiguration.internalValue),
            channel_group_name: cdktn.stringToTerraform(this._channelGroupName),
            channel_name: cdktn.stringToTerraform(this._channelName),
            origin_endpoint_name: cdktn.stringToTerraform(this._originEndpointName),
            policy: cdktn.stringToTerraform(this._policy),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            cdn_auth_configuration: {
                value: ccOriginEndpointPolicyCdnAuthConfigurationPropertyToHclTerraform(this._cdnAuthConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcOriginEndpointPolicy.CdnAuthConfigurationProperty",
            },
            channel_group_name: {
                value: cdktn.stringToHclTerraform(this._channelGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            channel_name: {
                value: cdktn.stringToHclTerraform(this._channelName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            origin_endpoint_name: {
                value: cdktn.stringToHclTerraform(this._originEndpointName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            policy: {
                value: cdktn.stringToHclTerraform(this._policy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccOriginEndpointPolicyCdnAuthConfigurationPropertyToTerraform(struct?: CcOriginEndpointPolicy.CdnAuthConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cdn_identifier_secret_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cdnIdentifierSecretArns),
        secrets_role_arn: cdktn.stringToTerraform(struct!.secretsRoleArn),
    }
}


export function ccOriginEndpointPolicyCdnAuthConfigurationPropertyToHclTerraform(struct?: CcOriginEndpointPolicy.CdnAuthConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cdn_identifier_secret_arns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cdnIdentifierSecretArns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        secrets_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretsRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcOriginEndpointPolicy {
export interface CdnAuthConfigurationProperty {
    /**
    * <p>The ARN for the secret in Secrets Manager that your CDN uses for authorization to access the endpoint.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediapackagev2_origin_endpoint_policy#cdn_identifier_secret_arns CcOriginEndpointPolicy#cdn_identifier_secret_arns}
    */
    readonly cdnIdentifierSecretArns?: string[];
    /**
    * <p>The ARN for the IAM role that gives MediaPackage read access to Secrets Manager and KMS for CDN authorization.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediapackagev2_origin_endpoint_policy#secrets_role_arn CcOriginEndpointPolicy#secrets_role_arn}
    */
    readonly secretsRoleArn?: string;
}
export class CdnAuthConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CdnAuthConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cdnIdentifierSecretArns !== undefined) {
            hasAnyValues = true;
            internalValueResult.cdnIdentifierSecretArns = this._cdnIdentifierSecretArns;
        }
        if (this._secretsRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretsRoleArn = this._secretsRoleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CdnAuthConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cdnIdentifierSecretArns = undefined;
            this._secretsRoleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cdnIdentifierSecretArns = value.cdnIdentifierSecretArns;
            this._secretsRoleArn = value.secretsRoleArn;
        }
    }

    // cdn_identifier_secret_arns - computed: true, optional: true, required: false
    private _cdnIdentifierSecretArns?: string[]; 
    public get cdnIdentifierSecretArns() {
        return this.getListAttribute('cdn_identifier_secret_arns');
    }
    public set cdnIdentifierSecretArns(value: string[]) {
        this._cdnIdentifierSecretArns = value;
    }
    public resetCdnIdentifierSecretArns() {
        this._cdnIdentifierSecretArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cdnIdentifierSecretArnsInput() {
        return this._cdnIdentifierSecretArns;
    }

    // secrets_role_arn - computed: true, optional: true, required: false
    private _secretsRoleArn?: string; 
    public get secretsRoleArn() {
        return this.getStringAttribute('secrets_role_arn');
    }
    public set secretsRoleArn(value: string) {
        this._secretsRoleArn = value;
    }
    public resetSecretsRoleArn() {
        this._secretsRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretsRoleArnInput() {
        return this._secretsRoleArn;
    }
}
}
