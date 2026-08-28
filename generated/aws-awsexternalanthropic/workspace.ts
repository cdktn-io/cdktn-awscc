// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/awsexternalanthropic_workspace

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcWorkspaceProps extends cdktn.TerraformMetaArguments {
    /**
    * Data residency configuration for the workspace. WorkspaceGeo is immutable after creation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/awsexternalanthropic_workspace#data_residency CcWorkspace#data_residency}
    */
    readonly dataResidency?: CcWorkspace.DataResidencyProperty;
    /**
    * The name of the workspace.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/awsexternalanthropic_workspace#name CcWorkspace#name}
    */
    readonly name: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/awsexternalanthropic_workspace#tags CcWorkspace#tags}
    */
    readonly tags?: CcWorkspace.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/awsexternalanthropic_workspace awscc_awsexternalanthropic_workspace}
*/
export class CcWorkspace extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_awsexternalanthropic_workspace";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcWorkspace resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcWorkspace to import
    * @param importFromId The id of the existing CcWorkspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/awsexternalanthropic_workspace#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcWorkspace to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_awsexternalanthropic_workspace", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/awsexternalanthropic_workspace awscc_awsexternalanthropic_workspace} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcWorkspaceProps
    */
    public constructor(scope: Construct, id: string, config: CcWorkspaceProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_awsexternalanthropic_workspace',
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
        this._dataResidency.internalValue = config.dataResidency;
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

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // data_residency - computed: true, optional: true, required: false
    private _dataResidency = new CcWorkspace.DataResidencyPropertyOutputReference(this, "data_residency");
    public get dataResidency() {
        return this._dataResidency;
    }
    public putDataResidency(value: CcWorkspace.DataResidencyProperty) {
        this._dataResidency.internalValue = value;
    }
    public resetDataResidency() {
        this._dataResidency.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataResidencyInput() {
        return this._dataResidency.internalValue;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcWorkspace.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcWorkspace.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // workspace_id - computed: true, optional: false, required: false
    public get workspaceId() {
        return this.getStringAttribute('workspace_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            data_residency: ccWorkspaceDataResidencyPropertyToTerraform(this._dataResidency.internalValue),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.listMapper(ccWorkspaceTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            data_residency: {
                value: ccWorkspaceDataResidencyPropertyToHclTerraform(this._dataResidency.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcWorkspace.DataResidencyProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccWorkspaceTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcWorkspace.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccWorkspaceDataResidencyPropertyToTerraform(struct?: CcWorkspace.DataResidencyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_inference_geos: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedInferenceGeos),
        default_inference_geo: cdktn.stringToTerraform(struct!.defaultInferenceGeo),
        workspace_geo: cdktn.stringToTerraform(struct!.workspaceGeo),
    }
}


export function ccWorkspaceDataResidencyPropertyToHclTerraform(struct?: CcWorkspace.DataResidencyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_inference_geos: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedInferenceGeos),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        default_inference_geo: {
            value: cdktn.stringToHclTerraform(struct!.defaultInferenceGeo),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        workspace_geo: {
            value: cdktn.stringToHclTerraform(struct!.workspaceGeo),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkspaceTagPropertyToTerraform(struct?: CcWorkspace.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccWorkspaceTagPropertyToHclTerraform(struct?: CcWorkspace.TagProperty | cdktn.IResolvable): any {
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


export namespace CcWorkspace {
export interface DataResidencyProperty {
    /**
    * Permitted inference geo values. Omit to allow all geos (the service default of 'unrestricted'); otherwise list specific geos.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/awsexternalanthropic_workspace#allowed_inference_geos CcWorkspace#allowed_inference_geos}
    */
    readonly allowedInferenceGeos?: string[];
    /**
    * Default inference geo applied when requests omit the parameter. Defaults to 'global' if omitted. Must be a member of AllowedInferenceGeos unless AllowedInferenceGeos is omitted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/awsexternalanthropic_workspace#default_inference_geo CcWorkspace#default_inference_geo}
    */
    readonly defaultInferenceGeo?: string;
    /**
    * Geographic region for workspace data storage. Immutable after creation. Defaults to 'us' if omitted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/awsexternalanthropic_workspace#workspace_geo CcWorkspace#workspace_geo}
    */
    readonly workspaceGeo?: string;
}
export class DataResidencyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataResidencyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedInferenceGeos !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedInferenceGeos = this._allowedInferenceGeos;
        }
        if (this._defaultInferenceGeo !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultInferenceGeo = this._defaultInferenceGeo;
        }
        if (this._workspaceGeo !== undefined) {
            hasAnyValues = true;
            internalValueResult.workspaceGeo = this._workspaceGeo;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataResidencyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedInferenceGeos = undefined;
            this._defaultInferenceGeo = undefined;
            this._workspaceGeo = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedInferenceGeos = value.allowedInferenceGeos;
            this._defaultInferenceGeo = value.defaultInferenceGeo;
            this._workspaceGeo = value.workspaceGeo;
        }
    }

    // allowed_inference_geos - computed: true, optional: true, required: false
    private _allowedInferenceGeos?: string[]; 
    public get allowedInferenceGeos() {
        return cdktn.Fn.tolist(this.getListAttribute('allowed_inference_geos'));
    }
    public set allowedInferenceGeos(value: string[]) {
        this._allowedInferenceGeos = value;
    }
    public resetAllowedInferenceGeos() {
        this._allowedInferenceGeos = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedInferenceGeosInput() {
        return this._allowedInferenceGeos;
    }

    // default_inference_geo - computed: true, optional: true, required: false
    private _defaultInferenceGeo?: string; 
    public get defaultInferenceGeo() {
        return this.getStringAttribute('default_inference_geo');
    }
    public set defaultInferenceGeo(value: string) {
        this._defaultInferenceGeo = value;
    }
    public resetDefaultInferenceGeo() {
        this._defaultInferenceGeo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultInferenceGeoInput() {
        return this._defaultInferenceGeo;
    }

    // workspace_geo - computed: true, optional: true, required: false
    private _workspaceGeo?: string; 
    public get workspaceGeo() {
        return this.getStringAttribute('workspace_geo');
    }
    public set workspaceGeo(value: string) {
        this._workspaceGeo = value;
    }
    public resetWorkspaceGeo() {
        this._workspaceGeo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workspaceGeoInput() {
        return this._workspaceGeo;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/awsexternalanthropic_workspace#key CcWorkspace#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/awsexternalanthropic_workspace#value CcWorkspace#value}
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
