// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_access_grant

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAccessGrantProps extends cdktn.TerraformMetaArguments {
    /**
    * The configuration options of the grant location, which is the S3 path to the data to which you are granting access.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_access_grant#access_grants_location_configuration CcAccessGrant#access_grants_location_configuration}
    */
    readonly accessGrantsLocationConfiguration?: CcAccessGrant.AccessGrantsLocationConfigurationProperty;
    /**
    * The custom S3 location to be accessed by the grantee
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_access_grant#access_grants_location_id CcAccessGrant#access_grants_location_id}
    */
    readonly accessGrantsLocationId: string;
    /**
    * The ARN of the application grantees will use to access the location
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_access_grant#application_arn CcAccessGrant#application_arn}
    */
    readonly applicationArn?: string;
    /**
    * The principal who will be granted permission to access S3.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_access_grant#grantee CcAccessGrant#grantee}
    */
    readonly grantee: CcAccessGrant.GranteeProperty;
    /**
    * The level of access to be afforded to the grantee
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_access_grant#permission CcAccessGrant#permission}
    */
    readonly permission: string;
    /**
    * The type of S3SubPrefix.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_access_grant#s3_prefix_type CcAccessGrant#s3_prefix_type}
    */
    readonly s3PrefixType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_access_grant#tags CcAccessGrant#tags}
    */
    readonly tags?: CcAccessGrant.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_access_grant awscc_s3_access_grant}
*/
export class CcAccessGrant extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_s3_access_grant";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAccessGrant resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAccessGrant to import
    * @param importFromId The id of the existing CcAccessGrant that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_access_grant#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAccessGrant to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_s3_access_grant", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_access_grant awscc_s3_access_grant} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAccessGrantProps
    */
    public constructor(scope: Construct, id: string, config: CcAccessGrantProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_s3_access_grant',
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
        this._accessGrantsLocationConfiguration.internalValue = config.accessGrantsLocationConfiguration;
        this._accessGrantsLocationId = config.accessGrantsLocationId;
        this._applicationArn = config.applicationArn;
        this._grantee.internalValue = config.grantee;
        this._permission = config.permission;
        this._s3PrefixType = config.s3PrefixType;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_grant_arn - computed: true, optional: false, required: false
    public get accessGrantArn() {
        return this.getStringAttribute('access_grant_arn');
    }

    // access_grant_id - computed: true, optional: false, required: false
    public get accessGrantId() {
        return this.getStringAttribute('access_grant_id');
    }

    // access_grants_location_configuration - computed: true, optional: true, required: false
    private _accessGrantsLocationConfiguration = new CcAccessGrant.AccessGrantsLocationConfigurationPropertyOutputReference(this, "access_grants_location_configuration");
    public get accessGrantsLocationConfiguration() {
        return this._accessGrantsLocationConfiguration;
    }
    public putAccessGrantsLocationConfiguration(value: CcAccessGrant.AccessGrantsLocationConfigurationProperty) {
        this._accessGrantsLocationConfiguration.internalValue = value;
    }
    public resetAccessGrantsLocationConfiguration() {
        this._accessGrantsLocationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessGrantsLocationConfigurationInput() {
        return this._accessGrantsLocationConfiguration.internalValue;
    }

    // access_grants_location_id - computed: false, optional: false, required: true
    private _accessGrantsLocationId?: string; 
    public get accessGrantsLocationId() {
        return this.getStringAttribute('access_grants_location_id');
    }
    public set accessGrantsLocationId(value: string) {
        this._accessGrantsLocationId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get accessGrantsLocationIdInput() {
        return this._accessGrantsLocationId;
    }

    // application_arn - computed: true, optional: true, required: false
    private _applicationArn?: string; 
    public get applicationArn() {
        return this.getStringAttribute('application_arn');
    }
    public set applicationArn(value: string) {
        this._applicationArn = value;
    }
    public resetApplicationArn() {
        this._applicationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationArnInput() {
        return this._applicationArn;
    }

    // grant_scope - computed: true, optional: false, required: false
    public get grantScope() {
        return this.getStringAttribute('grant_scope');
    }

    // grantee - computed: false, optional: false, required: true
    private _grantee = new CcAccessGrant.GranteePropertyOutputReference(this, "grantee");
    public get grantee() {
        return this._grantee;
    }
    public putGrantee(value: CcAccessGrant.GranteeProperty) {
        this._grantee.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get granteeInput() {
        return this._grantee.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // permission - computed: false, optional: false, required: true
    private _permission?: string; 
    public get permission() {
        return this.getStringAttribute('permission');
    }
    public set permission(value: string) {
        this._permission = value;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionInput() {
        return this._permission;
    }

    // s3_prefix_type - computed: true, optional: true, required: false
    private _s3PrefixType?: string; 
    public get s3PrefixType() {
        return this.getStringAttribute('s3_prefix_type');
    }
    public set s3PrefixType(value: string) {
        this._s3PrefixType = value;
    }
    public resetS3PrefixType() {
        this._s3PrefixType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3PrefixTypeInput() {
        return this._s3PrefixType;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcAccessGrant.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcAccessGrant.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            access_grants_location_configuration: ccAccessGrantAccessGrantsLocationConfigurationPropertyToTerraform(this._accessGrantsLocationConfiguration.internalValue),
            access_grants_location_id: cdktn.stringToTerraform(this._accessGrantsLocationId),
            application_arn: cdktn.stringToTerraform(this._applicationArn),
            grantee: ccAccessGrantGranteePropertyToTerraform(this._grantee.internalValue),
            permission: cdktn.stringToTerraform(this._permission),
            s3_prefix_type: cdktn.stringToTerraform(this._s3PrefixType),
            tags: cdktn.listMapper(ccAccessGrantTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            access_grants_location_configuration: {
                value: ccAccessGrantAccessGrantsLocationConfigurationPropertyToHclTerraform(this._accessGrantsLocationConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAccessGrant.AccessGrantsLocationConfigurationProperty",
            },
            access_grants_location_id: {
                value: cdktn.stringToHclTerraform(this._accessGrantsLocationId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            application_arn: {
                value: cdktn.stringToHclTerraform(this._applicationArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            grantee: {
                value: ccAccessGrantGranteePropertyToHclTerraform(this._grantee.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAccessGrant.GranteeProperty",
            },
            permission: {
                value: cdktn.stringToHclTerraform(this._permission),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            s3_prefix_type: {
                value: cdktn.stringToHclTerraform(this._s3PrefixType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccAccessGrantTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcAccessGrant.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAccessGrantAccessGrantsLocationConfigurationPropertyToTerraform(struct?: CcAccessGrant.AccessGrantsLocationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_sub_prefix: cdktn.stringToTerraform(struct!.s3SubPrefix),
    }
}


export function ccAccessGrantAccessGrantsLocationConfigurationPropertyToHclTerraform(struct?: CcAccessGrant.AccessGrantsLocationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_sub_prefix: {
            value: cdktn.stringToHclTerraform(struct!.s3SubPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAccessGrantGranteePropertyToTerraform(struct?: CcAccessGrant.GranteeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        grantee_identifier: cdktn.stringToTerraform(struct!.granteeIdentifier),
        grantee_type: cdktn.stringToTerraform(struct!.granteeType),
    }
}


export function ccAccessGrantGranteePropertyToHclTerraform(struct?: CcAccessGrant.GranteeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        grantee_identifier: {
            value: cdktn.stringToHclTerraform(struct!.granteeIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        grantee_type: {
            value: cdktn.stringToHclTerraform(struct!.granteeType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAccessGrantTagPropertyToTerraform(struct?: CcAccessGrant.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAccessGrantTagPropertyToHclTerraform(struct?: CcAccessGrant.TagProperty | cdktn.IResolvable): any {
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


export namespace CcAccessGrant {
export interface AccessGrantsLocationConfigurationProperty {
    /**
    * The S3 sub prefix of a registered location in your S3 Access Grants instance
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_access_grant#s3_sub_prefix CcAccessGrant#s3_sub_prefix}
    */
    readonly s3SubPrefix?: string;
}
export class AccessGrantsLocationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AccessGrantsLocationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3SubPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3SubPrefix = this._s3SubPrefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AccessGrantsLocationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3SubPrefix = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3SubPrefix = value.s3SubPrefix;
        }
    }

    // s3_sub_prefix - computed: true, optional: true, required: false
    private _s3SubPrefix?: string; 
    public get s3SubPrefix() {
        return this.getStringAttribute('s3_sub_prefix');
    }
    public set s3SubPrefix(value: string) {
        this._s3SubPrefix = value;
    }
    public resetS3SubPrefix() {
        this._s3SubPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3SubPrefixInput() {
        return this._s3SubPrefix;
    }
}
export interface GranteeProperty {
    /**
    * The unique identifier of the Grantee
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_access_grant#grantee_identifier CcAccessGrant#grantee_identifier}
    */
    readonly granteeIdentifier: string;
    /**
    * Configures the transfer acceleration state for an Amazon S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_access_grant#grantee_type CcAccessGrant#grantee_type}
    */
    readonly granteeType: string;
}
export class GranteePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GranteeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._granteeIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.granteeIdentifier = this._granteeIdentifier;
        }
        if (this._granteeType !== undefined) {
            hasAnyValues = true;
            internalValueResult.granteeType = this._granteeType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GranteeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._granteeIdentifier = undefined;
            this._granteeType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._granteeIdentifier = value.granteeIdentifier;
            this._granteeType = value.granteeType;
        }
    }

    // grantee_identifier - computed: false, optional: false, required: true
    private _granteeIdentifier?: string; 
    public get granteeIdentifier() {
        return this.getStringAttribute('grantee_identifier');
    }
    public set granteeIdentifier(value: string) {
        this._granteeIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get granteeIdentifierInput() {
        return this._granteeIdentifier;
    }

    // grantee_type - computed: false, optional: false, required: true
    private _granteeType?: string; 
    public get granteeType() {
        return this.getStringAttribute('grantee_type');
    }
    public set granteeType(value: string) {
        this._granteeType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get granteeTypeInput() {
        return this._granteeType;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_access_grant#key CcAccessGrant#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_access_grant#value CcAccessGrant#value}
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
}
