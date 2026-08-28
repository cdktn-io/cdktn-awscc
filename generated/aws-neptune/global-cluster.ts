// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_global_cluster

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcGlobalClusterProps extends cdktn.TerraformMetaArguments {
    /**
    * Whether deletion protection is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_global_cluster#deletion_protection CcGlobalCluster#deletion_protection}
    */
    readonly deletionProtection?: boolean | cdktn.IResolvable;
    /**
    * The name of the database engine.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_global_cluster#engine CcGlobalCluster#engine}
    */
    readonly engine?: string;
    /**
    * The version number of the database engine.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_global_cluster#engine_version CcGlobalCluster#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * The cluster identifier of the global database cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_global_cluster#global_cluster_identifier CcGlobalCluster#global_cluster_identifier}
    */
    readonly globalClusterIdentifier?: string;
    /**
    * The Amazon Resource Name (ARN) of an existing Neptune DB cluster to use as the primary cluster of the new global database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_global_cluster#source_db_cluster_identifier CcGlobalCluster#source_db_cluster_identifier}
    */
    readonly sourceDbClusterIdentifier?: string;
    /**
    * Whether the global database cluster is storage encrypted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_global_cluster#storage_encrypted CcGlobalCluster#storage_encrypted}
    */
    readonly storageEncrypted?: boolean | cdktn.IResolvable;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_global_cluster#tags CcGlobalCluster#tags}
    */
    readonly tags?: CcGlobalCluster.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_global_cluster awscc_neptune_global_cluster}
*/
export class CcGlobalCluster extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_neptune_global_cluster";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcGlobalCluster resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcGlobalCluster to import
    * @param importFromId The id of the existing CcGlobalCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_global_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcGlobalCluster to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_neptune_global_cluster", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_global_cluster awscc_neptune_global_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcGlobalClusterProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcGlobalClusterProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_neptune_global_cluster',
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
        this._deletionProtection = config.deletionProtection;
        this._engine = config.engine;
        this._engineVersion = config.engineVersion;
        this._globalClusterIdentifier = config.globalClusterIdentifier;
        this._sourceDbClusterIdentifier = config.sourceDbClusterIdentifier;
        this._storageEncrypted = config.storageEncrypted;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // deletion_protection - computed: true, optional: true, required: false
    private _deletionProtection?: boolean | cdktn.IResolvable; 
    public get deletionProtection() {
        return this.getBooleanAttribute('deletion_protection');
    }
    public set deletionProtection(value: boolean | cdktn.IResolvable) {
        this._deletionProtection = value;
    }
    public resetDeletionProtection() {
        this._deletionProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deletionProtectionInput() {
        return this._deletionProtection;
    }

    // engine - computed: true, optional: true, required: false
    private _engine?: string; 
    public get engine() {
        return this.getStringAttribute('engine');
    }
    public set engine(value: string) {
        this._engine = value;
    }
    public resetEngine() {
        this._engine = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get engineInput() {
        return this._engine;
    }

    // engine_version - computed: true, optional: true, required: false
    private _engineVersion?: string; 
    public get engineVersion() {
        return this.getStringAttribute('engine_version');
    }
    public set engineVersion(value: string) {
        this._engineVersion = value;
    }
    public resetEngineVersion() {
        this._engineVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get engineVersionInput() {
        return this._engineVersion;
    }

    // global_cluster_identifier - computed: true, optional: true, required: false
    private _globalClusterIdentifier?: string; 
    public get globalClusterIdentifier() {
        return this.getStringAttribute('global_cluster_identifier');
    }
    public set globalClusterIdentifier(value: string) {
        this._globalClusterIdentifier = value;
    }
    public resetGlobalClusterIdentifier() {
        this._globalClusterIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get globalClusterIdentifierInput() {
        return this._globalClusterIdentifier;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // source_db_cluster_identifier - computed: true, optional: true, required: false
    private _sourceDbClusterIdentifier?: string; 
    public get sourceDbClusterIdentifier() {
        return this.getStringAttribute('source_db_cluster_identifier');
    }
    public set sourceDbClusterIdentifier(value: string) {
        this._sourceDbClusterIdentifier = value;
    }
    public resetSourceDbClusterIdentifier() {
        this._sourceDbClusterIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceDbClusterIdentifierInput() {
        return this._sourceDbClusterIdentifier;
    }

    // storage_encrypted - computed: true, optional: true, required: false
    private _storageEncrypted?: boolean | cdktn.IResolvable; 
    public get storageEncrypted() {
        return this.getBooleanAttribute('storage_encrypted');
    }
    public set storageEncrypted(value: boolean | cdktn.IResolvable) {
        this._storageEncrypted = value;
    }
    public resetStorageEncrypted() {
        this._storageEncrypted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageEncryptedInput() {
        return this._storageEncrypted;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcGlobalCluster.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcGlobalCluster.TagProperty[] | cdktn.IResolvable) {
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
            deletion_protection: cdktn.booleanToTerraform(this._deletionProtection),
            engine: cdktn.stringToTerraform(this._engine),
            engine_version: cdktn.stringToTerraform(this._engineVersion),
            global_cluster_identifier: cdktn.stringToTerraform(this._globalClusterIdentifier),
            source_db_cluster_identifier: cdktn.stringToTerraform(this._sourceDbClusterIdentifier),
            storage_encrypted: cdktn.booleanToTerraform(this._storageEncrypted),
            tags: cdktn.listMapper(ccGlobalClusterTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            deletion_protection: {
                value: cdktn.booleanToHclTerraform(this._deletionProtection),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            engine: {
                value: cdktn.stringToHclTerraform(this._engine),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            engine_version: {
                value: cdktn.stringToHclTerraform(this._engineVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            global_cluster_identifier: {
                value: cdktn.stringToHclTerraform(this._globalClusterIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_db_cluster_identifier: {
                value: cdktn.stringToHclTerraform(this._sourceDbClusterIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            storage_encrypted: {
                value: cdktn.booleanToHclTerraform(this._storageEncrypted),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            tags: {
                value: cdktn.listMapperHcl(ccGlobalClusterTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcGlobalCluster.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccGlobalClusterTagPropertyToTerraform(struct?: CcGlobalCluster.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccGlobalClusterTagPropertyToHclTerraform(struct?: CcGlobalCluster.TagProperty | cdktn.IResolvable): any {
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


export namespace CcGlobalCluster {
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_global_cluster#key CcGlobalCluster#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_global_cluster#value CcGlobalCluster#value}
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
