// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_ingest_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcIngestConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * Ingest Protocol.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_ingest_configuration#ingest_protocol CcIngestConfiguration#ingest_protocol}
    */
    readonly ingestProtocol?: string;
    /**
    * Whether ingest configuration allows insecure ingest.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_ingest_configuration#insecure_ingest CcIngestConfiguration#insecure_ingest}
    */
    readonly insecureIngest?: boolean | cdktn.IResolvable;
    /**
    * IngestConfiguration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_ingest_configuration#name CcIngestConfiguration#name}
    */
    readonly name?: string;
    /**
    * Stage ARN. A value other than an empty string indicates that stage is linked to IngestConfiguration. Default: "" (recording is disabled).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_ingest_configuration#stage_arn CcIngestConfiguration#stage_arn}
    */
    readonly stageArn?: string;
    /**
    * A list of key-value pairs that contain metadata for the asset model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_ingest_configuration#tags CcIngestConfiguration#tags}
    */
    readonly tags?: CcIngestConfiguration.TagProperty[] | cdktn.IResolvable;
    /**
    * User defined indentifier for participant associated with IngestConfiguration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_ingest_configuration#user_id CcIngestConfiguration#user_id}
    */
    readonly userId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_ingest_configuration awscc_ivs_ingest_configuration}
*/
export class CcIngestConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ivs_ingest_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcIngestConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcIngestConfiguration to import
    * @param importFromId The id of the existing CcIngestConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_ingest_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcIngestConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ivs_ingest_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_ingest_configuration awscc_ivs_ingest_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcIngestConfigurationProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcIngestConfigurationProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_ivs_ingest_configuration',
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
        this._ingestProtocol = config.ingestProtocol;
        this._insecureIngest = config.insecureIngest;
        this._name = config.name;
        this._stageArn = config.stageArn;
        this._tags.internalValue = config.tags;
        this._userId = config.userId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // ingest_protocol - computed: true, optional: true, required: false
    private _ingestProtocol?: string; 
    public get ingestProtocol() {
        return this.getStringAttribute('ingest_protocol');
    }
    public set ingestProtocol(value: string) {
        this._ingestProtocol = value;
    }
    public resetIngestProtocol() {
        this._ingestProtocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ingestProtocolInput() {
        return this._ingestProtocol;
    }

    // insecure_ingest - computed: true, optional: true, required: false
    private _insecureIngest?: boolean | cdktn.IResolvable; 
    public get insecureIngest() {
        return this.getBooleanAttribute('insecure_ingest');
    }
    public set insecureIngest(value: boolean | cdktn.IResolvable) {
        this._insecureIngest = value;
    }
    public resetInsecureIngest() {
        this._insecureIngest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get insecureIngestInput() {
        return this._insecureIngest;
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

    // participant_id - computed: true, optional: false, required: false
    public get participantId() {
        return this.getStringAttribute('participant_id');
    }

    // stage_arn - computed: true, optional: true, required: false
    private _stageArn?: string; 
    public get stageArn() {
        return this.getStringAttribute('stage_arn');
    }
    public set stageArn(value: string) {
        this._stageArn = value;
    }
    public resetStageArn() {
        this._stageArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stageArnInput() {
        return this._stageArn;
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // stream_key - computed: true, optional: false, required: false
    public get streamKey() {
        return this.getStringAttribute('stream_key');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcIngestConfiguration.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcIngestConfiguration.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // user_id - computed: true, optional: true, required: false
    private _userId?: string; 
    public get userId() {
        return this.getStringAttribute('user_id');
    }
    public set userId(value: string) {
        this._userId = value;
    }
    public resetUserId() {
        this._userId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userIdInput() {
        return this._userId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            ingest_protocol: cdktn.stringToTerraform(this._ingestProtocol),
            insecure_ingest: cdktn.booleanToTerraform(this._insecureIngest),
            name: cdktn.stringToTerraform(this._name),
            stage_arn: cdktn.stringToTerraform(this._stageArn),
            tags: cdktn.listMapper(ccIngestConfigurationTagPropertyToTerraform, false)(this._tags.internalValue),
            user_id: cdktn.stringToTerraform(this._userId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            ingest_protocol: {
                value: cdktn.stringToHclTerraform(this._ingestProtocol),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            insecure_ingest: {
                value: cdktn.booleanToHclTerraform(this._insecureIngest),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            stage_arn: {
                value: cdktn.stringToHclTerraform(this._stageArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccIngestConfigurationTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcIngestConfiguration.TagPropertyList",
            },
            user_id: {
                value: cdktn.stringToHclTerraform(this._userId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccIngestConfigurationTagPropertyToTerraform(struct?: CcIngestConfiguration.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccIngestConfigurationTagPropertyToHclTerraform(struct?: CcIngestConfiguration.TagProperty | cdktn.IResolvable): any {
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


export namespace CcIngestConfiguration {
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_ingest_configuration#key CcIngestConfiguration#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ivs_ingest_configuration#value CcIngestConfiguration#value}
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
