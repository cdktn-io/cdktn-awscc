// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPolicyProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy#definition CcPolicy#definition}
    */
    readonly definition: CcPolicy.PolicyDefinitionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy#name CcPolicy#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy#policy_store_id CcPolicy#policy_store_id}
    */
    readonly policyStoreId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy awscc_verifiedpermissions_policy}
*/
export class CcPolicy extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_verifiedpermissions_policy";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPolicy resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPolicy to import
    * @param importFromId The id of the existing CcPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPolicy to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_verifiedpermissions_policy", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy awscc_verifiedpermissions_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPolicyProps
    */
    public constructor(scope: Construct, id: string, config: CcPolicyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_verifiedpermissions_policy',
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
        this._definition.internalValue = config.definition;
        this._name = config.name;
        this._policyStoreId = config.policyStoreId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // definition - computed: false, optional: false, required: true
    private _definition = new CcPolicy.PolicyDefinitionPropertyOutputReference(this, "definition");
    public get definition() {
        return this._definition;
    }
    public putDefinition(value: CcPolicy.PolicyDefinitionProperty) {
        this._definition.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get definitionInput() {
        return this._definition.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // policy_id - computed: true, optional: false, required: false
    public get policyId() {
        return this.getStringAttribute('policy_id');
    }

    // policy_store_id - computed: false, optional: false, required: true
    private _policyStoreId?: string; 
    public get policyStoreId() {
        return this.getStringAttribute('policy_store_id');
    }
    public set policyStoreId(value: string) {
        this._policyStoreId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyStoreIdInput() {
        return this._policyStoreId;
    }

    // policy_type - computed: true, optional: false, required: false
    public get policyType() {
        return this.getStringAttribute('policy_type');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            definition: ccPolicyPolicyDefinitionPropertyToTerraform(this._definition.internalValue),
            name: cdktn.stringToTerraform(this._name),
            policy_store_id: cdktn.stringToTerraform(this._policyStoreId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            definition: {
                value: ccPolicyPolicyDefinitionPropertyToHclTerraform(this._definition.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPolicy.PolicyDefinitionProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            policy_store_id: {
                value: cdktn.stringToHclTerraform(this._policyStoreId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccPolicyStaticPolicyDefinitionPropertyToTerraform(struct?: CcPolicy.StaticPolicyDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        description: cdktn.stringToTerraform(struct!.description),
        statement: cdktn.stringToTerraform(struct!.statement),
    }
}


export function ccPolicyStaticPolicyDefinitionPropertyToHclTerraform(struct?: CcPolicy.StaticPolicyDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        statement: {
            value: cdktn.stringToHclTerraform(struct!.statement),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyEntityIdentifierPropertyToTerraform(struct?: CcPolicy.EntityIdentifierProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        entity_id: cdktn.stringToTerraform(struct!.entityId),
        entity_type: cdktn.stringToTerraform(struct!.entityType),
    }
}


export function ccPolicyEntityIdentifierPropertyToHclTerraform(struct?: CcPolicy.EntityIdentifierProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        entity_id: {
            value: cdktn.stringToHclTerraform(struct!.entityId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        entity_type: {
            value: cdktn.stringToHclTerraform(struct!.entityType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyResourcePropertyToTerraform(struct?: CcPolicy.ResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        entity_id: cdktn.stringToTerraform(struct!.entityId),
        entity_type: cdktn.stringToTerraform(struct!.entityType),
    }
}


export function ccPolicyResourcePropertyToHclTerraform(struct?: CcPolicy.ResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        entity_id: {
            value: cdktn.stringToHclTerraform(struct!.entityId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        entity_type: {
            value: cdktn.stringToHclTerraform(struct!.entityType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyTemplateLinkedPolicyDefinitionPropertyToTerraform(struct?: CcPolicy.TemplateLinkedPolicyDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        policy_template_id: cdktn.stringToTerraform(struct!.policyTemplateId),
        principal: ccPolicyEntityIdentifierPropertyToTerraform(struct!.principal),
        resource: ccPolicyResourcePropertyToTerraform(struct!.resource),
    }
}


export function ccPolicyTemplateLinkedPolicyDefinitionPropertyToHclTerraform(struct?: CcPolicy.TemplateLinkedPolicyDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        policy_template_id: {
            value: cdktn.stringToHclTerraform(struct!.policyTemplateId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        principal: {
            value: ccPolicyEntityIdentifierPropertyToHclTerraform(struct!.principal),
            isBlock: true,
            type: "struct",
            storageClassType: "EntityIdentifierProperty",
        },
        resource: {
            value: ccPolicyResourcePropertyToHclTerraform(struct!.resource),
            isBlock: true,
            type: "struct",
            storageClassType: "ResourceProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPolicyPolicyDefinitionPropertyToTerraform(struct?: CcPolicy.PolicyDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        static: ccPolicyStaticPolicyDefinitionPropertyToTerraform(struct!.static),
        template_linked: ccPolicyTemplateLinkedPolicyDefinitionPropertyToTerraform(struct!.templateLinked),
    }
}


export function ccPolicyPolicyDefinitionPropertyToHclTerraform(struct?: CcPolicy.PolicyDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        static: {
            value: ccPolicyStaticPolicyDefinitionPropertyToHclTerraform(struct!.static),
            isBlock: true,
            type: "struct",
            storageClassType: "StaticPolicyDefinitionProperty",
        },
        template_linked: {
            value: ccPolicyTemplateLinkedPolicyDefinitionPropertyToHclTerraform(struct!.templateLinked),
            isBlock: true,
            type: "struct",
            storageClassType: "TemplateLinkedPolicyDefinitionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcPolicy {
export interface StaticPolicyDefinitionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy#description CcPolicy#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy#statement CcPolicy#statement}
    */
    readonly statement?: string;
}
export class StaticPolicyDefinitionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StaticPolicyDefinitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._statement !== undefined) {
            hasAnyValues = true;
            internalValueResult.statement = this._statement;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StaticPolicyDefinitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._description = undefined;
            this._statement = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._description = value.description;
            this._statement = value.statement;
        }
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

    // statement - computed: true, optional: true, required: false
    private _statement?: string; 
    public get statement() {
        return this.getStringAttribute('statement');
    }
    public set statement(value: string) {
        this._statement = value;
    }
    public resetStatement() {
        this._statement = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statementInput() {
        return this._statement;
    }
}
export interface EntityIdentifierProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy#entity_id CcPolicy#entity_id}
    */
    readonly entityId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy#entity_type CcPolicy#entity_type}
    */
    readonly entityType?: string;
}
export class EntityIdentifierPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EntityIdentifierProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._entityId !== undefined) {
            hasAnyValues = true;
            internalValueResult.entityId = this._entityId;
        }
        if (this._entityType !== undefined) {
            hasAnyValues = true;
            internalValueResult.entityType = this._entityType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EntityIdentifierProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._entityId = undefined;
            this._entityType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._entityId = value.entityId;
            this._entityType = value.entityType;
        }
    }

    // entity_id - computed: true, optional: true, required: false
    private _entityId?: string; 
    public get entityId() {
        return this.getStringAttribute('entity_id');
    }
    public set entityId(value: string) {
        this._entityId = value;
    }
    public resetEntityId() {
        this._entityId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get entityIdInput() {
        return this._entityId;
    }

    // entity_type - computed: true, optional: true, required: false
    private _entityType?: string; 
    public get entityType() {
        return this.getStringAttribute('entity_type');
    }
    public set entityType(value: string) {
        this._entityType = value;
    }
    public resetEntityType() {
        this._entityType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get entityTypeInput() {
        return this._entityType;
    }
}
export interface ResourceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy#entity_id CcPolicy#entity_id}
    */
    readonly entityId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy#entity_type CcPolicy#entity_type}
    */
    readonly entityType?: string;
}
export class ResourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ResourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._entityId !== undefined) {
            hasAnyValues = true;
            internalValueResult.entityId = this._entityId;
        }
        if (this._entityType !== undefined) {
            hasAnyValues = true;
            internalValueResult.entityType = this._entityType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._entityId = undefined;
            this._entityType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._entityId = value.entityId;
            this._entityType = value.entityType;
        }
    }

    // entity_id - computed: true, optional: true, required: false
    private _entityId?: string; 
    public get entityId() {
        return this.getStringAttribute('entity_id');
    }
    public set entityId(value: string) {
        this._entityId = value;
    }
    public resetEntityId() {
        this._entityId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get entityIdInput() {
        return this._entityId;
    }

    // entity_type - computed: true, optional: true, required: false
    private _entityType?: string; 
    public get entityType() {
        return this.getStringAttribute('entity_type');
    }
    public set entityType(value: string) {
        this._entityType = value;
    }
    public resetEntityType() {
        this._entityType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get entityTypeInput() {
        return this._entityType;
    }
}
export interface TemplateLinkedPolicyDefinitionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy#policy_template_id CcPolicy#policy_template_id}
    */
    readonly policyTemplateId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy#principal CcPolicy#principal}
    */
    readonly principal?: EntityIdentifierProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy#resource CcPolicy#resource}
    */
    readonly resource?: ResourceProperty;
}
export class TemplateLinkedPolicyDefinitionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TemplateLinkedPolicyDefinitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._policyTemplateId !== undefined) {
            hasAnyValues = true;
            internalValueResult.policyTemplateId = this._policyTemplateId;
        }
        if (this._principal?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.principal = this._principal?.internalValue;
        }
        if (this._resource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resource = this._resource?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TemplateLinkedPolicyDefinitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._policyTemplateId = undefined;
            this._principal.internalValue = undefined;
            this._resource.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._policyTemplateId = value.policyTemplateId;
            this._principal.internalValue = value.principal;
            this._resource.internalValue = value.resource;
        }
    }

    // policy_template_id - computed: true, optional: true, required: false
    private _policyTemplateId?: string; 
    public get policyTemplateId() {
        return this.getStringAttribute('policy_template_id');
    }
    public set policyTemplateId(value: string) {
        this._policyTemplateId = value;
    }
    public resetPolicyTemplateId() {
        this._policyTemplateId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyTemplateIdInput() {
        return this._policyTemplateId;
    }

    // principal - computed: true, optional: true, required: false
    private _principal = new EntityIdentifierPropertyOutputReference(this, "principal");
    public get principal() {
        return this._principal;
    }
    public putPrincipal(value: EntityIdentifierProperty) {
        this._principal.internalValue = value;
    }
    public resetPrincipal() {
        this._principal.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get principalInput() {
        return this._principal.internalValue;
    }

    // resource - computed: true, optional: true, required: false
    private _resource = new ResourcePropertyOutputReference(this, "resource");
    public get resource() {
        return this._resource;
    }
    public putResource(value: ResourceProperty) {
        this._resource.internalValue = value;
    }
    public resetResource() {
        this._resource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceInput() {
        return this._resource.internalValue;
    }
}
export interface PolicyDefinitionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy#static CcPolicy#static}
    */
    readonly static?: StaticPolicyDefinitionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy#template_linked CcPolicy#template_linked}
    */
    readonly templateLinked?: TemplateLinkedPolicyDefinitionProperty;
}
export class PolicyDefinitionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PolicyDefinitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._static?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.static = this._static?.internalValue;
        }
        if (this._templateLinked?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.templateLinked = this._templateLinked?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PolicyDefinitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._static.internalValue = undefined;
            this._templateLinked.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._static.internalValue = value.static;
            this._templateLinked.internalValue = value.templateLinked;
        }
    }

    // static - computed: true, optional: true, required: false
    private _static = new StaticPolicyDefinitionPropertyOutputReference(this, "static");
    public get static() {
        return this._static;
    }
    public putStatic(value: StaticPolicyDefinitionProperty) {
        this._static.internalValue = value;
    }
    public resetStatic() {
        this._static.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get staticInput() {
        return this._static.internalValue;
    }

    // template_linked - computed: true, optional: true, required: false
    private _templateLinked = new TemplateLinkedPolicyDefinitionPropertyOutputReference(this, "template_linked");
    public get templateLinked() {
        return this._templateLinked;
    }
    public putTemplateLinked(value: TemplateLinkedPolicyDefinitionProperty) {
        this._templateLinked.internalValue = value;
    }
    public resetTemplateLinked() {
        this._templateLinked.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateLinkedInput() {
        return this._templateLinked.internalValue;
    }
}
}
