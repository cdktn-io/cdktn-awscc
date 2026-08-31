// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_application_instance

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcApplicationInstanceProps extends cdktn.TerraformMetaArguments {
    /**
    * The ID of an application instance to replace with the new instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_application_instance#application_instance_id_to_replace CcApplicationInstance#application_instance_id_to_replace}
    */
    readonly applicationInstanceIdToReplace?: string;
    /**
    * The device's ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_application_instance#default_runtime_context_device CcApplicationInstance#default_runtime_context_device}
    */
    readonly defaultRuntimeContextDevice: string;
    /**
    * A description for the application instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_application_instance#description CcApplicationInstance#description}
    */
    readonly description?: string;
    /**
    * Setting overrides for the application manifest.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_application_instance#manifest_overrides_payload CcApplicationInstance#manifest_overrides_payload}
    */
    readonly manifestOverridesPayload?: CcApplicationInstance.ManifestOverridesPayloadProperty;
    /**
    * The application's manifest document.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_application_instance#manifest_payload CcApplicationInstance#manifest_payload}
    */
    readonly manifestPayload: CcApplicationInstance.ManifestPayloadProperty;
    /**
    * A name for the application instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_application_instance#name CcApplicationInstance#name}
    */
    readonly name?: string;
    /**
    * The ARN of a runtime role for the application instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_application_instance#runtime_role_arn CcApplicationInstance#runtime_role_arn}
    */
    readonly runtimeRoleArn?: string;
    /**
    * Tags for the application instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_application_instance#tags CcApplicationInstance#tags}
    */
    readonly tags?: CcApplicationInstance.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_application_instance awscc_panorama_application_instance}
*/
export class CcApplicationInstance extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_panorama_application_instance";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcApplicationInstance resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcApplicationInstance to import
    * @param importFromId The id of the existing CcApplicationInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_application_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcApplicationInstance to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_panorama_application_instance", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_application_instance awscc_panorama_application_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcApplicationInstanceProps
    */
    public constructor(scope: Construct, id: string, config: CcApplicationInstanceProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_panorama_application_instance',
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
        this._applicationInstanceIdToReplace = config.applicationInstanceIdToReplace;
        this._defaultRuntimeContextDevice = config.defaultRuntimeContextDevice;
        this._description = config.description;
        this._manifestOverridesPayload.internalValue = config.manifestOverridesPayload;
        this._manifestPayload.internalValue = config.manifestPayload;
        this._name = config.name;
        this._runtimeRoleArn = config.runtimeRoleArn;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // application_instance_id - computed: true, optional: false, required: false
    public get applicationInstanceId() {
        return this.getStringAttribute('application_instance_id');
    }

    // application_instance_id_to_replace - computed: true, optional: true, required: false
    private _applicationInstanceIdToReplace?: string; 
    public get applicationInstanceIdToReplace() {
        return this.getStringAttribute('application_instance_id_to_replace');
    }
    public set applicationInstanceIdToReplace(value: string) {
        this._applicationInstanceIdToReplace = value;
    }
    public resetApplicationInstanceIdToReplace() {
        this._applicationInstanceIdToReplace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationInstanceIdToReplaceInput() {
        return this._applicationInstanceIdToReplace;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // created_time - computed: true, optional: false, required: false
    public get createdTime() {
        return this.getNumberAttribute('created_time');
    }

    // default_runtime_context_device - computed: false, optional: false, required: true
    private _defaultRuntimeContextDevice?: string; 
    public get defaultRuntimeContextDevice() {
        return this.getStringAttribute('default_runtime_context_device');
    }
    public set defaultRuntimeContextDevice(value: string) {
        this._defaultRuntimeContextDevice = value;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultRuntimeContextDeviceInput() {
        return this._defaultRuntimeContextDevice;
    }

    // default_runtime_context_device_name - computed: true, optional: false, required: false
    public get defaultRuntimeContextDeviceName() {
        return this.getStringAttribute('default_runtime_context_device_name');
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

    // health_status - computed: true, optional: false, required: false
    public get healthStatus() {
        return this.getStringAttribute('health_status');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_updated_time - computed: true, optional: false, required: false
    public get lastUpdatedTime() {
        return this.getNumberAttribute('last_updated_time');
    }

    // manifest_overrides_payload - computed: true, optional: true, required: false
    private _manifestOverridesPayload = new CcApplicationInstance.ManifestOverridesPayloadPropertyOutputReference(this, "manifest_overrides_payload");
    public get manifestOverridesPayload() {
        return this._manifestOverridesPayload;
    }
    public putManifestOverridesPayload(value: CcApplicationInstance.ManifestOverridesPayloadProperty) {
        this._manifestOverridesPayload.internalValue = value;
    }
    public resetManifestOverridesPayload() {
        this._manifestOverridesPayload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get manifestOverridesPayloadInput() {
        return this._manifestOverridesPayload.internalValue;
    }

    // manifest_payload - computed: false, optional: false, required: true
    private _manifestPayload = new CcApplicationInstance.ManifestPayloadPropertyOutputReference(this, "manifest_payload");
    public get manifestPayload() {
        return this._manifestPayload;
    }
    public putManifestPayload(value: CcApplicationInstance.ManifestPayloadProperty) {
        this._manifestPayload.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get manifestPayloadInput() {
        return this._manifestPayload.internalValue;
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

    // runtime_role_arn - computed: true, optional: true, required: false
    private _runtimeRoleArn?: string; 
    public get runtimeRoleArn() {
        return this.getStringAttribute('runtime_role_arn');
    }
    public set runtimeRoleArn(value: string) {
        this._runtimeRoleArn = value;
    }
    public resetRuntimeRoleArn() {
        this._runtimeRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get runtimeRoleArnInput() {
        return this._runtimeRoleArn;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // status_description - computed: true, optional: false, required: false
    public get statusDescription() {
        return this.getStringAttribute('status_description');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcApplicationInstance.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcApplicationInstance.TagProperty[] | cdktn.IResolvable) {
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
            application_instance_id_to_replace: cdktn.stringToTerraform(this._applicationInstanceIdToReplace),
            default_runtime_context_device: cdktn.stringToTerraform(this._defaultRuntimeContextDevice),
            description: cdktn.stringToTerraform(this._description),
            manifest_overrides_payload: ccApplicationInstanceManifestOverridesPayloadPropertyToTerraform(this._manifestOverridesPayload.internalValue),
            manifest_payload: ccApplicationInstanceManifestPayloadPropertyToTerraform(this._manifestPayload.internalValue),
            name: cdktn.stringToTerraform(this._name),
            runtime_role_arn: cdktn.stringToTerraform(this._runtimeRoleArn),
            tags: cdktn.listMapper(ccApplicationInstanceTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            application_instance_id_to_replace: {
                value: cdktn.stringToHclTerraform(this._applicationInstanceIdToReplace),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            default_runtime_context_device: {
                value: cdktn.stringToHclTerraform(this._defaultRuntimeContextDevice),
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
            manifest_overrides_payload: {
                value: ccApplicationInstanceManifestOverridesPayloadPropertyToHclTerraform(this._manifestOverridesPayload.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcApplicationInstance.ManifestOverridesPayloadProperty",
            },
            manifest_payload: {
                value: ccApplicationInstanceManifestPayloadPropertyToHclTerraform(this._manifestPayload.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcApplicationInstance.ManifestPayloadProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            runtime_role_arn: {
                value: cdktn.stringToHclTerraform(this._runtimeRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccApplicationInstanceTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcApplicationInstance.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccApplicationInstanceManifestOverridesPayloadPropertyToTerraform(struct?: CcApplicationInstance.ManifestOverridesPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        payload_data: cdktn.stringToTerraform(struct!.payloadData),
    }
}


export function ccApplicationInstanceManifestOverridesPayloadPropertyToHclTerraform(struct?: CcApplicationInstance.ManifestOverridesPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        payload_data: {
            value: cdktn.stringToHclTerraform(struct!.payloadData),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationInstanceManifestPayloadPropertyToTerraform(struct?: CcApplicationInstance.ManifestPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        payload_data: cdktn.stringToTerraform(struct!.payloadData),
    }
}


export function ccApplicationInstanceManifestPayloadPropertyToHclTerraform(struct?: CcApplicationInstance.ManifestPayloadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        payload_data: {
            value: cdktn.stringToHclTerraform(struct!.payloadData),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationInstanceTagPropertyToTerraform(struct?: CcApplicationInstance.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccApplicationInstanceTagPropertyToHclTerraform(struct?: CcApplicationInstance.TagProperty | cdktn.IResolvable): any {
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


export namespace CcApplicationInstance {
export interface ManifestOverridesPayloadProperty {
    /**
    * The overrides document.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_application_instance#payload_data CcApplicationInstance#payload_data}
    */
    readonly payloadData?: string;
}
export class ManifestOverridesPayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ManifestOverridesPayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._payloadData !== undefined) {
            hasAnyValues = true;
            internalValueResult.payloadData = this._payloadData;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ManifestOverridesPayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._payloadData = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._payloadData = value.payloadData;
        }
    }

    // payload_data - computed: true, optional: true, required: false
    private _payloadData?: string; 
    public get payloadData() {
        return this.getStringAttribute('payload_data');
    }
    public set payloadData(value: string) {
        this._payloadData = value;
    }
    public resetPayloadData() {
        this._payloadData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadDataInput() {
        return this._payloadData;
    }
}
export interface ManifestPayloadProperty {
    /**
    * The application manifest.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_application_instance#payload_data CcApplicationInstance#payload_data}
    */
    readonly payloadData?: string;
}
export class ManifestPayloadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ManifestPayloadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._payloadData !== undefined) {
            hasAnyValues = true;
            internalValueResult.payloadData = this._payloadData;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ManifestPayloadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._payloadData = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._payloadData = value.payloadData;
        }
    }

    // payload_data - computed: true, optional: true, required: false
    private _payloadData?: string; 
    public get payloadData() {
        return this.getStringAttribute('payload_data');
    }
    public set payloadData(value: string) {
        this._payloadData = value;
    }
    public resetPayloadData() {
        this._payloadData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payloadDataInput() {
        return this._payloadData;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_application_instance#key CcApplicationInstance#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_application_instance#value CcApplicationInstance#value}
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
