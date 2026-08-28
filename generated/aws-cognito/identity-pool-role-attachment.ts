// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcIdentityPoolRoleAttachmentProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#identity_pool_id CcIdentityPoolRoleAttachment#identity_pool_id}
    */
    readonly identityPoolId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#role_mappings CcIdentityPoolRoleAttachment#role_mappings}
    */
    readonly roleMappings?: { [key: string]: CcIdentityPoolRoleAttachment.RoleMappingProperty } | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#roles CcIdentityPoolRoleAttachment#roles}
    */
    readonly roles?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment awscc_cognito_identity_pool_role_attachment}
*/
export class CcIdentityPoolRoleAttachment extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cognito_identity_pool_role_attachment";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcIdentityPoolRoleAttachment resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcIdentityPoolRoleAttachment to import
    * @param importFromId The id of the existing CcIdentityPoolRoleAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcIdentityPoolRoleAttachment to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cognito_identity_pool_role_attachment", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment awscc_cognito_identity_pool_role_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcIdentityPoolRoleAttachmentProps
    */
    public constructor(scope: Construct, id: string, config: CcIdentityPoolRoleAttachmentProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cognito_identity_pool_role_attachment',
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
        this._identityPoolId = config.identityPoolId;
        this._roleMappings.internalValue = config.roleMappings;
        this._roles = config.roles;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // identity_pool_id - computed: false, optional: false, required: true
    private _identityPoolId?: string; 
    public get identityPoolId() {
        return this.getStringAttribute('identity_pool_id');
    }
    public set identityPoolId(value: string) {
        this._identityPoolId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get identityPoolIdInput() {
        return this._identityPoolId;
    }

    // identity_pool_role_attachment_id - computed: true, optional: false, required: false
    public get identityPoolRoleAttachmentId() {
        return this.getStringAttribute('identity_pool_role_attachment_id');
    }

    // role_mappings - computed: true, optional: true, required: false
    private _roleMappings = new CcIdentityPoolRoleAttachment.RoleMappingPropertyMap(this, "role_mappings");
    public get roleMappings() {
        return this._roleMappings;
    }
    public putRoleMappings(value: { [key: string]: CcIdentityPoolRoleAttachment.RoleMappingProperty } | cdktn.IResolvable) {
        this._roleMappings.internalValue = value;
    }
    public resetRoleMappings() {
        this._roleMappings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleMappingsInput() {
        return this._roleMappings.internalValue;
    }

    // roles - computed: true, optional: true, required: false
    private _roles?: { [key: string]: string }; 
    public get roles() {
        return this.getStringMapAttribute('roles');
    }
    public set roles(value: { [key: string]: string }) {
        this._roles = value;
    }
    public resetRoles() {
        this._roles = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rolesInput() {
        return this._roles;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            identity_pool_id: cdktn.stringToTerraform(this._identityPoolId),
            role_mappings: cdktn.hashMapper(ccIdentityPoolRoleAttachmentRoleMappingPropertyToTerraform)(this._roleMappings.internalValue),
            roles: cdktn.hashMapper(cdktn.stringToTerraform)(this._roles),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            identity_pool_id: {
                value: cdktn.stringToHclTerraform(this._identityPoolId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            role_mappings: {
                value: cdktn.hashMapperHcl(ccIdentityPoolRoleAttachmentRoleMappingPropertyToHclTerraform)(this._roleMappings.internalValue),
                isBlock: true,
                type: "map",
                storageClassType: "CcIdentityPoolRoleAttachment.RoleMappingPropertyMap",
            },
            roles: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._roles),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccIdentityPoolRoleAttachmentMappingRulePropertyToTerraform(struct?: CcIdentityPoolRoleAttachment.MappingRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        claim: cdktn.stringToTerraform(struct!.claim),
        match_type: cdktn.stringToTerraform(struct!.matchType),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccIdentityPoolRoleAttachmentMappingRulePropertyToHclTerraform(struct?: CcIdentityPoolRoleAttachment.MappingRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        claim: {
            value: cdktn.stringToHclTerraform(struct!.claim),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        match_type: {
            value: cdktn.stringToHclTerraform(struct!.matchType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
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


export function ccIdentityPoolRoleAttachmentRulesConfigurationTypePropertyToTerraform(struct?: CcIdentityPoolRoleAttachment.RulesConfigurationTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        rules: cdktn.listMapper(ccIdentityPoolRoleAttachmentMappingRulePropertyToTerraform, false)(struct!.rules),
    }
}


export function ccIdentityPoolRoleAttachmentRulesConfigurationTypePropertyToHclTerraform(struct?: CcIdentityPoolRoleAttachment.RulesConfigurationTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        rules: {
            value: cdktn.listMapperHcl(ccIdentityPoolRoleAttachmentMappingRulePropertyToHclTerraform, false)(struct!.rules),
            isBlock: true,
            type: "list",
            storageClassType: "MappingRulePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccIdentityPoolRoleAttachmentRoleMappingPropertyToTerraform(struct?: CcIdentityPoolRoleAttachment.RoleMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ambiguous_role_resolution: cdktn.stringToTerraform(struct!.ambiguousRoleResolution),
        identity_provider: cdktn.stringToTerraform(struct!.identityProvider),
        rules_configuration: ccIdentityPoolRoleAttachmentRulesConfigurationTypePropertyToTerraform(struct!.rulesConfiguration),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccIdentityPoolRoleAttachmentRoleMappingPropertyToHclTerraform(struct?: CcIdentityPoolRoleAttachment.RoleMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ambiguous_role_resolution: {
            value: cdktn.stringToHclTerraform(struct!.ambiguousRoleResolution),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identity_provider: {
            value: cdktn.stringToHclTerraform(struct!.identityProvider),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rules_configuration: {
            value: ccIdentityPoolRoleAttachmentRulesConfigurationTypePropertyToHclTerraform(struct!.rulesConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "RulesConfigurationTypeProperty",
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


export namespace CcIdentityPoolRoleAttachment {
export interface MappingRuleProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#claim CcIdentityPoolRoleAttachment#claim}
    */
    readonly claim?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#match_type CcIdentityPoolRoleAttachment#match_type}
    */
    readonly matchType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#role_arn CcIdentityPoolRoleAttachment#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#value CcIdentityPoolRoleAttachment#value}
    */
    readonly value?: string;
}
export class MappingRulePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MappingRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._claim !== undefined) {
            hasAnyValues = true;
            internalValueResult.claim = this._claim;
        }
        if (this._matchType !== undefined) {
            hasAnyValues = true;
            internalValueResult.matchType = this._matchType;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MappingRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._claim = undefined;
            this._matchType = undefined;
            this._roleArn = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._claim = value.claim;
            this._matchType = value.matchType;
            this._roleArn = value.roleArn;
            this._value = value.value;
        }
    }

    // claim - computed: true, optional: true, required: false
    private _claim?: string; 
    public get claim() {
        return this.getStringAttribute('claim');
    }
    public set claim(value: string) {
        this._claim = value;
    }
    public resetClaim() {
        this._claim = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get claimInput() {
        return this._claim;
    }

    // match_type - computed: true, optional: true, required: false
    private _matchType?: string; 
    public get matchType() {
        return this.getStringAttribute('match_type');
    }
    public set matchType(value: string) {
        this._matchType = value;
    }
    public resetMatchType() {
        this._matchType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchTypeInput() {
        return this._matchType;
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
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

export class MappingRulePropertyList extends cdktn.ComplexList {
    public internalValue? : MappingRuleProperty[] | cdktn.IResolvable

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
    public get(index: number): MappingRulePropertyOutputReference {
        return new MappingRulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RulesConfigurationTypeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#rules CcIdentityPoolRoleAttachment#rules}
    */
    readonly rules?: MappingRuleProperty[] | cdktn.IResolvable;
}
export class RulesConfigurationTypePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RulesConfigurationTypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._rules?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rules = this._rules?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RulesConfigurationTypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._rules.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._rules.internalValue = value.rules;
        }
    }

    // rules - computed: true, optional: true, required: false
    private _rules = new MappingRulePropertyList(this, "rules", false);
    public get rules() {
        return this._rules;
    }
    public putRules(value: MappingRuleProperty[] | cdktn.IResolvable) {
        this._rules.internalValue = value;
    }
    public resetRules() {
        this._rules.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rulesInput() {
        return this._rules.internalValue;
    }
}
export interface RoleMappingProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#ambiguous_role_resolution CcIdentityPoolRoleAttachment#ambiguous_role_resolution}
    */
    readonly ambiguousRoleResolution?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#identity_provider CcIdentityPoolRoleAttachment#identity_provider}
    */
    readonly identityProvider?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#rules_configuration CcIdentityPoolRoleAttachment#rules_configuration}
    */
    readonly rulesConfiguration?: RulesConfigurationTypeProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#type CcIdentityPoolRoleAttachment#type}
    */
    readonly type?: string;
}
export class RoleMappingPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RoleMappingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ambiguousRoleResolution !== undefined) {
            hasAnyValues = true;
            internalValueResult.ambiguousRoleResolution = this._ambiguousRoleResolution;
        }
        if (this._identityProvider !== undefined) {
            hasAnyValues = true;
            internalValueResult.identityProvider = this._identityProvider;
        }
        if (this._rulesConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rulesConfiguration = this._rulesConfiguration?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RoleMappingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ambiguousRoleResolution = undefined;
            this._identityProvider = undefined;
            this._rulesConfiguration.internalValue = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ambiguousRoleResolution = value.ambiguousRoleResolution;
            this._identityProvider = value.identityProvider;
            this._rulesConfiguration.internalValue = value.rulesConfiguration;
            this._type = value.type;
        }
    }

    // ambiguous_role_resolution - computed: true, optional: true, required: false
    private _ambiguousRoleResolution?: string; 
    public get ambiguousRoleResolution() {
        return this.getStringAttribute('ambiguous_role_resolution');
    }
    public set ambiguousRoleResolution(value: string) {
        this._ambiguousRoleResolution = value;
    }
    public resetAmbiguousRoleResolution() {
        this._ambiguousRoleResolution = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ambiguousRoleResolutionInput() {
        return this._ambiguousRoleResolution;
    }

    // identity_provider - computed: true, optional: true, required: false
    private _identityProvider?: string; 
    public get identityProvider() {
        return this.getStringAttribute('identity_provider');
    }
    public set identityProvider(value: string) {
        this._identityProvider = value;
    }
    public resetIdentityProvider() {
        this._identityProvider = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identityProviderInput() {
        return this._identityProvider;
    }

    // rules_configuration - computed: true, optional: true, required: false
    private _rulesConfiguration = new RulesConfigurationTypePropertyOutputReference(this, "rules_configuration");
    public get rulesConfiguration() {
        return this._rulesConfiguration;
    }
    public putRulesConfiguration(value: RulesConfigurationTypeProperty) {
        this._rulesConfiguration.internalValue = value;
    }
    public resetRulesConfiguration() {
        this._rulesConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rulesConfigurationInput() {
        return this._rulesConfiguration.internalValue;
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

export class RoleMappingPropertyMap extends cdktn.ComplexMap {
    public internalValue? : { [key: string]: RoleMappingProperty } | cdktn.IResolvable

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
    public get(key: string): RoleMappingPropertyOutputReference {
        return new RoleMappingPropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
}
