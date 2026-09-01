// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcNetworkMigrationDefinitionProps extends cdktn.TerraformMetaArguments {
    /**
    * A description of the network migration definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#description CcNetworkMigrationDefinition#description}
    */
    readonly description?: string;
    /**
    * The name of the network migration definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#name CcNetworkMigrationDefinition#name}
    */
    readonly name: string;
    /**
    * Scope tags for the network migration definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#scope_tags CcNetworkMigrationDefinition#scope_tags}
    */
    readonly scopeTags?: { [key: string]: string };
    /**
    * A list of source configurations for the network migration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#source_configurations CcNetworkMigrationDefinition#source_configurations}
    */
    readonly sourceConfigurations: CcNetworkMigrationDefinition.SourceConfigurationProperty[] | cdktn.IResolvable;
    /**
    * Tags to assign to the network migration definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#tags CcNetworkMigrationDefinition#tags}
    */
    readonly tags?: CcNetworkMigrationDefinition.TagProperty[] | cdktn.IResolvable;
    /**
    * The target deployment configuration for the migrated network.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#target_deployment CcNetworkMigrationDefinition#target_deployment}
    */
    readonly targetDeployment?: string;
    /**
    * The target network configuration including topology and CIDR ranges.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#target_network CcNetworkMigrationDefinition#target_network}
    */
    readonly targetNetwork: CcNetworkMigrationDefinition.TargetNetworkProperty;
    /**
    * The S3 configuration for storing the target network artifacts.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#target_s3_configuration CcNetworkMigrationDefinition#target_s3_configuration}
    */
    readonly targetS3Configuration: CcNetworkMigrationDefinition.TargetS3ConfigurationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition awscc_mgn_network_migration_definition}
*/
export class CcNetworkMigrationDefinition extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_mgn_network_migration_definition";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcNetworkMigrationDefinition resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcNetworkMigrationDefinition to import
    * @param importFromId The id of the existing CcNetworkMigrationDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcNetworkMigrationDefinition to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mgn_network_migration_definition", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition awscc_mgn_network_migration_definition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcNetworkMigrationDefinitionProps
    */
    public constructor(scope: Construct, id: string, config: CcNetworkMigrationDefinitionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_mgn_network_migration_definition',
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
        this._description = config.description;
        this._name = config.name;
        this._scopeTags = config.scopeTags;
        this._sourceConfigurations.internalValue = config.sourceConfigurations;
        this._tags.internalValue = config.tags;
        this._targetDeployment = config.targetDeployment;
        this._targetNetwork.internalValue = config.targetNetwork;
        this._targetS3Configuration.internalValue = config.targetS3Configuration;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
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

    // network_migration_definition_id - computed: true, optional: false, required: false
    public get networkMigrationDefinitionId() {
        return this.getStringAttribute('network_migration_definition_id');
    }

    // scope_tags - computed: true, optional: true, required: false
    private _scopeTags?: { [key: string]: string }; 
    public get scopeTags() {
        return this.getStringMapAttribute('scope_tags');
    }
    public set scopeTags(value: { [key: string]: string }) {
        this._scopeTags = value;
    }
    public resetScopeTags() {
        this._scopeTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scopeTagsInput() {
        return this._scopeTags;
    }

    // source_configurations - computed: false, optional: false, required: true
    private _sourceConfigurations = new CcNetworkMigrationDefinition.SourceConfigurationPropertyList(this, "source_configurations", false);
    public get sourceConfigurations() {
        return this._sourceConfigurations;
    }
    public putSourceConfigurations(value: CcNetworkMigrationDefinition.SourceConfigurationProperty[] | cdktn.IResolvable) {
        this._sourceConfigurations.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceConfigurationsInput() {
        return this._sourceConfigurations.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcNetworkMigrationDefinition.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcNetworkMigrationDefinition.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // target_deployment - computed: true, optional: true, required: false
    private _targetDeployment?: string; 
    public get targetDeployment() {
        return this.getStringAttribute('target_deployment');
    }
    public set targetDeployment(value: string) {
        this._targetDeployment = value;
    }
    public resetTargetDeployment() {
        this._targetDeployment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetDeploymentInput() {
        return this._targetDeployment;
    }

    // target_network - computed: false, optional: false, required: true
    private _targetNetwork = new CcNetworkMigrationDefinition.TargetNetworkPropertyOutputReference(this, "target_network");
    public get targetNetwork() {
        return this._targetNetwork;
    }
    public putTargetNetwork(value: CcNetworkMigrationDefinition.TargetNetworkProperty) {
        this._targetNetwork.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetNetworkInput() {
        return this._targetNetwork.internalValue;
    }

    // target_s3_configuration - computed: false, optional: false, required: true
    private _targetS3Configuration = new CcNetworkMigrationDefinition.TargetS3ConfigurationPropertyOutputReference(this, "target_s3_configuration");
    public get targetS3Configuration() {
        return this._targetS3Configuration;
    }
    public putTargetS3Configuration(value: CcNetworkMigrationDefinition.TargetS3ConfigurationProperty) {
        this._targetS3Configuration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetS3ConfigurationInput() {
        return this._targetS3Configuration.internalValue;
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
            description: cdktn.stringToTerraform(this._description),
            name: cdktn.stringToTerraform(this._name),
            scope_tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._scopeTags),
            source_configurations: cdktn.listMapper(ccNetworkMigrationDefinitionSourceConfigurationPropertyToTerraform, false)(this._sourceConfigurations.internalValue),
            tags: cdktn.listMapper(ccNetworkMigrationDefinitionTagPropertyToTerraform, false)(this._tags.internalValue),
            target_deployment: cdktn.stringToTerraform(this._targetDeployment),
            target_network: ccNetworkMigrationDefinitionTargetNetworkPropertyToTerraform(this._targetNetwork.internalValue),
            target_s3_configuration: ccNetworkMigrationDefinitionTargetS3ConfigurationPropertyToTerraform(this._targetS3Configuration.internalValue),
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
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            scope_tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._scopeTags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            source_configurations: {
                value: cdktn.listMapperHcl(ccNetworkMigrationDefinitionSourceConfigurationPropertyToHclTerraform, false)(this._sourceConfigurations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcNetworkMigrationDefinition.SourceConfigurationPropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccNetworkMigrationDefinitionTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcNetworkMigrationDefinition.TagPropertyList",
            },
            target_deployment: {
                value: cdktn.stringToHclTerraform(this._targetDeployment),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            target_network: {
                value: ccNetworkMigrationDefinitionTargetNetworkPropertyToHclTerraform(this._targetNetwork.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcNetworkMigrationDefinition.TargetNetworkProperty",
            },
            target_s3_configuration: {
                value: ccNetworkMigrationDefinitionTargetS3ConfigurationPropertyToHclTerraform(this._targetS3Configuration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcNetworkMigrationDefinition.TargetS3ConfigurationProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccNetworkMigrationDefinitionSourceS3ConfigurationPropertyToTerraform(struct?: CcNetworkMigrationDefinition.SourceS3ConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_bucket: cdktn.stringToTerraform(struct!.s3Bucket),
        s3_bucket_owner: cdktn.stringToTerraform(struct!.s3BucketOwner),
        s3_key: cdktn.stringToTerraform(struct!.s3Key),
    }
}


export function ccNetworkMigrationDefinitionSourceS3ConfigurationPropertyToHclTerraform(struct?: CcNetworkMigrationDefinition.SourceS3ConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_bucket: {
            value: cdktn.stringToHclTerraform(struct!.s3Bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_bucket_owner: {
            value: cdktn.stringToHclTerraform(struct!.s3BucketOwner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_key: {
            value: cdktn.stringToHclTerraform(struct!.s3Key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNetworkMigrationDefinitionSourceConfigurationPropertyToTerraform(struct?: CcNetworkMigrationDefinition.SourceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        source_environment: cdktn.stringToTerraform(struct!.sourceEnvironment),
        source_s3_configuration: ccNetworkMigrationDefinitionSourceS3ConfigurationPropertyToTerraform(struct!.sourceS3Configuration),
    }
}


export function ccNetworkMigrationDefinitionSourceConfigurationPropertyToHclTerraform(struct?: CcNetworkMigrationDefinition.SourceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        source_environment: {
            value: cdktn.stringToHclTerraform(struct!.sourceEnvironment),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_s3_configuration: {
            value: ccNetworkMigrationDefinitionSourceS3ConfigurationPropertyToHclTerraform(struct!.sourceS3Configuration),
            isBlock: true,
            type: "struct",
            storageClassType: "SourceS3ConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNetworkMigrationDefinitionTagPropertyToTerraform(struct?: CcNetworkMigrationDefinition.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccNetworkMigrationDefinitionTagPropertyToHclTerraform(struct?: CcNetworkMigrationDefinition.TagProperty | cdktn.IResolvable): any {
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


export function ccNetworkMigrationDefinitionTargetNetworkPropertyToTerraform(struct?: CcNetworkMigrationDefinition.TargetNetworkProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        inbound_cidr: cdktn.stringToTerraform(struct!.inboundCidr),
        inspection_cidr: cdktn.stringToTerraform(struct!.inspectionCidr),
        outbound_cidr: cdktn.stringToTerraform(struct!.outboundCidr),
        topology: cdktn.stringToTerraform(struct!.topology),
    }
}


export function ccNetworkMigrationDefinitionTargetNetworkPropertyToHclTerraform(struct?: CcNetworkMigrationDefinition.TargetNetworkProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        inbound_cidr: {
            value: cdktn.stringToHclTerraform(struct!.inboundCidr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        inspection_cidr: {
            value: cdktn.stringToHclTerraform(struct!.inspectionCidr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        outbound_cidr: {
            value: cdktn.stringToHclTerraform(struct!.outboundCidr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        topology: {
            value: cdktn.stringToHclTerraform(struct!.topology),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNetworkMigrationDefinitionTargetS3ConfigurationPropertyToTerraform(struct?: CcNetworkMigrationDefinition.TargetS3ConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_bucket: cdktn.stringToTerraform(struct!.s3Bucket),
        s3_bucket_owner: cdktn.stringToTerraform(struct!.s3BucketOwner),
    }
}


export function ccNetworkMigrationDefinitionTargetS3ConfigurationPropertyToHclTerraform(struct?: CcNetworkMigrationDefinition.TargetS3ConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_bucket: {
            value: cdktn.stringToHclTerraform(struct!.s3Bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_bucket_owner: {
            value: cdktn.stringToHclTerraform(struct!.s3BucketOwner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcNetworkMigrationDefinition {
export interface SourceS3ConfigurationProperty {
    /**
    * The name of the S3 bucket containing source data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#s3_bucket CcNetworkMigrationDefinition#s3_bucket}
    */
    readonly s3Bucket: string;
    /**
    * The AWS account ID of the S3 bucket owner.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#s3_bucket_owner CcNetworkMigrationDefinition#s3_bucket_owner}
    */
    readonly s3BucketOwner: string;
    /**
    * The S3 key (path) for the source data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#s3_key CcNetworkMigrationDefinition#s3_key}
    */
    readonly s3Key: string;
}
export class SourceS3ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourceS3ConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3Bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Bucket = this._s3Bucket;
        }
        if (this._s3BucketOwner !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3BucketOwner = this._s3BucketOwner;
        }
        if (this._s3Key !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Key = this._s3Key;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceS3ConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3Bucket = undefined;
            this._s3BucketOwner = undefined;
            this._s3Key = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3Bucket = value.s3Bucket;
            this._s3BucketOwner = value.s3BucketOwner;
            this._s3Key = value.s3Key;
        }
    }

    // s3_bucket - computed: false, optional: false, required: true
    private _s3Bucket?: string; 
    public get s3Bucket() {
        return this.getStringAttribute('s3_bucket');
    }
    public set s3Bucket(value: string) {
        this._s3Bucket = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketInput() {
        return this._s3Bucket;
    }

    // s3_bucket_owner - computed: false, optional: false, required: true
    private _s3BucketOwner?: string; 
    public get s3BucketOwner() {
        return this.getStringAttribute('s3_bucket_owner');
    }
    public set s3BucketOwner(value: string) {
        this._s3BucketOwner = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketOwnerInput() {
        return this._s3BucketOwner;
    }

    // s3_key - computed: false, optional: false, required: true
    private _s3Key?: string; 
    public get s3Key() {
        return this.getStringAttribute('s3_key');
    }
    public set s3Key(value: string) {
        this._s3Key = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3KeyInput() {
        return this._s3Key;
    }
}
export interface SourceConfigurationProperty {
    /**
    * The source environment type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#source_environment CcNetworkMigrationDefinition#source_environment}
    */
    readonly sourceEnvironment: string;
    /**
    * S3 configuration for source network data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#source_s3_configuration CcNetworkMigrationDefinition#source_s3_configuration}
    */
    readonly sourceS3Configuration: SourceS3ConfigurationProperty;
}
export class SourceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SourceConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._sourceEnvironment !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceEnvironment = this._sourceEnvironment;
        }
        if (this._sourceS3Configuration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceS3Configuration = this._sourceS3Configuration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._sourceEnvironment = undefined;
            this._sourceS3Configuration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._sourceEnvironment = value.sourceEnvironment;
            this._sourceS3Configuration.internalValue = value.sourceS3Configuration;
        }
    }

    // source_environment - computed: false, optional: false, required: true
    private _sourceEnvironment?: string; 
    public get sourceEnvironment() {
        return this.getStringAttribute('source_environment');
    }
    public set sourceEnvironment(value: string) {
        this._sourceEnvironment = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceEnvironmentInput() {
        return this._sourceEnvironment;
    }

    // source_s3_configuration - computed: false, optional: false, required: true
    private _sourceS3Configuration = new SourceS3ConfigurationPropertyOutputReference(this, "source_s3_configuration");
    public get sourceS3Configuration() {
        return this._sourceS3Configuration;
    }
    public putSourceS3Configuration(value: SourceS3ConfigurationProperty) {
        this._sourceS3Configuration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceS3ConfigurationInput() {
        return this._sourceS3Configuration.internalValue;
    }
}

export class SourceConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : SourceConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): SourceConfigurationPropertyOutputReference {
        return new SourceConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#key CcNetworkMigrationDefinition#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#value CcNetworkMigrationDefinition#value}
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
export interface TargetNetworkProperty {
    /**
    * The CIDR block for inbound traffic in the target network.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#inbound_cidr CcNetworkMigrationDefinition#inbound_cidr}
    */
    readonly inboundCidr?: string;
    /**
    * The CIDR block for inspection traffic in the target network.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#inspection_cidr CcNetworkMigrationDefinition#inspection_cidr}
    */
    readonly inspectionCidr?: string;
    /**
    * The CIDR block for outbound traffic in the target network.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#outbound_cidr CcNetworkMigrationDefinition#outbound_cidr}
    */
    readonly outboundCidr?: string;
    /**
    * The network topology type for the target environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#topology CcNetworkMigrationDefinition#topology}
    */
    readonly topology: string;
}
export class TargetNetworkPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TargetNetworkProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._inboundCidr !== undefined) {
            hasAnyValues = true;
            internalValueResult.inboundCidr = this._inboundCidr;
        }
        if (this._inspectionCidr !== undefined) {
            hasAnyValues = true;
            internalValueResult.inspectionCidr = this._inspectionCidr;
        }
        if (this._outboundCidr !== undefined) {
            hasAnyValues = true;
            internalValueResult.outboundCidr = this._outboundCidr;
        }
        if (this._topology !== undefined) {
            hasAnyValues = true;
            internalValueResult.topology = this._topology;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetNetworkProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._inboundCidr = undefined;
            this._inspectionCidr = undefined;
            this._outboundCidr = undefined;
            this._topology = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._inboundCidr = value.inboundCidr;
            this._inspectionCidr = value.inspectionCidr;
            this._outboundCidr = value.outboundCidr;
            this._topology = value.topology;
        }
    }

    // inbound_cidr - computed: true, optional: true, required: false
    private _inboundCidr?: string; 
    public get inboundCidr() {
        return this.getStringAttribute('inbound_cidr');
    }
    public set inboundCidr(value: string) {
        this._inboundCidr = value;
    }
    public resetInboundCidr() {
        this._inboundCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inboundCidrInput() {
        return this._inboundCidr;
    }

    // inspection_cidr - computed: true, optional: true, required: false
    private _inspectionCidr?: string; 
    public get inspectionCidr() {
        return this.getStringAttribute('inspection_cidr');
    }
    public set inspectionCidr(value: string) {
        this._inspectionCidr = value;
    }
    public resetInspectionCidr() {
        this._inspectionCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inspectionCidrInput() {
        return this._inspectionCidr;
    }

    // outbound_cidr - computed: true, optional: true, required: false
    private _outboundCidr?: string; 
    public get outboundCidr() {
        return this.getStringAttribute('outbound_cidr');
    }
    public set outboundCidr(value: string) {
        this._outboundCidr = value;
    }
    public resetOutboundCidr() {
        this._outboundCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outboundCidrInput() {
        return this._outboundCidr;
    }

    // topology - computed: false, optional: false, required: true
    private _topology?: string; 
    public get topology() {
        return this.getStringAttribute('topology');
    }
    public set topology(value: string) {
        this._topology = value;
    }
    // Temporarily expose input value. Use with caution.
    public get topologyInput() {
        return this._topology;
    }
}
export interface TargetS3ConfigurationProperty {
    /**
    * The name of the S3 bucket for target artifacts.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#s3_bucket CcNetworkMigrationDefinition#s3_bucket}
    */
    readonly s3Bucket: string;
    /**
    * The AWS account ID of the S3 bucket owner.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mgn_network_migration_definition#s3_bucket_owner CcNetworkMigrationDefinition#s3_bucket_owner}
    */
    readonly s3BucketOwner: string;
}
export class TargetS3ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TargetS3ConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3Bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Bucket = this._s3Bucket;
        }
        if (this._s3BucketOwner !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3BucketOwner = this._s3BucketOwner;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetS3ConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3Bucket = undefined;
            this._s3BucketOwner = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3Bucket = value.s3Bucket;
            this._s3BucketOwner = value.s3BucketOwner;
        }
    }

    // s3_bucket - computed: false, optional: false, required: true
    private _s3Bucket?: string; 
    public get s3Bucket() {
        return this.getStringAttribute('s3_bucket');
    }
    public set s3Bucket(value: string) {
        this._s3Bucket = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketInput() {
        return this._s3Bucket;
    }

    // s3_bucket_owner - computed: false, optional: false, required: true
    private _s3BucketOwner?: string; 
    public get s3BucketOwner() {
        return this.getStringAttribute('s3_bucket_owner');
    }
    public set s3BucketOwner(value: string) {
        this._s3BucketOwner = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketOwnerInput() {
        return this._s3BucketOwner;
    }
}
}
