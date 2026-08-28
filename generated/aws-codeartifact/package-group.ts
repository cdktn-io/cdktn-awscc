// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeartifact_package_group

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPackageGroupProps extends cdktn.TerraformMetaArguments {
    /**
    * The contact info of the package group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeartifact_package_group#contact_info CcPackageGroup#contact_info}
    */
    readonly contactInfo?: string;
    /**
    * The text description of the package group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeartifact_package_group#description CcPackageGroup#description}
    */
    readonly description?: string;
    /**
    * The name of the domain that contains the package group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeartifact_package_group#domain_name CcPackageGroup#domain_name}
    */
    readonly domainName: string;
    /**
    * The 12-digit account ID of the AWS account that owns the domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeartifact_package_group#domain_owner CcPackageGroup#domain_owner}
    */
    readonly domainOwner?: string;
    /**
    * The package origin configuration of the package group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeartifact_package_group#origin_configuration CcPackageGroup#origin_configuration}
    */
    readonly originConfiguration?: CcPackageGroup.OriginConfigurationProperty;
    /**
    * The package group pattern that is used to gather packages.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeartifact_package_group#pattern CcPackageGroup#pattern}
    */
    readonly pattern: string;
    /**
    * An array of key-value pairs to apply to the package group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeartifact_package_group#tags CcPackageGroup#tags}
    */
    readonly tags?: CcPackageGroup.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeartifact_package_group awscc_codeartifact_package_group}
*/
export class CcPackageGroup extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_codeartifact_package_group";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPackageGroup resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPackageGroup to import
    * @param importFromId The id of the existing CcPackageGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeartifact_package_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPackageGroup to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_codeartifact_package_group", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeartifact_package_group awscc_codeartifact_package_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPackageGroupProps
    */
    public constructor(scope: Construct, id: string, config: CcPackageGroupProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_codeartifact_package_group',
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
        this._contactInfo = config.contactInfo;
        this._description = config.description;
        this._domainName = config.domainName;
        this._domainOwner = config.domainOwner;
        this._originConfiguration.internalValue = config.originConfiguration;
        this._pattern = config.pattern;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // contact_info - computed: true, optional: true, required: false
    private _contactInfo?: string; 
    public get contactInfo() {
        return this.getStringAttribute('contact_info');
    }
    public set contactInfo(value: string) {
        this._contactInfo = value;
    }
    public resetContactInfo() {
        this._contactInfo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contactInfoInput() {
        return this._contactInfo;
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

    // domain_name - computed: false, optional: false, required: true
    private _domainName?: string; 
    public get domainName() {
        return this.getStringAttribute('domain_name');
    }
    public set domainName(value: string) {
        this._domainName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainNameInput() {
        return this._domainName;
    }

    // domain_owner - computed: true, optional: true, required: false
    private _domainOwner?: string; 
    public get domainOwner() {
        return this.getStringAttribute('domain_owner');
    }
    public set domainOwner(value: string) {
        this._domainOwner = value;
    }
    public resetDomainOwner() {
        this._domainOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainOwnerInput() {
        return this._domainOwner;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // origin_configuration - computed: true, optional: true, required: false
    private _originConfiguration = new CcPackageGroup.OriginConfigurationPropertyOutputReference(this, "origin_configuration");
    public get originConfiguration() {
        return this._originConfiguration;
    }
    public putOriginConfiguration(value: CcPackageGroup.OriginConfigurationProperty) {
        this._originConfiguration.internalValue = value;
    }
    public resetOriginConfiguration() {
        this._originConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get originConfigurationInput() {
        return this._originConfiguration.internalValue;
    }

    // pattern - computed: false, optional: false, required: true
    private _pattern?: string; 
    public get pattern() {
        return this.getStringAttribute('pattern');
    }
    public set pattern(value: string) {
        this._pattern = value;
    }
    // Temporarily expose input value. Use with caution.
    public get patternInput() {
        return this._pattern;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcPackageGroup.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcPackageGroup.TagProperty[] | cdktn.IResolvable) {
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
            contact_info: cdktn.stringToTerraform(this._contactInfo),
            description: cdktn.stringToTerraform(this._description),
            domain_name: cdktn.stringToTerraform(this._domainName),
            domain_owner: cdktn.stringToTerraform(this._domainOwner),
            origin_configuration: ccPackageGroupOriginConfigurationPropertyToTerraform(this._originConfiguration.internalValue),
            pattern: cdktn.stringToTerraform(this._pattern),
            tags: cdktn.listMapper(ccPackageGroupTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            contact_info: {
                value: cdktn.stringToHclTerraform(this._contactInfo),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            domain_name: {
                value: cdktn.stringToHclTerraform(this._domainName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            domain_owner: {
                value: cdktn.stringToHclTerraform(this._domainOwner),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            origin_configuration: {
                value: ccPackageGroupOriginConfigurationPropertyToHclTerraform(this._originConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPackageGroup.OriginConfigurationProperty",
            },
            pattern: {
                value: cdktn.stringToHclTerraform(this._pattern),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccPackageGroupTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcPackageGroup.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccPackageGroupRestrictionTypePropertyToTerraform(struct?: CcPackageGroup.RestrictionTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        repositories: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.repositories),
        restriction_mode: cdktn.stringToTerraform(struct!.restrictionMode),
    }
}


export function ccPackageGroupRestrictionTypePropertyToHclTerraform(struct?: CcPackageGroup.RestrictionTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        repositories: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.repositories),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        restriction_mode: {
            value: cdktn.stringToHclTerraform(struct!.restrictionMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPackageGroupInternalUpstreamPropertyToTerraform(struct?: CcPackageGroup.InternalUpstreamProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        repositories: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.repositories),
        restriction_mode: cdktn.stringToTerraform(struct!.restrictionMode),
    }
}


export function ccPackageGroupInternalUpstreamPropertyToHclTerraform(struct?: CcPackageGroup.InternalUpstreamProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        repositories: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.repositories),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        restriction_mode: {
            value: cdktn.stringToHclTerraform(struct!.restrictionMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPackageGroupPublishPropertyToTerraform(struct?: CcPackageGroup.PublishProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        repositories: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.repositories),
        restriction_mode: cdktn.stringToTerraform(struct!.restrictionMode),
    }
}


export function ccPackageGroupPublishPropertyToHclTerraform(struct?: CcPackageGroup.PublishProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        repositories: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.repositories),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        restriction_mode: {
            value: cdktn.stringToHclTerraform(struct!.restrictionMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPackageGroupRestrictionsPropertyToTerraform(struct?: CcPackageGroup.RestrictionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        external_upstream: ccPackageGroupRestrictionTypePropertyToTerraform(struct!.externalUpstream),
        internal_upstream: ccPackageGroupInternalUpstreamPropertyToTerraform(struct!.internalUpstream),
        publish: ccPackageGroupPublishPropertyToTerraform(struct!.publish),
    }
}


export function ccPackageGroupRestrictionsPropertyToHclTerraform(struct?: CcPackageGroup.RestrictionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        external_upstream: {
            value: ccPackageGroupRestrictionTypePropertyToHclTerraform(struct!.externalUpstream),
            isBlock: true,
            type: "struct",
            storageClassType: "RestrictionTypeProperty",
        },
        internal_upstream: {
            value: ccPackageGroupInternalUpstreamPropertyToHclTerraform(struct!.internalUpstream),
            isBlock: true,
            type: "struct",
            storageClassType: "InternalUpstreamProperty",
        },
        publish: {
            value: ccPackageGroupPublishPropertyToHclTerraform(struct!.publish),
            isBlock: true,
            type: "struct",
            storageClassType: "PublishProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPackageGroupOriginConfigurationPropertyToTerraform(struct?: CcPackageGroup.OriginConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        restrictions: ccPackageGroupRestrictionsPropertyToTerraform(struct!.restrictions),
    }
}


export function ccPackageGroupOriginConfigurationPropertyToHclTerraform(struct?: CcPackageGroup.OriginConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        restrictions: {
            value: ccPackageGroupRestrictionsPropertyToHclTerraform(struct!.restrictions),
            isBlock: true,
            type: "struct",
            storageClassType: "RestrictionsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPackageGroupTagPropertyToTerraform(struct?: CcPackageGroup.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccPackageGroupTagPropertyToHclTerraform(struct?: CcPackageGroup.TagProperty | cdktn.IResolvable): any {
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


export namespace CcPackageGroup {
export interface RestrictionTypeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeartifact_package_group#repositories CcPackageGroup#repositories}
    */
    readonly repositories?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeartifact_package_group#restriction_mode CcPackageGroup#restriction_mode}
    */
    readonly restrictionMode?: string;
}
export class RestrictionTypePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RestrictionTypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._repositories !== undefined) {
            hasAnyValues = true;
            internalValueResult.repositories = this._repositories;
        }
        if (this._restrictionMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.restrictionMode = this._restrictionMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestrictionTypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._repositories = undefined;
            this._restrictionMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._repositories = value.repositories;
            this._restrictionMode = value.restrictionMode;
        }
    }

    // repositories - computed: true, optional: true, required: false
    private _repositories?: string[]; 
    public get repositories() {
        return this.getListAttribute('repositories');
    }
    public set repositories(value: string[]) {
        this._repositories = value;
    }
    public resetRepositories() {
        this._repositories = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoriesInput() {
        return this._repositories;
    }

    // restriction_mode - computed: true, optional: true, required: false
    private _restrictionMode?: string; 
    public get restrictionMode() {
        return this.getStringAttribute('restriction_mode');
    }
    public set restrictionMode(value: string) {
        this._restrictionMode = value;
    }
    public resetRestrictionMode() {
        this._restrictionMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get restrictionModeInput() {
        return this._restrictionMode;
    }
}
export interface InternalUpstreamProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeartifact_package_group#repositories CcPackageGroup#repositories}
    */
    readonly repositories?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeartifact_package_group#restriction_mode CcPackageGroup#restriction_mode}
    */
    readonly restrictionMode?: string;
}
export class InternalUpstreamPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InternalUpstreamProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._repositories !== undefined) {
            hasAnyValues = true;
            internalValueResult.repositories = this._repositories;
        }
        if (this._restrictionMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.restrictionMode = this._restrictionMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InternalUpstreamProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._repositories = undefined;
            this._restrictionMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._repositories = value.repositories;
            this._restrictionMode = value.restrictionMode;
        }
    }

    // repositories - computed: true, optional: true, required: false
    private _repositories?: string[]; 
    public get repositories() {
        return this.getListAttribute('repositories');
    }
    public set repositories(value: string[]) {
        this._repositories = value;
    }
    public resetRepositories() {
        this._repositories = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoriesInput() {
        return this._repositories;
    }

    // restriction_mode - computed: true, optional: true, required: false
    private _restrictionMode?: string; 
    public get restrictionMode() {
        return this.getStringAttribute('restriction_mode');
    }
    public set restrictionMode(value: string) {
        this._restrictionMode = value;
    }
    public resetRestrictionMode() {
        this._restrictionMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get restrictionModeInput() {
        return this._restrictionMode;
    }
}
export interface PublishProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeartifact_package_group#repositories CcPackageGroup#repositories}
    */
    readonly repositories?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeartifact_package_group#restriction_mode CcPackageGroup#restriction_mode}
    */
    readonly restrictionMode?: string;
}
export class PublishPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PublishProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._repositories !== undefined) {
            hasAnyValues = true;
            internalValueResult.repositories = this._repositories;
        }
        if (this._restrictionMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.restrictionMode = this._restrictionMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PublishProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._repositories = undefined;
            this._restrictionMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._repositories = value.repositories;
            this._restrictionMode = value.restrictionMode;
        }
    }

    // repositories - computed: true, optional: true, required: false
    private _repositories?: string[]; 
    public get repositories() {
        return this.getListAttribute('repositories');
    }
    public set repositories(value: string[]) {
        this._repositories = value;
    }
    public resetRepositories() {
        this._repositories = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoriesInput() {
        return this._repositories;
    }

    // restriction_mode - computed: true, optional: true, required: false
    private _restrictionMode?: string; 
    public get restrictionMode() {
        return this.getStringAttribute('restriction_mode');
    }
    public set restrictionMode(value: string) {
        this._restrictionMode = value;
    }
    public resetRestrictionMode() {
        this._restrictionMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get restrictionModeInput() {
        return this._restrictionMode;
    }
}
export interface RestrictionsProperty {
    /**
    * The external upstream restriction determines if new package versions can be ingested or retained from external connections.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeartifact_package_group#external_upstream CcPackageGroup#external_upstream}
    */
    readonly externalUpstream?: RestrictionTypeProperty;
    /**
    * The internal upstream restriction determines if new package versions can be ingested or retained from upstream repositories.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeartifact_package_group#internal_upstream CcPackageGroup#internal_upstream}
    */
    readonly internalUpstream?: InternalUpstreamProperty;
    /**
    * The publish restriction determines if new package versions can be published.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeartifact_package_group#publish CcPackageGroup#publish}
    */
    readonly publish?: PublishProperty;
}
export class RestrictionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RestrictionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._externalUpstream?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.externalUpstream = this._externalUpstream?.internalValue;
        }
        if (this._internalUpstream?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.internalUpstream = this._internalUpstream?.internalValue;
        }
        if (this._publish?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.publish = this._publish?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RestrictionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._externalUpstream.internalValue = undefined;
            this._internalUpstream.internalValue = undefined;
            this._publish.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._externalUpstream.internalValue = value.externalUpstream;
            this._internalUpstream.internalValue = value.internalUpstream;
            this._publish.internalValue = value.publish;
        }
    }

    // external_upstream - computed: true, optional: true, required: false
    private _externalUpstream = new RestrictionTypePropertyOutputReference(this, "external_upstream");
    public get externalUpstream() {
        return this._externalUpstream;
    }
    public putExternalUpstream(value: RestrictionTypeProperty) {
        this._externalUpstream.internalValue = value;
    }
    public resetExternalUpstream() {
        this._externalUpstream.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get externalUpstreamInput() {
        return this._externalUpstream.internalValue;
    }

    // internal_upstream - computed: true, optional: true, required: false
    private _internalUpstream = new InternalUpstreamPropertyOutputReference(this, "internal_upstream");
    public get internalUpstream() {
        return this._internalUpstream;
    }
    public putInternalUpstream(value: InternalUpstreamProperty) {
        this._internalUpstream.internalValue = value;
    }
    public resetInternalUpstream() {
        this._internalUpstream.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get internalUpstreamInput() {
        return this._internalUpstream.internalValue;
    }

    // publish - computed: true, optional: true, required: false
    private _publish = new PublishPropertyOutputReference(this, "publish");
    public get publish() {
        return this._publish;
    }
    public putPublish(value: PublishProperty) {
        this._publish.internalValue = value;
    }
    public resetPublish() {
        this._publish.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publishInput() {
        return this._publish.internalValue;
    }
}
export interface OriginConfigurationProperty {
    /**
    * The origin configuration that is applied to the package group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeartifact_package_group#restrictions CcPackageGroup#restrictions}
    */
    readonly restrictions?: RestrictionsProperty;
}
export class OriginConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OriginConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._restrictions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.restrictions = this._restrictions?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OriginConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._restrictions.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._restrictions.internalValue = value.restrictions;
        }
    }

    // restrictions - computed: true, optional: true, required: false
    private _restrictions = new RestrictionsPropertyOutputReference(this, "restrictions");
    public get restrictions() {
        return this._restrictions;
    }
    public putRestrictions(value: RestrictionsProperty) {
        this._restrictions.internalValue = value;
    }
    public resetRestrictions() {
        this._restrictions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get restrictionsInput() {
        return this._restrictions.internalValue;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeartifact_package_group#key CcPackageGroup#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeartifact_package_group#value CcPackageGroup#value}
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
