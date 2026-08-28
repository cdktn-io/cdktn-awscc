// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rolesanywhere_profile

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcProfileProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rolesanywhere_profile#accept_role_session_name CcProfile#accept_role_session_name}
    */
    readonly acceptRoleSessionName?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rolesanywhere_profile#attribute_mappings CcProfile#attribute_mappings}
    */
    readonly attributeMappings?: CcProfile.AttributeMappingProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rolesanywhere_profile#duration_seconds CcProfile#duration_seconds}
    */
    readonly durationSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rolesanywhere_profile#enabled CcProfile#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rolesanywhere_profile#managed_policy_arns CcProfile#managed_policy_arns}
    */
    readonly managedPolicyArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rolesanywhere_profile#name CcProfile#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rolesanywhere_profile#require_instance_properties CcProfile#require_instance_properties}
    */
    readonly requireInstanceProperties?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rolesanywhere_profile#role_arns CcProfile#role_arns}
    */
    readonly roleArns: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rolesanywhere_profile#session_policy CcProfile#session_policy}
    */
    readonly sessionPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rolesanywhere_profile#tags CcProfile#tags}
    */
    readonly tags?: CcProfile.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rolesanywhere_profile awscc_rolesanywhere_profile}
*/
export class CcProfile extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_rolesanywhere_profile";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcProfile resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcProfile to import
    * @param importFromId The id of the existing CcProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rolesanywhere_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcProfile to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_rolesanywhere_profile", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rolesanywhere_profile awscc_rolesanywhere_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcProfileProps
    */
    public constructor(scope: Construct, id: string, config: CcProfileProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_rolesanywhere_profile',
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
        this._acceptRoleSessionName = config.acceptRoleSessionName;
        this._attributeMappings.internalValue = config.attributeMappings;
        this._durationSeconds = config.durationSeconds;
        this._enabled = config.enabled;
        this._managedPolicyArns = config.managedPolicyArns;
        this._name = config.name;
        this._requireInstanceProperties = config.requireInstanceProperties;
        this._roleArns = config.roleArns;
        this._sessionPolicy = config.sessionPolicy;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // accept_role_session_name - computed: true, optional: true, required: false
    private _acceptRoleSessionName?: boolean | cdktn.IResolvable; 
    public get acceptRoleSessionName() {
        return this.getBooleanAttribute('accept_role_session_name');
    }
    public set acceptRoleSessionName(value: boolean | cdktn.IResolvable) {
        this._acceptRoleSessionName = value;
    }
    public resetAcceptRoleSessionName() {
        this._acceptRoleSessionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acceptRoleSessionNameInput() {
        return this._acceptRoleSessionName;
    }

    // attribute_mappings - computed: true, optional: true, required: false
    private _attributeMappings = new CcProfile.AttributeMappingPropertyList(this, "attribute_mappings", false);
    public get attributeMappings() {
        return this._attributeMappings;
    }
    public putAttributeMappings(value: CcProfile.AttributeMappingProperty[] | cdktn.IResolvable) {
        this._attributeMappings.internalValue = value;
    }
    public resetAttributeMappings() {
        this._attributeMappings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributeMappingsInput() {
        return this._attributeMappings.internalValue;
    }

    // duration_seconds - computed: true, optional: true, required: false
    private _durationSeconds?: number; 
    public get durationSeconds() {
        return this.getNumberAttribute('duration_seconds');
    }
    public set durationSeconds(value: number) {
        this._durationSeconds = value;
    }
    public resetDurationSeconds() {
        this._durationSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get durationSecondsInput() {
        return this._durationSeconds;
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // managed_policy_arns - computed: true, optional: true, required: false
    private _managedPolicyArns?: string[]; 
    public get managedPolicyArns() {
        return this.getListAttribute('managed_policy_arns');
    }
    public set managedPolicyArns(value: string[]) {
        this._managedPolicyArns = value;
    }
    public resetManagedPolicyArns() {
        this._managedPolicyArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get managedPolicyArnsInput() {
        return this._managedPolicyArns;
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

    // profile_arn - computed: true, optional: false, required: false
    public get profileArn() {
        return this.getStringAttribute('profile_arn');
    }

    // profile_id - computed: true, optional: false, required: false
    public get profileId() {
        return this.getStringAttribute('profile_id');
    }

    // require_instance_properties - computed: true, optional: true, required: false
    private _requireInstanceProperties?: boolean | cdktn.IResolvable; 
    public get requireInstanceProperties() {
        return this.getBooleanAttribute('require_instance_properties');
    }
    public set requireInstanceProperties(value: boolean | cdktn.IResolvable) {
        this._requireInstanceProperties = value;
    }
    public resetRequireInstanceProperties() {
        this._requireInstanceProperties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requireInstancePropertiesInput() {
        return this._requireInstanceProperties;
    }

    // role_arns - computed: false, optional: false, required: true
    private _roleArns?: string[]; 
    public get roleArns() {
        return this.getListAttribute('role_arns');
    }
    public set roleArns(value: string[]) {
        this._roleArns = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnsInput() {
        return this._roleArns;
    }

    // session_policy - computed: true, optional: true, required: false
    private _sessionPolicy?: string; 
    public get sessionPolicy() {
        return this.getStringAttribute('session_policy');
    }
    public set sessionPolicy(value: string) {
        this._sessionPolicy = value;
    }
    public resetSessionPolicy() {
        this._sessionPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sessionPolicyInput() {
        return this._sessionPolicy;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcProfile.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcProfile.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            accept_role_session_name: cdktn.booleanToTerraform(this._acceptRoleSessionName),
            attribute_mappings: cdktn.listMapper(ccProfileAttributeMappingPropertyToTerraform, false)(this._attributeMappings.internalValue),
            duration_seconds: cdktn.numberToTerraform(this._durationSeconds),
            enabled: cdktn.booleanToTerraform(this._enabled),
            managed_policy_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._managedPolicyArns),
            name: cdktn.stringToTerraform(this._name),
            require_instance_properties: cdktn.booleanToTerraform(this._requireInstanceProperties),
            role_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._roleArns),
            session_policy: cdktn.stringToTerraform(this._sessionPolicy),
            tags: cdktn.listMapper(ccProfileTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            accept_role_session_name: {
                value: cdktn.booleanToHclTerraform(this._acceptRoleSessionName),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            attribute_mappings: {
                value: cdktn.listMapperHcl(ccProfileAttributeMappingPropertyToHclTerraform, false)(this._attributeMappings.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcProfile.AttributeMappingPropertyList",
            },
            duration_seconds: {
                value: cdktn.numberToHclTerraform(this._durationSeconds),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            enabled: {
                value: cdktn.booleanToHclTerraform(this._enabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            managed_policy_arns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._managedPolicyArns),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            require_instance_properties: {
                value: cdktn.booleanToHclTerraform(this._requireInstanceProperties),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            role_arns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._roleArns),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            session_policy: {
                value: cdktn.stringToHclTerraform(this._sessionPolicy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccProfileTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcProfile.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccProfileMappingRulePropertyToTerraform(struct?: CcProfile.MappingRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        specifier: cdktn.stringToTerraform(struct!.specifier),
    }
}


export function ccProfileMappingRulePropertyToHclTerraform(struct?: CcProfile.MappingRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        specifier: {
            value: cdktn.stringToHclTerraform(struct!.specifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccProfileAttributeMappingPropertyToTerraform(struct?: CcProfile.AttributeMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        certificate_field: cdktn.stringToTerraform(struct!.certificateField),
        mapping_rules: cdktn.listMapper(ccProfileMappingRulePropertyToTerraform, false)(struct!.mappingRules),
    }
}


export function ccProfileAttributeMappingPropertyToHclTerraform(struct?: CcProfile.AttributeMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        certificate_field: {
            value: cdktn.stringToHclTerraform(struct!.certificateField),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mapping_rules: {
            value: cdktn.listMapperHcl(ccProfileMappingRulePropertyToHclTerraform, false)(struct!.mappingRules),
            isBlock: true,
            type: "list",
            storageClassType: "MappingRulePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccProfileTagPropertyToTerraform(struct?: CcProfile.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccProfileTagPropertyToHclTerraform(struct?: CcProfile.TagProperty | cdktn.IResolvable): any {
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


export namespace CcProfile {
export interface MappingRuleProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rolesanywhere_profile#specifier CcProfile#specifier}
    */
    readonly specifier?: string;
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
        if (this._specifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.specifier = this._specifier;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MappingRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._specifier = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._specifier = value.specifier;
        }
    }

    // specifier - computed: true, optional: true, required: false
    private _specifier?: string; 
    public get specifier() {
        return this.getStringAttribute('specifier');
    }
    public set specifier(value: string) {
        this._specifier = value;
    }
    public resetSpecifier() {
        this._specifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get specifierInput() {
        return this._specifier;
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
export interface AttributeMappingProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rolesanywhere_profile#certificate_field CcProfile#certificate_field}
    */
    readonly certificateField?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rolesanywhere_profile#mapping_rules CcProfile#mapping_rules}
    */
    readonly mappingRules?: MappingRuleProperty[] | cdktn.IResolvable;
}
export class AttributeMappingPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AttributeMappingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._certificateField !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificateField = this._certificateField;
        }
        if (this._mappingRules?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mappingRules = this._mappingRules?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AttributeMappingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._certificateField = undefined;
            this._mappingRules.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._certificateField = value.certificateField;
            this._mappingRules.internalValue = value.mappingRules;
        }
    }

    // certificate_field - computed: true, optional: true, required: false
    private _certificateField?: string; 
    public get certificateField() {
        return this.getStringAttribute('certificate_field');
    }
    public set certificateField(value: string) {
        this._certificateField = value;
    }
    public resetCertificateField() {
        this._certificateField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateFieldInput() {
        return this._certificateField;
    }

    // mapping_rules - computed: true, optional: true, required: false
    private _mappingRules = new MappingRulePropertyList(this, "mapping_rules", false);
    public get mappingRules() {
        return this._mappingRules;
    }
    public putMappingRules(value: MappingRuleProperty[] | cdktn.IResolvable) {
        this._mappingRules.internalValue = value;
    }
    public resetMappingRules() {
        this._mappingRules.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mappingRulesInput() {
        return this._mappingRules.internalValue;
    }
}

export class AttributeMappingPropertyList extends cdktn.ComplexList {
    public internalValue? : AttributeMappingProperty[] | cdktn.IResolvable

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
    public get(index: number): AttributeMappingPropertyOutputReference {
        return new AttributeMappingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rolesanywhere_profile#key CcProfile#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/rolesanywhere_profile#value CcProfile#value}
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
