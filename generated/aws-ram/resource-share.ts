// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ram_resource_share

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcResourceShareProps extends cdktn.TerraformMetaArguments {
    /**
    * Specifies whether principals outside your organization in AWS Organizations can be associated with a resource share. A value of `true` lets you share with individual AWS accounts that are not in your organization. A value of `false` only has meaning if your account is a member of an AWS Organization. The default value is `true`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ram_resource_share#allow_external_principals CcResourceShare#allow_external_principals}
    */
    readonly allowExternalPrincipals?: boolean | cdktn.IResolvable;
    /**
    * Specifies the name of the resource share.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ram_resource_share#name CcResourceShare#name}
    */
    readonly name: string;
    /**
    * Specifies the [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the AWS RAM permission to associate with the resource share. If you do not specify an ARN for the permission, AWS RAM automatically attaches the default version of the permission for each resource type. You can associate only one permission with each resource type included in the resource share.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ram_resource_share#permission_arns CcResourceShare#permission_arns}
    */
    readonly permissionArns?: string[];
    /**
    * Specifies the principals to associate with the resource share. The possible values are:
    * 
    * - An AWS account ID
    * 
    * - An Amazon Resource Name (ARN) of an organization in AWS Organizations
    * 
    * - An ARN of an organizational unit (OU) in AWS Organizations
    * 
    * - An ARN of an IAM role
    * 
    * - An ARN of an IAM user
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ram_resource_share#principals CcResourceShare#principals}
    */
    readonly principals?: string[];
    /**
    * Specifies a list of one or more ARNs of the resources to associate with the resource share.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ram_resource_share#resource_arns CcResourceShare#resource_arns}
    */
    readonly resourceArns?: string[];
    /**
    * Specifies the configuration for the resource share
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ram_resource_share#resource_share_configuration CcResourceShare#resource_share_configuration}
    */
    readonly resourceShareConfiguration?: CcResourceShare.ResourceShareConfigurationProperty;
    /**
    * Specifies from which source accounts the service principal has access to the resources in this resource share.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ram_resource_share#sources CcResourceShare#sources}
    */
    readonly sources?: string[];
    /**
    * Specifies one or more tags to attach to the resource share itself. It doesn't attach the tags to the resources associated with the resource share.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ram_resource_share#tags CcResourceShare#tags}
    */
    readonly tags?: CcResourceShare.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ram_resource_share awscc_ram_resource_share}
*/
export class CcResourceShare extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ram_resource_share";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcResourceShare resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcResourceShare to import
    * @param importFromId The id of the existing CcResourceShare that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ram_resource_share#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcResourceShare to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ram_resource_share", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ram_resource_share awscc_ram_resource_share} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcResourceShareProps
    */
    public constructor(scope: Construct, id: string, config: CcResourceShareProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ram_resource_share',
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
        this._allowExternalPrincipals = config.allowExternalPrincipals;
        this._name = config.name;
        this._permissionArns = config.permissionArns;
        this._principals = config.principals;
        this._resourceArns = config.resourceArns;
        this._resourceShareConfiguration.internalValue = config.resourceShareConfiguration;
        this._sources = config.sources;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allow_external_principals - computed: true, optional: true, required: false
    private _allowExternalPrincipals?: boolean | cdktn.IResolvable; 
    public get allowExternalPrincipals() {
        return this.getBooleanAttribute('allow_external_principals');
    }
    public set allowExternalPrincipals(value: boolean | cdktn.IResolvable) {
        this._allowExternalPrincipals = value;
    }
    public resetAllowExternalPrincipals() {
        this._allowExternalPrincipals = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowExternalPrincipalsInput() {
        return this._allowExternalPrincipals;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
    }

    // feature_set - computed: true, optional: false, required: false
    public get featureSet() {
        return this.getStringAttribute('feature_set');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_updated_time - computed: true, optional: false, required: false
    public get lastUpdatedTime() {
        return this.getStringAttribute('last_updated_time');
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

    // owning_account_id - computed: true, optional: false, required: false
    public get owningAccountId() {
        return this.getStringAttribute('owning_account_id');
    }

    // permission_arns - computed: true, optional: true, required: false
    private _permissionArns?: string[]; 
    public get permissionArns() {
        return this.getListAttribute('permission_arns');
    }
    public set permissionArns(value: string[]) {
        this._permissionArns = value;
    }
    public resetPermissionArns() {
        this._permissionArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionArnsInput() {
        return this._permissionArns;
    }

    // principals - computed: true, optional: true, required: false
    private _principals?: string[]; 
    public get principals() {
        return this.getListAttribute('principals');
    }
    public set principals(value: string[]) {
        this._principals = value;
    }
    public resetPrincipals() {
        this._principals = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get principalsInput() {
        return this._principals;
    }

    // resource_arns - computed: true, optional: true, required: false
    private _resourceArns?: string[]; 
    public get resourceArns() {
        return this.getListAttribute('resource_arns');
    }
    public set resourceArns(value: string[]) {
        this._resourceArns = value;
    }
    public resetResourceArns() {
        this._resourceArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceArnsInput() {
        return this._resourceArns;
    }

    // resource_share_configuration - computed: true, optional: true, required: false
    private _resourceShareConfiguration = new CcResourceShare.ResourceShareConfigurationPropertyOutputReference(this, "resource_share_configuration");
    public get resourceShareConfiguration() {
        return this._resourceShareConfiguration;
    }
    public putResourceShareConfiguration(value: CcResourceShare.ResourceShareConfigurationProperty) {
        this._resourceShareConfiguration.internalValue = value;
    }
    public resetResourceShareConfiguration() {
        this._resourceShareConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceShareConfigurationInput() {
        return this._resourceShareConfiguration.internalValue;
    }

    // sources - computed: true, optional: true, required: false
    private _sources?: string[]; 
    public get sources() {
        return this.getListAttribute('sources');
    }
    public set sources(value: string[]) {
        this._sources = value;
    }
    public resetSources() {
        this._sources = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourcesInput() {
        return this._sources;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcResourceShare.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcResourceShare.TagProperty[] | cdktn.IResolvable) {
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
            allow_external_principals: cdktn.booleanToTerraform(this._allowExternalPrincipals),
            name: cdktn.stringToTerraform(this._name),
            permission_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._permissionArns),
            principals: cdktn.listMapper(cdktn.stringToTerraform, false)(this._principals),
            resource_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._resourceArns),
            resource_share_configuration: ccResourceShareResourceShareConfigurationPropertyToTerraform(this._resourceShareConfiguration.internalValue),
            sources: cdktn.listMapper(cdktn.stringToTerraform, false)(this._sources),
            tags: cdktn.listMapper(ccResourceShareTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            allow_external_principals: {
                value: cdktn.booleanToHclTerraform(this._allowExternalPrincipals),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            permission_arns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._permissionArns),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            principals: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._principals),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            resource_arns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._resourceArns),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            resource_share_configuration: {
                value: ccResourceShareResourceShareConfigurationPropertyToHclTerraform(this._resourceShareConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcResourceShare.ResourceShareConfigurationProperty",
            },
            sources: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._sources),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccResourceShareTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcResourceShare.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccResourceShareResourceShareConfigurationPropertyToTerraform(struct?: CcResourceShare.ResourceShareConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        exclusive_account_access: cdktn.booleanToTerraform(struct!.exclusiveAccountAccess),
        retain_sharing_on_account_leave_organization: cdktn.booleanToTerraform(struct!.retainSharingOnAccountLeaveOrganization),
    }
}


export function ccResourceShareResourceShareConfigurationPropertyToHclTerraform(struct?: CcResourceShare.ResourceShareConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        exclusive_account_access: {
            value: cdktn.booleanToHclTerraform(struct!.exclusiveAccountAccess),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        retain_sharing_on_account_leave_organization: {
            value: cdktn.booleanToHclTerraform(struct!.retainSharingOnAccountLeaveOrganization),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResourceShareTagPropertyToTerraform(struct?: CcResourceShare.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccResourceShareTagPropertyToHclTerraform(struct?: CcResourceShare.TagProperty | cdktn.IResolvable): any {
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


export namespace CcResourceShare {
export interface ResourceShareConfigurationProperty {
    /**
    * The resource share restricts access to an account
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ram_resource_share#exclusive_account_access CcResourceShare#exclusive_account_access}
    */
    readonly exclusiveAccountAccess?: boolean | cdktn.IResolvable;
    /**
    * Specifies whether the consumer account retains access to the resource share after leaving the organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ram_resource_share#retain_sharing_on_account_leave_organization CcResourceShare#retain_sharing_on_account_leave_organization}
    */
    readonly retainSharingOnAccountLeaveOrganization?: boolean | cdktn.IResolvable;
}
export class ResourceShareConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ResourceShareConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._exclusiveAccountAccess !== undefined) {
            hasAnyValues = true;
            internalValueResult.exclusiveAccountAccess = this._exclusiveAccountAccess;
        }
        if (this._retainSharingOnAccountLeaveOrganization !== undefined) {
            hasAnyValues = true;
            internalValueResult.retainSharingOnAccountLeaveOrganization = this._retainSharingOnAccountLeaveOrganization;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceShareConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._exclusiveAccountAccess = undefined;
            this._retainSharingOnAccountLeaveOrganization = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._exclusiveAccountAccess = value.exclusiveAccountAccess;
            this._retainSharingOnAccountLeaveOrganization = value.retainSharingOnAccountLeaveOrganization;
        }
    }

    // exclusive_account_access - computed: true, optional: true, required: false
    private _exclusiveAccountAccess?: boolean | cdktn.IResolvable; 
    public get exclusiveAccountAccess() {
        return this.getBooleanAttribute('exclusive_account_access');
    }
    public set exclusiveAccountAccess(value: boolean | cdktn.IResolvable) {
        this._exclusiveAccountAccess = value;
    }
    public resetExclusiveAccountAccess() {
        this._exclusiveAccountAccess = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exclusiveAccountAccessInput() {
        return this._exclusiveAccountAccess;
    }

    // retain_sharing_on_account_leave_organization - computed: true, optional: true, required: false
    private _retainSharingOnAccountLeaveOrganization?: boolean | cdktn.IResolvable; 
    public get retainSharingOnAccountLeaveOrganization() {
        return this.getBooleanAttribute('retain_sharing_on_account_leave_organization');
    }
    public set retainSharingOnAccountLeaveOrganization(value: boolean | cdktn.IResolvable) {
        this._retainSharingOnAccountLeaveOrganization = value;
    }
    public resetRetainSharingOnAccountLeaveOrganization() {
        this._retainSharingOnAccountLeaveOrganization = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retainSharingOnAccountLeaveOrganizationInput() {
        return this._retainSharingOnAccountLeaveOrganization;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ram_resource_share#key CcResourceShare#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ram_resource_share#value CcResourceShare#value}
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
