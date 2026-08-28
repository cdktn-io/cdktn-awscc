// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_actions

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEnvironmentActionsProps extends cdktn.TerraformMetaArguments {
    /**
    * The description of the Amazon DataZone environment action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_actions#description CcEnvironmentActions#description}
    */
    readonly description?: string;
    /**
    * The identifier of the Amazon DataZone domain in which the environment would be created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_actions#domain_identifier CcEnvironmentActions#domain_identifier}
    */
    readonly domainIdentifier?: string;
    /**
    * The identifier of the Amazon DataZone environment in which the action is taking place
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_actions#environment_identifier CcEnvironmentActions#environment_identifier}
    */
    readonly environmentIdentifier?: string;
    /**
    * The ID of the Amazon DataZone environment action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_actions#identifier CcEnvironmentActions#identifier}
    */
    readonly identifier?: string;
    /**
    * The name of the environment action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_actions#name CcEnvironmentActions#name}
    */
    readonly name: string;
    /**
    * The parameters of the environment action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_actions#parameters CcEnvironmentActions#parameters}
    */
    readonly parameters?: CcEnvironmentActions.AwsConsoleLinkParametersProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_actions awscc_datazone_environment_actions}
*/
export class CcEnvironmentActions extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_datazone_environment_actions";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEnvironmentActions resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEnvironmentActions to import
    * @param importFromId The id of the existing CcEnvironmentActions that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_actions#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEnvironmentActions to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datazone_environment_actions", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_actions awscc_datazone_environment_actions} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEnvironmentActionsProps
    */
    public constructor(scope: Construct, id: string, config: CcEnvironmentActionsProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_datazone_environment_actions',
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
        this._description = config.description;
        this._domainIdentifier = config.domainIdentifier;
        this._environmentIdentifier = config.environmentIdentifier;
        this._identifier = config.identifier;
        this._name = config.name;
        this._parameters.internalValue = config.parameters;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // domain_id - computed: true, optional: false, required: false
    public get domainId() {
        return this.getStringAttribute('domain_id');
    }

    // domain_identifier - computed: true, optional: true, required: false
    private _domainIdentifier?: string; 
    public get domainIdentifier() {
        return this.getStringAttribute('domain_identifier');
    }
    public set domainIdentifier(value: string) {
        this._domainIdentifier = value;
    }
    public resetDomainIdentifier() {
        this._domainIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainIdentifierInput() {
        return this._domainIdentifier;
    }

    // environment_actions_id - computed: true, optional: false, required: false
    public get environmentActionsId() {
        return this.getStringAttribute('environment_actions_id');
    }

    // environment_id - computed: true, optional: false, required: false
    public get environmentId() {
        return this.getStringAttribute('environment_id');
    }

    // environment_identifier - computed: true, optional: true, required: false
    private _environmentIdentifier?: string; 
    public get environmentIdentifier() {
        return this.getStringAttribute('environment_identifier');
    }
    public set environmentIdentifier(value: string) {
        this._environmentIdentifier = value;
    }
    public resetEnvironmentIdentifier() {
        this._environmentIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentIdentifierInput() {
        return this._environmentIdentifier;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // identifier - computed: true, optional: true, required: false
    private _identifier?: string; 
    public get identifier() {
        return this.getStringAttribute('identifier');
    }
    public set identifier(value: string) {
        this._identifier = value;
    }
    public resetIdentifier() {
        this._identifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identifierInput() {
        return this._identifier;
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

    // parameters - computed: true, optional: true, required: false
    private _parameters = new CcEnvironmentActions.AwsConsoleLinkParametersPropertyOutputReference(this, "parameters");
    public get parameters() {
        return this._parameters;
    }
    public putParameters(value: CcEnvironmentActions.AwsConsoleLinkParametersProperty) {
        this._parameters.internalValue = value;
    }
    public resetParameters() {
        this._parameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
        return this._parameters.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            domain_identifier: cdktn.stringToTerraform(this._domainIdentifier),
            environment_identifier: cdktn.stringToTerraform(this._environmentIdentifier),
            identifier: cdktn.stringToTerraform(this._identifier),
            name: cdktn.stringToTerraform(this._name),
            parameters: ccEnvironmentActionsAwsConsoleLinkParametersPropertyToTerraform(this._parameters.internalValue),
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
            domain_identifier: {
                value: cdktn.stringToHclTerraform(this._domainIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            environment_identifier: {
                value: cdktn.stringToHclTerraform(this._environmentIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            identifier: {
                value: cdktn.stringToHclTerraform(this._identifier),
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
            parameters: {
                value: ccEnvironmentActionsAwsConsoleLinkParametersPropertyToHclTerraform(this._parameters.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEnvironmentActions.AwsConsoleLinkParametersProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccEnvironmentActionsAwsConsoleLinkParametersPropertyToTerraform(struct?: CcEnvironmentActions.AwsConsoleLinkParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        uri: cdktn.stringToTerraform(struct!.uri),
    }
}


export function ccEnvironmentActionsAwsConsoleLinkParametersPropertyToHclTerraform(struct?: CcEnvironmentActions.AwsConsoleLinkParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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


export namespace CcEnvironmentActions {
export interface AwsConsoleLinkParametersProperty {
    /**
    * The URI of the console link specified as part of the environment action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_environment_actions#uri CcEnvironmentActions#uri}
    */
    readonly uri?: string;
}
export class AwsConsoleLinkParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AwsConsoleLinkParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.uri = this._uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AwsConsoleLinkParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._uri = value.uri;
        }
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
}
