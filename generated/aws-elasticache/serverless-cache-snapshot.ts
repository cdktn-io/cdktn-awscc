// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticache_serverless_cache_snapshot

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcServerlessCacheSnapshotProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon Resource Name (ARN) of the AWS KMS key used to encrypt the snapshot. Provide the key ARN: the resource returns the key ARN on read, so supplying a bare key ID or alias for this createOnly property may be reported as drift by CloudFormation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticache_serverless_cache_snapshot#kms_key_id CcServerlessCacheSnapshot#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * The name of an existing serverless cache. The snapshot is created from this cache.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticache_serverless_cache_snapshot#serverless_cache_name CcServerlessCacheSnapshot#serverless_cache_name}
    */
    readonly serverlessCacheName: string;
    /**
    * The name of the serverless cache snapshot. Must be unique for the customer account. This value is stored as a lowercase string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticache_serverless_cache_snapshot#serverless_cache_snapshot_name CcServerlessCacheSnapshot#serverless_cache_snapshot_name}
    */
    readonly serverlessCacheSnapshotName: string;
    /**
    * A list of tags to be added to the serverless cache snapshot resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticache_serverless_cache_snapshot#tags CcServerlessCacheSnapshot#tags}
    */
    readonly tags?: CcServerlessCacheSnapshot.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticache_serverless_cache_snapshot awscc_elasticache_serverless_cache_snapshot}
*/
export class CcServerlessCacheSnapshot extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_elasticache_serverless_cache_snapshot";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcServerlessCacheSnapshot resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcServerlessCacheSnapshot to import
    * @param importFromId The id of the existing CcServerlessCacheSnapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticache_serverless_cache_snapshot#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcServerlessCacheSnapshot to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_elasticache_serverless_cache_snapshot", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticache_serverless_cache_snapshot awscc_elasticache_serverless_cache_snapshot} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcServerlessCacheSnapshotProps
    */
    public constructor(scope: Construct, id: string, config: CcServerlessCacheSnapshotProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_elasticache_serverless_cache_snapshot',
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
        this._kmsKeyId = config.kmsKeyId;
        this._serverlessCacheName = config.serverlessCacheName;
        this._serverlessCacheSnapshotName = config.serverlessCacheSnapshotName;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // bytes_used_for_cache - computed: true, optional: false, required: false
    public get bytesUsedForCache() {
        return this.getStringAttribute('bytes_used_for_cache');
    }

    // create_time - computed: true, optional: false, required: false
    public get createTime() {
        return this.getStringAttribute('create_time');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string; 
    public get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string) {
        this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
        this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
        return this._kmsKeyId;
    }

    // serverless_cache_configuration - computed: true, optional: false, required: false
    private _serverlessCacheConfiguration = new CcServerlessCacheSnapshot.ServerlessCacheConfigurationPropertyOutputReference(this, "serverless_cache_configuration");
    public get serverlessCacheConfiguration() {
        return this._serverlessCacheConfiguration;
    }

    // serverless_cache_name - computed: false, optional: false, required: true
    private _serverlessCacheName?: string; 
    public get serverlessCacheName() {
        return this.getStringAttribute('serverless_cache_name');
    }
    public set serverlessCacheName(value: string) {
        this._serverlessCacheName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serverlessCacheNameInput() {
        return this._serverlessCacheName;
    }

    // serverless_cache_snapshot_name - computed: false, optional: false, required: true
    private _serverlessCacheSnapshotName?: string; 
    public get serverlessCacheSnapshotName() {
        return this.getStringAttribute('serverless_cache_snapshot_name');
    }
    public set serverlessCacheSnapshotName(value: string) {
        this._serverlessCacheSnapshotName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serverlessCacheSnapshotNameInput() {
        return this._serverlessCacheSnapshotName;
    }

    // snapshot_type - computed: true, optional: false, required: false
    public get snapshotType() {
        return this.getStringAttribute('snapshot_type');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcServerlessCacheSnapshot.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcServerlessCacheSnapshot.TagProperty[] | cdktn.IResolvable) {
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
            kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
            serverless_cache_name: cdktn.stringToTerraform(this._serverlessCacheName),
            serverless_cache_snapshot_name: cdktn.stringToTerraform(this._serverlessCacheSnapshotName),
            tags: cdktn.listMapper(ccServerlessCacheSnapshotTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            kms_key_id: {
                value: cdktn.stringToHclTerraform(this._kmsKeyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            serverless_cache_name: {
                value: cdktn.stringToHclTerraform(this._serverlessCacheName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            serverless_cache_snapshot_name: {
                value: cdktn.stringToHclTerraform(this._serverlessCacheSnapshotName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccServerlessCacheSnapshotTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcServerlessCacheSnapshot.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccServerlessCacheSnapshotServerlessCacheConfigurationPropertyToTerraform(struct?: CcServerlessCacheSnapshot.ServerlessCacheConfigurationProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccServerlessCacheSnapshotServerlessCacheConfigurationPropertyToHclTerraform(struct?: CcServerlessCacheSnapshot.ServerlessCacheConfigurationProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccServerlessCacheSnapshotTagPropertyToTerraform(struct?: CcServerlessCacheSnapshot.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccServerlessCacheSnapshotTagPropertyToHclTerraform(struct?: CcServerlessCacheSnapshot.TagProperty | cdktn.IResolvable): any {
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


export namespace CcServerlessCacheSnapshot {
export interface ServerlessCacheConfigurationProperty {
}
export class ServerlessCacheConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServerlessCacheConfigurationProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServerlessCacheConfigurationProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // engine - computed: true, optional: false, required: false
    public get engine() {
        return this.getStringAttribute('engine');
    }

    // major_engine_version - computed: true, optional: false, required: false
    public get majorEngineVersion() {
        return this.getStringAttribute('major_engine_version');
    }

    // serverless_cache_name - computed: true, optional: false, required: false
    public get serverlessCacheName() {
        return this.getStringAttribute('serverless_cache_name');
    }
}
export interface TagProperty {
    /**
    * The key for the tag. May not be null.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticache_serverless_cache_snapshot#key CcServerlessCacheSnapshot#key}
    */
    readonly key?: string;
    /**
    * The tag's value. May be null.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/elasticache_serverless_cache_snapshot#value CcServerlessCacheSnapshot#value}
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
