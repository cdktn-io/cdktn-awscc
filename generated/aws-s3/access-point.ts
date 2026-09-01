// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_access_point

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAccessPointProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the bucket that you want to associate this Access Point with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_access_point#bucket CcAccessPoint#bucket}
    */
    readonly bucket: string;
    /**
    * The AWS account ID associated with the S3 bucket associated with this access point.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_access_point#bucket_account_id CcAccessPoint#bucket_account_id}
    */
    readonly bucketAccountId?: string;
    /**
    * The name you want to assign to this Access Point. If you don't specify a name, AWS CloudFormation generates a unique ID and uses that ID for the access point name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_access_point#name CcAccessPoint#name}
    */
    readonly name?: string;
    /**
    * The Access Point Policy you want to apply to this access point.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_access_point#policy CcAccessPoint#policy}
    */
    readonly policy?: string;
    /**
    * The PublicAccessBlock configuration that you want to apply to this Access Point. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status 'The Meaning of Public' in the Amazon Simple Storage Service Developer Guide.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_access_point#public_access_block_configuration CcAccessPoint#public_access_block_configuration}
    */
    readonly publicAccessBlockConfiguration?: CcAccessPoint.PublicAccessBlockConfigurationProperty;
    /**
    * An arbitrary set of tags (key-value pairs) for this S3 Access Point.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_access_point#tags CcAccessPoint#tags}
    */
    readonly tags?: CcAccessPoint.TagProperty[] | cdktn.IResolvable;
    /**
    * If you include this field, Amazon S3 restricts access to this Access Point to requests from the specified Virtual Private Cloud (VPC).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_access_point#vpc_configuration CcAccessPoint#vpc_configuration}
    */
    readonly vpcConfiguration?: CcAccessPoint.VpcConfigurationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_access_point awscc_s3_access_point}
*/
export class CcAccessPoint extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_s3_access_point";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAccessPoint resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAccessPoint to import
    * @param importFromId The id of the existing CcAccessPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_access_point#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAccessPoint to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_s3_access_point", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_access_point awscc_s3_access_point} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAccessPointProps
    */
    public constructor(scope: Construct, id: string, config: CcAccessPointProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_s3_access_point',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.99.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._bucket = config.bucket;
        this._bucketAccountId = config.bucketAccountId;
        this._name = config.name;
        this._policy = config.policy;
        this._publicAccessBlockConfiguration.internalValue = config.publicAccessBlockConfiguration;
        this._tags.internalValue = config.tags;
        this._vpcConfiguration.internalValue = config.vpcConfiguration;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // alias - computed: true, optional: false, required: false
    public get alias() {
        return this.getStringAttribute('alias');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // bucket - computed: false, optional: false, required: true
    private _bucket?: string; 
    public get bucket() {
        return this.getStringAttribute('bucket');
    }
    public set bucket(value: string) {
        this._bucket = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
        return this._bucket;
    }

    // bucket_account_id - computed: true, optional: true, required: false
    private _bucketAccountId?: string; 
    public get bucketAccountId() {
        return this.getStringAttribute('bucket_account_id');
    }
    public set bucketAccountId(value: string) {
        this._bucketAccountId = value;
    }
    public resetBucketAccountId() {
        this._bucketAccountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketAccountIdInput() {
        return this._bucketAccountId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // network_origin - computed: true, optional: false, required: false
    public get networkOrigin() {
        return this.getStringAttribute('network_origin');
    }

    // policy - computed: true, optional: true, required: false
    private _policy?: string; 
    public get policy() {
        return this.getStringAttribute('policy');
    }
    public set policy(value: string) {
        this._policy = value;
    }
    public resetPolicy() {
        this._policy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
        return this._policy;
    }

    // public_access_block_configuration - computed: true, optional: true, required: false
    private _publicAccessBlockConfiguration = new CcAccessPoint.PublicAccessBlockConfigurationPropertyOutputReference(this, "public_access_block_configuration");
    public get publicAccessBlockConfiguration() {
        return this._publicAccessBlockConfiguration;
    }
    public putPublicAccessBlockConfiguration(value: CcAccessPoint.PublicAccessBlockConfigurationProperty) {
        this._publicAccessBlockConfiguration.internalValue = value;
    }
    public resetPublicAccessBlockConfiguration() {
        this._publicAccessBlockConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publicAccessBlockConfigurationInput() {
        return this._publicAccessBlockConfiguration.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcAccessPoint.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcAccessPoint.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // vpc_configuration - computed: true, optional: true, required: false
    private _vpcConfiguration = new CcAccessPoint.VpcConfigurationPropertyOutputReference(this, "vpc_configuration");
    public get vpcConfiguration() {
        return this._vpcConfiguration;
    }
    public putVpcConfiguration(value: CcAccessPoint.VpcConfigurationProperty) {
        this._vpcConfiguration.internalValue = value;
    }
    public resetVpcConfiguration() {
        this._vpcConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcConfigurationInput() {
        return this._vpcConfiguration.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            bucket: cdktn.stringToTerraform(this._bucket),
            bucket_account_id: cdktn.stringToTerraform(this._bucketAccountId),
            name: cdktn.stringToTerraform(this._name),
            policy: cdktn.stringToTerraform(this._policy),
            public_access_block_configuration: ccAccessPointPublicAccessBlockConfigurationPropertyToTerraform(this._publicAccessBlockConfiguration.internalValue),
            tags: cdktn.listMapper(ccAccessPointTagPropertyToTerraform, false)(this._tags.internalValue),
            vpc_configuration: ccAccessPointVpcConfigurationPropertyToTerraform(this._vpcConfiguration.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            bucket: {
                value: cdktn.stringToHclTerraform(this._bucket),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            bucket_account_id: {
                value: cdktn.stringToHclTerraform(this._bucketAccountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
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
            public_access_block_configuration: {
                value: ccAccessPointPublicAccessBlockConfigurationPropertyToHclTerraform(this._publicAccessBlockConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAccessPoint.PublicAccessBlockConfigurationProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccAccessPointTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAccessPoint.TagPropertyList",
            },
            vpc_configuration: {
                value: ccAccessPointVpcConfigurationPropertyToHclTerraform(this._vpcConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAccessPoint.VpcConfigurationProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAccessPointPublicAccessBlockConfigurationPropertyToTerraform(struct?: CcAccessPoint.PublicAccessBlockConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        block_public_acls: cdktn.booleanToTerraform(struct!.blockPublicAcls),
        block_public_policy: cdktn.booleanToTerraform(struct!.blockPublicPolicy),
        ignore_public_acls: cdktn.booleanToTerraform(struct!.ignorePublicAcls),
        restrict_public_buckets: cdktn.booleanToTerraform(struct!.restrictPublicBuckets),
    }
}


export function ccAccessPointPublicAccessBlockConfigurationPropertyToHclTerraform(struct?: CcAccessPoint.PublicAccessBlockConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        block_public_acls: {
            value: cdktn.booleanToHclTerraform(struct!.blockPublicAcls),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        block_public_policy: {
            value: cdktn.booleanToHclTerraform(struct!.blockPublicPolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        ignore_public_acls: {
            value: cdktn.booleanToHclTerraform(struct!.ignorePublicAcls),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        restrict_public_buckets: {
            value: cdktn.booleanToHclTerraform(struct!.restrictPublicBuckets),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAccessPointTagPropertyToTerraform(struct?: CcAccessPoint.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAccessPointTagPropertyToHclTerraform(struct?: CcAccessPoint.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.stringToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAccessPointVpcConfigurationPropertyToTerraform(struct?: CcAccessPoint.VpcConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        vpc_id: cdktn.stringToTerraform(struct!.vpcId),
    }
}


export function ccAccessPointVpcConfigurationPropertyToHclTerraform(struct?: CcAccessPoint.VpcConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        vpc_id: {
            value: cdktn.stringToHclTerraform(struct!.vpcId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcAccessPoint {
export interface PublicAccessBlockConfigurationProperty {
    /**
    * Specifies whether Amazon S3 should block public access control lists (ACLs) for buckets in this account. Setting this element to TRUE causes the following behavior:
    * - PUT Bucket acl and PUT Object acl calls fail if the specified ACL is public.
    *  - PUT Object calls fail if the request includes a public ACL.
    * . - PUT Bucket calls fail if the request includes a public ACL.
    * Enabling this setting doesn't affect existing policies or ACLs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_access_point#block_public_acls CcAccessPoint#block_public_acls}
    */
    readonly blockPublicAcls?: boolean | cdktn.IResolvable;
    /**
    * Specifies whether Amazon S3 should block public bucket policies for buckets in this account. Setting this element to TRUE causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access. Enabling this setting doesn't affect existing bucket policies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_access_point#block_public_policy CcAccessPoint#block_public_policy}
    */
    readonly blockPublicPolicy?: boolean | cdktn.IResolvable;
    /**
    * Specifies whether Amazon S3 should ignore public ACLs for buckets in this account. Setting this element to TRUE causes Amazon S3 to ignore all public ACLs on buckets in this account and any objects that they contain. Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_access_point#ignore_public_acls CcAccessPoint#ignore_public_acls}
    */
    readonly ignorePublicAcls?: boolean | cdktn.IResolvable;
    /**
    * Specifies whether Amazon S3 should restrict public bucket policies for this bucket. Setting this element to TRUE restricts access to this bucket to only AWS services and authorized users within this account if the bucket has a public policy.
    * Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_access_point#restrict_public_buckets CcAccessPoint#restrict_public_buckets}
    */
    readonly restrictPublicBuckets?: boolean | cdktn.IResolvable;
}
export class PublicAccessBlockConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PublicAccessBlockConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._blockPublicAcls !== undefined) {
            hasAnyValues = true;
            internalValueResult.blockPublicAcls = this._blockPublicAcls;
        }
        if (this._blockPublicPolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.blockPublicPolicy = this._blockPublicPolicy;
        }
        if (this._ignorePublicAcls !== undefined) {
            hasAnyValues = true;
            internalValueResult.ignorePublicAcls = this._ignorePublicAcls;
        }
        if (this._restrictPublicBuckets !== undefined) {
            hasAnyValues = true;
            internalValueResult.restrictPublicBuckets = this._restrictPublicBuckets;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PublicAccessBlockConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._blockPublicAcls = undefined;
            this._blockPublicPolicy = undefined;
            this._ignorePublicAcls = undefined;
            this._restrictPublicBuckets = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._blockPublicAcls = value.blockPublicAcls;
            this._blockPublicPolicy = value.blockPublicPolicy;
            this._ignorePublicAcls = value.ignorePublicAcls;
            this._restrictPublicBuckets = value.restrictPublicBuckets;
        }
    }

    // block_public_acls - computed: true, optional: true, required: false
    private _blockPublicAcls?: boolean | cdktn.IResolvable; 
    public get blockPublicAcls() {
        return this.getBooleanAttribute('block_public_acls');
    }
    public set blockPublicAcls(value: boolean | cdktn.IResolvable) {
        this._blockPublicAcls = value;
    }
    public resetBlockPublicAcls() {
        this._blockPublicAcls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockPublicAclsInput() {
        return this._blockPublicAcls;
    }

    // block_public_policy - computed: true, optional: true, required: false
    private _blockPublicPolicy?: boolean | cdktn.IResolvable; 
    public get blockPublicPolicy() {
        return this.getBooleanAttribute('block_public_policy');
    }
    public set blockPublicPolicy(value: boolean | cdktn.IResolvable) {
        this._blockPublicPolicy = value;
    }
    public resetBlockPublicPolicy() {
        this._blockPublicPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockPublicPolicyInput() {
        return this._blockPublicPolicy;
    }

    // ignore_public_acls - computed: true, optional: true, required: false
    private _ignorePublicAcls?: boolean | cdktn.IResolvable; 
    public get ignorePublicAcls() {
        return this.getBooleanAttribute('ignore_public_acls');
    }
    public set ignorePublicAcls(value: boolean | cdktn.IResolvable) {
        this._ignorePublicAcls = value;
    }
    public resetIgnorePublicAcls() {
        this._ignorePublicAcls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ignorePublicAclsInput() {
        return this._ignorePublicAcls;
    }

    // restrict_public_buckets - computed: true, optional: true, required: false
    private _restrictPublicBuckets?: boolean | cdktn.IResolvable; 
    public get restrictPublicBuckets() {
        return this.getBooleanAttribute('restrict_public_buckets');
    }
    public set restrictPublicBuckets(value: boolean | cdktn.IResolvable) {
        this._restrictPublicBuckets = value;
    }
    public resetRestrictPublicBuckets() {
        this._restrictPublicBuckets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get restrictPublicBucketsInput() {
        return this._restrictPublicBuckets;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_access_point#key CcAccessPoint#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_access_point#value CcAccessPoint#value}
    */
    readonly value?: string;
}
export class TagPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): TagProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TagProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._value = value.value;
        }
    }

    // key - computed: true, optional: true, required: false
    private _key?: string; 
    public get key() {
        return this.getStringAttribute('key');
    }
    public set key(value: string) {
        this._key = value;
    }
    public resetKey() {
        this._key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyInput() {
        return this._key;
    }

    // value - computed: true, optional: true, required: false
    private _value?: string; 
    public get value() {
        return this.getStringAttribute('value');
    }
    public set value(value: string) {
        this._value = value;
    }
    public resetValue() {
        this._value = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value;
    }
}

export class TagPropertyList extends cdktn.ComplexList {
    public internalValue? : TagProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): TagPropertyOutputReference {
        return new TagPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface VpcConfigurationProperty {
    /**
    * If this field is specified, this access point will only allow connections from the specified VPC ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_access_point#vpc_id CcAccessPoint#vpc_id}
    */
    readonly vpcId?: string;
}
export class VpcConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._vpcId !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcId = this._vpcId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._vpcId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._vpcId = value.vpcId;
        }
    }

    // vpc_id - computed: true, optional: true, required: false
    private _vpcId?: string; 
    public get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string) {
        this._vpcId = value;
    }
    public resetVpcId() {
        this._vpcId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcIdInput() {
        return this._vpcId;
    }
}
}
