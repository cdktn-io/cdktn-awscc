// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ses_tenant

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTenantProps extends cdktn.TerraformMetaArguments {
    /**
    * The reputation configuration for the tenant. Sending status remains managed by SES.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ses_tenant#reputation_entity CcTenant#reputation_entity}
    */
    readonly reputationEntity?: CcTenant.ReputationEntityProperty;
    /**
    * The list of resources to associate with the tenant.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ses_tenant#resource_associations CcTenant#resource_associations}
    */
    readonly resourceAssociations?: CcTenant.ResourceAssociationProperty[] | cdktn.IResolvable;
    /**
    * The suppression attributes for the tenant.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ses_tenant#suppression_attributes CcTenant#suppression_attributes}
    */
    readonly suppressionAttributes?: CcTenant.SuppressionAttributesProperty;
    /**
    * The tags (keys and values) associated with the tenant.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ses_tenant#tags CcTenant#tags}
    */
    readonly tags?: CcTenant.TagProperty[] | cdktn.IResolvable;
    /**
    * The name of the tenant.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ses_tenant#tenant_name CcTenant#tenant_name}
    */
    readonly tenantName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ses_tenant awscc_ses_tenant}
*/
export class CcTenant extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ses_tenant";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTenant resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTenant to import
    * @param importFromId The id of the existing CcTenant that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ses_tenant#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTenant to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ses_tenant", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ses_tenant awscc_ses_tenant} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTenantProps
    */
    public constructor(scope: Construct, id: string, config: CcTenantProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ses_tenant',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.107.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._reputationEntity.internalValue = config.reputationEntity;
        this._resourceAssociations.internalValue = config.resourceAssociations;
        this._suppressionAttributes.internalValue = config.suppressionAttributes;
        this._tags.internalValue = config.tags;
        this._tenantName = config.tenantName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // reputation_entity - computed: true, optional: true, required: false
    private _reputationEntity = new CcTenant.ReputationEntityPropertyOutputReference(this, "reputation_entity");
    public get reputationEntity() {
        return this._reputationEntity;
    }
    public putReputationEntity(value: CcTenant.ReputationEntityProperty) {
        this._reputationEntity.internalValue = value;
    }
    public resetReputationEntity() {
        this._reputationEntity.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reputationEntityInput() {
        return this._reputationEntity.internalValue;
    }

    // resource_associations - computed: true, optional: true, required: false
    private _resourceAssociations = new CcTenant.ResourceAssociationPropertyList(this, "resource_associations", false);
    public get resourceAssociations() {
        return this._resourceAssociations;
    }
    public putResourceAssociations(value: CcTenant.ResourceAssociationProperty[] | cdktn.IResolvable) {
        this._resourceAssociations.internalValue = value;
    }
    public resetResourceAssociations() {
        this._resourceAssociations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceAssociationsInput() {
        return this._resourceAssociations.internalValue;
    }

    // suppression_attributes - computed: true, optional: true, required: false
    private _suppressionAttributes = new CcTenant.SuppressionAttributesPropertyOutputReference(this, "suppression_attributes");
    public get suppressionAttributes() {
        return this._suppressionAttributes;
    }
    public putSuppressionAttributes(value: CcTenant.SuppressionAttributesProperty) {
        this._suppressionAttributes.internalValue = value;
    }
    public resetSuppressionAttributes() {
        this._suppressionAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get suppressionAttributesInput() {
        return this._suppressionAttributes.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcTenant.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcTenant.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // tenant_name - computed: false, optional: false, required: true
    private _tenantName?: string; 
    public get tenantName() {
        return this.getStringAttribute('tenant_name');
    }
    public set tenantName(value: string) {
        this._tenantName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tenantNameInput() {
        return this._tenantName;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            reputation_entity: ccTenantReputationEntityPropertyToTerraform(this._reputationEntity.internalValue),
            resource_associations: cdktn.listMapper(ccTenantResourceAssociationPropertyToTerraform, false)(this._resourceAssociations.internalValue),
            suppression_attributes: ccTenantSuppressionAttributesPropertyToTerraform(this._suppressionAttributes.internalValue),
            tags: cdktn.listMapper(ccTenantTagPropertyToTerraform, false)(this._tags.internalValue),
            tenant_name: cdktn.stringToTerraform(this._tenantName),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            reputation_entity: {
                value: ccTenantReputationEntityPropertyToHclTerraform(this._reputationEntity.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTenant.ReputationEntityProperty",
            },
            resource_associations: {
                value: cdktn.listMapperHcl(ccTenantResourceAssociationPropertyToHclTerraform, false)(this._resourceAssociations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTenant.ResourceAssociationPropertyList",
            },
            suppression_attributes: {
                value: ccTenantSuppressionAttributesPropertyToHclTerraform(this._suppressionAttributes.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTenant.SuppressionAttributesProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccTenantTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTenant.TagPropertyList",
            },
            tenant_name: {
                value: cdktn.stringToHclTerraform(this._tenantName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTenantPolicyPropertyToTerraform(struct?: CcTenant.PolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        reputation_entity_policy: cdktn.stringToTerraform(struct!.reputationEntityPolicy),
    }
}


export function ccTenantPolicyPropertyToHclTerraform(struct?: CcTenant.PolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        reputation_entity_policy: {
            value: cdktn.stringToHclTerraform(struct!.reputationEntityPolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTenantReputationEntityPropertyToTerraform(struct?: CcTenant.ReputationEntityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        policy: ccTenantPolicyPropertyToTerraform(struct!.policy),
    }
}


export function ccTenantReputationEntityPropertyToHclTerraform(struct?: CcTenant.ReputationEntityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        policy: {
            value: ccTenantPolicyPropertyToHclTerraform(struct!.policy),
            isBlock: true,
            type: "struct",
            storageClassType: "PolicyProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTenantResourceAssociationPropertyToTerraform(struct?: CcTenant.ResourceAssociationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        resource_arn: cdktn.stringToTerraform(struct!.resourceArn),
    }
}


export function ccTenantResourceAssociationPropertyToHclTerraform(struct?: CcTenant.ResourceAssociationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        resource_arn: {
            value: cdktn.stringToHclTerraform(struct!.resourceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTenantSuppressionAttributesPropertyToTerraform(struct?: CcTenant.SuppressionAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        suppressed_reasons: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.suppressedReasons),
        suppression_scope: cdktn.stringToTerraform(struct!.suppressionScope),
    }
}


export function ccTenantSuppressionAttributesPropertyToHclTerraform(struct?: CcTenant.SuppressionAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        suppressed_reasons: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.suppressedReasons),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        suppression_scope: {
            value: cdktn.stringToHclTerraform(struct!.suppressionScope),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTenantTagPropertyToTerraform(struct?: CcTenant.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTenantTagPropertyToHclTerraform(struct?: CcTenant.TagProperty | cdktn.IResolvable): any {
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


export namespace CcTenant {
export interface PolicyProperty {
    /**
    * The ARN of an SES-managed reputation policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ses_tenant#reputation_entity_policy CcTenant#reputation_entity_policy}
    */
    readonly reputationEntityPolicy?: string;
}
export class PolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._reputationEntityPolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.reputationEntityPolicy = this._reputationEntityPolicy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._reputationEntityPolicy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._reputationEntityPolicy = value.reputationEntityPolicy;
        }
    }

    // reputation_entity_policy - computed: true, optional: true, required: false
    private _reputationEntityPolicy?: string; 
    public get reputationEntityPolicy() {
        return this.getStringAttribute('reputation_entity_policy');
    }
    public set reputationEntityPolicy(value: string) {
        this._reputationEntityPolicy = value;
    }
    public resetReputationEntityPolicy() {
        this._reputationEntityPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reputationEntityPolicyInput() {
        return this._reputationEntityPolicy;
    }
}
export interface ReputationEntityProperty {
    /**
    * The reputation policy for the tenant.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ses_tenant#policy CcTenant#policy}
    */
    readonly policy?: PolicyProperty;
}
export class ReputationEntityPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReputationEntityProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._policy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.policy = this._policy?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReputationEntityProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._policy.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._policy.internalValue = value.policy;
        }
    }

    // policy - computed: true, optional: true, required: false
    private _policy = new PolicyPropertyOutputReference(this, "policy");
    public get policy() {
        return this._policy;
    }
    public putPolicy(value: PolicyProperty) {
        this._policy.internalValue = value;
    }
    public resetPolicy() {
        this._policy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
        return this._policy.internalValue;
    }
}
export interface ResourceAssociationProperty {
    /**
    * The ARN of the resource to associate with the tenant
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ses_tenant#resource_arn CcTenant#resource_arn}
    */
    readonly resourceArn?: string;
}
export class ResourceAssociationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceAssociationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._resourceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceArn = this._resourceArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceAssociationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._resourceArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._resourceArn = value.resourceArn;
        }
    }

    // resource_arn - computed: true, optional: true, required: false
    private _resourceArn?: string; 
    public get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }
    public set resourceArn(value: string) {
        this._resourceArn = value;
    }
    public resetResourceArn() {
        this._resourceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceArnInput() {
        return this._resourceArn;
    }
}

export class ResourceAssociationPropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceAssociationProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceAssociationPropertyOutputReference {
        return new ResourceAssociationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SuppressionAttributesProperty {
    /**
    * The reasons that cause messages to be added to the suppression list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ses_tenant#suppressed_reasons CcTenant#suppressed_reasons}
    */
    readonly suppressedReasons?: string[];
    /**
    * The scope of the suppression list for the tenant.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ses_tenant#suppression_scope CcTenant#suppression_scope}
    */
    readonly suppressionScope?: string;
}
export class SuppressionAttributesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SuppressionAttributesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._suppressedReasons !== undefined) {
            hasAnyValues = true;
            internalValueResult.suppressedReasons = this._suppressedReasons;
        }
        if (this._suppressionScope !== undefined) {
            hasAnyValues = true;
            internalValueResult.suppressionScope = this._suppressionScope;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SuppressionAttributesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._suppressedReasons = undefined;
            this._suppressionScope = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._suppressedReasons = value.suppressedReasons;
            this._suppressionScope = value.suppressionScope;
        }
    }

    // suppressed_reasons - computed: true, optional: true, required: false
    private _suppressedReasons?: string[]; 
    public get suppressedReasons() {
        return cdktn.Fn.tolist(this.getListAttribute('suppressed_reasons'));
    }
    public set suppressedReasons(value: string[]) {
        this._suppressedReasons = value;
    }
    public resetSuppressedReasons() {
        this._suppressedReasons = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get suppressedReasonsInput() {
        return this._suppressedReasons;
    }

    // suppression_scope - computed: true, optional: true, required: false
    private _suppressionScope?: string; 
    public get suppressionScope() {
        return this.getStringAttribute('suppression_scope');
    }
    public set suppressionScope(value: string) {
        this._suppressionScope = value;
    }
    public resetSuppressionScope() {
        this._suppressionScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get suppressionScopeInput() {
        return this._suppressionScope;
    }
}
export interface TagProperty {
    /**
    * The key of the key-value tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ses_tenant#key CcTenant#key}
    */
    readonly key?: string;
    /**
    * The value of the key-value tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/ses_tenant#value CcTenant#value}
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
