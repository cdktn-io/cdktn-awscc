// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_alias

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAliasProps extends cdktn.TerraformMetaArguments {
    /**
    * A description of the alias.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_alias#description CcAlias#description}
    */
    readonly description?: string;
    /**
    * The name of the Lambda function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_alias#function_name CcAlias#function_name}
    */
    readonly functionName: string;
    /**
    * The function version that the alias invokes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_alias#function_version CcAlias#function_version}
    */
    readonly functionVersion: string;
    /**
    * The name of the alias.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_alias#name CcAlias#name}
    */
    readonly name: string;
    /**
    * Specifies a provisioned concurrency configuration for a function's alias.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_alias#provisioned_concurrency_config CcAlias#provisioned_concurrency_config}
    */
    readonly provisionedConcurrencyConfig?: CcAlias.ProvisionedConcurrencyConfigurationProperty;
    /**
    * The routing configuration of the alias.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_alias#routing_config CcAlias#routing_config}
    */
    readonly routingConfig?: CcAlias.AliasRoutingConfigurationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_alias awscc_lambda_alias}
*/
export class CcAlias extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_lambda_alias";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAlias resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAlias to import
    * @param importFromId The id of the existing CcAlias that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_alias#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAlias to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lambda_alias", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_alias awscc_lambda_alias} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAliasProps
    */
    public constructor(scope: Construct, id: string, config: CcAliasProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_lambda_alias',
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
        this._description = config.description;
        this._functionName = config.functionName;
        this._functionVersion = config.functionVersion;
        this._name = config.name;
        this._provisionedConcurrencyConfig.internalValue = config.provisionedConcurrencyConfig;
        this._routingConfig.internalValue = config.routingConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // alias_arn - computed: true, optional: false, required: false
    public get aliasArn() {
        return this.getStringAttribute('alias_arn');
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

    // function_version - computed: false, optional: false, required: true
    private _functionVersion?: string; 
    public get functionVersion() {
        return this.getStringAttribute('function_version');
    }
    public set functionVersion(value: string) {
        this._functionVersion = value;
    }
    // Temporarily expose input value. Use with caution.
    public get functionVersionInput() {
        return this._functionVersion;
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

    // provisioned_concurrency_config - computed: true, optional: true, required: false
    private _provisionedConcurrencyConfig = new CcAlias.ProvisionedConcurrencyConfigurationPropertyOutputReference(this, "provisioned_concurrency_config");
    public get provisionedConcurrencyConfig() {
        return this._provisionedConcurrencyConfig;
    }
    public putProvisionedConcurrencyConfig(value: CcAlias.ProvisionedConcurrencyConfigurationProperty) {
        this._provisionedConcurrencyConfig.internalValue = value;
    }
    public resetProvisionedConcurrencyConfig() {
        this._provisionedConcurrencyConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get provisionedConcurrencyConfigInput() {
        return this._provisionedConcurrencyConfig.internalValue;
    }

    // routing_config - computed: true, optional: true, required: false
    private _routingConfig = new CcAlias.AliasRoutingConfigurationPropertyOutputReference(this, "routing_config");
    public get routingConfig() {
        return this._routingConfig;
    }
    public putRoutingConfig(value: CcAlias.AliasRoutingConfigurationProperty) {
        this._routingConfig.internalValue = value;
    }
    public resetRoutingConfig() {
        this._routingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routingConfigInput() {
        return this._routingConfig.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            function_name: cdktn.stringToTerraform(this._functionName),
            function_version: cdktn.stringToTerraform(this._functionVersion),
            name: cdktn.stringToTerraform(this._name),
            provisioned_concurrency_config: ccAliasProvisionedConcurrencyConfigurationPropertyToTerraform(this._provisionedConcurrencyConfig.internalValue),
            routing_config: ccAliasAliasRoutingConfigurationPropertyToTerraform(this._routingConfig.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            description: {
                value: cdktn.stringToHclTerraform(this._description),
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
            function_version: {
                value: cdktn.stringToHclTerraform(this._functionVersion),
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
            provisioned_concurrency_config: {
                value: ccAliasProvisionedConcurrencyConfigurationPropertyToHclTerraform(this._provisionedConcurrencyConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAlias.ProvisionedConcurrencyConfigurationProperty",
            },
            routing_config: {
                value: ccAliasAliasRoutingConfigurationPropertyToHclTerraform(this._routingConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAlias.AliasRoutingConfigurationProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAliasProvisionedConcurrencyConfigurationPropertyToTerraform(struct?: CcAlias.ProvisionedConcurrencyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        provisioned_concurrent_executions: cdktn.numberToTerraform(struct!.provisionedConcurrentExecutions),
    }
}


export function ccAliasProvisionedConcurrencyConfigurationPropertyToHclTerraform(struct?: CcAlias.ProvisionedConcurrencyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        provisioned_concurrent_executions: {
            value: cdktn.numberToHclTerraform(struct!.provisionedConcurrentExecutions),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAliasVersionWeightPropertyToTerraform(struct?: CcAlias.VersionWeightProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        function_version: cdktn.stringToTerraform(struct!.functionVersion),
        function_weight: cdktn.numberToTerraform(struct!.functionWeight),
    }
}


export function ccAliasVersionWeightPropertyToHclTerraform(struct?: CcAlias.VersionWeightProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        function_version: {
            value: cdktn.stringToHclTerraform(struct!.functionVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        function_weight: {
            value: cdktn.numberToHclTerraform(struct!.functionWeight),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAliasAliasRoutingConfigurationPropertyToTerraform(struct?: CcAlias.AliasRoutingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        additional_version_weights: cdktn.listMapper(ccAliasVersionWeightPropertyToTerraform, false)(struct!.additionalVersionWeights),
    }
}


export function ccAliasAliasRoutingConfigurationPropertyToHclTerraform(struct?: CcAlias.AliasRoutingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        additional_version_weights: {
            value: cdktn.listMapperHcl(ccAliasVersionWeightPropertyToHclTerraform, false)(struct!.additionalVersionWeights),
            isBlock: true,
            type: "set",
            storageClassType: "VersionWeightPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcAlias {
export interface ProvisionedConcurrencyConfigurationProperty {
    /**
    * The amount of provisioned concurrency to allocate for the alias.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_alias#provisioned_concurrent_executions CcAlias#provisioned_concurrent_executions}
    */
    readonly provisionedConcurrentExecutions?: number;
}
export class ProvisionedConcurrencyConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ProvisionedConcurrencyConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._provisionedConcurrentExecutions !== undefined) {
            hasAnyValues = true;
            internalValueResult.provisionedConcurrentExecutions = this._provisionedConcurrentExecutions;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProvisionedConcurrencyConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._provisionedConcurrentExecutions = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._provisionedConcurrentExecutions = value.provisionedConcurrentExecutions;
        }
    }

    // provisioned_concurrent_executions - computed: true, optional: true, required: false
    private _provisionedConcurrentExecutions?: number; 
    public get provisionedConcurrentExecutions() {
        return this.getNumberAttribute('provisioned_concurrent_executions');
    }
    public set provisionedConcurrentExecutions(value: number) {
        this._provisionedConcurrentExecutions = value;
    }
    public resetProvisionedConcurrentExecutions() {
        this._provisionedConcurrentExecutions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get provisionedConcurrentExecutionsInput() {
        return this._provisionedConcurrentExecutions;
    }
}
export interface VersionWeightProperty {
    /**
    * The qualifier of the second version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_alias#function_version CcAlias#function_version}
    */
    readonly functionVersion?: string;
    /**
    * The percentage of traffic that the alias routes to the second version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_alias#function_weight CcAlias#function_weight}
    */
    readonly functionWeight?: number;
}
export class VersionWeightPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): VersionWeightProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._functionVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.functionVersion = this._functionVersion;
        }
        if (this._functionWeight !== undefined) {
            hasAnyValues = true;
            internalValueResult.functionWeight = this._functionWeight;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VersionWeightProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._functionVersion = undefined;
            this._functionWeight = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._functionVersion = value.functionVersion;
            this._functionWeight = value.functionWeight;
        }
    }

    // function_version - computed: true, optional: true, required: false
    private _functionVersion?: string; 
    public get functionVersion() {
        return this.getStringAttribute('function_version');
    }
    public set functionVersion(value: string) {
        this._functionVersion = value;
    }
    public resetFunctionVersion() {
        this._functionVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get functionVersionInput() {
        return this._functionVersion;
    }

    // function_weight - computed: true, optional: true, required: false
    private _functionWeight?: number; 
    public get functionWeight() {
        return this.getNumberAttribute('function_weight');
    }
    public set functionWeight(value: number) {
        this._functionWeight = value;
    }
    public resetFunctionWeight() {
        this._functionWeight = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get functionWeightInput() {
        return this._functionWeight;
    }
}

export class VersionWeightPropertyList extends cdktn.ComplexList {
    public internalValue? : VersionWeightProperty[] | cdktn.IResolvable

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
    public get(index: number): VersionWeightPropertyOutputReference {
        return new VersionWeightPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AliasRoutingConfigurationProperty {
    /**
    * The second version, and the percentage of traffic that's routed to it.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lambda_alias#additional_version_weights CcAlias#additional_version_weights}
    */
    readonly additionalVersionWeights?: VersionWeightProperty[] | cdktn.IResolvable;
}
export class AliasRoutingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AliasRoutingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._additionalVersionWeights?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.additionalVersionWeights = this._additionalVersionWeights?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AliasRoutingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._additionalVersionWeights.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._additionalVersionWeights.internalValue = value.additionalVersionWeights;
        }
    }

    // additional_version_weights - computed: true, optional: true, required: false
    private _additionalVersionWeights = new VersionWeightPropertyList(this, "additional_version_weights", true);
    public get additionalVersionWeights() {
        return this._additionalVersionWeights;
    }
    public putAdditionalVersionWeights(value: VersionWeightProperty[] | cdktn.IResolvable) {
        this._additionalVersionWeights.internalValue = value;
    }
    public resetAdditionalVersionWeights() {
        this._additionalVersionWeights.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalVersionWeightsInput() {
        return this._additionalVersionWeights.internalValue;
    }
}
}
