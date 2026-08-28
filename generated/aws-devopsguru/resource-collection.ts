// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsguru_resource_collection

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcResourceCollectionProps extends cdktn.TerraformMetaArguments {
    /**
    * Information about a filter used to specify which AWS resources are analyzed for anomalous behavior by DevOps Guru.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsguru_resource_collection#resource_collection_filter CcResourceCollection#resource_collection_filter}
    */
    readonly resourceCollectionFilter: CcResourceCollection.ResourceCollectionFilterProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsguru_resource_collection awscc_devopsguru_resource_collection}
*/
export class CcResourceCollection extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_devopsguru_resource_collection";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcResourceCollection resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcResourceCollection to import
    * @param importFromId The id of the existing CcResourceCollection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsguru_resource_collection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcResourceCollection to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_devopsguru_resource_collection", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsguru_resource_collection awscc_devopsguru_resource_collection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcResourceCollectionProps
    */
    public constructor(scope: Construct, id: string, config: CcResourceCollectionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_devopsguru_resource_collection',
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
        this._resourceCollectionFilter.internalValue = config.resourceCollectionFilter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // resource_collection_filter - computed: false, optional: false, required: true
    private _resourceCollectionFilter = new CcResourceCollection.ResourceCollectionFilterPropertyOutputReference(this, "resource_collection_filter");
    public get resourceCollectionFilter() {
        return this._resourceCollectionFilter;
    }
    public putResourceCollectionFilter(value: CcResourceCollection.ResourceCollectionFilterProperty) {
        this._resourceCollectionFilter.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceCollectionFilterInput() {
        return this._resourceCollectionFilter.internalValue;
    }

    // resource_collection_type - computed: true, optional: false, required: false
    public get resourceCollectionType() {
        return this.getStringAttribute('resource_collection_type');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            resource_collection_filter: ccResourceCollectionResourceCollectionFilterPropertyToTerraform(this._resourceCollectionFilter.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            resource_collection_filter: {
                value: ccResourceCollectionResourceCollectionFilterPropertyToHclTerraform(this._resourceCollectionFilter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcResourceCollection.ResourceCollectionFilterProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccResourceCollectionCloudFormationCollectionFilterPropertyToTerraform(struct?: CcResourceCollection.CloudFormationCollectionFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        stack_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.stackNames),
    }
}


export function ccResourceCollectionCloudFormationCollectionFilterPropertyToHclTerraform(struct?: CcResourceCollection.CloudFormationCollectionFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        stack_names: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.stackNames),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResourceCollectionTagCollectionPropertyToTerraform(struct?: CcResourceCollection.TagCollectionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        app_boundary_key: cdktn.stringToTerraform(struct!.appBoundaryKey),
        tag_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tagValues),
    }
}


export function ccResourceCollectionTagCollectionPropertyToHclTerraform(struct?: CcResourceCollection.TagCollectionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        app_boundary_key: {
            value: cdktn.stringToHclTerraform(struct!.appBoundaryKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tag_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tagValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResourceCollectionResourceCollectionFilterPropertyToTerraform(struct?: CcResourceCollection.ResourceCollectionFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cloudformation: ccResourceCollectionCloudFormationCollectionFilterPropertyToTerraform(struct!.cloudformation),
        tags: cdktn.listMapper(ccResourceCollectionTagCollectionPropertyToTerraform, false)(struct!.tags),
    }
}


export function ccResourceCollectionResourceCollectionFilterPropertyToHclTerraform(struct?: CcResourceCollection.ResourceCollectionFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cloudformation: {
            value: ccResourceCollectionCloudFormationCollectionFilterPropertyToHclTerraform(struct!.cloudformation),
            isBlock: true,
            type: "struct",
            storageClassType: "CloudFormationCollectionFilterProperty",
        },
        tags: {
            value: cdktn.listMapperHcl(ccResourceCollectionTagCollectionPropertyToHclTerraform, false)(struct!.tags),
            isBlock: true,
            type: "list",
            storageClassType: "TagCollectionPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcResourceCollection {
export interface CloudFormationCollectionFilterProperty {
    /**
    * An array of CloudFormation stack names.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsguru_resource_collection#stack_names CcResourceCollection#stack_names}
    */
    readonly stackNames?: string[];
}
export class CloudFormationCollectionFilterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CloudFormationCollectionFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._stackNames !== undefined) {
            hasAnyValues = true;
            internalValueResult.stackNames = this._stackNames;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CloudFormationCollectionFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._stackNames = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._stackNames = value.stackNames;
        }
    }

    // stack_names - computed: true, optional: true, required: false
    private _stackNames?: string[]; 
    public get stackNames() {
        return this.getListAttribute('stack_names');
    }
    public set stackNames(value: string[]) {
        this._stackNames = value;
    }
    public resetStackNames() {
        this._stackNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stackNamesInput() {
        return this._stackNames;
    }
}
export interface TagCollectionProperty {
    /**
    * A Tag key for DevOps Guru app boundary.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsguru_resource_collection#app_boundary_key CcResourceCollection#app_boundary_key}
    */
    readonly appBoundaryKey?: string;
    /**
    * Tag values of DevOps Guru app boundary.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsguru_resource_collection#tag_values CcResourceCollection#tag_values}
    */
    readonly tagValues?: string[];
}
export class TagCollectionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagCollectionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._appBoundaryKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.appBoundaryKey = this._appBoundaryKey;
        }
        if (this._tagValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagValues = this._tagValues;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TagCollectionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appBoundaryKey = undefined;
            this._tagValues = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appBoundaryKey = value.appBoundaryKey;
            this._tagValues = value.tagValues;
        }
    }

    // app_boundary_key - computed: true, optional: true, required: false
    private _appBoundaryKey?: string; 
    public get appBoundaryKey() {
        return this.getStringAttribute('app_boundary_key');
    }
    public set appBoundaryKey(value: string) {
        this._appBoundaryKey = value;
    }
    public resetAppBoundaryKey() {
        this._appBoundaryKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appBoundaryKeyInput() {
        return this._appBoundaryKey;
    }

    // tag_values - computed: true, optional: true, required: false
    private _tagValues?: string[]; 
    public get tagValues() {
        return this.getListAttribute('tag_values');
    }
    public set tagValues(value: string[]) {
        this._tagValues = value;
    }
    public resetTagValues() {
        this._tagValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagValuesInput() {
        return this._tagValues;
    }
}

export class TagCollectionPropertyList extends cdktn.ComplexList {
    public internalValue? : TagCollectionProperty[] | cdktn.IResolvable

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
    public get(index: number): TagCollectionPropertyOutputReference {
        return new TagCollectionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ResourceCollectionFilterProperty {
    /**
    * CloudFormation resource for DevOps Guru to monitor
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsguru_resource_collection#cloudformation CcResourceCollection#cloudformation}
    */
    readonly cloudformation?: CloudFormationCollectionFilterProperty;
    /**
    * Tagged resources for DevOps Guru to monitor
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsguru_resource_collection#tags CcResourceCollection#tags}
    */
    readonly tags?: TagCollectionProperty[] | cdktn.IResolvable;
}
export class ResourceCollectionFilterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ResourceCollectionFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cloudformation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudformation = this._cloudformation?.internalValue;
        }
        if (this._tags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tags = this._tags?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceCollectionFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudformation.internalValue = undefined;
            this._tags.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudformation.internalValue = value.cloudformation;
            this._tags.internalValue = value.tags;
        }
    }

    // cloudformation - computed: true, optional: true, required: false
    private _cloudformation = new CloudFormationCollectionFilterPropertyOutputReference(this, "cloudformation");
    public get cloudformation() {
        return this._cloudformation;
    }
    public putCloudformation(value: CloudFormationCollectionFilterProperty) {
        this._cloudformation.internalValue = value;
    }
    public resetCloudformation() {
        this._cloudformation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudformationInput() {
        return this._cloudformation.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new TagCollectionPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: TagCollectionProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }
}
}
