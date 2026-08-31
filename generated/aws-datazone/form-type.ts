// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_form_type

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcFormTypeProps extends cdktn.TerraformMetaArguments {
    /**
    * The description of this Amazon DataZone metadata form type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_form_type#description CcFormType#description}
    */
    readonly description?: string;
    /**
    * The ID of the Amazon DataZone domain in which this metadata form type is created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_form_type#domain_identifier CcFormType#domain_identifier}
    */
    readonly domainIdentifier: string;
    /**
    * The model of this Amazon DataZone metadata form type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_form_type#model CcFormType#model}
    */
    readonly model: CcFormType.ModelProperty;
    /**
    * The name of this Amazon DataZone metadata form type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_form_type#name CcFormType#name}
    */
    readonly name: string;
    /**
    * The ID of the Amazon DataZone project that owns this metadata form type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_form_type#owning_project_identifier CcFormType#owning_project_identifier}
    */
    readonly owningProjectIdentifier: string;
    /**
    * The status of this Amazon DataZone metadata form type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_form_type#status CcFormType#status}
    */
    readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_form_type awscc_datazone_form_type}
*/
export class CcFormType extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_datazone_form_type";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcFormType resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcFormType to import
    * @param importFromId The id of the existing CcFormType that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_form_type#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcFormType to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datazone_form_type", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_form_type awscc_datazone_form_type} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcFormTypeProps
    */
    public constructor(scope: Construct, id: string, config: CcFormTypeProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_datazone_form_type',
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
        this._model.internalValue = config.model;
        this._name = config.name;
        this._owningProjectIdentifier = config.owningProjectIdentifier;
        this._status = config.status;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // created_by - computed: true, optional: false, required: false
    public get createdBy() {
        return this.getStringAttribute('created_by');
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

    // domain_id - computed: true, optional: false, required: false
    public get domainId() {
        return this.getStringAttribute('domain_id');
    }

    // domain_identifier - computed: false, optional: false, required: true
    private _domainIdentifier?: string; 
    public get domainIdentifier() {
        return this.getStringAttribute('domain_identifier');
    }
    public set domainIdentifier(value: string) {
        this._domainIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainIdentifierInput() {
        return this._domainIdentifier;
    }

    // form_type_identifier - computed: true, optional: false, required: false
    public get formTypeIdentifier() {
        return this.getStringAttribute('form_type_identifier');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // model - computed: false, optional: false, required: true
    private _model = new CcFormType.ModelPropertyOutputReference(this, "model");
    public get model() {
        return this._model;
    }
    public putModel(value: CcFormType.ModelProperty) {
        this._model.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get modelInput() {
        return this._model.internalValue;
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

    // owning_project_id - computed: true, optional: false, required: false
    public get owningProjectId() {
        return this.getStringAttribute('owning_project_id');
    }

    // owning_project_identifier - computed: false, optional: false, required: true
    private _owningProjectIdentifier?: string; 
    public get owningProjectIdentifier() {
        return this.getStringAttribute('owning_project_identifier');
    }
    public set owningProjectIdentifier(value: string) {
        this._owningProjectIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get owningProjectIdentifierInput() {
        return this._owningProjectIdentifier;
    }

    // revision - computed: true, optional: false, required: false
    public get revision() {
        return this.getStringAttribute('revision');
    }

    // status - computed: true, optional: true, required: false
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    public resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            domain_identifier: cdktn.stringToTerraform(this._domainIdentifier),
            model: ccFormTypeModelPropertyToTerraform(this._model.internalValue),
            name: cdktn.stringToTerraform(this._name),
            owning_project_identifier: cdktn.stringToTerraform(this._owningProjectIdentifier),
            status: cdktn.stringToTerraform(this._status),
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
            model: {
                value: ccFormTypeModelPropertyToHclTerraform(this._model.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFormType.ModelProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            owning_project_identifier: {
                value: cdktn.stringToHclTerraform(this._owningProjectIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            status: {
                value: cdktn.stringToHclTerraform(this._status),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccFormTypeModelPropertyToTerraform(struct?: CcFormType.ModelProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        smithy: cdktn.stringToTerraform(struct!.smithy),
    }
}


export function ccFormTypeModelPropertyToHclTerraform(struct?: CcFormType.ModelProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        smithy: {
            value: cdktn.stringToHclTerraform(struct!.smithy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcFormType {
export interface ModelProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_form_type#smithy CcFormType#smithy}
    */
    readonly smithy?: string;
}
export class ModelPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ModelProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._smithy !== undefined) {
            hasAnyValues = true;
            internalValueResult.smithy = this._smithy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ModelProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._smithy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._smithy = value.smithy;
        }
    }

    // smithy - computed: true, optional: true, required: false
    private _smithy?: string; 
    public get smithy() {
        return this.getStringAttribute('smithy');
    }
    public set smithy(value: string) {
        this._smithy = value;
    }
    public resetSmithy() {
        this._smithy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get smithyInput() {
        return this._smithy;
    }
}
}
