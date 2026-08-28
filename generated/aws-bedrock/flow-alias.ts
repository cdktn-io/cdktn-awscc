// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_flow_alias

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcFlowAliasProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_flow_alias#concurrency_configuration CcFlowAlias#concurrency_configuration}
    */
    readonly concurrencyConfiguration?: CcFlowAlias.FlowAliasConcurrencyConfigurationProperty;
    /**
    * Description of the Resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_flow_alias#description CcFlowAlias#description}
    */
    readonly description?: string;
    /**
    * Arn representation of the Flow
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_flow_alias#flow_arn CcFlowAlias#flow_arn}
    */
    readonly flowArn: string;
    /**
    * Name for a resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_flow_alias#name CcFlowAlias#name}
    */
    readonly name: string;
    /**
    * Routing configuration for a Flow alias.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_flow_alias#routing_configuration CcFlowAlias#routing_configuration}
    */
    readonly routingConfiguration: CcFlowAlias.FlowAliasRoutingConfigurationListItemProperty[] | cdktn.IResolvable;
    /**
    * A map of tag keys and values
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_flow_alias#tags CcFlowAlias#tags}
    */
    readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_flow_alias awscc_bedrock_flow_alias}
*/
export class CcFlowAlias extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_bedrock_flow_alias";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcFlowAlias resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcFlowAlias to import
    * @param importFromId The id of the existing CcFlowAlias that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_flow_alias#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcFlowAlias to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrock_flow_alias", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_flow_alias awscc_bedrock_flow_alias} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcFlowAliasProps
    */
    public constructor(scope: Construct, id: string, config: CcFlowAliasProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_bedrock_flow_alias',
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
        this._concurrencyConfiguration.internalValue = config.concurrencyConfiguration;
        this._description = config.description;
        this._flowArn = config.flowArn;
        this._name = config.name;
        this._routingConfiguration.internalValue = config.routingConfiguration;
        this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // concurrency_configuration - computed: true, optional: true, required: false
    private _concurrencyConfiguration = new CcFlowAlias.FlowAliasConcurrencyConfigurationPropertyOutputReference(this, "concurrency_configuration");
    public get concurrencyConfiguration() {
        return this._concurrencyConfiguration;
    }
    public putConcurrencyConfiguration(value: CcFlowAlias.FlowAliasConcurrencyConfigurationProperty) {
        this._concurrencyConfiguration.internalValue = value;
    }
    public resetConcurrencyConfiguration() {
        this._concurrencyConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get concurrencyConfigurationInput() {
        return this._concurrencyConfiguration.internalValue;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
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

    // flow_alias_id - computed: true, optional: false, required: false
    public get flowAliasId() {
        return this.getStringAttribute('flow_alias_id');
    }

    // flow_arn - computed: false, optional: false, required: true
    private _flowArn?: string; 
    public get flowArn() {
        return this.getStringAttribute('flow_arn');
    }
    public set flowArn(value: string) {
        this._flowArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get flowArnInput() {
        return this._flowArn;
    }

    // flow_id - computed: true, optional: false, required: false
    public get flowId() {
        return this.getStringAttribute('flow_id');
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

    // routing_configuration - computed: false, optional: false, required: true
    private _routingConfiguration = new CcFlowAlias.FlowAliasRoutingConfigurationListItemPropertyList(this, "routing_configuration", false);
    public get routingConfiguration() {
        return this._routingConfiguration;
    }
    public putRoutingConfiguration(value: CcFlowAlias.FlowAliasRoutingConfigurationListItemProperty[] | cdktn.IResolvable) {
        this._routingConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get routingConfigurationInput() {
        return this._routingConfiguration.internalValue;
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

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            concurrency_configuration: ccFlowAliasFlowAliasConcurrencyConfigurationPropertyToTerraform(this._concurrencyConfiguration.internalValue),
            description: cdktn.stringToTerraform(this._description),
            flow_arn: cdktn.stringToTerraform(this._flowArn),
            name: cdktn.stringToTerraform(this._name),
            routing_configuration: cdktn.listMapper(ccFlowAliasFlowAliasRoutingConfigurationListItemPropertyToTerraform, false)(this._routingConfiguration.internalValue),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            concurrency_configuration: {
                value: ccFlowAliasFlowAliasConcurrencyConfigurationPropertyToHclTerraform(this._concurrencyConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFlowAlias.FlowAliasConcurrencyConfigurationProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            flow_arn: {
                value: cdktn.stringToHclTerraform(this._flowArn),
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
            routing_configuration: {
                value: cdktn.listMapperHcl(ccFlowAliasFlowAliasRoutingConfigurationListItemPropertyToHclTerraform, false)(this._routingConfiguration.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcFlowAlias.FlowAliasRoutingConfigurationListItemPropertyList",
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

export function ccFlowAliasFlowAliasConcurrencyConfigurationPropertyToTerraform(struct?: CcFlowAlias.FlowAliasConcurrencyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_concurrency: cdktn.numberToTerraform(struct!.maxConcurrency),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccFlowAliasFlowAliasConcurrencyConfigurationPropertyToHclTerraform(struct?: CcFlowAlias.FlowAliasConcurrencyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_concurrency: {
            value: cdktn.numberToHclTerraform(struct!.maxConcurrency),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
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


export function ccFlowAliasFlowAliasRoutingConfigurationListItemPropertyToTerraform(struct?: CcFlowAlias.FlowAliasRoutingConfigurationListItemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        flow_version: cdktn.stringToTerraform(struct!.flowVersion),
    }
}


export function ccFlowAliasFlowAliasRoutingConfigurationListItemPropertyToHclTerraform(struct?: CcFlowAlias.FlowAliasRoutingConfigurationListItemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        flow_version: {
            value: cdktn.stringToHclTerraform(struct!.flowVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcFlowAlias {
export interface FlowAliasConcurrencyConfigurationProperty {
    /**
    * Number of nodes executed concurrently at a time
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_flow_alias#max_concurrency CcFlowAlias#max_concurrency}
    */
    readonly maxConcurrency?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_flow_alias#type CcFlowAlias#type}
    */
    readonly type?: string;
}
export class FlowAliasConcurrencyConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FlowAliasConcurrencyConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxConcurrency !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxConcurrency = this._maxConcurrency;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FlowAliasConcurrencyConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxConcurrency = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxConcurrency = value.maxConcurrency;
            this._type = value.type;
        }
    }

    // max_concurrency - computed: true, optional: true, required: false
    private _maxConcurrency?: number; 
    public get maxConcurrency() {
        return this.getNumberAttribute('max_concurrency');
    }
    public set maxConcurrency(value: number) {
        this._maxConcurrency = value;
    }
    public resetMaxConcurrency() {
        this._maxConcurrency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxConcurrencyInput() {
        return this._maxConcurrency;
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
export interface FlowAliasRoutingConfigurationListItemProperty {
    /**
    * Version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrock_flow_alias#flow_version CcFlowAlias#flow_version}
    */
    readonly flowVersion?: string;
}
export class FlowAliasRoutingConfigurationListItemPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FlowAliasRoutingConfigurationListItemProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._flowVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.flowVersion = this._flowVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FlowAliasRoutingConfigurationListItemProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._flowVersion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._flowVersion = value.flowVersion;
        }
    }

    // flow_version - computed: true, optional: true, required: false
    private _flowVersion?: string; 
    public get flowVersion() {
        return this.getStringAttribute('flow_version');
    }
    public set flowVersion(value: string) {
        this._flowVersion = value;
    }
    public resetFlowVersion() {
        this._flowVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get flowVersionInput() {
        return this._flowVersion;
    }
}

export class FlowAliasRoutingConfigurationListItemPropertyList extends cdktn.ComplexList {
    public internalValue? : FlowAliasRoutingConfigurationListItemProperty[] | cdktn.IResolvable

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
    public get(index: number): FlowAliasRoutingConfigurationListItemPropertyOutputReference {
        return new FlowAliasRoutingConfigurationListItemPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
