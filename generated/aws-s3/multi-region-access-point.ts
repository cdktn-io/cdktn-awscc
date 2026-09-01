// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_multi_region_access_point

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcMultiRegionAccessPointProps extends cdktn.TerraformMetaArguments {
    /**
    * The name you want to assign to this Multi Region Access Point.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_multi_region_access_point#name CcMultiRegionAccessPoint#name}
    */
    readonly name?: string;
    /**
    * The PublicAccessBlock configuration that you want to apply to this Multi Region Access Point. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status 'The Meaning of Public' in the Amazon Simple Storage Service Developer Guide.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_multi_region_access_point#public_access_block_configuration CcMultiRegionAccessPoint#public_access_block_configuration}
    */
    readonly publicAccessBlockConfiguration?: CcMultiRegionAccessPoint.PublicAccessBlockConfigurationProperty;
    /**
    * The list of buckets that you want to associate this Multi Region Access Point with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_multi_region_access_point#regions CcMultiRegionAccessPoint#regions}
    */
    readonly regions: CcMultiRegionAccessPoint.RegionProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_multi_region_access_point awscc_s3_multi_region_access_point}
*/
export class CcMultiRegionAccessPoint extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_s3_multi_region_access_point";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcMultiRegionAccessPoint resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcMultiRegionAccessPoint to import
    * @param importFromId The id of the existing CcMultiRegionAccessPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_multi_region_access_point#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcMultiRegionAccessPoint to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_s3_multi_region_access_point", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_multi_region_access_point awscc_s3_multi_region_access_point} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcMultiRegionAccessPointProps
    */
    public constructor(scope: Construct, id: string, config: CcMultiRegionAccessPointProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_s3_multi_region_access_point',
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
        this._name = config.name;
        this._publicAccessBlockConfiguration.internalValue = config.publicAccessBlockConfiguration;
        this._regions.internalValue = config.regions;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // alias - computed: true, optional: false, required: false
    public get alias() {
        return this.getStringAttribute('alias');
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
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

    // public_access_block_configuration - computed: true, optional: true, required: false
    private _publicAccessBlockConfiguration = new CcMultiRegionAccessPoint.PublicAccessBlockConfigurationPropertyOutputReference(this, "public_access_block_configuration");
    public get publicAccessBlockConfiguration() {
        return this._publicAccessBlockConfiguration;
    }
    public putPublicAccessBlockConfiguration(value: CcMultiRegionAccessPoint.PublicAccessBlockConfigurationProperty) {
        this._publicAccessBlockConfiguration.internalValue = value;
    }
    public resetPublicAccessBlockConfiguration() {
        this._publicAccessBlockConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publicAccessBlockConfigurationInput() {
        return this._publicAccessBlockConfiguration.internalValue;
    }

    // regions - computed: false, optional: false, required: true
    private _regions = new CcMultiRegionAccessPoint.RegionPropertyList(this, "regions", false);
    public get regions() {
        return this._regions;
    }
    public putRegions(value: CcMultiRegionAccessPoint.RegionProperty[] | cdktn.IResolvable) {
        this._regions.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get regionsInput() {
        return this._regions.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            name: cdktn.stringToTerraform(this._name),
            public_access_block_configuration: ccMultiRegionAccessPointPublicAccessBlockConfigurationPropertyToTerraform(this._publicAccessBlockConfiguration.internalValue),
            regions: cdktn.listMapper(ccMultiRegionAccessPointRegionPropertyToTerraform, false)(this._regions.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            public_access_block_configuration: {
                value: ccMultiRegionAccessPointPublicAccessBlockConfigurationPropertyToHclTerraform(this._publicAccessBlockConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcMultiRegionAccessPoint.PublicAccessBlockConfigurationProperty",
            },
            regions: {
                value: cdktn.listMapperHcl(ccMultiRegionAccessPointRegionPropertyToHclTerraform, false)(this._regions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcMultiRegionAccessPoint.RegionPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccMultiRegionAccessPointPublicAccessBlockConfigurationPropertyToTerraform(struct?: CcMultiRegionAccessPoint.PublicAccessBlockConfigurationProperty | cdktn.IResolvable): any {
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


export function ccMultiRegionAccessPointPublicAccessBlockConfigurationPropertyToHclTerraform(struct?: CcMultiRegionAccessPoint.PublicAccessBlockConfigurationProperty | cdktn.IResolvable): any {
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


export function ccMultiRegionAccessPointRegionPropertyToTerraform(struct?: CcMultiRegionAccessPoint.RegionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket: cdktn.stringToTerraform(struct!.bucket),
        bucket_account_id: cdktn.stringToTerraform(struct!.bucketAccountId),
    }
}


export function ccMultiRegionAccessPointRegionPropertyToHclTerraform(struct?: CcMultiRegionAccessPoint.RegionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket: {
            value: cdktn.stringToHclTerraform(struct!.bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bucket_account_id: {
            value: cdktn.stringToHclTerraform(struct!.bucketAccountId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcMultiRegionAccessPoint {
export interface PublicAccessBlockConfigurationProperty {
    /**
    * Specifies whether Amazon S3 should block public access control lists (ACLs) for buckets in this account. Setting this element to TRUE causes the following behavior:
    * - PUT Bucket acl and PUT Object acl calls fail if the specified ACL is public.
    *  - PUT Object calls fail if the request includes a public ACL.
    * . - PUT Bucket calls fail if the request includes a public ACL.
    * Enabling this setting doesn't affect existing policies or ACLs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_multi_region_access_point#block_public_acls CcMultiRegionAccessPoint#block_public_acls}
    */
    readonly blockPublicAcls?: boolean | cdktn.IResolvable;
    /**
    * Specifies whether Amazon S3 should block public bucket policies for buckets in this account. Setting this element to TRUE causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access. Enabling this setting doesn't affect existing bucket policies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_multi_region_access_point#block_public_policy CcMultiRegionAccessPoint#block_public_policy}
    */
    readonly blockPublicPolicy?: boolean | cdktn.IResolvable;
    /**
    * Specifies whether Amazon S3 should ignore public ACLs for buckets in this account. Setting this element to TRUE causes Amazon S3 to ignore all public ACLs on buckets in this account and any objects that they contain. Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_multi_region_access_point#ignore_public_acls CcMultiRegionAccessPoint#ignore_public_acls}
    */
    readonly ignorePublicAcls?: boolean | cdktn.IResolvable;
    /**
    * Specifies whether Amazon S3 should restrict public bucket policies for this bucket. Setting this element to TRUE restricts access to this bucket to only AWS services and authorized users within this account if the bucket has a public policy.
    * Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_multi_region_access_point#restrict_public_buckets CcMultiRegionAccessPoint#restrict_public_buckets}
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
export interface RegionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_multi_region_access_point#bucket CcMultiRegionAccessPoint#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_multi_region_access_point#bucket_account_id CcMultiRegionAccessPoint#bucket_account_id}
    */
    readonly bucketAccountId?: string;
}
export class RegionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RegionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._bucketAccountId !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketAccountId = this._bucketAccountId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RegionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucket = undefined;
            this._bucketAccountId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucket = value.bucket;
            this._bucketAccountId = value.bucketAccountId;
        }
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
}

export class RegionPropertyList extends cdktn.ComplexList {
    public internalValue? : RegionProperty[] | cdktn.IResolvable

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
    public get(index: number): RegionPropertyOutputReference {
        return new RegionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
