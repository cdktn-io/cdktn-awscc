// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_space

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSpaceProps extends cdktn.TerraformMetaArguments {
    /**
    * The ARN of the IAM role used by AgentCore online evaluation. Absent when the space was created without one.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_space#agent_core_evaluation_role_arn CcSpace#agent_core_evaluation_role_arn}
    */
    readonly agentCoreEvaluationRoleArn?: string;
    /**
    * The ARN of the IAM role used for data access.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_space#data_access_role_arn CcSpace#data_access_role_arn}
    */
    readonly dataAccessRoleArn: string;
    /**
    * The ID of the domain to create the space in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_space#domain_id CcSpace#domain_id}
    */
    readonly domainId: string;
    /**
    * How the space's data at rest is encrypted. Always populated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_space#encryption_configuration CcSpace#encryption_configuration}
    */
    readonly encryptionConfiguration?: CcSpace.EncryptionConfigurationProperty;
    /**
    * A name that identifies the space.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_space#name CcSpace#name}
    */
    readonly name: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_space#tags CcSpace#tags}
    */
    readonly tags?: CcSpace.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_space awscc_cloudwatch_space}
*/
export class CcSpace extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cloudwatch_space";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSpace resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSpace to import
    * @param importFromId The id of the existing CcSpace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_space#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSpace to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudwatch_space", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_space awscc_cloudwatch_space} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSpaceProps
    */
    public constructor(scope: Construct, id: string, config: CcSpaceProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudwatch_space',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.110.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._agentCoreEvaluationRoleArn = config.agentCoreEvaluationRoleArn;
        this._dataAccessRoleArn = config.dataAccessRoleArn;
        this._domainId = config.domainId;
        this._encryptionConfiguration.internalValue = config.encryptionConfiguration;
        this._name = config.name;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // agent_core_evaluation_role_arn - computed: true, optional: true, required: false
    private _agentCoreEvaluationRoleArn?: string; 
    public get agentCoreEvaluationRoleArn() {
        return this.getStringAttribute('agent_core_evaluation_role_arn');
    }
    public set agentCoreEvaluationRoleArn(value: string) {
        this._agentCoreEvaluationRoleArn = value;
    }
    public resetAgentCoreEvaluationRoleArn() {
        this._agentCoreEvaluationRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get agentCoreEvaluationRoleArnInput() {
        return this._agentCoreEvaluationRoleArn;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // data_access_role_arn - computed: false, optional: false, required: true
    private _dataAccessRoleArn?: string; 
    public get dataAccessRoleArn() {
        return this.getStringAttribute('data_access_role_arn');
    }
    public set dataAccessRoleArn(value: string) {
        this._dataAccessRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dataAccessRoleArnInput() {
        return this._dataAccessRoleArn;
    }

    // domain_id - computed: false, optional: false, required: true
    private _domainId?: string; 
    public get domainId() {
        return this.getStringAttribute('domain_id');
    }
    public set domainId(value: string) {
        this._domainId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainIdInput() {
        return this._domainId;
    }

    // encryption_configuration - computed: true, optional: true, required: false
    private _encryptionConfiguration = new CcSpace.EncryptionConfigurationPropertyOutputReference(this, "encryption_configuration");
    public get encryptionConfiguration() {
        return this._encryptionConfiguration;
    }
    public putEncryptionConfiguration(value: CcSpace.EncryptionConfigurationProperty) {
        this._encryptionConfiguration.internalValue = value;
    }
    public resetEncryptionConfiguration() {
        this._encryptionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionConfigurationInput() {
        return this._encryptionConfiguration.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // owner_account_id - computed: true, optional: false, required: false
    public get ownerAccountId() {
        return this.getStringAttribute('owner_account_id');
    }

    // region - computed: true, optional: false, required: false
    public get region() {
        return this.getStringAttribute('region');
    }

    // space_id - computed: true, optional: false, required: false
    public get spaceId() {
        return this.getStringAttribute('space_id');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcSpace.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcSpace.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            agent_core_evaluation_role_arn: cdktn.stringToTerraform(this._agentCoreEvaluationRoleArn),
            data_access_role_arn: cdktn.stringToTerraform(this._dataAccessRoleArn),
            domain_id: cdktn.stringToTerraform(this._domainId),
            encryption_configuration: ccSpaceEncryptionConfigurationPropertyToTerraform(this._encryptionConfiguration.internalValue),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccSpaceTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            agent_core_evaluation_role_arn: {
                value: cdktn.stringToHclTerraform(this._agentCoreEvaluationRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            data_access_role_arn: {
                value: cdktn.stringToHclTerraform(this._dataAccessRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            domain_id: {
                value: cdktn.stringToHclTerraform(this._domainId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            encryption_configuration: {
                value: ccSpaceEncryptionConfigurationPropertyToHclTerraform(this._encryptionConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSpace.EncryptionConfigurationProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccSpaceTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcSpace.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccSpaceEncryptionConfigurationPropertyToTerraform(struct?: CcSpace.EncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encryption_strategy: cdktn.stringToTerraform(struct!.encryptionStrategy),
        kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    }
}


export function ccSpaceEncryptionConfigurationPropertyToHclTerraform(struct?: CcSpace.EncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        encryption_strategy: {
            value: cdktn.stringToHclTerraform(struct!.encryptionStrategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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


export function ccSpaceTagsPropertyToTerraform(struct?: CcSpace.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccSpaceTagsPropertyToHclTerraform(struct?: CcSpace.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcSpace {
export interface EncryptionConfigurationProperty {
    /**
    * Which kind of key to use. Required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_space#encryption_strategy CcSpace#encryption_strategy}
    */
    readonly encryptionStrategy?: string;
    /**
    * Customer managed KMS key ARN. Required when encryptionStrategy is CUSTOMER_MANAGED, and must be omitted when it is AWS_OWNED. Must be a symmetric ENCRYPT_DECRYPT key in the caller's account and region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_space#kms_key_arn CcSpace#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
}
export class EncryptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EncryptionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._encryptionStrategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionStrategy = this._encryptionStrategy;
        }
        if (this._kmsKeyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EncryptionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._encryptionStrategy = undefined;
            this._kmsKeyArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._encryptionStrategy = value.encryptionStrategy;
            this._kmsKeyArn = value.kmsKeyArn;
        }
    }

    // encryption_strategy - computed: true, optional: true, required: false
    private _encryptionStrategy?: string; 
    public get encryptionStrategy() {
        return this.getStringAttribute('encryption_strategy');
    }
    public set encryptionStrategy(value: string) {
        this._encryptionStrategy = value;
    }
    public resetEncryptionStrategy() {
        this._encryptionStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionStrategyInput() {
        return this._encryptionStrategy;
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
export interface TagsProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_space#key CcSpace#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_space#value CcSpace#value}
    */
    readonly value?: string;
}
export class TagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagsProperty | cdktn.IResolvable | undefined) {
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

export class TagsPropertyList extends cdktn.ComplexList {
    public internalValue? : TagsProperty[] | cdktn.IResolvable

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
    public get(index: number): TagsPropertyOutputReference {
        return new TagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
