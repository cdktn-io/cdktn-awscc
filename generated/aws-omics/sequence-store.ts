// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_sequence_store

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSequenceStoreProps extends cdktn.TerraformMetaArguments {
    /**
    * Location of the access logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_sequence_store#access_log_location CcSequenceStore#access_log_location}
    */
    readonly accessLogLocation?: string;
    /**
    * A description for the store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_sequence_store#description CcSequenceStore#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_sequence_store#e_tag_algorithm_family CcSequenceStore#e_tag_algorithm_family}
    */
    readonly eTagAlgorithmFamily?: string;
    /**
    * An S3 location that is used to store files that have failed a direct upload.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_sequence_store#fallback_location CcSequenceStore#fallback_location}
    */
    readonly fallbackLocation?: string;
    /**
    * A name for the store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_sequence_store#name CcSequenceStore#name}
    */
    readonly name: string;
    /**
    * The tags keys to propagate to the S3 objects associated with read sets in the sequence store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_sequence_store#propagated_set_level_tags CcSequenceStore#propagated_set_level_tags}
    */
    readonly propagatedSetLevelTags?: string[];
    /**
    * The resource policy that controls S3 access on the store
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_sequence_store#s3_access_policy CcSequenceStore#s3_access_policy}
    */
    readonly s3AccessPolicy?: string;
    /**
    * Server-side encryption (SSE) settings for a store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_sequence_store#sse_config CcSequenceStore#sse_config}
    */
    readonly sseConfig?: CcSequenceStore.SseConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_sequence_store#tags CcSequenceStore#tags}
    */
    readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_sequence_store awscc_omics_sequence_store}
*/
export class CcSequenceStore extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_omics_sequence_store";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSequenceStore resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSequenceStore to import
    * @param importFromId The id of the existing CcSequenceStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_sequence_store#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSequenceStore to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_omics_sequence_store", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_sequence_store awscc_omics_sequence_store} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSequenceStoreProps
    */
    public constructor(scope: Construct, id: string, config: CcSequenceStoreProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_omics_sequence_store',
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
        this._accessLogLocation = config.accessLogLocation;
        this._description = config.description;
        this._eTagAlgorithmFamily = config.eTagAlgorithmFamily;
        this._fallbackLocation = config.fallbackLocation;
        this._name = config.name;
        this._propagatedSetLevelTags = config.propagatedSetLevelTags;
        this._s3AccessPolicy = config.s3AccessPolicy;
        this._sseConfig.internalValue = config.sseConfig;
        this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_log_location - computed: true, optional: true, required: false
    private _accessLogLocation?: string; 
    public get accessLogLocation() {
        return this.getStringAttribute('access_log_location');
    }
    public set accessLogLocation(value: string) {
        this._accessLogLocation = value;
    }
    public resetAccessLogLocation() {
        this._accessLogLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessLogLocationInput() {
        return this._accessLogLocation;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

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

    // e_tag_algorithm_family - computed: true, optional: true, required: false
    private _eTagAlgorithmFamily?: string; 
    public get eTagAlgorithmFamily() {
        return this.getStringAttribute('e_tag_algorithm_family');
    }
    public set eTagAlgorithmFamily(value: string) {
        this._eTagAlgorithmFamily = value;
    }
    public resetETagAlgorithmFamily() {
        this._eTagAlgorithmFamily = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eTagAlgorithmFamilyInput() {
        return this._eTagAlgorithmFamily;
    }

    // fallback_location - computed: true, optional: true, required: false
    private _fallbackLocation?: string; 
    public get fallbackLocation() {
        return this.getStringAttribute('fallback_location');
    }
    public set fallbackLocation(value: string) {
        this._fallbackLocation = value;
    }
    public resetFallbackLocation() {
        this._fallbackLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fallbackLocationInput() {
        return this._fallbackLocation;
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

    // propagated_set_level_tags - computed: true, optional: true, required: false
    private _propagatedSetLevelTags?: string[]; 
    public get propagatedSetLevelTags() {
        return this.getListAttribute('propagated_set_level_tags');
    }
    public set propagatedSetLevelTags(value: string[]) {
        this._propagatedSetLevelTags = value;
    }
    public resetPropagatedSetLevelTags() {
        this._propagatedSetLevelTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propagatedSetLevelTagsInput() {
        return this._propagatedSetLevelTags;
    }

    // s3_access_point_arn - computed: true, optional: false, required: false
    public get s3AccessPointArn() {
        return this.getStringAttribute('s3_access_point_arn');
    }

    // s3_access_policy - computed: true, optional: true, required: false
    private _s3AccessPolicy?: string; 
    public get s3AccessPolicy() {
        return this.getStringAttribute('s3_access_policy');
    }
    public set s3AccessPolicy(value: string) {
        this._s3AccessPolicy = value;
    }
    public resetS3AccessPolicy() {
        this._s3AccessPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3AccessPolicyInput() {
        return this._s3AccessPolicy;
    }

    // s3_uri - computed: true, optional: false, required: false
    public get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }

    // sequence_store_id - computed: true, optional: false, required: false
    public get sequenceStoreId() {
        return this.getStringAttribute('sequence_store_id');
    }

    // sse_config - computed: true, optional: true, required: false
    private _sseConfig = new CcSequenceStore.SseConfigPropertyOutputReference(this, "sse_config");
    public get sseConfig() {
        return this._sseConfig;
    }
    public putSseConfig(value: CcSequenceStore.SseConfigProperty) {
        this._sseConfig.internalValue = value;
    }
    public resetSseConfig() {
        this._sseConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sseConfigInput() {
        return this._sseConfig.internalValue;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // status_message - computed: true, optional: false, required: false
    public get statusMessage() {
        return this.getStringAttribute('status_message');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string }; 
    public get tags() {
        return this.getStringMapAttribute('tags');
    }
    public set tags(value: { [key: string]: string }) {
        this._tags = value;
    }
    public resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags;
    }

    // update_time - computed: true, optional: false, required: false
    public get updateTime() {
        return this.getStringAttribute('update_time');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            access_log_location: cdktn.stringToTerraform(this._accessLogLocation),
            description: cdktn.stringToTerraform(this._description),
            e_tag_algorithm_family: cdktn.stringToTerraform(this._eTagAlgorithmFamily),
            fallback_location: cdktn.stringToTerraform(this._fallbackLocation),
            name: cdktn.stringToTerraform(this._name),
            propagated_set_level_tags: cdktn.listMapper(cdktn.stringToTerraform, false)(this._propagatedSetLevelTags),
            s3_access_policy: cdktn.stringToTerraform(this._s3AccessPolicy),
            sse_config: ccSequenceStoreSseConfigPropertyToTerraform(this._sseConfig.internalValue),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            access_log_location: {
                value: cdktn.stringToHclTerraform(this._accessLogLocation),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            e_tag_algorithm_family: {
                value: cdktn.stringToHclTerraform(this._eTagAlgorithmFamily),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            fallback_location: {
                value: cdktn.stringToHclTerraform(this._fallbackLocation),
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
            propagated_set_level_tags: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._propagatedSetLevelTags),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            s3_access_policy: {
                value: cdktn.stringToHclTerraform(this._s3AccessPolicy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sse_config: {
                value: ccSequenceStoreSseConfigPropertyToHclTerraform(this._sseConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSequenceStore.SseConfigProperty",
            },
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccSequenceStoreSseConfigPropertyToTerraform(struct?: CcSequenceStore.SseConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key_arn: cdktn.stringToTerraform(struct!.keyArn),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccSequenceStoreSseConfigPropertyToHclTerraform(struct?: CcSequenceStore.SseConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        key_arn: {
            value: cdktn.stringToHclTerraform(struct!.keyArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcSequenceStore {
export interface SseConfigProperty {
    /**
    * An encryption key ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_sequence_store#key_arn CcSequenceStore#key_arn}
    */
    readonly keyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/omics_sequence_store#type CcSequenceStore#type}
    */
    readonly type?: string;
}
export class SseConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SseConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._keyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyArn = this._keyArn;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SseConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._keyArn = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._keyArn = value.keyArn;
            this._type = value.type;
        }
    }

    // key_arn - computed: true, optional: true, required: false
    private _keyArn?: string; 
    public get keyArn() {
        return this.getStringAttribute('key_arn');
    }
    public set keyArn(value: string) {
        this._keyArn = value;
    }
    public resetKeyArn() {
        this._keyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyArnInput() {
        return this._keyArn;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
}
