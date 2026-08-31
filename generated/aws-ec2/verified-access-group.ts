// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_group

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcVerifiedAccessGroupProps extends cdktn.TerraformMetaArguments {
    /**
    * A description for the AWS Verified Access group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_group#description CcVerifiedAccessGroup#description}
    */
    readonly description?: string;
    /**
    * The AWS Verified Access policy document.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_group#policy_document CcVerifiedAccessGroup#policy_document}
    */
    readonly policyDocument?: string;
    /**
    * The status of the Verified Access policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_group#policy_enabled CcVerifiedAccessGroup#policy_enabled}
    */
    readonly policyEnabled?: boolean | cdktn.IResolvable;
    /**
    * The configuration options for customer provided KMS encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_group#sse_specification CcVerifiedAccessGroup#sse_specification}
    */
    readonly sseSpecification?: CcVerifiedAccessGroup.SseSpecificationProperty;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_group#tags CcVerifiedAccessGroup#tags}
    */
    readonly tags?: CcVerifiedAccessGroup.TagProperty[] | cdktn.IResolvable;
    /**
    * The ID of the AWS Verified Access instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_group#verified_access_instance_id CcVerifiedAccessGroup#verified_access_instance_id}
    */
    readonly verifiedAccessInstanceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_group awscc_ec2_verified_access_group}
*/
export class CcVerifiedAccessGroup extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_verified_access_group";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcVerifiedAccessGroup resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcVerifiedAccessGroup to import
    * @param importFromId The id of the existing CcVerifiedAccessGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcVerifiedAccessGroup to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_verified_access_group", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_group awscc_ec2_verified_access_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcVerifiedAccessGroupProps
    */
    public constructor(scope: Construct, id: string, config: CcVerifiedAccessGroupProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_verified_access_group',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.98.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._description = config.description;
        this._policyDocument = config.policyDocument;
        this._policyEnabled = config.policyEnabled;
        this._sseSpecification.internalValue = config.sseSpecification;
        this._tags.internalValue = config.tags;
        this._verifiedAccessInstanceId = config.verifiedAccessInstanceId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
    }

    // description - computed: true, optional: true, required: false
    private _description?: string; 
    public get description() {
        return this.getStringAttribute('description');
    }
    public set description(value: string) {
        this._description = value;
    }
    public resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
        return this._description;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_updated_time - computed: true, optional: false, required: false
    public get lastUpdatedTime() {
        return this.getStringAttribute('last_updated_time');
    }

    // owner - computed: true, optional: false, required: false
    public get owner() {
        return this.getStringAttribute('owner');
    }

    // policy_document - computed: true, optional: true, required: false
    private _policyDocument?: string; 
    public get policyDocument() {
        return this.getStringAttribute('policy_document');
    }
    public set policyDocument(value: string) {
        this._policyDocument = value;
    }
    public resetPolicyDocument() {
        this._policyDocument = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyDocumentInput() {
        return this._policyDocument;
    }

    // policy_enabled - computed: true, optional: true, required: false
    private _policyEnabled?: boolean | cdktn.IResolvable; 
    public get policyEnabled() {
        return this.getBooleanAttribute('policy_enabled');
    }
    public set policyEnabled(value: boolean | cdktn.IResolvable) {
        this._policyEnabled = value;
    }
    public resetPolicyEnabled() {
        this._policyEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyEnabledInput() {
        return this._policyEnabled;
    }

    // sse_specification - computed: true, optional: true, required: false
    private _sseSpecification = new CcVerifiedAccessGroup.SseSpecificationPropertyOutputReference(this, "sse_specification");
    public get sseSpecification() {
        return this._sseSpecification;
    }
    public putSseSpecification(value: CcVerifiedAccessGroup.SseSpecificationProperty) {
        this._sseSpecification.internalValue = value;
    }
    public resetSseSpecification() {
        this._sseSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sseSpecificationInput() {
        return this._sseSpecification.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcVerifiedAccessGroup.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcVerifiedAccessGroup.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // verified_access_group_arn - computed: true, optional: false, required: false
    public get verifiedAccessGroupArn() {
        return this.getStringAttribute('verified_access_group_arn');
    }

    // verified_access_group_id - computed: true, optional: false, required: false
    public get verifiedAccessGroupId() {
        return this.getStringAttribute('verified_access_group_id');
    }

    // verified_access_instance_id - computed: false, optional: false, required: true
    private _verifiedAccessInstanceId?: string; 
    public get verifiedAccessInstanceId() {
        return this.getStringAttribute('verified_access_instance_id');
    }
    public set verifiedAccessInstanceId(value: string) {
        this._verifiedAccessInstanceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get verifiedAccessInstanceIdInput() {
        return this._verifiedAccessInstanceId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            policy_document: cdktn.stringToTerraform(this._policyDocument),
            policy_enabled: cdktn.booleanToTerraform(this._policyEnabled),
            sse_specification: ccVerifiedAccessGroupSseSpecificationPropertyToTerraform(this._sseSpecification.internalValue),
            tags: cdktn.listMapper(ccVerifiedAccessGroupTagPropertyToTerraform, false)(this._tags.internalValue),
            verified_access_instance_id: cdktn.stringToTerraform(this._verifiedAccessInstanceId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            policy_document: {
                value: cdktn.stringToHclTerraform(this._policyDocument),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            policy_enabled: {
                value: cdktn.booleanToHclTerraform(this._policyEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            sse_specification: {
                value: ccVerifiedAccessGroupSseSpecificationPropertyToHclTerraform(this._sseSpecification.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcVerifiedAccessGroup.SseSpecificationProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccVerifiedAccessGroupTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcVerifiedAccessGroup.TagPropertyList",
            },
            verified_access_instance_id: {
                value: cdktn.stringToHclTerraform(this._verifiedAccessInstanceId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccVerifiedAccessGroupSseSpecificationPropertyToTerraform(struct?: CcVerifiedAccessGroup.SseSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        customer_managed_key_enabled: cdktn.booleanToTerraform(struct!.customerManagedKeyEnabled),
        kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    }
}


export function ccVerifiedAccessGroupSseSpecificationPropertyToHclTerraform(struct?: CcVerifiedAccessGroup.SseSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        customer_managed_key_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.customerManagedKeyEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        kms_key_arn: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccVerifiedAccessGroupTagPropertyToTerraform(struct?: CcVerifiedAccessGroup.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccVerifiedAccessGroupTagPropertyToHclTerraform(struct?: CcVerifiedAccessGroup.TagProperty | cdktn.IResolvable): any {
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


export namespace CcVerifiedAccessGroup {
export interface SseSpecificationProperty {
    /**
    * Whether to encrypt the policy with the provided key or disable encryption
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_group#customer_managed_key_enabled CcVerifiedAccessGroup#customer_managed_key_enabled}
    */
    readonly customerManagedKeyEnabled?: boolean | cdktn.IResolvable;
    /**
    * KMS Key Arn used to encrypt the group policy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_group#kms_key_arn CcVerifiedAccessGroup#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
}
export class SseSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SseSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customerManagedKeyEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.customerManagedKeyEnabled = this._customerManagedKeyEnabled;
        }
        if (this._kmsKeyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SseSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customerManagedKeyEnabled = undefined;
            this._kmsKeyArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customerManagedKeyEnabled = value.customerManagedKeyEnabled;
            this._kmsKeyArn = value.kmsKeyArn;
        }
    }

    // customer_managed_key_enabled - computed: true, optional: true, required: false
    private _customerManagedKeyEnabled?: boolean | cdktn.IResolvable; 
    public get customerManagedKeyEnabled() {
        return this.getBooleanAttribute('customer_managed_key_enabled');
    }
    public set customerManagedKeyEnabled(value: boolean | cdktn.IResolvable) {
        this._customerManagedKeyEnabled = value;
    }
    public resetCustomerManagedKeyEnabled() {
        this._customerManagedKeyEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customerManagedKeyEnabledInput() {
        return this._customerManagedKeyEnabled;
    }

    // kms_key_arn - computed: true, optional: true, required: false
    private _kmsKeyArn?: string; 
    public get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string) {
        this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
        return this._kmsKeyArn;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_group#key CcVerifiedAccessGroup#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_verified_access_group#value CcVerifiedAccessGroup#value}
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
