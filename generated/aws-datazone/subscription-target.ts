// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_subscription_target

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSubscriptionTargetProps extends cdktn.TerraformMetaArguments {
    /**
    * The asset types that can be included in the subscription target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_subscription_target#applicable_asset_types CcSubscriptionTarget#applicable_asset_types}
    */
    readonly applicableAssetTypes: string[];
    /**
    * The authorized principals of the subscription target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_subscription_target#authorized_principals CcSubscriptionTarget#authorized_principals}
    */
    readonly authorizedPrincipals: string[];
    /**
    * The ID of the Amazon DataZone domain in which subscription target would be created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_subscription_target#domain_identifier CcSubscriptionTarget#domain_identifier}
    */
    readonly domainIdentifier: string;
    /**
    * The ID of the environment in which subscription target would be created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_subscription_target#environment_identifier CcSubscriptionTarget#environment_identifier}
    */
    readonly environmentIdentifier: string;
    /**
    * The manage access role that is used to create the subscription target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_subscription_target#manage_access_role CcSubscriptionTarget#manage_access_role}
    */
    readonly manageAccessRole?: string;
    /**
    * The name of the subscription target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_subscription_target#name CcSubscriptionTarget#name}
    */
    readonly name: string;
    /**
    * The provider of the subscription target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_subscription_target#provider_name CcSubscriptionTarget#provider_name}
    */
    readonly providerName?: string;
    /**
    * The configuration of the subscription target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_subscription_target#subscription_target_config CcSubscriptionTarget#subscription_target_config}
    */
    readonly subscriptionTargetConfig: CcSubscriptionTarget.SubscriptionTargetFormProperty[] | cdktn.IResolvable;
    /**
    * The type of the subscription target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_subscription_target#type CcSubscriptionTarget#type}
    */
    readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_subscription_target awscc_datazone_subscription_target}
*/
export class CcSubscriptionTarget extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_datazone_subscription_target";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSubscriptionTarget resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSubscriptionTarget to import
    * @param importFromId The id of the existing CcSubscriptionTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_subscription_target#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSubscriptionTarget to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datazone_subscription_target", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_subscription_target awscc_datazone_subscription_target} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSubscriptionTargetProps
    */
    public constructor(scope: Construct, id: string, config: CcSubscriptionTargetProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_datazone_subscription_target',
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
        this._applicableAssetTypes = config.applicableAssetTypes;
        this._authorizedPrincipals = config.authorizedPrincipals;
        this._domainIdentifier = config.domainIdentifier;
        this._environmentIdentifier = config.environmentIdentifier;
        this._manageAccessRole = config.manageAccessRole;
        this._name = config.name;
        this._providerName = config.providerName;
        this._subscriptionTargetConfig.internalValue = config.subscriptionTargetConfig;
        this._type = config.type;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // applicable_asset_types - computed: false, optional: false, required: true
    private _applicableAssetTypes?: string[]; 
    public get applicableAssetTypes() {
        return this.getListAttribute('applicable_asset_types');
    }
    public set applicableAssetTypes(value: string[]) {
        this._applicableAssetTypes = value;
    }
    // Temporarily expose input value. Use with caution.
    public get applicableAssetTypesInput() {
        return this._applicableAssetTypes;
    }

    // authorized_principals - computed: false, optional: false, required: true
    private _authorizedPrincipals?: string[]; 
    public get authorizedPrincipals() {
        return this.getListAttribute('authorized_principals');
    }
    public set authorizedPrincipals(value: string[]) {
        this._authorizedPrincipals = value;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizedPrincipalsInput() {
        return this._authorizedPrincipals;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // created_by - computed: true, optional: false, required: false
    public get createdBy() {
        return this.getStringAttribute('created_by');
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

    // environment_id - computed: true, optional: false, required: false
    public get environmentId() {
        return this.getStringAttribute('environment_id');
    }

    // environment_identifier - computed: false, optional: false, required: true
    private _environmentIdentifier?: string; 
    public get environmentIdentifier() {
        return this.getStringAttribute('environment_identifier');
    }
    public set environmentIdentifier(value: string) {
        this._environmentIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentIdentifierInput() {
        return this._environmentIdentifier;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // manage_access_role - computed: true, optional: true, required: false
    private _manageAccessRole?: string; 
    public get manageAccessRole() {
        return this.getStringAttribute('manage_access_role');
    }
    public set manageAccessRole(value: string) {
        this._manageAccessRole = value;
    }
    public resetManageAccessRole() {
        this._manageAccessRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get manageAccessRoleInput() {
        return this._manageAccessRole;
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

    // project_id - computed: true, optional: false, required: false
    public get projectId() {
        return this.getStringAttribute('project_id');
    }

    // provider_name - computed: true, optional: true, required: false
    private _providerName?: string; 
    public get providerName() {
        return this.getStringAttribute('provider_name');
    }
    public set providerName(value: string) {
        this._providerName = value;
    }
    public resetProviderName() {
        this._providerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get providerNameInput() {
        return this._providerName;
    }

    // subscription_target_config - computed: false, optional: false, required: true
    private _subscriptionTargetConfig = new CcSubscriptionTarget.SubscriptionTargetFormPropertyList(this, "subscription_target_config", false);
    public get subscriptionTargetConfig() {
        return this._subscriptionTargetConfig;
    }
    public putSubscriptionTargetConfig(value: CcSubscriptionTarget.SubscriptionTargetFormProperty[] | cdktn.IResolvable) {
        this._subscriptionTargetConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subscriptionTargetConfigInput() {
        return this._subscriptionTargetConfig.internalValue;
    }

    // subscription_target_id - computed: true, optional: false, required: false
    public get subscriptionTargetId() {
        return this.getStringAttribute('subscription_target_id');
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // updated_by - computed: true, optional: false, required: false
    public get updatedBy() {
        return this.getStringAttribute('updated_by');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            applicable_asset_types: cdktn.listMapper(cdktn.stringToTerraform, false)(this._applicableAssetTypes),
            authorized_principals: cdktn.listMapper(cdktn.stringToTerraform, false)(this._authorizedPrincipals),
            domain_identifier: cdktn.stringToTerraform(this._domainIdentifier),
            environment_identifier: cdktn.stringToTerraform(this._environmentIdentifier),
            manage_access_role: cdktn.stringToTerraform(this._manageAccessRole),
            name: cdktn.stringToTerraform(this._name),
            provider_name: cdktn.stringToTerraform(this._providerName),
            subscription_target_config: cdktn.listMapper(ccSubscriptionTargetSubscriptionTargetFormPropertyToTerraform, false)(this._subscriptionTargetConfig.internalValue),
            type: cdktn.stringToTerraform(this._type),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            applicable_asset_types: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._applicableAssetTypes),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            authorized_principals: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._authorizedPrincipals),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
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
            manage_access_role: {
                value: cdktn.stringToHclTerraform(this._manageAccessRole),
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
            provider_name: {
                value: cdktn.stringToHclTerraform(this._providerName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            subscription_target_config: {
                value: cdktn.listMapperHcl(ccSubscriptionTargetSubscriptionTargetFormPropertyToHclTerraform, false)(this._subscriptionTargetConfig.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcSubscriptionTarget.SubscriptionTargetFormPropertyList",
            },
            type: {
                value: cdktn.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccSubscriptionTargetSubscriptionTargetFormPropertyToTerraform(struct?: CcSubscriptionTarget.SubscriptionTargetFormProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content: cdktn.stringToTerraform(struct!.content),
        form_name: cdktn.stringToTerraform(struct!.formName),
    }
}


export function ccSubscriptionTargetSubscriptionTargetFormPropertyToHclTerraform(struct?: CcSubscriptionTarget.SubscriptionTargetFormProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content: {
            value: cdktn.stringToHclTerraform(struct!.content),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        form_name: {
            value: cdktn.stringToHclTerraform(struct!.formName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcSubscriptionTarget {
export interface SubscriptionTargetFormProperty {
    /**
    * The content of the subscription target configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_subscription_target#content CcSubscriptionTarget#content}
    */
    readonly content: string;
    /**
    * The form name included in the subscription target configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_subscription_target#form_name CcSubscriptionTarget#form_name}
    */
    readonly formName: string;
}
export class SubscriptionTargetFormPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SubscriptionTargetFormProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._content !== undefined) {
            hasAnyValues = true;
            internalValueResult.content = this._content;
        }
        if (this._formName !== undefined) {
            hasAnyValues = true;
            internalValueResult.formName = this._formName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SubscriptionTargetFormProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._content = undefined;
            this._formName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._content = value.content;
            this._formName = value.formName;
        }
    }

    // content - computed: false, optional: false, required: true
    private _content?: string; 
    public get content() {
        return this.getStringAttribute('content');
    }
    public set content(value: string) {
        this._content = value;
    }
    // Temporarily expose input value. Use with caution.
    public get contentInput() {
        return this._content;
    }

    // form_name - computed: false, optional: false, required: true
    private _formName?: string; 
    public get formName() {
        return this.getStringAttribute('form_name');
    }
    public set formName(value: string) {
        this._formName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get formNameInput() {
        return this._formName;
    }
}

export class SubscriptionTargetFormPropertyList extends cdktn.ComplexList {
    public internalValue? : SubscriptionTargetFormProperty[] | cdktn.IResolvable

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
    public get(index: number): SubscriptionTargetFormPropertyOutputReference {
        return new SubscriptionTargetFormPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
