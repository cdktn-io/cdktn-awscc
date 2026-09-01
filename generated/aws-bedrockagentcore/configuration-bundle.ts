// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_configuration_bundle

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcConfigurationBundleProps extends cdktn.TerraformMetaArguments {
    /**
    * The branch name for version tracking.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_configuration_bundle#branch_name CcConfigurationBundle#branch_name}
    */
    readonly branchName?: string;
    /**
    * The name for the configuration bundle. Names must be unique within your account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_configuration_bundle#bundle_name CcConfigurationBundle#bundle_name}
    */
    readonly bundleName: string;
    /**
    * A commit message describing the version of the configuration bundle.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_configuration_bundle#commit_message CcConfigurationBundle#commit_message}
    */
    readonly commitMessage?: string;
    /**
    * A map of component identifiers to their configurations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_configuration_bundle#components CcConfigurationBundle#components}
    */
    readonly components: { [key: string]: CcConfigurationBundle.ComponentConfigurationProperty } | cdktn.IResolvable;
    /**
    * The source that created a configuration bundle version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_configuration_bundle#created_by CcConfigurationBundle#created_by}
    */
    readonly createdBy?: CcConfigurationBundle.VersionCreatedBySourceProperty;
    /**
    * The description for the configuration bundle.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_configuration_bundle#description CcConfigurationBundle#description}
    */
    readonly description?: string;
    /**
    * The ARN of the KMS key used to encrypt component configurations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_configuration_bundle#kms_key_arn CcConfigurationBundle#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Tags to assign to the configuration bundle.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_configuration_bundle#tags CcConfigurationBundle#tags}
    */
    readonly tags?: CcConfigurationBundle.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_configuration_bundle awscc_bedrockagentcore_configuration_bundle}
*/
export class CcConfigurationBundle extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_bedrockagentcore_configuration_bundle";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcConfigurationBundle resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcConfigurationBundle to import
    * @param importFromId The id of the existing CcConfigurationBundle that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_configuration_bundle#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcConfigurationBundle to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrockagentcore_configuration_bundle", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_configuration_bundle awscc_bedrockagentcore_configuration_bundle} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcConfigurationBundleProps
    */
    public constructor(scope: Construct, id: string, config: CcConfigurationBundleProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_bedrockagentcore_configuration_bundle',
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
        this._branchName = config.branchName;
        this._bundleName = config.bundleName;
        this._commitMessage = config.commitMessage;
        this._components.internalValue = config.components;
        this._createdBy.internalValue = config.createdBy;
        this._description = config.description;
        this._kmsKeyArn = config.kmsKeyArn;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // branch_name - computed: true, optional: true, required: false
    private _branchName?: string; 
    public get branchName() {
        return this.getStringAttribute('branch_name');
    }
    public set branchName(value: string) {
        this._branchName = value;
    }
    public resetBranchName() {
        this._branchName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get branchNameInput() {
        return this._branchName;
    }

    // bundle_arn - computed: true, optional: false, required: false
    public get bundleArn() {
        return this.getStringAttribute('bundle_arn');
    }

    // bundle_id - computed: true, optional: false, required: false
    public get bundleId() {
        return this.getStringAttribute('bundle_id');
    }

    // bundle_name - computed: false, optional: false, required: true
    private _bundleName?: string; 
    public get bundleName() {
        return this.getStringAttribute('bundle_name');
    }
    public set bundleName(value: string) {
        this._bundleName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bundleNameInput() {
        return this._bundleName;
    }

    // commit_message - computed: true, optional: true, required: false
    private _commitMessage?: string; 
    public get commitMessage() {
        return this.getStringAttribute('commit_message');
    }
    public set commitMessage(value: string) {
        this._commitMessage = value;
    }
    public resetCommitMessage() {
        this._commitMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get commitMessageInput() {
        return this._commitMessage;
    }

    // components - computed: false, optional: false, required: true
    private _components = new CcConfigurationBundle.ComponentConfigurationPropertyMap(this, "components");
    public get components() {
        return this._components;
    }
    public putComponents(value: { [key: string]: CcConfigurationBundle.ComponentConfigurationProperty } | cdktn.IResolvable) {
        this._components.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get componentsInput() {
        return this._components.internalValue;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // created_by - computed: true, optional: true, required: false
    private _createdBy = new CcConfigurationBundle.VersionCreatedBySourcePropertyOutputReference(this, "created_by");
    public get createdBy() {
        return this._createdBy;
    }
    public putCreatedBy(value: CcConfigurationBundle.VersionCreatedBySourceProperty) {
        this._createdBy.internalValue = value;
    }
    public resetCreatedBy() {
        this._createdBy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createdByInput() {
        return this._createdBy.internalValue;
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

    // lineage_metadata - computed: true, optional: false, required: false
    private _lineageMetadata = new CcConfigurationBundle.LineageMetadataPropertyOutputReference(this, "lineage_metadata");
    public get lineageMetadata() {
        return this._lineageMetadata;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcConfigurationBundle.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcConfigurationBundle.TagProperty[] | cdktn.IResolvable) {
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

    // version_id - computed: true, optional: false, required: false
    public get versionId() {
        return this.getStringAttribute('version_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            branch_name: cdktn.stringToTerraform(this._branchName),
            bundle_name: cdktn.stringToTerraform(this._bundleName),
            commit_message: cdktn.stringToTerraform(this._commitMessage),
            components: cdktn.hashMapper(ccConfigurationBundleComponentConfigurationPropertyToTerraform)(this._components.internalValue),
            created_by: ccConfigurationBundleVersionCreatedBySourcePropertyToTerraform(this._createdBy.internalValue),
            description: cdktn.stringToTerraform(this._description),
            kms_key_arn: cdktn.stringToTerraform(this._kmsKeyArn),
            tags: cdktn.listMapper(ccConfigurationBundleTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            branch_name: {
                value: cdktn.stringToHclTerraform(this._branchName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            bundle_name: {
                value: cdktn.stringToHclTerraform(this._bundleName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            commit_message: {
                value: cdktn.stringToHclTerraform(this._commitMessage),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            components: {
                value: cdktn.hashMapperHcl(ccConfigurationBundleComponentConfigurationPropertyToHclTerraform)(this._components.internalValue),
                isBlock: true,
                type: "map",
                storageClassType: "CcConfigurationBundle.ComponentConfigurationPropertyMap",
            },
            created_by: {
                value: ccConfigurationBundleVersionCreatedBySourcePropertyToHclTerraform(this._createdBy.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConfigurationBundle.VersionCreatedBySourceProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kms_key_arn: {
                value: cdktn.stringToHclTerraform(this._kmsKeyArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccConfigurationBundleTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcConfigurationBundle.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccConfigurationBundleComponentConfigurationPropertyToTerraform(struct?: CcConfigurationBundle.ComponentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        configuration: cdktn.stringToTerraform(struct!.configuration),
    }
}


export function ccConfigurationBundleComponentConfigurationPropertyToHclTerraform(struct?: CcConfigurationBundle.ComponentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        configuration: {
            value: cdktn.stringToHclTerraform(struct!.configuration),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigurationBundleVersionCreatedBySourcePropertyToTerraform(struct?: CcConfigurationBundle.VersionCreatedBySourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        arn: cdktn.stringToTerraform(struct!.arn),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccConfigurationBundleVersionCreatedBySourcePropertyToHclTerraform(struct?: CcConfigurationBundle.VersionCreatedBySourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        arn: {
            value: cdktn.stringToHclTerraform(struct!.arn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfigurationBundleCreatedByPropertyToTerraform(struct?: CcConfigurationBundle.CreatedByProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccConfigurationBundleCreatedByPropertyToHclTerraform(struct?: CcConfigurationBundle.CreatedByProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccConfigurationBundleLineageMetadataPropertyToTerraform(struct?: CcConfigurationBundle.LineageMetadataProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccConfigurationBundleLineageMetadataPropertyToHclTerraform(struct?: CcConfigurationBundle.LineageMetadataProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccConfigurationBundleTagPropertyToTerraform(struct?: CcConfigurationBundle.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccConfigurationBundleTagPropertyToHclTerraform(struct?: CcConfigurationBundle.TagProperty | cdktn.IResolvable): any {
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


export namespace CcConfigurationBundle {
export interface ComponentConfigurationProperty {
    /**
    * The configuration values as a flexible JSON document.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_configuration_bundle#configuration CcConfigurationBundle#configuration}
    */
    readonly configuration?: string;
}
export class ComponentConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }

    public get internalValue(): ComponentConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._configuration !== undefined) {
            hasAnyValues = true;
            internalValueResult.configuration = this._configuration;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComponentConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._configuration = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._configuration = value.configuration;
        }
    }

    // configuration - computed: true, optional: true, required: false
    private _configuration?: string; 
    public get configuration() {
        return this.getStringAttribute('configuration');
    }
    public set configuration(value: string) {
        this._configuration = value;
    }
    public resetConfiguration() {
        this._configuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationInput() {
        return this._configuration;
    }
}

export class ComponentConfigurationPropertyMap extends cdktn.ComplexMap {
    public internalValue? : { [key: string]: ComponentConfigurationProperty } | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute);
    }

    /**
    * @param key the key of the item to return
    */
    public get(key: string): ComponentConfigurationPropertyOutputReference {
        return new ComponentConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export interface VersionCreatedBySourceProperty {
    /**
    * The Amazon Resource Name (ARN) of the source, if applicable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_configuration_bundle#arn CcConfigurationBundle#arn}
    */
    readonly arn?: string;
    /**
    * The name of the source (for example, user, optimization-job, or system).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_configuration_bundle#name CcConfigurationBundle#name}
    */
    readonly name?: string;
}
export class VersionCreatedBySourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VersionCreatedBySourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._arn !== undefined) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VersionCreatedBySourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._arn = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._arn = value.arn;
            this._name = value.name;
        }
    }

    // arn - computed: true, optional: true, required: false
    private _arn?: string; 
    public get arn() {
        return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
        this._arn = value;
    }
    public resetArn() {
        this._arn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
        return this._arn;
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
}
export interface CreatedByProperty {
}
export class CreatedByPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CreatedByProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CreatedByProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // name - computed: true, optional: false, required: false
    public get name() {
        return this.getStringAttribute('name');
    }
}
export interface LineageMetadataProperty {
}
export class LineageMetadataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LineageMetadataProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LineageMetadataProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // branch_name - computed: true, optional: false, required: false
    public get branchName() {
        return this.getStringAttribute('branch_name');
    }

    // commit_message - computed: true, optional: false, required: false
    public get commitMessage() {
        return this.getStringAttribute('commit_message');
    }

    // created_by - computed: true, optional: false, required: false
    private _createdBy = new CreatedByPropertyOutputReference(this, "created_by");
    public get createdBy() {
        return this._createdBy;
    }

    // parent_version_ids - computed: true, optional: false, required: false
    public get parentVersionIds() {
        return this.getListAttribute('parent_version_ids');
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_configuration_bundle#key CcConfigurationBundle#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_configuration_bundle#value CcConfigurationBundle#value}
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
