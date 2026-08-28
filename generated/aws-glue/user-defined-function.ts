// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_user_defined_function

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcUserDefinedFunctionProps extends cdktn.TerraformMetaArguments {
    /**
    * The Java class that contains the function code.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_user_defined_function#class_name CcUserDefinedFunction#class_name}
    */
    readonly className?: string;
    /**
    * The name of the catalog database in which the function is located.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_user_defined_function#database_name CcUserDefinedFunction#database_name}
    */
    readonly databaseName: string;
    /**
    * The name of the function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_user_defined_function#function_name CcUserDefinedFunction#function_name}
    */
    readonly functionName: string;
    /**
    * The type of the function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_user_defined_function#function_type CcUserDefinedFunction#function_type}
    */
    readonly functionType?: string;
    /**
    * The owner of the function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_user_defined_function#owner_name CcUserDefinedFunction#owner_name}
    */
    readonly ownerName?: string;
    /**
    * The owner type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_user_defined_function#owner_type CcUserDefinedFunction#owner_type}
    */
    readonly ownerType?: string;
    /**
    * The resource URIs for the function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_user_defined_function#resource_uris CcUserDefinedFunction#resource_uris}
    */
    readonly resourceUris?: CcUserDefinedFunction.ResourceUriProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_user_defined_function awscc_glue_user_defined_function}
*/
export class CcUserDefinedFunction extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_glue_user_defined_function";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcUserDefinedFunction resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcUserDefinedFunction to import
    * @param importFromId The id of the existing CcUserDefinedFunction that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_user_defined_function#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcUserDefinedFunction to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_glue_user_defined_function", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_user_defined_function awscc_glue_user_defined_function} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcUserDefinedFunctionProps
    */
    public constructor(scope: Construct, id: string, config: CcUserDefinedFunctionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_glue_user_defined_function',
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
        this._className = config.className;
        this._databaseName = config.databaseName;
        this._functionName = config.functionName;
        this._functionType = config.functionType;
        this._ownerName = config.ownerName;
        this._ownerType = config.ownerType;
        this._resourceUris.internalValue = config.resourceUris;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // class_name - computed: true, optional: true, required: false
    private _className?: string; 
    public get className() {
        return this.getStringAttribute('class_name');
    }
    public set className(value: string) {
        this._className = value;
    }
    public resetClassName() {
        this._className = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get classNameInput() {
        return this._className;
    }

    // database_name - computed: false, optional: false, required: true
    private _databaseName?: string; 
    public get databaseName() {
        return this.getStringAttribute('database_name');
    }
    public set databaseName(value: string) {
        this._databaseName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseNameInput() {
        return this._databaseName;
    }

    // function_name - computed: false, optional: false, required: true
    private _functionName?: string; 
    public get functionName() {
        return this.getStringAttribute('function_name');
    }
    public set functionName(value: string) {
        this._functionName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get functionNameInput() {
        return this._functionName;
    }

    // function_type - computed: true, optional: true, required: false
    private _functionType?: string; 
    public get functionType() {
        return this.getStringAttribute('function_type');
    }
    public set functionType(value: string) {
        this._functionType = value;
    }
    public resetFunctionType() {
        this._functionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get functionTypeInput() {
        return this._functionType;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // owner_name - computed: true, optional: true, required: false
    private _ownerName?: string; 
    public get ownerName() {
        return this.getStringAttribute('owner_name');
    }
    public set ownerName(value: string) {
        this._ownerName = value;
    }
    public resetOwnerName() {
        this._ownerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerNameInput() {
        return this._ownerName;
    }

    // owner_type - computed: true, optional: true, required: false
    private _ownerType?: string; 
    public get ownerType() {
        return this.getStringAttribute('owner_type');
    }
    public set ownerType(value: string) {
        this._ownerType = value;
    }
    public resetOwnerType() {
        this._ownerType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerTypeInput() {
        return this._ownerType;
    }

    // resource_uris - computed: true, optional: true, required: false
    private _resourceUris = new CcUserDefinedFunction.ResourceUriPropertyList(this, "resource_uris", false);
    public get resourceUris() {
        return this._resourceUris;
    }
    public putResourceUris(value: CcUserDefinedFunction.ResourceUriProperty[] | cdktn.IResolvable) {
        this._resourceUris.internalValue = value;
    }
    public resetResourceUris() {
        this._resourceUris.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceUrisInput() {
        return this._resourceUris.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            class_name: cdktn.stringToTerraform(this._className),
            database_name: cdktn.stringToTerraform(this._databaseName),
            function_name: cdktn.stringToTerraform(this._functionName),
            function_type: cdktn.stringToTerraform(this._functionType),
            owner_name: cdktn.stringToTerraform(this._ownerName),
            owner_type: cdktn.stringToTerraform(this._ownerType),
            resource_uris: cdktn.listMapper(ccUserDefinedFunctionResourceUriPropertyToTerraform, false)(this._resourceUris.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            class_name: {
                value: cdktn.stringToHclTerraform(this._className),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            database_name: {
                value: cdktn.stringToHclTerraform(this._databaseName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            function_name: {
                value: cdktn.stringToHclTerraform(this._functionName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            function_type: {
                value: cdktn.stringToHclTerraform(this._functionType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            owner_name: {
                value: cdktn.stringToHclTerraform(this._ownerName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            owner_type: {
                value: cdktn.stringToHclTerraform(this._ownerType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resource_uris: {
                value: cdktn.listMapperHcl(ccUserDefinedFunctionResourceUriPropertyToHclTerraform, false)(this._resourceUris.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcUserDefinedFunction.ResourceUriPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccUserDefinedFunctionResourceUriPropertyToTerraform(struct?: CcUserDefinedFunction.ResourceUriProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resource_type: cdktn.stringToTerraform(struct!.resourceType),
        uri: cdktn.stringToTerraform(struct!.uri),
    }
}


export function ccUserDefinedFunctionResourceUriPropertyToHclTerraform(struct?: CcUserDefinedFunction.ResourceUriProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        resource_type: {
            value: cdktn.stringToHclTerraform(struct!.resourceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        uri: {
            value: cdktn.stringToHclTerraform(struct!.uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcUserDefinedFunction {
export interface ResourceUriProperty {
    /**
    * The type of the resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_user_defined_function#resource_type CcUserDefinedFunction#resource_type}
    */
    readonly resourceType?: string;
    /**
    * The URI for accessing the resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_user_defined_function#uri CcUserDefinedFunction#uri}
    */
    readonly uri?: string;
}
export class ResourceUriPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceUriProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._resourceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceType = this._resourceType;
        }
        if (this._uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.uri = this._uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceUriProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._resourceType = undefined;
            this._uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._resourceType = value.resourceType;
            this._uri = value.uri;
        }
    }

    // resource_type - computed: true, optional: true, required: false
    private _resourceType?: string; 
    public get resourceType() {
        return this.getStringAttribute('resource_type');
    }
    public set resourceType(value: string) {
        this._resourceType = value;
    }
    public resetResourceType() {
        this._resourceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypeInput() {
        return this._resourceType;
    }

    // uri - computed: true, optional: true, required: false
    private _uri?: string; 
    public get uri() {
        return this.getStringAttribute('uri');
    }
    public set uri(value: string) {
        this._uri = value;
    }
    public resetUri() {
        this._uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get uriInput() {
        return this._uri;
    }
}

export class ResourceUriPropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceUriProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceUriPropertyOutputReference {
        return new ResourceUriPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
