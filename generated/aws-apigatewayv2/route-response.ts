// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_route_response

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRouteResponseProps extends cdktn.TerraformMetaArguments {
    /**
    * The API identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_route_response#api_id CcRouteResponse#api_id}
    */
    readonly apiId: string;
    /**
    * The model selection expression for the route response. Supported only for WebSocket APIs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_route_response#model_selection_expression CcRouteResponse#model_selection_expression}
    */
    readonly modelSelectionExpression?: string;
    /**
    * The response models for the route response.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_route_response#response_models CcRouteResponse#response_models}
    */
    readonly responseModels?: string;
    /**
    * The route response parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_route_response#response_parameters CcRouteResponse#response_parameters}
    */
    readonly responseParameters?: { [key: string]: CcRouteResponse.ParameterConstraintsProperty } | cdktn.IResolvable;
    /**
    * The route ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_route_response#route_id CcRouteResponse#route_id}
    */
    readonly routeId: string;
    /**
    * The route response key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_route_response#route_response_key CcRouteResponse#route_response_key}
    */
    readonly routeResponseKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_route_response awscc_apigatewayv2_route_response}
*/
export class CcRouteResponse extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_apigatewayv2_route_response";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRouteResponse resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRouteResponse to import
    * @param importFromId The id of the existing CcRouteResponse that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_route_response#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRouteResponse to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apigatewayv2_route_response", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_route_response awscc_apigatewayv2_route_response} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRouteResponseProps
    */
    public constructor(scope: Construct, id: string, config: CcRouteResponseProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_apigatewayv2_route_response',
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
        this._apiId = config.apiId;
        this._modelSelectionExpression = config.modelSelectionExpression;
        this._responseModels = config.responseModels;
        this._responseParameters.internalValue = config.responseParameters;
        this._routeId = config.routeId;
        this._routeResponseKey = config.routeResponseKey;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // api_id - computed: false, optional: false, required: true
    private _apiId?: string; 
    public get apiId() {
        return this.getStringAttribute('api_id');
    }
    public set apiId(value: string) {
        this._apiId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get apiIdInput() {
        return this._apiId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // model_selection_expression - computed: true, optional: true, required: false
    private _modelSelectionExpression?: string; 
    public get modelSelectionExpression() {
        return this.getStringAttribute('model_selection_expression');
    }
    public set modelSelectionExpression(value: string) {
        this._modelSelectionExpression = value;
    }
    public resetModelSelectionExpression() {
        this._modelSelectionExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelSelectionExpressionInput() {
        return this._modelSelectionExpression;
    }

    // response_models - computed: true, optional: true, required: false
    private _responseModels?: string; 
    public get responseModels() {
        return this.getStringAttribute('response_models');
    }
    public set responseModels(value: string) {
        this._responseModels = value;
    }
    public resetResponseModels() {
        this._responseModels = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responseModelsInput() {
        return this._responseModels;
    }

    // response_parameters - computed: true, optional: true, required: false
    private _responseParameters = new CcRouteResponse.ParameterConstraintsPropertyMap(this, "response_parameters");
    public get responseParameters() {
        return this._responseParameters;
    }
    public putResponseParameters(value: { [key: string]: CcRouteResponse.ParameterConstraintsProperty } | cdktn.IResolvable) {
        this._responseParameters.internalValue = value;
    }
    public resetResponseParameters() {
        this._responseParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responseParametersInput() {
        return this._responseParameters.internalValue;
    }

    // route_id - computed: false, optional: false, required: true
    private _routeId?: string; 
    public get routeId() {
        return this.getStringAttribute('route_id');
    }
    public set routeId(value: string) {
        this._routeId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get routeIdInput() {
        return this._routeId;
    }

    // route_response_id - computed: true, optional: false, required: false
    public get routeResponseId() {
        return this.getStringAttribute('route_response_id');
    }

    // route_response_key - computed: false, optional: false, required: true
    private _routeResponseKey?: string; 
    public get routeResponseKey() {
        return this.getStringAttribute('route_response_key');
    }
    public set routeResponseKey(value: string) {
        this._routeResponseKey = value;
    }
    // Temporarily expose input value. Use with caution.
    public get routeResponseKeyInput() {
        return this._routeResponseKey;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            api_id: cdktn.stringToTerraform(this._apiId),
            model_selection_expression: cdktn.stringToTerraform(this._modelSelectionExpression),
            response_models: cdktn.stringToTerraform(this._responseModels),
            response_parameters: cdktn.hashMapper(ccRouteResponseParameterConstraintsPropertyToTerraform)(this._responseParameters.internalValue),
            route_id: cdktn.stringToTerraform(this._routeId),
            route_response_key: cdktn.stringToTerraform(this._routeResponseKey),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            api_id: {
                value: cdktn.stringToHclTerraform(this._apiId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            model_selection_expression: {
                value: cdktn.stringToHclTerraform(this._modelSelectionExpression),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            response_models: {
                value: cdktn.stringToHclTerraform(this._responseModels),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            response_parameters: {
                value: cdktn.hashMapperHcl(ccRouteResponseParameterConstraintsPropertyToHclTerraform)(this._responseParameters.internalValue),
                isBlock: true,
                type: "map",
                storageClassType: "CcRouteResponse.ParameterConstraintsPropertyMap",
            },
            route_id: {
                value: cdktn.stringToHclTerraform(this._routeId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            route_response_key: {
                value: cdktn.stringToHclTerraform(this._routeResponseKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccRouteResponseParameterConstraintsPropertyToTerraform(struct?: CcRouteResponse.ParameterConstraintsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        required: cdktn.booleanToTerraform(struct!.required),
    }
}


export function ccRouteResponseParameterConstraintsPropertyToHclTerraform(struct?: CcRouteResponse.ParameterConstraintsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        required: {
            value: cdktn.booleanToHclTerraform(struct!.required),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcRouteResponse {
export interface ParameterConstraintsProperty {
    /**
    * Specifies whether the parameter is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigatewayv2_route_response#required CcRouteResponse#required}
    */
    readonly required?: boolean | cdktn.IResolvable;
}
export class ParameterConstraintsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }

    public get internalValue(): ParameterConstraintsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._required !== undefined) {
            hasAnyValues = true;
            internalValueResult.required = this._required;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ParameterConstraintsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._required = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._required = value.required;
        }
    }

    // required - computed: true, optional: true, required: false
    private _required?: boolean | cdktn.IResolvable; 
    public get required() {
        return this.getBooleanAttribute('required');
    }
    public set required(value: boolean | cdktn.IResolvable) {
        this._required = value;
    }
    public resetRequired() {
        this._required = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requiredInput() {
        return this._required;
    }
}

export class ParameterConstraintsPropertyMap extends cdktn.ComplexMap {
    public internalValue? : { [key: string]: ParameterConstraintsProperty } | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute);
    }

    /**
    * @param key the key of the item to return
    */
    public get(key: string): ParameterConstraintsPropertyOutputReference {
        return new ParameterConstraintsPropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
}
