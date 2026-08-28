// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_cloudfront_origin_access_identity

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCloudFrontOriginAccessIdentityProps extends cdktn.TerraformMetaArguments {
    /**
    * The current configuration information for the identity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_cloudfront_origin_access_identity#cloudfront_origin_access_identity_config CcCloudFrontOriginAccessIdentity#cloudfront_origin_access_identity_config}
    */
    readonly cloudfrontOriginAccessIdentityConfig: CcCloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentityConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_cloudfront_origin_access_identity awscc_cloudfront_cloudfront_origin_access_identity}
*/
export class CcCloudFrontOriginAccessIdentity extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cloudfront_cloudfront_origin_access_identity";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCloudFrontOriginAccessIdentity resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCloudFrontOriginAccessIdentity to import
    * @param importFromId The id of the existing CcCloudFrontOriginAccessIdentity that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_cloudfront_origin_access_identity#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCloudFrontOriginAccessIdentity to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudfront_cloudfront_origin_access_identity", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_cloudfront_origin_access_identity awscc_cloudfront_cloudfront_origin_access_identity} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCloudFrontOriginAccessIdentityProps
    */
    public constructor(scope: Construct, id: string, config: CcCloudFrontOriginAccessIdentityProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudfront_cloudfront_origin_access_identity',
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
        this._cloudfrontOriginAccessIdentityConfig.internalValue = config.cloudfrontOriginAccessIdentityConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cloudfront_origin_access_identity_config - computed: false, optional: false, required: true
    private _cloudfrontOriginAccessIdentityConfig = new CcCloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentityConfigPropertyOutputReference(this, "cloudfront_origin_access_identity_config");
    public get cloudfrontOriginAccessIdentityConfig() {
        return this._cloudfrontOriginAccessIdentityConfig;
    }
    public putCloudfrontOriginAccessIdentityConfig(value: CcCloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentityConfigProperty) {
        this._cloudfrontOriginAccessIdentityConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudfrontOriginAccessIdentityConfigInput() {
        return this._cloudfrontOriginAccessIdentityConfig.internalValue;
    }

    // cloudfront_origin_access_identity_id - computed: true, optional: false, required: false
    public get cloudfrontOriginAccessIdentityId() {
        return this.getStringAttribute('cloudfront_origin_access_identity_id');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // s3_canonical_user_id - computed: true, optional: false, required: false
    public get s3CanonicalUserId() {
        return this.getStringAttribute('s3_canonical_user_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            cloudfront_origin_access_identity_config: ccCloudFrontOriginAccessIdentityCloudFrontOriginAccessIdentityConfigPropertyToTerraform(this._cloudfrontOriginAccessIdentityConfig.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            cloudfront_origin_access_identity_config: {
                value: ccCloudFrontOriginAccessIdentityCloudFrontOriginAccessIdentityConfigPropertyToHclTerraform(this._cloudfrontOriginAccessIdentityConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentityConfigProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCloudFrontOriginAccessIdentityCloudFrontOriginAccessIdentityConfigPropertyToTerraform(struct?: CcCloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentityConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comment: cdktn.stringToTerraform(struct!.comment),
    }
}


export function ccCloudFrontOriginAccessIdentityCloudFrontOriginAccessIdentityConfigPropertyToHclTerraform(struct?: CcCloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentityConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comment: {
            value: cdktn.stringToHclTerraform(struct!.comment),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcCloudFrontOriginAccessIdentity {
export interface CloudFrontOriginAccessIdentityConfigProperty {
    /**
    * A comment to describe the origin access identity. The comment cannot be longer than 128 characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_cloudfront_origin_access_identity#comment CcCloudFrontOriginAccessIdentity#comment}
    */
    readonly comment: string;
}
export class CloudFrontOriginAccessIdentityConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CloudFrontOriginAccessIdentityConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comment !== undefined) {
            hasAnyValues = true;
            internalValueResult.comment = this._comment;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CloudFrontOriginAccessIdentityConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comment = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comment = value.comment;
        }
    }

    // comment - computed: false, optional: false, required: true
    private _comment?: string; 
    public get comment() {
        return this.getStringAttribute('comment');
    }
    public set comment(value: string) {
        this._comment = value;
    }
    // Temporarily expose input value. Use with caution.
    public get commentInput() {
        return this._comment;
    }
}
}
