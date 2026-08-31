// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_service_profile

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcServiceProfileProps extends cdktn.TerraformMetaArguments {
    /**
    * LoRaWAN supports all LoRa specific attributes for service profile for CreateServiceProfile operation
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_service_profile#lo_ra_wan CcServiceProfile#lo_ra_wan}
    */
    readonly loRaWan?: CcServiceProfile.LoRaWANServiceProfileProperty;
    /**
    * Name of service profile
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_service_profile#name CcServiceProfile#name}
    */
    readonly name?: string;
    /**
    * A list of key-value pairs that contain metadata for the service profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_service_profile#tags CcServiceProfile#tags}
    */
    readonly tags?: CcServiceProfile.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_service_profile awscc_iotwireless_service_profile}
*/
export class CcServiceProfile extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iotwireless_service_profile";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcServiceProfile resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcServiceProfile to import
    * @param importFromId The id of the existing CcServiceProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_service_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcServiceProfile to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotwireless_service_profile", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_service_profile awscc_iotwireless_service_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcServiceProfileProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcServiceProfileProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_iotwireless_service_profile',
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
        this._loRaWan.internalValue = config.loRaWan;
        this._name = config.name;
        this._tags.internalValue = config.tags;
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

    // lo_ra_wan - computed: true, optional: true, required: false
    private _loRaWan = new CcServiceProfile.LoRaWANServiceProfilePropertyOutputReference(this, "lo_ra_wan");
    public get loRaWan() {
        return this._loRaWan;
    }
    public putLoRaWan(value: CcServiceProfile.LoRaWANServiceProfileProperty) {
        this._loRaWan.internalValue = value;
    }
    public resetLoRaWan() {
        this._loRaWan.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loRaWanInput() {
        return this._loRaWan.internalValue;
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

    // service_profile_id - computed: true, optional: false, required: false
    public get serviceProfileId() {
        return this.getStringAttribute('service_profile_id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcServiceProfile.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcServiceProfile.TagProperty[] | cdktn.IResolvable) {
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
            lo_ra_wan: ccServiceProfileLoRaWANServiceProfilePropertyToTerraform(this._loRaWan.internalValue),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccServiceProfileTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            lo_ra_wan: {
                value: ccServiceProfileLoRaWANServiceProfilePropertyToHclTerraform(this._loRaWan.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcServiceProfile.LoRaWANServiceProfileProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccServiceProfileTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcServiceProfile.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccServiceProfileLoRaWANServiceProfilePropertyToTerraform(struct?: CcServiceProfile.LoRaWANServiceProfileProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        add_gw_metadata: cdktn.booleanToTerraform(struct!.addGwMetadata),
        pr_allowed: cdktn.booleanToTerraform(struct!.prAllowed),
        ra_allowed: cdktn.booleanToTerraform(struct!.raAllowed),
    }
}


export function ccServiceProfileLoRaWANServiceProfilePropertyToHclTerraform(struct?: CcServiceProfile.LoRaWANServiceProfileProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        add_gw_metadata: {
            value: cdktn.booleanToHclTerraform(struct!.addGwMetadata),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        pr_allowed: {
            value: cdktn.booleanToHclTerraform(struct!.prAllowed),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        ra_allowed: {
            value: cdktn.booleanToHclTerraform(struct!.raAllowed),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceProfileTagPropertyToTerraform(struct?: CcServiceProfile.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccServiceProfileTagPropertyToHclTerraform(struct?: CcServiceProfile.TagProperty | cdktn.IResolvable): any {
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


export namespace CcServiceProfile {
export interface LoRaWANServiceProfileProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_service_profile#add_gw_metadata CcServiceProfile#add_gw_metadata}
    */
    readonly addGwMetadata?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_service_profile#pr_allowed CcServiceProfile#pr_allowed}
    */
    readonly prAllowed?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_service_profile#ra_allowed CcServiceProfile#ra_allowed}
    */
    readonly raAllowed?: boolean | cdktn.IResolvable;
}
export class LoRaWANServiceProfilePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LoRaWANServiceProfileProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._addGwMetadata !== undefined) {
            hasAnyValues = true;
            internalValueResult.addGwMetadata = this._addGwMetadata;
        }
        if (this._prAllowed !== undefined) {
            hasAnyValues = true;
            internalValueResult.prAllowed = this._prAllowed;
        }
        if (this._raAllowed !== undefined) {
            hasAnyValues = true;
            internalValueResult.raAllowed = this._raAllowed;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LoRaWANServiceProfileProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._addGwMetadata = undefined;
            this._prAllowed = undefined;
            this._raAllowed = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._addGwMetadata = value.addGwMetadata;
            this._prAllowed = value.prAllowed;
            this._raAllowed = value.raAllowed;
        }
    }

    // add_gw_metadata - computed: true, optional: true, required: false
    private _addGwMetadata?: boolean | cdktn.IResolvable; 
    public get addGwMetadata() {
        return this.getBooleanAttribute('add_gw_metadata');
    }
    public set addGwMetadata(value: boolean | cdktn.IResolvable) {
        this._addGwMetadata = value;
    }
    public resetAddGwMetadata() {
        this._addGwMetadata = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get addGwMetadataInput() {
        return this._addGwMetadata;
    }

    // channel_mask - computed: true, optional: false, required: false
    public get channelMask() {
        return this.getStringAttribute('channel_mask');
    }

    // dev_status_req_freq - computed: true, optional: false, required: false
    public get devStatusReqFreq() {
        return this.getNumberAttribute('dev_status_req_freq');
    }

    // dl_bucket_size - computed: true, optional: false, required: false
    public get dlBucketSize() {
        return this.getNumberAttribute('dl_bucket_size');
    }

    // dl_rate - computed: true, optional: false, required: false
    public get dlRate() {
        return this.getNumberAttribute('dl_rate');
    }

    // dl_rate_policy - computed: true, optional: false, required: false
    public get dlRatePolicy() {
        return this.getStringAttribute('dl_rate_policy');
    }

    // dr_max - computed: true, optional: false, required: false
    public get drMax() {
        return this.getNumberAttribute('dr_max');
    }

    // dr_min - computed: true, optional: false, required: false
    public get drMin() {
        return this.getNumberAttribute('dr_min');
    }

    // hr_allowed - computed: true, optional: false, required: false
    public get hrAllowed() {
        return this.getBooleanAttribute('hr_allowed');
    }

    // min_gw_diversity - computed: true, optional: false, required: false
    public get minGwDiversity() {
        return this.getNumberAttribute('min_gw_diversity');
    }

    // nwk_geo_loc - computed: true, optional: false, required: false
    public get nwkGeoLoc() {
        return this.getBooleanAttribute('nwk_geo_loc');
    }

    // pr_allowed - computed: true, optional: true, required: false
    private _prAllowed?: boolean | cdktn.IResolvable; 
    public get prAllowed() {
        return this.getBooleanAttribute('pr_allowed');
    }
    public set prAllowed(value: boolean | cdktn.IResolvable) {
        this._prAllowed = value;
    }
    public resetPrAllowed() {
        this._prAllowed = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prAllowedInput() {
        return this._prAllowed;
    }

    // ra_allowed - computed: true, optional: true, required: false
    private _raAllowed?: boolean | cdktn.IResolvable; 
    public get raAllowed() {
        return this.getBooleanAttribute('ra_allowed');
    }
    public set raAllowed(value: boolean | cdktn.IResolvable) {
        this._raAllowed = value;
    }
    public resetRaAllowed() {
        this._raAllowed = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get raAllowedInput() {
        return this._raAllowed;
    }

    // report_dev_status_battery - computed: true, optional: false, required: false
    public get reportDevStatusBattery() {
        return this.getBooleanAttribute('report_dev_status_battery');
    }

    // report_dev_status_margin - computed: true, optional: false, required: false
    public get reportDevStatusMargin() {
        return this.getBooleanAttribute('report_dev_status_margin');
    }

    // target_per - computed: true, optional: false, required: false
    public get targetPer() {
        return this.getNumberAttribute('target_per');
    }

    // ul_bucket_size - computed: true, optional: false, required: false
    public get ulBucketSize() {
        return this.getNumberAttribute('ul_bucket_size');
    }

    // ul_rate - computed: true, optional: false, required: false
    public get ulRate() {
        return this.getNumberAttribute('ul_rate');
    }

    // ul_rate_policy - computed: true, optional: false, required: false
    public get ulRatePolicy() {
        return this.getStringAttribute('ul_rate_policy');
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_service_profile#key CcServiceProfile#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_service_profile#value CcServiceProfile#value}
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
